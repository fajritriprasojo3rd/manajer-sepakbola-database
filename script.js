// ==========================================
// 1. KONFIGURASI SUPABASE & UTILITAS
// ==========================================
const SUPABASE_URL = 'https://ocqedmogvkcvfkjekayr.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jcWVkbW9ndmtjdmZramVrYXlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2NTk0NzIsImV4cCI6MjEwODIzNTQ3Mn0.bQFVAIbaquQOj7sTT_CZQbZmgE7v2EmnpkE-zbW6w3Y';
let _supabase = null;
if (typeof supabase !== 'undefined') { _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY); }

var rnd=function(a,b){return Math.random()*(b-a)+a;};
var ri=function(a,b){return Math.floor(rnd(a,b+1));};
var pick=function(a){return a[Math.floor(Math.random()*a.length)];};
var avg=function(a){return a.length?a.reduce(function(x,y){return x+y;},0)/a.length:60;};
function formatIDR(n){if(state.godMode && n>0)return 'INF';var rp=Math.abs(n);var sign=n<0?'-':'';if(rp>=1e15)return sign+'Rp '+(rp/1e15).toFixed(2)+' P';if(rp>=1e12)return sign+'Rp '+(rp/1e12).toFixed(2)+' T';if(rp>=1e9)return sign+'Rp '+(rp/1e9).toFixed(2)+' M';if(rp>=1e6)return sign+'Rp '+(rp/1e6).toFixed(1)+' jt';if(rp>=1e3)return sign+'Rp '+(rp/1e3).toFixed(0)+' rb';return sign+'Rp '+Math.round(rp);}
function formatIDRShort(n){var rp=Math.abs(n);var sign=n<0?'-':'';if(rp>=1e15)return sign+(rp/1e15).toFixed(1)+'P';if(rp>=1e12)return sign+(rp/1e12).toFixed(1)+'T';if(rp>=1e9)return sign+(rp/1e9).toFixed(1)+'M';if(rp>=1e6)return sign+(rp/1e6).toFixed(0)+'jt';if(rp>=1e3)return sign+(rp/1e3).toFixed(0)+'rb';return sign+Math.round(rp);}
function nameInitials(name){var p=name.split(' ');return p.length>1?(p[0][0]+p[1][0]).toUpperCase():p[0].slice(0,2).toUpperCase();}
function nameColor(name){var c=['#e63946','#f4a261','#2a9d8f','#e9c46a','#457b9d','#5e60ce','#8ac926','#ff6b6b','#06d6a0','#118ab2','#ef476f','#ffd166'];var h=0;for(var i=0;i<name.length;i++)h+=name.charCodeAt(i);return c[h%c.length];}

// ==========================================
// 2. DATA MASTER
// ==========================================
var NAMA_DEPAN=['Budi','Agus','Slamet','Bambang','Joko','Wawan','Tono','Sutrisno','Sumarno','Wahyu','Bowo','Bagus','Yanto','Krisna','Wisnu','Bimo','Aryo','Damar','Bayu','Galih','Rangga','Yoga','Hendra','Heru','Wibowo','Harto','Hartono','Suparman','Purnomo','Teguh','Tri','Utomo','Waluyo','Eko','Edi','Dwi','Ujang','Asep','Dedi','Dadan','Yudi','Iwan','Endang','Rian','Ridwan','Ahmad','Cecep','Nandang','Deni','Rudi','Taufik','Iman','Udin','Hendi','Yana','Supri','Binsar','Togar','Ronald','Maruli','Lamhot','Rudolf','Tigor','Hasudungan','Parlindungan','Sahat','Adi','Rizal','Firman','Arif','Doni','Reza','Riki','Yogi','Rama','Andre','Rahmat','Hendri','Andi','Baso','Daeng','Karim','Muhammad','Yusuf','Hasim','Rahman','Salim','Wayan','Made','Nyoman','Ketut','Gede','Putu','Kadek','Komang','Agung','Abdul','Hasan','Husain','Ibrahim','Fauzi','Hamzah','Idris','Iskandar','Salman','Umar','Ali','Zaid','Ridho','Fikri','Hafiz','Faris','Zaki','Rafi','Alif','Naufal','Daffa','Farhan','Fajar','Rizky','Rizki','Bima','Satria','Panji','Ilham','Arya','Dimas','Adit','Gilang','Vino','Rio','Anton','Bagas','Bintang','Cahyo','Dani','Ferdi','Hanif','Iqbal','Jefri','Kevin','Lukman','Maulana','Nanda','Pandu','Rendi','Sandi','Tama','Vicky','Yudha','Zulfikar','Alvin','Dika','Elang','Fathan','Genta','Joni','Kurnia','Lukito','Miko','Nata'];
var NAMA_BELAKANG=['Santoso','Wijaya','Susanto','Hartono','Suryana','Kusuma','Santika','Wibowo','Purnomo','Setiawan','Nugroho','Saputra','Hidayat','Kurniawan','Permana','Wardana','Prabowo','Utomo','Suharto','Sudirman','Gunawan','Wibisono','Santosa','Rahardjo','Suryanto','Waluyo','Siswanto','Hariyanto','Prasetyo','Sutanto','Sugiarto','Suprapto','Supriyadi','Widodo','Herdiana','Sudrajat','Suryadi','Supriatna','Suhanda','Suhendar','Kurnia','Setiadi','Wijayanto','Siregar','Simbolon','Nasution','Sitompul','Hutapea','Panjaitan','Sinaga','Sihombing','Sitohang','Napitupulu','Lubis','Harahap','Pulungan','Daulay','Hasibuan','Ritonga','Simanjuntak','Samosir','Tampubolon','Marbun','Sidabutar','Manurung','Sihaloho','Gultom','Hutagalung','Tanjung','Silalahi','Nainggolan','Simatupang','Sutan','Rajo','Datuk','Malik','Rasyid','Ibrahim','Yusuf','Hasan','Rahman','Chaniago','Koto','Piliang','Sikumbang','Tanjuang','Canigo','Gunung','Jambak','Daeng','Karim','Sultan','Hamid','Sutedja','Wirawan','Sukarta','Ardana','Suardana','Suardika','Sujana','Suwitra','Yadnya','Adnyana','Wiranata','Mahendra','Arimbawa','Hakim','Husain','Fauzi','Ridho','Latif','Wahid','Chalid','Syafii','Habib','Pratama','Putra','Firdaus','Pangestu','Prakoso','Firmansyah','Ramadhan','Iskandar','Syahputra','Anggara'];
function generateIndonesianName(){
  var r=Math.random();
  if(r<0.15) return pick(NAMA_DEPAN);
  if(r<0.70) return pick(NAMA_DEPAN)+' '+pick(NAMA_BELAKANG);
  return pick(NAMA_DEPAN)+' '+pick(NAMA_DEPAN)+' '+pick(NAMA_BELAKANG);
}

var POSITIONS_SPECIFIC={GK:['GK'],DEF:['CB','RB','LB','LWB','RWB'],MID:['RMF','LMF','CMF','DMF','AMF'],FWD:['SS','CF']};
var PLAY_STYLES={CF:['Pemburu Gol','Target Man','Pemburu Peluang'],SS:['Penyerang Bayangan','Pemburu Celah','Sayap Terobos'],AMF:['Otak Permainan','Playmaker Kreatif','Pemburu Celah'],CMF:['Box-To-Box','Orkestrator'],DMF:['Jangkar','Perusak Serangan'],RMF:['Pemain Sayap Kreatif','Spesialis Umpan Silang','Sayap Terobos','Pembantu Serangan','Pemburu Celah'],LMF:['Pemain Sayap Kreatif','Spesialis Umpan Silang','Sayap Terobos','Pembantu Serangan','Pemburu Celah'],CB:['Pembangun Serangan','Perusak Serangan'],RB:['Bek Sayap Menyerang','Bek Sayap Bertahan','Spesialis Umpan Silang'],LB:['Bek Sayap Menyerang','Bek Sayap Bertahan','Spesialis Umpan Silang'],RWB:['Bek Sayap Menyerang','Spesialis Umpan Silang','Pemain Sayap Kreatif'],LWB:['Bek Sayap Menyerang','Spesialis Umpan Silang','Pemain Sayap Kreatif'],GK:['Kiper Agresif','Kiper Bertahan','Kiper Build-up','Kiper Stoper']};
var SKILL_POOL={GK:['Refleks','Penempatan Posisi','Distribusi Bola','Penyelamatan Penalti','Kiper Sapu','Satu Lawan Satu','Kontrol Udara'],DEF:['Tekel','Penjagaan','Sundulan','Intersepsi','Kekuatan Udara','Tekel Meluncur','Blok Tubuh','Kekuatan Fisik'],MID:['Umpan','Visi Bermain','Dribel','Stamina','Tembakan Jarak Jauh','Pengatur Serangan','Kontrol Bola','Umpan Silang'],FWD:['Penyelesaian Akhir','Dribel','Kecepatan','Sundulan','Tembakan Jarak Jauh','Pemburu Gol','Pergerakan Tanpa Bola','Tendangan Voli']};

var FORMATIONS={
  '4-3-3':{GK:1,DEF:['CB','CB','RB','LB'],MID:['CMF','CMF','AMF'],FWD:['CF','SS','SS']},
  '4-4-2':{GK:1,DEF:['CB','CB','RB','LB'],MID:['RMF','CMF','CMF','LMF'],FWD:['CF','SS']},
  '4-2-3-1':{GK:1,DEF:['CB','CB','RB','LB'],MID:['DMF','DMF','RMF','AMF','LMF'],FWD:['CF']},
  '4-1-4-1':{GK:1,DEF:['CB','CB','RB','LB'],MID:['DMF','RMF','CMF','CMF','LMF'],FWD:['CF']},
  '3-4-3':{GK:1,DEF:['CB','CB','CB'],MID:['RMF','CMF','CMF','LMF'],FWD:['SS','CF','SS']},
  '4-3-1-2':{GK:1,DEF:['CB','CB','RB','LB'],MID:['CMF','DMF','CMF','AMF'],FWD:['CF','SS']},
  '5-3-2':{GK:1,DEF:['RWB','CB','CB','CB','LWB'],MID:['CMF','CMF','AMF'],FWD:['CF','SS']},
  '5-4-1':{GK:1,DEF:['RWB','CB','CB','CB','LWB'],MID:['RMF','CMF','CMF','LMF'],FWD:['CF']},
  '3-5-2':{GK:1,DEF:['CB','CB','CB'],MID:['RMF','DMF','CMF','AMF','LMF'],FWD:['CF','SS']},
  '4-4-1-1':{GK:1,DEF:['CB','CB','RB','LB'],MID:['RMF','CMF','CMF','LMF'],FWD:['SS','CF']}
};
function formationCounts(fname){var f=FORMATIONS[fname];var c={GK:0,DEF:0,MID:0,FWD:0};if(f.GK) c.GK=f.GK;if(f.DEF instanceof Array) c.DEF=f.DEF.length; else c.DEF=f.DEF||0;if(f.MID instanceof Array) c.MID=f.MID.length; else c.MID=f.MID||0;if(f.FWD instanceof Array) c.FWD=f.FWD.length; else c.FWD=f.FWD||0;return c;}
var FORMATION_POS={
  '4-3-3':{GK:[[4,32]],DEF:[[18,24],[18,40],[18,54],[18,10]],MID:[[34,24],[34,40],[42,32]],FWD:[[52,32],[54,10],[54,54]]},
  '4-4-2':{GK:[[4,32]],DEF:[[18,24],[18,40],[18,54],[18,10]],MID:[[36,10],[36,26],[36,38],[36,54]],FWD:[[54,24],[54,40]]},
  '4-2-3-1':{GK:[[4,32]],DEF:[[18,24],[18,40],[18,54],[18,10]],MID:[[30,26],[30,38],[42,10],[42,32],[42,54]],FWD:[[54,32]]},
  '4-1-4-1':{GK:[[4,32]],DEF:[[18,24],[18,40],[18,54],[18,10]],MID:[[28,32],[38,10],[38,26],[38,38],[38,54]],FWD:[[54,32]]},
  '3-4-3':{GK:[[4,32]],DEF:[[18,16],[18,32],[18,48]],MID:[[36,10],[36,24],[36,40],[36,54]],FWD:[[54,16],[54,32],[54,48]]},
  '4-3-1-2':{GK:[[4,32]],DEF:[[18,24],[18,40],[18,54],[18,10]],MID:[[32,20],[32,44],[32,32],[42,32]],FWD:[[54,24],[54,40]]},
  '5-3-2':{GK:[[4,32]],DEF:[[18,10],[18,20],[18,32],[18,44],[18,54]],MID:[[36,20],[36,32],[36,44]],FWD:[[54,24],[54,40]]},
  '5-4-1':{GK:[[4,32]],DEF:[[18,10],[18,20],[18,32],[18,44],[18,54]],MID:[[38,10],[38,24],[38,40],[38,54]],FWD:[[54,32]]},
  '3-5-2':{GK:[[4,32]],DEF:[[18,18],[18,32],[18,46]],MID:[[36,8],[36,20],[36,32],[36,44],[36,56]],FWD:[[54,24],[54,40]]},
  '4-4-1-1':{GK:[[4,32]],DEF:[[18,24],[18,40],[18,54],[18,10]],MID:[[36,10],[36,26],[36,38],[36,54]],FWD:[[46,32],[54,32]]}
};

var TEAM_DEFS=[
  {name:'Persija Jakarta',div:1,color:'#d90429',base:79},{name:'Persib Bandung',div:1,color:'#1a3a8f',base:78},{name:'Persebaya Surabaya',div:1,color:'#2ecc71',base:77},{name:'Arema FC',div:1,color:'#0033a0',base:76},{name:'Bali United',div:1,color:'#e63946',base:76},{name:'PSM Makassar',div:1,color:'#d90429',base:75},{name:'Persis Solo',div:1,color:'#e9c46a',base:74},{name:'PSIS Semarang',div:1,color:'#118ab2',base:74},{name:'Persita Tangerang',div:1,color:'#f4a261',base:73},{name:'Persik Kediri',div:1,color:'#8ac926',base:73},{name:'Bhayangkara FC',div:1,color:'#ffd700',base:72},{name:'Madura United',div:1,color:'#e63946',base:72},{name:'Barito Putera',div:1,color:'#2a9d8f',base:71},{name:'PSS Sleman',div:1,color:'#e67e22',base:71},{name:'Borneo FC',div:1,color:'#ff6b6b',base:70},{name:'Dewa United',div:1,color:'#5e60ce',base:70},{name:'Malut United',div:1,color:'#06d6a0',base:69},{name:'Semen Padang',div:1,color:'#ef476f',base:69},{name:'PSBS Biak',div:1,color:'#00b4d8',base:68},{name:'Persepam Madura',div:1,color:'#cc0000',base:68},
  {name:'Persela Lamongan',div:2,color:'#d90429',base:64},{name:'PSIM Yogyakarta',div:2,color:'#0033a0',base:64},{name:'Persijap Jepara',div:2,color:'#2ecc71',base:63},{name:'Sriwijaya FC',div:2,color:'#ffd700',base:63},{name:'Persiraja Banda Aceh',div:2,color:'#e63946',base:62},{name:'PSMS Medan',div:2,color:'#2ecc71',base:62},{name:'Deltras Sidoarjo',div:2,color:'#118ab2',base:61},{name:'Gresik United',div:2,color:'#ff6b6b',base:61},{name:'Persibo Bojonegoro',div:2,color:'#8ac926',base:60},{name:'Persekat Tegal',div:2,color:'#e9c46a',base:60},{name:'Perserang Serang',div:2,color:'#5e60ce',base:59},{name:'PSKC Cimahi',div:2,color:'#f4a261',base:59},{name:'Persikabo 1973',div:2,color:'#ff6b6b',base:58},{name:'PSPS Pekanbaru',div:2,color:'#457b9d',base:58},{name:'Persipal Palu',div:2,color:'#a01c3f',base:57},{name:'Sulut United',div:2,color:'#00a651',base:57},{name:'Kalteng Putra',div:2,color:'#cc0000',base:56},{name:'Persiba Balikpapan',div:2,color:'#e63946',base:56},{name:'Persipura Jayapura',div:2,color:'#0033a0',base:55},{name:'Persewar Waropen',div:2,color:'#7fae94',base:54}
];

// ==========================================
// 3. STATE GLOBAL
// ==========================================
var PID=0; var pendingMatch=null;
var state={
  view:'select',season:1,teams:[],fixtures:{1:[],2:[]},round:0,dayInWeek:1,
  myIdx:null,myDiv:1,mainTab:'beranda',subTab:'squad',activeSlot:1,
  news:[],incomingOffers:[],inflation:1.0,marketPlayers:[],allTime:{scorers:{},assisters:{},mvp:{},cs:{},apps:{}},
  trophyRoom:[],sponsors:[],sponsorOffers:[],freeAgents:[],inventory:{},teamRecords:{},
  godMode:false,sound:true,theme:'dark',settingsOpen:false,selectedStarter:null
};
var TOTAL_ROUNDS=38; var STAMINA_COST=18;

// ==========================================
// 4. GENERATOR PEMAIN & TIM INTERNASIONAL
// ==========================================
function rollSpecificPos(cat){if(cat==='GK') return 'GK';return pick(POSITIONS_SPECIFIC[cat]);}
function rollPlayStyle(sp){return pick(PLAY_STYLES[sp]||['Standar']);}
function rollSkills(sp){var cat=catOf(sp);var pool=SKILL_POOL[cat]||[];var out=[];var seen={};var c=ri(2,3);for(var i=0;i<c;i++){var s=pick(pool);if(!seen[s]){out.push({name:s});seen[s]=true;}}return out;}
function catOf(sp){if(sp==='GK') return 'GK';if(['CB','RB','LB','LWB','RWB'].indexOf(sp)!==-1) return 'DEF';if(['RMF','LMF','CMF','DMF','AMF'].indexOf(sp)!==-1) return 'MID';return 'FWD';}

function makeSquad(base){
  var comp={GK:2,DEF:5,MID:5,FWD:4};var out=[];
  ['GK','DEF','MID','FWD'].forEach(function(cat){
    for(var i=0;i<comp[cat];i++){
      var sp=rollSpecificPos(cat);var rating=Math.max(45,Math.min(110,Math.round(base+rnd(-6,6))));
      out.push({id:PID++,name:generateIndonesianName(),pos:cat,specificPos:sp,age:ri(18,32),rating:rating,playStyle:rollPlayStyle(sp),skills:rollSkills(sp),stats:{shooting:rating-5,passing:rating-5,dribbling:rating-5,defending:rating-5,physical:rating-5,speed:rating-5},seasonGoals:0,apps:0,assists:0,mvp:0,cs:0,yellow:0,red:0,stamina:100,injury:0,suspension:0,contractYears:ri(1,4),weeklyWage:Math.round((rating-40)*1.5e6),avgRating:0});
    }
  });
  return out;
}

function makeYouth(baseR,fromPlayer){
  var cat=fromPlayer?fromPlayer.pos:pick(['GK','DEF','DEF','MID','MID','FWD','FWD']);
  var specificPos=fromPlayer?fromPlayer.specificPos:rollSpecificPos(cat);
  var altPos=rollAltPositions(specificPos);var playStyle=rollPlayStyle(specificPos);
  var positions=[specificPos].concat(altPos);var skills=rollSkills(specificPos);
  var name=fromPlayer?fromPlayer.name:generateIndonesianName();
  
  var roll=Math.random();var talent,tier;
  
  if(roll < 0.01) { talent = 3.0; tier = 'era'; } 
  else if(roll < 0.04) { talent = 2.0; tier = 'golden'; } 
  else if(roll < 0.16) { talent = 1.5; tier = 'elite'; } 
  else if(roll < 0.41) { talent = 1.2; tier = 'talented'; } 
  else { talent = 1.0; tier = 'normal'; }
  
  var potBase = baseR + (tier === 'era' ? 40 : tier === 'golden' ? 25 : tier === 'elite' ? 18 : tier === 'talented' ? 12 : 6);
  var potential = tier === 'era' ? 99 : Math.max(60, Math.min(96, Math.round(potBase + rnd(-3, 3))));
  var startBoost = tier === 'era' ? 15 : tier === 'golden' ? 8 : tier === 'elite' ? 5 : tier === 'talented' ? 2 : 0;
  var height = fromPlayer ? (fromPlayer.height || generateHeight(cat, specificPos)) : generateHeight(cat, specificPos);
  var specialSkill = rollSpecialSkill(tier === 'era' ? 'golden' : tier);
  
  var youth={
    id:PID++, name:name, pos:cat, specificPos:specificPos, altPos:altPos, playStyle:playStyle,
    positions:positions, skills:skills, specialSkill:specialSkill,
    age:fromPlayer?16:ri(13,16),
    rating:Math.max(42, Math.min(80, Math.round(baseR*0.65 + rnd(-6,8) + startBoost))),
    height:height, aerial:0, balance:0, agility:0, pace:0, strength:0,
    stats:{shooting:ri(40,65),passing:ri(40,65),dribbling:ri(40,65),defending:ri(40,65),physical:ri(40,65),speed:ri(40,65),reflexes:ri(40,65),handling:ri(40,65),positioning:ri(40,65),kicking:ri(40,65),command:ri(40,65)},
    talent:talent, tier:tier, potential:potential,
    seasonGoals:0, careerGoals:0, apps:0, assists:0, yellow:0, red:0, cs:0, mvp:0,
    stamina:100, injury:0, injuryName:'', injurySeverity:'', suspension:0,
    previousRating:0, rejectedReduced:false, isFreeAgent:false,
    ratings:[], avgRating:0, goalBonus:ri(2,8)*1e6, assistBonus:ri(1,5)*1e6,
    csBonus:ri(3,10)*1e6, mvpBonus:ri(5,25)*1e6,
    lastSeasonBonus:0, contractYears:ri(2,5), weeklyWage:Math.round((baseR*0.5-20)*1e6)
  };
  return finishYouthStats(youth);
}

function rollAltPositions(mainPos){var cat=catOf(mainPos);if(cat==='GK') return [];var alts=[];if(Math.random()<0.55){var pool=POSITIONS_SPECIFIC[cat].filter(function(p){return p!==mainPos;});if(pool.length) alts.push(pick(pool));if(Math.random()<0.25){var pool2=POSITIONS_SPECIFIC[cat].filter(function(p){return p!==mainPos&&alts.indexOf(p)===-1;});if(pool2.length) alts.push(pick(pool2));}}return alts;}
function rollSpecialSkill(tier){if(tier==='golden'){var s=pick(SPECIAL_SKILLS.golden);return {id:s.id,icon:s.icon,name:s.name,desc:s.desc,tier:'golden'};}if(tier==='elite' && Math.random()<0.5){var s2=pick(SPECIAL_SKILLS.elite);return {id:s2.id,icon:s2.icon,name:s2.name,desc:s2.desc,tier:'elite'};}return null;}
function hasSpecial(p,id){return p && p.specialSkill && p.specialSkill.id===id;}
var SPECIAL_SKILLS={golden:[{id:'freekick',icon:'\uD83C\uDFAF',name:'Raja Bola Mati',desc:'+25% gol tendangan bebas'},{id:'clutch',icon:'\uD83D\uDD25',name:'Pemain Penentu',desc:'+rating di babak kedua'},{id:'ironman',icon:'\uD83D\uDCAA',name:'Besi Berjalan',desc:'-50% risiko cedera'},{id:'biggame',icon:'\uD83C\uDFC6',name:'Spesialis Laga Besar',desc:'+rating di laga penting'},{id:'speed',icon:'\u26A1',name:'Kilat',desc:'+peluang gol serangan cepat'},{id:'leader',icon:'\uD83D\uDC51',name:'Panglima Lapangan',desc:'+5% kekuatan serangan tim'},{id:'maestro',icon:'\uD83C\uDFAA',name:'Otak Serangan',desc:'+50% peluang asis'},{id:'finisher',icon:'\u26BD',name:'Algojo Gawang',desc:'+30% peluang gol'}],elite:[{id:'freekick',icon:'\uD83C\uDFAF',name:'Ahli Bola Mati',desc:'+15% gol tendangan bebas'},{id:'clutch',icon:'\uD83D\uDD25',name:'Pemain Laga Penting',desc:'+rating di laga penting'},{id:'ironman',icon:'\uD83D\uDCAA',name:'Tahan Banting',desc:'-30% risiko cedera'},{id:'speed',icon:'\u26A1',name:'Cepat Kaki',desc:'+kecepatan lari'},{id:'maestro',icon:'\uD83C\uDFAA',name:'Kreator Serangan',desc:'+25% peluang asis'},{id:'finisher',icon:'\u26BD',name:'Penembak Jitu',desc:'+15% peluang gol'},{id:'leader',icon:'\uD83D\uDC51',name:'Calon Kapten',desc:'+3% kekuatan serangan tim'}]};
function generateHeight(cat,specificPos){var base,spread;if(cat==='GK'){base=190;spread=8;}else if(specificPos==='CB'){base=187;spread=7;}else if(specificPos==='CF'||specificPos==='SS'){base=180;spread=9;}else if(specificPos==='RB'||specificPos==='LB'||specificPos==='RWB'||specificPos==='LWB'){base=175;spread=7;}else{base=178;spread=8;}var h=Math.round(base+rnd(-spread,spread));return Math.max(160,Math.min(205,h));}
function derivePhysical(height,playStyle){var aerial,balance,agility,pace,strength;if(height>=190){aerial=ri(80,95);balance=ri(60,75);agility=ri(55,70);pace=ri(55,75);strength=ri(80,95);}else if(height>=185){aerial=ri(72,88);balance=ri(68,82);agility=ri(65,80);pace=ri(65,82);strength=ri(75,90);}else if(height>=178){aerial=ri(60,78);balance=ri(75,88);agility=ri(75,88);pace=ri(72,88);strength=ri(65,82);}else if(height>=170){aerial=ri(48,68);balance=ri(82,92);agility=ri(85,95);pace=ri(78,92);strength=ri(55,72);}else{aerial=ri(38,58);balance=ri(85,95);agility=ri(88,98);pace=ri(85,96);strength=ri(45,62);}if(playStyle==='Target Man'){aerial+=ri(5,10);strength+=ri(5,8);}if(playStyle==='Pemburu Gol'||playStyle==='Pemburu Peluang'){pace+=ri(3,8);}if(playStyle==='Sayap Cut Inside'){pace+=ri(3,7);agility+=ri(3,7);}if(playStyle==='Pemain Sayap Kreatif'){agility+=ri(3,7);pace+=ri(2,5);}if(playStyle==='Bek Sayap Menyerang'){pace+=ri(3,7);}if(playStyle==='Jangkar'||playStyle==='Perusak Serangan'){strength+=ri(5,10);balance+=ri(3,7);}if(playStyle==='Kiper Stoper'){aerial+=ri(5,10);strength+=ri(5,10);}if(playStyle==='Kiper Agresif'){agility+=ri(5,10);pace+=ri(3,7);}return {height:height,aerial:Math.min(99,aerial),balance:Math.min(99,balance),agility:Math.min(99,agility),pace:Math.min(99,pace),strength:Math.min(99,strength)};}
function generateIndividStats(cat,specificPos,rating,playStyle){var base=rating;var stats={};var v=function(){return rnd(-8,8);};if(cat==='GK'){stats.reflexes=Math.min(110,Math.round(base+v()+5));stats.handling=Math.min(110,Math.round(base+v()));stats.positioning=Math.min(110,Math.round(base+v()));stats.kicking=Math.min(110,Math.round(base+v()-3));stats.command=Math.min(110,Math.round(base+v()-5));stats.speed=Math.min(110,Math.round(base+v()-15));stats.shooting=ri(5,20);stats.passing=Math.min(110,Math.round(base+v()-10));stats.dribbling=ri(10,25);stats.defending=Math.min(110,Math.round(base+v()));stats.physical=Math.min(110,Math.round(base+v()));}else if(cat==='DEF'){stats.defending=Math.min(110,Math.round(base+v()+5));stats.physical=Math.min(110,Math.round(base+v()));stats.passing=Math.min(110,Math.round(base+v()-3));stats.shooting=Math.min(110,Math.round(base+v()-15));stats.dribbling=Math.min(110,Math.round(base+v()-10));stats.speed=Math.min(110,Math.round(base+v()));}else if(cat==='MID'){stats.passing=Math.min(110,Math.round(base+v()+5));stats.dribbling=Math.min(110,Math.round(base+v()));stats.defending=Math.min(110,Math.round(base+v()-5));stats.shooting=Math.min(110,Math.round(base+v()-3));stats.physical=Math.min(110,Math.round(base+v()));stats.speed=Math.min(110,Math.round(base+v()));}else{stats.shooting=Math.min(110,Math.round(base+v()+5));stats.dribbling=Math.min(110,Math.round(base+v()+3));stats.passing=Math.min(110,Math.round(base+v()-3));stats.defending=Math.min(110,Math.round(base+v()-18));stats.physical=Math.min(110,Math.round(base+v()-3));stats.speed=Math.min(110,Math.round(base+v()+3));}return stats;}
function finishYouthStats(p){var phys=derivePhysical(p.height,p.playStyle);p.aerial=phys.aerial;p.balance=phys.balance;p.agility=phys.agility;p.pace=phys.pace;p.strength=phys.strength;p.stats=generateIndividStats(p.pos,p.specificPos,p.rating,p.playStyle);return p;}

function generateInternationalTeams() {
  var countries = [
    { name: 'Inggris', cities: ['London', 'Manchester', 'Liverpool', 'Chelsea', 'Arsenal', 'Leeds', 'Everton', 'Tottenham'], suffix: ['United', 'City', 'FC', 'Rovers', 'Athletic'] },
    { name: 'Spanyol', cities: ['Madrid', 'Barcelona', 'Sevilla', 'Valencia', 'Bilbao', 'Villarreal', 'Betis', 'Sociedad'], suffix: ['CF', 'FC', 'Atletico', 'Real', 'Sporting'] },
    { name: 'Italia', cities: ['Milan', 'Turin', 'Roma', 'Napoli', 'Lazio', 'Fiorentina', 'Bologna', 'Bergamo'], suffix: ['AC', 'Inter', 'Calcio', 'FC', 'Sporting'] },
    { name: 'Jerman', cities: ['Munich', 'Dortmund', 'Berlin', 'Leipzig', 'Leverkusen', 'Frankfurt', 'Stuttgart', 'Bremen'], suffix: ['FC', 'United', 'Sporting', 'Athletic', 'Dynamo'] },
    { name: 'Prancis', cities: ['Paris', 'Marseille', 'Lyon', 'Monaco', 'Lille', 'Nice', 'Lens', 'Rennes'], suffix: ['FC', 'Olympique', 'Sporting', 'Racing', 'Athletic'] },
    { name: 'Brasil', cities: ['Rio', 'Sao Paulo', 'Santos', 'Palmeiras', 'Flamengo', 'Corinthians', 'Gremio', 'Bahia'], suffix: ['FC', 'SC', 'EC', 'United', 'Sporting'] },
    { name: 'Argentina', cities: ['Buenos Aires', 'River', 'Boca', 'Racing', 'Independiente', 'San Lorenzo', 'Rosario', 'Estudiantes'], suffix: ['FC', 'Club', 'Atletico', 'Sporting', 'Racing'] },
    { name: 'Portugal', cities: ['Lisbon', 'Porto', 'Benfica', 'Sporting', 'Braga', 'Vitoria', 'Boavista', 'Famalicao'], suffix: ['FC', 'SC', 'CP', 'United', 'Athletic'] },
    { name: 'Belanda', cities: ['Amsterdam', 'Rotterdam', 'Eindhoven', 'Utrecht', 'Alkmaar', 'Twente', 'Heerenveen', 'Vitesse'], suffix: ['FC', 'SC', 'United', 'Sporting', 'Racing'] },
    { name: 'Jepang', cities: ['Tokyo', 'Yokohama', 'Osaka', 'Kawasaki', 'Urawa', 'Kashima', 'Kobe', 'Nagoya'], suffix: ['FC', 'United', 'Reds', 'Marinos', 'Antlers'] },
    { name: 'Korea Selatan', cities: ['Seoul', 'Ulsan', 'Jeonbuk', 'Pohang', 'Suwon', 'Incheon', 'Daegu', 'Gangwon'], suffix: ['FC', 'United', 'Motors', 'Steelers', 'Bluewings'] },
    { name: 'Arab Saudi', cities: ['Riyadh', 'Jeddah', 'Dammam', 'Al Hilal', 'Al Nassr', 'Al Ittihad', 'Al Ahli', 'Al Shabab'], suffix: ['FC', 'SC', 'United', 'Club', 'Sporting'] },
    { name: 'Amerika Serikat', cities: ['New York', 'Los Angeles', 'Chicago', 'Seattle', 'Portland', 'Atlanta', 'Austin', 'Miami'], suffix: ['FC', 'United', 'SC', 'City', 'Sporting'] },
    { name: 'Meksiko', cities: ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana', 'Leon', 'Toluca', 'Cruz Azul'], suffix: ['FC', 'Club', 'United', 'Atletico', 'Sporting'] },
    { name: 'Turki', cities: ['Istanbul', 'Galatasaray', 'Fenerbahce', 'Besiktas', 'Trabzon', 'Ankara', 'Izmir', 'Bursa'], suffix: ['FC', 'SK', 'United', 'Sporting', 'Athletic'] },
    { name: 'Mesir', cities: ['Cairo', 'Alexandria', 'Al Ahly', 'Zamalek', 'Ismaily', 'Pyramids', 'Smouha', 'Masr'], suffix: ['FC', 'SC', 'Club', 'United', 'Sporting'] },
    { name: 'Australia', cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Canberra', 'Gold Coast', 'Newcastle'], suffix: ['FC', 'City', 'Victory', 'United', 'Athletic'] },
    { name: 'Maroko', cities: ['Casablanca', 'Rabat', 'Marrakech', 'Fez', 'Tangier', 'Agadir', 'Oujda', 'Kenitra'], suffix: ['FC', 'SC', 'Club', 'United', 'Sporting'] },
    { name: 'Rusia', cities: ['Moscow', 'St Petersburg', 'Kazan', 'Sochi', 'Rostov', 'Krasnodar', 'Dynamo', 'CSKA'], suffix: ['FC', 'SC', 'United', 'Dynamo', 'Sporting'] },
    { name: 'Afrika Selatan', cities: ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Soweto', 'Port Elizabeth', 'Bloemfontein', 'Polokwane'], suffix: ['FC', 'United', 'City', 'Rovers', 'Athletic'] }
  ];
  var intlTeams = [];
  for (var c = 0; c < countries.length; c++) {
    for (var i = 0; i < 10; i++) {
      var country = countries[c]; var city = pick(country.cities); var suffix = pick(country.suffix);
      var baseRating = ri(75, 88); 
      var intlPlayers = [];
      var comp = {GK:2, DEF:4, MID:5, FWD:4};
      ['GK','DEF','MID','FWD'].forEach(function(pos) {
        for(var j=0; j<comp[pos]; j++) {
          intlPlayers.push({id: PID++, name: generateIndonesianName(), pos: pos, specificPos: pick(POSITIONS_SPECIFIC[pos]), age: ri(19, 32), rating: Math.max(65, Math.min(110, Math.round(baseRating + rnd(-4, 4)))), seasonGoals: 0, apps: 0, assists: 0, mvp: 0, stamina: 100, injury: 0, suspension: 0, contractYears: ri(1, 4), weeklyWage: ri(100, 300) * 1000000});
        }
      });
      intlTeams.push({name: city + ' ' + suffix, color: pick(['#e63946', '#1a3a8f', '#2ecc71', '#f4a261', '#9b59b6']), div: 3, country: country.name, players: intlPlayers, formation: '4-3-3', xi: [], budget: ri(500, 2000) * 1e9, stadium:{level:5, cap:60000}});
    }
  }
  return intlTeams;
}

function generateAsianClubs() {
  var asianData = [
    {n:'Al Hilal', c:'Saudi', r:88}, {n:'Al Nassr', c:'Saudi', r:87}, {n:'Al Ittihad', c:'Saudi', r:86}, {n:'Al Ahli', c:'Saudi', r:85}, {n:'Al Shabab', c:'Saudi', r:82}, {n:'Al Ettifaq', c:'Saudi', r:80}, {n:'Al Taawoun', c:'Saudi', r:78}, {n:'Al Fateh', c:'Saudi', r:77},
    {n:'Kawasaki Frontale', c:'Jepang', r:84}, {n:'Yokohama F Marinos', c:'Jepang', r:83}, {n:'Urawa Reds', c:'Jepang', r:83}, {n:'Kashima Antlers', c:'Jepang', r:82}, {n:'Vissel Kobe', c:'Jepang', r:81}, {n:'Gamba Osaka', c:'Jepang', r:80}, {n:'Nagoya Grampus', c:'Jepang', r:79}, {n:'Cerezo Osaka', c:'Jepang', r:78}, {n:'Sanfrecce Hiroshima', c:'Jepang', r:78}, {n:'FC Tokyo', c:'Jepang', r:77}, {n:'Kashiwa Reysol', c:'Jepang', r:76}, {n:'Avispa Fukuoka', c:'Jepang', r:75},
    {n:'Ulsan Hyundai', c:'Korea', r:84}, {n:'Jeonbuk Motors', c:'Korea', r:84}, {n:'Pohang Steelers', c:'Korea', r:82}, {n:'FC Seoul', c:'Korea', r:81}, {n:'Suwon Samsung', c:'Korea', r:79}, {n:'Incheon United', c:'Korea', r:78}, {n:'Daegu FC', c:'Korea', r:77}, {n:'Gangwon FC', c:'Korea', r:76}, {n:'Jeju United', c:'Korea', r:75}, {n:'Gwangju FC', c:'Korea', r:74},
    {n:'Shanghai Port', c:'China', r:83}, {n:'Shandong Taishan', c:'China', r:82}, {n:'Shanghai Shenhua', c:'China', r:81}, {n:'Beijing Guoan', c:'China', r:80}, {n:'Chengdu Rongcheng', c:'China', r:79}, {n:'Zhejiang FC', c:'China', r:78}, {n:'Tianjin Jinmen', c:'China', r:76}, {n:'Wuhan Three Towns', c:'China', r:75},
    {n:'Al Sadd', c:'Qatar', r:84}, {n:'Al Duhail', c:'Qatar', r:83}, {n:'Al Rayyan', c:'Qatar', r:81}, {n:'Al Gharafa', c:'Qatar', r:80}, {n:'Al Wakrah', c:'Qatar', r:78}, {n:'Al Arabi', c:'Qatar', r:77},
    {n:'Al Ain', c:'UAE', r:83}, {n:'Shabab Al Ahli', c:'UAE', r:82}, {n:'Al Wasl', c:'UAE', r:81}, {n:'Sharjah FC', c:'UAE', r:80}, {n:'Al Jazira', c:'UAE', r:79}, {n:'Baniyas', c:'UAE', r:76},
    {n:'Persepolis', c:'Iran', r:83}, {n:'Esteghlal', c:'Iran', r:82}, {n:'Sepahan', c:'Iran', r:81}, {n:'Tractor', c:'Iran', r:80}, {n:'Foolad', c:'Iran', r:78}, {n:'Gol Gohar', c:'Iran', r:76},
    {n:'Pakhtakor', c:'Uzbekistan', r:79}, {n:'Nasaf', c:'Uzbekistan', r:78}, {n:'Bunyodkor', c:'Uzbekistan', r:77}, {n:'AGMK', c:'Uzbekistan', r:75},
    {n:'Buriram United', c:'Thailand', r:80}, {n:'BG Pathum', c:'Thailand', r:78}, {n:'Muangthong United', c:'Thailand', r:77}, {n:'Bangkok United', c:'Thailand', r:76}, {n:'Port FC', c:'Thailand', r:75},
    {n:'Melbourne City', c:'Australia', r:79}, {n:'Sydney FC', c:'Australia', r:78}, {n:'Melbourne Victory', c:'Australia', r:77}, {n:'Central Coast', c:'Australia', r:76}, {n:'Macarthur FC', c:'Australia', r:75},
    {n:'Johor Darul Tazim', c:'Malaysia', r:80}, {n:'Selangor FC', c:'Malaysia', r:76}, {n:'Sabah FC', c:'Malaysia', r:75}, {n:'Kedah FA', c:'Malaysia', r:74},
    {n:'Kitchee SC', c:'Hong Kong', r:75}, {n:'Lee Man', c:'Hong Kong', r:74},
    {n:'Hanoi FC', c:'Vietnam', r:75}, {n:'Viettel FC', c:'Vietnam', r:74}, {n:'Cong An Ha Noi', c:'Vietnam', r:73},
    {n:'Bali United', c:'Indonesia', r:78}, {n:'Persija Jakarta', c:'Indonesia', r:77}, {n:'Persib Bandung', c:'Indonesia', r:77}, {n:'PSM Makassar', c:'Indonesia', r:76}, {n:'Borneo FC', c:'Indonesia', r:75}
  ];
  var cities = ['Tokyo', 'Seoul', 'Riyadh', 'Doha', 'Dubai', 'Tehran', 'Bangkok', 'Sydney', 'Beijing', 'Tashkent'];
  var suffixes = ['Tigers', 'Dragons', 'Eagles', 'Falcons', 'Lions', 'Wolves', 'Warriors', 'Knights'];
  for(var i=0; i<30; i++) asianData.push({n: pick(cities) + ' ' + pick(suffixes), c: 'Asia', r: ri(70, 79)});

  return asianData.map(function(d) {
      return {name: d.n, color: pick(['#e63946', '#1a3a8f', '#2ecc71', '#f4a261', '#9b59b6', '#e67e22', '#00a651']), div: 4, country: d.c, players: makeSquad(d.r), formation: '4-3-3', xi: [], budget: ri(100, 500) * 1e9, stadium: {level:3, cap:35000}};
  });
}

// ==========================================
// 5. AUTO XI, FIXTURES, DATABASE
// ==========================================
function getP(team,id){if(!team||!team.players)return null;for(var i=0;i<team.players.length;i++){if(team.players[i].id===id)return team.players[i];}return null;}
function autoPickXI(team,formation){
  var f=FORMATIONS[formation||'4-3-3'];var xi=[];var used={};
  var sortFn = function(a, b) {
      var aFit = a.stamina >= 50;
      var bFit = b.stamina >= 50;
      if (aFit && !bFit) return -1;
      if (!aFit && bFit) return 1;
      var aScore = a.rating + ((a.mvp || 0) * 3);
      var bScore = b.rating + ((b.mvp || 0) * 3);
      if (Math.abs(aScore - bScore) <= 2) {
          if ((a.mvp || 0) >= 3 && (b.mvp || 0) < 3) return -1; 
          if ((b.mvp || 0) >= 3 && (a.mvp || 0) < 3) return 1;
          var aApps = a.apps || 0;
          var bApps = b.apps || 0;
          if (aApps < bApps) return -1;
          if (aApps > bApps) return 1;
      }
      return bScore - aScore;
  };
  ['GK','DEF','MID','FWD'].forEach(function(cat){
    var c=team.players.filter(function(p){return p.pos===cat && !p.injury && !(p.suspension&&p.suspension>0) && !used[p.id];});
    c.sort(sortFn);
    for(var i=0;i<f[cat].length;i++){ if(c[i]){ xi.push(c[i].id); used[c[i].id]=true; } }
  });
  team.xi=xi;
}
function getDivIndices(div){return state.teams.map(function(t,i){return t.div===div?i:-1;}).filter(function(i){return i>=0;});}
function makeFixtures(teamIndices){var ids=teamIndices.slice();var n=ids.length;var firstLeg=[];for(var r=0;r<n-1;r++){var pairs=[];for(var i=0;i<n/2;i++) pairs.push([ids[i],ids[n-1-i]]);firstLeg.push(pairs);var fixed=ids[0];var rest=ids.slice(1);rest.unshift(rest.pop());ids=[fixed].concat(rest);}var secondLeg=firstLeg.map(function(rd){return rd.map(function(pa){return [pa[1],pa[0]];});});var allRounds=firstLeg.concat(secondLeg);return allRounds.map(function(rd){return rd.map(function(pa){return {home:pa[0],away:pa[1],played:false,hg:0,ag:0};});});}
function getMatchDate(){var baseDay=((state.round*7)+state.dayInWeek);var m=Math.floor(baseDay/28);var d=(baseDay%28)+1;var monthNames=['Agu','Sep','Okt','Nov','Des','Jan','Feb','Mar','Apr','Mei'];return d+' '+(monthNames[m]||'Mei')+' '+(2026+Math.floor(m/9));}
function getTransferWindowLabel(){return {open:true,label:'Bursa Aktif',color:'#2ecc71'};}

async function saveGame(){
  if(!state.activeSlot||!_supabase)return;
  try{await _supabase.from('game_saves').upsert({slot_id:'slot_'+state.activeSlot,game_data:{state:state,PID:PID}},{onConflict:'slot_id'});}catch(e){}
}
var saveTimer=null;function scheduleSave(){clearTimeout(saveTimer);saveTimer=setTimeout(saveGame,1200);}
async function loadGame(n){
  if(!_supabase)return false;
  try{
    var d=await _supabase.from('game_saves').select('game_data').eq('slot_id','slot_'+(n||state.activeSlot)).single();
    if(!d.data||!d.data.game_data)return false;
    Object.keys(d.data.game_data.state).forEach(function(k){state[k]=d.data.game_data.state[k];});
    PID=d.data.game_data.PID||0;if(state.dayInWeek===undefined)state.dayInWeek=1;return true;
  }catch(e){return false;}
}
async function getSlotInfo(n){if(!_supabase)return null;try{var d=await _supabase.from('game_saves').select('game_data').eq('slot_id','slot_'+n).single();if(!d.data)return null;var s=d.data.game_data.state;return {team:s.teams[s.myIdx]?s.teams[s.myIdx].name:'?',div:s.teams[s.myIdx]?s.teams[s.myIdx].div:1,season:s.season,round:s.round,dayInWeek:s.dayInWeek||1};}catch(e){return null;}}

// ==========================================
// 6. MATCH ENGINE & KOMENTATOR
// ==========================================
function teamStats(team){
  var xi=team.xi.map(function(id){return getP(team,id);}).filter(Boolean);
  if(!xi.length) return {atk:50,def:50,mid:50};
  var by={GK:[],DEF:[],MID:[],FWD:[]};var total=0;
  xi.forEach(function(p){by[p.pos].push(p.rating);total+=p.rating;});
  var avgR=total/xi.length;var gk=avg(by.GK)||avgR;var def=avg(by.DEF)||avgR;var mid=avg(by.MID)||avgR;var fwd=avg(by.FWD)||avgR;
  return {atk:(fwd*0.45)+(mid*0.35)+(def*0.10)+(avgR*0.10), def:(gk*0.40)+(def*0.40)+(mid*0.10)+(avgR*0.10), mid:mid};
}
function pickScorer(team){var xi=team.xi.map(function(id){return getP(team,id);}).filter(Boolean);if(!xi.length)return null;var f=xi.filter(function(p){return p.pos==='FWD'||p.pos==='MID';});return f.length?pick(f):pick(xi);}
function pickAssist(team,scorerId){var xi=team.xi.map(function(id){return getP(team,id);}).filter(function(p){return p&&p.id!==scorerId;});return xi.length?pick(xi):null;}

var KOMENTAR_BANK = {
  buildup: ["{p} menguasai bola di lini tengah...","Umpan panjang dari {p} mencari rekannya...","{p} menggiring bola melewati pemain lawan...","Operan cepat {p} ke sektor kanan...","Bola dikuasai {p} di area pertahanan {t}...","{p} mengatur tempo permainan dari belakang...","Sentuhan pertama {p} sangat baik...","Visi luar biasa {p}, umpan terobosan!","{p} menusuk dari sisi kiri!","{p} melepaskan umpan silang ke kotak penalti...","Kombinasi apik antar pemain {t}...","{p} mencoba melewati satu pemain lawan...","Tekanan tinggi dari {t} di area lawan...","{p} bertahan dengan baik dan merebut bola..."],
  shot: ["{p} melepaskan tembakan keras... masih di atas mistar!","Sepakan {p} menyamping dari gawang!","Tendangan {p} membentur tiang gawang!","Percobaan {p} dari luar kotak penalti melambung!","{p} mencoba peruntungan masih melebar!","Tendangan voli {p} melenceng jauh!","{p} menembak namun masih diblok bek!","Peluang emas untuk {p}, tapi belum jadi gol!","Sepakan kaki kiri {p}, bola tipis di samping gawang!","Akselerasi {p} diakhiri dengan tembakan, masih melenceng!"],
  save: ["Penyelamatan gemilang dari {p}!","{p} dengan sigap menepis bola!","Kiper {p} menangkap bola dengan aman.","Refleks cepat {p} menghalau tembakan keras!","{p} menepis bola keluar lapangan!","Aksi luar biasa dari {p} di bawah mistar!","Tembakan keras, tapi {p} terlalu tangguh!","Kiper {p} melakukan penyelamatan krusial!"],
  corner: ["Tendangan sudut untuk {t}, {p} yang akan mengambil...","Corner kick {t}, bola diambil {p}...","{p} bersiap mengeksekusi tendangan sudut...","Sepak pojok {t}, {p} mengirim umpan ke tiang jauh...","Peluang bagus bagi {t} dari sepak pojok."],
  foul: ["Pelanggaran oleh {p} dari {t}...","{p} melanggar lawan di tengah lapangan...","Wasit meniup peluit, {p} melakukan pelanggaran...","Tackle keras dari {p}, wasit beri peringatan."],
  atmosfer_seri: ["Pertandingan berjalan sangat ketat...","Kedua tim saling jual beli serangan!","Pertahanan {t} tampak mulai goyah...","Suporter {t} terus menyanyikan dukungan!","Belum ada yang bisa memecah kebuntuan...","Lini tengah menjadi medan pertempuran sengit..."],
  atmosfer_menang: ["Tim {t} mulai mengendalikan permainan...","Suporter {t} bersorak riang!","{t} bermain lebih santai dengan keunggulan ini...","Lawan mencoba bangkit, tapi {t} masih solid.","Kepercayaan diri pemain {t} sedang tinggi..."],
  atmosfer_kalah: ["Tim {t} mulai frustrasi...","Manajer {t} terlihat gelisah di pinggir lapangan.","{t} mencoba meningkatkan intensitas serangan...","Suporter {t} mulai cemas.","Kesalahan demi kesalahan dilakukan oleh {t}."],
  waktu_akhir: ["Waktu tersisa sedikit lagi...","Pertandingan memasuki menit-menit akhir!","Kedua tim bermain dengan tempo tinggi...","Wasit melihat ke jam tangannya...","Ini adalah momen krusial bagi kedua tim!"]
};

function rp(team,positions){var pool=team.xi.map(function(id){return getP(team,id);}).filter(function(p){return p&&positions.indexOf(p.pos)!==-1;});if(!pool.length){var all=team.xi.map(function(id){return getP(team,id);}).filter(Boolean);return all.length?pick(all):null;}return pick(pool);}
function komentarBaris(team, kategori, opponent, min, myScore, oppScore) {
  var line = "";
  var isLateGame = (min > 75);
  var isWinning = myScore > oppScore;
  var isLosing = myScore < oppScore;
  var isDrawing = myScore === oppScore;

  if (kategori === 'atmosfer') {
      if (isWinning) line = pick(KOMENTAR_BANK.atmosfer_menang);
      else if (isLosing) line = pick(KOMENTAR_BANK.atmosfer_kalah);
      else line = pick(KOMENTAR_BANK.atmosfer_seri);
      if (isLateGame && Math.random() < 0.5) line = pick(KOMENTAR_BANK.waktu_akhir) + " " + line;
  } else {
      line = pick(KOMENTAR_BANK[kategori] || KOMENTAR_BANK.buildup);
  }

  var p = null;
  if (kategori === 'save') p = rp(team, ['GK']);
  else if (kategori === 'corner') p = rp(team, ['MID', 'FWD', 'DEF']);
  else p = rp(team, ['MID', 'DEF', 'FWD']);

  var pName = p ? p.name : 'pemain';
  var tName = team.name;
  return line.replace(/{p}/g, pName).replace(/{t}/g, tName);
}

function simulateSegment(home,away,fromMin,toMin,ctx){
  for(var min=fromMin;min<=toMin;min++){
    if(Math.random()<0.22){
      var isHome=Math.random()<ctx.possH;
      var t=isHome?home:away;
      var opp=isHome?away:home;
      var kat=pick(['buildup','buildup','buildup','atmosfer','atmosfer','corner']);
      ctx.events.push({min:min,type:'commentary',team:isHome?'home':'away',text:komentarBaris(t,kat,opp,min,ctx.hg,ctx.ag)});
    }
    if(Math.random()<0.50){
      var isH2=Math.random()<ctx.possH;
      var hb=ctx.homeBoost||0,ab=ctx.awayBoost||0;
      var atkMul=(isH2?1.06:1)*(1+(isH2?hb:ab));
      var defMul=(isH2?1:1.06)*(1+(isH2?ab:hb)*0.7);
      var atk=(isH2?ctx.H.atk:ctx.A.atk)*atkMul;
      var dfn=(isH2?ctx.A.def:ctx.H.def)*defMul;
      var pGoal=0.115*(atk/(atk+dfn))*2*(ctx.weather?ctx.weather.goal:1.0);
      var att2=isH2?home:away;
      var def2=isH2?away:home;
      
      att2.xi.forEach(function(id){
        var pl=getP(att2,id);
        if(!pl) return;
        if(hasSpecial(pl,'finisher')) pGoal*=1.15;
        if(hasSpecial(pl,'leader')) pGoal*=1.02;
        if(pl.pace) pGoal*=(1+(pl.pace-60)/500);
      });
      def2.xi.forEach(function(id){
        var pl=getP(def2,id);
        if(!pl||!pl.aerial) return;
        pGoal*=(1-(pl.aerial-60)/800);
      });
      var att=isH2?home:away,def=isH2?away:home;
      
      if(Math.random()<pGoal){
        var s=pickScorer(att); if(!s) continue;
        if(isH2)ctx.hg++;else ctx.ag++;
        var assistTxt='',assistId=null;
        var maestroOn=att.xi.some(function(id){return hasSpecial(getP(att,id),'maestro');});
        var assistChance=maestroOn?0.90:0.75;
        if(Math.random()<assistChance){
          var a=pickAssist(att,s.id);
          if(a){a.assists++;assistId=a.id;assistTxt=' (assist: '+a.name+')';}
        }
        ctx.events.push({min:min,type:'goal',team:isH2?'home':'away',scorerId:s.id,assistId:assistId,text:'GOL! '+s.name+' ('+att.name+')'+assistTxt+' - Skor '+ctx.hg+'-'+ctx.ag});
      } else {
        var s2=pickScorer(att);
        var oppDef=isH2?away:home;
        if(Math.random()<0.45){
          ctx.events.push({min:min,type:'commentary',team:isH2?'away':'home',text:komentarBaris(oppDef,'save',att,min,ctx.ag,ctx.hg)});
        } else {
          var shotText = pick(KOMENTAR_BANK.shot).replace('{p}', s2?s2.name:'penyerang');
          ctx.events.push({min:min,type:'commentary',team:isH2?'home':'away',text:shotText});
        }
      }
    }
    if(Math.random()<0.015){
      var isH3=Math.random()<0.5;
      var t3=isH3?home:away;
      var tOpp=isH3?away:home;
      var players=t3.xi.map(function(id){return getP(t3,id);}).filter(Boolean);
      if(!players.length) continue;
      var p3=pick(players);
      var incidentRoll = Math.random();
      
      if(incidentRoll < 0.005) { 
          if (Math.random() < 0.5) {
              p3.red++; p3.suspension = ri(10, 15); t3.budget -= 500e9; 
              if(t3 === state.teams[state.myIdx]) { state.fanMood = Math.max(0, state.fanMood - 30); state.news.unshift({t:'🚨 KONTROVERSI: '+p3.name+' melakukan tindakan RASIS! Denda Rp 500 M dan skorsing '+p3.suspension+' pekan.', time:'Musim '+state.season}); }
              ctx.events.push({min:min,type:'card',team:isH3?'home':'away',text:'KARTU MERAH LANGSUNG! '+p3.name+' ('+t3.name+') melakukan tindakan RASIS! Pertandingan dihentikan sementara.'});
          } else {
              var oppPlayers = tOpp.xi.map(function(id){return getP(tOpp,id);}).filter(Boolean);
              if (oppPlayers.length > 0) {
                  var victim = pick(oppPlayers); p3.red++; p3.suspension = ri(5, 8); 
                  var inj = injuryDurationWeeks('patah'); victim.injury = inj.weeks; victim.injuryName = inj.name + ' (Akibat Pelanggaran Brutal)'; victim.stamina = 0;
                  if(t3 === state.teams[state.myIdx] || tOpp === state.teams[state.myIdx]) { state.news.unshift({t:'🚨 INSIDEN: '+p3.name+' sengaja mencederai '+victim.name+'! Skorsing '+p3.suspension+' pekan.', time:'Musim '+state.season}); }
                  ctx.events.push({min:min,type:'card',team:isH3?'home':'away',text:'KARTU MERAH LANGSUNG! '+p3.name+' melakukan pelanggaran brutal pada '+victim.name+'!'});
              }
          }
      } else {
          var isRed=Math.random()<0.08;
          if(isRed){ p3.red++; p3.suspension=ri(1,3); ctx.events.push({min:min,type:'card',team:isH3?'home':'away',text:'KARTU MERAH! '+p3.name+' ('+t3.name+')'}); }
          else {
              p3.yellow++;
              if(p3.yellow === 2) { p3.red++; p3.suspension=1; ctx.events.push({min:min,type:'card',team:isH3?'home':'away',text:'KARTU KUNING KEDUA! '+p3.name+' ('+t3.name+') diusir dari lapangan!'}); }
              else { var foulText = pick(KOMENTAR_BANK.foul).replace('{p}',p3.name).replace('{t}',t3.name); ctx.events.push({min:min,type:'card',team:isH3?'home':'away',text:'Kartu kuning untuk '+p3.name+' ('+t3.name+'). '+foulText}); }
          }
      }
    }
  }
}

function finalizeMatch(home,away,ctx){
  var hGK=null,aGK=null;
  home.xi.forEach(function(id){var p=getP(home,id);if(p&&p.pos==='GK') hGK=p;});
  away.xi.forEach(function(id){var p=getP(away,id);if(p&&p.pos==='GK') aGK=p;});
  if(ctx.ag===0&&hGK) hGK.cs++;
  if(ctx.hg===0&&aGK) aGK.cs++;
  var mvp=null;
  if(ctx.hg>ctx.ag) mvp=pickMVP(home);
  else if(ctx.ag>ctx.hg) mvp=pickMVP(away);
  else mvp=pickMVP(Math.random()<0.5?home:away);
  if(mvp) mvp.mvp++;
  ctx.events.forEach(function(e){ if(e.type==='goal'){ var t=e.team==='home'?home:away; var p=getP(t,e.scorerId); if(p){p.seasonGoals++;p.careerGoals++;} } });
  
  [home,away].forEach(function(t){
    var isMyTeam=(state.teams[state.myIdx]===t);
    var stLevel = (t.stadium && t.stadium.level) ? t.stadium.level : 1;
    
    t.xi.forEach(function(id){
      var p=getP(t,id); if(!p) return;
      p.apps++; p.stamina=Math.max(0,p.stamina-STAMINA_COST+ri(-4,4));
      if(p.injury>0) return;
      
      var injChance=(state.godMode&&isMyTeam)?0:0.10;
      if(p.stamina<25) injChance+=0.10;
      if(hasSpecial(p,'ironman')) injChance*=0.5;
      if(p.balance<60) injChance+=0.03;
      injChance -= (stLevel * 0.015); 
      if(injChance < 0.01) injChance = 0.01; 
      
      if(Math.random()<injChance){
        var roll=Math.random(); var severity;
        if(roll<0.005) severity='acl'; else if(roll<0.025) severity='patah'; else if(roll<0.10) severity='sedang'; else severity='ringan';
        var inj=injuryDurationWeeks(severity);
        var durationReduction = 1 - (stLevel * 0.10);
        if(durationReduction < 0.3) durationReduction = 0.3;
        p.injury = Math.max(1, Math.round(inj.weeks * durationReduction));
        p.injuryName=inj.name + (stLevel >= 4 ? ' (Dirawat Medis Canggih)' : '');
        p.injurySeverity=inj.severity; p.stamina=Math.min(p.stamina,40);
        if(inj.severity==='acl'){ state.news.unshift({t:'ALERT: '+p.name+' alami '+inj.name+'! Absen '+injuryLabel(p.injury),time:'Musim '+state.season}); }
      }
    });
  });
  computeMatchRatings(home,ctx.hg,ctx.ag,ctx.events,ctx.hg>ctx.ag?mvp:null);
  computeMatchRatings(away,ctx.ag,ctx.hg,ctx.events,ctx.ag>ctx.hg?mvp:null);
}

// Stub functions untuk dipanggil nanti
function pickMVP(team){var xi=team.xi.map(function(id){return getP(team,id);}).filter(Boolean);return xi.length?pick(xi):null;}
function computeMatchRatings(team,gf,ga,events,mvp){team.xi.forEach(function(id){var p=getP(team,id);if(!p) return;var r=6.0;events.forEach(function(e){if(e.type==='goal'&&e.scorerId===id) r+=1.5;if(e.type==='goal'&&e.assistId===id) r+=1.0;});if(p.pos==='GK'&&ga===0) r+=1.5;if(p.pos==='DEF'&&ga===0) r+=0.8;if(p.pos==='FWD'&&gf>=3) r+=0.3;if(mvp&&mvp.id===id) r+=0.5;if(hasSpecial(p,'clutch')&&events.some(function(e){return e.min>45;})) r+=0.5;if(hasSpecial(p,'biggame')&&(state.pialaNasional||state.ligaChampions)) r+=0.4;r+=rnd(-0.4,0.4);r=Math.max(1,Math.min(10,r));if(!p.ratings)p.ratings=[];p.ratings.push(Math.round(r*10)/10);if(p.ratings.length>60)p.ratings=p.ratings.slice(-60);p.avgRating=p.ratings.reduce(function(a,b){return a+b;},0)/p.ratings.length;});}
var INJURY_TYPES=[{name:'Memar kaki',minW:1,maxW:2,severity:'ringan'},{name:'Cedera engkel',minW:1,maxW:4,severity:'ringan'},{name:'Cedera hamstring',minW:1,maxW:4,severity:'ringan'},{name:'Cedera otot',minW:2,maxW:4,severity:'ringan'},{name:'Cedera paha',minW:4,maxW:8,severity:'sedang'},{name:'Cedera bahu',minW:4,maxW:10,severity:'sedang'},{name:'Cedera kepala',minW:2,maxW:6,severity:'sedang'},{name:'Patah tulang ringan',minW:1,maxW:24,severity:'patah'},{name:'Patah tulang kaki',minW:6,maxW:24,severity:'patah'},{name:'Patah tulang tangan',minW:4,maxW:20,severity:'patah'},{name:'Cedera ACL',minW:24,maxW:96,severity:'acl'},{name:'Cedera ACL dan Meniskus',minW:32,maxW:96,severity:'acl'},{name:'Ruptur Ligamen',minW:24,maxW:80,severity:'acl'}];
function injuryDurationWeeks(severity){var pool=INJURY_TYPES.filter(function(t){return t.severity===severity;});if(!pool.length) pool=INJURY_TYPES;var t=pick(pool);return {name:t.name,weeks:ri(t.minW,t.maxW),severity:t.severity};}
function injuryLabel(weeks){if(weeks>=48) return Math.floor(weeks/48)+' tahun';if(weeks>=4) return Math.floor(weeks/4)+' bulan';return weeks+' pekan';}
var WEATHERS=[{name:'Cerah',icon:'\u2600',goal:1.00},{name:'Berawan',icon:'\u26C5',goal:1.00},{name:'Hujan',icon:'\uD83C\uDF27',goal:0.85},{name:'Panas',icon:'\uD83D\uDD25',goal:0.90},{name:'Berkabut',icon:'\uD83C\uDF2B',goal:0.95}];
function rollWeather(){return pick(WEATHERS);}
var TEAM_TALKS=[{id:'marah',label:'Marah',desc:'Agresif',atk:0.18,def:-0.10},{id:'tenang',label:'Tenang',desc:'Bertahan',atk:-0.08,def:0.15},{id:'motivasi',label:'Motivasi',desc:'Seimbang',atk:0.10,def:0.10},{id:'diam',label:'Diam',desc:'Bisu',atk:0,def:0}];

// ==========================================
// 7. RENDER DISPATCHER & NAVIGASI
// ==========================================
function render(){
  try{
    if(state.godMode && state.teams[state.myIdx]) state.teams[state.myIdx].budget=1e18;
    var app=document.getElementById('app');
    if(!app) return;

    if(state.view==='select'){ app.innerHTML=renderSelect(); }
    else {
      var my=state.teams[state.myIdx];
      if(!my){ state.view='select'; render(); return; }
      
      if(state.settingsOpen){ if(typeof stopPitchAnim==='function')stopPitchAnim(); app.innerHTML=renderSettings(); }
      else if(state.view==='main'){ if(typeof stopPitchAnim==='function')stopPitchAnim(); app.innerHTML=renderMain(); }
      else if(state.view==='match'){ app.innerHTML=renderMatch(); setTimeout(function(){ if(typeof initPitchAnim==='function') initPitchAnim(); }, 100); }
      else if(state.view==='seasonEnd'){ if(typeof stopPitchAnim==='function')stopPitchAnim(); app.innerHTML=renderSeasonEnd(); }
    }
    
    if(state.view!=='select') scheduleSave();
  }catch(err){
    var app=document.getElementById('app');
    if(app) app.innerHTML='<div class="card" style="color:#e63946;padding:20px;">ERROR UI: '+err.message+'</div>';
  }
}

function renderMain(){
  var my=state.teams[state.myIdx];
  ensureValidStartingXI();
  
  var win=getTransferWindowLabel();
  var headerCard='<div class="card" style="padding:14px">'+
    '<div style="display:flex;align-items:center;gap:12px">'+
    '<div style="width:44px;height:44px;border-radius:12px;background:'+my.color+';display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#fff;flex-shrink:0">'+my.name[0]+'</div>'+
    '<div style="flex:1;min-width:0">'+
    '<div style="font-size:15px;font-weight:800;color:#e8f0ec;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+my.name+'</div>'+
    '<div style="font-size:10px;color:#8bb59f;margin-top:3px">Div '+my.div+' | Musim '+state.season+' | Pekan '+Math.min(state.round+1,TOTAL_ROUNDS)+'</div>'+
    '</div></div>'+
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:12px">'+
    '<div style="background:rgba(255,215,0,.08);border:1px solid rgba(255,215,0,.15);padding:8px 10px;border-radius:10px">'+
    '<div style="font-size:9px;color:#7fae94">BUDGET</div>'+
    '<div style="font-size:13px;font-weight:800;color:#ffd700;margin-top:2px">'+formatIDR(my.budget)+'</div></div>'+
    '<div style="background:rgba(168,230,193,.08);border:1px solid rgba(168,230,193,.15);padding:8px 10px;border-radius:10px">'+
    '<div style="font-size:9px;color:#7fae94">PEMAIN</div>'+
    '<div style="font-size:13px;font-weight:800;color:#a8e6c1;margin-top:2px">'+my.players.length+'</div></div></div>'+
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;padding-top:10px;border-top:1px solid rgba(255,255,255,.05)">'+
    '<div style="display:flex;gap:6px;align-items:center">'+
    '<span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:'+win.color+'"></span>'+
    '<span style="font-size:10px;color:'+win.color+';font-weight:700">'+(win.open?'BURSA BUKA':'BURSA TUTUP')+'</span></div>'+
    '<span style="font-size:9px;color:#7fae94">'+getMatchDate()+'</span></div></div>';
  
  var content='';
  try{
    if(state.mainTab==='beranda') content=renderBeranda();
    else if(state.mainTab==='tim'){
      if(state.subTab==='squad') content=renderSquad();
      else if(state.subTab==='akademi') content=renderAkademi();
      else if(state.subTab==='latihan') content=renderLatihan();
      else if(state.subTab==='taktik') content=renderTaktik();
    }
    else if(state.mainTab==='bisnis'){
      if(state.subTab==='transfer') content=renderTransfer();
      else if(state.subTab==='offers') content=renderOffers();
      else if(state.subTab==='freeagent') content=renderFreeAgent();
      else if(state.subTab==='sponsor') content=renderSponsor();
      else if(state.subTab==='toko') content=renderToko();
      else if(state.subTab==='stadion') content=renderStadion();
    }
    else if(state.mainTab==='kompetisi'){
      if(state.subTab==='klasemen') content=renderTable();
      else if(state.subTab==='lca') content=renderLCA('lca');
      else if(state.subTab==='lca2') content=renderLCA('lca2');
      else if(state.subTab==='bestxi') content=renderBestXI();
      else if(state.subTab==='piala') content=renderPiala();
      else if(state.subTab==='statistik') content=renderStats();
      else if(state.subTab==='legenda') content=renderLegenda();
      else if(state.subTab==='riwayat') content=renderRiwayat();
      else if(state.subTab==='berita') content=renderBerita();
    }
  }catch(err){content='<div class="card" style="color:#e63946">Error UI: '+(err.message||err)+'</div>';}
  return headerCard+renderSubTabs()+content+renderBottomNav();
}

function getSubTabs(mainTab){
  if(mainTab==='tim') return [{id:'squad',label:'Skuad'},{id:'akademi',label:'Akademi'},{id:'latihan',label:'Latihan'},{id:'taktik',label:'Taktik'}];
  if(mainTab==='bisnis') return [{id:'transfer',label:'Transfer'},{id:'offers',label:'Tawaran'},{id:'freeagent',label:'Free Agent'},{id:'sponsor',label:'Sponsor'},{id:'toko',label:'Toko'},{id:'stadion',label:'Stadion'}];
  if(mainTab==='kompetisi') return [{id:'klasemen',label:'Klasemen'},{id:'lca',label:'Champions'},{id:'lca2',label:'LCA 2'},{id:'bestxi',label:'Best XI'},{id:'piala',label:'Piala'},{id:'statistik',label:'Statistik'},{id:'legenda',label:'Legenda'},{id:'riwayat',label:'Riwayat'},{id:'berita',label:'Berita'}];
  return [];
}
function renderSubTabs(){
  var subs=getSubTabs(state.mainTab);
  if(!subs.length) return '';
  return '<div class="subtabs">'+subs.map(function(s){
    return '<button class="subtab '+(state.subTab===s.id?'active':'')+'" onclick="setSubTab(\''+s.id+'\')">'+s.label+'</button>';
  }).join('')+'</div>';
}
function renderBottomNav(){
  var tabs=[{id:'beranda',label:'Beranda',ic:'\uD83C\uDFE0'},{id:'tim',label:'Tim',ic:'\uD83D\uDC65'},{id:'bisnis',label:'Bisnis',ic:'\uD83D\uDCBC'},{id:'kompetisi',label:'Kompetisi',ic:'\uD83C\uDFC6'}];
  return '<div class="bottom-nav">'+tabs.map(function(t){
    return '<button class="bnav-btn '+(state.mainTab===t.id?'active':'')+'" onclick="setMainTab(\''+t.id+'\')">'+
      '<span class="ic">'+t.ic+'</span><span>'+t.label+'</span></button>';
  }).join('')+'</div>';
}
function setMainTab(t){
  state.mainTab=t;
  if(t==='tim') state.subTab='squad';
  else if(t==='bisnis') state.subTab='transfer';
  else if(t==='kompetisi') state.subTab='klasemen';
  state.selectedStarter=null; render();
}
function setSubTab(s){state.subTab=s;state.selectedStarter=null;render();}
function setTableDiv(d){state.tableDiv=d;render();}

// ==========================================
// 8. BERANDA & KALENDER
// ==========================================
function renderBeranda(){
  var my=state.teams[state.myIdx];
  var t1=getTable(state.myDiv);
  var pos=-1; for(var i=0;i<t1.length;i++){if(t1[i].idx===state.myIdx){pos=i+1;break;}}
  
  var isMatchDay = (state.dayInWeek >= 7);
  var mainButton = '';
  
  if (isMatchDay) {
    if (typeof isXIValid === 'function' && isXIValid()) {
        mainButton = '<button class="btn primary" onclick="playRound()" style="width:100%;margin-bottom:10px;padding:15px;font-size:16px;box-shadow:0 4px 15px rgba(46,204,113,0.4);">⚽ MAIN PERTANDINGAN</button>';
    } else {
        mainButton = '<button class="btn" disabled style="width:100%;margin-bottom:10px;padding:15px;font-size:14px;background:#3a1d20;color:#ff8f96;border:1px solid #e63946;">⚠️ STARTING XI BELUM VALID (Butuh 11 Pemain & 1 Kiper)</button>';
    }
  } else {
    var daysLeft = 7 - state.dayInWeek;
    var nextDays = daysLeft < 2 ? daysLeft : 2;
    mainButton = '<button class="btn" onclick="advanceDay()" style="width:100%;margin-bottom:10px;padding:15px;font-size:16px;background:#2c3e50;color:#fff;border:1px solid #34495e;">⏩ LANJUT (' + nextDays + ' Hari)</button>';
  }

  var cards = '<div class="card" style="text-align:center;background:linear-gradient(100deg,#1b3a2c,#12261d);border-color:#2ecc71;">'+
    '<h3 style="margin-bottom:5px;color:#a8e6c1;">Pekan '+(state.round+1)+' - Hari Ke-'+state.dayInWeek+'</h3>'+
    '<div style="font-size:11px;color:#8bb59f;margin-bottom:15px;">'+(isMatchDay ? 'Hari Pertandingan Telah Tiba!' : 'Bursa transfer & latihan masih berjalan...')+'</div>'+
    mainButton + '</div>';

  cards+='<div class="card" style="background:linear-gradient(100deg,#1b3a2c,#12261d)">'+
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">'+
    '<div><div style="font-size:10px;color:#8bb59f">POSISI</div><div style="font-size:22px;font-weight:900;color:#a8e6c1">#'+pos+'</div></div>'+
    '<div><div style="font-size:10px;color:#8bb59f">TROFI</div><div style="font-size:22px;font-weight:900;color:#ffd700">'+(state.trophyRoom?state.trophyRoom.length:0)+'</div></div>'+
    '</div></div>';

  // Peringatan Kontrak Habis
  var expiringPlayers = my.players.filter(p => p.contractYears === 1);
  if (expiringPlayers.length > 0) {
    cards += '<div class="card" style="border-left:4px solid #e67e22; background:#2a1a0a;">'+
      '<h3 style="color:#e67e22; margin-top:0;">⚠️ Kontrak Segera Habis</h3>'+
      '<p style="font-size:11px; color:#ffd700; margin-bottom:10px;">Ada <b>' + expiringPlayers.length + ' pemain</b> yang kontraknya habis akhir musim ini. Segera perpanjang!</p>'+
      '<div style="display:flex; gap:5px; flex-wrap:wrap;">'+
        expiringPlayers.slice(0, 3).map(p => '<span style="background:#131e19; padding:4px 8px; border-radius:5px; font-size:10px; color:#e8f0ec; border:1px solid #e67e22;">' + p.name + '</span>').join('')+
        (expiringPlayers.length > 3 ? '<span style="padding:4px 8px; font-size:10px; color:#8bb59f;">+' + (expiringPlayers.length - 3) + ' lainnya</span>' : '')+
      '</div></div>';
  }

  // Berita Bubble Chat
  var news3 = (state.news || []).slice(0, 3);
  if (news3.length) {
    cards += '<div class="card"><h3 style="margin-bottom:15px;">Berita Terbaru</h3>';
    news3.forEach(function(n) {
      var isInjury = n.t.includes('ALERT') || n.t.includes('Cedera') || n.t.includes('Kalah');
      var isHeal = n.t.includes('Sembuh') || n.t.includes('Menang');
      var isMoney = n.t.includes('Dana') || n.t.includes('Sponsor') || n.t.includes('Bonus') || n.t.includes('Tiket') || n.t.includes('Kontroversi');
      
      var bgColor = isInjury ? 'rgba(230, 57, 70, 0.15)' : (isHeal ? 'rgba(46, 204, 113, 0.15)' : (isMoney ? 'rgba(255, 215, 0, 0.15)' : 'rgba(69, 123, 157, 0.15)'));
      var borderColor = isInjury ? '#e63946' : (isHeal ? '#2ecc71' : (isMoney ? '#ffd700' : '#457b9d'));
      var textColor = isInjury ? '#ff8f96' : (isHeal ? '#a8e6c1' : (isMoney ? '#ffd700' : '#e8f0ec'));
      var icon = isInjury ? '🚑' : (isHeal ? '✅' : (isMoney ? '💰' : '📰'));
      
      var cleanText = n.t.replace('ALERT: ', '');

      cards += '<div style="background: '+bgColor+'; border: 1px solid '+borderColor+'; border-left: 4px solid '+borderColor+'; border-radius: 0px 16px 16px 16px; padding: 12px 14px; margin-bottom: 10px; font-size: 12px; color: '+textColor+'; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; align-items: flex-start; gap: 8px;">'+
        '<span style="font-size: 16px; line-height: 1;">'+icon+'</span>'+
        '<div style="flex: 1; line-height: 1.4;">'+cleanText+'</div>'+
      '</div>';
    });
    cards += '</div>';
  }
  return cards;
}

function advanceDay(){
  var daysLeft=7-state.dayInWeek;var add=daysLeft<2?daysLeft:2;state.dayInWeek+=add;
  var my = state.teams[state.myIdx];
  var stLevel = (my.stadium && my.stadium.level) ? my.stadium.level : 1;
  var dailyRecRate = 5 + (stLevel * 2); // Base 5% + (Level x 2%)
  
  my.players.forEach(function(p){
    if(p.stamina < 100 && p.injury === 0) p.stamina = Math.min(100, p.stamina + dailyRecRate);
  });
  toast('Waktu berlalu '+add+' hari.');render();saveGame();
}

// ==========================================
// 9. SKUAD & MODAL PEMAIN
// ==========================================
function renderSquad(){
  var my=state.teams[state.myIdx];
  var starters=my.xi.map(function(id){return getP(my,id);}).filter(Boolean);
  var nonXI=my.players.filter(function(p){return my.xi.indexOf(p.id)===-1;});
  var bench=nonXI.slice().sort(function(a,b){return b.rating-a.rating;}).slice(0,10);
  var benchIds=bench.map(function(p){return p.id;});
  var reserves=nonXI.filter(function(p){return benchIds.indexOf(p.id)===-1;});
  
  var rowHTML=function(p,kind){
    var inj=p.injury>0?'<span class="inj-badge">CEDERA '+p.injury+'p</span>':'';
    var susp=(p.suspension&&p.suspension>0)?'<span class="inj-badge" style="background:#8b0000">SKOR '+p.suspension+'p</span>':'';
    var spec=p.specialSkill?'<span class="special-icon" style="font-size:11px">'+p.specialSkill.icon+'</span>':'';
    
    // Label Bintang & Butuh Main
    var starBadge = '';
    if ((p.mvp || 0) >= 3 || p.rating >= 88) starBadge = '<span style="color:#ffd700; font-size:12px; margin-left:4px;" title="Key Player / MVP">⭐</span>';
    var lackMinutes = '';
    if (kind !== 'starter' && (p.apps || 0) < 5 && state.round > 5 && p.injury === 0) lackMinutes = '<span class="inj-badge" style="background:#e67e22; color:#000;">BUTUH MAIN</span>';

    var onclickAttr=kind==='starter'?'selectStarter('+p.id+')':(kind==='bench'?'swapWith('+p.id+')':'selectReserve('+p.id+')');
    var isSel=state.selectedStarter===p.id;
    
    var posColor = p.pos==='GK'?'#5e60ce':p.pos==='DEF'?'#2a9d8f':p.pos==='MID'?'#e9c46a':'#e63946';
    var textColor = p.pos==='MID'?'#04160c':'#fff';

    return '<tr class="'+(isSel?'mine':'')+'" onclick="'+onclickAttr+'" style="cursor:pointer">'+
      '<td style="padding:5px 3px;width:32px;text-align:center;">'+
        '<div class="squad-pos" style="background:'+posColor+';color:'+textColor+'; width:26px; height:26px; line-height:26px; font-size:9px;">'+p.specificPos+'</div>'+
      '</td>'+
      '<td style="padding:5px 3px;max-width:110px"><div style="font-weight:600;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+p.name+spec+starBadge+'</div>'+
      '<div style="font-size:8px;color:#7fae94;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+inj+susp+lackMinutes+'</div></td>'+
      '<td class="num" style="padding:5px 2px;font-size:9px;color:#8bb59f">'+formatIDRShort(p.weeklyWage||0)+'</td>'+
      '<td class="num" style="padding:5px 2px;font-size:9px;color:#8bb59f">'+p.age+'</td>'+
      '<td class="num" style="padding:5px 2px;font-size:9px;color:#e9c46a">'+formatIDRShort(marketValue(p))+'</td>'+
      '<td class="num" style="padding:5px 3px;white-space:nowrap"><b style="color:#a8e6c1;font-size:11px">'+p.rating+'</b>'+
      '<button onclick="event.stopPropagation();showPlayerDetail('+p.id+')" style="background:#2f5442;border:none;color:#a8e6c1;font-size:10px;font-weight:800;width:22px;height:22px;border-radius:6px;margin-left:4px;cursor:pointer;padding:0;font-family:inherit;vertical-align:middle">i</button></td></tr>';
  };
  
  var tblH='<tr style="border-bottom:2px solid #2f5442;background:#0f1a15">'+
    '<th style="padding:5px 3px;text-align:center;">POS</th><th style="padding:5px 3px;font-size:9px">PEMAIN</th>'+
    '<th class="num" style="padding:5px 2px;font-size:9px">GAJI</th>'+
    '<th class="num" style="padding:5px 2px;font-size:9px">USIA</th>'+
    '<th class="num" style="padding:5px 2px;font-size:9px">NILAI</th>'+
    '<th class="num" style="padding:5px 3px;font-size:9px">OVR</th></tr>';
    
  return '<div class="card" style="padding:0; overflow:hidden;">'+
    '<div style="padding:10px 14px;border-bottom:1px solid #24382e;display:flex;justify-content:space-between;align-items:center;">'+
      '<div style="font-size:12px;font-weight:800;color:#a8e6c1">PEMAIN ('+my.players.length+')</div>'+
      '<div style="display:flex;gap:8px;align-items:center;">'+
        '<button class="btn small primary" onclick="autoLineup()">⚡ Auto XI</button>'+
      '</div>'+
    '</div>'+
    '<div class="scroll-box" style="max-height:55vh;"><table style="font-size:11px;width:100%">'+tblH+
    '<tr style="background:#0f1a15"><td colspan="6" style="font-size:10px;color:#2ecc71;font-weight:800;padding:6px 10px; position:sticky; top:0; z-index:1">STARTING XI ('+starters.length+'/11)</td></tr>'+
    starters.map(function(p){return rowHTML(p,'starter');}).join('')+
    '<tr style="background:#0f1a15"><td colspan="6" style="font-size:10px;color:#e9c46a;font-weight:800;padding:6px 10px; position:sticky; top:0; z-index:1">CADANGAN ('+bench.length+'/10)</td></tr>'+
    bench.map(function(p){return rowHTML(p,'bench');}).join('')+
    (reserves.length?'<tr style="background:#0f1a15"><td colspan="6" style="font-size:10px;color:#7fae94;font-weight:800;padding:6px 10px; position:sticky; top:0; z-index:1">RESERVES ('+reserves.length+')</td></tr>'+
    reserves.map(function(p){return rowHTML(p,'reserve');}).join(''):'')+
    '</table></div></div>';
}

function selectStarter(id){state.selectedStarter=state.selectedStarter===id?null:id;render();}
function selectReserve(id){showPlayerDetail(id);}
function swapWith(benchId){
  if(state.selectedStarter===null){toast('Pilih pemain inti dulu');return;}
  var my=state.teams[state.myIdx];
  var newP=getP(my,benchId);
  if(newP&&newP.injury>0){toast('Cedera '+newP.injury+' pekan');return;}
  var i=my.xi.indexOf(state.selectedStarter);
  var backup=my.xi[i]; my.xi[i]=benchId;
  if(!checkXI(my)){my.xi[i]=backup;toast('Formasi invalid!');return;}
  state.selectedStarter=null; render();
}

function showPlayerDetail(pid){
  var p=null;
  for(var i=0;i<state.teams.length;i++){var found=getP(state.teams[i],pid);if(found){p=found;break;}}
  if(!p) return;
  var my=state.teams[state.myIdx]; var isMine=my.players.indexOf(p)!==-1;
  
  var oldModal = document.getElementById('createModal'); if(oldModal) oldModal.remove();
  var modal=document.createElement('div'); modal.id='createModal';
  
  var skills=(p.skills||[]).map(function(s){return '<span style="display:inline-block;background:#182720;padding:3px 7px;border-radius:5px;font-size:10px;margin:2px;border:1px solid #2f5442">'+s.name+'</span>';}).join('');
  var stats = p.stats || {shooting: 50, passing: 50, dribbling: 50, defending: 50, physical: 50, speed: 50};
  
  var statsHTML = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;font-size:10px;margin-top:10px;">'+
    '<div style="background:#16241d;padding:5px;border-radius:4px;">Tembakan: <b style="color:#a8e6c1;float:right;">'+stats.shooting+'</b></div>'+
    '<div style="background:#16241d;padding:5px;border-radius:4px;">Umpan: <b style="color:#a8e6c1;float:right;">'+stats.passing+'</b></div>'+
    '<div style="background:#16241d;padding:5px;border-radius:4px;">Dribel: <b style="color:#a8e6c1;float:right;">'+stats.dribbling+'</b></div>'+
    '<div style="background:#16241d;padding:5px;border-radius:4px;">Bertahan: <b style="color:#a8e6c1;float:right;">'+stats.defending+'</b></div>'+
    '<div style="background:#16241d;padding:5px;border-radius:4px;">Fisik: <b style="color:#a8e6c1;float:right;">'+stats.physical+'</b></div>'+
    '<div style="background:#16241d;padding:5px;border-radius:4px;">Kecepatan: <b style="color:#a8e6c1;float:right;">'+stats.speed+'</b></div>'+
  '</div>';

  var contractBtn = '';
  var sellReleaseBtn = '';
  
  if(isMine) {
    var cost = Math.round(marketValue(p) * 0.2);
    var sellPrice = Math.round(marketValue(p) * 0.8); 
    
    contractBtn = '<button onclick="extendContract('+p.id+','+cost+'); document.getElementById(\'createModal\').remove();" style="width:100%;margin-bottom:10px;padding:12px;border-radius:8px;background:#3498db;color:#fff;font-weight:bold;border:none;cursor:pointer;font-size:12px;">Perpanjang Kontrak (+3 Thn) - '+formatIDRShort(cost)+'</button>';
    
    sellReleaseBtn = '<div style="display:flex; gap:8px; margin-bottom:10px;">' +
      '<button onclick="sellPlayer('+p.id+','+sellPrice+')" style="flex:1;padding:12px;border-radius:8px;background:#f1c40f;color:#000;font-weight:bold;border:none;cursor:pointer;font-size:12px;">💰 Jual ('+formatIDRShort(sellPrice)+')</button>' +
      '<button onclick="releasePlayer('+p.id+')" style="flex:1;padding:12px;border-radius:8px;background:#e63946;color:#fff;font-weight:bold;border:none;cursor:pointer;font-size:12px;">🗑️ Lepas</button>' +
    '</div>';
  }

  modal.innerHTML = '<div class="inner">'+
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:15px;">'+
      '<div style="width:44px;height:44px;border-radius:50%;background:'+nameColor(p.name)+';display:flex;align-items:center;justify-content:center;font-weight:bold;color:white;font-size:16px;">'+nameInitials(p.name)+'</div>'+
      '<div style="flex:1;">'+
        '<h2 style="margin:0;font-size:16px;color:#a8e6c1;">'+p.name+'</h2>'+
        '<div style="font-size:11px;color:#8bb59f;">'+p.specificPos+' - '+p.age+' thn - OVR <b style="color:#a8e6c1">'+p.rating+'</b></div>'+
      '</div></div>'+
    '<div style="background:#16241d;padding:12px;border-radius:8px;font-size:11px;line-height:1.8;color:#a8e6c1;margin-bottom:15px;">'+
      '<div style="display:flex;justify-content:space-between;margin-bottom:5px;"><span><b>Gol:</b> '+p.seasonGoals+'</span><span><b>Asis:</b> '+p.assists+'</span></div>'+
      '<div style="display:flex;justify-content:space-between;margin-bottom:5px;"><span><b>Kontrak:</b> '+(p.contractYears||0)+' Thn</span><span><b>Gaji:</b> '+formatIDRShort(p.weeklyWage||0)+'/pkn</span></div>'+
      '<div style="border-top:1px solid #24382e;padding-top:5px;margin-top:5px;text-align:center;"><b>Nilai Pasar:</b> <span style="color:#ffd700">'+formatIDR(marketValue(p))+'</span></div>'+
    '</div>'+
    '<h4 style="margin-top:10px;font-size:12px;color:#7fae94;margin-bottom:6px;">Atribut & Keahlian</h4>'+
    statsHTML +
    '<div style="margin-top:10px;margin-bottom:15px;">'+(skills||'<span style="font-size:11px;color:#8bb59f;">-</span>')+'</div>'+
    contractBtn + sellReleaseBtn +
    (isMine?'<button onclick="document.getElementById(\'createModal\').remove(); toggleStarter('+p.id+');" style="width:100%;margin-bottom:10px;padding:12px;border-radius:8px;background:'+(my.xi.indexOf(p.id)!==-1?'#e63946':'#2ecc71')+';color:'+(my.xi.indexOf(p.id)!==-1?'#fff':'#04160c')+';font-weight:bold;border:none;cursor:pointer;font-size:12px;">'+(my.xi.indexOf(p.id)!==-1?'Keluarkan dari Starting XI':'Masukkan ke Starting XI')+'</button>':'')+
    '<button onclick="document.getElementById(\'createModal\').remove()" style="width:100%;padding:12px;border-radius:8px;background:transparent;color:#8bb59f;border:1px solid #24382e;font-weight:bold;cursor:pointer;font-size:12px;">Tutup</button>'+
  '</div>';
  document.body.appendChild(modal);
}

function extendContract(id, cost) { var my = state.teams[state.myIdx]; var p = getP(my, id); if(!p) return; if(my.budget < cost) return toast("Uang tidak cukup!"); my.budget -= cost; p.contractYears += 3; p.weeklyWage = Math.round(p.weeklyWage * 1.1); toast(p.name + " perpanjang 3 tahun!"); saveGame(); render(); }
function toggleStarter(pid){var my=state.teams[state.myIdx];var idx=my.xi.indexOf(pid);if(idx!==-1)my.xi.splice(idx,1);render();}
function sellPlayer(pid, price) { if(!confirm("Jual pemain ini seharga " + formatIDR(price) + "?")) return; var my = state.teams[state.myIdx]; var p = getP(my, pid); if(!p) return; var aiTeams = state.teams.filter((t, i) => i !== state.myIdx && t.div !== 3); var buyer = aiTeams[Math.floor(Math.random() * aiTeams.length)]; my.budget += price; my.players = my.players.filter(x => x.id !== pid); my.xi = my.xi.filter(x => x !== pid); p.contractYears = 3; buyer.players.push(p); toast("Terjual ke " + buyer.name + " seharga " + formatIDR(price)); document.getElementById('createModal').remove(); render(); saveGame(); }
function releasePlayer(pid) { if(!confirm("Lepas pemain ini secara GRATIS? (Akan menjadi Free Agent)")) return; var my = state.teams[state.myIdx]; var p = getP(my, pid); if(!p) return; my.players = my.players.filter(x => x.id !== pid); my.xi = my.xi.filter(x => x !== pid); p.contractYears = 0; if(!state.freeAgents) state.freeAgents = []; state.freeAgents.push(p); toast(p.name + " dilepas menjadi Free Agent."); document.getElementById('createModal').remove(); render(); saveGame(); }

// ==========================================
// 10. FITUR BISNIS: TRANSFER & TAWARAN
// ==========================================
function renderTransfer(){
  var famousPlayers = ["Lionel Messi","Cristiano Ronaldo","Kylian Mbappe","Erling Haaland","Neymar Jr","Kevin De Bruyne","Luka Modric","Robert Lewandowski","Mohamed Salah","Sadio Mane","Virgil van Dijk","Alisson Becker","Thibaut Courtois","Vinicius Jr","Rodri","Jude Bellingham","Harry Kane","Bruno Fernandes","Son Heung-min","Takefusa Kubo","Egy Maulana Vikri","Witan Sulaeman","Pratama Arhan","Marselino Ferdinan","Rizky Ridho","Fachruddin Aryanto","Nadeo Argawinata","Ragnar Oratmangoen","Rafael Struick","Thom Haye","Jay Idzes","Sandy Walsh","Jordi Amat","Saddil Ramdani","Ricky Kambuaya","Dendy Sulistyawan","Dimas Drajad"];
  var clubOrigins = ["Real Madrid","Barcelona","Man City","Man Utd","Liverpool","Arsenal","Bayern Munchen","PSG","Juventus","AC Milan","Inter Milan","Chelsea","Tottenham","Borussia Dortmund","Ajax","Benfica","Porto","Al Hilal","Al Nassr","Persija Jakarta","Persib Bandung","Persebaya","Arema FC","Bali United","PSM Makassar","Borneo FC"];

  if(!state.marketPlayers || state.marketPlayers.length === 0) {
      state.marketPlayers = [];
      var positions = ['GK', 'DEF', 'MID', 'FWD'];
      var specificPos = {GK:['GK'],DEF:['CB','RB','LB','LWB','RWB'],MID:['RMF','LMF','CMF','DMF','AMF'],FWD:['SS','CF']};
      for (let i = 0; i < 1000; i++) {
          let pos = positions[i % 4]; 
          let sp = pick(specificPos[pos]); 
          let rating = ri(65, 89); 
          var pName = i < famousPlayers.length ? famousPlayers[i] : generateIndonesianName();
          var origin = pick(clubOrigins);
          state.marketPlayers.push({id: 500000 + i, name: pName, pos: pos, specificPos: sp, age: ri(18, 33), rating: rating, originClub: origin, seasonGoals: 0, apps: 0, assists: 0, mvp: 0, contractYears: 3, weeklyWage: Math.round((rating - 40) * 1.5e6)});
      }
  }

  var my = state.teams[state.myIdx];
  var html = '<div class="card" style="padding:10px; overflow:hidden;"><h2>Pasar Transfer</h2>';
  if(!state.transferFilter) state.transferFilter = 'SEMUA';
  var filters = ['SEMUA', 'GK', 'DEF', 'MID', 'FWD'];
  html += '<div style="display:flex;gap:5px;overflow-x:auto;margin-bottom:10px;padding-bottom:5px;">';
  filters.forEach(f => { html += '<button class="btn small '+(state.transferFilter===f?'primary':'')+'" onclick="state.transferFilter=\''+f+'\';render()">'+f+'</button>'; });
  html += '</div>';

  var targets = [];
  state.teams.forEach(function(t, i){ 
      if(i === state.myIdx) return; 
      t.players.forEach(function(p){ if(t.xi.indexOf(p.id) === -1) targets.push({p:p, t:t.name, i:i}); }); 
      if (t.academy) t.academy.forEach(function(p) { targets.push({p:p, t:t.name + ' Youth', i:i}); });
  });
  if(state.marketPlayers) { state.marketPlayers.forEach(function(p) { targets.push({p:p, t:p.originClub || 'Pasar Bebas', i: -1}); }); }
  
  if(state.transferFilter !== 'SEMUA') { targets = targets.filter(x => x.p.pos === state.transferFilter); }
  targets.sort((a,b) => b.p.rating - a.p.rating);
  
  html += '<div style="font-size:11px;color:#8bb59f;margin-bottom:10px;">Total Tersedia: <b>'+targets.length+'</b> pemain (Klik untuk menawar)</div>';
  html += '<div class="scroll-box" style="max-height: 55vh; overflow-x: auto; padding-right:5px;"><table style="width:100%; min-width: 350px; table-layout: fixed;"><tr><th style="width: 40%;">Nama</th><th style="width: 25%;">Klub</th><th class="num" style="width: 10%;">OVR</th><th class="num" style="width: 25%;">Harga</th></tr>';
  
  targets.slice(0, 100).forEach(function(x){
      var price = marketValue(x.p) * (x.i === -1 ? 1.2 : 1.0); 
      var clubName = x.t; var clubColor = '#3498db';
      if(clubName.includes('Youth')) clubColor = '#ffd700';

      html += '<tr onclick="openBidModal('+x.p.id+','+price+','+x.i+')" style="cursor:pointer; border-bottom:1px solid #1b2a22;">'+
        '<td style="padding: 8px 2px;"><div style="font-weight:bold; font-size:11px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">'+x.p.name+'</div><div style="font-size:9px;color:#8bb59f;">'+x.p.specificPos+' - '+x.p.age+'thn</div></td>'+
        '<td style="font-size:10px; padding: 8px 2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; color:'+clubColor+'; font-weight:'+(clubName.includes('Youth')?'bold':'normal')+';">'+clubName+'</td>'+
        '<td class="num" style="color:#a8e6c1;font-weight:bold; font-size:11px; padding: 8px 2px;">'+x.p.rating+'</td>'+
        '<td class="num" style="color:#e9c46a; font-size:10px; padding: 8px 2px; text-align:right;">'+formatIDRShort(price)+'</td>'+
      '</tr>';
  });
  return html + '</table></div></div>';
}

function openBidModal(id, askingPrice, sellerIdx) {
  var p = (sellerIdx === -1) ? state.marketPlayers.find(x => x.id === id) : getP(state.teams[sellerIdx], id);
  if(!p && sellerIdx !== -1) {
      // Cek di akademi AI
      p = state.teams[sellerIdx].academy.find(x => x.id === id);
  }
  if(!p) return;

  var my = state.teams[state.myIdx];
  var baseChance = 30; 
  if(p.rating >= 85) baseChance -= 15; else if(p.rating >= 80) baseChance -= 10; else if(p.rating >= 75) baseChance -= 5;
  var streak = state.teamRecords.currentStreak || 0;
  if(streak >= 5) baseChance += 15; else if(streak >= 3) baseChance += 10; else if(streak >= 1) baseChance += 5;
  var t1 = getTable(state.myDiv); var pos = -1; for(var i=0; i<t1.length; i++){ if(t1[i].idx === state.myIdx){ pos = i+1; break; } }
  if(pos === 1) baseChance += 20; else if(pos <= 3) baseChance += 15; else if(pos <= 6) baseChance += 5;
  if(baseChance > 80) baseChance = 80; if(baseChance < 5) baseChance = 5;

  var oldModal = document.getElementById('createModal'); if(oldModal) oldModal.remove();
  var modal=document.createElement('div'); modal.id='createModal';
  
  modal.innerHTML = '<div class="inner">'+
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:15px;">'+
      '<div style="width:44px;height:44px;border-radius:50%;background:'+nameColor(p.name)+';display:flex;align-items:center;justify-content:center;font-weight:bold;color:white;font-size:16px;">'+nameInitials(p.name)+'</div>'+
      '<div style="flex:1;"><h2 style="margin:0;font-size:16px;color:#a8e6c1;">'+p.name+'</h2><div style="font-size:11px;color:#8bb59f;">'+p.specificPos+' - '+p.age+' thn - OVR <b style="color:#a8e6c1">'+p.rating+'</b></div></div></div>'+
    '<div style="background:#16241d;padding:12px;border-radius:8px;font-size:11px;line-height:1.8;color:#a8e6c1;margin-bottom:15px;">'+
      '<div style="display:flex;justify-content:space-between;margin-bottom:5px;"><span><b>Klub Asal:</b></span><span style="color:#3498db;">'+(sellerIdx===-1 ? p.originClub : state.teams[sellerIdx].name + (state.teams[sellerIdx].academy.includes(p) ? ' Youth' : ''))+'</span></div>'+
      '<div style="display:flex;justify-content:space-between;margin-bottom:5px;"><span><b>Harga Pasar:</b></span><span style="color:#ffd700;">'+formatIDR(askingPrice)+'</span></div>'+
      '<div style="display:flex;justify-content:space-between;"><span><b>Peluang Dasar (Tim):</b></span><span style="color:'+(baseChance>=50?'#2ecc71':'#e63946')+'; font-weight:bold;">'+baseChance+'%</span></div>'+
    '</div>'+
    '<div id="bidMessage" style="display:none; padding:10px; margin-bottom:15px; border-radius:8px; font-size:11px; text-align:center; font-weight:bold;"></div>'+
    '<label style="font-size:11px; color:#7fae94; margin-bottom:5px; display:block;">Nominal Tawaran (Rp)</label>'+
    '<input id="bidInput" type="number" value="'+askingPrice+'" style="width:100%; padding:12px; background:#182720; border:1px solid #2f5442; border-radius:8px; color:#ffd700; font-size:16px; font-weight:bold; margin-bottom:5px;">'+
    '<div style="font-size:9px; color:#e9c46a; margin-bottom:15px; text-align:center;">💡 Tawarkan hingga 3x lipat harga pasar untuk mode Sultan (Peluang 99%)</div>'+
    '<div class="row">'+
      '<button class="btn" onclick="document.getElementById(\'createModal\').remove()">Batal</button>'+
      '<button id="btnSubmitBid" class="btn primary" style="flex:1" onclick="submitBid('+p.id+','+sellerIdx+','+askingPrice+','+baseChance+')">Ajukan Tawaran</button>'+
    '</div></div>';
  document.body.appendChild(modal);
}

function submitBid(id, sellerIdx, askingPrice, baseChance) {
  var bidAmount = parseInt(document.getElementById('bidInput').value);
  var my = state.teams[state.myIdx];
  var msgBox = document.getElementById('bidMessage');
  var btnSubmit = document.getElementById('btnSubmitBid');
  
  if(isNaN(bidAmount) || bidAmount <= 0) return toast("Masukkan nominal yang valid!");
  if(my.budget < bidAmount) return toast("Uang Anda tidak cukup untuk menawar sebesar itu!");

  var ratio = bidAmount / askingPrice; var bidBonus = 0;
  if(ratio >= 3.0) bidBonus = 69; else if(ratio >= 2.0) bidBonus = 40; else if(ratio >= 1.5) bidBonus = 25; else if(ratio >= 1.2) bidBonus = 15; else if(ratio >= 1.0) bidBonus = 5; else bidBonus = -15;

  var finalChance = baseChance + bidBonus;
  if(finalChance > 99) finalChance = 99; if(finalChance < 5) finalChance = 5;

  var roll = Math.random() * 100;
  var isSuccess = (roll <= finalChance);

  if(isSuccess) {
      msgBox.style.display = 'block'; msgBox.style.background = 'rgba(46,204,113,0.15)'; msgBox.style.color = '#2ecc71'; msgBox.style.border = '1px solid #2ecc71';
      msgBox.innerHTML = "✅ TAWARAN DITERIMA!<br>Klub dan pemain tidak bisa menolak uang Anda.";
      btnSubmit.disabled = true; btnSubmit.innerText = "Berhasil!";
      setTimeout(function() { processTransfer(id, sellerIdx, bidAmount); document.getElementById('createModal').remove(); }, 1500); 
  } else {
      msgBox.style.display = 'block'; msgBox.style.background = 'rgba(230,57,70,0.15)'; msgBox.style.color = '#ff8f96'; msgBox.style.border = '1px solid #e63946';
      if(ratio >= 2.0) msgBox.innerHTML = "❌ DITOLAK!<br>Klub rival membayar lebih tinggi. Naikkan tawaran Anda (Mode Sultan)!";
      else msgBox.innerHTML = "❌ DITOLAK!<br>Klub rival (Real Madrid/Man City) membajak pemain ini. Coba tawar lebih tinggi!";
      var inputEl = document.getElementById('bidInput'); inputEl.style.borderColor = '#e63946'; setTimeout(function() { inputEl.style.borderColor = '#2f5442'; }, 500);
  }
}

function processTransfer(id, sellerIdx, price) {
  var my = state.teams[state.myIdx];
  if (sellerIdx === -1) {
      var idx = state.marketPlayers.findIndex(p => p.id === id); if(idx === -1) return;
      var p = state.marketPlayers[idx]; my.budget -= price; my.players.push(p); state.marketPlayers.splice(idx, 1);
      toast("Berhasil membeli " + p.name + " dari pasar bebas!");
  } else {
      var seller = state.teams[sellerIdx]; var p2 = getP(seller, id);
      if (!p2 && seller.academy) { p2 = seller.academy.find(x => x.id === id); if (p2) seller.academy = seller.academy.filter(x => x.id !== id); }
      else if (p2) { seller.players = seller.players.filter(x => x.id !== id); seller.xi = seller.xi.filter(x => x !== id); autoPickXI(seller, seller.formation); }
      if (!p2) return toast("Pemain tidak ditemukan.");
      my.budget -= price; seller.budget += price; my.players.push(p2); toast("Berhasil membeli " + p2.name + " dari " + seller.name + "!");
  }
  render(); saveGame();
}

function renderOffers() {
  var my = state.teams[state.myIdx]; if(!state.incomingOffers) state.incomingOffers = [];
  var html = '<div class="card" style="overflow:hidden;"><h2>Tawaran Masuk</h2>';
  if(state.incomingOffers.length === 0) html += '<div class="empty">Belum ada klub yang menawar pemain Anda.</div>';
  else {
    html += '<div class="scroll-box" style="max-height: 55vh;">';
    state.incomingOffers.forEach(function(offer) {
      var p = getP(my, offer.playerId); var bidder = state.teams[offer.bidderIdx];
      if(!p) return;
      html += '<div style="background:#0f1a15; border:1px solid #24382e; border-radius:10px; padding:12px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">'+
        '<div><div style="font-size:13px; font-weight:bold; color:#e8f0ec;">'+p.name+'</div><div style="font-size:10px; color:#8bb59f; margin-top:2px;">Dari: <b style="color:#3498db;">'+bidder.name+'</b></div><div style="font-size:12px; color:#ffd700; font-weight:bold; margin-top:5px;">'+formatIDR(offer.amount)+'</div></div>'+
        '<button class="btn primary small" onclick="openOfferModal('+offer.id+')">Tinjau</button></div>';
    });
    html += '</div>';
  }
  return html + '</div>';
}

function openOfferModal(offerId) {
  var offer = state.incomingOffers.find(o => o.id === offerId); if(!offer) return;
  var my = state.teams[state.myIdx]; var p = getP(my, offer.playerId); var bidder = state.teams[offer.bidderIdx]; if(!p) return;
  var mv = marketValue(p);
  
  var oldModal = document.getElementById('createModal'); if(oldModal) oldModal.remove();
  var modal = document.createElement('div'); modal.id = 'createModal';
  
  modal.innerHTML = '<div class="inner">'+
    '<h2 style="color:#ffd700">Tawaran Transfer</h2><div class="sub">Klub ingin membeli pemain Anda</div>'+
    '<div style="background:#16241d; padding:15px; border-radius:10px; margin-bottom:15px; font-size:12px; line-height:1.8;">'+
      '<div style="display:flex; justify-content:space-between;"><span>Pemain:</span> <b style="color:#a8e6c1">'+p.name+'</b></div>'+
      '<div style="display:flex; justify-content:space-between;"><span>Rating:</span> <b>'+p.rating+'</b></div>'+
      '<div style="display:flex; justify-content:space-between;"><span>Klub Penawar:</span> <b style="color:#3498db">'+bidder.name+'</b></div>'+
      '<div style="display:flex; justify-content:space-between; border-top:1px solid #24382e; padding-top:5px; margin-top:5px;"><span>Harga Pasar:</span> <b style="color:#ffd700">'+formatIDR(mv)+'</b></div>'+
      '<div style="display:flex; justify-content:space-between;"><span>Tawaran Masuk:</span> <b style="color:#2ecc71; font-size:14px;">'+formatIDR(offer.amount)+'</b></div>'+
    '</div>'+
    '<label style="font-size:11px; color:#7fae94; margin-bottom:5px; display:block;">Tawar Balik (Negosiasi)</label>'+
    '<input id="counterInput" type="number" value="'+Math.round(offer.amount * 1.2)+'" style="width:100%; padding:12px; background:#182720; border:1px solid #2f5442; border-radius:8px; color:#ffd700; font-size:16px; font-weight:bold; margin-bottom:15px;">'+
    '<div style="font-size:9px; color:#e9c46a; margin-bottom:15px; text-align:center;">💡 Minta terlalu tinggi (di atas 1.5x) bisa membuat klub membatalkan tawaran.</div>'+
    '<div class="row">'+
      '<button class="btn danger" style="flex:1" onclick="processOffer('+offer.id+', \'reject\')">Tolak</button>'+
      '<button class="btn" style="flex:1; background:#3498db; color:white;" onclick="processOffer('+offer.id+', \'counter\')">Tawar Balik</button>'+
      '<button class="btn primary" style="flex:1" onclick="processOffer('+offer.id+', \'accept\')">Terima</button>'+
    '</div></div>';
  document.body.appendChild(modal);
}

function processOffer(offerId, action) {
  var offerIdx = state.incomingOffers.findIndex(o => o.id === offerId); if(offerIdx === -1) return;
  var offer = state.incomingOffers[offerIdx]; var my = state.teams[state.myIdx]; var p = getP(my, offer.playerId); var bidder = state.teams[offer.bidderIdx]; if(!p) return;
  document.getElementById('createModal').remove();

  if(action === 'reject') { state.incomingOffers.splice(offerIdx, 1); toast("Tawaran ditolak."); render(); saveGame(); return; }

  if(action === 'accept') {
    if(bidder.budget < offer.amount) { state.incomingOffers.splice(offerIdx, 1); alert("Transfer Gagal: " + bidder.name + " tidak memiliki cukup dana!"); render(); saveGame(); return; }
    my.budget += offer.amount; bidder.budget -= offer.amount; my.players = my.players.filter(x => x.id !== p.id); my.xi = my.xi.filter(x => x !== p.id); bidder.players.push(p);
    state.incomingOffers.splice(offerIdx, 1);
    state.news.unshift({t: "💰 " + p.name + " resmi dijual ke " + bidder.name + " seharga " + formatIDR(offer.amount), time: "Pekan " + (state.round+1)});
    toast("Berhasil dijual seharga " + formatIDR(offer.amount)); render(); saveGame(); return;
  }

  if(action === 'counter') {
    var counterAmount = parseInt(document.getElementById('counterInput').value); if(isNaN(counterAmount) || counterAmount <= 0) return;
    if(counterAmount > bidder.budget) { state.incomingOffers.splice(offerIdx, 1); alert("Negosiasi Gagal: " + bidder.name + " tidak memiliki dana sebesar itu."); render(); saveGame(); return; }
    var maxWilling = offer.amount * 1.5;
    if(counterAmount > maxWilling) {
      state.incomingOffers.splice(offerIdx, 1); state.news.unshift({t: "❌ " + bidder.name + " membatalkan tawaran untuk " + p.name + " karena harga terlalu tinggi.", time: "Pekan " + (state.round+1)});
      alert(bidder.name + " menolak tawaran balik Anda dan membatalkan negosiasi.");
    } else {
      my.budget += counterAmount; bidder.budget -= counterAmount; my.players = my.players.filter(x => x.id !== p.id); my.xi = my.xi.filter(x => x !== p.id); bidder.players.push(p);
      state.incomingOffers.splice(offerIdx, 1); state.news.unshift({t: "🤝 Negosiasi Sukses! " + p.name + " dijual ke " + bidder.name + " seharga " + formatIDR(counterAmount), time: "Pekan " + (state.round+1)});
      alert("Negosiasi Berhasil! " + bidder.name + " setuju membeli dengan harga " + formatIDR(counterAmount));
    }
    render(); saveGame();
  }
}

// ==========================================
// 11. FITUR BISNIS: FREE AGENT, SPONSOR, TOKO, STADION
// ==========================================
function renderFreeAgent(){
  var my = state.teams[state.myIdx];
  if(!state.freeAgents || !state.freeAgents.length){ state.freeAgents = []; for(var i=0; i<10; i++) state.freeAgents.push({id: 90000+i, name: generateIndonesianName(), specificPos: pick(['DEF','MID','FWD']), pos: pick(['DEF','MID','FWD']), rating: ri(60, 75), age: ri(20, 32), seasonGoals:0, apps:0, assists:0, mvp:0, contractYears: 2}); }
  var html = '<div class="card" style="overflow:hidden;"><h2>Free Agent</h2>';
  html += '<div class="scroll-box" style="max-height: 55vh;"><table style="width:100%; border-collapse:collapse;"><tr><th>Nama</th><th>Pos</th><th class="num">OVR</th><th></th></tr>';
  state.freeAgents.forEach(function(p){ html += '<tr style="border-bottom:1px solid #1b2a22;"><td style="padding:8px 4px;"><b>'+p.name+'</b></td><td style="padding:8px 4px;">'+p.specificPos+'</td><td class="num" style="color:#a8e6c1; padding:8px 4px;">'+p.rating+'</td><td style="padding:8px 4px;"><button class="btn small primary" onclick="signFreeAgent('+p.id+')">Rekrut</button></td></tr>'; });
  return html + '</table></div></div>';
}
function signFreeAgent(id){ var my = state.teams[state.myIdx]; var idx = state.freeAgents.findIndex(x => x.id === id); if(idx === -1) return; var p = state.freeAgents[idx]; p.id = PID++; my.players.push(p); state.freeAgents.splice(idx, 1); toast(p.name + " bergabung!"); render(); saveGame(); }

function renderSponsor(){
  var my = state.teams[state.myIdx];
  if(!state.sponsorOffers) state.sponsorOffers = [];
  if(state.sponsorOffers.length === 0) {
      var teamRating = avg(my.players.map(p=>p.rating)); var rep = state.managerReputation || 50;
      var baseValue = Math.max(10e9, (teamRating - 50) * 10e9) * (1 + (rep/100));
      var sponsorNames = ['Bank Nusantara', 'Telkomsel', 'Indomie', 'GoTo', 'BCA', 'Pertamina', 'Garuda', 'Astra'];
      for(var i=0; i<3; i++) state.sponsorOffers.push({id: Date.now() + i, name: pick(sponsorNames), value: Math.round(baseValue * rnd(0.8, 1.5) / 1e9) * 1e9, duration: ri(2, 5), color: pick(['#1a3a8f', '#e63946', '#2ecc71', '#f4a261'])});
  }
  var html = '<div class="card"><h2>Sponsor</h2>';
  if(state.sponsors && state.sponsors.length > 0) {
      html += '<h3 style="margin-top:15px; color:#2ecc71;">Sponsor Aktif</h3>';
      state.sponsors.forEach(function(s){ var sisa = s.endSeason - state.season + 1; html += '<div style="background:#16241d;padding:10px;margin-bottom:8px;border-radius:8px;border-left:4px solid '+s.color+'"><div style="display:flex;justify-content:space-between;"><b style="color:'+s.color+'">'+s.name+'</b><span style="font-size:11px;color:#ffd700;font-weight:bold;">'+formatIDR(s.value)+'/thn</span></div><span style="font-size:10px;color:#8bb59f;">Sisa Kontrak: ' + sisa + ' Tahun</span></div>'; });
  }
  html += '<h3 style="margin-top:15px;">Tawaran Masuk</h3>';
  if(state.sponsorOffers.length === 0) html += '<div class="empty">Belum ada tawaran sponsor.</div>';
  else { state.sponsorOffers.forEach(function(s){ html += '<div style="background:#0f1a15;border-left:4px solid '+s.color+';padding:12px;margin-bottom:8px;border-radius:8px;display:flex;justify-content:space-between;align-items:center"><div><b style="color:'+s.color+'">'+s.name+'</b><br><span style="font-size:11px;color:#8bb59f">'+formatIDR(s.value)+'/tahun ('+s.duration+' Thn)</span></div><button class="btn primary small" onclick="acceptSponsor('+s.id+')">TTD</button></div>'; }); }
  return html + '</div>';
}
function acceptSponsor(id){ var my = state.teams[state.myIdx]; var idx = state.sponsorOffers.findIndex(x => x.id === id); if(idx === -1) return; var s = state.sponsorOffers[idx]; s.startSeason = state.season; s.endSeason = state.season + s.duration - 1; if(!state.sponsors) state.sponsors = []; state.sponsors.push(s); my.budget += s.value; state.sponsorOffers.splice(idx, 1); toast("Kontrak " + s.name + " disetujui! +" + formatIDR(s.value)); render(); saveGame(); }

function renderToko(){
  var my = state.teams[state.myIdx]; 
  var items = [
    { id: 'medkit', name: 'Kit Medis', price: 100e9, desc: 'Menyembuhkan SEMUA pemain yang cedera.', icon: '🚑', color: '#e63946' },
    { id: 'booster', name: 'Booster Pemain', price: 50e9, desc: '+2 Rating OVR untuk 1 pemain pilihan.', icon: '💪', color: '#3498db' },
    { id: 'upgrade_facility', name: 'Pusat Latihan Elite', price: 500e9, desc: '+1 Rating OVR untuk SEMUA pemain di tim.', icon: '🏋️', color: '#ffd700' },
    { id: 'morale', name: 'Konser Suporter', price: 20e9, desc: '+20 Mood Suporter (Fan Mood).', icon: '🎸', color: '#2ecc71' }
  ];
  var html = '<div class="card" style="padding:15px; overflow:hidden;"><h2>Toko Klub</h2><p style="font-size:11px; color:#8bb59f; margin-bottom:15px;">Budget Anda: <b style="color:#ffd700;">'+formatIDR(my.budget)+'</b></p>';
  html += '<div class="scroll-box" style="max-height: 55vh; display:flex; flex-direction:column; gap:10px;">';
  items.forEach(function(item) {
      var afford = my.budget >= item.price;
      var btnClass = afford ? 'primary' : ''; var btnStyle = afford ? '' : 'opacity:0.5; cursor:not-allowed;';
      html += '<div style="background:#0f1a15; border:1px solid #24382e; border-left:4px solid '+item.color+'; border-radius:10px; padding:12px; display:flex; justify-content:space-between; align-items:center;">'+
        '<div style="flex:1;"><div style="font-size:13px; font-weight:bold; color:#e8f0ec; display:flex; align-items:center; gap:6px;"><span style="font-size:18px;">'+item.icon+'</span> '+item.name+'</div>'+
          '<div style="font-size:10px; color:#8bb59f; margin-top:4px;">'+item.desc+'</div>'+
          '<div style="font-size:12px; color:#ffd700; font-weight:bold; margin-top:6px;">'+formatIDR(item.price)+'</div></div>'+
        '<button class="btn small '+btnClass+'" style="'+btnStyle+'" onclick="buyItem(\''+item.id+'\', '+item.price+')">Beli</button></div>';
  });
  return html + '</div></div>';
}
function buyItem(itemId, price){
  var my = state.teams[state.myIdx]; if(my.budget < price) return toast("Uang tidak cukup!");
  if(itemId === 'medkit') {
      var injuredCount = 0; my.players.forEach(function(p) { if(p.injury > 0) { p.injury = 0; p.injuryName = ''; p.injurySeverity = ''; injuredCount++; } });
      if(injuredCount === 0) return toast("Tidak ada pemain yang cedera.");
      my.budget -= price; toast("Berhasil menyembuhkan " + injuredCount + " pemain!");
  } else if(itemId === 'upgrade_facility') {
      my.budget -= price; my.players.forEach(function(p) { p.rating = Math.min(110, p.rating + 1); }); toast("Pusat Latihan di-upgrade! SEMUA pemain +1 OVR.");
  } else if(itemId === 'morale') {
      my.budget -= price; state.fanMood = Math.min(100, (state.fanMood || 50) + 20); toast("Konser suporter sukses! Mood +20.");
  } else if(itemId === 'booster') {
      openBoosterTargetModal(price); return; 
  }
  render(); saveGame();
}
function openBoosterTargetModal(price) {
  var my = state.teams[state.myIdx];
  var oldModal = document.getElementById('createModal'); if(oldModal) oldModal.remove();
  var modal=document.createElement('div'); modal.id='createModal';
  var html = '<div class="inner"><h2 style="color:#3498db">💪 Booster Pemain</h2><div class="sub">Pilih 1 pemain untuk dinaikkan +2 OVR</div><div class="scroll-box" style="max-height: 50vh;">';
  my.players.sort((a,b) => b.rating - a.rating).forEach(function(p) {
      html += '<div style="background:#182720; border:1px solid #24382e; padding:10px; border-radius:8px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center; cursor:pointer;" onclick="applyBooster('+p.id+', '+price+')">'+
        '<div><div style="font-weight:bold; font-size:12px; color:#e8f0ec;">'+p.name+'</div><div style="font-size:10px; color:#8bb59f;">'+p.specificPos+' - OVR '+p.rating+'</div></div>'+
        '<div style="font-size:14px; font-weight:bold; color:#3498db;">+2 OVR</div></div>';
  });
  html += '</div><button class="btn" style="width:100%; margin-top:10px;" onclick="document.getElementById(\'createModal\').remove()">Batal</button></div>';
  modal.innerHTML = html; document.body.appendChild(modal);
}
function applyBooster(pid, price) {
  var my = state.teams[state.myIdx]; if(my.budget < price) return toast("Uang tidak cukup!");
  var p = getP(my, pid); if(!p) return;
  my.budget -= price; p.rating = Math.min(110, p.rating + 2);
  toast(p.name + " berhasil di-boost! Rating menjadi " + p.rating); document.getElementById('createModal').remove(); render(); saveGame();
}

function renderStadion(){
  var my = state.teams[state.myIdx]; 
  if(!my.stadium) my.stadium = {level:1, cap:10000};
  var lvl = my.stadium.level || 1; var cap = my.stadium.cap || 10000;
  var maxCap = 150000; var maxLvl = 6;
  var myRating = avg(my.players.map(p => p.rating));
  var basePrice = Math.round((50000 + (myRating * 1000)) * (myRating / 100) / 10000) * 10000;
  var multiplier = 1.0; var streak = state.teamRecords.currentStreak || 0;
  if(streak >= 5) multiplier += 0.25; else if(streak >= 3) multiplier += 0.15; else if(streak >= 1) multiplier += 0.05;
  var t1 = getTable(state.myDiv); var pos = -1; for(var i=0; i<t1.length; i++){ if(t1[i].idx === state.myIdx){ pos = i+1; break; } }
  if(pos === 1) multiplier += 0.40; else if(pos <= 3) multiplier += 0.25; else if(pos <= 6) multiplier += 0.10;
  if(multiplier > 1.8) multiplier = 1.8;
  var estPrice = Math.round((basePrice * multiplier) / 10000) * 10000;
  var priceColor = multiplier >= 1.4 ? '#2ecc71' : (multiplier > 1.0 ? '#e9c46a' : '#8bb59f');
  var statusText = multiplier >= 1.4 ? '🔥 Euforia Suporter!' : (multiplier > 1.0 ? '📈 Performa Meningkat' : '📊 Harga Normal');
  var injuryReduction = lvl * 1.5; var healSpeed = lvl >= 5 ? 'Cepat (3 Pekan)' : lvl >= 3 ? 'Normal (2 Pekan)' : 'Lambat (1 Pekan)';

  var html = '<div class="card"><h2>Stadion & Fasilitas</h2><div style="background:#0f1a15;padding:20px;border-radius:12px;text-align:center;margin-bottom:15px;border:1px solid #24382e;">'+
      '<div style="font-size:40px;">🏟️</div><div style="font-size:16px;font-weight:bold;color:#a8e6c1">Level '+lvl+' / '+maxLvl+'</div>'+
      '<div style="font-size:12px;color:#8bb59f;margin-top:5px;">Kapasitas: '+cap.toLocaleString('id-ID')+' / '+maxCap.toLocaleString('id-ID')+'</div>'+
      '<div style="margin-top:15px; padding:10px; background:#16241d; border-radius:8px; border:1px dashed '+priceColor+';">'+
        '<div style="font-size:10px; color:#7fae94;">HARGA TIKET SAAT INI</div><div style="font-size:18px; font-weight:900; color:'+priceColor+';">' + formatIDR(estPrice) + '</div>'+
        '<div style="font-size:10px; color:'+priceColor+'; font-weight:bold; margin-top:3px;">' + statusText + ' (x' + multiplier.toFixed(2) + ')</div></div></div>';
  html += '<div style="background:#131e19; border:1px solid #3498db; padding:12px; border-radius:10px; margin-bottom:15px;">'+
    '<h3 style="color:#3498db; margin-top:0; font-size:12px;">🏥 Fasilitas Kesehatan & Latihan</h3><div style="font-size:11px; color:#e8f0ec; line-height:1.8;">'+
      '<div style="display:flex; justify-content:space-between;"><span>Mencegah Cedera:</span> <b style="color:#2ecc71;">-'+injuryReduction+'% Risiko</b></div>'+
      '<div style="display:flex; justify-content:space-between;"><span>Kecepatan Pulih Cedera:</span> <b style="color:#2ecc71;">'+healSpeed+'</b></div>'+
      '<div style="display:flex; justify-content:space-between;"><span>Bonus Pemulihan Stamina:</span> <b style="color:#2ecc71;">+'+ (lvl * 2) +'% / Hari</b></div></div></div>';
  if(lvl < maxLvl && cap < maxCap){ 
    var cost = lvl * 100e9; var afford = my.budget >= cost; var nextCap = cap + 20000; 
    html += '<button class="btn primary" style="width:100%; padding:15px; font-size:14px;" '+(afford?'':'disabled')+' onclick="upgradeStadium('+cost+', '+nextCap+')">Upgrade Stadion (+20.000 Kursi) - '+formatIDRShort(cost)+'</button>';
  } else { html += '<div style="text-align:center; color:#ffd700; font-weight:bold; padding:10px;">🏆 Stadion Sudah Maksimal!</div>'; }
  return html + '</div>';
}
function upgradeStadium(cost, nextCap){ var my = state.teams[state.myIdx]; if(!my) return; if(!my.stadium) my.stadium = {level:1, cap:10000}; if(my.budget < cost) return toast("Uang tidak cukup!"); my.budget -= cost; my.stadium.level++; my.stadium.cap = nextCap; toast("Stadion di-upgrade! Kapasitas: " + my.stadium.cap.toLocaleString('id-ID')); render(); saveGame(); }

// ==========================================
// 12. AKADEMI, LATIHAN, TAKTIK
// ==========================================
function renderAkademi() {
  var my = state.teams[state.myIdx]; if(!my.academy) my.academy = [];
  var html = '<div class="card" style="padding:15px;"><div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;"><h2 style="margin:0;">Akademi Muda</h2><button class="btn primary small" onclick="scoutYouth()" style="border-radius:20px; padding:8px 12px; font-size:11px;">🔍 Scout (10M)</button></div>';
  if(my.academy.length === 0) html += '<div class="empty">Belum ada pemain di akademi. Klik tombol Scout untuk mencari bibit muda!</div>';
  else {
    html += '<div class="scroll-box" style="max-height: 55vh; display:flex; flex-direction:column; gap:10px; padding-right:5px;">';
    my.academy.sort((a,b) => (b.potential || 0) - (a.potential || 0));
    my.academy.forEach(function(p) {
      var pot = p.potential || 85; var progress = Math.round((p.rating / pot) * 100); if(progress > 100) progress = 100;
      var barColor = pot >= 90 ? '#ffd700' : pot >= 80 ? '#2ecc71' : '#3498db';
      var tierTag = '';
      if(p.tier === 'golden') tierTag = '<span style="background:rgba(255,215,0,0.2); color:#ffd700; padding:2px 6px; border-radius:4px; font-size:9px; font-weight:bold; margin-left:6px;">🌟 GOLDEN BOY</span>';
      else if(p.tier === 'elite') tierTag = '<span style="background:rgba(168,230,193,0.2); color:#a8e6c1; padding:2px 6px; border-radius:4px; font-size:9px; font-weight:bold; margin-left:6px;">💎 ISTIMEWA</span>';
      else if(p.tier === 'talented') tierTag = '<span style="background:rgba(233,196,106,0.2); color:#e9c46a; padding:2px 6px; border-radius:4px; font-size:9px; font-weight:bold; margin-left:6px;">✨ BERBAKAT</span>';
      var avatarColor = nameColor(p.name);

      html += '<div style="background:#16241d; border:1px solid #24382e; border-radius:12px; padding:12px; display:flex; align-items:center; gap:12px; box-shadow:0 2px 5px rgba(0,0,0,0.2);">'+
        '<div style="flex:1;"><div style="display:flex; align-items:center; margin-bottom:4px;">'+
            '<div style="width:28px; height:28px; border-radius:50%; background:'+avatarColor+'; display:flex; align-items:center; justify-content:center; font-weight:bold; color:white; font-size:11px; margin-right:8px;">'+nameInitials(p.name)+'</div>'+
            '<div style="font-weight:800; font-size:13px; color:#e8f0ec;">'+p.name+'</div>'+tierTag+'</div>'+
          '<div style="font-size:10px; color:#8bb59f; margin-bottom:8px; margin-left:36px;">'+ p.specificPos + ' &nbsp;&bull;&nbsp; ' + p.age + ' Tahun</div>'+
          '<div style="display:flex; align-items:center; gap:8px; margin-left:36px;"><div style="flex:1; height:6px; background:#24382e; border-radius:3px; overflow:hidden;"><div style="width:'+progress+'%; height:100%; background:'+barColor+'; border-radius:3px;"></div></div>'+
            '<span style="font-size:10px; color:'+barColor+'; font-weight:bold; min-width:45px; text-align:right;">'+p.rating+' / '+pot+'</span></div></div>'+
        '<div style="flex-shrink:0;">'+(p.age >= 15 ? '<button class="btn small primary" style="border-radius:20px; padding:8px 14px; font-size:11px; font-weight:bold; box-shadow:0 2px 8px rgba(46,204,113,0.3);" onclick="promoteYouth('+p.id+')">Promosi</button>' : '<span style="font-size:10px; color:#e63946; background:rgba(230,57,70,0.1); padding:5px 8px; border-radius:5px; font-weight:bold;">Min. 15th</span>')+'</div></div>';
    });
    html += '</div>';
  }
  return html + '</div>';
}
function promoteYouth(id) { var my = state.teams[state.myIdx]; var idx = my.academy.findIndex(p => p.id === id); if(idx !== -1) { my.players.push(my.academy[idx]); my.academy.splice(idx, 1); toast("Pemain dipromosikan!"); render(); saveGame(); } }
function scoutYouth() {
  var my = state.teams[state.myIdx]; var cost = 10e9; 
  if(my.budget < cost) return toast("Uang tidak cukup! Butuh Rp 10 M untuk scouting.");
  my.budget -= cost; var baseR = avg(my.players.map(p => p.rating)) || 70;
  var newYouth = makeYouth(baseR); if(!my.academy) my.academy = []; my.academy.push(newYouth);
  var tierMsg = newYouth.tier === 'golden' ? "🌟 GOLDEN BOY DITEMUKAN!" : newYouth.tier === 'elite' ? "💎 Pemain Istimewa Ditemukan!" : "Pemain muda baru ditemukan.";
  toast("Scouting berhasil: " + newYouth.name); state.news.unshift({t: "Scouting: " + newYouth.name + " (OVR " + newYouth.rating + "/POT " + newYouth.potential + ") - " + tierMsg, time: "Pekan " + (state.round+1)});
  render(); saveGame();
}

function renderLatihan() {
  var my = state.teams[state.myIdx]; var recRate = getStaminaRecoveryRate(); var stLevel = (my.stadium && my.stadium.level) ? my.stadium.level : 1;
  var html = '<div class="card" style="overflow:hidden;"><h2>Pusat Latihan</h2>'+
    '<div style="background:#1b3a28; border:1px solid #2ecc71; padding:10px; border-radius:8px; margin-bottom:15px; display:flex; justify-content:space-between; align-items:center;">'+
      '<div><div style="font-size:10px; color:#8bb59f;">PEMULIHAN STAMINA OTOMATIS</div><div style="font-size:16px; font-weight:bold; color:#2ecc71;">+' + recRate + '% / Pertandingan</div></div>'+
      '<div style="text-align:right;"><div style="font-size:10px; color:#8bb59f;">FASILITAS KLUB</div><div style="font-size:12px; font-weight:bold; color:#ffd700;">Level ' + stLevel + '</div></div></div>'+
    '<p style="font-size:11px;color:#8bb59f;margin-bottom:12px;">Pilih pemain untuk ditingkatkan ratingnya (+1).</p>';
  html += '<div class="scroll-box" style="max-height: 45vh;"><table style="width:100%; border-collapse:collapse;"><tr><th>Nama</th><th>Pos</th><th class="num">OVR</th><th></th></tr>';
  my.players.forEach(function(p) { html += '<tr style="border-bottom:1px solid #1b2a22;"><td style="padding:8px 4px; font-size:11px;">'+p.name+'<br><div style="font-size:9px; color:#8bb59f;">Stamina: '+Math.round(p.stamina)+'%</div></td><td style="padding:8px 4px;">'+p.specificPos+'</td><td class="num" style="color:#a8e6c1; padding:8px 4px;">'+p.rating+'</td><td style="padding:8px 4px;"><button class="btn small primary" onclick="trainPlayer('+p.id+')">Latih</button></td></tr>'; });
  return html + '</table></div></div>';
}
function trainPlayer(id) { var my = state.teams[state.myIdx]; var p = getP(my, id); if(p) { if(p.rating >= 110) return toast("Rating maksimal (110)!"); p.rating++; toast(p.name + " naik rating menjadi " + p.rating + "!"); render(); saveGame(); } }

function renderTaktik() {
  var my = state.teams[state.myIdx]; var formation = my.formation || '4-3-3'; 
  if (!my.customFormationPos) my.customFormationPos = JSON.parse(JSON.stringify(FORMATION_POS[formation] || FORMATION_POS['4-3-3']));
  var posData = my.customFormationPos; var xiPlayers = my.xi.map(id => getP(my, id)).filter(Boolean); var slots = [];
  if(posData.GK) posData.GK.forEach((p, i) => slots.push({x: p[0], y: p[1], pos: 'GK', key: 'GK', idx: i}));
  if(posData.DEF) posData.DEF.forEach((p, i) => slots.push({x: p[0], y: p[1], pos: 'DEF', key: 'DEF', idx: i}));
  if(posData.MID) posData.MID.forEach((p, i) => slots.push({x: p[0], y: p[1], pos: 'MID', key: 'MID', idx: i}));
  if(posData.FWD) posData.FWD.forEach((p, i) => slots.push({x: p[0], y: p[1], pos: 'FWD', key: 'FWD', idx: i}));

  var playersSVG = '';
  for(var i=0; i<slots.length; i++) {
      var slot = slots[i]; var p = xiPlayers[i]; var px = slot.x; var py = slot.y;
      var color = slot.pos === 'GK' ? '#5e60ce' : slot.pos === 'DEF' ? '#2a9d8f' : slot.pos === 'MID' ? '#e9c46a' : '#e63946';
      var textColor = slot.pos === 'MID' ? '#04160c' : '#fff'; var nameText = p ? p.name.split(' ')[0] : 'Kosong'; var ovrText = p ? p.rating : '-';
      var isSel = state.selectedPitchPlayer === i ? 'stroke="#ffd700" stroke-width="1.5"' : 'stroke="#fff" stroke-width="0.5"';
      playersSVG += '<g transform="translate('+px+','+py+')" onclick="selectPitchPlayer('+i+')" style="cursor:pointer;"><circle r="4.5" fill="'+color+'" '+isSel+' /><text y="0.8" text-anchor="middle" font-size="2.5" fill="'+textColor+'" font-weight="bold">'+ovrText+'</text><text y="6" text-anchor="middle" font-size="2" fill="#fff" font-weight="bold">'+nameText+'</text></g>';
  }
  var html = '<div class="card"><h2>Taktik & Formasi</h2>';
  if (state.selectedPitchPlayer !== undefined && state.selectedPitchPlayer !== null) {
      html += '<div style="background:#1b2a22; border:1px solid #ffd700; border-radius:10px; padding:10px; margin-bottom:10px; text-align:center;">'+
        '<div style="font-size:11px; color:#ffd700; font-weight:bold; margin-bottom:10px;">Edit Posisi: ' + (xiPlayers[state.selectedPitchPlayer] ? xiPlayers[state.selectedPitchPlayer].name : 'Kosong') + '</div>'+
        '<div style="display:flex; justify-content:center; gap:5px;"><button class="btn small" onclick="movePitchPlayer(0, 2)">◀ Kiri</button><div style="display:flex; flex-direction:column; gap:5px;"><button class="btn small" onclick="movePitchPlayer(-2, 0)">▲ Atas</button><button class="btn small" onclick="movePitchPlayer(2, 0)">▼ Bawah</button></div><button class="btn small" onclick="movePitchPlayer(0, -2)">Kanan ▶</button></div>'+
        '<button class="btn small danger" style="margin-top:8px; width:100%;" onclick="resetPitchPlayer()">Reset Posisi</button></div>';
  }
  html += '<div style="background:#0f1a15; padding:15px; border-radius:12px; border:1px solid #24382e; margin-bottom:15px; text-align:center;"><h3 style="margin:0 0 10px 0; color:#a8e6c1;">'+formation+'</h3><svg viewBox="0 0 100 64" style="width:100%; border-radius:8px; background:#2d6b3a; display:block;"><rect width="100" height="64" fill="#2d6b3a"/><rect width="100" height="8" fill="#276334"/><rect y="16" width="100" height="8" fill="#276334"/><rect y="32" width="100" height="8" fill="#276334"/><rect y="48" width="100" height="8" fill="#276334"/><rect x="1" y="1" width="98" height="62" fill="none" stroke="#fff" stroke-width="0.35" opacity="0.4"/><line x1="50" y1="1" x2="50" y2="63" stroke="#fff" stroke-width="0.3" opacity="0.4"/><circle cx="50" cy="32" r="9" fill="none" stroke="#fff" stroke-width="0.3" opacity="0.4"/><rect x="1" y="14" width="16" height="36" fill="none" stroke="#fff" stroke-width="0.3" opacity="0.4"/><rect x="83" y="14" width="16" height="36" fill="none" stroke="#fff" stroke-width="0.3" opacity="0.4"/>'+playersSVG+'</svg></div>';
  html += '<h3>Ubah Formasi (Reset Kustom)</h3><div class="row">';
  Object.keys(FORMATIONS).forEach(function(f) { html += '<button class="btn '+(my.formation===f?'primary':'')+'" onclick="changeFormation(\''+f+'\')">'+f+'</button>'; });
  return html + '</div></div>';
}
function selectPitchPlayer(idx) { state.selectedPitchPlayer = idx; render(); }
function movePitchPlayer(dx, dy) {
  var my = state.teams[state.myIdx]; var posData = my.customFormationPos; var slots = [];
  if(posData.GK) posData.GK.forEach((p, i) => slots.push({key:'GK', idx:i})); if(posData.DEF) posData.DEF.forEach((p, i) => slots.push({key:'DEF', idx:i}));
  if(posData.MID) posData.MID.forEach((p, i) => slots.push({key:'MID', idx:i})); if(posData.FWD) posData.FWD.forEach((p, i) => slots.push({key:'FWD', idx:i}));
  var slotInfo = slots[state.selectedPitchPlayer]; if(!slotInfo) return;
  var arr = posData[slotInfo.key]; var pt = arr[slotInfo.idx];
  pt[0] = Math.max(2, Math.min(96, pt[0] + dx)); pt[1] = Math.max(4, Math.min(60, pt[1] + dy)); render();
}
function resetPitchPlayer() { var my = state.teams[state.myIdx]; var f = my.formation || '4-3-3'; my.customFormationPos = JSON.parse(JSON.stringify(FORMATION_POS[f] || FORMATION_POS['4-3-3'])); state.selectedPitchPlayer = null; toast("Posisi formasi di-reset ke default."); render(); saveGame(); }
function changeFormation(f) { var my = state.teams[state.myIdx]; my.formation = f; my.customFormationPos = JSON.parse(JSON.stringify(FORMATION_POS[f] || FORMATION_POS['4-3-3'])); state.selectedPitchPlayer = null; autoPickXI(my, f); render(); saveGame(); }

// ==========================================
// 13. KOMPETISI: KLASEMEN, STATISTIK, LEGENDA
// ==========================================
function getTable(div){
  var idxs=getDivIndices(div);var t=idxs.map(function(i){return {team:state.teams[i],idx:i,P:0,W:0,D:0,L:0,GF:0,GA:0,Pts:0};});
  var map={};t.forEach(function(r){map[r.idx]=r;});
  if(state.fixtures[div]) state.fixtures[div].forEach(function(rd){rd.forEach(function(f){if(!f.played)return;var h=map[f.home],a=map[f.away];if(!h||!a)return;h.P++;a.P++;h.GF+=f.hg;h.GA+=f.ag;a.GF+=f.ag;a.GA+=f.hg;if(f.hg>f.ag){h.W++;a.L++;h.Pts+=3;}else if(f.hg<f.ag){a.W++;h.L++;a.Pts+=3;}else{h.D++;a.D++;h.Pts++;a.Pts++;}});});
  t.sort(function(x,y){return y.Pts-x.Pts||(y.GF-y.GA)-(x.GF-x.GA);});return t;
}
function renderTable(){
  var div = state.tableDiv || state.myDiv || 1; var t = getTable(div);
  var toggle = '<div class="div-toggle"><button class="div-btn '+(div===1?'active':'')+'" onclick="setTableDiv(1)">Divisi 1</button><button class="div-btn '+(div===2?'active':'')+'" onclick="setTableDiv(2)">Divisi 2</button></div>';
  var html = '<div class="card" style="overflow:hidden;"><h2>Klasemen Divisi '+div+'</h2>' + toggle;
  html += '<div class="scroll-box" style="max-height: 55vh; overflow-x:hidden; width:100%;">';
  html += '<table style="width:100%; table-layout:fixed; font-size:10px; border-collapse:collapse;">';
  html += '<tr><th style="width:18px; padding:4px 1px; text-align:center;">#</th><th style="padding:4px 2px; text-align:left;">Klub</th><th style="width:20px; padding:4px 1px; text-align:center;" title="Main">M</th><th style="width:20px; padding:4px 1px; text-align:center;" title="Menang">W</th><th style="width:20px; padding:4px 1px; text-align:center;" title="Imbang">D</th><th style="width:20px; padding:4px 1px; text-align:center;" title="Kalah">L</th><th style="width:22px; padding:4px 1px; text-align:center;" title="Gol Masuk">GM</th><th style="width:22px; padding:4px 1px; text-align:center;" title="Gol Kemasukan">GK</th><th style="width:25px; padding:4px 1px; text-align:center;" title="Poin">Pts</th></tr>';
  t.forEach(function(r,i){
    var isMine = r.idx === state.myIdx; var rowStyle = '';
    if(div === 1 && i >= t.length - 3) rowStyle = 'background:rgba(230,57,70,0.1);'; 
    if(div === 2 && i < 3) rowStyle = 'background:rgba(46,204,113,0.1);'; 
    html += '<tr class="'+(isMine?'mine':'')+'" style="'+rowStyle+'"><td style="text-align:center; padding:4px 1px;">'+(i+1)+'</td><td style="font-size:10px; font-weight:bold; padding:4px 2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;"><span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:'+r.team.color+'; margin-right:3px;"></span>'+ r.team.name+'</td><td style="text-align:center; padding:4px 1px;">'+r.P+'</td><td style="text-align:center; padding:4px 1px; color:#2ecc71;">'+r.W+'</td><td style="text-align:center; padding:4px 1px; color:#e9c46a;">'+r.D+'</td><td style="text-align:center; padding:4px 1px; color:#e63946;">'+r.L+'</td><td style="text-align:center; padding:4px 1px;">'+r.GF+'</td><td style="text-align:center; padding:4px 1px;">'+r.GA+'</td><td style="text-align:center; font-weight:bold; color:#a8e6c1; padding:4px 1px;">'+r.Pts+'</td></tr>';
  });
  html += '</table></div></div>'; return html;
}

function renderBestXI(){
  var myDiv = state.myDiv; var divTeams = state.teams.filter(t => t.div === myDiv); var allPlayers = [];
  divTeams.forEach(t => { t.players.forEach(p => { if(p.apps >= 3) { var perfScore = ((p.avgRating || p.rating) * 10) + (p.seasonGoals * 2) + (p.assists * 1.5) + (p.mvp * 3); allPlayers.push({p: p, t: t, score: perfScore}); } }); });
  allPlayers.sort((a,b) => b.score - a.score);
  var bestXI = { GK: [], DEF: [], MID: [], FWD: [] };
  allPlayers.forEach(x => { var maxAllowed = (x.p.pos === 'GK') ? 1 : (x.p.pos === 'DEF') ? 4 : 3; if(bestXI[x.p.pos].length < maxAllowed) bestXI[x.p.pos].push(x); });
  var html = '<div class="card" style="overflow:hidden;"><h2>Best XI (Musim ' + state.season + ')</h2><p style="font-size:11px;color:#8bb59f;margin-bottom:15px;">Formasi 4-3-3. Dipilih berdasarkan performa rata-rata, gol, assist, dan MVP.</p>';
  var posNames = { GK: '🧤 Kiper', DEF: '🛡️ Bek', MID: '⚙️ Gelandang', FWD: '⚽ Penyerang' }; var posColors = { GK: '#9b59b6', DEF: '#3498db', MID: '#e9c46a', FWD: '#e63946' };
  ['GK', 'DEF', 'MID', 'FWD'].forEach(pos => {
    if (bestXI[pos].length > 0) {
      html += '<h3 style="color:'+posColors[pos]+'; margin-top:15px;">' + posNames[pos] + '</h3><table style="border-collapse:collapse; width:100%;"><tr><th>Pemain</th><th>Klub</th><th class="num">Rating</th><th class="num">G/A/MVP</th></tr>';
      bestXI[pos].forEach(x => { var isMine = x.t === state.teams[state.myIdx]; var ratingStr = x.p.avgRating ? x.p.avgRating.toFixed(2) : x.p.rating; html += '<tr class="'+(isMine?'mine':'')+'" style="border-bottom:1px solid #1b2a22;"><td style="padding:8px 4px;"><b>'+x.p.name+'</b></td><td style="font-size:9px; padding:8px 4px;">'+x.t.name.slice(0,10)+'</td><td class="num" style="color:#2ecc71;font-weight:bold; padding:8px 4px;">'+ratingStr+'</td><td class="num" style="font-size:10px; padding:8px 4px;">'+x.p.seasonGoals+'/'+x.p.assists+'/'+x.p.mvp+'</td></tr>'; });
      html += '</table>';
    }
  });
  if(allPlayers.length === 0) html += '<div class="empty">Belum ada cukup data pertandingan.</div>';
  return html + '</div>';
}

function renderStats(){
  var myDiv = state.myDiv; var divTeams = state.teams.filter(t => t.div === myDiv); var allPlayers = [];
  divTeams.forEach(t => { t.players.forEach(p => { allPlayers.push({p: p, t: t}); }); });
  var topScorersList = allPlayers.filter(x => x.p.seasonGoals > 0).sort((a,b) => b.p.seasonGoals - a.p.seasonGoals).slice(0, 5);
  var topAssistsList = allPlayers.filter(x => x.p.assists > 0).sort((a,b) => b.p.assists - a.p.assists).slice(0, 5);
  var topMVPList = allPlayers.filter(x => x.p.mvp > 0).sort((a,b) => b.p.mvp - a.p.mvp).slice(0, 5);
  var html = '<div class="card" style="overflow:hidden;"><h2>Statistik Liga Divisi ' + myDiv + '</h2><div class="scroll-box" style="max-height: 55vh;">';
  html += '<h3 style="color:#2ecc71;margin-top:15px;">⚽ Top Skor</h3>'; if(topScorersList.length === 0) html += '<div class="empty">Belum ada gol.</div>'; else { html += '<table style="width:100%; border-collapse:collapse;"><tr><th>Pemain</th><th>Klub</th><th class="num">Gol</th></tr>'; topScorersList.forEach(x => { html += '<tr class="'+(x.t === state.teams[state.myIdx]?'mine':'')+'" style="border-bottom:1px solid #1b2a22;"><td style="padding:8px 4px;">'+x.p.name+'</td><td style="font-size:9px; padding:8px 4px;">'+x.t.name.slice(0,10)+'</td><td class="num" style="color:#2ecc71;font-weight:bold; padding:8px 4px;">'+x.p.seasonGoals+'</td></tr>'; }); html += '</table>'; }
  html += '<h3 style="color:#3498db;margin-top:15px;">👟 Top Assist</h3>'; if(topAssistsList.length === 0) html += '<div class="empty">Belum ada assist.</div>'; else { html += '<table style="width:100%; border-collapse:collapse;"><tr><th>Pemain</th><th>Klub</th><th class="num">Assist</th></tr>'; topAssistsList.forEach(x => { html += '<tr class="'+(x.t === state.teams[state.myIdx]?'mine':'')+'" style="border-bottom:1px solid #1b2a22;"><td style="padding:8px 4px;">'+x.p.name+'</td><td style="font-size:9px; padding:8px 4px;">'+x.t.name.slice(0,10)+'</td><td class="num" style="color:#3498db;font-weight:bold; padding:8px 4px;">'+x.p.assists+'</td></tr>'; }); html += '</table>'; }
  html += '<h3 style="color:#ffd700;margin-top:15px;">⭐ Top MVP</h3>'; if(topMVPList.length === 0) html += '<div class="empty">Belum ada MVP.</div>'; else { html += '<table style="width:100%; border-collapse:collapse;"><tr><th>Pemain</th><th>Klub</th><th class="num">MVP</th></tr>'; topMVPList.forEach(x => { html += '<tr class="'+(x.t === state.teams[state.myIdx]?'mine':'')+'" style="border-bottom:1px solid #1b2a22;"><td style="padding:8px 4px;">'+x.p.name+'</td><td style="font-size:9px; padding:8px 4px;">'+x.t.name.slice(0,10)+'</td><td class="num" style="color:#ffd700;font-weight:bold; padding:8px 4px;">'+x.p.mvp+'</td></tr>'; }); html += '</table>'; }
  html += '</div></div>'; return html;
}

function renderLegenda(){
  if(!state.allTime) state.allTime = {scorers:{}, assisters:{}, mvp:{}, cs:{}, apps:{}};
  var playersMap = {};
  Object.values(state.allTime.scorers || {}).forEach(x => { if(!playersMap[x.name]) playersMap[x.name] = {name: x.name, goals:0, assists:0, mvp:0, apps:0, teams: new Set()}; playersMap[x.name].goals += x.val; (x.teams || []).forEach(t => playersMap[x.name].teams.add(t)); });
  Object.values(state.allTime.assisters || {}).forEach(x => { if(!playersMap[x.name]) playersMap[x.name] = {name: x.name, goals:0, assists:0, mvp:0, apps:0, teams: new Set()}; playersMap[x.name].assists += x.val; (x.teams || []).forEach(t => playersMap[x.name].teams.add(t)); });
  Object.values(state.allTime.mvp || {}).forEach(x => { if(!playersMap[x.name]) playersMap[x.name] = {name: x.name, goals:0, assists:0, mvp:0, apps:0, teams: new Set()}; playersMap[x.name].mvp += x.val; (x.teams || []).forEach(t => playersMap[x.name].teams.add(t)); });
  Object.values(state.allTime.apps || {}).forEach(x => { if(!playersMap[x.name]) playersMap[x.name] = {name: x.name, goals:0, assists:0, mvp:0, apps:0, teams: new Set()}; playersMap[x.name].apps += x.val; (x.teams || []).forEach(t => playersMap[x.name].teams.add(t)); });
  var legends = Object.values(playersMap).map(x => { x.score = Math.round((x.goals * 5) + (x.assists * 3) + (x.mvp * 8) + (x.apps * 0.5)); x.teamsStr = Array.from(x.teams).join(', '); return x; });
  legends.sort((a,b) => b.score - a.score);
  var html = '<div class="card" style="background:linear-gradient(140deg,#1a1408,#0f1a15);border-color:#ffd700; overflow:hidden;"><div style="text-align:center;margin-bottom:20px;"><div style="font-size:40px;">👑</div><h2 style="color:#ffd700;margin:10px 0;">Hall of Fame</h2><p style="font-size:11px;color:#8bb59f;">Daftar pemain terhebat sepanjang sejarah kompetisi (Skor GOAT).</p></div>';
  if(legends.length === 0) html += '<div class="empty">Belum ada legenda. Selesaikan musim pertama Anda!</div>';
  else {
      html += '<div class="scroll-box" style="max-height: 55vh;"><table style="width:100%; border-collapse:collapse;"><tr><th>#</th><th>Pemain</th><th class="num">Skor</th><th class="num">Gol</th><th class="num">Asis</th><th class="num">MVP</th></tr>';
      legends.slice(0, 20).forEach((x, i) => { var rankColor = i === 0 ? '#ffd700' : i === 1 ? '#c0c0c0' : i === 2 ? '#cd7f32' : '#7fae94'; var medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i+1); html += '<tr style="border-bottom:1px solid #1b2a22;"><td style="font-weight:bold;color:'+rankColor+'; padding:8px 4px;">'+medal+'</td><td style="padding:8px 4px;"><div style="font-weight:bold;color:#e8f0ec;font-size:12px;">'+x.name+'</div><div style="font-size:9px;color:#8bb59f;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:120px;">'+x.teamsStr+'</div></td><td class="num" style="font-weight:900;color:#ffd700; padding:8px 4px;">'+x.score+'</td><td class="num" style="color:#2ecc71; padding:8px 4px;">'+x.goals+'</td><td class="num" style="color:#3498db; padding:8px 4px;">'+x.assists+'</td><td class="num" style="color:#e9c46a; padding:8px 4px;">'+x.mvp+'</td></tr>'; });
      html += '</table></div>';
  }
  return html + '</div>';
}

function renderRiwayat() { return '<div class="card"><h2>Riwayat</h2><div class="empty">Musim baru saja dimulai.</div></div>'; }
function renderBerita() {
  var html = '<div class="card"><h2>Berita Sepak Bola</h2>';
  if(state.news.length === 0) html += '<div class="empty">Belum ada berita hari ini.</div>';
  else { state.news.forEach(function(n) { var borderColor = '#457b9d'; if (n.t.includes('ALERT') || n.t.includes('Cedera') || n.t.includes('Kalah') || n.t.includes('KONTROVERSI')) borderColor = '#e63946'; else if (n.t.includes('Sembuh') || n.t.includes('Menang') || n.t.includes('Juara')) borderColor = '#2ecc71'; else if (n.t.includes('Sponsor') || n.t.includes('Bonus') || n.t.includes('Dana') || n.t.includes('Tiket')) borderColor = '#ffd700'; html += '<div class="news-bubble" style="border-left-color:'+borderColor+';">'+n.t+'</div>'; }); }
  return html + '</div>';
}

// ==========================================
// 14. KOMPETISI: PIALA & LCA (SISTEM GUGUR & GRUP)
// ==========================================
function renderPiala() {
  if(!state.pialaNasional) state.pialaNasional = { active: false, round: 0, bracket: [], champion: null };
  if(!state.pialaNasional.active && !state.pialaNasional.champion) {
    return '<div class="card" style="text-align:center; padding:20px"><div style="font-size:50px">🏆</div><h2>Piala Nasional</h2><p style="font-size:11px; color:#8bb59f; margin-bottom:15px">Turnamen sistem gugur 16 tim terbaik Divisi 1.</p><button class="btn primary" style="width:100%; padding:15px" onclick="startPiala()">Mulai Turnamen</button></div>';
  }
  if(state.pialaNasional.champion) {
    return '<div class="card" style="text-align:center; padding:20px"><div style="font-size:50px">🏆</div><h2 style="color:#ffd700; margin:10px 0">Juara Piala!</h2><h3 style="color:#a8e6c1">'+state.pialaNasional.champion+'</h3><button class="btn primary" style="margin-top:15px; width:100%" onclick="resetPiala()">Turnamen Baru</button></div>';
  }
  var roundNames = ['16 Besar', '8 Besar', 'Semifinal', 'Final'];
  var html = '<div class="card"><h2>Bagan Piala</h2><div class="bracket-wrapper">';
  state.pialaNasional.bracket.forEach((round, rIdx) => {
      html += '<div class="bracket-col"><div style="text-align:center; font-size:10px; color:#7fae94; margin-bottom:10px; font-weight:bold">'+roundNames[rIdx]+'</div>';
      round.forEach(m => {
          var h = state.teams[m.h]; var a = state.teams[m.a]; var isUser = m.h === state.myIdx || m.a === state.myIdx;
          var hClass = m.played && m.winner === m.h ? 'winner' : (m.played ? 'loser' : ''); var aClass = m.played && m.winner === m.a ? 'winner' : (m.played ? 'loser' : '');
          var hScore = m.played ? (m.penH ? m.hg + ' (' + m.penH + ')' : m.hg) : '-'; var aScore = m.played ? (m.penA ? m.ag + ' (' + m.penA + ')' : m.ag) : '-';
          html += '<div class="match-box '+(isUser ? 'user-match' : '')+'"><div class="team '+hClass+'"><span>'+h.name.slice(0,12)+'</span> <b>'+hScore+'</b></div><div class="team '+aClass+'"><span>'+a.name.slice(0,12)+'</span> <b>'+aScore+'</b></div></div>';
      });
      html += '</div>';
  });
  html += '</div>';
  var curRound = state.pialaNasional.bracket[state.pialaNasional.round]; var allPlayed = curRound.every(m => m.played);
  if(!allPlayed) html += '<button class="btn primary" style="width:100%; margin-top:15px; padding:12px" onclick="playPialaRound()">⚽ Mainkan Babak Ini</button>';
  else html += '<button class="btn primary" style="width:100%; margin-top:15px; padding:12px" onclick="nextPialaRound()">Lanjut ke Babak Berikutnya</button>';
  return html + '</div>';
}
function startPiala() { var div1 = state.teams.filter(t => t.div === 1).sort((a,b) => avg(b.players.map(p=>p.rating)) - avg(a.players.map(p=>p.rating))).slice(0, 16); var idxs = div1.map(t => state.teams.indexOf(t)); for (var i = idxs.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var temp = idxs[i]; idxs[i] = idxs[j]; idxs[j] = temp; } var bracket = []; for(var i=0; i<idxs.length; i+=2) bracket.push({h: idxs[i], a: idxs[i+1], hg: 0, ag: 0, played: false}); state.pialaNasional = { active: true, round: 0, bracket: [bracket], champion: null }; toast("Piala Nasional Dimulai!"); render(); saveGame(); }
function playPialaRound() { var cur = state.pialaNasional.bracket[state.pialaNasional.round]; var userPlayed = false; cur.forEach(m => { if(m.played) return; var h = state.teams[m.h]; var a = state.teams[m.a]; var ctx = {H: teamStats(h), A: teamStats(a), hg: 0, ag: 0, events: []}; simulateSegment(h, a, 1, 90, ctx); m.hg = ctx.hg; m.ag = ctx.ag; if(m.hg === m.ag) { var hPen = ri(3, 5); var aPen = ri(3, 5); while(hPen === aPen) { if(Math.random() < 0.5) hPen++; else aPen++; } m.penH = hPen; m.penA = aPen; m.winner = hPen > aPen ? m.h : m.a; } else { m.winner = m.hg > m.ag ? m.h : m.a; } m.played = true; finalizeMatch(h, a, ctx); if(m.h === state.myIdx || m.a === state.myIdx) userPlayed = true; }); render(); saveGame(); if(userPlayed) toast("Pertandingan Piala Selesai!"); }
function nextPialaRound() { var cur = state.pialaNasional.bracket[state.pialaNasional.round]; var winners = cur.map(m => m.winner); if(winners.length === 1) { state.pialaNasional.champion = state.teams[winners[0]].name; state.pialaNasional.active = false; toast("🏆 " + state.pialaNasional.champion + " Juara Piala!"); } else { var next = []; for(var i=0; i<winners.length; i+=2) next.push({h: winners[i], a: winners[i+1], hg: 0, ag: 0, played: false}); state.pialaNasional.bracket.push(next); state.pialaNasional.round++; } render(); saveGame(); }
function resetPiala() { state.pialaNasional = { active: false, round: 0, bracket: [], champion: null }; render(); saveGame(); }

// LCA 1 & 2
function renderLCA(type) {
  var tState = state[type] || { active: false, stage: 'none', groups: null, matchday: 1, knockout: null, champion: null }; state[type] = tState;
  var title = type === 'lca' ? 'Liga Champions Asia' : 'Liga Champions Asia 2';
  if(tState.stage === 'finished') return '<div class="card" style="text-align:center; padding: 20px;"><div style="font-size:50px;">🏆</div><h2 style="color:#ffd700; margin: 10px 0;">Juara '+title+'!</h2><h3 style="color:#a8e6c1;">' + tState.champion + '</h3><button class="btn primary" style="margin-top:15px; width:100%;" onclick="resetLCA(\''+type+'\')">Mulai Turnamen Baru</button></div>';
  if(!tState.active) return '<div class="card" style="text-align:center; padding: 20px;"><div style="font-size:50px;">'+(type==='lca'?'🏆':'🥈')+'</div><h2 style="margin: 10px 0;">'+title+'</h2><p style="font-size:11px; color:#8bb59f; margin-bottom:15px;">Format: Fase Grup (Home & Away) -> 8 Besar -> Semifinal -> Final.</p><button class="btn primary" style="width:100%; padding:15px;" onclick="startLCA(\''+type+'\')">Mulai Kompetisi</button></div>';
  if(tState.stage === 'group') {
    var html = '<div class="card" style="padding:10px;"><h2>'+title+' - Fase Grup</h2><div style="font-size:11px; color:#ffd700; font-weight:bold; margin-bottom:15px; text-align:center;">MATCHDAY ' + tState.matchday + ' / 6</div>';
    ['A', 'B', 'C', 'D'].forEach(function(gName) {
      var group = tState.groups[gName]; html += '<div style="background:#0f1a15; border-radius:10px; padding:10px; margin-bottom:12px; border:1px solid #24382e;"><h3 style="margin-top:0; color:#a8e6c1; font-size:12px; border-bottom:1px solid #24382e; padding-bottom:5px; margin-bottom:8px;">Grup ' + gName + '</h3>';
      html += '<table style="width:100%; font-size:10px; border-collapse:collapse;"><tr><th style="padding-bottom:5px;">Klub</th><th class="num" style="padding-bottom:5px;">P</th><th class="num" style="padding-bottom:5px;">SG</th><th class="num" style="padding-bottom:5px;">Pts</th></tr>';
      group.standings.forEach(function(row, index) { var isUser = row.idx === state.myIdx; var rowClass = isUser ? 'background:rgba(46,204,113,0.15); font-weight:bold;' : ''; var posColor = index < 2 ? '#2ecc71' : '#e63946'; html += '<tr style="'+rowClass+' border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:6px 0; display:flex; align-items:center;"><span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:'+posColor+'; margin-right:5px;"></span>'+state.teams[row.idx].name.slice(0, 15)+'</td><td class="num" style="padding:6px 0;">' + row.P + '</td><td class="num" style="padding:6px 0;">' + (row.GF - row.GA) + '</td><td class="num" style="padding:6px 0; font-weight:bold; color:#a8e6c1;">' + row.Pts + '</td></tr>'; });
      html += '</table></div>';
    });
    html += '<button class="btn primary" style="width:100%; padding:15px; font-size:16px; margin-top:10px;" onclick="playLCAMatchday(\''+type+'\')">⚽ Mainkan Matchday ' + tState.matchday + '</button>'; return html + '</div>';
  }
  if(tState.stage === 'knockout') {
    var html = '<div class="card"><h2>'+title+' - Fase Gugur</h2>'; var roundNames = ['8 Besar', 'Semifinal', 'Final']; var curRound = tState.knockout[tState.round];
    html += '<h3 style="color:#ffd700; text-align:center; margin-bottom:15px;">' + roundNames[tState.round] + '</h3>';
    curRound.forEach(function(m) { var isUser = m.h === state.myIdx || m.a === state.myIdx; var hName = m.hName || '?'; var aName = m.aName || '?'; var hScore = m.played ? m.hg : '-'; var aScore = m.played ? m.ag : '-'; html += '<div style="background:' + (isUser ? '#1b3a28' : '#0f1a15') + '; border:1px solid ' + (isUser ? '#2ecc71' : '#24382e') + '; padding:10px; border-radius:8px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;"><div style="flex:1; text-align:left; font-weight:bold; color:#e8f0ec;">' + hName + '</div><div style="width:60px; text-align:center; font-weight:900; font-size:16px; color:#fff;">' + hScore + ' - ' + aScore + '</div><div style="flex:1; text-align:right; font-weight:bold; color:#e8f0ec;">' + aName + '</div></div>'; });
    if(!curRound[0].played) html += '<button class="btn primary" style="width:100%; margin-top:15px; padding:12px;" onclick="playLCAKnockout(\''+type+'\')">⚽ Mainkan Pertandingan</button>';
    else html += '<button class="btn primary" style="width:100%; margin-top:15px; padding:12px;" onclick="nextLCAKnockout(\''+type+'\')">Lanjut ke Babak Berikutnya</button>';
    return html + '</div>';
  }
}
function startLCA(type) {
  var div1 = state.teams.filter(t => t.div === 1).sort((a,b) => avg(b.players.map(p=>p.rating)) - avg(a.players.map(p=>p.rating)));
  var asian = state.teams.filter(t => t.div === 4).sort((a,b) => avg(b.players.map(p=>p.rating)) - avg(a.players.map(p=>p.rating)));
  var participants = [];
  if (type === 'lca') participants = div1.slice(0, 8).map(t => state.teams.indexOf(t)).concat(asian.slice(0, 8).map(t => state.teams.indexOf(t)));
  else participants = div1.slice(8, 16).map(t => state.teams.indexOf(t)).concat(asian.slice(8, 16).map(t => state.teams.indexOf(t)));
  if(participants.length < 16) { var allIndices = state.teams.map((_, i) => i).filter(i => !participants.includes(i)); for (var k = 0; k < allIndices.length && participants.length < 16; k++) participants.push(allIndices[k]); }
  for (var i = participants.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var temp = participants[i]; participants[i] = participants[j]; participants[j] = temp; }
  var groups = { A: [], B: [], C: [], D: [] }; var gNames = ['A', 'B', 'C', 'D']; participants.forEach(function(idx, i) { groups[gNames[i % 4]].push(idx); });
  state[type] = { active: true, stage: 'group', matchday: 1, groups: {}, knockout: null, champion: null };
  gNames.forEach(function(g) {
      var standings = groups[g].map(idx => ({ idx: idx, P:0, W:0, D:0, L:0, GF:0, GA:0, Pts:0 }));
      var t1 = groups[g][0], t2 = groups[g][1], t3 = groups[g][2], t4 = groups[g][3];
      var fixtures = [[{h: t1, a: t4}, {h: t2, a: t3}],[{h: t1, a: t3}, {h: t4, a: t2}],[{h: t1, a: t2}, {h: t3, a: t4}],[{h: t4, a: t1}, {h: t3, a: t2}],[{h: t3, a: t1}, {h: t2, a: t4}],[{h: t2, a: t1}, {h: t4, a: t3}]];
      state[type].groups[g] = { standings: standings, fixtures: fixtures, played: [false, false, false, false, false, false] };
  });
  toast(title + " Dimulai! Fase Grup (Home & Away)."); render(); saveGame();
}
function playLCAMatchday(type) {
  var tState = state[type]; var mdIndex = tState.matchday - 1;
  ['A', 'B', 'C', 'D'].forEach(function(g) {
      var group = tState.groups[g]; if(group.played[mdIndex]) return;
      group.fixtures[mdIndex].forEach(function(f) {
          var h = state.teams[f.h]; var a = state.teams[f.a]; var ctx = {H: teamStats(h), A: teamStats(a), hg: 0, ag: 0, events: []}; simulateSegment(h, a, 1, 90, ctx); finalizeMatch(h, a, ctx);
          var hRow = group.standings.find(x => x.idx === f.h); var aRow = group.standings.find(x => x.idx === f.a);
          hRow.P++; aRow.P++; hRow.GF += ctx.hg; hRow.GA += ctx.ag; aRow.GF += ctx.ag; aRow.GA += ctx.hg;
          if(ctx.hg > ctx.ag) { hRow.W++; hRow.Pts += 3; aRow.L++; } else if(ctx.hg < ctx.ag) { aRow.W++; aRow.Pts += 3; hRow.L++; } else { hRow.D++; aRow.D++; hRow.Pts++; aRow.Pts++; }
      });
      group.played[mdIndex] = true; group.standings.sort((x,y) => y.Pts - x.Pts || (y.GF-y.GA) - (x.GF-x.GA) || y.GF - x.GF);
  });
  tState.matchday++;
  if(tState.matchday > 6) {
      tState.stage = 'knockout'; tState.round = 0; var qualified = [];
      ['A', 'B', 'C', 'D'].forEach(function(g) { qualified.push({ rank: 1, idx: tState.groups[g].standings[0].idx }); qualified.push({ rank: 2, idx: tState.groups[g].standings[1].idx }); });
      var qf = [{ h: qualified[0].idx, a: qualified[3].idx }, { h: qualified[2].idx, a: qualified[1].idx },{ h: qualified[4].idx, a: qualified[7].idx }, { h: qualified[6].idx, a: qualified[5].idx }];
      tState.knockout = [qf]; toast("Fase Grup Selesai! Masuk ke 8 Besar.");
  } else { toast("Matchday " + (tState.matchday - 1) + " Selesai!"); }
  render(); saveGame();
}
function playLCAKnockout(type) {
  var tState = state[type]; var curRound = tState.knockout[tState.round]; var userMatch = null;
  curRound.forEach(function(m) {
      var h = state.teams[m.h]; var a = state.teams[m.a]; var ctx = {H: teamStats(h), A: teamStats(a), hg: 0, ag: 0, events: []}; simulateSegment(h, a, 1, 90, ctx);
      m.hg = ctx.hg; m.ag = ctx.ag; m.hName = h.name; m.aName = a.name;
      if(m.hg === m.ag) { var penH = ri(3, 5); var penA = ri(3, 5); if(penH === penA) penH++; m.hg += penH; m.ag += penA; }
      m.played = true; m.winner = m.hg > m.ag ? m.h : m.a; finalizeMatch(h, a, ctx);
      if(m.h === state.myIdx || m.a === state.myIdx) userMatch = m;
  });
  render(); saveGame();
  if(userMatch) { var status = userMatch.winner === state.myIdx ? 'LOLOS' : 'TERSINGKIR'; setTimeout(function() { alert("Hasil:\n" + userMatch.hName + " " + userMatch.hg + " - " + userMatch.ag + " " + userMatch.aName + "\n\nAnda " + status + "!"); }, 300); }
}
function nextLCAKnockout(type) {
  var tState = state[type]; var curRound = tState.knockout[tState.round]; var winners = curRound.map(m => m.winner);
  if(winners.length === 1) { tState.champion = state.teams[winners[0]].name; tState.stage = 'finished'; toast("🏆 JUARA: " + tState.champion); }
  else { var nextRound = []; for(var i=0; i<winners.length; i+=2) nextRound.push({h: winners[i], a: winners[i+1], hg: 0, ag: 0, played: false}); tState.knockout.push(nextRound); tState.round++; toast("Babak berikutnya siap!"); }
  render(); saveGame();
}
function resetLCA(type) { state[type] = { active: false, stage: 'none', groups: null, matchday: 1, knockout: null, champion: null }; render(); saveGame(); }

// ==========================================
// 15. MATCH UI & ANIMASI 2D
// ==========================================
function renderMatch(){
  var m=pendingMatch; if(!m) return '<div class="card">No Match</div>';
  var f = m.h.customFormationPos || FORMATION_POS[m.h.formation||'4-3-3']; var hPos=[]; var aPos=[]; var idxH={GK:0,DEF:0,MID:0,FWD:0}; var idxA={GK:0,DEF:0,MID:0,FWD:0};
  m.h.xi.map(id=>getP(m.h,id)).filter(Boolean).forEach(function(p){var arr=f[p.pos];if(arr){var pos=arr[idxH[p.pos]++ % arr.length];hPos.push({x:pos[0],y:pos[1]});}});
  m.a.xi.map(id=>getP(m.a,id)).filter(Boolean).forEach(function(p){var arr=f[p.pos];if(arr){var pos=arr[idxA[p.pos]++ % arr.length];aPos.push({x:100-pos[0],y:pos[1]});}});
  var playersSVG='';
  hPos.forEach(function(p,i){ playersSVG+='<g class="pp" data-bx="'+p.x+'" data-by="'+p.y+'" transform="translate('+p.x+','+p.y+')"><circle r="1.9" fill="'+m.h.color+'" stroke="#fff" stroke-width="0.25"/><text y="0.7" text-anchor="middle" font-size="1.8" fill="#fff" font-weight="700">'+(i+1)+'</text></g>'; });
  aPos.forEach(function(p,i){ playersSVG+='<g class="pp" data-bx="'+p.x+'" data-by="'+p.y+'" transform="translate('+p.x+','+p.y+')"><circle r="1.9" fill="'+m.a.color+'" stroke="#fff" stroke-width="0.25"/><text y="0.7" text-anchor="middle" font-size="1.8" fill="#fff" font-weight="700">'+(i+1)+'</text></g>'; });
  var pitchHTML = '<div class="pitch-wrap"><svg viewBox="0 0 100 64" class="pitch" preserveAspectRatio="xMidYMid meet"><rect width="100" height="64" fill="#2d6b3a"/><rect width="100" height="8" fill="#276334"/><rect y="16" width="100" height="8" fill="#276334"/><rect y="32" width="100" height="8" fill="#276334"/><rect y="48" width="100" height="8" fill="#276334"/><rect x="1" y="1" width="98" height="62" fill="none" stroke="#fff" stroke-width="0.35" opacity="0.85"/><line x1="50" y1="1" x2="50" y2="63" stroke="#fff" stroke-width="0.3" opacity="0.85"/><circle cx="50" cy="32" r="9" fill="none" stroke="#fff" stroke-width="0.3" opacity="0.85"/><rect x="1" y="14" width="16" height="36" fill="none" stroke="#fff" stroke-width="0.3" opacity="0.85"/><rect x="83" y="14" width="16" height="36" fill="none" stroke="#fff" stroke-width="0.3" opacity="0.85"/>'+playersSVG + '<g class="ball" id="pitchBall" transform="translate(50,32)"><circle r="0.9" fill="#fff" stroke="#111" stroke-width="0.15"/></g></svg></div>';
  var eventsHTML = m.ctx.events.map(e => '<div class="event '+(e.type==='goal'?'goal':e.type==='card'?'card':'')+'">'+e.min+"' - "+e.text+'</div>').join('');
  return '<div class="card"><div class="scoreboard"><div class="sb-team"><div class="sb-badge" style="background:'+m.h.color+'">'+m.h.name[0]+'</div>'+m.h.name.slice(0,12)+'</div><div><div class="score">'+m.ctx.hg+' - '+m.ctx.ag+'</div></div><div class="sb-team"><div class="sb-badge" style="background:'+m.a.color+'">'+m.a.name[0]+'</div>'+m.a.name.slice(0,12)+'</div></div>'+pitchHTML + '<div class="events">'+eventsHTML+'</div><div id="matchActions" style="margin-top:12px;"><button class="btn primary" style="width:100%;padding:12px" onclick="finishFullMatch()">Lanjut</button></div></div>';
}
function finishFullMatch(){
  pendingMatch.f.played=true; pendingMatch.f.hg=pendingMatch.ctx.hg; pendingMatch.f.ag=pendingMatch.ctx.ag;
  finalizeMatch(pendingMatch.h,pendingMatch.a,pendingMatch.ctx);
  pendingMatch=null; nextRound();
}

var pitchAnim = { raf: null, running: false, players: [], ball: null, t: 0, lastT: 0 };
function initPitchAnim() {
  stopPitchAnim(); var svg = document.querySelector('.pitch'); if (!svg) return;
  var pps = svg.querySelectorAll('.pp'); pitchAnim.players = [];
  for (var i = 0; i < pps.length; i++) { var g = pps[i]; var bx = +g.dataset.bx; var by = +g.dataset.by; pitchAnim.players.push({ el: g, bx: bx, by: by, x: bx, y: by, tx: bx, ty: by, seed: Math.random() * Math.PI * 2 }); }
  var ballEl = svg.querySelector('#pitchBall'); pitchAnim.ball = ballEl ? { el: ballEl, x: 50, y: 32, tx: 50, ty: 32 } : null;
  pitchAnim.t = 0; pitchAnim.lastT = performance.now(); pitchAnim.running = true; pitchAnim.raf = requestAnimationFrame(loopPitchAnim);
}
function stopPitchAnim() { pitchAnim.running = false; if (pitchAnim.raf) { cancelAnimationFrame(pitchAnim.raf); pitchAnim.raf = null; } }
function loopPitchAnim() {
  if (!pitchAnim.running) return;
  var now = performance.now(); var dt = Math.min(60, now - pitchAnim.lastT); pitchAnim.lastT = now; pitchAnim.t += dt * 0.001;
  if (pitchAnim.ball) { var b = pitchAnim.ball; b.x += (b.tx - b.x) * 0.15; b.y += (b.ty - b.y) * 0.15; b.el.setAttribute('transform', 'translate(' + b.x.toFixed(2) + ',' + b.y.toFixed(2) + ')'); }
  for (var i = 0; i < pitchAnim.players.length; i++) { var p = pitchAnim.players[i]; var swayX = Math.sin(pitchAnim.t * 2.5 + p.seed) * 1.5; var swayY = Math.cos(pitchAnim.t * 2.0 + p.seed * 1.7) * 1.5; var targetX = p.tx + swayX; var targetY = p.ty + swayY; p.x += (targetX - p.x) * 0.12; p.y += (targetY - p.y) * 0.12; p.el.setAttribute('transform', 'translate(' + p.x.toFixed(2) + ',' + p.y.toFixed(2) + ')'); }
  pitchAnim.raf = requestAnimationFrame(loopPitchAnim);
}
function updatePitch(e) {
  if (!pitchAnim.players.length) initPitchAnim();
  if (pitchAnim.ball) {
    var bx = 50, by = 32;
    if (e.type === 'goal') { bx = e.team === 'home' ? ri(91, 95) : ri(5, 9); by = ri(27, 37); } 
    else if (e.type === 'commentary') { bx = ri(20, 80); by = ri(10, 54); } 
    else if (e.type === 'card') { bx = ri(25, 75); by = ri(15, 49); }
    pitchAnim.ball.tx = bx; pitchAnim.ball.ty = by;
  }
  var ballX = pitchAnim.ball ? pitchAnim.ball.tx : 50; var ballY = pitchAnim.ball ? pitchAnim.ball.ty : 32;
  for (var i = 0; i < pitchAnim.players.length; i++) { var p = pitchAnim.players[i]; var pullX = (ballX - p.bx) * 0.20 + rnd(-5, 5); var pullY = (ballY - p.by) * 0.20 + rnd(-5, 5); p.tx = Math.max(2, Math.min(98, p.bx + pullX)); p.ty = Math.max(2, Math.min(62, p.by + pullY)); }
}
function resetPitch() {
  if (!pitchAnim.players.length) initPitchAnim();
  for (var i = 0; i < pitchAnim.players.length; i++) { pitchAnim.players[i].tx = pitchAnim.players[i].bx; pitchAnim.players[i].ty = pitchAnim.players[i].by; }
  if (pitchAnim.ball) { pitchAnim.ball.tx = 50; pitchAnim.ball.ty = 32; }
}

// ==========================================
// 16. MATCH LOOP & ANIMASI (15 DETIK)
// ==========================================
function playRound(){
  try{
    state.teams.forEach(function(t){
      t.players.forEach(function(p){
        if(t.xi.indexOf(p.id)===-1) {
            var recRate = (t === state.teams[state.myIdx]) ? getStaminaRecoveryRate() : 25; 
            p.stamina = Math.min(100, p.stamina + recRate);
        }
        if(p.injury>0){
          p.injury=Math.max(0,p.injury-1);
          if(p.injury===0){
            p.injuryName='';p.injurySeverity='';
            if(t===state.teams[state.myIdx]) state.news.unshift({t:'Sembuh: '+p.name+' kembali fit!',time:'Musim '+state.season});
          }
        }
        if(p.suspension&&p.suspension>0) p.suspension=Math.max(0,p.suspension-1);
      });
    });
    
    if(!state.pcAnswered&&Math.random()<0.35){
      state.pcAnswered=true;
      if(typeof openPressConference==='function') openPressConference();
      return;
    }
    
    var mine=null;
    [1,2].forEach(function(div){
      var round=state.fixtures[div][state.round]; if(!round) return;
      round.forEach(function(f){
        try{
          var h=state.teams[f.home],a=state.teams[f.away];
          var isUser=(f.home===state.myIdx)||(f.away===state.myIdx);
          var weather=rollWeather();
          if(isUser){
            var H=teamStats(h),A=teamStats(a);
            var ctx={H:H,A:A,possH:H.mid/(H.mid+A.mid),hg:0,ag:0,events:[],weather:weather,homeBoost:0,awayBoost:0};
            simulateSegment(h,a,1,45,ctx);
            if(state.instantWinNext){
              if(f.home===state.myIdx){ctx.hg=Math.max(ctx.hg,3);ctx.ag=0;}
              else{ctx.ag=Math.max(ctx.ag,3);ctx.hg=0;}
            }
            state.lastWeather=weather;
            mine={f:f,h:h,a:a,ctx:ctx,subsLeft:6,finished:false};
          } else {
            var H2=teamStats(h),A2=teamStats(a);
            var ctx2={H:H2,A:A2,possH:H2.mid/(H2.mid+A2.mid),hg:0,ag:0,events:[],weather:weather,homeBoost:0,awayBoost:0};
            simulateSegment(h,a,1,90,ctx2);
            f.hg=ctx2.hg;f.ag=ctx2.ag;f.played=true;
            finalizeMatch(h,a,ctx2);
          }
        }catch(err){ console.warn('Match error',err); if(!f.played){f.hg=0;f.ag=0;f.played=true;} }
      });
    });
    
    pendingMatch=mine;
    if(mine){
      state.view='match';
      state.pcAnswered=false;
      render();
      try{animateHalf(1);}catch(e){console.warn('Anim error',e);finishFullMatch();}
    } else { nextRound(); }
  }catch(err){
    console.warn('playRound error',err);
    if(typeof nextRound==='function'){nextRound();} else {state.round++;render();}
  }
}

var animTimer=null;
function animateHalf(half){
  var m=pendingMatch; if(!m) return;
  var evs=m.ctx.events.filter(function(e){return half===1?e.min<=45:e.min>45;}).sort(function(a,b){return a.min-b.min;});
  var scoreEl=document.getElementById('matchScore');
  var clockEl=document.getElementById('matchClock');
  var listEl=document.getElementById('matchEvents');
  if(!scoreEl||!listEl) return;
  var idx=0;
  var startMin=half===1?0:45;
  var endMin=half===1?45:90;
  var curMin=startMin;
  clearInterval(animTimer);
  if(half===1) resetPitch();
  
  var MS_PER_MIN = 166; 
  var TICK = 16; 

  var last=performance.now();
  animTimer=setInterval(function(){
    var now=performance.now();
    var dt=now-last;last=now;
    var speed=state.animSpeed||1;
    curMin+=(dt*speed)/MS_PER_MIN;
    
    while(idx<evs.length&&evs[idx].min<=curMin){ applyEventToUI(evs[idx++],m,scoreEl,listEl); }
    if(clockEl) clockEl.textContent=Math.min(endMin,Math.floor(curMin))+' min';
    
    if(Math.random() < 0.1) { updatePitch({type:'commentary', team: Math.random()<0.5?'home':'away'}); }

    if(curMin>=endMin){
      clearInterval(animTimer);
      while(idx<evs.length){applyEventToUI(evs[idx++],m,scoreEl,listEl);}
      if(clockEl) clockEl.textContent=endMin+' min';
      if(half===1) { if(typeof openHalfTimeModal==='function') openHalfTimeModal(); }
      else finishFullMatch();
    }
  },TICK);
}

function applyEventToUI(e,m,scoreEl,listEl){
  if(e.type==='goal'){
    var hg=0,ag=0;
    for(var i=0;i<m.ctx.events.length;i++){
      var ev=m.ctx.events[i]; if(ev.type!=='goal') continue; if(ev===e) break;
      if(ev.team==='home') hg++; else ag++;
    }
    if(e.team==='home') hg++; else ag++;
    scoreEl.textContent=hg+' - '+ag;
    scoreEl.classList.add('pulse');
    setTimeout(function(){scoreEl.classList.remove('pulse');},250);
  }
  try{updatePitch(e);}catch(e2){}
  var div=document.createElement('div');
  div.className='event '+e.type+' '+(e.team||'');
  div.textContent=e.min+' min - '+e.text;
  listEl.appendChild(div);
  listEl.scrollTop=listEl.scrollHeight;
}

// ==========================================
// 17. HALF TIME & AUTO SUBSTITUTION
// ==========================================
function openHalfTimeModal(){
  var m=pendingMatch; if(!m) return;
  var myIsHome=m.f.home===state.myIdx;
  var myTeam=myIsHome?m.h:m.a;
  var opp=myIsHome?m.a:m.h;
  var myScore=myIsHome?m.ctx.hg:m.ctx.ag;
  var oppScore=myIsHome?m.ctx.ag:m.ctx.hg;
  
  var modal=document.createElement('div'); modal.id='createModal';
  var inner='<div class="inner" style="max-width:460px"><h2>Half Time</h2>';
  inner+='<div class="sub" style="font-size:14px; margin-bottom:15px; color:#fff; font-weight:bold;">'+myTeam.name+' <span style="color:#2ecc71">'+myScore+' - '+oppScore+'</span> '+opp.name+'</div>';
  inner+='<h3 style="margin-top:14px">Team Talk</h3><div id="talkOpts">';
  TEAM_TALKS.forEach(function(t){ inner+='<button class="pc-answer" data-id="'+t.id+'" onclick="pickTalk(\''+t.id+'\')"><b>'+t.label+'</b><br><span style="font-size:10px;color:#8bb59f">'+t.desc+'</span></button>'; });
  inner+='</div>';
  inner+='<div style="background:rgba(46,204,113,0.1); border:1px solid #2ecc71; padding:12px; border-radius:8px; margin-top:15px; font-size:11px; color:#a8e6c1; text-align:center; line-height:1.5;">⚙️ Asisten Pelatih AI akan melakukan <b>rotasi otomatis</b> untuk pemain yang cedera atau kelelahan (Stamina < 50%).</div>';
  inner+='<button class="btn primary" style="width:100%; margin-top:15px; padding:12px; font-size:14px;" onclick="startSecondHalf()">Mulai Babak Kedua</button></div>';
  
  modal.innerHTML=inner; document.body.appendChild(modal);
  state.selectedTalk='motivasi';
  var btns=document.querySelectorAll('#talkOpts .pc-answer');
  for(var i=0;i<btns.length;i++){ if(btns[i].dataset.id==='motivasi'){btns[i].style.borderColor='#2ecc71';btns[i].style.background='#1b3a28';} }
}

function pickTalk(id){
  state.selectedTalk=id;
  var btns=document.querySelectorAll('#talkOpts .pc-answer');
  for(var i=0;i<btns.length;i++){
    var b=btns[i]; b.style.borderColor='#2f5442'; b.style.background='#182720';
    if(b.dataset.id===id){ b.style.borderColor='#2ecc71'; b.style.background='#1b3a28'; }
  }
}

function startSecondHalf(){
  var m=pendingMatch; var modal=document.getElementById('createModal'); if(modal) modal.remove();
  var talk=TEAM_TALKS[2];
  for(var i=0;i<TEAM_TALKS.length;i++){ if(TEAM_TALKS[i].id===state.selectedTalk) talk=TEAM_TALKS[i]; }
  var myIsHome=m.f.home===state.myIdx;
  if(myIsHome){m.ctx.homeBoost=talk.atk-talk.def*0.5;} else {m.ctx.awayBoost=talk.atk-talk.def*0.5;}
  
  m.ctx.H=teamStats(m.h); m.ctx.A=teamStats(m.a); toast('Team talk: '+talk.label);
  
  autoSubstitute(m); // Panggil Auto Sub
  
  simulateSegment(m.h,m.a,46,90,m.ctx);
  if(state.instantWinNext){
    var isHome=m.f.home===state.myIdx;
    if(isHome){m.ctx.hg=Math.max(m.ctx.hg,3);m.ctx.ag=0;} else {m.ctx.ag=Math.max(m.ctx.ag,3);m.ctx.hg=0;}
    state.instantWinNext=false;
  }
  render(); animateHalf(2);
}

function autoSubstitute(m) {
  var myIsHome = m.f.home === state.myIdx; var myTeam = myIsHome ? m.h : m.a;
  if (m.subsLeft <= 0) return;
  var myScore = myIsHome ? m.ctx.hg : m.ctx.ag; var oppScore = myIsHome ? m.ctx.ag : m.ctx.hg;
  var isWinningBig = (myScore - oppScore) >= 2;

  var outCandidates = myTeam.xi.map(id => getP(myTeam, id)).filter(p => p && (p.injury > 0 || (p.stamina < 40 && !isWinningBig)));
  if (isWinningBig && outCandidates.length === 0) {
      var lowAppsStarters = myTeam.xi.map(id => getP(myTeam, id)).filter(p => p && (p.apps || 0) < 5);
      if (lowAppsStarters.length > 0) outCandidates.push(pick(lowAppsStarters));
  }
  
  var bench = myTeam.players.filter(p => myTeam.xi.indexOf(p.id) === -1 && p.stamina > 60 && p.injury === 0 && !(p.suspension && p.suspension > 0)).sort((a,b) => {
      if ((a.apps || 0) !== (b.apps || 0)) return (a.apps || 0) - (b.apps || 0);
      return b.rating - a.rating;
  });

  outCandidates.forEach(outP => {
      if (m.subsLeft <= 0) return; 
      var inP = bench.find(p => p.pos === outP.pos); if (!inP) inP = bench[0]; 
      if (inP) {
          var idx = myTeam.xi.indexOf(outP.id); myTeam.xi[idx] = inP.id; 
          bench = bench.filter(p => p.id !== inP.id); m.subsLeft--;
          var reason = outP.injury > 0 ? 'Cedera' : (isWinningBig ? 'Rotasi (Unggul)' : 'Stamina menipis');
          m.ctx.events.push({ min: 45, type: 'commentary', team: myIsHome ? 'home' : 'away', text: `🔄 Auto-Sub: ${outP.name} (${reason}) keluar, digantikan ${inP.name}. (Sisa Sub: ${m.subsLeft})` });
      }
  });
}

function finishFullMatch(){
  clearInterval(animTimer); var m=pendingMatch; if(!m) return;
  if(!m.finished){
    m.f.played=true; m.f.hg=m.ctx.hg; m.f.ag=m.ctx.ag;
    finalizeMatch(m.h,m.a,m.ctx); m.finished=true;
  }
  var el=document.getElementById('matchActions');
  if(el) el.innerHTML='<button class="btn primary" style="width:100%;padding:12px" onclick="nextRound()">Lanjut</button>';
}

// ==========================================
// 18. NEXT ROUND, KALENDER, AI OFFERS
// ==========================================
function nextRound(){
  try{
    var prevRound = state.round; var myMatch = null;
    var rw = state.fixtures[state.myDiv][prevRound];
    if(rw) { rw.forEach(function(f){ if(f.home === state.myIdx || f.away === state.myIdx) myMatch = f; }); }

    if(myMatch && myMatch.played){
        var isHome = myMatch.home === state.myIdx; var myG = isHome ? myMatch.hg : myMatch.ag; var oppG = isHome ? myMatch.ag : myMatch.hg;
        if(myG > oppG) { state.fanMood = Math.min(100, (state.fanMood || 50) + 10); } 
        else if(myG < oppG) { state.fanMood = Math.max(0, (state.fanMood || 50) - 5); } 
        else { state.fanMood = Math.max(0, (state.fanMood || 50) - 3); }
    }

    if(myMatch && myMatch.played){
        if(myMatch.home === state.myIdx){
            try {
                var rev=calcHomeMatchRevenue(state.teams[state.myIdx],state.teams[myMatch.away],myMatch.hg,myMatch.ag);
                if(rev && rev.net) state.teams[state.myIdx].budget+=rev.net;
                state.teams[state.myIdx].stadium.revenueHistory.push({attendance:rev.attendance,occ:rev.occ,ticketRevenue:rev.ticketRevenue,tourRevenue:rev.tourRevenue,tourVisitors:rev.tourVisitors,storeRevenue:rev.storeRevenue,storeBuyers:rev.storeBuyers,hotelRevenue:rev.hotelRevenue,hotelNights:rev.hotelNights,grossRevenue:rev.grossRevenue,security:rev.security,cleaning:rev.cleaning,opsCost:rev.opsCost,police:rev.police,totalCost:rev.totalCost,riot:rev.riot,net:rev.net,week:state.round});
                if(state.teams[state.myIdx].stadium.revenueHistory.length>20) state.teams[state.myIdx].stadium.revenueHistory=state.teams[state.myIdx].stadium.revenueHistory.slice(-20);
            } catch(e) {}
        }

        try {
            var isHomeR = myMatch.home === state.myIdx; var myGoals = isHomeR ? myMatch.hg : myMatch.ag; var oppGoals = isHomeR ? myMatch.ag : myMatch.hg;
            var oppName = state.teams[isHomeR ? myMatch.away : myMatch.home].name; var margin = myGoals - oppGoals;
            if(margin > 0){
                if(!state.teamRecords.biggestWin || margin > state.teamRecords.biggestWin.margin) state.teamRecords.biggestWin={margin:margin,score:myGoals+'-'+oppGoals,opp:oppName,season:state.season};
                if(state.teamRecords.currentStreakType === 'W') state.teamRecords.currentStreak++; else { state.teamRecords.currentStreak = 1; state.teamRecords.currentStreakType = 'W'; }
                if(state.teamRecords.currentStreak > state.teamRecords.longestWinStreak) state.teamRecords.longestWinStreak = state.teamRecords.currentStreak;
            } else if(margin < 0){
                if(!state.teamRecords.biggestLoss || -margin > state.teamRecords.biggestLoss.margin) state.teamRecords.biggestLoss={margin:-margin,score:myGoals+'-'+oppGoals,opp:oppName,season:state.season};
                state.teamRecords.currentStreak = 0; state.teamRecords.currentStreakType = '';
            } else { state.teamRecords.currentStreak = 0; state.teamRecords.currentStreakType = ''; }
        } catch(e) {}
    }

    state.round++; state.dayInWeek = 1; pendingMatch = null;
    
    if(state.round >= TOTAL_ROUNDS){
      if(typeof finalizeSeason==='function') finalizeSeason();
      if(typeof processPromotionRelegation==='function') processPromotionRelegation();
      state.view = 'seasonEnd';
    } else { state.view = 'main'; state.mainTab = 'beranda'; }
    
    if(typeof generateAIOffers === 'function') generateAIOffers();

    render(); saveGame();
  }catch(err){
    console.warn('nextRound error', err);
    state.round++; state.dayInWeek = 1; state.view = 'main'; state.mainTab = 'beranda'; render(); saveGame();
  }
}

function advanceDay(){
  var daysLeft=7-state.dayInWeek;var add=daysLeft<2?daysLeft:2;state.dayInWeek+=add;
  var my = state.teams[state.myIdx]; var stLevel = (my.stadium && my.stadium.level) ? my.stadium.level : 1;
  var dailyRecRate = 5 + (stLevel * 2); 
  my.players.forEach(function(p){ if(p.stamina < 100 && p.injury === 0) p.stamina = Math.min(100, p.stamina + dailyRecRate); });
  toast('Waktu berlalu '+add+' hari.');render();saveGame();
}

function getStaminaRecoveryRate() {
  var my = state.teams[state.myIdx]; if(!my) return 15;
  var avgR = avg(my.players.map(p => p.rating)) || 60; var stLevel = (my.stadium && my.stadium.level) ? my.stadium.level : 1;
  var rate = 15 + Math.max(0, (avgR - 60) * 0.4) + (stLevel * 2);
  return Math.min(45, Math.round(rate));
}

function generateAIOffers() {
  if(Math.random() > 0.25) return; 
  var my = state.teams[state.myIdx]; if(!my.players.length) return;
  var candidates = my.players.filter(p => p.rating >= 75 && p.contractYears > 0); if(!candidates.length) return;
  var p = pick(candidates); var mv = marketValue(p);
  var aiTeams = state.teams.filter((t, i) => i !== state.myIdx && t.budget > (mv * 0.8));
  if(aiTeams.length === 0) return; 
  var bidder = pick(aiTeams); var bidderIdx = state.teams.indexOf(bidder);
  var offerAmount = Math.round((mv * rnd(0.8, 1.3)) / 1e6) * 1e6;
  if(offerAmount > bidder.budget) offerAmount = Math.floor(bidder.budget / 1e6) * 1e6;
  if(!state.incomingOffers) state.incomingOffers = [];
  state.incomingOffers.push({ id: Date.now(), playerId: p.id, bidderIdx: bidderIdx, amount: offerAmount });
  state.news.unshift({ t: "📩 " + bidder.name + " menawar " + p.name + " seharga " + formatIDR(offerAmount), time: "Pekan " + (state.round + 1) });
  toast("Ada tawaran masuk untuk " + p.name + "!");
}

// ==========================================
// 19. FINALIZE SEASON & NEW SEASON
// ==========================================
function finalizeSeason() {
  // Akumulasi statistik ke Hall of Fame
  if(!state.allTime) state.allTime = {scorers:{}, assisters:{}, mvp:{}, cs:{}, apps:{}};
  state.teams.forEach(t => {
      t.players.forEach(p => {
          if(p.seasonGoals > 0) { if(!state.allTime.scorers[p.name]) state.allTime.scorers[p.name] = {name:p.name, val:0, teams:[]}; state.allTime.scorers[p.name].val += p.seasonGoals; if(state.allTime.scorers[p.name].teams.indexOf(t.name) === -1) state.allTime.scorers[p.name].teams.push(t.name); }
          if(p.assists > 0) { if(!state.allTime.assisters[p.name]) state.allTime.assisters[p.name] = {name:p.name, val:0, teams:[]}; state.allTime.assisters[p.name].val += p.assists; if(state.allTime.assisters[p.name].teams.indexOf(t.name) === -1) state.allTime.assisters[p.name].teams.push(t.name); }
          if(p.mvp > 0) { if(!state.allTime.mvp[p.name]) state.allTime.mvp[p.name] = {name:p.name, val:0, teams:[]}; state.allTime.mvp[p.name].val += p.mvp; if(state.allTime.mvp[p.name].teams.indexOf(t.name) === -1) state.allTime.mvp[p.name].teams.push(t.name); }
          if(p.apps > 0) { if(!state.allTime.apps[p.name]) state.allTime.apps[p.name] = {name:p.name, val:0, teams:[]}; state.allTime.apps[p.name].val += p.apps; if(state.allTime.apps[p.name].teams.indexOf(t.name) === -1) state.allTime.apps[p.name].teams.push(t.name); }
      });
  });
}

function startNewSeason(){
  state.season++;
  state.pialaNasional=null; state.lca=null; state.lca2=null; state.pcAnswered=false; state.training=[];
  state.incomingOffers = []; // Reset tawaran
  state.marketPlayers = []; // Reset pasar bebas
  
  state.teams.forEach(function(t){
    var baseR=avg(t.players.map(function(p){return p.rating;}))||60;
    
    // --- PROSES PEMAIN SENIOR & KONTRAK ---
    t.players.forEach(function(p){
        p.age++;
        p.previousRating = p.rating;
        var talent = p.talent || 1.0;
        if(p.age<=21) p.rating+=Math.round(ri(3,6)*talent);
        else if(p.age<=25) p.rating+=Math.round(ri(2,4)*talent);
        else if(p.age<=28) p.rating+=Math.round(ri(0,2)*talent);
        else if(p.age<=31) p.rating+=ri(-1,1);
        else if(p.age<=35) p.rating-=ri(1,3);
        else p.rating-=ri(2,4);
        p.rating=Math.max(38,Math.min(110,p.age<=28?(p.potential||110):110,p.rating));
        
        p.seasonGoals=0; p.apps=0; p.assists=0; p.yellow=0; p.red=0; p.cs=0; p.mvp=0; p.stamina=100;
        if(p.injury>0){ p.injury=Math.max(0,p.injury-4); if(p.injury===0){ p.injuryName=''; p.injurySeverity=''; } }
        p.ratings=[]; p.avgRating=0; 
        if(p.contractYears>0) p.contractYears--;
        p.weeklyWage = Math.round((p.rating - 40) * 1.5e6);

    });
    
    // Hapus pemain tua/kontrak habis
    t.players = t.players.filter(function(p){ return p.age<=45 && p.contractYears>0; });
    if(t.players.length<16 && t!==state.teams[state.myIdx]) { for(var j=t.players.length;j<16;j++) t.players.push(makeYouth(baseR)); }

    // --- EVALUASI AKADEMI (PROMOSI/LEPAS) ---
    t.academy.forEach(function(p){ p.age++; p.rating = Math.min(p.potential || 85, p.rating + Math.round(ri(2, 5) * (p.talent || 1.0))); });
    var promoted = []; var newAcademy = [];
    t.academy.forEach(function(p) {
        if(p.age >= 21) {
            if(p.rating >= 85) { promoted.push(p); if(t === state.teams[state.myIdx]) state.news.unshift({t: "⬆️ Promosi Otomatis: " + p.name + " (OVR " + p.rating + ")", time: "Musim Baru"}); }
            else { p.contractYears = 0; if(!state.freeAgents) state.freeAgents = []; state.freeAgents.push(p); if(t === state.teams[state.myIdx]) state.news.unshift({t: "📤 Dilepas: " + p.name + " (Gagal Promosi)", time: "Musim Baru"}); }
        } else { newAcademy.push(p); }
    });
    t.academy = newAcademy;
    t.players = t.players.concat(promoted);
    for(var i=0;i<ri(1,3);i++) t.academy.push(makeYouth(baseR));

    // Reset formasi
    if(!checkXI(t)||t.xi.length<11) autoPickXI(t,t.formation);
    t.budget += (t.div===1?ri(40,90):ri(15,40))*1e9;
  });

  state.fanMood=Math.min(100,(state.fanMood||50)+10);
  
  // Acak formasi AI
  var forms=Object.keys(FORMATIONS);
  state.teams.forEach(function(t,i){ if(i===state.myIdx) return; if(Math.random()<0.5){ t.formation=pick(forms); autoPickXI(t,t.formation); } });

  state.fixtures={1:makeFixtures(getDivIndices(1)),2:makeFixtures(getDivIndices(2))};
  state.round=0; state.view='main'; state.mainTab='beranda'; state.subTab='squad'; state.tableDiv=state.myDiv;
  render(); saveGame();
}

// ==========================================
// 20. INITIALIZATION & MENU AWAL
// ==========================================
function renderSelect(){
  var slotsHTML='';[1,2,3].forEach(n=>{slotsHTML+='<div id="slot-card-'+n+'" style="background:#0f1a15;border:1px solid #24382e;border-radius:10px;padding:12px;margin-bottom:8px;"><div style="color:#8bb59f;font-size:12px;">Memuat Slot '+n+'...</div></div>';});
  setTimeout(async function(){ 
    for(var i=0;i<3;i++){ 
        var n=i+1; var info=await getSlotInfo(n); var el=document.getElementById('slot-card-'+n); if(!el) continue; 
        if(info){ el.innerHTML='<b>Slot '+n+'</b><br><span style="font-size:11px">'+info.team+' (Pekan '+(info.round+1)+')</span><br><button class="btn primary" onclick="loadAndPlay('+n+')">LANJUTKAN</button>'; }
        else { el.innerHTML='<b>Slot '+n+'</b><br><span style="font-size:11px">Kosong</span><br><button class="btn small" onclick="newGame(0,'+n+')">Mulai (Persija)</button>'; } 
    } 
  },100);
  return '<div class="card" style="text-align:center; padding:20px;"><div style="font-size:44px">&#9917;</div><h2 style="margin:8px 0;color:#a8e6c1">LIGA MANAJER</h2></div><div class="card">'+slotsHTML+'</div>';
}

async function loadAndPlay(n){ if(await loadGame(n)) { state.view='main'; render(); } else { toast('Gagal memuat'); } }

function newGame(myIdx,slot){
  PID=0; state.activeSlot=slot||1;
  state.teams=TEAM_DEFS.map(d=>({name:d.name, color:d.color, div:d.div, players:makeSquad(d.base), formation:'4-3-3', xi:[], budget: (d.div === 1 ? ri(200, 800) : ri(50, 200)) * 1e9, stadium:{level:1,cap:10000}}));
  
  var intl = generateInternationalTeams(); state.teams = state.teams.concat(intl);
  var asianClubs = generateAsianClubs(); state.teams = state.teams.concat(asianClubs);
  
  state.teams.forEach(t=>autoPickXI(t, t.formation));
  state.myIdx=myIdx; state.myDiv=state.teams[myIdx].div;
  state.fixtures={1:makeFixtures(getDivIndices(1)),2:makeFixtures(getDivIndices(2))};
  
  state.round=0; state.dayInWeek=1; state.season=1; state.view='main'; state.mainTab='beranda'; state.subTab='squad';
  state.news = []; state.incomingOffers = []; state.marketPlayers = []; state.freeAgents = [];
  
  render(); saveGame();
}

function toast(msg){
  var ex=document.querySelectorAll('.toast');for(var i=0;i<ex.length;i++)ex[i].remove();
  var d=document.createElement('div'); d.className='toast'; d.textContent=msg;
  document.body.appendChild(d); setTimeout(()=>d.remove(),2000);
}

function renderSeasonEnd() { 
    return '<div class="card" style="text-align:center; padding:20px;">'+
        '<div style="font-size:50px;">🏆</div>'+
        '<h2 style="margin:10px 0;">Musim Berakhir</h2>'+
        '<p style="font-size:12px; color:#8bb59f; margin-bottom:15px;">Selamat atas perjuangan Anda di musim ini!</p>'+
        '<button class="btn primary" style="width:100%; padding:15px;" onclick="startNewSeason()">Mulai Musim Baru</button>'+
    '</div>'; 
}

function renderSettings(){ return '<div class="card" style="text-align:center;padding:20px"><h2>Pengaturan</h2><button class="btn primary" onclick="state.settingsOpen=false; render()">Kembali</button></div>'; }

// ==========================================
// PATCH FUNGSI TAMBAHAN (Wajib Ada)
// ==========================================
function marketValue(p) {
  var base = Math.pow(p.rating, 3.2) * 45000;
  if (p.age < 23) base *= 1.25;
  if (p.age > 30) base *= 0.6;
  return Math.max(500e6, Math.round(base / 1e8) * 1e8);
}

function checkXI(team) {
  if (!team || !team.xi || team.xi.length !== 11) return false;
  var gkCount = team.xi.filter(function(id) {
    var p = getP(team, id);
    return p && p.pos === 'GK';
  }).length;
  return gkCount === 1;
}

function isXIValid() {
  var my = state.teams[state.myIdx];
  return checkXI(my);
}

function calcHomeMatchRevenue(home, away, hg, ag) {
  var cap = home.stadium ? home.stadium.cap : 10000;
  var att = Math.min(cap, Math.round(cap * rnd(0.6, 0.95)));
  var ticketPrice = 50000;
  var ticketRevenue = att * ticketPrice;
  var tourRevenue = att * 10000;
  var storeRevenue = att * 15000;
  var hotelRevenue = att * 5000;
  var grossRevenue = ticketRevenue + tourRevenue + storeRevenue + hotelRevenue;
  var totalCost = grossRevenue * 0.2;
  return {
    attendance: att,
    occ: (att / cap) * 100,
    ticketRevenue: ticketRevenue,
    tourRevenue: tourRevenue,
    tourVisitors: Math.round(att * 0.3),
    storeRevenue: storeRevenue,
    storeBuyers: Math.round(att * 0.4),
    hotelRevenue: hotelRevenue,
    hotelNights: Math.round(att * 0.1),
    grossRevenue: grossRevenue,
    security: totalCost * 0.4,
    cleaning: totalCost * 0.2,
    opsCost: totalCost * 0.4,
    police: 0,
    totalCost: totalCost,
    riot: false,
    net: grossRevenue - totalCost
  };
}

// ==========================================
// PATCH TAMBAHAN: VALIDASI STARTING XI
// ==========================================
function ensureValidStartingXI() {
  var my = state.teams[state.myIdx];
  if (!my) return;
  if (!my.xi || my.xi.length !== 11 || !checkXI(my)) {
    autoPickXI(my, my.formation || '4-3-3');
  }
}

// ==========================================
// PATCH TAMBAHAN: TOMBOL AUTO XI
// ==========================================
function autoLineup() {
  var my = state.teams[state.myIdx];
  if (!my) return;
  autoPickXI(my, my.formation || '4-3-3');
  toast("Starting XI berhasil diatur otomatis!");
  render();
  saveGame();
}

window.onload = function() { 
  try { render(); } catch(e) { alert("Gagal memuat game: " + e.message); } 
};
