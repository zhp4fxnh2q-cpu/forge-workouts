import { useState, useMemo, useEffect, useCallback } from "react";

var C={bg:"#0B0B0D",sf:"#141418",sf2:"#1C1C22",bdr:"#28282F",acc:"#F59E0B",grn:"#34D399",red:"#F87171",blu:"#60A5FA",pur:"#C084FC",orn:"#FB923C",txt:"#FAFAFA",dim:"#6B7280",mid:"#9CA3AF",bar:"#1A1A1F"};
var FD="'Bebas Neue',sans-serif";var FB="'DM Sans',sans-serif";

// ═══ CSS Keyframe animations (inline style.animation since className gets stripped) ═══
var CSS_ANIM = "\n@keyframes fBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}\n@keyframes fPulse{0%,100%{opacity:0.5}50%{opacity:1}}\n@keyframes fSwing{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}\n@keyframes fRun{0%,100%{transform:translateX(0)}50%{transform:translateX(3px)}}\n@keyframes fShine{0%{background-position:200% center}100%{background-position:-200% center}}\n@keyframes fAP{0%,100%{transform:translateY(0)}50%{transform:translateY(7px)}}\n@keyframes fAPu{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}\n@keyframes fAC{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}\n@keyframes fAL{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}\n@keyframes fBD{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}\n@keyframes fBU{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}\n@keyframes fBS{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}\n@keyframes fLR{0%,100%{transform:translateY(0)}35%{transform:translateY(-5px)}}\n@keyframes fHP{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}\n@keyframes fPD{0%,100%{transform:translateY(0)}25%{transform:translateY(3px)}75%{transform:translateY(-3px)}}\n@keyframes fKB{0%,100%{transform:translateX(0)}50%{transform:translateX(6px)}}\n@keyframes fAF{0%,100%{transform:scaleX(1)}50%{transform:scaleX(0.82)}}\n";

function MoveIcon(props) {
  var s=props.type||"press";var sz=props.size||48;var cl=C.acc;
  var bobStyle={width:sz,height:sz,display:"flex",alignItems:"center",justifyContent:"center",animation:"fBob 1.2s ease-in-out infinite"};
  var swingStyle={width:sz,height:sz,display:"flex",alignItems:"center",justifyContent:"center",animation:"fSwing 1s ease-in-out infinite",transformOrigin:"center bottom"};
  var pulseStyle={width:sz,height:sz,display:"flex",alignItems:"center",justifyContent:"center",animation:"fPulse 1.5s ease-in-out infinite"};
  var runStyle={width:sz,height:sz,display:"flex",alignItems:"center",justifyContent:"center",animation:"fRun 0.5s ease-in-out infinite"};
  if(s==="press")return(<div style={bobStyle}>
    <svg width={sz} height={sz} viewBox="0 0 48 48"><circle cx="24" cy="10" r="4" fill={cl}/><line x1="24" y1="14" x2="24" y2="28" stroke={cl} strokeWidth="2"/><line x1="24" y1="28" x2="18" y2="40" stroke={cl} strokeWidth="2"/><line x1="24" y1="28" x2="30" y2="40" stroke={cl} strokeWidth="2"/><line x1="12" y1="18" x2="36" y2="18" stroke={cl} strokeWidth="2"/><rect x="8" y="15" width="8" height="4" rx="1" fill={cl} opacity="0.7"/><rect x="32" y="15" width="8" height="4" rx="1" fill={cl} opacity="0.7"/></svg>
  </div>);
  if(s==="pull")return(<div style={bobStyle}>
    <svg width={sz} height={sz} viewBox="0 0 48 48"><rect x="10" y="2" width="28" height="3" rx="1" fill={cl} opacity="0.4"/><circle cx="24" cy="16" r="4" fill={cl}/><line x1="24" y1="20" x2="24" y2="32" stroke={cl} strokeWidth="2"/><line x1="18" y1="5" x2="21" y2="18" stroke={cl} strokeWidth="2"/><line x1="30" y1="5" x2="27" y2="18" stroke={cl} strokeWidth="2"/><line x1="24" y1="32" x2="18" y2="42" stroke={cl} strokeWidth="2"/><line x1="24" y1="32" x2="30" y2="42" stroke={cl} strokeWidth="2"/></svg>
  </div>);
  if(s==="squat")return(<div style={swingStyle}>
    <svg width={sz} height={sz} viewBox="0 0 48 48"><circle cx="24" cy="6" r="4" fill={cl}/><line x1="24" y1="10" x2="24" y2="26" stroke={cl} strokeWidth="2"/><line x1="24" y1="26" x2="16" y2="40" stroke={cl} strokeWidth="2"/><line x1="24" y1="26" x2="32" y2="40" stroke={cl} strokeWidth="2"/><rect x="10" y="8" width="28" height="3" rx="1" fill={cl} opacity="0.5"/></svg>
  </div>);
  if(s==="curl")return(<div style={pulseStyle}>
    <svg width={sz} height={sz} viewBox="0 0 48 48"><circle cx="24" cy="8" r="4" fill={cl}/><line x1="24" y1="12" x2="24" y2="30" stroke={cl} strokeWidth="2"/><line x1="24" y1="20" x2="16" y2="24" stroke={cl} strokeWidth="2"/><line x1="24" y1="20" x2="32" y2="24" stroke={cl} strokeWidth="2"/><rect x="12" y="22" width="5" height="5" rx="1" fill={cl} opacity="0.7"/><rect x="31" y="22" width="5" height="5" rx="1" fill={cl} opacity="0.7"/><line x1="24" y1="30" x2="18" y2="42" stroke={cl} strokeWidth="2"/><line x1="24" y1="30" x2="30" y2="42" stroke={cl} strokeWidth="2"/></svg>
  </div>);
  return(<div style={runStyle}>
    <svg width={sz} height={sz} viewBox="0 0 48 48"><circle cx="24" cy="8" r="4" fill={cl}/><line x1="24" y1="12" x2="24" y2="26" stroke={cl} strokeWidth="2"/><line x1="20" y1="18" x2="28" y2="16" stroke={cl} strokeWidth="2"/><line x1="24" y1="26" x2="16" y2="40" stroke={cl} strokeWidth="2"/><line x1="24" y1="26" x2="32" y2="40" stroke={cl} strokeWidth="2"/></svg>
  </div>);
}

// ═══ EXERCISE IMAGES (free-exercise-db, public domain) + SVG FALLBACKS ═══
var EX_IMAGES=typeof window!=="undefined"&&window.EX_IMAGES?window.EX_IMAGES:(typeof EX_IMAGES!=="undefined"?EX_IMAGES:{});

function ExImg(props){
  var nm=props.name||"";var sz=props.size||48;
  var imgs=EX_IMAGES[nm];
  if(!imgs||imgs.length<2)return null;
  var _s=useState(0),idx=_s[0],setIdx=_s[1];
  var _e=useState(false),err=_e[0],setErr=_e[1];
  useEffect(function(){
    var t=setInterval(function(){setIdx(function(p){return p===0?1:0;});},1200);
    return function(){clearInterval(t);};
  },[]);
  if(err)return null;
  return <div style={{width:sz,height:sz,borderRadius:8,overflow:"hidden",background:"#1A1A1F"}}>
    <img src={imgs[idx]} alt={nm} onError={function(){setErr(true);}} style={{width:"100%",height:"100%",objectFit:"contain"}} loading="lazy"/>
  </div>;
}

function ExSVG(props){
  var nm=props.name||"";var sz=props.size||48;var cl=C.acc;var eq="#555";var R="round";var V="0 0 48 48";
  // Try real image first (works in standalone, fails silently in artifact via onError)
  var img=ExImg({name:nm,size:sz});
  if(img)return img;
  var w={width:sz,height:sz,display:"flex",alignItems:"center",justifyContent:"center"};
  // Animation styles for moving body parts
  var aPress={animation:"fAP 1.5s ease-in-out infinite"};
  var aPull={animation:"fAPu 1.4s ease-in-out infinite"};
  var aCurl={animation:"fAC 1.3s ease-in-out infinite"};
  var aLat={animation:"fAL 1.5s ease-in-out infinite"};
  var bDip={animation:"fBD 1.6s ease-in-out infinite"};
  var bPull={animation:"fBU 1.4s ease-in-out infinite"};
  var bSquat={animation:"fBS 1.4s ease-in-out infinite"};
  var lRaise={animation:"fLR 1.4s ease-in-out infinite"};
  var hPush={animation:"fHP 1.5s ease-in-out infinite"};
  var pedal={animation:"fPD 0.8s ease-in-out infinite"};
  var kick={animation:"fKB 1.3s ease-in-out infinite"};
  var aFly={animation:"fAF 1.5s ease-in-out infinite",transformOrigin:"center"};

  // ── DB BENCH PRESS (arms+DBs press up/down, body stays on bench) ──
  if(nm==="DB Bench Press")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <rect x="4" y="29" width="40" height="4" rx="2" fill={eq}/>
    <rect x="8" y="33" width="3" height="9" rx="1" fill={eq} opacity="0.4"/>
    <rect x="37" y="33" width="3" height="9" rx="1" fill={eq} opacity="0.4"/>
    <circle cx="8" cy="26" r="3.5" fill={cl}/>
    <line x1="11" y1="26" x2="32" y2="26" stroke={cl} strokeWidth="5" strokeLinecap={R}/>
    <line x1="32" y1="28" x2="38" y2="40" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="32" y1="28" x2="35" y2="40" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <g style={aPress}>
      <line x1="17" y1="23" x2="17" y2="12" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="27" y1="23" x2="27" y2="12" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <rect x="12" y="9" width="10" height="4" rx="2" fill={cl}/>
      <rect x="22" y="9" width="10" height="4" rx="2" fill={cl}/>
    </g>
  </svg></div>;

  // ── DB INCLINE PRESS (arms press up at angle) ──
  if(nm==="DB Incline Press")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <line x1="8" y1="40" x2="22" y2="16" stroke={eq} strokeWidth="4" strokeLinecap={R}/>
    <line x1="22" y1="16" x2="26" y2="40" stroke={eq} strokeWidth="3"/>
    <line x1="6" y1="40" x2="28" y2="40" stroke={eq} strokeWidth="2"/>
    <circle cx="15" cy="18" r="3.5" fill={cl}/>
    <line x1="16" y1="21" x2="20" y2="36" stroke={cl} strokeWidth="4.5" strokeLinecap={R}/>
    <line x1="20" y1="36" x2="30" y2="44" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="20" y1="36" x2="24" y2="44" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <g style={aPress}>
      <line x1="17" y1="24" x2="12" y2="10" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="18" y1="28" x2="28" y2="10" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <rect x="8" y="7" width="8" height="4" rx="2" fill={cl}/>
      <rect x="24" y="7" width="8" height="4" rx="2" fill={cl}/>
    </g>
  </svg></div>;

  // ── DB FLOOR PRESS (arms press up/down on floor) ──
  if(nm==="DB Floor Press")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <line x1="2" y1="34" x2="46" y2="34" stroke={eq} strokeWidth="1.5" opacity="0.3"/>
    <circle cx="8" cy="30" r="3.5" fill={cl}/>
    <line x1="11" y1="30" x2="30" y2="30" stroke={cl} strokeWidth="5" strokeLinecap={R}/>
    <line x1="30" y1="30" x2="36" y2="24" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="36" y1="24" x2="38" y2="34" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <g style={aPress}>
      <line x1="16" y1="27" x2="16" y2="16" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="26" y1="27" x2="26" y2="16" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <rect x="12" y="13" width="8" height="4" rx="2" fill={cl}/>
      <rect x="22" y="13" width="8" height="4" rx="2" fill={cl}/>
    </g>
  </svg></div>;

  // ── DB FLOOR FLYS (arms open/close) ──
  if(nm==="DB Floor Flys")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <line x1="2" y1="34" x2="46" y2="34" stroke={eq} strokeWidth="1.5" opacity="0.3"/>
    <circle cx="20" cy="30" r="3.5" fill={cl}/>
    <line x1="14" y1="30" x2="34" y2="30" stroke={cl} strokeWidth="4.5" strokeLinecap={R}/>
    <g style={aFly}>
      <line x1="24" y1="27" x2="8" y2="16" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="30" y1="27" x2="42" y2="16" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <rect x="4" y="13" width="8" height="4" rx="2" fill={cl}/>
      <rect x="38" y="13" width="8" height="4" rx="2" fill={cl}/>
    </g>
  </svg></div>;

  // ── DIPS (body dips down/up between bars) ──
  if(nm==="Weighted Dips (chest)"||nm==="Dips (upright)")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <rect x="4" y="14" width="4" height="30" rx="2" fill={eq} opacity="0.5"/>
    <rect x="40" y="14" width="4" height="30" rx="2" fill={eq} opacity="0.5"/>
    <g style={bDip}>
      <circle cx="24" cy="11" r="3.5" fill={cl}/>
      <line x1="24" y1="14" x2={nm==="Weighted Dips (chest)"?"26":"24"} y2="30" stroke={cl} strokeWidth="5" strokeLinecap={R}/>
      <line x1="21" y1="17" x2="8" y2="16" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="27" y1="17" x2="40" y2="16" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="24" y1="30" x2="20" y2="44" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="24" y1="30" x2="28" y2="44" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    </g>
  </svg></div>;

  // ── PUSHUPS (body bobs down/up) ──
  if(nm==="Pushups"||nm==="Diamond Pushups")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <line x1="2" y1="42" x2="46" y2="42" stroke={eq} strokeWidth="1.5" opacity="0.3"/>
    <circle cx="36" cy="42" r="2" fill={cl} opacity="0.5"/>
    <circle cx="8" cy="42" r="2" fill={cl} opacity="0.5"/>
    <g style={bDip}>
      <circle cx="38" cy="19" r="3" fill={cl}/>
      <line x1="36" y1="21" x2="12" y2="26" stroke={cl} strokeWidth="4.5" strokeLinecap={R}/>
      <line x1="34" y1="21" x2="34" y2="34" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="34" y1="34" x2="36" y2="42" stroke={cl} strokeWidth="2.5" strokeLinecap={R}/>
      <line x1="12" y1="26" x2="8" y2="42" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    </g>
  </svg></div>;

  // ── PULL-UPS / CHIN-UPS (body pulls up toward bar) ──
  if(nm==="Weighted Pull-ups"||nm==="Chin-ups"||nm==="Weighted Chins")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <rect x="4" y="3" width="40" height="3" rx="1.5" fill={eq}/>
    <circle cx={nm==="Chin-ups"||nm==="Weighted Chins"?18:10} cy="5" r="2.5" fill={cl}/>
    <circle cx={nm==="Chin-ups"||nm==="Weighted Chins"?30:38} cy="5" r="2.5" fill={cl}/>
    <g style={bPull}>
      <circle cx="24" cy="14" r="3.5" fill={cl}/>
      <line x1="24" y1="17" x2="24" y2="32" stroke={cl} strokeWidth="5" strokeLinecap={R}/>
      <line x1="21" y1="18" x2={nm==="Chin-ups"||nm==="Weighted Chins"?"18":"10"} y2="6" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="27" y1="18" x2={nm==="Chin-ups"||nm==="Weighted Chins"?"30":"38"} y2="6" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="24" y1="32" x2="20" y2="44" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="24" y1="32" x2="28" y2="44" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    </g>
  </svg></div>;

  // ── DB ROWS (arm+DB pulls up) ──
  if(nm==="DB Rows"||nm==="DB Gorilla Rows"||nm==="DB Chest-Supported Row")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <circle cx="36" cy="10" r="3.5" fill={cl}/>
    <line x1="34" y1="13" x2="18" y2="24" stroke={cl} strokeWidth="5" strokeLinecap={R}/>
    <line x1="18" y1="24" x2="12" y2="40" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="18" y1="24" x2="24" y2="40" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <g style={aPull}>
      <line x1="24" y1="20" x2="24" y2="36" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <rect x="20" y="34" width="8" height="4" rx="2" fill={cl}/>
    </g>
  </svg></div>;

  // ── INVERTED ROWS (body pulls up to bar) ──
  if(nm==="Inverted Rows")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <rect x="10" y="10" width="28" height="3" rx="1.5" fill={eq}/>
    <line x1="2" y1="42" x2="46" y2="42" stroke={eq} strokeWidth="1.5" opacity="0.3"/>
    <circle cx="10" cy="42" r="2" fill={cl} opacity="0.5"/>
    <g style={bPull}>
      <circle cx="36" cy="18" r="3" fill={cl}/>
      <line x1="34" y1="20" x2="14" y2="26" stroke={cl} strokeWidth="4.5" strokeLinecap={R}/>
      <line x1="32" y1="18" x2="26" y2="12" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="14" y1="26" x2="10" y2="42" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    </g>
  </svg></div>;

  // ── DB OHP / ARNOLD (arms+DBs press overhead) ──
  if(nm==="DB OHP"||nm==="DB Arnold Press")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <circle cx="24" cy="4" r="3.5" fill={cl}/>
    <line x1="24" y1="8" x2="24" y2="22" stroke={cl} strokeWidth="5" strokeLinecap={R}/>
    <line x1="24" y1="22" x2="18" y2="36" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="24" y1="22" x2="30" y2="36" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <g style={aPull}>
      <line x1="21" y1="12" x2="12" y2="4" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="27" y1="12" x2="36" y2="4" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <rect x="7" y="1" width="10" height="4" rx="2" fill={cl}/>
      <rect x="31" y="1" width="10" height="4" rx="2" fill={cl}/>
    </g>
  </svg></div>;

  // ── LATERAL RAISES (arms raise to sides, lower) ──
  if(nm==="DB Lateral Raises"||nm==="Band Lateral Raises"||nm==="DB Front Raises")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <circle cx="24" cy="4" r="3.5" fill={cl}/>
    <line x1="24" y1="8" x2="24" y2="22" stroke={cl} strokeWidth="5" strokeLinecap={R}/>
    <line x1="24" y1="22" x2="18" y2="36" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="24" y1="22" x2="30" y2="36" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <g style={aLat}>
      <line x1="21" y1="12" x2="4" y2="12" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="27" y1="12" x2="44" y2="12" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <rect x="1" y="10" width="6" height="5" rx="1.5" fill={cl}/>
      <rect x="41" y="10" width="6" height="5" rx="1.5" fill={cl}/>
    </g>
  </svg></div>;

  // ── REAR DELT / REVERSE FLYS (arms pull apart) ──
  if(nm==="DB Rear Delt Rows"||nm==="DB Reverse Flys")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <circle cx="36" cy="10" r="3" fill={cl}/>
    <line x1="34" y1="13" x2="20" y2="24" stroke={cl} strokeWidth="4.5" strokeLinecap={R}/>
    <line x1="20" y1="24" x2="14" y2="40" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="20" y1="24" x2="26" y2="40" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <g style={aPull}>
      <line x1="28" y1="16" x2="12" y2="10" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="24" y1="22" x2="40" y2="14" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <rect x="8" y="7" width="8" height="4" rx="1.5" fill={cl}/>
      <rect x="36" y="11" width="8" height="4" rx="1.5" fill={cl}/>
    </g>
  </svg></div>;

  // ── ALL CURL VARIATIONS (forearms+DBs curl up/down) ──
  if(nm==="DB Curls"||nm==="DB Incline Curls"||nm==="DB Spider Curls"||nm==="DB Hammer Curls"||nm==="DB Concentration Curls"||nm==="Band Curls")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <circle cx="24" cy="4" r="3.5" fill={cl}/>
    <line x1="24" y1="8" x2="24" y2="22" stroke={cl} strokeWidth="5" strokeLinecap={R}/>
    <line x1="24" y1="22" x2="18" y2="36" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="24" y1="22" x2="30" y2="36" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="21" y1="12" x2="15" y2="18" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="27" y1="12" x2="33" y2="18" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <g style={aCurl}>
      <line x1="15" y1="18" x2="17" y2="10" stroke={cl} strokeWidth="2.5" strokeLinecap={R}/>
      <line x1="33" y1="18" x2="31" y2="10" stroke={cl} strokeWidth="2.5" strokeLinecap={R}/>
      <rect x="13" y="7" width="7" height="4" rx="1.5" fill={cl}/>
      <rect x="28" y="7" width="7" height="4" rx="1.5" fill={cl}/>
    </g>
  </svg></div>;

  // ── DB SKULL CRUSHERS (forearms pivot near face) ──
  if(nm==="DB Skull Crushers")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <rect x="4" y="29" width="40" height="4" rx="2" fill={eq}/>
    <rect x="8" y="33" width="3" height="9" rx="1" fill={eq} opacity="0.4"/>
    <rect x="37" y="33" width="3" height="9" rx="1" fill={eq} opacity="0.4"/>
    <circle cx="8" cy="26" r="3.5" fill={cl}/>
    <line x1="11" y1="26" x2="34" y2="26" stroke={cl} strokeWidth="5" strokeLinecap={R}/>
    <line x1="34" y1="26" x2="40" y2="20" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="40" y1="20" x2="42" y2="29" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <g style={aPress}>
      <line x1="20" y1="23" x2="14" y2="14" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="28" y1="23" x2="20" y2="14" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <rect x="10" y="11" width="14" height="4" rx="2" fill={cl}/>
    </g>
  </svg></div>;

  // ── DB OVERHEAD EXTENSIONS (DB moves behind head, up/down) ──
  if(nm==="DB Overhead Extensions")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <circle cx="24" cy="8" r="3.5" fill={cl}/>
    <line x1="24" y1="12" x2="24" y2="26" stroke={cl} strokeWidth="5" strokeLinecap={R}/>
    <line x1="24" y1="26" x2="18" y2="40" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="24" y1="26" x2="30" y2="40" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="24" y1="14" x2="24" y2="4" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <g style={aPress}>
      <line x1="24" y1="4" x2="18" y2="12" stroke={cl} strokeWidth="2.5" strokeLinecap={R}/>
      <rect x="14" y="9" width="8" height="4" rx="2" fill={cl}/>
    </g>
  </svg></div>;

  // ── DB KICKBACKS (forearm extends back) ──
  if(nm==="DB Kickbacks")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <circle cx="34" cy="10" r="3" fill={cl}/>
    <line x1="32" y1="13" x2="20" y2="24" stroke={cl} strokeWidth="4.5" strokeLinecap={R}/>
    <line x1="26" y1="18" x2="26" y2="22" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="20" y1="24" x2="14" y2="40" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="20" y1="24" x2="26" y2="40" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <g style={kick}>
      <line x1="26" y1="22" x2="40" y2="16" stroke={cl} strokeWidth="2.5" strokeLinecap={R}/>
      <rect x="38" y="13" width="7" height="4" rx="1.5" fill={cl}/>
    </g>
  </svg></div>;

  // ── BAND PUSHDOWNS ──
  if(nm==="Band Pushdowns"||nm==="DB JM Press")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <rect x="20" y="1" width="8" height="4" rx="2" fill={eq} opacity="0.4"/>
    <line x1="24" y1="5" x2="20" y2="14" stroke={cl} strokeWidth="1.5" strokeDasharray="3"/>
    <line x1="24" y1="5" x2="28" y2="14" stroke={cl} strokeWidth="1.5" strokeDasharray="3"/>
    {standPerson(24,8)}
    <line x1="21" y1="16" x2="16" y2="24" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="27" y1="16" x2="32" y2="24" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
  </svg></div>;

  // ── DB BULGARIAN SPLIT SQUATS (body bobs down into squat) ──
  if(nm==="DB Bulgarian Split Squats")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <rect x="30" y="28" width="16" height="3" rx="1.5" fill={eq}/>
    <rect x="33" y="31" width="3" height="8" rx="1" fill={eq} opacity="0.4"/>
    <rect x="42" y="31" width="3" height="8" rx="1" fill={eq} opacity="0.4"/>
    <g style={bSquat}>
      <circle cx="18" cy="4" r="3.5" fill={cl}/>
      <line x1="18" y1="7" x2="18" y2="22" stroke={cl} strokeWidth="5" strokeLinecap={R}/>
      <line x1="18" y1="22" x2="10" y2="34" stroke={cl} strokeWidth="3.5" strokeLinecap={R}/>
      <line x1="10" y1="34" x2="10" y2="44" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="18" y1="22" x2="28" y2="30" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="28" y1="30" x2="34" y2="28" stroke={cl} strokeWidth="2.5" strokeLinecap={R}/>
      <rect x="5" y="18" width="5" height="7" rx="1.5" fill={cl} opacity="0.7"/>
      <rect x="22" y="18" width="5" height="7" rx="1.5" fill={cl} opacity="0.7"/>
    </g>
  </svg></div>;

  // ── GOBLET SQUATS / LUNGES (body squats down/up) ──
  if(nm==="DB Goblet Squats"||nm==="DB Reverse Lunges"||nm==="DB Step Ups"||nm==="DB Lateral Lunges")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <g style={bSquat}>
      <circle cx="24" cy="4" r="3.5" fill={cl}/>
      <line x1="24" y1="7" x2="24" y2="22" stroke={cl} strokeWidth="5" strokeLinecap={R}/>
      <line x1="22" y1="12" x2="19" y2="16" stroke={cl} strokeWidth="2.5" strokeLinecap={R}/>
      <line x1="26" y1="12" x2="29" y2="16" stroke={cl} strokeWidth="2.5" strokeLinecap={R}/>
      <rect x="17" y="14" width="14" height="6" rx="2.5" fill={cl}/>
      <line x1="22" y1="22" x2="12" y2="32" stroke={cl} strokeWidth="3.5" strokeLinecap={R}/>
      <line x1="26" y1="22" x2="36" y2="32" stroke={cl} strokeWidth="3.5" strokeLinecap={R}/>
      <line x1="12" y1="32" x2="14" y2="44" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="36" y1="32" x2="34" y2="44" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    </g>
  </svg></div>;

  // ── DB RDLs (upper body hinges down/up) ──
  if(nm==="DB RDLs"||nm==="DB Single Leg RDLs")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <line x1="18" y1="22" x2="16" y2="40" stroke={cl} strokeWidth="3.5" strokeLinecap={R}/>
    <line x1="18" y1="22" x2="22" y2="40" stroke={cl} strokeWidth="3.5" strokeLinecap={R}/>
    <g style={bSquat}>
      <circle cx="36" cy="8" r="3.5" fill={cl}/>
      <line x1="34" y1="11" x2="18" y2="22" stroke={cl} strokeWidth="5" strokeLinecap={R}/>
      <line x1="26" y1="16" x2="22" y2="30" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="28" y1="18" x2="24" y2="30" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <rect x="18" y="28" width="10" height="4" rx="2" fill={cl}/>
    </g>
  </svg></div>;

  // ── DB HIP THRUSTS (hips push up) ──
  if(nm==="DB Hip Thrusts")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <rect x="26" y="20" width="18" height="3" rx="1.5" fill={eq}/>
    <rect x="30" y="23" width="3" height="9" rx="1" fill={eq} opacity="0.4"/>
    <rect x="40" y="23" width="3" height="9" rx="1" fill={eq} opacity="0.4"/>
    <circle cx="40" cy="17" r="3" fill={cl}/>
    <line x1="38" y1="19" x2="28" y2="19" stroke={cl} strokeWidth="4" strokeLinecap={R}/>
    <line x1="12" y1="22" x2="10" y2="34" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <g style={hPush}>
      <line x1="28" y1="19" x2="18" y2="12" stroke={cl} strokeWidth="4.5" strokeLinecap={R}/>
      <line x1="18" y1="12" x2="12" y2="22" stroke={cl} strokeWidth="3.5" strokeLinecap={R}/>
      <rect x="14" y="9" width="10" height="4" rx="2" fill={cl}/>
    </g>
  </svg></div>;

  // ── HANGING LEG RAISES (legs swing up) ──
  if(nm==="Hanging Leg Raises")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <rect x="16" y="2" width="16" height="3" rx="1.5" fill={eq}/>
    <line x1="24" y1="5" x2="24" y2="12" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <circle cx="24" cy="15" r="3.5" fill={cl}/>
    <line x1="24" y1="18" x2="24" y2="30" stroke={cl} strokeWidth="5" strokeLinecap={R}/>
    <g style={lRaise}>
      <line x1="24" y1="30" x2="10" y2="27" stroke={cl} strokeWidth="3.5" strokeLinecap={R}/>
      <line x1="10" y1="27" x2="6" y2="30" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    </g>
    <line x1="24" y1="30" x2="24" y2="44" stroke={cl} strokeWidth="2" opacity="0.2" strokeDasharray="2"/>
  </svg></div>;

  // ── BAND / CORE EXERCISES ──
  if(nm==="Band Pallof Press"||nm==="Band Woodchops"||nm==="DB Renegade Rows")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <rect x="1" y="8" width="4" height="32" rx="2" fill={eq} opacity="0.4"/>
    <line x1="5" y1="18" x2="18" y2="18" stroke={cl} strokeWidth="1.5" strokeDasharray="3"/>
    {standPerson(28,4)}
    <line x1="25" y1="12" x2="18" y2="18" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="18" y1="18" x2="12" y2="18" stroke={cl} strokeWidth="2.5" strokeLinecap={R}/>
  </svg></div>;

  // ── BAND EXERCISES (arms pull from high anchor) ──
  if(nm==="Band Face Pulls"||nm==="Band Lat Pulldowns"||nm==="Band Crossovers"||nm==="Band Pull-Throughs"||nm==="Band Leg Curls")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <rect x="20" y="1" width="8" height="4" rx="2" fill={eq} opacity="0.4"/>
    <line x1="24" y1="5" x2="18" y2="14" stroke={cl} strokeWidth="1.5" strokeDasharray="3"/>
    <line x1="24" y1="5" x2="30" y2="14" stroke={cl} strokeWidth="1.5" strokeDasharray="3"/>
    <circle cx="24" cy="8" r="3.5" fill={cl}/>
    <line x1="24" y1="12" x2="24" y2="26" stroke={cl} strokeWidth="5" strokeLinecap={R}/>
    <line x1="24" y1="26" x2="18" y2="40" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="24" y1="26" x2="30" y2="40" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <g style={aPull}>
      <line x1="21" y1="16" x2="14" y2="12" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="27" y1="16" x2="34" y2="12" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    </g>
  </svg></div>;

  // ── DB PULLOVER (arm arcs overhead) ──
  if(nm==="DB Pullover (chest)")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <rect x="8" y="28" width="32" height="3" rx="1.5" fill={eq}/>
    <circle cx="14" cy="25" r="3" fill={cl}/>
    <line x1="17" y1="25" x2="34" y2="25" stroke={cl} strokeWidth="4.5" strokeLinecap={R}/>
    <line x1="34" y1="27" x2="40" y2="38" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="34" y1="27" x2="36" y2="38" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <g style={aPress}>
      <line x1="20" y1="22" x2="10" y2="8" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <rect x="5" y="5" width="10" height="4" rx="2" fill={cl}/>
    </g>
  </svg></div>;

  // ── ASSAULT BIKE (legs pedal) ──
  if(nm==="Assault Bike Tabata (4 min)"||nm==="Assault Bike 30/30 Intervals")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <circle cx="12" cy="34" r="8" stroke={eq} strokeWidth="2" fill="none" opacity="0.4"/>
    <circle cx="36" cy="34" r="8" stroke={eq} strokeWidth="2" fill="none" opacity="0.4"/>
    <line x1="12" y1="34" x2="24" y2="18" stroke={eq} strokeWidth="2.5"/>
    <line x1="24" y1="18" x2="36" y2="34" stroke={eq} strokeWidth="2"/>
    <line x1="24" y1="18" x2="26" y2="10" stroke={eq} strokeWidth="2.5"/>
    <line x1="20" y1="10" x2="32" y2="10" stroke={eq} strokeWidth="2.5" strokeLinecap={R}/>
    <circle cx="22" cy="6" r="3.5" fill={cl}/>
    <line x1="22" y1="9" x2="20" y2="22" stroke={cl} strokeWidth="4" strokeLinecap={R}/>
    <line x1="20" y1="14" x2="26" y2="10" stroke={cl} strokeWidth="2.5" strokeLinecap={R}/>
    <g style={pedal}>
      <line x1="20" y1="22" x2="12" y2="34" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    </g>
  </svg></div>;

  // ── JUMP ROPE (body bounces up) ──
  if(nm==="Jump Rope Intervals")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <path d="M14 20 Q6 34 20 40 Q24 42 28 40 Q42 34 34 20" stroke={cl} strokeWidth="2" fill="none" opacity="0.5" strokeDasharray="3"/>
    <g style={bPull}>
      <circle cx="24" cy="4" r="3.5" fill={cl}/>
      <line x1="24" y1="8" x2="24" y2="22" stroke={cl} strokeWidth="5" strokeLinecap={R}/>
      <line x1="24" y1="22" x2="18" y2="36" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="24" y1="22" x2="30" y2="36" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
      <line x1="21" y1="12" x2="14" y2="20" stroke={cl} strokeWidth="2.5" strokeLinecap={R}/>
      <line x1="27" y1="12" x2="34" y2="20" stroke={cl} strokeWidth="2.5" strokeLinecap={R}/>
    </g>
  </svg></div>;

  // ── ROPE FLOW ──
  if(nm==="Rope Flow Recovery")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    {standPerson(24,4)}
    <line x1="21" y1="12" x2="12" y2="16" stroke={cl} strokeWidth="2.5" strokeLinecap={R}/>
    <line x1="27" y1="12" x2="36" y2="16" stroke={cl} strokeWidth="2.5" strokeLinecap={R}/>
    <path d="M12 16 Q6 24 12 32 Q18 40 24 32 Q30 24 36 32 Q42 40 36 16" stroke={cl} strokeWidth="2" fill="none" opacity="0.4"/>
  </svg></div>;

  // ── BAND LATERAL RAISES (same as DB but with band line) ──
  if(nm==="Band Lateral Raises")return <div style={w}><svg width={sz} height={sz} viewBox={V}>
    <line x1="22" y1="44" x2="22" y2="36" stroke={eq} strokeWidth="1.5" strokeDasharray="2" opacity="0.3"/>
    <line x1="26" y1="44" x2="26" y2="36" stroke={eq} strokeWidth="1.5" strokeDasharray="2" opacity="0.3"/>
    {standPerson(24,4)}
    <line x1="21" y1="12" x2="4" y2="12" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <line x1="27" y1="12" x2="44" y2="12" stroke={cl} strokeWidth="3" strokeLinecap={R}/>
    <rect x="1" y="10" width="6" height="5" rx="1.5" fill={cl}/>
    <rect x="41" y="10" width="6" height="5" rx="1.5" fill={cl}/>
  </svg></div>;

  // ── FALLBACK: generic MoveIcon ──
  return <MoveIcon type={props.mv||"press"} size={sz}/>;
}

// ═══ TECHNIQUE DESCRIPTIONS ═══
var TECH_INFO={
  straight:{n:"Straight Sets",d:"Perform 3-4 sets of 8-12 reps with 90-120s rest between sets. Full recovery between sets. The proven default for hypertrophy."},
  myo:{n:"Myo-Reps",d:"Do one activation set of 12-20 reps to near failure. Rest 15 seconds (3-5 deep breaths). Do 3-5 mini-sets of 3-5 reps with 15s rest between each. Stop when you lose a rep from your first mini-set count. Equivalent hypertrophy in ~40% less time."},
  restpause:{n:"Rest-Pause",d:"Perform reps to failure (6-10 reps). Rack the weight, take 10-15 deep breaths (~20s). Perform reps to failure again (3-5 reps). Breathe again 20s. Final set to failure (2-3 reps). One extended set replaces 3 straight sets."},
  preexhaust:{n:"Pre-Exhaust Superset",d:"First do a band or DB isolation for 12-15 reps to fatigue the target muscle. Immediately (no rest) perform the compound movement. The pre-fatigued muscle becomes the weak link, making lighter compound loads feel much heavier."},
  mechanical:{n:"Mechanical Drop Set",d:"Use the SAME weight but change the angle or grip to make the exercise easier as you fatigue. Example: Incline press to failure, immediately flat press to failure, immediately decline/floor press to failure. No weight change needed."},
  density:{n:"Density (EDT)",d:"Pick two antagonist exercises (e.g., rows + press). Set a 15-minute timer. Alternate 5 reps of each with minimal rest. Count total reps. Next session, beat that number. Progressive overload through density, not load."},
  giant:{n:"Giant Set",d:"Four exercises for the same muscle group performed back-to-back with no rest. Example: Band flys x15, incline press x10, pushups to failure, band crossovers x15. Rest 2-3 min between rounds. 3-4 rounds total."},
  hiit:{n:"HIIT Cardio",d:"High intensity interval training. Follow the protocol listed (Tabata = 20s max effort / 10s rest x 8 rounds). Go all-out during work intervals."},
  steady:{n:"Steady State",d:"Maintain moderate, sustainable effort for the full duration. Heart rate 120-140 BPM zone."},
};

// ═══ EXERCISE DESCRIPTIONS (how to do it + rep counting) ═══
var EX_INFO={
  "DB Bench Press":"Lie flat, press DBs from chest to lockout. 1 rep = lower to chest, press up. Control the descent (2-3 sec), pause briefly at chest, drive up.",
  "DB Incline Press":"Bench at 30-45 degrees. Press from upper chest. 1 rep = lower to upper chest, press to lockout. Slightly narrower grip than flat.",
  "DB Floor Press":"Lie on floor, press DBs. Floor limits range of motion at bottom. 1 rep = lower until triceps touch floor, pause 1s, press up. Great for lockout strength.",
  "Weighted Dips (chest)":"Lean forward 30 degrees for chest emphasis. 1 rep = lower until upper arms parallel to floor, press up. Add weight via belt or DB between feet.",
  "DB Floor Flys":"Lie on floor, arc DBs out and together. Floor limits stretch. 1 rep = open arms until elbows touch floor, squeeze together at top.",
  "Pushups":"Hands shoulder width, body straight. 1 rep = lower chest to 1 inch from floor, push up to lockout. Squeeze chest at top.",
  "Weighted Pull-ups":"Overhand grip, wider than shoulders. 1 rep = from dead hang, pull until chin clears bar, lower to full extension. Add weight via belt or DB between feet.",
  "DB Rows":"Hinge at hips ~45 degrees. 1 rep = pull DB to hip crease, squeeze shoulder blade back, lower with control. Each arm counted separately if alternating.",
  "Chin-ups":"Underhand grip, shoulder width. 1 rep = dead hang to chin over bar. Emphasizes biceps more than pull-ups.",
  "DB OHP":"Seated or standing. 1 rep = press from shoulder level to lockout overhead. Lower with control to ear level.",
  "DB Lateral Raises":"Slight lean forward. 1 rep = raise DBs to side until arms parallel to floor, lower slowly. Pinky-up at top for more side delt.",
  "DB Curls":"Standing, palms forward. 1 rep = curl from full extension to full contraction, lower with 2-3s control. No swinging.",
  "DB Hammer Curls":"Neutral grip (palms facing each other). Same motion as curls. Targets brachialis and forearms more.",
  "DB Bulgarian Split Squats":"Rear foot elevated on bench. 1 rep = lower until rear knee nearly touches floor, drive up through front heel. Count each leg separately.",
  "DB Goblet Squats":"Hold one DB at chest. 1 rep = squat below parallel, drive up. Keep torso upright.",
  "DB RDLs":"Slight knee bend, hinge at hips. 1 rep = lower DBs along thighs until deep hamstring stretch, squeeze glutes to stand. Feel it in hamstrings, not lower back.",
  "DB Hip Thrusts":"Upper back on bench, DB on hips. 1 rep = lower hips toward floor, drive up squeezing glutes at top. Pause 1s at top.",
  "Hanging Leg Raises":"Hang from pull-up bar. 1 rep = raise legs to at least parallel, lower with control. No swinging.",
  "Dips (upright)":"Torso upright for tricep emphasis. 1 rep = lower until upper arms parallel, press to lockout.",
  "DB Skull Crushers":"Lie flat, extend DBs from forehead to lockout. 1 rep = lower to forehead level, extend. Keep elbows pointed at ceiling.",
  "DB Overhead Extensions":"One or two DBs behind head. 1 rep = lower behind head until deep stretch, extend to lockout overhead.",
  "DB Arnold Press":"Seated, start with palms facing you at shoulder level. Rotate palms outward as you press overhead. 1 rep = rotate and press to lockout, reverse back down.",
  "DB Rear Delt Rows":"Bench at 30 degrees, chest supported. Pull DBs out wide to sides. 1 rep = pull wide with elbows flared, squeeze rear delts, lower.",
  "Band Crossovers":"Stand centered on band wall. 1 rep = bring hands together in front of chest in an arc, squeeze at center, return slowly.",
  "DB Pullover (chest)":"Lie across bench, one DB overhead. 1 rep = lower DB behind head with slight elbow bend until deep stretch, pull back over chest.",
  "DB Chest-Supported Row":"Bench at 30-45 degrees, chest on pad. 1 rep = pull DBs to hip crease, squeeze shoulder blades, lower with control.",
  "DB Gorilla Rows":"Hinged over, DBs on floor between reps. 1 rep = row one DB while other rests on floor, alternate. Dead stop each rep.",
  "Inverted Rows":"Hang under bar or rings, body straight. 1 rep = pull chest to bar, lower to full arm extension. Adjust angle for difficulty.",
  "Band Lat Pulldowns":"Attach band high on wall. 1 rep = pull down to chest level with slight lean back, squeeze lats, control return.",
  "Band Face Pulls":"Band at face height. 1 rep = pull to face with elbows high, externally rotate at end, squeeze rear delts and rotator cuff.",
  "DB Incline Curls":"Bench at 45 degrees, arms hanging. 1 rep = curl from full stretch to full contraction. The incline creates a deeper stretch.",
  "DB Spider Curls":"Bench at 45 degrees, chest on pad, arms hanging in front. 1 rep = curl with zero momentum. Extreme contraction focus.",
  "Band Curls":"Stand on band, curl handles. 1 rep = curl to full contraction, lower with control. Ascending resistance curve.",
  "DB Concentration Curls":"Seated, elbow braced on inner thigh. 1 rep = curl to full contraction, squeeze 1s, lower slowly. Ultimate isolation.",
  "DB JM Press":"Lie flat, lower DBs toward chin/neck area then press up. Hybrid between skull crusher and close grip press. Targets long head.",
  "DB Kickbacks":"Hinged over, upper arm parallel to floor. 1 rep = extend forearm to full lockout, squeeze tricep, lower. Keep upper arm still.",
  "Band Pushdowns":"Band attached high. 1 rep = push down to full arm extension, squeeze tricep, control return.",
  "Diamond Pushups":"Hands close together forming a diamond. 1 rep = lower chest to hands, push up. Keep elbows somewhat tucked.",
  "DB Step Ups":"One foot on bench. 1 rep = drive through elevated foot to stand on bench, lower with control. Minimize push-off from floor.",
  "DB Reverse Lunges":"Step backward into lunge. 1 rep = step back, lower until rear knee near floor, drive through front heel to stand. Easier on knees than forward lunges.",
  "DB Lateral Lunges":"Step wide to one side. 1 rep = step out, sit back into that hip, push back to start. Hits adductors and VMO.",
  "DB Single Leg RDLs":"Stand on one leg, hinge at hip. 1 rep = lower DB while extending rear leg, stand back up. Builds balance and unilateral hamstring strength.",
  "Band Pull-Throughs":"Band low behind you, hinge and grab. 1 rep = hinge forward letting band pull through legs, squeeze glutes to stand tall.",
  "Band Leg Curls":"Lie face down, band around ankle. 1 rep = curl heel to glutes, lower with control. Keep hips pressed down.",
  "Band Pallof Press":"Band at chest height, stand perpendicular. 1 rep = press arms straight out resisting rotation, hold 2s, return to chest. Anti-rotation core work.",
  "DB Renegade Rows":"Plank position on DBs. 1 rep = row one DB while stabilizing on the other, alternate. Keep hips square to floor.",
  "Band Woodchops":"Band anchored high or low. 1 rep = pull diagonally across body in a chopping motion, control return. Rotational core power.",
  "Band Lateral Raises":"Stand on band, raise arms to sides. 1 rep = raise to parallel, lower slowly. Ascending resistance means hardest at the top.",
  "DB Reverse Flys":"Hinged over or chest supported. 1 rep = raise DBs out to sides squeezing rear delts, lower with control.",
  "DB Front Raises":"Standing, palms down or neutral. 1 rep = raise one or both DBs to eye level in front, lower slowly. Hits front delts.",
  "Weighted Chins":"Chin-ups with added weight via belt or DB between feet. 1 rep = dead hang to chin over bar. Great compound bicep builder.",
  "Assault Bike Tabata (4 min)":"20 seconds absolute max effort, 10 seconds rest, repeat 8 rounds. Total: 4 minutes. Go all-out on every work interval.",
  "Assault Bike 30/30 Intervals":"30 seconds hard effort, 30 seconds easy spin. Repeat for prescribed duration. Moderate-high intensity.",
  "Jump Rope Intervals":"Alternate fast and moderate pace. Example: 30s fast, 30s easy for 10+ minutes. Builds coordination and conditioning.",
  "Rope Flow Recovery":"Continuous flowing rope patterns. Low intensity, rhythmic. Improves shoulder mobility, coordination, and active recovery.",
};

// ═══ EXERCISE DATABASE ═══
var EX={
  chest:[{n:"DB Bench Press",t:"C",mv:"press",m:6,myo:0,drop:1},{n:"DB Incline Press",t:"C",mv:"press",m:6,myo:0,drop:1},{n:"DB Floor Press",t:"C",mv:"press",m:5,myo:0,drop:1},{n:"Weighted Dips (chest)",t:"C",mv:"press",m:6,myo:0,drop:0},{n:"DB Floor Flys",t:"I",mv:"press",m:5,myo:1,drop:1},{n:"Band Crossovers",t:"I",mv:"press",m:4,myo:1,drop:0},{n:"Pushups",t:"B",mv:"press",m:4,myo:1,drop:0},{n:"DB Pullover (chest)",t:"I",mv:"pull",m:5,myo:1,drop:1}],
  back:[{n:"Weighted Pull-ups",t:"C",mv:"pull",m:7,myo:0,drop:0},{n:"DB Rows",t:"C",mv:"pull",m:6,myo:0,drop:1},{n:"DB Chest-Supported Row",t:"C",mv:"pull",m:6,myo:0,drop:1},{n:"Chin-ups",t:"C",mv:"pull",m:6,myo:0,drop:0},{n:"DB Gorilla Rows",t:"C",mv:"pull",m:5,myo:0,drop:1},{n:"Inverted Rows",t:"B",mv:"pull",m:5,myo:1,drop:0},{n:"Band Lat Pulldowns",t:"I",mv:"pull",m:4,myo:1,drop:0},{n:"Band Face Pulls",t:"I",mv:"pull",m:4,myo:1,drop:0}],
  shoulders:[{n:"DB OHP",t:"C",mv:"press",m:6,myo:0,drop:1},{n:"DB Arnold Press",t:"C",mv:"press",m:6,myo:0,drop:1},{n:"DB Lateral Raises",t:"I",mv:"curl",m:5,myo:1,drop:1},{n:"DB Rear Delt Rows",t:"I",mv:"pull",m:5,myo:1,drop:1},{n:"Band Lateral Raises",t:"I",mv:"curl",m:4,myo:1,drop:0},{n:"DB Reverse Flys",t:"I",mv:"pull",m:4,myo:1,drop:1},{n:"DB Front Raises",t:"I",mv:"curl",m:4,myo:1,drop:1}],
  biceps:[{n:"Weighted Chins",t:"C",mv:"pull",m:6,myo:0,drop:0},{n:"DB Curls",t:"I",mv:"curl",m:5,myo:1,drop:1},{n:"DB Incline Curls",t:"I",mv:"curl",m:5,myo:1,drop:1},{n:"DB Hammer Curls",t:"I",mv:"curl",m:5,myo:1,drop:1},{n:"DB Spider Curls",t:"I",mv:"curl",m:5,myo:1,drop:1},{n:"Band Curls",t:"I",mv:"curl",m:4,myo:1,drop:0},{n:"DB Concentration Curls",t:"I",mv:"curl",m:5,myo:1,drop:1}],
  triceps:[{n:"Dips (upright)",t:"C",mv:"press",m:6,myo:0,drop:0},{n:"DB Skull Crushers",t:"I",mv:"press",m:5,myo:1,drop:1},{n:"DB Overhead Extensions",t:"I",mv:"press",m:5,myo:1,drop:1},{n:"DB JM Press",t:"C",mv:"press",m:5,myo:0,drop:1},{n:"DB Kickbacks",t:"I",mv:"curl",m:4,myo:1,drop:1},{n:"Band Pushdowns",t:"I",mv:"press",m:4,myo:1,drop:0},{n:"Diamond Pushups",t:"B",mv:"press",m:4,myo:1,drop:0}],
  quads:[{n:"DB Bulgarian Split Squats",t:"C",mv:"squat",m:7,myo:0,drop:1},{n:"DB Goblet Squats",t:"C",mv:"squat",m:6,myo:0,drop:1},{n:"DB Step Ups",t:"C",mv:"squat",m:6,myo:0,drop:0},{n:"DB Reverse Lunges",t:"C",mv:"squat",m:6,myo:0,drop:1},{n:"DB Lateral Lunges",t:"C",mv:"squat",m:5,myo:0,drop:0}],
  hams:[{n:"DB RDLs",t:"C",mv:"squat",m:6,myo:0,drop:1},{n:"DB Single Leg RDLs",t:"C",mv:"squat",m:6,myo:0,drop:0},{n:"DB Hip Thrusts",t:"C",mv:"squat",m:6,myo:0,drop:1},{n:"Band Pull-Throughs",t:"I",mv:"squat",m:5,myo:1,drop:0},{n:"Band Leg Curls",t:"I",mv:"curl",m:4,myo:1,drop:0}],
  core:[{n:"Hanging Leg Raises",t:"B",mv:"pull",m:4,myo:0,drop:0},{n:"Band Pallof Press",t:"I",mv:"press",m:4,myo:0,drop:0},{n:"DB Renegade Rows",t:"C",mv:"pull",m:5,myo:0,drop:0},{n:"Band Woodchops",t:"I",mv:"pull",m:4,myo:0,drop:0}],
  cardio:[{n:"Assault Bike Tabata (4 min)",t:"H",mv:"cardio",m:5},{n:"Assault Bike 30/30 Intervals",t:"H",mv:"cardio",m:6},{n:"Jump Rope Intervals",t:"H",mv:"cardio",m:5},{n:"Rope Flow Recovery",t:"R",mv:"cardio",m:6}],
};

var SPLITS=[
  {id:"fb3",n:"Full Body x3",d:3,desc:"Every muscle every session. High frequency, ideal for beginners or time-crunched schedules.",layout:[{n:"Full Body A",g:["chest","back","quads","shoulders","biceps"]},{n:"Full Body B",g:["back","chest","hams","triceps","shoulders"]},{n:"Full Body C",g:["quads","back","chest","hams","biceps","core"]}]},
  {id:"ppl3",n:"PPL (rotating)",d:3,desc:"Push/Pull/Legs on rotation. Simple, effective, easy to remember.",layout:[{n:"Push",g:["chest","shoulders","triceps"]},{n:"Pull",g:["back","biceps"]},{n:"Legs",g:["quads","hams","core"]}]},
  {id:"dc3",n:"DC Training A/B",d:3,desc:"Rest-pause: 1 all-out set per muscle, rotate 3 exercises. Advanced only.",layout:[{n:"Upper A",g:["chest","shoulders","triceps","back"]},{n:"Lower + Bis",g:["biceps","hams","quads","core"]},{n:"Upper B",g:["chest","shoulders","triceps","back"]}]},
  {id:"ul4",n:"Upper / Lower",d:4,desc:"Gold standard for intermediates. Each muscle 2x/week with excellent recovery balance.",layout:[{n:"Upper A",g:["chest","back","shoulders","biceps","triceps"]},{n:"Lower A",g:["quads","hams","core"]},{n:"Upper B",g:["back","chest","shoulders","triceps","biceps"]},{n:"Lower B",g:["hams","quads","core"]}]},
  {id:"tl4",n:"Torso / Limbs",d:4,desc:"Arms train fresh on limb days. Hidden 4x/wk arm frequency from compound overlap.",layout:[{n:"Torso A",g:["chest","back","shoulders"]},{n:"Limbs A",g:["quads","hams","biceps","triceps"]},{n:"Torso B",g:["back","chest","shoulders"]},{n:"Limbs B",g:["hams","quads","triceps","biceps","core"]}]},
  {id:"pqph4",n:"Push+Quads / Pull+Hams",d:4,desc:"Full body stimulus every session. Upper + lower paired by movement pattern.",layout:[{n:"Push+Quads A",g:["chest","shoulders","triceps","quads"]},{n:"Pull+Hams A",g:["back","biceps","hams","core"]},{n:"Push+Quads B",g:["shoulders","chest","triceps","quads"]},{n:"Pull+Hams B",g:["back","biceps","hams","core"]}]},
  {id:"ant4",n:"Antagonist Supersets",d:4,desc:"Opposing muscles paired. Cuts session time ~36% without losing gains.",layout:[{n:"Chest+Back",g:["chest","back"]},{n:"Quads+Hams",g:["quads","hams","core"]},{n:"Shoulders+Arms",g:["shoulders","biceps","triceps"]},{n:"Full+Weak Pts",g:["back","chest","quads","hams"]}]},
  {id:"fbsp4",n:"Full Body + Specialization",d:4,desc:"3 full body days + 1 weak point blitz. Rotate focus area every 4-6 weeks.",layout:[{n:"Full Body A",g:["chest","back","quads","shoulders"]},{n:"Full Body B",g:["back","chest","hams","biceps","triceps"]},{n:"Full Body C",g:["quads","back","shoulders","hams"]},{n:"Specialization",g:["chest","shoulders","biceps","triceps"]}]},
  {id:"smart5",n:"Smart Bro Split (AX)",d:5,desc:"AthleanX: no synergist conflicts between days. Compounds create hidden 2-3x frequency.",layout:[{n:"Chest+Biceps",g:["chest","biceps"]},{n:"Legs",g:["quads","hams","core"]},{n:"Back+Triceps",g:["back","triceps"]},{n:"Shoulders",g:["shoulders","back"]},{n:"Arms",g:["biceps","triceps"]}]},
  {id:"nip5",n:"UL/PPL Hybrid (Nippard)",d:5,desc:"Upper/Lower + Push/Pull/Legs merged. Every muscle 2x/wk with varied stimuli.",layout:[{n:"Upper",g:["chest","back","shoulders","biceps","triceps"]},{n:"Lower",g:["quads","hams","core"]},{n:"Pull",g:["back","biceps","shoulders"]},{n:"Push",g:["chest","shoulders","triceps"]},{n:"Legs",g:["quads","hams","core"]}]},
  {id:"phat5",n:"PHAT (Norton)",d:5,desc:"Power + hypertrophy days combined. Heavy compounds AND high-rep pump work.",layout:[{n:"Upper Power",g:["chest","back","shoulders"]},{n:"Lower Power",g:["quads","hams"]},{n:"Back+Shoulders Hyp",g:["back","shoulders","biceps"]},{n:"Lower Hyp",g:["quads","hams","core"]},{n:"Chest+Arms Hyp",g:["chest","biceps","triceps"]}]},
  {id:"bro5",n:"Classic Bro Split",d:5,desc:"One muscle per day. Max per-session volume. The old-school approach.",layout:[{n:"Chest",g:["chest"]},{n:"Back",g:["back"]},{n:"Shoulders",g:["shoulders"]},{n:"Legs",g:["quads","hams","core"]},{n:"Arms",g:["biceps","triceps"]}]},
  {id:"ppl6",n:"PPL x2",d:6,desc:"Push/Pull/Legs twice per week. High frequency + high volume for advanced.",layout:[{n:"Push A",g:["chest","shoulders","triceps"]},{n:"Pull A",g:["back","biceps"]},{n:"Legs A",g:["quads","hams","core"]},{n:"Push B",g:["shoulders","chest","triceps"]},{n:"Pull B",g:["back","biceps"]},{n:"Legs B",g:["hams","quads","core"]}]},
  {id:"arn6",n:"Arnold Split",d:6,desc:"Chest+Back supersets, Shoulders+Arms, Legs. Classic high-volume. Needs caloric surplus.",layout:[{n:"Chest+Back A",g:["chest","back"]},{n:"Shoulders+Arms A",g:["shoulders","biceps","triceps"]},{n:"Legs A",g:["quads","hams","core"]},{n:"Chest+Back B",g:["back","chest"]},{n:"Shoulders+Arms B",g:["triceps","biceps","shoulders"]},{n:"Legs B",g:["hams","quads","core"]}]},
];

var METHODS=[
  {id:"straight",n:"Straight Sets",d:"Traditional 3-4 sets, full rest. The proven default.",sv:0},
  {id:"myo",n:"Myo-Rep Training",d:"Activation (12-20 reps) + mini-sets (3-5 reps, 15s rest). Same growth, 40% less time.",sv:40},
  {id:"density",n:"Density (EDT)",d:"Timed blocks, antagonist pairs. Beat your rep total each session.",sv:30},
  {id:"giant",n:"Giant Sets",d:"4-exercise circuits per muscle. Meadows-style pump rounds.",sv:35},
  {id:"preexh",n:"Pre-Exhaust Supersets",d:"Band isolation to fatigue, then compound. Makes 90lb feel like 200+.",sv:25},
  {id:"dc",n:"DC Rest-Pause",d:"One all-out rest-pause set per exercise. Max intensity, minimal time.",sv:50},
  {id:"mech",n:"Mechanical Drop Sets",d:"Same weight, change angle to extend sets. No load change needed.",sv:30},
  {id:"hybrid",n:"Auto-Select (Smart)",d:"App picks technique per exercise: MYO on isolation, straight on compounds, rest-pause at ceiling.",sv:20},
];

// ═══ GOALS with descriptions ═══
var GOALS=[
  {id:"beach",n:"Beach Body",desc:"Chest, shoulders, arms emphasized. Legs maintained, not prioritized. The classic show-off physique.",cat:"build",vol:{chest:1.5,back:1,shoulders:1.4,biceps:1.4,triceps:1.3,quads:0.6,hams:0.5,core:0.8},cd:0},
  {id:"balanced",n:"Balanced",desc:"Every muscle group trained equally. No weak points, no specialization. Well-rounded development.",cat:"build",vol:{chest:1,back:1,shoulders:1,biceps:1,triceps:1,quads:1,hams:1,core:1},cd:0},
  {id:"tshirt",n:"T-Shirt Muscles",desc:"Chest, arms, and shoulders fill out a shirt. Minimizes lower body to focus upper body size.",cat:"build",vol:{chest:1.5,back:1.1,shoulders:1.4,biceps:1.5,triceps:1.3,quads:0.5,hams:0.5,core:0.6},cd:0},
  {id:"chest",n:"Chest Focus",desc:"Maximum chest volume with maintenance for everything else. For a lagging chest.",cat:"build",vol:{chest:1.8,back:0.8,shoulders:0.8,biceps:0.7,triceps:0.9,quads:0.6,hams:0.5,core:0.5},cd:0},
  {id:"back",n:"Back / V-Taper",desc:"Wide lats, thick upper back, rear delts. Creates the V-taper illusion of a smaller waist.",cat:"build",vol:{chest:0.8,back:1.8,shoulders:1,biceps:1,triceps:0.7,quads:0.6,hams:0.5,core:0.8},cd:0},
  {id:"arms",n:"Arm Growth",desc:"Sleeve-busting biceps and triceps. Both heads of each arm muscle targeted with high volume.",cat:"build",vol:{chest:0.8,back:0.8,shoulders:0.8,biceps:1.8,triceps:1.8,quads:0.6,hams:0.5,core:0.5},cd:0},
  {id:"shoulders",n:"Shoulder Caps",desc:"3D delts from all angles. Side delts, front delts, rear delts all hammered for the capped look.",cat:"build",vol:{chest:0.8,back:1,shoulders:1.8,biceps:0.7,triceps:0.7,quads:0.6,hams:0.5,core:0.7},cd:0},
  {id:"legs",n:"Leg Dev",desc:"Quads, hamstrings, and glutes prioritized. Upper body maintained. For lagging lower body.",cat:"build",vol:{chest:0.6,back:0.7,shoulders:0.6,biceps:0.5,triceps:0.5,quads:1.7,hams:1.5,core:0.8},cd:0},
  {id:"posterior",n:"Posterior Chain",desc:"Back, hamstrings, glutes, rear delts. Everything you see from behind. Improves posture and athleticism.",cat:"build",vol:{chest:0.6,back:1.5,shoulders:1,biceps:0.6,triceps:0.5,quads:0.6,hams:1.5,core:1},cd:0},
  {id:"upper",n:"Upper Focus",desc:"All upper body muscle groups pushed hard. Lower body at maintenance. Best for top-heavy goals.",cat:"build",vol:{chest:1.3,back:1.3,shoulders:1.2,biceps:1.2,triceps:1.2,quads:0.5,hams:0.5,core:0.5},cd:0},
  {id:"strength",n:"Strength",desc:"Heavy compound movements first, hypertrophy accessories second. Lower reps on main lifts.",cat:"build",vol:{chest:1.2,back:1.2,shoulders:0.9,biceps:0.7,triceps:0.7,quads:1.2,hams:1,core:0.8},cd:0},
  {id:"express",n:"Time Crunch",desc:"Maximum stimulus in minimum time. Myo-reps and supersets emphasized. For 30-45 min sessions.",cat:"build",vol:{chest:1,back:1,shoulders:0.8,biceps:0.8,triceps:0.8,quads:0.9,hams:0.8,core:0.6},cd:0},
  {id:"shred",n:"Shred",desc:"Retain muscle while burning fat. Moderate volume + HIIT cardio finishers. Caloric deficit assumed.",cat:"cut",vol:{chest:0.9,back:0.9,shoulders:0.8,biceps:0.8,triceps:0.8,quads:0.9,hams:0.8,core:1},cd:2},
  {id:"lean",n:"Lean Muscle",desc:"Build muscle and stay lean. Slightly lower volume + light conditioning. Moderate surplus.",cat:"cut",vol:{chest:1,back:1,shoulders:0.9,biceps:0.9,triceps:0.9,quads:0.9,hams:0.8,core:0.8},cd:1},
  {id:"contest",n:"Contest Prep",desc:"Peak conditioning and maximum definition. High cardio, maintained volume. Deep deficit phase.",cat:"cut",vol:{chest:1,back:1,shoulders:1,biceps:0.9,triceps:0.9,quads:0.9,hams:0.8,core:1.2},cd:3},
  {id:"athletic",n:"Athletic",desc:"Power, speed, explosiveness. Compound-heavy + plyometric cardio. Trains the whole kinetic chain.",cat:"perf",vol:{chest:0.8,back:1.1,shoulders:0.9,biceps:0.6,triceps:0.6,quads:1.2,hams:1.1,core:1.2},cd:2},
  {id:"functional",n:"Functional",desc:"Real-world strength, core stability, rotational power. Multi-plane movements emphasized.",cat:"perf",vol:{chest:0.8,back:1.1,shoulders:0.9,biceps:0.6,triceps:0.6,quads:1,hams:1,core:1.3},cd:1},
  {id:"longevity",n:"Longevity",desc:"Joint-friendly loading, full ROM, correctives included. Sustainable training for decades.",cat:"health",vol:{chest:0.8,back:1,shoulders:0.9,biceps:0.7,triceps:0.7,quads:0.9,hams:0.9,core:1},cd:1},
  {id:"mobility",n:"Mobility+Muscle",desc:"Stretch-focused reps, pause at lengthened position, tempo work. Build muscle through full ROM.",cat:"health",vol:{chest:0.8,back:1,shoulders:0.9,biceps:0.7,triceps:0.7,quads:0.9,hams:0.9,core:1.1},cd:0},
  {id:"rebuild",n:"Comeback",desc:"Returning from injury, detraining, or long break. Conservative loading, rebuild work capacity.",cat:"health",vol:{chest:0.7,back:0.8,shoulders:0.7,biceps:0.6,triceps:0.6,quads:0.7,hams:0.7,core:0.8},cd:1},
];
var CATS=[{id:"build",n:"MUSCLE",c:C.acc},{id:"cut",n:"FAT LOSS",c:C.red},{id:"perf",n:"PERFORMANCE",c:C.blu},{id:"health",n:"LONGEVITY",c:C.grn}];

var READINESS=[
  {id:"sleep",q:"How did you sleep?",opts:["Terrible","Poor","OK","Good","Great"],w:[0.3,0.6,0.8,1.0,1.1]},
  {id:"soreness",q:"Muscle soreness?",opts:["Wrecked","Quite sore","Mild","None"],w:[0.6,0.8,1.0,1.1]},
  {id:"stress",q:"Stress / mood?",opts:["Very stressed","Stressed","Normal","Great"],w:[0.7,0.85,1.0,1.1]},
  {id:"energy",q:"Energy right now?",opts:["Exhausted","Low","Normal","Wired"],w:[0.6,0.8,1.0,1.1]},
];

// ═══ STORAGE HELPERS (window.storage async API) ═══
function sGet(key, fb) {
  if (typeof window !== "undefined" && window.storage && window.storage.get) {
    return window.storage.get(key).then(function(v) {
      if (v === undefined || v === null) return fb;
      try { return JSON.parse(v); } catch(e) { return v || fb; }
    }).catch(function() { return fb; });
  }
  return Promise.resolve(fb);
}
function sSet(key, val) {
  if (typeof window !== "undefined" && window.storage && window.storage.set) {
    return window.storage.set(key, JSON.stringify(val)).catch(function() {});
  }
  return Promise.resolve();
}
function dateStr() {
  var d = new Date();
  var mm = String(d.getMonth() + 1);
  if (mm.length < 2) mm = "0" + mm;
  var dd = String(d.getDate());
  if (dd.length < 2) dd = "0" + dd;
  return d.getFullYear() + "-" + mm + "-" + dd;
}

// ═══ TIMING MODEL (research: Schoenfeld 2016, rest period meta-analyses 2024) ═══
// All times in MINUTES. Includes set execution + rest + setup/transition.
var TIMING={
  // Per-set execution time (seconds) by rep range
  setDuration:function(reps){return Math.round((reps*4)+10);}, // ~4s/rep standard tempo + 10s setup
  // Rest periods (seconds) by context
  rest:{
    compoundHyp:120,    // 2 min between compound working sets (Schoenfeld: 2-3 min optimal)
    compoundStr:180,    // 3 min for strength-focused compounds
    isolation:75,       // 75s between isolation sets
    superset:15,        // transition between superset partners
    supersetRest:120,   // rest AFTER both exercises in superset
    giantTransit:10,    // transition between giant set exercises
    giantRest:150,      // rest between giant set rounds
    myoMini:15,         // 15s between myo-rep mini-sets (3-5 breaths)
    restPause:20,       // 20s between rest-pause clusters
    dropStrip:12,       // time to change weight in drop set
  },
  // Warmup: first compound of session needs 2-3 warmup sets (~2 min)
  // Subsequent compounds: 1 warmup set (~45s)
  // Isolations: no warmup needed if muscle is warm
  warmup:{first:120,subsequent:45,isolation:0},
  // Exercise transition time (seconds)
  transition:30,
};
// Calculate total time for an exercise (minutes)
function exTime(sets,reps,isCompound,isFirst,method){
  var sd=TIMING.setDuration(reps||10);
  var rest=isCompound?TIMING.rest.compoundHyp:TIMING.rest.isolation;
  var warmup=isFirst?TIMING.warmup.first:isCompound?TIMING.warmup.subsequent:0;
  if(method==="myo"){
    // Activation set + 4 mini-sets with 15s rest = ~3.5 min
    return Math.round((sd+4*(20+TIMING.rest.myoMini)+warmup+TIMING.transition)/60*10)/10;
  }
  if(method==="restpause"){
    // 1 set to failure + 2 clusters with 20s rest = ~2.5 min
    return Math.round((sd+2*(25+TIMING.rest.restPause)+warmup+TIMING.transition)/60*10)/10;
  }
  if(method==="giant"){
    // Single exercise within a giant set circuit: just execution + transition
    return Math.round((sd+TIMING.rest.giantTransit)/60*10)/10;
  }
  if(method==="density"){return 15;} // EDT = fixed 15 min blocks
  if(method==="superset"||method==="preexhaust"){
    // Paired exercise: execution + transition, shared rest handled at pair level
    return Math.round((sd*sets+TIMING.rest.superset*(sets-1)+warmup+TIMING.transition)/60*10)/10;
  }
  // Straight sets: sets * (execution + rest) - last set no rest + warmup + transition
  var total=sets*sd+(sets-1)*rest+warmup+TIMING.transition;
  return Math.round(total/60*10)/10;
}

// ═══ VOLUME LANDMARKS (cross-referenced: Pelland 2025 meta-regression, Schoenfeld 2017, Nuckols) ═══
// NOTE: RP's specific numbers are heuristics, not research constants.
// These values reflect the RESEARCH CONSENSUS, not just RP:
// - Pelland 2025: diminishing returns past ~12 sets/wk, logarithmic dose-response
// - Schoenfeld 2017: 10+ sets > 5 sets (significant); 0.37% gain per additional set
// - Per-session cap: 6-8 sets (Nuckols, Pelland 2025 junk volume threshold)
// - SRA varies by muscle size (small: 36-48h, large: 72-96h)
var VOL_LM={
  chest:{mev:8,mav:14,mrv:20,sra:72,cap:8},back:{mev:8,mav:16,mrv:22,sra:72,cap:8},
  shoulders:{mev:6,mav:14,mrv:20,sra:48,cap:8},biceps:{mev:5,mav:12,mrv:20,sra:36,cap:6},
  triceps:{mev:5,mav:12,mrv:20,sra:36,cap:6},quads:{mev:6,mav:14,mrv:18,sra:96,cap:6},
  hams:{mev:5,mav:12,mrv:18,sra:72,cap:6},core:{mev:3,mav:8,mrv:14,sra:48,cap:6},
};
// Indirect volume overlap (compound→secondary, fractional credit)
var OVERLAP={chest:{triceps:0.5,shoulders:0.3},back:{biceps:0.5,shoulders:0.2},shoulders:{triceps:0.3},quads:{hams:0.2,core:0.3},hams:{core:0.2}};

// ═══ RIR SYSTEM (Robinson 2024: proximity to failure matters, but 2-3 RIR ≈ 0 RIR for hypertrophy) ═══
// Research: Training at 2-3 RIR produces ~equivalent hypertrophy to 0 RIR with less fatigue.
// We ramp from 3 RIR (sustainable) to 1 RIR (peak week), NOT to true failure.
// This is a science-based departure from RP's 4→0 ramp.
function getRIR(wk,ml){
  if(ml<=4)return [3,3,2,1][Math.min(wk-1,3)];
  if(ml===5)return [3,3,2,2,1][Math.min(wk-1,4)];
  return [3,3,3,2,2,1][Math.min(wk-1,5)];
}
function getMesoPhase(wk,ml){if(wk>ml)return "deload";if(wk===1)return "intro";if(wk>=ml)return "peak";return "accumulate";}

// ═══ SCIENCE-BASED FEEDBACK → VOLUME ADJUSTMENT (-2 to +2) ═══
// Research corrections applied:
// - Soreness (DOMS) does NOT correlate with growth (PMID: 34431437). Used ONLY as recovery indicator.
// - Pump is NOT a reliable growth signal. Removed as primary feedback.
// - Performance (progressive overload) IS validated as #1 indicator.
// - Systemic fatigue IS a valid overtraining signal.
// - Joint pain IS a valid exercise-swap trigger.
// Signals: perf(0-2), recovery(0-2), disruption(0-2), joint(0-2)
function calcVolAdj(fb){
  var s=0;
  // Performance is THE primary signal (validated by all research)
  if(fb.perf===2)s+=1;else if(fb.perf===0)s-=1;
  // Recovery readiness (replaces "soreness" - how recovered do you FEEL, not DOMS)
  if(fb.recovery===2)s+=1;else if(fb.recovery===0)s-=1;
  // Systemic disruption (fatigue affecting daily life, sleep, appetite)
  if(fb.disruption>=2)s-=2;else if(fb.disruption===1)s-=1;
  // Joint/connective tissue stress (exercise swap trigger, also volume signal)
  if(fb.joint>=2)s-=2;else if(fb.joint===1)s-=1;
  return Math.max(-2,Math.min(2,s));
}

// ═══ WEEKLY VOLUME CALCULATOR (MEV→MAV ramp + feedback + overlap) ═══
function calcWeekVol(muscle,wk,ml,goalMul,fbAdj,overlapSets){
  var lm=VOL_LM[muscle];if(!lm)return 10;
  var frac=(wk-1)/Math.max(1,ml-1);
  var base=lm.mev+Math.round((lm.mav-lm.mev)*frac);
  base=Math.round(base*(goalMul||1));
  base+=(fbAdj||0);
  base-=Math.round(overlapSets||0);
  return Math.max(lm.mev,Math.min(lm.mrv,base));
}

// ═══ REACTIVE DELOAD DETECTION (research: Henselmans 2024, deload survey) ═══
// Science says: reactive/autoregulated deloads ≥ pre-planned deloads.
// We trigger deload based on ACCUMULATED SIGNALS, not arbitrary timing.
// Mandatory only when meso length exceeded (structural periodization boundary).
function shouldDeload(wk,ml,muscleVols,fbHist,readHist){
  if(wk>ml)return true; // structural boundary
  var signals=0;
  // Signal 1: Multiple muscles near MRV
  var atMRV=0;var ms=Object.keys(VOL_LM);
  for(var i=0;i<ms.length;i++){if((muscleVols[ms[i]]||0)>=VOL_LM[ms[i]].mrv)atMRV++;}
  if(atMRV>=3)signals+=2;else if(atMRV>=2)signals+=1;
  // Signal 2: Performance declining (THE most reliable signal)
  if(fbHist&&fbHist.length>=2){var lt=fbHist.slice(-2);if(lt[0].perf<=0&&lt[1].perf<=0)signals+=2;}
  if(fbHist&&fbHist.length>=3){var lt3=fbHist.slice(-3);if(lt3.every(function(f){return f.perf<=0;}))signals+=1;}
  // Signal 3: Readiness consistently low
  if(readHist&&readHist.length>=2){var lr=readHist.slice(-2);if(lr[0]<0.65&&lr[1]<0.65)signals+=2;}
  // Signal 4: Systemic disruption reported
  if(fbHist&&fbHist.length>=1&&fbHist[fbHist.length-1].disruption>=2)signals+=1;
  // Threshold: 3+ signals = deload recommended
  return signals>=3;
}

// ═══ DYNAMIC DOUBLE PROGRESSION ═══
function getProgression(exName,hist,repRange){
  if(!repRange)repRange="8-12";var p=repRange.split("-");
  var lo=parseInt(p[0])||8;var hi=parseInt(p[1])||12;
  if(!hist||hist.length===0)return{action:"start",weight:null,targetReps:lo,note:"First time - find your "+lo+"-rep weight"};
  var ls=hist[0];if(!ls.sets||ls.sets.length===0)return{action:"start",weight:null,targetReps:lo,note:"No prior data"};
  var lw=ls.sets[0].w;var allTop=true;var anyLow=false;var avg=0;
  for(var i=0;i<ls.sets.length;i++){avg+=ls.sets[i].r;if(ls.sets[i].r<hi)allTop=false;if(ls.sets[i].r<lo)anyLow=true;}
  avg=Math.round(avg/ls.sets.length);
  if(allTop){var nw=lw>=40?lw+5:lw+2.5;if(nw>90)nw=90;return{action:"increase",weight:nw,targetReps:lo,note:"Hit "+hi+" on all sets! Up to "+nw+"lb x "+lo};}
  if(anyLow)return{action:"maintain",weight:lw,targetReps:avg,note:"Building at "+lw+"lb - aim "+Math.min(avg+1,hi)+" reps"};
  return{action:"progress",weight:lw,targetReps:Math.min(avg+1,hi),note:lw+"lb x "+Math.min(avg+1,hi)+" (push for more reps)"};
}

// ═══ STALL DETECTION (enhanced: 0=ok, 1=watch, 2=stalled, 3=regressing) ═══
function detectStall(hist){
  if(!hist||hist.length<2)return 0;
  function best(s){var b={w:0,r:0,v:0};if(!s.sets)return b;for(var i=0;i<s.sets.length;i++){var v=s.sets[i].w*s.sets[i].r;if(v>b.v)b={w:s.sets[i].w,r:s.sets[i].r,v:v};}return b;}
  var l=best(hist[0]);var p=best(hist[1]);
  if(l.v<p.v*0.95)return 3;
  if(!(l.w===p.w&&l.r<=p.r))return 0;
  if(hist.length>=3){var p2=best(hist[2]);if(p.w===p2.w&&p.r<=p2.r)return 2;}
  return 1;
}

// ═══ EXERCISE SWAP TRIGGERS ═══
function shouldSwap(hist,fb){
  var st=detectStall(hist);
  if(st>=2)return{swap:true,reason:st>=3?"Regressing - swap for fresh stimulus":"Stalled 2+ sessions - rotate exercise"};
  if(fb&&fb.joint>=2)return{swap:true,reason:"Joint pain - switch to joint-friendly alternative"};
  if(hist&&hist.length>=8)return{swap:true,reason:"8+ sessions - rotate for novelty"};
  return{swap:false,reason:""};
}

// ═══ EXERCISE SCORING (AthleanX ordering + stretch-mediated + method fit + stall) ═══
// AthleanX pattern: compounds first (CNS priority), then hypertrophy accessories, then isolation finishers
// Research: exercises at long muscle lengths get priority (Wolf 2025, fascicle lengthening)
// Research: core/primary exercises STAY across meso; accessories rotate (repeated bout benefit)
var STRETCH_BONUS={"DB Incline Curls":15,"DB Floor Flys":12,"DB Overhead Extensions":15,"DB RDLs":15,"DB Bulgarian Split Squats":12,"DB Pullover (chest)":15,"DB Incline Press":10,"Weighted Dips (chest)":12,"DB Single Leg RDLs":12,"DB Spider Curls":10,"Hanging Leg Raises":8};
// Exercises that should STAY across meso (core movements, per AthleanX finding)
var ANCHOR_EX={"DB Bench Press":1,"Weighted Pull-ups":1,"DB OHP":1,"DB Bulgarian Split Squats":1,"DB RDLs":1,"DB Rows":1,"Dips (upright)":1,"DB Hip Thrusts":1};
function scoreEx(ex,mid,hist){
  var s=ex.m*10;
  // Method compatibility bonus
  if(mid==="myo"&&ex.myo)s+=20;if(mid==="mech"&&ex.drop)s+=20;
  if(mid==="preexh"&&ex.t==="I")s+=15;if(mid==="dc"&&ex.t==="C")s+=15;
  // Stretch-mediated hypertrophy bonus (Wolf 2025)
  if(STRETCH_BONUS[ex.n])s+=STRETCH_BONUS[ex.n];
  // Compound priority (AthleanX CNS-first principle)
  if(ex.t==="C")s+=10;
  // Anchor exercise bonus (stays across meso, per AthleanX + repeated bout research)
  if(ANCHOR_EX[ex.n])s+=8;
  // Stall penalty (but research says: KEEP exercises longer before rotating, not less)
  // Only penalize at severe stall (3 = regressing), not mild stall
  if(hist&&hist[ex.n]){var st=detectStall(hist[ex.n]);if(st>=3)s-=25;else if(st>=2)s-=10;}
  return s;
}

// ═══ READINESS → VOLUME/INTENSITY MODIFIER ═══
function readinessMod(score){
  if(score>=1.0)return{vol:1.05,note:"Full send - +1 set per muscle"};
  if(score>=0.9)return{vol:1.0,note:"Hit targets"};
  if(score>=0.8)return{vol:0.95,note:"Proceed as planned"};
  if(score>=0.7)return{vol:0.85,note:"Drop 1 set per muscle"};
  if(score>=0.6)return{vol:0.7,note:"Drop 2 sets, -10% weight"};
  return{vol:0.5,note:"Active recovery or deload"};
}

// ═══ PRIMER EXERCISES (band/bodyweight activation per muscle) ═══
var PRIMERS={
  chest:[{n:"Band Chest Stretch Press",mv:"press"},{n:"Pushup Shoulder Taps",mv:"press"}],
  back:[{n:"Band Pull-Aparts",mv:"pull"},{n:"Scapular Pull-ups",mv:"pull"}],
  shoulders:[{n:"Banded Ext. Rotation",mv:"curl"},{n:"Band Prone Press",mv:"press"}],
  biceps:[{n:"Band Curls (light)",mv:"curl"}],
  triceps:[{n:"Band Pushdowns (light)",mv:"press"}],
  quads:[{n:"Bodyweight Squat Reaches",mv:"squat"},{n:"Banded Overhead Squats",mv:"squat"}],
  hams:[{n:"Banded Hip Thrusts (light)",mv:"squat"},{n:"Band Pull-Throughs (light)",mv:"squat"}],
  core:[{n:"Dead Bugs",mv:"press"},{n:"Band Pallof Hold",mv:"press"}],
};

// ═══ GRIT FINISHERS (one per workout, rotated) ═══
var GRIT=[
  {n:"DB Farmer Carry",desc:"Grab heaviest DBs. Walk for 3 min, rest-pause as needed. Grip, traps, core endurance.",mv:"squat",for:["quads","hams","core"]},
  {n:"Dead Hang Challenge",desc:"Hang from pull-up bar. Max time. Rest 30s. Repeat for 3 min total. Grip and lat endurance.",mv:"pull",for:["back","biceps"]},
  {n:"Pushup Century",desc:"100 pushups. Break into sets as needed. Clock is running. Beat your time next session.",mv:"press",for:["chest","triceps","shoulders"]},
  {n:"Assault Bike Sprint",desc:"30 seconds absolute max effort. Rest 30s. Repeat 4-6 times. Cardiovascular grit.",mv:"cardio",for:["quads","hams"]},
  {n:"Wall Sit Hold",desc:"Back against wall, thighs parallel. Hold max time. Rest 30s, repeat 3 rounds. Quad endurance.",mv:"squat",for:["quads"]},
  {n:"Band Walk Marathon",desc:"Band around ankles. Lateral walk 20 steps each direction. 3 min continuous. Glute medius endurance.",mv:"squat",for:["hams","quads"]},
];

// ═══ INTENSITY TECHNIQUE PROGRESSION (unlocks based on total sessions trained) ═══
var INTENSITY_TIERS=[
  {minSessions:0,id:"ff",n:"Form Failure",desc:"Stop when you can no longer complete a rep with proper form. The baseline intensity marker."},
  {minSessions:0,id:"rir",n:"RIR Autoregulation",desc:"Reps In Reserve - stop with specified reps left before failure. Adjusts daily based on readiness."},
  {minSessions:12,id:"touchup",n:"Touch-Up Sets",desc:"1 rep at +5% over working weight before main sets. Post-activation potentiation makes working weight feel lighter."},
  {minSessions:12,id:"speed",n:"Speed Reps",desc:"2-4 x 5 at 50% working weight with max explosive intent after strength work. Builds power and motor unit recruitment."},
  {minSessions:16,id:"triple",n:"Triple Double",desc:"3 exercises, same muscle: 6 reps (heavy) to 12 reps (moderate) to 24 reps (light). Descending difficulty, ascending fatigue."},
  {minSessions:16,id:"hid50",n:"HID-50 Drop Sets",desc:"Set 1: 3-5 reps, drop 50%, to failure. Set 2: 6-10 reps, drop 50%, to mech failure. Set 3: 6-10 straight. Escalating intensity."},
  {minSessions:16,id:"onefive",n:"1.5 Rep Method",desc:"Full eccentric, half concentric, back down, full concentric = 1 rep. Doubles time at the hardest portion. Devastating growth stimulus."},
  {minSessions:24,id:"tempo5",n:"5-Sec Eccentric",desc:"Every rep: 5 full seconds lowering. 3 x 6-8 reps. Massive time under tension. Use 60-70% of normal weight."},
  {minSessions:24,id:"leniso",n:"Lengthened Iso Hold",desc:"5-second pause at the stretched/bottom position of every rep. 3 x 6-8. Exploits stretch-mediated hypertrophy (Wolf 2025)."},
  {minSessions:24,id:"cat5",n:"CAT-5 Acceleration",desc:"1 x 3 heavy (80%), then 4 x 4 explosive (65%). Heavy set primes nervous system, speed sets build power endurance."},
  {minSessions:32,id:"epf",n:"Effective Partials",desc:"After form failure, continue with partial ROM reps until even partials fail. Exhausts every remaining motor unit."},
  {minSessions:32,id:"sudden",n:"Sudden Death Sets",desc:"One exercise, 4-minute timer, 100+ reps. Rest as needed but clock runs. Builds extreme muscular endurance and mental toughness."},
  {minSessions:32,id:"amrap5",n:"AMRAP Finisher",desc:"5 minutes, one exercise, as many reps as possible. Track total and beat it. Different from Sudden Death: no rep target, just max output."},
];

// ═══ LOAD-CEILING PROGRESSION LADDER ═══
var CEIL_LADDER = [
  {step: "Add reps", desc: "Push from 8 to 12+ reps at 90lb before advancing technique."},
  {step: "Add sets", desc: "Go from 3 to 4-5 sets at 90lb to increase total volume."},
  {step: "Myo-reps", desc: "Activation set of 15-20 at 90lb + 3-5 mini-sets of 3-5 reps (15s rest)."},
  {step: "Drop sets", desc: "90lb to failure, immediately drop 20-25% and rep out. Repeat 2-3 drops."},
  {step: "Decrease rest", desc: "Cut rest from 120s to 60-45s. Same weight, more metabolic stress."},
  {step: "Tempo work", desc: "4-second eccentrics at 90lb. 40-70s time under tension per set."},
  {step: "Harder variation", desc: "Switch to a mechanically harder exercise (e.g., flat press to incline, bilateral to single-arm)."},
];

function buildProgram(splitObj,methodObj,goalObj,mins,weekNum,mesoLen,fbAdj,exHistory){
  var tm=1-(methodObj.sv/100);var cl=goalObj.cd||0;var cm=cl>0?Math.min(10,cl*4):0;var lm=mins-cm;var sessions=[];
  var mid=methodObj.id;var wk=weekNum||1;var ml=mesoLen||4;var rir=getRIR(wk,ml);var phase=getMesoPhase(wk,ml);
  // Calculate target rep range based on RIR ramp (higher RIR = higher reps, lower RIR = heavier)
  var baseReps=rir>=3?"10-15":rir>=2?"8-12":"6-10";
  splitObj.layout.forEach(function(day,di){var exs=[];var used=0;var firstComp=true;
    day.g.forEach(function(muscle){
      var pool=EX[muscle];if(!pool)return;
      var vm=goalObj.vol[muscle]||1;
      // ── VOLUME LANDMARKS: calculate weekly target, divide by frequency ──
      var weeklyTarget=calcWeekVol(muscle,wk,ml,vm,fbAdj?fbAdj[muscle]:0,0);
      var freq=Math.max(1,splitObj.layout.filter(function(d){return d.g.indexOf(muscle)>=0;}).length);
      var sessionTarget=Math.ceil(weeklyTarget/freq);
      var cap=VOL_LM[muscle]?VOL_LM[muscle].cap:10;
      sessionTarget=Math.min(sessionTarget,cap); // per-session cap (Pelland 2025)
      if(phase==="deload")sessionTarget=Math.max(2,Math.ceil(sessionTarget*0.5));
      var cnt=Math.max(1,Math.min(4,sessionTarget));
      var avail=(lm*tm)-used;if(avail<5)return;
      cnt=Math.min(cnt,Math.floor(avail/5));if(cnt<1)cnt=1;

      // ── TIER 1: PRIMER (band/bodyweight activation) ──
      if(phase!=="deload"&&PRIMERS[muscle]){
        var primer=PRIMERS[muscle][di%PRIMERS[muscle].length];
        exs.push({name:primer.n,muscle:muscle,tech:"primer",sets:2,reps:"10-15",time:2,mv:primer.mv,note:"PRIMER: Light activation. Wake up the muscle and stabilizers before heavy work.",tier:"primer"});
        used+=2;
      }

      // Sort pool by exercise score (stretch-mediated bonus, method fit, stall penalty)
      var scored=pool.slice().sort(function(a,b){return scoreEx(b,mid,exHistory)-scoreEx(a,mid,exHistory);});
      var comps=scored.filter(function(e){return e.t==="C";});
      var isos=scored.filter(function(e){return e.t!=="C";});
      var bw=scored.filter(function(e){return e.t==="B";});
      var off=di%2===0?0:Math.min(1,comps.length-1);

      // ── PRE-EXHAUST: isolation FIRST, then compound ──
      if(mid==="preexh"){
        var iso1=isos[di%isos.length]||isos[0];
        var comp1=comps[off]||comps[0];
        if(iso1&&comp1&&used+(iso1.m+comp1.m)*tm<lm){
          var pxTime=exTime(3,13,false,false,"superset")+exTime(3,10,true,firstComp,"superset")+Math.round(3*TIMING.rest.supersetRest/60);
          exs.push({name:iso1.n,muscle:muscle,tech:"preexhaust",sets:3,reps:"12-15",time:Math.round(pxTime/2),mv:iso1.mv,note:"Pre-exhaust: do this FIRST, no rest, straight into compound"});
          exs.push({name:comp1.n,muscle:muscle,tech:"preexhaust",sets:3,reps:"8-12",time:Math.round(pxTime/2),mv:comp1.mv,note:"Superset: immediately after isolation"});
          firstComp=false;used+=pxTime;
        }
        return;
      }

      // ── GIANT SETS: 4 exercises per muscle, circuit ──
      if(mid==="giant"){
        var giants=[];
        for(var gi=0;gi<Math.min(4,pool.length);gi++){
          var gx=gi<isos.length?isos[gi]:(gi<comps.length?comps[gi]:bw[0]);
          if(gx)giants.push(gx);
        }
        if(giants.length>=3){
          giants.forEach(function(gx,gxi){
            var gtTime=exTime(3,gx.t==="I"?13:9,gx.t==="C",false,"giant");
            exs.push({name:gx.n,muscle:muscle,tech:"giant",sets:3,reps:gx.t==="I"?"12-15":"8-10",time:gtTime,mv:gx.mv,note:"Giant set "+(gxi+1)+"/"+giants.length+(gxi<giants.length-1?" - NO REST, go straight to next":"  - REST 2-3 min, repeat circuit")});
            used+=gtTime;
          });
          return;
        }
      }

      // ── DENSITY/EDT: pair exercises in timed blocks ──
      if(mid==="density"){
        var comp2=comps[off]||comps[0];
        if(comp2){
          exs.push({name:comp2.n,muscle:muscle,tech:"density",sets:1,reps:"5 reps per round",time:15,mv:comp2.mv,note:"EDT block: alternate with next exercise, 5 reps each, minimal rest, 15 min timer. Beat total reps next session."});
          used+=15;
        }
        return;
      }

      // ── MECHANICAL DROP SETS: hardest angle first, same weight ──
      if(mid==="mech"){
        var mechOrder=comps.filter(function(e){return e.drop;}).slice(0,3);
        if(mechOrder.length>=2){
          mechOrder.forEach(function(mx,mxi){
            var mxTime=mxi===0?exTime(3,8,true,firstComp,"straight"):1;
            exs.push({name:mx.n,muscle:muscle,tech:"mechanical",sets:mxi===0?3:0,reps:"to failure",time:mxTime,mv:mx.mv,note:mxi===0?"Mechanical drop: start here at hardest angle, go to failure":"SAME WEIGHT - immediately switch to this easier angle, to failure"});
            if(mxi===0)firstComp=false;used+=mxTime;
          });
          return;
        }
      }

      // ── MYO-REP: activation set + mini-sets ──
      if(mid==="myo"){
        var picked=[];
        for(var mi=0;mi<cnt;mi++){
          var mx=mi<isos.length?isos[(mi+off)%isos.length]:comps[mi%comps.length];
          if(mx)picked.push(mx);
        }
        picked.forEach(function(ex){
          var isMyo=ex.myo;
          var myTime=exTime(isMyo?1:3,isMyo?15:10,ex.t==="C",firstComp&&ex.t==="C",isMyo?"myo":"straight");
          exs.push({name:ex.n,muscle:muscle,tech:isMyo?"myo":"straight",sets:isMyo?1:3,reps:isMyo?"12-20 + 3-5x3-5":"8-12",time:myTime,mv:ex.mv,note:isMyo?"Myo-rep: 12-20 reps to near failure, then 15s rest, 3-5 mini-sets of 3-5 reps. Stop when you lose a rep.":"Standard sets (not suitable for myo-reps)"});
          if(ex.t==="C")firstComp=false;used+=myTime;
        });
        return;
      }

      // ── DC REST-PAUSE: 1 all-out rest-pause set per exercise ──
      if(mid==="dc"){
        var dcEx=comps[off]||comps[0];
        if(dcEx){
          var rpTime=exTime(1,8,true,firstComp,"restpause");
          exs.push({name:dcEx.n,muscle:muscle,tech:"restpause",sets:1,reps:"6-10 + RP + RP",time:rpTime,mv:dcEx.mv,note:"DC Rest-Pause: 1 set to failure (6-10 reps), rack it, 15 deep breaths, to failure again (3-5), breathe, to failure (2-3). ONE all-out extended set."});
          firstComp=false;used+=rpTime;
        }
        return;
      }

      // ── STRAIGHT SETS / HYBRID (default) ──
      var picked=[];
      for(var i=0;i<cnt&&i+off<comps.length;i++)picked.push(comps[i+off]);
      for(var j=0;picked.length<cnt&&j<isos.length;j++)picked.push(isos[j]);
      picked.forEach(function(ex){
        var tech="straight";
        if(mid==="hybrid")tech=(ex.t==="I"&&ex.myo)?"myo":"straight";
        var reps=tech==="myo"?"12-20 + 3-5x3-5":baseReps;
        var sets=tech==="myo"?1:Math.min(sessionTarget,4);
        if(phase==="deload"){reps="8-10 easy";sets=2;tech="straight";}
        var isComp=ex.t==="C";var repsNum=parseInt(reps)||10;
        var eTime=exTime(sets,repsNum,isComp,firstComp&&isComp,tech);
        var note=phase==="deload"?"DELOAD: 50% weight, easy reps. Should feel refreshing.":"W"+wk+" / "+rir+" RIR / "+phase;
        exs.push({name:ex.n,muscle:muscle,tech:tech,sets:sets,reps:reps,time:eTime,mv:ex.mv,note:note,rir:rir});
        if(isComp)firstComp=false;used+=eTime;
      });
    });

    // Add cardio if goal requires it
    if(cl>0){var cEx=EX.cardio[cl>=3?1:cl>=2?0:3];var cTime=cEx.t==="H"?8:15;exs.push({name:cEx.n,muscle:"cardio",tech:cEx.t==="H"?"hiit":"steady",sets:1,reps:"",time:cTime,mv:"cardio"});}

    // ── TIER 5: GRIT FINISHER (one per workout, rotated by day) ──
    if(phase!=="deload"){
      var gritOptions=GRIT.filter(function(g){
        for(var gi=0;gi<g.for.length;gi++){if(day.g.indexOf(g.for[gi])>=0)return true;}return false;
      });
      if(gritOptions.length>0){
        var gritPick=gritOptions[di%gritOptions.length];
        exs.push({name:gritPick.n,muscle:"grit",tech:"grit",sets:1,reps:"see desc",time:4,mv:gritPick.mv,note:"GRIT: "+gritPick.desc,tier:"grit"});
      }
    }

    // Trim if over time budget (trim from hypertrophy tier, never primers or grit)
    var tot=exs.reduce(function(a,e){return a+e.time;},0);
    while(tot>mins&&exs.length>3){
      // Find a hypertrophy exercise to remove (not primer, not grit, not strength)
      var removeIdx=-1;
      for(var ri=exs.length-1;ri>=0;ri--){
        if(exs[ri].tier!=="primer"&&exs[ri].tier!=="grit"&&exs[ri].muscle!=="cardio"){removeIdx=ri;break;}
      }
      if(removeIdx<0)break;
      exs.splice(removeIdx,1);
      tot=exs.reduce(function(a,e){return a+e.time;},0);
    }
    sessions.push({label:day.n,exercises:exs,est:tot});
  });
  return sessions;
}

// ═══ MAIN APP ═══
export default function Forge(){
  var _v=useState("setup"),view=_v[0],setView=_v[1];
  var _st=useState(0),step=_st[0],setStep=_st[1];
  var _gl=useState(null),goal=_gl[0],setGoal=_gl[1];
  var _sp=useState(null),split=_sp[0],setSplit=_sp[1];
  var _mt=useState(null),method=_mt[0],setMethod=_mt[1];
  var _tm=useState(60),mins=_tm[0],setMins=_tm[1];
  var _ml=useState(4),mesoLen=_ml[0],setMesoLen=_ml[1];
  var _gc=useState(null),goalCat=_gc[0],setGoalCat=_gc[1];
  var _nd=useState(4),numDays=_nd[0],setNumDays=_nd[1];
  var _ad=useState(0),aDay=_ad[0],setADay=_ad[1];
  var _ae=useState(0),aEx=_ae[0],setAEx=_ae[1];
  var _lg=useState({}),log=_lg[0],setLog=_lg[1];
  var _rd=useState(null),readiness=_rd[0],setReadiness=_rd[1];
  var _rmod=useState(1.0),readMod=_rmod[0],setReadMod=_rmod[1];
  var _fp=useState(1),fPerf=_fp[0],setFP=_fp[1];
  var _fs=useState(0),fSore=_fs[0],setFS=_fs[1];
  var _fpu=useState(1),fPump=_fpu[0],setFPu=_fpu[1];
  var _fdi=useState(0),fDisrupt=_fdi[0],setFDi=_fdi[1];
  var _fjo=useState(0),fJoint=_fjo[0],setFJo=_fjo[1];
  var _ed=useState(null),editDay=_ed[0],setEditDay=_ed[1];
  var _ep=useState(null),editPick=_ep[0],setEditPick=_ep[1];
  var _ci=useState(""),customIn=_ci[0],setCI=_ci[1];
  var _pg=useState([]),program=_pg[0],setProgram=_pg[1];
  // Popups
  var _pop=useState(null),popup=_pop[0],setPopup=_pop[1];
  // ═══ PERSISTENT STORAGE STATE ═══
  var _exh=useState({}),exHist=_exh[0],setExHist=_exh[1]; // {exerciseName: [{sets:[{w,r}], date},...]}
  var _prs=useState({}),prs=_prs[0],setPRs=_prs[1]; // {exerciseName: {w,r,vol,date}}
  var _sIdx=useState([]),sessIdx=_sIdx[0],setSessIdx=_sIdx[1]; // [{date,label,goal,split}]
  var _stl=useState(false),stLoaded=_stl[0],setStLoaded=_stl[1];
  var _newPrs=useState([]),newPRs=_newPrs[0],setNewPRs=_newPrs[1]; // PRs hit this session
  var _saved=useState(false),sessionSaved=_saved[0],setSessionSaved=_saved[1];
  var _wk=useState(1),weekNum=_wk[0],setWeekNum=_wk[1];

  var goalObj=GOALS.find(function(g){return g.id===goal;})||GOALS[1];
  var splitObj=SPLITS.find(function(s){return s.id===split;})||SPLITS[3];
  var methodObj=METHODS.find(function(m){return m.id===method;})||METHODS[0];
  var filtSplits=SPLITS.filter(function(s){return s.d===numDays;});
  var filtGoals=goalCat?GOALS.filter(function(g){return g.cat===goalCat;}):GOALS;
  var vm=calcVolAdj({perf:fPerf,recovery:fSore,disruption:fDisrupt,joint:fJoint});

  // ═══ LOAD PERSISTED DATA ON MOUNT ═══
  useEffect(function() {
    sGet("forge_exh", {}).then(function(d) { setExHist(d); });
    sGet("forge_prs", {}).then(function(d) { setPRs(d); });
    sGet("forge_idx", []).then(function(d) {
      setSessIdx(d);
      // Calculate week number from session count
      if (d && d.length > 0) {
        var wk = Math.floor(d.length / (splitObj.d || 4)) + 1;
        setWeekNum(Math.max(1, Math.min(wk, 52)));
      }
    });
    setStLoaded(true);
  }, []);

  // ═══ GET LAST SESSION DATA FOR AN EXERCISE ═══
  function getLastData(exName) {
    var hist = exHist[exName];
    if (!hist || hist.length === 0) return null;
    return hist[0]; // most recent
  }

  // ═══ STALL DETECTION: 0=ok, 1=warning (1 session), 2=stalled (2+ sessions) ═══
  function getStallLevel(exName) {
    var hist = exHist[exName];
    if (!hist || hist.length < 2) return 0;
    var last = hist[0];
    var prev = hist[1];
    if (!last.sets || !last.sets.length || !prev.sets || !prev.sets.length) return 0;
    // Compare best set from each session
    var lastBest = {w: 0, r: 0};
    var prevBest = {w: 0, r: 0};
    last.sets.forEach(function(s) { if (s.w > lastBest.w || (s.w === lastBest.w && s.r > lastBest.r)) { lastBest = s; } });
    prev.sets.forEach(function(s) { if (s.w > prevBest.w || (s.w === prevBest.w && s.r > prevBest.r)) { prevBest = s; } });
    // Stalled = same or less weight, same or fewer reps
    var stall1 = (lastBest.w <= prevBest.w && lastBest.r <= prevBest.r);
    if (!stall1) return 0;
    if (hist.length >= 3) {
      var prev2 = hist[2];
      if (prev2.sets && prev2.sets.length) {
        var prev2Best = {w: 0, r: 0};
        prev2.sets.forEach(function(s) { if (s.w > prev2Best.w || (s.w === prev2Best.w && s.r > prev2Best.r)) { prev2Best = s; } });
        if (prevBest.w <= prev2Best.w && prevBest.r <= prev2Best.r) return 2;
      }
    }
    return 1;
  }

  // ═══ GET LOAD-CEILING STATUS ═══
  function getCeilingStep(exName) {
    var hist = exHist[exName];
    if (!hist || hist.length === 0) return -1;
    var last = hist[0];
    var atCeiling = false;
    last.sets.forEach(function(s) { if (s.w >= 85) atCeiling = true; }); // near 90lb ceiling
    if (!atCeiling) return -1;
    // Check which ladder step they might be at based on reps
    var maxReps = 0;
    last.sets.forEach(function(s) { if (s.r > maxReps) maxReps = s.r; });
    if (maxReps < 12) return 0; // still adding reps
    if (last.sets.length < 4) return 1; // add sets
    return 2; // ready for myo-reps
  }

  // ═══ RECOMMEND WEIGHT/REPS BASED ON HISTORY ═══
  function getRecommendation(exName, setIndex) {
    var hist = exHist[exName];
    if (!hist || hist.length === 0) return null;
    var lastEntry = hist[0];
    if (!lastEntry.sets || !lastEntry.sets[setIndex]) {
      // If fewer sets last time, use the last available set
      if (lastEntry.sets && lastEntry.sets.length > 0) {
        var fallback = lastEntry.sets[lastEntry.sets.length - 1];
        return {w: fallback.w, r: fallback.r, isExact: false};
      }
      return null;
    }
    var s = lastEntry.sets[setIndex];
    return {w: s.w, r: s.r, isExact: true};
  }

  // ═══ SAVE SESSION TO PERSISTENT STORAGE ═══
  function saveSession() {
    var day = program[aDay];
    if (!day) return;
    var ds = dateStr();
    var exData = [];
    var newHist = Object.assign({}, exHist);
    var newPRsMap = Object.assign({}, prs);
    var prList = [];

    day.exercises.forEach(function(ex, ei) {
      var k = aDay + "-" + ei;
      var entry = log[k];
      if (!entry || !entry.sets) return;
      var sets = [];
      entry.sets.forEach(function(s) { if (s && s.w && s.r) sets.push({w: s.w, r: s.r}); });
      if (sets.length === 0) return;

      exData.push({name: ex.name, muscle: ex.muscle, tech: ex.tech, sets: sets});

      // Update exercise history (keep last 5 sessions)
      var h = (newHist[ex.name] || []).slice();
      h.unshift({sets: sets, date: ds});
      if (h.length > 5) h = h.slice(0, 5);
      newHist[ex.name] = h;

      // Check for PRs (weight PR or volume PR)
      var topW = 0;
      var topR = 0;
      var totVol = 0;
      sets.forEach(function(s) {
        if (s.w > topW || (s.w === topW && s.r > topR)) { topW = s.w; topR = s.r; }
        totVol += s.w * s.r;
      });
      var prevPR = newPRsMap[ex.name];
      var isNewPR = false;
      if (!prevPR) {
        isNewPR = true;
      } else if (topW > prevPR.w) {
        isNewPR = true;
      } else if (topW === prevPR.w && topR > prevPR.r) {
        isNewPR = true;
      }
      if (isNewPR) {
        newPRsMap[ex.name] = {w: topW, r: topR, vol: totVol, date: ds};
        prList.push({name: ex.name, w: topW, r: topR});
      }
    });

    setExHist(newHist);
    setPRs(newPRsMap);
    setNewPRs(prList);
    sSet("forge_exh", newHist);
    sSet("forge_prs", newPRsMap);

    // Update session index
    var newIdx = sessIdx.slice();
    newIdx.push({date: ds, label: day.label, goal: goal, split: split, method: method});
    setSessIdx(newIdx);
    sSet("forge_idx", newIdx);

    // Save full session data
    sSet("forge_s_" + ds + "_" + aDay, {
      label: day.label,
      exercises: exData,
      readiness: readiness,
      readMod: readMod,
      feedback: {perf: fPerf, sore: fSore, vm: vm},
      week: weekNum
    });

    setSessionSaved(true);
  }

  function generateProg(){if(!goal||!split||!method)return;setProgram(buildProgram(splitObj,methodObj,goalObj,mins,weekNum,mesoLen,null,exHist));}
  function pill(label,active,color,onClick,key){return <button key={key||label} onClick={onClick} style={{padding:"7px 14px",fontSize:13,fontFamily:FB,fontWeight:active?600:400,background:active?(color+"18"):"transparent",color:active?color:C.dim,border:"1px solid "+(active?(color+"60"):C.bdr),borderRadius:20,cursor:"pointer",whiteSpace:"nowrap"}}>{label}</button>;}
  function mainBtn(l,fn,dis){return <button onClick={fn} disabled={dis} style={{width:"100%",padding:"15px 0",background:dis?C.bar:C.acc,color:dis?C.dim:"#000",border:"none",borderRadius:12,fontSize:16,fontWeight:700,fontFamily:FD,letterSpacing:2,cursor:dis?"not-allowed":"pointer",opacity:dis?0.4:1}}>{l}</button>;}
  function secBtn(l,fn){return <button onClick={fn} style={{width:"100%",padding:"13px 0",background:"transparent",color:C.mid,border:"1px solid "+C.bdr,borderRadius:12,fontSize:14,fontWeight:600,fontFamily:FD,letterSpacing:1.5,cursor:"pointer"}}>{l}</button>;}
  function hd(t){return <div style={{fontSize:14,fontWeight:700,fontFamily:FD,letterSpacing:2,color:C.acc,marginBottom:10}}>{t}</div>;}
  function cd(ch,bc){return <div style={{background:C.sf,border:"1px solid "+(bc||C.bdr),borderRadius:16,padding:18,marginBottom:14}}>{ch}</div>;}
  function logSet(di,ei,si,w,r){var k=di+"-"+ei;setLog(function(p){var n=Object.assign({},p);var prev=n[k]||{sets:[],done:false};var ns=prev.sets.slice();ns[si]={w:parseFloat(w)||0,r:parseInt(r)||0};n[k]={sets:ns,done:prev.done};return n;});}
  function getAlts(muscle,cur){var pool=EX[muscle]||[];var b=pool.filter(function(e){return e.n!==cur;}).slice(0,3);var r=pool.filter(function(e){return e.n!==cur&&b.indexOf(e)<0;});return{best:b,rest:r};}

  // Info button for techniques
  function techBtn(techId){
    if(!techId||techId==="straight")return null;
    return <button onClick={function(e){e.stopPropagation();setPopup({type:"tech",id:techId});}} style={{width:18,height:18,borderRadius:"50%",background:C.pur+"20",color:C.pur,border:"1px solid "+C.pur+"40",fontSize:10,fontWeight:700,cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",marginLeft:4,flexShrink:0}}>i</button>;
  }
  // Info button for exercises
  function exBtn(exName){
    return <button onClick={function(e){e.stopPropagation();setPopup({type:"exercise",id:exName});}} style={{width:22,height:22,borderRadius:"50%",background:C.blu+"20",color:C.blu,border:"1px solid "+C.blu+"40",fontSize:10,fontWeight:700,cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>?</button>;
  }

  // ═══ POPUP OVERLAY ═══
  function renderPopup(){
    if(!popup)return null;
    var title="";var body="";var extra=null;
    if(popup.type==="tech"){var t=TECH_INFO[popup.id];if(t){title=t.n;body=t.d;}else{title=popup.id;body="No description available.";}}
    else if(popup.type==="stall"){
      title="STALLED: "+popup.id;
      body="Same weight and reps for 2+ sessions. Time to change stimulus.";
      var ceil=getCeilingStep(popup.id);
      if(ceil>=0){
        extra=<div style={{marginTop:12}}><div style={{fontSize:11,fontWeight:700,fontFamily:FD,letterSpacing:1,color:C.orn,marginBottom:8}}>90LB CEILING LADDER</div>{CEIL_LADDER.map(function(s,i){return <div key={i} style={{display:"flex",gap:8,padding:"6px 0",borderBottom:"1px solid "+C.bdr,opacity:i<=ceil?1:0.4}}><div style={{width:20,height:20,borderRadius:"50%",background:i<ceil?C.grn+"30":i===ceil?C.acc+"30":C.bar,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:i<ceil?C.grn:i===ceil?C.acc:C.dim,flexShrink:0}}>{i<ceil?"*":i+1}</div><div><div style={{fontSize:12,fontWeight:600,color:i===ceil?C.acc:C.txt}}>{s.step}</div><div style={{fontSize:10,color:C.dim,marginTop:2}}>{s.desc}</div></div></div>;})}</div>;
      } else {
        var alts=getAlts(popup.muscle||"chest",popup.id);
        extra=<div style={{marginTop:12}}><div style={{fontSize:11,fontWeight:700,fontFamily:FD,letterSpacing:1,color:C.grn,marginBottom:8}}>SUGGESTED SWAPS</div>{alts.best.map(function(a){return <div key={a.n} style={{padding:"6px 0",fontSize:12,color:C.mid,borderBottom:"1px solid "+C.bdr}}>{a.n}</div>;})}</div>;
      }
    }
    else{title=popup.id;body=EX_INFO[popup.id]||"Perform with controlled tempo. Lower with 2-3 seconds, brief pause at bottom/stretch position, drive up with intent. Each full up-and-down counts as 1 rep.";}
    return <div onClick={function(){setPopup(null);}} style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.8)",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div onClick={function(e){e.stopPropagation();}} style={{background:C.sf,border:"1px solid "+C.bdr,borderRadius:20,padding:24,maxWidth:360,width:"100%",maxHeight:"80vh",overflowY:"auto"}}>
        <div style={{fontSize:20,fontWeight:700,fontFamily:FD,letterSpacing:2,color:C.acc,marginBottom:12}}>{title}</div>
        <div style={{fontSize:13,color:C.mid,lineHeight:1.7}}>{body}</div>
        {extra}
        <div style={{marginTop:16}}>{mainBtn("GOT IT",function(){setPopup(null);})}</div>
      </div>
    </div>;
  }

  // ═══ RENDER LAST SESSION HINT + STALL BADGE ═══
  function renderExHint(exName, muscle) {
    var last = getLastData(exName);
    var stall = getStallLevel(exName);
    if (!last && stall === 0) return null;
    var parts = [];
    if (last && last.sets && last.sets.length > 0) {
      var summary = last.sets.map(function(s) { return s.w + "x" + s.r; }).join(", ");
      parts.push(<span key="last" style={{fontSize:10,color:C.dim}}>{"Last: " + summary}</span>);
      if (last.date) {
        parts.push(<span key="date" style={{fontSize:9,color:C.dim,marginLeft:4}}>{"(" + last.date + ")"}</span>);
      }
    }
    if (stall >= 2) {
      parts.push(<button key="stall" onClick={function(e){e.stopPropagation();setPopup({type:"stall",id:exName,muscle:muscle});}} style={{fontSize:9,fontWeight:700,fontFamily:FD,letterSpacing:1,color:"#000",background:C.red,border:"none",borderRadius:4,padding:"2px 6px",marginLeft:6,cursor:"pointer"}}>STALLED</button>);
    } else if (stall === 1) {
      parts.push(<span key="warn" style={{fontSize:9,fontWeight:700,fontFamily:FD,letterSpacing:1,color:C.orn,marginLeft:6}}>WATCH</span>);
    }
    // At-ceiling indicator
    var ceil = getCeilingStep(exName);
    if (ceil >= 0) {
      parts.push(<span key="ceil" style={{fontSize:9,fontWeight:700,fontFamily:FD,letterSpacing:1,color:C.pur,marginLeft:6}}>@90LB</span>);
    }
    return <div style={{display:"flex",alignItems:"center",flexWrap:"wrap",gap:2,marginTop:2}}>{parts}</div>;
  }

  return (
    <div style={{maxWidth:440,margin:"0 auto",minHeight:"100vh",background:C.bg,color:C.txt,fontFamily:FB}}>
      <style>{CSS_ANIM}</style>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      {renderPopup()}

      {/* HEADER */}
      <div style={{padding:"16px 20px 12px",borderBottom:"1px solid "+C.bdr,position:"sticky",top:0,zIndex:10,background:C.bg}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{display:"flex",alignItems:"baseline",gap:10}}>
            <div style={{fontSize:28,fontFamily:FD,letterSpacing:6,color:C.acc}}>FORGE</div>
            {sessIdx.length>0&&<span style={{fontSize:10,color:C.dim,fontFamily:FD}}>{sessIdx.length+" sessions"}</span>}
          </div>
          {view!=="setup"&&<button onClick={function(){if(view==="readiness")setView("edit");else if(view==="workout")setView("readiness");else if(view==="edit")setView("preview");else if(view==="preview"){setView("setup");setStep(0);}else if(view==="summary")setView("workout");else if(view==="rest")setView("summary");setEditDay(null);setEditPick(null);}} style={{padding:"5px 14px",fontSize:12,fontFamily:FD,background:"transparent",border:"1px solid "+C.bdr,borderRadius:8,color:C.dim,cursor:"pointer",letterSpacing:1}}>BACK</button>}
        </div>
      </div>

      <div style={{padding:"0 20px 100px"}}>

      {/* ═══ SETUP ═══ */}
      {view==="setup"&&(<div>
        <div style={{textAlign:"center",padding:"24px 0 16px"}}><div style={{fontSize:30,fontFamily:FD,letterSpacing:3}}>BUILD YOUR PROGRAM</div><div style={{fontSize:12,color:C.dim,marginTop:4}}>{"Step "+(step+1)+" of 4"}</div></div>
        <div style={{display:"flex",gap:4,justifyContent:"center",marginBottom:20}}>{[0,1,2,3].map(function(i){return <div key={i} style={{width:i===step?28:8,height:4,borderRadius:2,background:i<step?C.grn:i===step?C.acc:C.bar}}/>;})}</div>

        {step===0&&cd(<div>{hd("TRAINING GOAL")}
          <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:12}}>{pill("All",!goalCat,C.mid,function(){setGoalCat(null);})}{CATS.map(function(c){return pill(c.n,goalCat===c.id,c.c,function(){setGoalCat(c.id);},c.id);})}</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>{filtGoals.map(function(g){var sel=goal===g.id;var cc=(CATS.find(function(c){return c.id===g.cat;})||{}).c||C.acc;
            return <button key={g.id} onClick={function(){setGoal(g.id);}} style={{padding:"12px",background:sel?(cc+"12"):C.bar,textAlign:"left",border:"1px solid "+(sel?(cc+"50"):"transparent"),borderRadius:12,cursor:"pointer"}}>
              <div style={{fontSize:13,fontWeight:700,color:sel?cc:C.txt,fontFamily:FD}}>{g.n}</div>
              <div style={{fontSize:11,color:C.mid,marginTop:3,lineHeight:1.4}}>{g.desc}</div>
              {g.cd>0&&<div style={{fontSize:9,color:C.red,marginTop:3,fontFamily:FD}}>+CARDIO</div>}
            </button>;})}</div>
        </div>)}

        {step===1&&cd(<div>{hd("HOW MANY DAYS/WEEK?")}
          <div style={{display:"flex",gap:6,marginBottom:16}}>{[3,4,5,6].map(function(d){return pill(d+" DAYS",numDays===d,C.acc,function(){setNumDays(d);setSplit(null);},"d"+d);})}</div>
          {hd("CHOOSE A SPLIT ("+filtSplits.length+")")}
          {filtSplits.map(function(s){var sel=split===s.id;return <button key={s.id} onClick={function(){setSplit(s.id);}} style={{width:"100%",textAlign:"left",padding:"14px 16px",marginBottom:8,background:sel?(C.acc+"12"):C.bar,border:"1px solid "+(sel?(C.acc+"50"):"transparent"),borderRadius:12,cursor:"pointer"}}>
            <div style={{fontSize:15,fontWeight:700,color:sel?C.acc:C.txt,fontFamily:FD}}>{s.n}</div><div style={{fontSize:11,color:C.dim,marginTop:3,lineHeight:1.5}}>{s.desc}</div>
            {sel&&<div style={{marginTop:8,display:"flex",flexWrap:"wrap",gap:4}}>{s.layout.map(function(d,i){return <span key={i} style={{fontSize:10,color:C.mid,background:C.sf2,padding:"3px 8px",borderRadius:6}}>{"D"+(i+1)+": "+d.n}</span>;})}</div>}
          </button>;})}
        </div>)}

        {step===2&&cd(<div>{hd("TRAINING METHOD")}
          <div style={{fontSize:11,color:C.dim,marginBottom:12}}>Overlays onto your split. Determines how each set is structured.</div>
          {METHODS.map(function(m){var sel=method===m.id;return <button key={m.id} onClick={function(){setMethod(m.id);}} style={{width:"100%",textAlign:"left",padding:"14px 16px",marginBottom:8,background:sel?(C.blu+"12"):C.bar,border:"1px solid "+(sel?(C.blu+"50"):"transparent"),borderRadius:12,cursor:"pointer"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontSize:14,fontWeight:700,color:sel?C.blu:C.txt,fontFamily:FD}}>{m.n}</span><div style={{display:"flex",alignItems:"center",gap:4}}>{m.sv>0&&<span style={{fontSize:10,color:C.grn,fontFamily:FD}}>{"SAVES "+m.sv+"% TIME"}</span>}{techBtn(m.id)}</div></div>
            <div style={{fontSize:11,color:C.dim,marginTop:3,lineHeight:1.4}}>{m.d}</div>
          </button>;})}
        </div>)}

        {step===3&&cd(<div>{hd("SESSION LENGTH")}<div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:20}}>{[30,45,60,75,90].map(function(t){return pill(t+" min",mins===t,C.grn,function(){setMins(t);},"t"+t);})}</div>
          {hd("MESOCYCLE")}<div style={{display:"flex",gap:6,marginBottom:20}}>{[4,5,6].map(function(w){return pill(w+" weeks",mesoLen===w,C.pur,function(){setMesoLen(w);},"m"+w);})}</div>
          {hd("EQUIPMENT")}<div style={{padding:12,background:C.bar,borderRadius:12}}>{["PowerBlock DBs to 90lb","Adj. bench + decline","Band wall (8 levels)","Power tower","Assault bike + rope"].map(function(e,i){return <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"3px 0"}}><div style={{width:6,height:6,borderRadius:"50%",background:C.grn}}/><span style={{fontSize:12,color:C.mid}}>{e}</span></div>;})}</div>
        </div>)}

        <div style={{display:"flex",gap:10,marginTop:4}}>
          {step>0&&secBtn("BACK",function(){setStep(step-1);})}
          {step<3?mainBtn("NEXT",function(){setStep(step+1);},(step===0&&!goal)||(step===1&&!split)||(step===2&&!method)):mainBtn("GENERATE",function(){generateProg();setView("preview");})}
        </div>
      </div>)}

      {/* ═══ PREVIEW ═══ */}
      {view==="preview"&&program.length>0&&(<div>
        <div style={{textAlign:"center",padding:"24px 0 8px"}}><div style={{fontSize:12,color:C.dim,fontFamily:FD,letterSpacing:3}}>YOUR PROGRAM</div><div style={{fontSize:26,fontFamily:FD,letterSpacing:2,marginTop:4,color:C.acc}}>{goalObj.n.toUpperCase()}</div><div style={{fontSize:12,color:C.dim,marginTop:6}}>{splitObj.n+" + "+methodObj.n+" | "+mins+"min"}</div></div>
        {cd(<div>{hd("WEEKLY SPLIT")}{program.map(function(day,i){var names=day.exercises.filter(function(e){return e.muscle!=="cardio";}).map(function(e){return e.name;});return <div key={i} style={{padding:"8px 0",borderBottom:i<program.length-1?("1px solid "+C.bdr):"none"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:24,height:24,borderRadius:6,background:C.acc+"18",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:C.acc,fontFamily:FD}}>{i+1}</div><span style={{fontSize:14,fontWeight:700,fontFamily:FD}}>{day.label}</span></div><span style={{fontSize:10,color:C.dim}}>{"~"+day.est+"m"}</span></div><div style={{fontSize:9,color:C.dim,marginTop:3,marginLeft:32}}>{names.slice(0,4).join(" / ")}{names.length>4?" +more":""}</div></div>;})}</div>)}
        {mainBtn("EDIT EXERCISES",function(){setEditDay(0);setEditPick(null);setView("edit");})}
        <div style={{height:8}}/>
        {secBtn("SKIP TO READINESS",function(){setADay(0);setAEx(0);setLog({});setReadiness(null);setSessionSaved(false);setNewPRs([]);setView("readiness");})}
      </div>)}

      {/* ═══ EDIT ═══ */}
      {view==="edit"&&program.length>0&&(<div>
        <div style={{textAlign:"center",padding:"20px 0 8px"}}><div style={{fontSize:24,fontFamily:FD,letterSpacing:2}}>EDIT WORKOUT</div><div style={{fontSize:11,color:C.dim,marginTop:4}}>Tap exercise to swap. Tap ? for how-to.</div></div>
        <div style={{display:"flex",gap:4,marginBottom:14,overflowX:"auto"}}>{program.map(function(d,i){return <button key={i} onClick={function(){setEditDay(i);setEditPick(null);}} style={{padding:"6px 12px",fontSize:12,fontFamily:FD,background:editDay===i?C.acc:C.bar,color:editDay===i?"#000":C.dim,border:"none",borderRadius:8,cursor:"pointer",whiteSpace:"nowrap",fontWeight:700}}>{"D"+(i+1)}</button>;})}</div>
        {editDay!==null&&program[editDay]&&(<div>
          <div style={{fontSize:14,fontWeight:700,fontFamily:FD,color:C.acc,marginBottom:8}}>{program[editDay].label}</div>
          {program[editDay].exercises.map(function(ex,ei){var isE=editPick&&editPick.dayIdx===editDay&&editPick.exIdx===ei;
            return <div key={ei} style={{background:isE?C.sf2:C.sf,border:"1px solid "+(isE?C.acc+"50":C.bdr),borderRadius:12,padding:14,marginBottom:8}}>
              <div onClick={function(){setEditPick(isE?null:{dayIdx:editDay,exIdx:ei});setCI("");}} style={{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer"}}>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <div onClick={function(e){e.stopPropagation();setPopup({type:"exercise",id:ex.name});}} style={{cursor:"pointer"}}><ExSVG name={ex.name} mv={ex.mv} size={32}/></div>
                  <div><div style={{fontSize:13,fontWeight:600}}>{ex.name}</div><div style={{fontSize:10,color:C.dim}}>{ex.muscle}{ex.tech!=="straight"?" / "+ex.tech.toUpperCase():""}</div>{renderExHint(ex.name, ex.muscle)}</div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:4}}>{exBtn(ex.name)}{ex.tech!=="straight"&&techBtn(ex.tech)}<span style={{fontSize:10,color:C.acc,fontFamily:FD}}>SWAP</span></div>
              </div>
              {isE&&(function(){var alts=getAlts(ex.muscle,ex.name);return <div style={{marginTop:10,borderTop:"1px solid "+C.bdr,paddingTop:10}}>
                <div style={{fontSize:10,color:C.grn,fontFamily:FD,letterSpacing:1,marginBottom:6}}>BEST ALTERNATIVES</div>
                {alts.best.map(function(a){return <button key={a.n} onClick={function(){setProgram(function(prev){var np=JSON.parse(JSON.stringify(prev));np[editDay].exercises[ei]={name:a.n,muscle:ex.muscle,tech:ex.tech,sets:ex.sets,reps:ex.reps,time:Math.round(a.m*(1-methodObj.sv/100)),mv:a.mv};return np;});setEditPick(null);}} style={{width:"100%",textAlign:"left",padding:"8px 12px",marginBottom:4,background:C.bar,border:"1px solid "+C.bdr,borderRadius:8,cursor:"pointer",color:C.txt,fontSize:12,display:"flex",justifyContent:"space-between",alignItems:"center"}}><span>{a.n}</span>{exBtn(a.n)}</button>;})}
                {alts.rest.length>0&&<div style={{fontSize:10,color:C.dim,fontFamily:FD,letterSpacing:1,margin:"8px 0 4px"}}>ALL OPTIONS</div>}
                {alts.rest.map(function(a){return <button key={a.n} onClick={function(){setProgram(function(prev){var np=JSON.parse(JSON.stringify(prev));np[editDay].exercises[ei]={name:a.n,muscle:ex.muscle,tech:ex.tech,sets:ex.sets,reps:ex.reps,time:Math.round(a.m*(1-methodObj.sv/100)),mv:a.mv};return np;});setEditPick(null);}} style={{width:"100%",textAlign:"left",padding:"6px 12px",marginBottom:3,background:"transparent",border:"1px solid "+C.bdr,borderRadius:8,cursor:"pointer",color:C.mid,fontSize:11}}>{a.n}</button>;})}
                <div style={{fontSize:10,color:C.dim,fontFamily:FD,letterSpacing:1,margin:"8px 0 4px"}}>CUSTOM</div>
                <div style={{display:"flex",gap:6}}><input value={customIn} onChange={function(e){setCI(e.target.value);}} placeholder="Type exercise" style={{flex:1,padding:"8px 10px",fontSize:12,background:C.bar,color:C.txt,border:"1px solid "+C.bdr,borderRadius:8,outline:"none"}}/><button onClick={function(){if(customIn.trim()){setProgram(function(prev){var np=JSON.parse(JSON.stringify(prev));np[editDay].exercises[ei]={name:customIn.trim(),muscle:ex.muscle,tech:"straight",sets:3,reps:"8-12",time:5,mv:"press"};return np;});setEditPick(null);setCI("");}}} style={{padding:"8px 12px",background:C.acc,color:"#000",border:"none",borderRadius:8,fontSize:12,fontWeight:700,fontFamily:FD,cursor:"pointer"}}>ADD</button></div>
              </div>;})()}
            </div>;})}
        </div>)}
        <div style={{marginTop:10}}>{mainBtn("DONE EDITING",function(){setADay(0);setAEx(0);setLog({});setReadiness(null);setSessionSaved(false);setNewPRs([]);setView("readiness");})}</div>
      </div>)}

      {/* ═══ READINESS ═══ */}
      {view==="readiness"&&(<div>
        <div style={{textAlign:"center",padding:"24px 0 12px"}}><div style={{fontSize:26,fontFamily:FD,letterSpacing:2}}>READINESS CHECK</div><div style={{fontSize:11,color:C.dim,marginTop:4}}>Pre-workout. Adjusts volume and intensity targets.</div></div>
        {READINESS.map(function(q){var val=readiness?readiness[q.id]:null;return cd(<div key={q.id}><div style={{fontSize:12,color:C.mid,marginBottom:8}}>{q.q}</div><div style={{display:"flex",flexWrap:"wrap",gap:5}}>{q.opts.map(function(o,oi){var isLow=q.w[oi]<0.85;var isHigh=q.w[oi]>1.0;return pill(o,val===oi,isLow?C.red:isHigh?C.grn:C.mid,function(){setReadiness(function(prev){var n=Object.assign({},prev||{});n[q.id]=oi;return n;});},q.id+oi);})}</div></div>);})}
        {(function(){if(!readiness)return null;var score=1.0;var count=0;READINESS.forEach(function(q){if(readiness[q.id]!==undefined&&readiness[q.id]!==null){score*=q.w[readiness[q.id]];count++;}});if(count===0)return null;var sc=Math.round(score*100);var col=sc>=95?C.grn:sc>=80?C.acc:sc>=65?C.orn:C.red;var label=sc>=95?"Full send - hit it hard":sc>=80?"Good to go":sc>=65?"Moderate - drop 1-2 sets":"Low - consider deload or active recovery";
          return cd(<div style={{textAlign:"center"}}>{hd("READINESS SCORE")}<div style={{fontSize:48,fontWeight:700,fontFamily:FD,color:col,lineHeight:1}}>{sc+"%"}</div><div style={{fontSize:12,color:col,marginTop:6}}>{label}</div></div>,col+"40");})()}
        {mainBtn("START WORKOUT",function(){var sc=1.0;if(readiness){READINESS.forEach(function(q){if(readiness[q.id]!==undefined&&readiness[q.id]!==null)sc*=q.w[readiness[q.id]];});}setReadMod(sc);setView("workout");},!readiness)}
      </div>)}

      {/* ═══ WORKOUT ═══ */}
      {view==="workout"&&program[aDay]&&(<div>
        <div style={{padding:"14px 0 10px"}}><div style={{fontSize:12,color:C.dim,fontFamily:FD,letterSpacing:2}}>{"W"+weekNum+" / DAY "+(aDay+1)+" / "+getRIR(weekNum,mesoLen)+" RIR / ~"+program[aDay].est+"min"}</div><div style={{fontSize:22,fontFamily:FD,letterSpacing:2,marginTop:2}}>{program[aDay].label.toUpperCase()}</div><div style={{display:"flex",gap:6,marginTop:4}}><span style={{fontSize:9,color:C.pur,fontFamily:FD,background:C.pur+"15",padding:"2px 8px",borderRadius:4}}>{getMesoPhase(weekNum,mesoLen).toUpperCase()}</span><span style={{fontSize:9,color:C.blu,fontFamily:FD,background:C.blu+"15",padding:"2px 8px",borderRadius:4}}>{getRIR(weekNum,mesoLen)+" RIR"}</span></div>{readMod<0.85&&<div style={{fontSize:10,color:C.orn,marginTop:4}}>{"Readiness "+Math.round(readMod*100)+"% - volume adjusted"}</div>}</div>
        {program[aDay].exercises.map(function(ex,i){var k=aDay+"-"+i;var lg=log[k]||{sets:[],done:false};var isAct=i===aEx;var isDone=lg.done;var isCardio=ex.muscle==="cardio";
          var techLabel=ex.tech==="myo"?"MYO":ex.tech==="restpause"?"RP":ex.tech==="preexhaust"?"PRE-X":ex.tech==="mechanical"?"MECH":ex.tech==="hiit"?"HIIT":"";
          var techColor=ex.tech==="myo"?C.pur:ex.tech==="restpause"?C.red:ex.tech==="preexhaust"?C.acc:ex.tech==="hiit"?C.orn:C.dim;
          var numSets=isCardio?1:ex.sets;
          var stall=getStallLevel(ex.name);
          return <div key={i} onClick={function(){if(!isAct)setAEx(i);}} style={{background:isAct?C.sf:"transparent",border:"1px solid "+(stall>=2&&isAct?(C.red+"50"):isAct?C.bdr:"transparent"),borderRadius:14,padding:isAct?16:"10px 16px",marginBottom:isAct?14:2,cursor:"pointer",borderLeft:isDone?("3px solid "+C.grn):stall>=2?("3px solid "+C.red):isAct?("3px solid "+C.acc):"3px solid transparent"}}>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              {isAct&&<div onClick={function(e){e.stopPropagation();setPopup({type:"exercise",id:ex.name});}} style={{cursor:"pointer"}}><ExSVG name={ex.name} mv={ex.mv} size={48}/></div>}
              <div style={{flex:1,minWidth:0}}><div style={{fontSize:isAct?15:13,fontWeight:isAct?700:500,color:isDone?C.grn:C.txt}}>{ex.name}</div>
                {!isAct&&!isDone&&<div style={{fontSize:10,color:C.dim}}>{(isCardio?"":numSets+"x "+ex.reps)+(techLabel?" / "+techLabel:"")}</div>}
                {!isAct&&!isDone&&renderExHint(ex.name, ex.muscle)}
              </div>
              <div style={{display:"flex",alignItems:"center",gap:3}}>
                {techLabel&&!isDone&&<span style={{fontSize:9,color:techColor,fontFamily:FD,letterSpacing:1,background:techColor+"15",padding:"2px 8px",borderRadius:4}}>{techLabel}</span>}
                {techLabel&&!isDone&&techBtn(ex.tech)}
                {isDone&&<span style={{fontSize:11,color:C.grn,fontFamily:FD}}>DONE</span>}
                {isAct&&!isDone&&exBtn(ex.name)}
              </div>
            </div>
            {isAct&&!isDone&&(<div style={{marginTop:14}}>
              {/* ═══ LAST SESSION REFERENCE ═══ */}
              {(function(){
                var last=getLastData(ex.name);
                if(!last||!last.sets||isCardio)return null;
                var summary=last.sets.map(function(s){return s.w+"lb x "+s.r;}).join("  |  ");
                return <div style={{background:C.bar,borderRadius:8,padding:"8px 12px",marginBottom:10,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div><div style={{fontSize:10,fontWeight:700,fontFamily:FD,letterSpacing:1,color:C.blu,marginBottom:2}}>LAST SESSION</div><div style={{fontSize:11,color:C.mid}}>{summary}</div></div>
                  {last.date&&<div style={{fontSize:9,color:C.dim}}>{last.date}</div>}
                </div>;
              })()}
              {/* ═══ STALL WARNING ═══ */}
              {stall>=2&&!isCardio&&<div onClick={function(e){e.stopPropagation();setPopup({type:"stall",id:ex.name,muscle:ex.muscle});}} style={{background:C.red+"15",border:"1px solid "+C.red+"30",borderRadius:8,padding:"8px 12px",marginBottom:10,cursor:"pointer"}}>
                <div style={{fontSize:10,fontWeight:700,fontFamily:FD,letterSpacing:1,color:C.red}}>STALLED - TAP FOR OPTIONS</div>
                <div style={{fontSize:10,color:C.mid,marginTop:2}}>Same weight/reps for 2+ sessions. Consider a swap or intensity technique.</div>
              </div>}
              {isCardio?mainBtn("MARK DONE",function(){setLog(function(p){var n=Object.assign({},p);n[k]={sets:[],done:true};return n;});}):(<div>
                <div style={{fontSize:11,color:C.dim,marginBottom:10}}>{ex.note?ex.note:ex.tech==="myo"?"MYO-REP: 12-20 reps activation, then 3-5 mini-sets of 3-5 reps (15s rest)":ex.tech==="restpause"?"REST-PAUSE: To failure, 15s rest, to failure, 15s, to failure":ex.tech==="preexhaust"?"PRE-EXHAUST: Superset with next exercise, no rest between":ex.tech==="mechanical"?"MECHANICAL DROP: Same weight, switch to easier angle when you fail":ex.tech==="giant"?"GIANT SET: No rest between exercises in the circuit":ex.tech==="density"?"DENSITY: Alternate 5 reps with partner exercise, beat total reps":"Target: "+numSets+" sets x "+ex.reps}</div>
                {Array.from({length:numSets}).map(function(_,si){var setData=(lg.sets&&lg.sets[si])||{w:"",r:""};
                  var rec=getRecommendation(ex.name,si);
                  var wPlaceholder=rec?String(rec.w):"lb";
                  var rPlaceholder=rec?(rec.r<12?String(rec.r+1):String(rec.r)):"reps";
                  return <div key={si} style={{display:"flex",alignItems:"center",gap:8,padding:"6px 0",borderBottom:"1px solid "+C.bdr}}>
                    <span style={{fontSize:12,color:C.dim,width:40,fontFamily:FD}}>{"SET "+(si+1)}</span>
                    <input type="number" value={setData.w||""} onChange={function(e){logSet(aDay,i,si,e.target.value,setData.r);}} placeholder={wPlaceholder} style={{width:60,padding:"8px",fontSize:14,fontFamily:FD,fontWeight:700,background:C.bar,color:C.txt,border:"1px solid "+C.bdr,borderRadius:8,outline:"none",textAlign:"center",boxSizing:"border-box"}}/>
                    <span style={{color:C.dim,fontSize:12}}>x</span>
                    <input type="number" value={setData.r||""} onChange={function(e){logSet(aDay,i,si,setData.w,e.target.value);}} placeholder={rPlaceholder} style={{width:60,padding:"8px",fontSize:14,fontFamily:FD,fontWeight:700,background:C.bar,color:C.txt,border:"1px solid "+C.bdr,borderRadius:8,outline:"none",textAlign:"center",boxSizing:"border-box"}}/>
                    {setData.w&&setData.r&&<div style={{width:8,height:8,borderRadius:"50%",background:C.grn}}/>}
                    {rec&&!setData.w&&!setData.r&&<button onClick={function(){logSet(aDay,i,si,rec.w,rec.r<12?rec.r+1:rec.r);}} style={{fontSize:9,fontFamily:FD,color:C.blu,background:C.blu+"15",border:"1px solid "+C.blu+"30",borderRadius:6,padding:"3px 8px",cursor:"pointer",whiteSpace:"nowrap"}}>FILL</button>}
                  </div>;})}
                {(function(){var allFilled=true;for(var si=0;si<numSets;si++){var sd=(lg.sets&&lg.sets[si])||{};if(!sd.w||!sd.r)allFilled=false;}return allFilled?<div style={{marginTop:10}}>{mainBtn("EXERCISE DONE",function(){setLog(function(p){var n=Object.assign({},p);n[k]=Object.assign({},n[k],{done:true});return n;});})}</div>:null;})()}
              </div>)}
            </div>)}
          </div>;})}
        <div style={{marginTop:16}}>{mainBtn("FINISH SESSION",function(){setSessionSaved(false);setNewPRs([]);setView("summary");})}</div>
      </div>)}

      {/* ═══ SUMMARY ═══ */}
      {view==="summary"&&(<div>
        <div style={{textAlign:"center",padding:"24px 0 12px"}}><div style={{fontSize:30,fontFamily:FD,letterSpacing:3}}>SESSION DONE</div></div>
        {cd(<div>{hd("STATS")}<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>{(function(){var ts=0,tv=0;Object.keys(log).forEach(function(k){if(k.indexOf(aDay+"-")===0&&log[k]){log[k].sets.forEach(function(s){if(s&&s.w&&s.r){ts++;tv+=s.w*s.r;}});}});return[{l:"Sets",v:ts||"--",c:C.acc},{l:"Volume",v:tv>0?Math.round(tv/1000)+"k":"--",c:C.blu},{l:"Time",v:(program[aDay]?program[aDay].est:"--")+"m",c:C.grn}];})().map(function(s){return <div key={s.l} style={{background:C.bar,borderRadius:12,padding:14,textAlign:"center"}}><div style={{fontSize:10,color:C.dim,fontFamily:FD,letterSpacing:1}}>{s.l}</div><div style={{fontSize:22,fontWeight:700,fontFamily:FD,color:s.c,marginTop:4}}>{s.v}</div></div>;})}</div></div>)}

        {/* ═══ NEW PRs THIS SESSION ═══ */}
        {newPRs.length>0&&cd(<div style={{textAlign:"center"}}>
          {hd("NEW PERSONAL RECORDS")}
          <div style={{fontSize:36,lineHeight:1,marginBottom:8}}>{"*"}</div>
          {newPRs.map(function(pr){return <div key={pr.name} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:"1px solid "+C.bdr}}>
            <span style={{fontSize:13,fontWeight:600}}>{pr.name}</span>
            <span style={{fontSize:14,fontWeight:700,fontFamily:FD,color:C.acc}}>{pr.w+"lb x "+pr.r}</span>
          </div>;})}
        </div>,C.acc+"40")}

        {cd(<div>{hd("POST-WORKOUT FEEDBACK")}<div style={{fontSize:9,color:C.dim,marginBottom:8}}>Science-based signals only. Pump and DOMS removed (not correlated with growth).</div>{[
          {id:"perf",q:"Performance vs last session?",opts:["Worse","Same","Better"],colors:[C.red,C.dim,C.grn],val:fPerf,set:setFP},
          {id:"recovery",q:"How recovered did you feel going in?",opts:["Under-recovered","OK","Fully fresh"],colors:[C.red,C.acc,C.grn],val:fSore,set:setFS},
          {id:"disrupt",q:"Systemic fatigue (sleep, appetite, mood affected)?",opts:["Fine","Moderate","Wrecked"],colors:[C.grn,C.orn,C.red],val:fDisrupt,set:setFDi},
          {id:"joint",q:"Joint / connective tissue stress?",opts:["None","Mild","Significant"],colors:[C.grn,C.acc,C.red],val:fJoint,set:setFJo}
        ].map(function(q){return <div key={q.id} style={{marginBottom:12}}><div style={{fontSize:11,color:C.mid,marginBottom:5}}>{q.q}</div><div style={{display:"flex",flexWrap:"wrap",gap:5}}>{q.opts.map(function(o,oi){return pill(o,q.val===oi,q.colors[oi],function(){q.set(oi);},q.id+oi);})}</div></div>;})}</div>)}
        {(function(){var vc=vm>0?C.grn:vm<0?C.red:C.acc;return cd(<div style={{textAlign:"center"}}>{hd("VOLUME ADJUSTMENT")}<div style={{fontSize:48,fontWeight:700,fontFamily:FD,color:vc,lineHeight:1}}>{(vm>0?"+":"")+vm}</div><div style={{fontSize:12,color:C.mid,marginTop:6}}>{vm>0?"Add "+vm+" set(s) next session":vm<0?"Remove "+Math.abs(vm)+" set(s)":"Maintain volume"}</div></div>,vc+"40");})()}

        {/* ═══ SAVE SESSION BUTTON ═══ */}
        {!sessionSaved&&<div style={{marginBottom:14}}>{mainBtn("SAVE SESSION",function(){saveSession();})}</div>}
        {sessionSaved&&cd(<div style={{textAlign:"center"}}><div style={{fontSize:12,fontWeight:700,fontFamily:FD,letterSpacing:2,color:C.grn}}>SESSION SAVED</div><div style={{fontSize:10,color:C.dim,marginTop:4}}>{"Session #"+(sessIdx.length)+" recorded. History will power your next workout."}</div></div>,C.grn+"30")}

        <div style={{display:"flex",gap:10}}>
          {secBtn("NEW PROGRAM",function(){setView("setup");setStep(0);setLog({});})}
          {aDay<program.length-1&&mainBtn("NEXT DAY",function(){setView("rest");})}
        </div>
      </div>)}

      {/* ═══ REST / READY FOR NEXT ═══ */}
      {view==="rest"&&(<div>
        <div style={{textAlign:"center",padding:"40px 0 20px"}}>
          <MoveIcon type="cardio" size={64}/>
          <div style={{fontSize:28,fontFamily:FD,letterSpacing:3,marginTop:16}}>REST DAY</div>
          <div style={{fontSize:13,color:C.dim,marginTop:8,lineHeight:1.6}}>{"Day "+(aDay+1)+" complete. Next up: Day "+(aDay+2)+" - "+program[aDay+1].label+"."}</div>
          <div style={{fontSize:12,color:C.mid,marginTop:12,lineHeight:1.6}}>Recovery is when you grow. Sleep 7-9 hours, hit your protein (1g/lb), stay hydrated. Come back when you feel ready.</div>
        </div>
        {cd(<div>{hd("NEXT SESSION PREVIEW")}
          <div style={{fontSize:15,fontWeight:700,fontFamily:FD,color:C.acc,marginBottom:8}}>{"DAY "+(aDay+2)+": "+program[aDay+1].label}</div>
          {program[aDay+1].exercises.map(function(ex,i){var stall=getStallLevel(ex.name);return <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"5px 0",borderBottom:i<program[aDay+1].exercises.length-1?"1px solid "+C.bdr:"none"}}>
            <ExSVG name={ex.name} mv={ex.mv} size={24}/>
            <div style={{flex:1}}><span style={{fontSize:12,color:stall>=2?C.red:C.mid}}>{ex.name}</span>{stall>=2&&<span style={{fontSize:9,fontWeight:700,fontFamily:FD,color:C.red,marginLeft:6}}>STALLED</span>}{renderExHint(ex.name, ex.muscle)}</div>
            {ex.tech!=="straight"&&<span style={{fontSize:9,color:C.pur,fontFamily:FD}}>{ex.tech.toUpperCase()}</span>}
          </div>;})}
          <div style={{fontSize:10,color:C.dim,marginTop:8}}>{"~"+program[aDay+1].est+" min estimated"}</div>
        </div>)}
        {mainBtn("READY - START DAY "+(aDay+2),function(){setADay(aDay+1);setAEx(0);setLog({});setReadiness(null);setSessionSaved(false);setNewPRs([]);setView("readiness");})}
        <div style={{height:8}}/>
        {secBtn("BACK TO SUMMARY",function(){setView("summary");})}
      </div>)}

      </div>
    </div>
  );
}
