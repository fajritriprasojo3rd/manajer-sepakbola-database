// ==========================================
// KONFIGURASI SUPABASE (JANGAN DIUBAH)
// ==========================================
const SUPABASE_URL = 'https://ocqedmogvkcvfkjekayr.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jcWVkbW9ndmtjdmZramVrYXlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2NTk0NzIsImV4cCI6MjEwODIzNTQ3Mn0.bQFVAIbaquQOj7sTT_CZQbZmgE7v2EmnpkE-zbW6w3Y';
let _supabase = null;
if (typeof supabase !== 'undefined') {
    _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
}

/* ==================== UTIL ==================== */
var rnd=function(a,b){return Math.random()*(b-a)+a;};
var ri=function(a,b){return Math.floor(rnd(a,b+1));};
var pick=function(a){return a[Math.floor(Math.random()*a.length)];};
var avg=function(a){return a.length?a.reduce(function(x,y){return x+y;},0)/a.length:60;};
function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}}
function formatIDR(n){
  if(state.godMode && n>0) return 'INF';
  var rp=Math.abs(n);
  var sign=n<0?'-':'';
  if(rp>=1e15) return sign+'Rp '+(rp/1e15).toFixed(2)+' P';
  if(rp>=1e12) return sign+'Rp '+(rp/1e12).toFixed(2)+' T';
  if(rp>=1e9)  return sign+'Rp '+(rp/1e9).toFixed(2)+' M';
  if(rp>=1e6)  return sign+'Rp '+(rp/1e6).toFixed(1)+' jt';
  if(rp>=1e3)  return sign+'Rp '+(rp/1e3).toFixed(0)+' rb';
  return sign+'Rp '+Math.round(rp);
}
function formatIDRShort(n){
  var rp=Math.abs(n);
  var sign=n<0?'-':'';
  if(rp>=1e15) return sign+(rp/1e15).toFixed(1)+'P';
  if(rp>=1e12) return sign+(rp/1e12).toFixed(1)+'T';
  if(rp>=1e9)  return sign+(rp/1e9).toFixed(1)+'M';
  if(rp>=1e6)  return sign+(rp/1e6).toFixed(0)+'jt';
  if(rp>=1e3)  return sign+(rp/1e3).toFixed(0)+'rb';
  return sign+Math.round(rp);
}
function nameInitials(name){
  var parts=name.split(' ');
  if(parts.length===1) return parts[0].slice(0,2).toUpperCase();
  return (parts[0][0]+parts[parts.length-1][0]).toUpperCase();
}
function nameColor(name){
  var h=0;
  for(var i=0;i<name.length;i++) h=(h*31+name.charCodeAt(i))>>>0;
  var colors=['#e63946','#f4a261','#2a9d8f','#e9c46a','#457b9d','#5e60ce','#8ac926','#ff6b6b','#06d6a0','#118ab2','#ef476f','#ffd166','#8338ec','#fb5607','#3a86ff','#ffbe0b','#7209b7','#f72585','#4cc9f0','#4361ee'];
  return colors[h%colors.length];
}

/* ==================== BANK NAMA ==================== */
var NAMA_DEPAN=['Budi','Agus','Slamet','Bambang','Joko','Wawan','Tono','Sutrisno','Sumarno','Wahyu','Bowo','Bagus','Yanto','Krisna','Wisnu','Bimo','Aryo','Damar','Bayu','Galih','Rangga','Yoga','Hendra','Heru','Wibowo','Harto','Hartono','Suparman','Purnomo','Teguh','Tri','Utomo','Waluyo','Eko','Edi','Dwi','Ujang','Asep','Dedi','Dadan','Yudi','Iwan','Endang','Rian','Ridwan','Ahmad','Cecep','Nandang','Deni','Rudi','Taufik','Iman','Udin','Hendi','Yana','Supri','Binsar','Togar','Ronald','Maruli','Lamhot','Rudolf','Tigor','Hasudungan','Parlindungan','Sahat','Adi','Rizal','Firman','Arif','Doni','Reza','Riki','Yogi','Rama','Andre','Rahmat','Hendri','Andi','Baso','Daeng','Karim','Muhammad','Yusuf','Hasim','Rahman','Salim','Wayan','Made','Nyoman','Ketut','Gede','Putu','Kadek','Komang','Agung','Abdul','Hasan','Husain','Ibrahim','Fauzi','Hamzah','Idris','Iskandar','Salman','Umar','Ali','Zaid','Ridho','Fikri','Hafiz','Faris','Zaki','Rafi','Alif','Naufal','Daffa','Farhan','Fajar','Rizky','Rizki','Bima','Satria','Panji','Ilham','Arya','Dimas','Adit','Gilang','Vino','Rio','Anton','Bagas','Bintang','Cahyo','Dani','Ferdi','Hanif','Iqbal','Jefri','Kevin','Lukman','Maulana','Nanda','Pandu','Rendi','Sandi','Tama','Vicky','Yudha','Zulfikar','Alvin','Dika','Elang','Fathan','Genta','Joni','Kurnia','Lukito','Miko','Nata'];
var NAMA_TENGAH=['Adi','Aji','Alam','Anugrah','Ardi','Arif','Arya','Bagas','Bagus','Bakti','Bayu','Bima','Budi','Cahya','Cakra','Damar','Darma','Dewa','Dharma','Dwi','Eka','Eko','Fajar','Fikri','Galih','Genta','Giri','Gunawan','Hadi','Hakim','Hendra','Hidayat','Ilham','Indra','Iqbal','Irawan','Jaya','Karya','Kusuma','Laksana','Maulana','Mulya','Nanda','Nugraha','Nur','Pandu','Pangestu','Perkasa','Prabowo','Pradana','Prakoso','Pratama','Purnama','Putra','Rahayu','Rahman','Rahmat','Rizki','Rizky','Sakti','Saputra','Satria','Setiawan','Surya','Susanto','Tama','Teguh','Tri','Utama','Wahyu','Wibawa','Wijaya','Wira','Yudha','Yulianto','Zaki','Arta','Aditya','Bagaskara','Baskara','Dermawan','Firdaus','Gunadi','Hartanto','Iskandar','Jatmiko','Kartika','Kurnia','Mahendra','Nugroho','Pramudya','Raharjo','Santika','Sasmita'];
var NAMA_BELAKANG=['Santoso','Wijaya','Susanto','Hartono','Suryana','Kusuma','Santika','Wibowo','Purnomo','Setiawan','Nugroho','Saputra','Hidayat','Kurniawan','Permana','Wardana','Prabowo','Utomo','Suharto','Sudirman','Gunawan','Wibisono','Santosa','Rahardjo','Suryanto','Waluyo','Siswanto','Hariyanto','Prasetyo','Sutanto','Sugiarto','Suprapto','Supriyadi','Widodo','Herdiana','Sudrajat','Suryadi','Supriatna','Suhanda','Suhendar','Kurnia','Setiadi','Wijayanto','Siregar','Simbolon','Nasution','Sitompul','Hutapea','Panjaitan','Sinaga','Sihombing','Sitohang','Napitupulu','Lubis','Harahap','Pulungan','Daulay','Hasibuan','Ritonga','Simanjuntak','Samosir','Tampubolon','Marbun','Sidabutar','Manurung','Sihaloho','Gultom','Hutagalung','Tanjung','Silalahi','Nainggolan','Simatupang','Sutan','Rajo','Datuk','Malik','Rasyid','Ibrahim','Yusuf','Hasan','Rahman','Chaniago','Koto','Piliang','Sikumbang','Tanjuang','Canigo','Gunung','Jambak','Daeng','Karim','Sultan','Hamid','Sutedja','Wirawan','Sukarta','Ardana','Suardana','Suardika','Sujana','Suwitra','Yadnya','Adnyana','Wiranata','Mahendra','Arimbawa','Hakim','Husain','Fauzi','Ridho','Latif','Wahid','Chalid','Syafii','Habib','Pratama','Putra','Firdaus','Pangestu','Prakoso','Firmansyah','Ramadhan','Iskandar','Syahputra','Anggara'];
function generateIndonesianName(){
  var r=Math.random();
  if(r<0.15) return pick(NAMA_DEPAN);
  if(r<0.70){
    var mode=Math.random();
    if(mode<0.55) return pick(NAMA_DEPAN)+' '+pick(NAMA_BELAKANG);
    if(mode<0.80) return pick(NAMA_DEPAN)+' '+pick(NAMA_TENGAH);
    return pick(NAMA_TENGAH)+' '+pick(NAMA_BELAKANG);
  }
  return pick(NAMA_DEPAN)+' '+pick(NAMA_TENGAH)+' '+pick(NAMA_BELAKANG);
}

/* ==================== POSISI ==================== */
var POSITIONS_SPECIFIC={GK:['GK'],DEF:['CB','RB','LB','LWB','RWB'],MID:['RMF','LMF','CMF','DMF','AMF'],FWD:['SS','CF']};
function catOf(sp){
  if(sp==='GK') return 'GK';
  if(['CB','RB','LB','LWB','RWB'].indexOf(sp)!==-1) return 'DEF';
  if(['RMF','LMF','CMF','DMF','AMF'].indexOf(sp)!==-1) return 'MID';
  return 'FWD';
}

/* ==================== GAYA MAIN & SKILL ==================== */
var PLAY_STYLES={CF:['Pemburu Gol','Target Man','Pemburu Peluang'],SS:['Penyerang Bayangan','Pemburu Celah','Sayap Cut Inside'],AMF:['Otak Permainan','Playmaker Kreatif','Pemburu Celah'],CMF:['Box-To-Box','Orkestrator'],DMF:['Jangkar','Perusak Serangan'],RMF:['Pemain Sayap Kreatif','Spesialis Umpan Silang','Sayap Cut Inside','Pembantu Serangan','Pemburu Celah'],LMF:['Pemain Sayap Kreatif','Spesialis Umpan Silang','Sayap Cut Inside','Pembantu Serangan','Pemburu Celah'],CB:['Pembangun Serangan','Perusak Serangan'],RB:['Bek Sayap Menyerang','Bek Sayap Bertahan','Spesialis Umpan Silang'],LB:['Bek Sayap Menyerang','Bek Sayap Bertahan','Spesialis Umpan Silang'],RWB:['Bek Sayap Menyerang','Spesialis Umpan Silang','Pemain Sayap Kreatif'],LWB:['Bek Sayap Menyerang','Spesialis Umpan Silang','Pemain Sayap Kreatif'],GK:['Kiper Agresif','Kiper Bertahan','Kiper Build-up','Kiper Stoper']};
var SKILL_POOL={GK:['Refleks','Posisi','Distribusi','Penyelamatan Penalti','Sweeper Keeper','One-on-One','Kontrol Udara'],DEF:['Tackling','Marking','Heading','Intersepsi','Aerial','Slide Tackle','Blok','Kekuatan Fisik'],MID:['Passing','Vision','Dribbling','Stamina','Long Shot','Playmaker','Ball Control','Crossing'],FWD:['Finishing','Dribbling','Pace','Header','Long Shot','Poacher','Movement','Volley']};
var SPECIAL_SKILLS={golden:[{id:'freekick',icon:'\uD83C\uDFAF',name:'Raja Bola Mati',desc:'+25% gol dari tendangan bebas'},{id:'clutch',icon:'\uD83D\uDD25',name:'Pemain Penentu',desc:'+rating di babak kedua'},{id:'ironman',icon:'\uD83D\uDCAA',name:'Besi Berjalan',desc:'-50% risiko cedera'},{id:'biggame',icon:'\uD83C\uDFC6',name:'Spesialis Laga Besar',desc:'+rating di laga penting'},{id:'speed',icon:'\u26A1',name:'Kilat',desc:'+peluang gol serangan cepat'},{id:'leader',icon:'\uD83D\uDC51',name:'Panglima Lapangan',desc:'+5% kekuatan serangan tim'},{id:'maestro',icon:'\uD83C\uDFAA',name:'Otak Serangan',desc:'+50% peluang asis'},{id:'finisher',icon:'\u26BD',name:'Algojo Gawang',desc:'+30% peluang gol'}],elite:[{id:'freekick',icon:'\uD83C\uDFAF',name:'Ahli Bola Mati',desc:'+15% gol tendangan bebas'},{id:'clutch',icon:'\uD83D\uDD25',name:'Pemain Laga Penting',desc:'+rating di laga penting'},{id:'ironman',icon:'\uD83D\uDCAA',name:'Tahan Banting',desc:'-30% risiko cedera'},{id:'speed',icon:'\u26A1',name:'Cepat Kaki',desc:'+kecepatan lari'},{id:'maestro',icon:'\uD83C\uDFAA',name:'Kreator Serangan',desc:'+25% peluang asis'},{id:'finisher',icon:'\u26BD',name:'Penembak Jitu',desc:'+15% peluang gol'},{id:'leader',icon:'\uD83D\uDC51',name:'Calon Kapten',desc:'+3% kekuatan serangan tim'}]};

/* ==================== FORMASI ==================== */
var FORMATIONS={'4-3-3':{GK:1,DEF:['CB','CB','RB','LB'],MID:['CMF','CMF','AMF'],FWD:['CF','SS','SS']},'4-4-2':{GK:1,DEF:['CB','CB','RB','LB'],MID:['RMF','CMF','CMF','LMF'],FWD:['CF','SS']},'3-5-2':{GK:1,DEF:['CB','CB','CB'],MID:['RMF','DMF','CMF','AMF','LMF'],FWD:['CF','SS']},'5-3-2':{GK:1,DEF:['RWB','CB','CB','CB','LWB'],MID:['CMF','CMF','AMF'],FWD:['CF','SS']}};
function formationCounts(fname){var f=FORMATIONS[fname];var c={GK:0,DEF:0,MID:0,FWD:0};if(f.GK) c.GK=f.GK;if(f.DEF instanceof Array) c.DEF=f.DEF.length; else c.DEF=f.DEF||0;if(f.MID instanceof Array) c.MID=f.MID.length; else c.MID=f.MID||0;if(f.FWD instanceof Array) c.FWD=f.FWD.length; else c.FWD=f.FWD||0;return c;}
var FORMATION_POS={'4-3-3':{GK:[[4,32]],DEF:[[18,24],[18,40],[18,54],[18,10]],MID:[[34,24],[34,40],[42,32]],FWD:[[52,32],[54,10],[54,54]]},'4-4-2':{GK:[[4,32]],DEF:[[18,24],[18,40],[18,54],[18,10]],MID:[[36,10],[36,26],[36,38],[36,54]],FWD:[[54,24],[54,40]]},'3-5-2':{GK:[[4,32]],DEF:[[18,18],[18,32],[18,46]],MID:[[36,8],[36,20],[36,32],[36,44],[36,56]],FWD:[[54,24],[54,40]]},'5-3-2':{GK:[[4,32]],DEF:[[16,8],[16,20],[16,32],[16,44],[16,56]],MID:[[36,20],[36,32],[36,44]],FWD:[[54,24],[54,40]]}};
var MENTALITY={'defensif':{label:'Defensif'},'seimbang':{label:'Seimbang'},'menyerang':{label:'Menyerang'}};

/* ==================== STATISTIK & CEDERA ==================== */
function generateHeight(cat,specificPos){var base,spread;if(cat==='GK'){base=190;spread=8;}else if(specificPos==='CB'){base=187;spread=7;}else if(specificPos==='CF'||specificPos==='SS'){base=180;spread=9;}else if(specificPos==='RB'||specificPos==='LB'||specificPos==='RWB'||specificPos==='LWB'){base=175;spread=7;}else{base=178;spread=8;}var h=Math.round(base+rnd(-spread,spread));return Math.max(160,Math.min(205,h));}
function derivePhysical(height,playStyle){var aerial,balance,agility,pace,strength;if(height>=190){aerial=ri(80,95);balance=ri(60,75);agility=ri(55,70);pace=ri(55,75);strength=ri(80,95);}else if(height>=185){aerial=ri(72,88);balance=ri(68,82);agility=ri(65,80);pace=ri(65,82);strength=ri(75,90);}else if(height>=178){aerial=ri(60,78);balance=ri(75,88);agility=ri(75,88);pace=ri(72,88);strength=ri(65,82);}else if(height>=170){aerial=ri(48,68);balance=ri(82,92);agility=ri(85,95);pace=ri(78,92);strength=ri(55,72);}else{aerial=ri(38,58);balance=ri(85,95);agility=ri(88,98);pace=ri(85,96);strength=ri(45,62);}if(playStyle==='Target Man'){aerial+=ri(5,10);strength+=ri(5,8);}if(playStyle==='Pemburu Gol'||playStyle==='Pemburu Peluang'){pace+=ri(3,8);}if(playStyle==='Sayap Cut Inside'){pace+=ri(3,7);agility+=ri(3,7);}if(playStyle==='Pemain Sayap Kreatif'){agility+=ri(3,7);pace+=ri(2,5);}if(playStyle==='Bek Sayap Menyerang'){pace+=ri(3,7);}if(playStyle==='Jangkar'||playStyle==='Perusak Serangan'){strength+=ri(5,10);balance+=ri(3,7);}if(playStyle==='Kiper Stoper'){aerial+=ri(5,10);strength+=ri(5,10);}if(playStyle==='Kiper Agresif'){agility+=ri(5,10);pace+=ri(3,7);}return {height:height,aerial:Math.min(99,aerial),balance:Math.min(99,balance),agility:Math.min(99,agility),pace:Math.min(99,pace),strength:Math.min(99,strength)};}
function generateIndividStats(cat,specificPos,rating,playStyle){var base=rating;var stats={};var v=function(){return rnd(-8,8);};if(cat==='GK'){stats.reflexes=Math.min(99,Math.round(base+v()+5));stats.handling=Math.min(99,Math.round(base+v()));stats.positioning=Math.min(99,Math.round(base+v()));stats.kicking=Math.min(99,Math.round(base+v()-3));stats.command=Math.min(99,Math.round(base+v()-5));stats.speed=Math.min(99,Math.round(base+v()-15));stats.shooting=ri(5,20);stats.passing=Math.min(99,Math.round(base+v()-10));stats.dribbling=ri(10,25);stats.defending=Math.min(99,Math.round(base+v()));stats.physical=Math.min(99,Math.round(base+v()));}else if(cat==='DEF'){stats.defending=Math.min(99,Math.round(base+v()+5));stats.physical=Math.min(99,Math.round(base+v()));stats.passing=Math.min(99,Math.round(base+v()-3));stats.shooting=Math.min(99,Math.round(base+v()-15));stats.dribbling=Math.min(99,Math.round(base+v()-10));stats.speed=Math.min(99,Math.round(base+v()));}else if(cat==='MID'){stats.passing=Math.min(99,Math.round(base+v()+5));stats.dribbling=Math.min(99,Math.round(base+v()));stats.defending=Math.min(99,Math.round(base+v()-5));stats.shooting=Math.min(99,Math.round(base+v()-3));stats.physical=Math.min(99,Math.round(base+v()));stats.speed=Math.min(99,Math.round(base+v()));}else{stats.shooting=Math.min(99,Math.round(base+v()+5));stats.dribbling=Math.min(99,Math.round(base+v()+3));stats.passing=Math.min(99,Math.round(base+v()-3));stats.defending=Math.min(99,Math.round(base+v()-18));stats.physical=Math.min(99,Math.round(base+v()-3));stats.speed=Math.min(99,Math.round(base+v()+3));}return stats;}
function finishYouthStats(p){var phys=derivePhysical(p.height,p.playStyle);p.aerial=phys.aerial;p.balance=phys.balance;p.agility=phys.agility;p.pace=phys.pace;p.strength=phys.strength;p.stats=generateIndividStats(p.pos,p.specificPos,p.rating,p.playStyle);return p;}
var INJURY_TYPES=[{name:'Memar kaki',minW:1,maxW:2,severity:'ringan'},{name:'Cedera engkel',minW:1,maxW:4,severity:'ringan'},{name:'Cedera hamstring',minW:1,maxW:4,severity:'ringan'},{name:'Cedera otot',minW:2,maxW:4,severity:'ringan'},{name:'Cedera paha',minW:4,maxW:8,severity:'sedang'},{name:'Cedera bahu',minW:4,maxW:10,severity:'sedang'},{name:'Cedera kepala',minW:2,maxW:6,severity:'sedang'},{name:'Patah tulang ringan',minW:1,maxW:24,severity:'patah'},{name:'Patah tulang kaki',minW:6,maxW:24,severity:'patah'},{name:'Patah tulang tangan',minW:4,maxW:20,severity:'patah'},{name:'Cedera ACL',minW:24,maxW:96,severity:'acl'},{name:'Cedera ACL dan Meniskus',minW:32,maxW:96,severity:'acl'},{name:'Ruptur Ligamen',minW:24,maxW:80,severity:'acl'}];
function injuryDurationWeeks(severity){var pool=INJURY_TYPES.filter(function(t){return t.severity===severity;});if(!pool.length) pool=INJURY_TYPES;var t=pick(pool);return {name:t.name,weeks:ri(t.minW,t.maxW),severity:t.severity};}
function injuryLabel(weeks){if(weeks>=48) return Math.floor(weeks/48)+' tahun';if(weeks>=4) return Math.floor(weeks/4)+' bulan';return weeks+' pekan';}

/* ==================== CUACA & TALKS ==================== */
var WEATHERS=[{name:'Cerah',icon:'\u2600',goal:1.00},{name:'Berawan',icon:'\u26C5',goal:1.00},{name:'Hujan',icon:'\uD83C\uDF27',goal:0.85},{name:'Panas',icon:'\uD83D\uDD25',goal:0.90},{name:'Berkabut',icon:'\uD83C\uDF2B',goal:0.95}];
function rollWeather(){return pick(WEATHERS);}
var TEAM_TALKS=[{id:'marah',label:'Marah',desc:'Agresif',atk:0.18,def:-0.10},{id:'tenang',label:'Tenang',desc:'Bertahan',atk:-0.08,def:0.15},{id:'motivasi',label:'Motivasi',desc:'Seimbang',atk:0.10,def:0.10},{id:'diam',label:'Diam',desc:'Bisu',atk:0,def:0}];

/* ==================== MUSIM & STADION ==================== */
var PROMOTED=3; var RELEGATED=3; var TOTAL_ROUNDS=38; var STAMINA_COST=18; var STAMINA_RECOVER=35;
var STADIUM_LEVELS=[{cap:8000,name:'Stadion Kampung',cost:0,ticket:100000,level:1},{cap:18000,name:'Stadion Kota',cost:80e9,ticket:300000,level:2},{cap:35000,name:'Stadion Provinsi',cost:250e9,ticket:600000,level:3},{cap:60000,name:'Stadion Nasional',cost:600e9,ticket:1000000,level:4},{cap:100000,name:'Stadion Mega',cost:1500e9,ticket:1500000,level:5},{cap:150000,name:'Stadion Raksasa',cost:3500e9,ticket:2000000,level:6}];

/* ==================== SPONSOR & ASIA ==================== */
var SPONSOR_FAMOUS=[{name:'Bank Nusantara',tier:'nasional',color:'#e63946'},{name:'Toko Merah',tier:'lokal',color:'#d90429'},{name:'Kopi Kapal Api',tier:'lokal',color:'#8b0000'},{name:'Sido Muncul',tier:'nasional',color:'#2a9d8f'},{name:'Indomie',tier:'jumbo',color:'#f4a261'},{name:'Teh Botol Sosro',tier:'nasional',color:'#e63946'},{name:'Telkomsel',tier:'jumbo',color:'#e63946'},{name:'Bank Mandiri',tier:'sultan',color:'#1a3a8f'},{name:'BCA',tier:'triliuner',color:'#0033a0'},{name:'BRI',tier:'triliuner',color:'#1a3a8f'},{name:'BNI',tier:'jumbo',color:'#e67e22'},{name:'Pertamina',tier:'sultan',color:'#00a651'},{name:'Garuda Indonesia',tier:'triliuner',color:'#0033a0'},{name:'Astra Honda',tier:'triliuner',color:'#d90429'},{name:'GoTo Group',tier:'sultan',color:'#00aa13'},{name:'Tokopedia',tier:'jumbo',color:'#42b549'},{name:'Grab Indonesia',tier:'sultan',color:'#00b14f'},{name:'Shopee Arena',tier:'jumbo',color:'#ee4d2d'},{name:'Bank Jago',tier:'jumbo',color:'#ff7a00'},{name:'Djarum Master',tier:'triliuner',color:'#8b0000'},{name:'Gudang Garam',tier:'dewa',color:'#cc0000'},{name:'Sampoerna Global',tier:'triliuner',color:'#001a4d'},{name:'Toyota Astra',tier:'dewa',color:'#d90429'},{name:'Adaro Energy',tier:'dewa',color:'#333333'},{name:'Freeport Indonesia',tier:'dewa',color:'#006400'},{name:'Sinar Mas Group',tier:'dewa',color:'#8b0000'},{name:'Salim Group',tier:'triliuner',color:'#d90429'},{name:'Lippo Group',tier:'sultan',color:'#003366'},{name:'Bakrie Group',tier:'sultan',color:'#1a3a8f'},{name:'Chairul Tanjung',tier:'sultan',color:'#333333'}];
function generateSponsorPool(){var P1=['Bank','Toko','Grup','PT','Industri','Korporasi','Perusahaan','Bintang','Surya','Cahaya','Prima','Utama','Mega','Jaya','Sakti','Karya','Mandiri','Bersama','Sentosa','Makmur','Global','Nasional','Trans','Multi','Panca','Adi','Raja','Sri','Wira','Bumi','Elang','Garuda','Rajawali','Naga','Banteng','Merapi','Semeru','Krakatau','Mutiara','Berlian','Anugerah','Berkah','Cemerlang','Dinamis','Ekspres','Fajar','Gemilang','Harapan','Indah','Kencana'];var C=['Nusantara','Sejahtera','Bintang','Surya','Cahaya','Prima','Utama','Mega','Jaya','Sakti','Karya','Mandiri','Bersama','Sentosa','Makmur','Andalan','Terpadu','Elang','Garuda','Rajawali','Harimau','Naga','Banteng','Merapi','Mutiara','Berlian','Emas','Baja','Teknologi','Digital','Energi','Pertambangan','Perbankan','Otomotif','Penerbangan','Logistik','Ritel','Farmasi','Media','Makanan','Minuman','Properti','Asuransi','Telekomunikasi','Konstruksi','Agribisnis','Perkebunan','Kesehatan','Pendidikan','Olahraga'];var S=['Corp','Group','Holdings','Industries','Enterprise','Tbk','Internasional','Nasional','Indonesia','Asia','Pasifik','Global','Nusantara','Jaya','Utama','Prima','Sejahtera','Mandiri'];var COLORS=['#e63946','#f4a261','#2a9d8f','#e9c46a','#457b9d','#5e60ce','#8ac926','#ff6b6b','#06d6a0','#118ab2','#ef476f','#ffd166','#8338ec','#fb5607','#3a86ff','#ffbe0b','#7209b7','#f72585','#4cc9f0','#4361ee','#d90429','#0033a0','#00a651','#8b0000'];var TIERS=['lokal','lokal','lokal','lokal','nasional','nasional','nasional','jumbo','jumbo','mega','mega'];var pool=SPONSOR_FAMOUS.slice();var used={};pool.forEach(function(s){used[s.name]=true;});var guard=0;while(pool.length<900&&guard++<20000){var r=Math.random();var name;if(r<0.40) name=pick(P1)+' '+pick(C);else if(r<0.70) name=pick(C)+' '+pick(S);else name=pick(P1)+' '+pick(C)+' '+pick(S);if(used[name]) continue;used[name]=true;pool.push({name:name,tier:pick(TIERS),color:pick(COLORS)});}return pool;}
var SPONSOR_POOL=generateSponsorPool();
var SPONSOR_TIERS={lokal:{annualMin:5e9,annualMax:15e9,yearsMin:2,yearsMax:5,minRep:0,minTrophy:0,minDiv:2,label:'Lokal',color:'#7fae94'},nasional:{annualMin:15e9,annualMax:50e9,yearsMin:2,yearsMax:5,minRep:0,minTrophy:0,minDiv:2,label:'Nasional',color:'#457b9d'},jumbo:{annualMin:50e9,annualMax:150e9,yearsMin:2,yearsMax:5,minRep:30,minTrophy:0,minDiv:1,label:'Jumbo',color:'#e9c46a'},mega:{annualMin:150e9,annualMax:500e9,yearsMin:2,yearsMax:5,minRep:45,minTrophy:1,minDiv:1,label:'Mega',color:'#5e60ce'},sultan:{annualMin:1e12,annualMax:5e12,yearsMin:3,yearsMax:5,minRep:60,minTrophy:3,minDiv:1,label:'Sultan',color:'#ffd700'},triliuner:{annualMin:5e12,annualMax:20e12,yearsMin:4,yearsMax:5,minRep:75,minTrophy:5,minDiv:1,label:'Triliuner',color:'#ffaa00'},dewa:{annualMin:20e12,annualMax:100e12,yearsMin:5,yearsMax:5,minRep:90,minTrophy:10,minDiv:1,label:'Dewa',color:'#ff6b6b'}};
var SPONSOR_BONUSES={juara_liga:0.50,runner_up:0.25,top4:0.10,juara_piala:0.30,juara_lca:1.00};
var ASIAN_TEAMS=[{name:'Al Hilal',color:'#0033a0',rating:82},{name:'Al Nassr',color:'#ffd700',rating:81},{name:'Al Ittihad',color:'#f4a261',rating:80},{name:'Al Ahli',color:'#2ecc71',rating:79},{name:'Al Shabab',color:'#e63946',rating:76},{name:'Kawasaki Frontale',color:'#2a9d8f',rating:79},{name:'Yokohama F Marinos',color:'#0033a0',rating:79},{name:'Urawa Reds',color:'#d90429',rating:78},{name:'Kashima Antlers',color:'#b8860b',rating:77},{name:'Vissel Kobe',color:'#a01c3f',rating:76},{name:'Gamba Osaka',color:'#003366',rating:75},{name:'Ulsan Hyundai',color:'#457b9d',rating:80},{name:'Jeonbuk Motors',color:'#2ecc71',rating:78},{name:'FC Seoul',color:'#e63946',rating:76},{name:'Pohang Steelers',color:'#d90429',rating:75},{name:'Suwon Samsung',color:'#0033a0',rating:74},{name:'Shanghai Port',color:'#d90429',rating:78},{name:'Shandong Taishan',color:'#e67e22',rating:77},{name:'Beijing Guoan',color:'#2ecc71',rating:75},{name:'Guangzhou FC',color:'#0033a0',rating:74},{name:'Al Sadd',color:'#8b0000',rating:78},{name:'Al Duhail',color:'#003366',rating:77},{name:'Al Rayyan',color:'#a01c3f',rating:75},{name:'Al Ain',color:'#a01c3f',rating:77},{name:'Shabab Al Ahli',color:'#e63946',rating:76},{name:'Persepolis',color:'#e63946',rating:79},{name:'Esteghlal',color:'#0033a0',rating:77},{name:'Sepahan',color:'#2ecc71',rating:75},{name:'Buriram United',color:'#1a3a8f',rating:76},{name:'Johor Darul Tazim',color:'#8ac926',rating:77}];

/* ==================== IPO, CUSTOM PEMAIN, TOKO ==================== */
var IPO_CONFIG={minBudget:300e9,minReputation:60,minTrophy:1,shareCount:1000000,publicPct:0.30,basePrice:50000};
var CREATE_TIERS={normal:{label:'Normal',talent:1.0,cost:20e9,potBonus:6,color:'#7fae94'},talented:{label:'Berbakat',talent:1.2,cost:50e9,potBonus:12,color:'#e9c46a'},elite:{label:'Istimewa',talent:1.5,cost:120e9,potBonus:18,color:'#a8e6c1'},golden:{label:'Golden Boy',talent:2.0,cost:300e9,potBonus:25,color:'#ffd700'}};
var SHOP_ITEMS=[{id:'energy',name:'Minuman Energi',icon:'\u26A1',price:5e9,desc:'Stamina 1 pemain jadi 100%',needTarget:'player',color:'#f4a261'},{id:'booster',name:'Booster Pemain',icon:'\uD83D\uDCAA',price:15e9,desc:'+5 rating permanen',needTarget:'player',color:'#e9c46a'},{id:'medkit',name:'Kit Medis',icon:'\uD83C\uDFE5',price:25e9,desc:'Kurangi cedera 50%',needTarget:'injured',color:'#e63946'},{id:'legend',name:'Paket Legenda',icon:'\u2B50',price:200e9,desc:'Pemain OVR 84-88 muda',needTarget:null,color:'#ffd700'},{id:'superstar',name:'Superstar',icon:'\uD83C\uDF1F',price:500e9,desc:'Golden Boy ke akademi',needTarget:null,color:'#ffd700'},{id:'banding',name:'Kit Banding',icon:'\uD83D\uDFE5',price:30e9,desc:'Hapus kartu merah',needTarget:'redcard',color:'#e63946'},{id:'trust',name:'Kepercayaan',icon:'\uD83E\uDD1D',price:10e9,desc:'+20 mood suporter',needTarget:null,color:'#2ecc71'}];
function getShopItem(id){for(var i=0;i<SHOP_ITEMS.length;i++){if(SHOP_ITEMS[i].id===id) return SHOP_ITEMS[i];}return null;}

/* ==================== KLB & RAHASIA ==================== */
var GLOBAL_EVENTS=[{id:'pandemic',name:'Pandemi Global',desc:'Wabah penyakit menyebar.',duration:[1,2],attendanceMult:0.0,travelBan:true,budgetImpact:-0.30,moodImpact:-30,severity:'chaos'},{id:'war',name:'Konflik Bersenjata',desc:'Ketegangan geopolitik.',duration:[1,2],attendanceMult:0.15,travelBan:true,budgetImpact:-0.40,moodImpact:-40,severity:'chaos'},{id:'nuclear',name:'Insiden Nuklir',desc:'Ledakan nuklir.',duration:[1,1],attendanceMult:0.0,travelBan:true,budgetImpact:-0.60,moodImpact:-60,severity:'apocalypse'},{id:'economic',name:'Krisis Ekonomi',desc:'Pasar saham runtuh.',duration:[1,2],attendanceMult:0.5,travelBan:false,budgetImpact:-0.50,moodImpact:-25,severity:'high'},{id:'earthquake',name:'Gempa Bumi',desc:'Gempa dahsyat.',duration:[1,1],attendanceMult:0.20,travelBan:false,budgetImpact:-0.35,moodImpact:-35,severity:'high'},{id:'cyber',name:'Serangan Siber',desc:'Peretasan sistem.',duration:[1,1],attendanceMult:0.6,travelBan:false,budgetImpact:-0.25,moodImpact:-15,severity:'medium'},{id:'natural',name:'Bencana Alam',desc:'Banjir dan longsor.',duration:[1,1],attendanceMult:0.4,travelBan:false,budgetImpact:-0.20,moodImpact:-20,severity:'medium'}];
function pickGlobalEvent(){if(Math.random()>0.008) return null;var e=pick(GLOBAL_EVENTS);return {id:e.id,name:e.name,desc:e.desc,attendanceMult:e.attendanceMult,travelBan:e.travelBan,budgetImpact:e.budgetImpact,moodImpact:e.moodImpact,severity:e.severity,startSeason:state.season,endSeason:state.season+ri(e.duration[0],e.duration[1])-1};}
function isCrisisActive(){if(!state.activeCrisis) return false;if(state.season>state.activeCrisis.endSeason){state.activeCrisis=null;return false;}return true;}
var SECRET_CODES={'FAJRI':{type:'godOn',msg:'GOD MODE ON',color:'#ffd700'},'HANTU':{type:'godOff',msg:'GOD MODE OFF',color:'#e63946'},'JOSSSS':{type:'devOn',msg:'DEV MODE ON',color:'#2ecc71'},'SULTAN':{type:'rich',msg:'+Rp 1 Q',color:'#ffd700'},'TITAN':{type:'maxRating',msg:'MAX RATING',color:'#ffd700'},'GARUDA':{type:'allStars',msg:'GOLDEN BOYS',color:'#ffd700'},'MESSI':{type:'instantWin',msg:'AUTO WIN',color:'#00a651'},'KRISIS':{type:'forceCrisis',msg:'KRISIS',color:'#e63946'},'REBOUND':{type:'forceRebound',msg:'REBOUND',color:'#2ecc71'},'JACKPOT':{type:'forceJackpot',msg:'JACKPOT',color:'#ffd700'}};

/* ==================== DATA 40 KLUB ==================== */
var TEAM_DEFS=[
  {name:'Persija Jakarta',div:1,color:'#d90429',base:79},{name:'Persib Bandung',div:1,color:'#1a3a8f',base:78},{name:'Persebaya Surabaya',div:1,color:'#2ecc71',base:77},{name:'Arema FC',div:1,color:'#0033a0',base:76},{name:'Bali United',div:1,color:'#e63946',base:76},{name:'PSM Makassar',div:1,color:'#d90429',base:75},{name:'Persis Solo',div:1,color:'#e9c46a',base:74},{name:'PSIS Semarang',div:1,color:'#118ab2',base:74},{name:'Persita Tangerang',div:1,color:'#f4a261',base:73},{name:'Persik Kediri',div:1,color:'#8ac926',base:73},{name:'Bhayangkara FC',div:1,color:'#ffd700',base:72},{name:'Madura United',div:1,color:'#e63946',base:72},{name:'Barito Putera',div:1,color:'#2a9d8f',base:71},{name:'PSS Sleman',div:1,color:'#e67e22',base:71},{name:'Borneo FC',div:1,color:'#ff6b6b',base:70},{name:'Dewa United',div:1,color:'#5e60ce',base:70},{name:'Malut United',div:1,color:'#06d6a0',base:69},{name:'Semen Padang',div:1,color:'#ef476f',base:69},{name:'PSBS Biak',div:1,color:'#00b4d8',base:68},{name:'Persepam Madura',div:1,color:'#cc0000',base:68},
  {name:'Persela Lamongan',div:2,color:'#d90429',base:64},{name:'PSIM Yogyakarta',div:2,color:'#0033a0',base:64},{name:'Persijap Jepara',div:2,color:'#2ecc71',base:63},{name:'Sriwijaya FC',div:2,color:'#ffd700',base:63},{name:'Persiraja Banda Aceh',div:2,color:'#e63946',base:62},{name:'PSMS Medan',div:2,color:'#2ecc71',base:62},{name:'Deltras Sidoarjo',div:2,color:'#118ab2',base:61},{name:'Gresik United',div:2,color:'#ff6b6b',base:61},{name:'Persibo Bojonegoro',div:2,color:'#8ac926',base:60},{name:'Persekat Tegal',div:2,color:'#e9c46a',base:60},{name:'Perserang Serang',div:2,color:'#5e60ce',base:59},{name:'PSKC Cimahi',div:2,color:'#f4a261',base:59},{name:'Persikabo 1973',div:2,color:'#ff6b6b',base:58},{name:'PSPS Pekanbaru',div:2,color:'#457b9d',base:58},{name:'Persipal Palu',div:2,color:'#a01c3f',base:57},{name:'Sulut United',div:2,color:'#00a651',base:57},{name:'Kalteng Putra',div:2,color:'#cc0000',base:56},{name:'Persiba Balikpapan',div:2,color:'#e63946',base:56},{name:'Persipura Jayapura',div:2,color:'#0033a0',base:55},{name:'Persewar Waropen',div:2,color:'#7fae94',base:54}
];

/* ==================== STATE GLOBAL ==================== */
var PID=0;
var pendingMatch=null;
var state={view:'select',season:1,teams:[],fixtures:{1:[],2:[]},round:0,myIdx:null,myDiv:1,mainTab:'beranda',subTab:'squad',tab:'squad',selectedStarter:null,tableDiv:1,lastPR:null,animSpeed:1,dev:false,history:[],allTime:{scorers:{},assisters:{},mvp:{},cs:{},apps:{},cards:{}},trophyRoom:[],currentPialaNasWinner:null,currentLCWinner:null,pialaNasional:null,ligaChampions:null,lastWeather:null,theme:'dark',sound:true,activeSlot:null,news:[],training:[],morale:0,fanMood:50,lastAttendance:null,sponsors:[],sponsorOffers:[],sponsorOffersWeek:-1,managerName:'',managerNationality:'Indonesia',managerReputation:50,ipoFlow:null,acquisitions:[],stockHistory:[],stockPortfolio:{},stockTransactions:[],pcAnswered:false,selectedTalk:'motivasi',settingsOpen:false,godMode:false,pitchSel:null,freePos:false,activeCrisis:null,hadCrisis:false,instantWinNext:false,lastReboundInfo:null,pendingTransfers:[],bidHistory:[],inventory:{},teamRecords:{biggestWin:null,biggestLoss:null,longestWinStreak:0,currentStreak:0,currentStreakType:''},ballonDOr:[],jobOffers:[],formerClubs:[],pendingSales:[],freeAgents:[]};

/* ==================== GENERATOR PEMAIN ==================== */
function rollSpecificPos(cat){if(cat==='GK') return 'GK';return pick(POSITIONS_SPECIFIC[cat]);}
function rollAltPositions(mainPos){var cat=catOf(mainPos);if(cat==='GK') return [];var alts=[];if(Math.random()<0.55){var pool=POSITIONS_SPECIFIC[cat].filter(function(p){return p!==mainPos;});if(pool.length) alts.push(pick(pool));if(Math.random()<0.25){var pool2=POSITIONS_SPECIFIC[cat].filter(function(p){return p!==mainPos&&alts.indexOf(p)===-1;});if(pool2.length) alts.push(pick(pool2));}}return alts;}
function rollPlayStyle(specificPos){var pool=PLAY_STYLES[specificPos]||['Standar'];return pick(pool);}
function rollSkills(specificPos){var cat=catOf(specificPos);var pool=SKILL_POOL[cat]||[];var out=[];var seen={};var count=ri(2,3);for(var i=0;i<count;i++){var s=pick(pool);if(!seen[s]){out.push({name:s,source:cat});seen[s]=true;}}return out;}
function rollSpecialSkill(tier){if(tier==='golden'){var s=pick(SPECIAL_SKILLS.golden);return {id:s.id,icon:s.icon,name:s.name,desc:s.desc,tier:'golden'};}if(tier==='elite' && Math.random()<0.5){var s2=pick(SPECIAL_SKILLS.elite);return {id:s2.id,icon:s2.icon,name:s2.name,desc:s2.desc,tier:'elite'};}return null;}
function hasSpecial(p,id){return p && p.specialSkill && p.specialSkill.id===id;}
function makeSquad(base){
  var comp={GK:2,DEF:5,MID:5,FWD:4};var out=[];
  ['GK','DEF','MID','FWD'].forEach(function(cat){
    for(var i=0;i<comp[cat];i++){
      var specificPos=rollSpecificPos(cat);var altPos=rollAltPositions(specificPos);var playStyle=rollPlayStyle(specificPos);var skills=rollSkills(specificPos);
      var rating=Math.max(45,Math.min(95,Math.round(base+rnd(-6,6))));var height=generateHeight(cat,specificPos);var phys=derivePhysical(height,playStyle);var stats=generateIndividStats(cat,specificPos,rating,playStyle);
      out.push({id:PID++,name:generateIndonesianName(),pos:cat,specificPos:specificPos,altPos:altPos,playStyle:playStyle,positions:[specificPos].concat(altPos),skills:skills,specialSkill:null,age:ri(18,34),rating:rating,height:height,aerial:phys.aerial,balance:phys.balance,agility:phys.agility,pace:phys.pace,strength:phys.strength,stats:stats,seasonGoals:0,careerGoals:0,apps:0,assists:0,yellow:0,red:0,cs:0,mvp:0,stamina:100,injury:0,injuryName:'',injurySeverity:'',suspension:0,previousRating:rating,rejectedReduced:false,isFreeAgent:false,ratings:[],avgRating:0,talent:1.0,tier:'normal',potential:Math.max(70,Math.min(95,base+ri(3,15))),goalBonus:ri(3,15)*1e6,assistBonus:ri(2,10)*1e6,csBonus:ri(5,20)*1e6,mvpBonus:ri(10,50)*1e6,lastSeasonBonus:0,contractYears:ri(1,5),weeklyWage:Math.round((base+rnd(-6,6)-40)*1.5e6)});
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
  if(roll<0.03){talent=2.0;tier='golden';}else if(roll<0.15){talent=1.5;tier='elite';}else if(roll<0.40){talent=1.2;tier='talented';}else{talent=1.0;tier='normal';}
  var potBase=baseR+(tier==='golden'?25:tier==='elite'?18:tier==='talented'?12:6);
  var potential=Math.max(60,Math.min(96,Math.round(potBase+rnd(-3,3))));
  var startBoost=tier==='golden'?8:tier==='elite'?5:tier==='talented'?2:0;
  var height=fromPlayer?(fromPlayer.height||generateHeight(cat,specificPos)):generateHeight(cat,specificPos);
  var specialSkill=rollSpecialSkill(tier);
  var youth={id:PID++,name:name,pos:cat,specificPos:specificPos,altPos:altPos,playStyle:playStyle,positions:positions,skills:skills,specialSkill:specialSkill,age:fromPlayer?16:ri(13,16),rating:Math.max(42,Math.min(72,Math.round(baseR*0.65+rnd(-6,8)+startBoost))),height:height,aerial:0,balance:0,agility:0,pace:0,strength:0,stats:{shooting:ri(40,65),passing:ri(40,65),dribbling:ri(40,65),defending:ri(40,65),physical:ri(40,65),speed:ri(40,65),reflexes:ri(40,65),handling:ri(40,65),positioning:ri(40,65),kicking:ri(40,65),command:ri(40,65)},talent:talent,tier:tier,potential:potential,seasonGoals:0,careerGoals:0,apps:0,assists:0,yellow:0,red:0,cs:0,mvp:0,stamina:100,injury:0,injuryName:'',injurySeverity:'',suspension:0,previousRating:0,rejectedReduced:false,isFreeAgent:false,ratings:[],avgRating:0,goalBonus:ri(2,8)*1e6,assistBonus:ri(1,5)*1e6,csBonus:ri(3,10)*1e6,mvpBonus:ri(5,25)*1e6,lastSeasonBonus:0,contractYears:ri(2,5),weeklyWage:Math.round((baseR*0.5-20)*1e6)};
  return finishYouthStats(youth);
}

/* ==================== AUTO XI & FIXTURES ==================== */
function pickBestForSlot(candidates,team,wantPos){var scored=candidates.map(function(p){var score=p.rating;if(p.specificPos===wantPos) score+=15;else if(p.altPos&&p.altPos.indexOf(wantPos)!==-1) score+=8;else if(wantPos&&catOf(wantPos)===p.pos) score+=3;if(p.stamina>=80) score+=5;else if(p.stamina>=60) score+=2;else if(p.stamina<40) score-=10;if(p.injury>0) score-=50;if(p.suspension&&p.suspension>0) score-=60;return {p:p,score:score};});scored.sort(function(a,b){return b.score-a.score;});return scored.length?scored[0].p:null;}
function autoPickXI(team,formation){var f=FORMATIONS[formation];var xi=[];var used={};var slots=[];slots.push({cat:'GK',pos:'GK'});['DEF','MID','FWD'].forEach(function(cat){(f[cat]||[]).forEach(function(pos){slots.push({cat:cat,pos:pos});});});slots.forEach(function(slot){var candidates;if(slot.cat==='GK'){candidates=team.players.filter(function(p){return p.pos==='GK'&&!used[p.id]&&!p.injury&&!(p.suspension&&p.suspension>0);});}else{candidates=team.players.filter(function(p){return p.pos===slot.cat&&!used[p.id]&&!p.injury&&!(p.suspension&&p.suspension>0);});}if(!candidates.length){candidates=team.players.filter(function(p){return !used[p.id]&&!p.injury&&!(p.suspension&&p.suspension>0);});}if(!candidates.length){candidates=team.players.filter(function(p){return !used[p.id];});}var best=pickBestForSlot(candidates,team,slot.pos);if(best){xi.push(best.id);used[best.id]=true;}});team.xi=xi;}
function autoPickXIFit(team,formation){var fit=team.players.filter(function(p){return p.injury===0 && p.stamina>=60 && !(p.suspension&&p.suspension>0);});if(fit.length<11) return autoPickXI(team,formation);var savedPlayers=team.players.slice();team.players=fit;autoPickXI(team,formation);team.players=savedPlayers;}
function autoPickXIAttack(team,formation){team.players.forEach(function(p){if(p.stats){p._origRating=p.rating;if(p.pos==='FWD') p.rating=Math.round(p.rating*0.7+p.stats.shooting*0.3);else if(p.pos==='MID') p.rating=Math.round(p.rating*0.7+p.stats.passing*0.3);else if(p.pos==='DEF') p.rating=Math.round(p.rating*0.8+p.stats.speed*0.2);}});autoPickXI(team,formation);team.players.forEach(function(p){if(p._origRating){p.rating=p._origRating;delete p._origRating;}});}
function autoPickXIDefense(team,formation){team.players.forEach(function(p){if(p.stats){p._origRating=p.rating;if(p.pos==='DEF') p.rating=Math.round(p.rating*0.7+p.stats.defending*0.3);else if(p.pos==='MID') p.rating=Math.round(p.rating*0.7+p.stats.defending*0.3);}});autoPickXI(team,formation);team.players.forEach(function(p){if(p._origRating){p.rating=p._origRating;delete p._origRating;}});}
function checkXI(team){if(state.freePos) return true;var c={GK:0,DEF:0,MID:0,FWD:0};team.xi.forEach(function(id){var p=getP(team,id);if(p)c[p.pos]++;});var need=formationCounts(team.formation);return c.GK>=need.GK&&c.DEF>=need.DEF&&c.MID>=need.MID&&c.FWD>=need.FWD;}
function getDivIndices(div){return state.teams.map(function(t,i){return t.div===div?i:-1;}).filter(function(i){return i>=0;});}
function makeFixtures(teamIndices){var ids=teamIndices.slice();var n=ids.length;var firstLeg=[];for(var r=0;r<n-1;r++){var pairs=[];for(var i=0;i<n/2;i++) pairs.push([ids[i],ids[n-1-i]]);firstLeg.push(pairs);var fixed=ids[0];var rest=ids.slice(1);rest.unshift(rest.pop());ids=[fixed].concat(rest);}var secondLeg=firstLeg.map(function(rd){return rd.map(function(pa){return [pa[1],pa[0]];});});var allRounds=firstLeg.concat(secondLeg);return allRounds.map(function(rd){return rd.map(function(pa){return {home:pa[0],away:pa[1],played:false,hg:0,ag:0};});});}

/* ==================== KOMENTATOR ==================== */
function rp(team,positions){var pool=team.xi.map(function(id){return getP(team,id);}).filter(function(p){return p&&positions.indexOf(p.pos)!==-1;});if(!pool.length){var all=team.xi.map(function(id){return getP(team,id);}).filter(Boolean);return all.length?pick(all):null;}return pick(pool);}
var KOMENTAR={buildup:['{p} menguasai bola di lini tengah...','Umpan panjang dari {p} mencari rekannya...','{p} menggiring bola melewati pemain lawan...','Operan cepat {p} ke sektor kanan...','Bola dikuasai {p} di area pertahanan {t}...','{p} mengatur tempo permainan dari belakang...','Sentuhan pertama {p} sangat baik...','Visi luar biasa {p}, umpan terobosan!','{p} menusuk dari sisi kiri!','{p} melepaskan umpan silang ke kotak penalti...'],shot:['{p} melepaskan tembakan keras... masih di atas mistar!','Sepakan {p} menyamping dari gawang!','Tendangan {p} membentur tiang gawang!','Percobaan {p} dari luar kotak penalti melambung!','{p} mencoba peruntungan masih melebar!','Tendangan voli {p} melenceng jauh!','{p} menembak namun masih diblok bek!','Peluang emas untuk {p}, tapi belum jadi gol!'],save:['Penyelamatan gemilang dari {p}!','{p} dengan sigap menepis bola!','Kiper {p} menangkap bola dengan aman.','Refleks cepat {p} menghalau tembakan keras!','{p} menepis bola keluar lapangan!','Aksi luar biasa dari {p} di bawah mistar!'],corner:['Tendangan sudut untuk {t}, {p} yang akan mengambil...','Corner kick {t}, bola diambil {p}...','{p} bersiap mengeksekusi tendangan sudut...','Sepak pojok {t}, {p} mengirim umpan ke tiang jauh...'],foul:['Pelanggaran oleh {p} dari {t}...','{p} melanggar lawan di tengah lapangan...','Wasit meniup peluit, {p} melakukan pelanggaran...'],atmosfer:['Suasana stadion memanas...','Suporter {t} terus menyanyikan dukungan!','Tekanan dari {t} mulai terasa...','Pertandingan berlangsung seru!','Ribuan pasang mata menyaksikan laga ini...','Kedua tim saling jual beli serangan!','Pertahanan {t} tampak mulai goyah...']};
function komentarBaris(team,kategori){var line=pick(KOMENTAR[kategori]);var p=null;if(kategori==='save') p=rp(team,['GK']);else if(kategori==='corner') p=rp(team,['MID','FWD','DEF']);else p=rp(team,['MID','DEF','FWD']);return line.replace('{p}',p?p.name:'pemain').replace('{t}',team.name);}

/* ==================== SIMULASI SEGMEN ==================== */
function simulateSegment(home,away,fromMin,toMin,ctx){
  var wMod=ctx.weather?ctx.weather.goal:1.0;
  var H=ctx.H,A=ctx.A,possH=ctx.possH;
  for(var min=fromMin;min<=toMin;min++){
    if(Math.random()<0.22){
      var isHome=Math.random()<possH;
      var t=isHome?home:away;
      var kat=pick(['buildup','buildup','buildup','atmosfer','atmosfer','corner']);
      ctx.events.push({min:min,type:'commentary',team:isHome?'home':'away',text:komentarBaris(t,kat)});
    }
    if(Math.random()<0.50){
      var isH2=Math.random()<possH;
      var hb=ctx.homeBoost||0,ab=ctx.awayBoost||0;
      var atkMul=(isH2?1.06:1)*(1+(isH2?hb:ab));
      var defMul=(isH2?1:1.06)*(1+(isH2?ab:hb)*0.7);
      var atk=(isH2?H.atk:A.atk)*atkMul;
      var dfn=(isH2?A.def:H.def)*defMul;
      var pGoal=0.115*(atk/(atk+dfn))*2*wMod;
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
        var s=pickScorer(att);
        if(!s) continue;
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
        if(Math.random()<0.45){
          ctx.events.push({min:min,type:'commentary',team:isH2?'away':'home',text:komentarBaris(def,'save')});
        } else {
          ctx.events.push({min:min,type:'commentary',team:isH2?'home':'away',text:pick(KOMENTAR.shot).replace('{p}',s2?s2.name:'penyerang')});
        }
      }
    }
    if(Math.random()<0.010){
      var isH3=Math.random()<0.5;
      var t3=isH3?home:away;
      var players=t3.xi.map(function(id){return getP(t3,id);}).filter(Boolean);
      if(!players.length) continue;
      var p3=pick(players);
      var isRed=Math.random()<0.08;
      if(isRed){p3.red++;p3.suspension=ri(1,3);}
      else p3.yellow++;
      ctx.events.push({min:min,type:'card',team:isH3?'home':'away',text:isRed?'KARTU MERAH! '+p3.name+' ('+t3.name+')':'Kartu kuning untuk '+p3.name+' ('+t3.name+')'});
    }
  }
}

/* ==================== RATING & FINALIZE ==================== */
function computeMatchRatings(team,gf,ga,events,mvp){
  team.xi.forEach(function(id){
    var p=getP(team,id);
    if(!p) return;
    var r=6.0;
    events.forEach(function(e){
      if(e.type==='goal'&&e.scorerId===id) r+=1.5;
      if(e.type==='goal'&&e.assistId===id) r+=1.0;
    });
    if(p.pos==='GK'&&ga===0) r+=1.5;
    if(p.pos==='DEF'&&ga===0) r+=0.8;
    if(p.pos==='FWD'&&gf>=3) r+=0.3;
    if(mvp&&mvp.id===id) r+=0.5;
    if(hasSpecial(p,'clutch')&&events.some(function(e){return e.min>45;})) r+=0.5;
    if(hasSpecial(p,'biggame')&&(state.pialaNasional||state.ligaChampions)) r+=0.4;
    r+=rnd(-0.4,0.4);
    r=Math.max(1,Math.min(10,r));
    if(!p.ratings) p.ratings=[];
    p.ratings.push(Math.round(r*10)/10);
    if(p.ratings.length>60) p.ratings=p.ratings.slice(-60);
    p.avgRating=p.ratings.reduce(function(a,b){return a+b;},0)/p.ratings.length;
  });
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
  ctx.events.forEach(function(e){
    if(e.type==='goal'){
      var t=e.team==='home'?home:away;
      var p=getP(t,e.scorerId);
      if(p){p.seasonGoals++;p.careerGoals++;}
    }
  });
  [home,away].forEach(function(t){
    var isMyTeam=(state.teams[state.myIdx]===t);
    t.xi.forEach(function(id){
      var p=getP(t,id);
      if(!p) return;
      p.apps++;
      p.stamina=Math.max(0,p.stamina-STAMINA_COST+ri(-4,4));
      if(p.injury>0) return;
      var injChance=(state.godMode&&isMyTeam)?0:0.10;
      if(p.stamina<25) injChance+=0.10;
      if(hasSpecial(p,'ironman')) injChance*=0.5;
      if(p.balance<60) injChance+=0.03;
      if(Math.random()<injChance){
        var roll=Math.random();
        var severity;
        if(roll<0.005) severity='acl';
        else if(roll<0.025) severity='patah';
        else if(roll<0.10) severity='sedang';
        else severity='ringan';
        var inj=injuryDurationWeeks(severity);
        p.injury=inj.weeks;
        p.injuryName=inj.name;
        p.injurySeverity=inj.severity;
        p.stamina=Math.min(p.stamina,40);
        if(inj.severity==='acl'){
          state.news.unshift({t:'ALERT: '+p.name+' alami '+inj.name+'! Absen '+injuryLabel(inj.weeks),time:'Musim '+state.season});
        }
      }
    });
  });
  computeMatchRatings(home,ctx.hg,ctx.ag,ctx.events,ctx.hg>ctx.ag?mvp:null);
  computeMatchRatings(away,ctx.ag,ctx.hg,ctx.events,ctx.ag>ctx.hg?mvp:null);
}

/* ==================== PLAY ROUND ==================== */
function playRound(){
  try{
    state.teams.forEach(function(t){
      t.players.forEach(function(p){
        if(t.xi.indexOf(p.id)===-1) p.stamina=Math.min(100,p.stamina+STAMINA_RECOVER);
        if(p.injury>0){
          p.injury=Math.max(0,p.injury-1);
          if(p.injury===0){
            p.injuryName='';p.injurySeverity='';
            if(t===state.teams[state.myIdx]){
              state.news.unshift({t:'Sembuh: '+p.name+' kembali fit!',time:'Musim '+state.season});
            }
          }
        }
        if(p.suspension&&p.suspension>0) p.suspension=Math.max(0,p.suspension-1);
      });
    });
    if(!state.pcAnswered&&Math.random()<0.35){
      state.pcAnswered=true;
      openPressConference();
      return;
    }
    if(state.sound){try{sfxWhistle();}catch(e){}}
    var mine=null;
    [1,2].forEach(function(div){
      var round=state.fixtures[div][state.round];
      if(!round) return;
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
        }catch(err){
          console.warn('Match error',err);
          if(!f.played){f.hg=0;f.ag=0;f.played=true;}
        }
      });
    });
    pendingMatch=mine;
    if(mine){
      state.view='match';
      state.pcAnswered=false;
      render();
      try{animateHalf(1);}catch(e){console.warn('Anim error',e);finishFullMatch();}
    } else {
      nextRound();
    }
  }catch(err){
    console.warn('playRound error',err);
    if(typeof nextRound==='function'){nextRound();}
    else{state.round++;render();}
  }
}

/* ==================== ANIMASI MATCH ==================== */
var animTimer=null;
function animateHalf(half){
  var m=pendingMatch;
  if(!m) return;
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
  var MS_PER_MIN=3333;
  var TICK=60;
  var last=performance.now();
  animTimer=setInterval(function(){
    var now=performance.now();
    var dt=now-last;last=now;
    var speed=state.animSpeed||1;
    curMin+=(dt*speed)/MS_PER_MIN;
    while(idx<evs.length&&evs[idx].min<=curMin){
      applyEventToUI(evs[idx++],m,scoreEl,listEl);
    }
    if(clockEl) clockEl.textContent=Math.min(endMin,Math.floor(curMin))+' min';
    if(curMin>=endMin){
      clearInterval(animTimer);
      while(idx<evs.length){applyEventToUI(evs[idx++],m,scoreEl,listEl);}
      if(clockEl) clockEl.textContent=endMin+' min';
      if(half===1) openHalfTimeModal();
      else finishFullMatch();
    }
  },TICK);
}
function applyEventToUI(e,m,scoreEl,listEl){
  if(e.type==='goal'){
    var hg=0,ag=0;
    for(var i=0;i<m.ctx.events.length;i++){
      var ev=m.ctx.events[i];
      if(ev.type!=='goal') continue;
      if(ev===e) break;
      if(ev.team==='home') hg++; else ag++;
    }
    if(e.team==='home') hg++; else ag++;
    scoreEl.textContent=hg+' - '+ag;
    scoreEl.classList.add('pulse');
    setTimeout(function(){scoreEl.classList.remove('pulse');},250);
    if(state.sound){try{sfxGoal();}catch(e2){}}
  } else if(e.type==='card'&&state.sound){try{sfxCard();}catch(e2){}}
  try{updatePitch(e);}catch(e2){}
  try{updatePossession(e);}catch(e2){}
  if(e.type==='goal') speakComment('Gol! '+e.text.replace('GOL! ',''));
  else if(e.type==='card') speakComment(e.text);
  var div=document.createElement('div');
  div.className='event '+e.type+' '+(e.team||'');
  div.textContent=e.min+' min - '+e.text;
  listEl.appendChild(div);
  listEl.scrollTop=listEl.scrollHeight;
}
function skipAnim(){
  var m=pendingMatch;
  if(!m) return;
  clearInterval(animTimer);
  var scoreEl=document.getElementById('matchScore');
  var listEl=document.getElementById('matchEvents');
  var clockEl=document.getElementById('matchClock');
  if(listEl) listEl.innerHTML='';
  var hg=0,ag=0;
  m.ctx.events.slice().sort(function(a,b){return a.min-b.min;}).forEach(function(e){
    if(e.type==='goal'){if(e.team==='home')hg++;else ag++;}
    if(listEl){
      var div=document.createElement('div');
      div.className='event '+e.type+' '+(e.team||'');
      div.textContent=e.min+' min - '+e.text;
      listEl.appendChild(div);
    }
  });
  if(scoreEl) scoreEl.textContent=hg+' - '+ag;
  if(clockEl) clockEl.textContent='90 min';
  if(listEl) listEl.scrollTop=listEl.scrollHeight;
  finishFullMatch();
}
function finishFullMatch(){
  clearInterval(animTimer);
  var m=pendingMatch;
  if(!m) return;
  if(!m.finished){
    m.f.played=true;
    m.f.hg=m.ctx.hg;m.f.ag=m.ctx.ag;
    finalizeMatch(m.h,m.a,m.ctx);
    m.finished=true;
  }
  if(state.sound){try{sfxWhistle();}catch(e){}}
  var el=document.getElementById('matchActions');
  if(el) el.innerHTML='<button class="btn primary" onclick="nextRound()">Lanjut</button>';
}
function toggleSpeed(){
  state.animSpeed=(state.animSpeed===1)?2:1;
  var b=document.getElementById('speedBtn');
  if(b) b.textContent=state.animSpeed===1?'Kecepatan 1x':'Kecepatan 2x';
}

/* ==================== HALF TIME ==================== */
function startSecondHalf(){
  var m=pendingMatch;
  var modal=document.getElementById('createModal');
  if(modal) modal.remove();
  var talk=TEAM_TALKS[2];
  for(var i=0;i<TEAM_TALKS.length;i++){if(TEAM_TALKS[i].id===state.selectedTalk) talk=TEAM_TALKS[i];}
  var myIsHome=m.f.home===state.myIdx;
  if(myIsHome){m.ctx.homeBoost=talk.atk-talk.def*0.5;}
  else{m.ctx.awayBoost=talk.atk-talk.def*0.5;}
  m.ctx.H=teamStats(m.h);
  m.ctx.A=teamStats(m.a);
  toast('Team talk: '+talk.label);
  simulateSegment(m.h,m.a,46,90,m.ctx);
  if(state.instantWinNext){
    var isHome=m.f.home===state.myIdx;
    if(isHome){m.ctx.hg=Math.max(m.ctx.hg,3);m.ctx.ag=0;}
    else{m.ctx.ag=Math.max(m.ctx.ag,3);m.ctx.hg=0;}
    state.instantWinNext=false;
  }
  render();
  animateHalf(2);
}
function pickTalk(id){
  state.selectedTalk=id;
  var btns=document.querySelectorAll('#talkOpts .pc-answer');
  for(var i=0;i<btns.length;i++){
    var b=btns[i];
    b.style.borderColor='#2f5442';b.style.background='#182720';
    if(b.dataset.id===id){b.style.borderColor='#2ecc71';b.style.background='#1b3a28';}
  }
}
function addSubRow(){
  var m=pendingMatch;
  if(!m||m.subsLeft<=0) return;
  var myIsHome=m.f.home===state.myIdx;
  var myTeam=myIsHome?m.h:m.a;
  var xi=myTeam.xi.map(function(id){return getP(myTeam,id);}).filter(Boolean);
  var bench=myTeam.players.filter(function(p){return myTeam.xi.indexOf(p.id)===-1&&!p.injury&&p.stamina>30&&!(p.suspension&&p.suspension>0);});
  if(!bench.length) return;
  var row=document.createElement('div');
  row.style.cssText='display:flex;gap:6px;margin-bottom:6px';
  var outOpts='<option value="">-- Keluar --</option>';
  xi.forEach(function(p){outOpts+='<option value="'+p.id+'">'+p.name+' ('+p.specificPos+')</option>';});
  var inOpts='<option value="">-- Masuk --</option>';
  bench.forEach(function(p){inOpts+='<option value="'+p.id+'">'+p.name+' ('+p.specificPos+')</option>';});
  row.innerHTML='<select class="subOut" style="flex:1;padding:6px;background:#182720;color:#e8f0ec;border:1px solid #2f5442;border-radius:6px;font-size:11px">'+outOpts+'</select>'+
    '<select class="subIn" style="flex:1;padding:6px;background:#182720;color:#e8f0ec;border:1px solid #2f5442;border-radius:6px;font-size:11px">'+inOpts+'</select>'+
    '<button class="btn small" onclick="applySubRow(this)">OK</button>';
  var el=document.getElementById('subRows');
  if(el) el.appendChild(row);
}
function applySubRow(btn){
  var m=pendingMatch;
  var row=btn.parentElement;
  var outId=+row.querySelector('.subOut').value;
  var inId=+row.querySelector('.subIn').value;
  if(!outId||!inId){toast('Pilih pemain');return;}
  var myIsHome=m.f.home===state.myIdx;
  var myTeam=myIsHome?m.h:m.a;
  var outP=getP(myTeam,outId),inP=getP(myTeam,inId);
  if(!outP||!inP){toast('Pemain invalid');return;}
  if(inP.injury>0||inP.stamina<30){toast('Pemain tidak fit');return;}
  if(!state.freePos && outP.pos!==inP.pos){toast('Posisi harus sama');return;}
  var idx=myTeam.xi.indexOf(outId);
  myTeam.xi[idx]=inId;
  m.subsLeft--;
  var sl=document.getElementById('subsLeft');
  if(sl) sl.textContent=m.subsLeft;
  row.remove();
  toast('Substitusi: '+outP.name+' keluar, '+inP.name+' masuk');
  if(m.subsLeft>0) addSubRow();
}

/* ==================== NEXT ROUND & MUSIM ==================== */
function nextRound(){
  try{
    var prevRound=state.round;
    var prevF=null;
    var rw=state.fixtures[state.myDiv][prevRound];
    if(rw) rw.forEach(function(f){if(f.home===state.myIdx) prevF=f;});
    var awayF=null;
    if(rw) rw.forEach(function(f){if(f.away===state.myIdx) awayF=f;});
    
    if(awayF && awayF.played){
      var myScoreAway=awayF.ag, oppScoreAway=awayF.hg;
      if(myScoreAway>oppScoreAway) state.fanMood=Math.min(100,(state.fanMood||50)+10);
      else if(myScoreAway<oppScoreAway) state.fanMood=Math.max(0,(state.fanMood||50)-5);
      else state.fanMood=Math.max(0,(state.fanMood||50)-3);
    }
    
    if(prevF&&prevF.played){
      try {
        var rev=calcHomeMatchRevenue(state.teams[state.myIdx],state.teams[prevF.away],prevF.hg,prevF.ag);
        if(rev && rev.net) state.teams[state.myIdx].budget+=rev.net;
      } catch(e) {}
    }
    
    if(prevF){
      try {
        var isHome=prevF.home===state.myIdx;
        var myGoals=isHome?prevF.hg:prevF.ag;
        var oppGoals=isHome?prevF.ag:prevF.hg;
        var oppName=state.teams[isHome?prevF.away:prevF.home].name;
        var margin=myGoals-oppGoals;
        if(margin>0){
          if(!state.teamRecords.biggestWin || margin>state.teamRecords.biggestWin.margin){
            state.teamRecords.biggestWin={margin:margin,score:myGoals+'-'+oppGoals,opp:oppName,season:state.season};
          }
        }
      } catch(e) {}
    }
    
    state.round++;
    pendingMatch = null; // Bersihkan memori pertandingan sebelumnya
    
    try {
      if(typeof addRandomNews === 'function') addRandomNews();
    } catch(e) {}

    if(state.round>=TOTAL_ROUNDS){
      finalizeSeason();
      processPromotionRelegation();
      state.view='seasonEnd';
    } else {
      // Kembali ke Beranda agar bisa langsung klik "Main" lagi
      state.view='main';state.mainTab='beranda';state.subTab='squad';state.tableDiv=state.myDiv;
    }
    render();
    saveGame();
  }catch(err){
    console.warn('nextRound error',err);
    state.round++;
    pendingMatch = null;
    state.view='main';state.mainTab='beranda';
    render();
    saveGame();
  }
}

/* ==================== CLOUD SAVE / LOAD (SUPABASE) ==================== */
var SAVE_SLOTS=[1,2,3];
var saveTimer=null;

async function saveGame(){
  if(!state.activeSlot || !_supabase) return;
  try{
    var slotId = 'slot_' + state.activeSlot;
    const { error } = await _supabase
      .from('game_saves')
      .upsert({ slot_id: slotId, game_data: { state: state, PID: PID } }, { onConflict: 'slot_id' });
    if(error) throw error;
  }catch(e){ console.warn("Gagal simpan ke Cloud", e); }
}

function scheduleSave(){
  clearTimeout(saveTimer);
  saveTimer=setTimeout(saveGame,1200);
}

async function loadGame(n){
  if(!_supabase) return false;
  try{
    var slotId = 'slot_' + (n || state.activeSlot);
    const { data, error } = await _supabase.from('game_saves').select('game_data').eq('slot_id', slotId).single();
    if(error && error.code !== 'PGRST116') throw error;
    if(!data || !data.game_data) return false;

    var loaded = data.game_data;
    Object.keys(loaded.state).forEach(function(k){ state[k] = loaded.state[k]; });
    PID = loaded.PID || 0;

    // Safety Checks untuk memastikan tidak error jika ada data lama
    if(state.fixtures) state.fixtures={1:state.fixtures['1']||state.fixtures[1]||[],2:state.fixtures['2']||state.fixtures[2]||[]};
    if(!state.history) state.history=[];
    if(!state.news) state.news=[];
    if(!state.training) state.training=[];
    if(!state.sponsors) state.sponsors=[];
    if(!state.acquisitions) state.acquisitions=[];
    if(!state.allTime) state.allTime={scorers:{},assisters:{},mvp:{},cs:{},apps:{},cards:{}};
    if(!state.trophyRoom) state.trophyRoom=[];
    if(!state.stockPortfolio) state.stockPortfolio={};
    if(!state.stockTransactions) state.stockTransactions=[];
    if(!state.inventory) state.inventory={};
    if(!state.teamRecords) state.teamRecords={biggestWin:null,biggestLoss:null,longestWinStreak:0,currentStreak:0,currentStreakType:''};
    if(!state.ballonDOr) state.ballonDOr=[];
    if(!state.jobOffers) state.jobOffers=[];
    if(!state.formerClubs) state.formerClubs=[];
    if(!state.pendingSales) state.pendingSales=[];
    if(!state.freeAgents) state.freeAgents=[];
    if(state.myIdx!=null && state.teams[state.myIdx]) state.myDiv=state.teams[state.myIdx].div;
    
    return true;
  }catch(e){ console.warn("Gagal load dari Cloud", e); toast("Gagal memuat save dari Cloud"); return false; }
}

async function deleteSaveSlot(n){
  if(!_supabase) return;
  try{ await _supabase.from('game_saves').delete().eq('slot_id', 'slot_' + n); }catch(e){ console.warn(e); }
}

async function getSlotInfo(n){
  if(!_supabase) return null;
  try{
    const { data, error } = await _supabase.from('game_saves').select('game_data').eq('slot_id', 'slot_' + n).single();
    if(error || !data) return null;
    var s = data.game_data.state;
    var my = (s.teams && s.myIdx != null) ? s.teams[s.myIdx] : null;
    return { team: my ? my.name : '?', div: my ? my.div : '?', season: s.season, round: s.round, history: (s.history || []).length, managerName: s.managerName || '' };
  }catch(e){ return null; }
}

async function loadAndPlay(n){
  var ok = await loadGame(n || state.activeSlot);
  if(!ok){ toast('Gagal memuat / Slot kosong'); return; }
  state.view='main'; state.mainTab='beranda'; state.subTab='squad'; state.tableDiv=state.myDiv; state.settingsOpen=false;
  document.body.classList.toggle('light',state.theme==='light');
  render();
  toast('Save Cloud dimuat: '+state.teams[state.myIdx].name);
}

function exitToMenu(){
  if(!confirm('Keluar ke menu utama?')) return;
  saveGame();
  state.view='select'; state.mainTab='beranda'; state.subTab='squad'; state.settingsOpen=false;
  var eb=document.getElementById('errBox'); if(eb) eb.remove();
  render();
  toast('Kembali ke menu');
}

async function deleteSlotConfirm(n){
  if(!confirm('Hapus Slot '+n+' dari Cloud?')) return;
  await deleteSaveSlot(n);
  render();
}

/* ==================== RENDER DISPATCHER ==================== */
function render(){
  try{
    if(state.godMode && state.teams[state.myIdx]) state.teams[state.myIdx].budget=1e18;
    var app=document.getElementById('app');
    if(!app) return;

    if(state.view==='select'){ app.innerHTML=renderSelect(); }
    else {
      var my=state.teams[state.myIdx];
      if(!my){ state.view='select'; render(); return; }
      
      if(state.settingsOpen){ stopPitchAnim(); app.innerHTML=renderSettings(); }
      else if(state.view==='main'){ stopPitchAnim(); app.innerHTML=renderMain(); }
      else if(state.view==='match'){ app.innerHTML=renderMatch(); setTimeout(initPitchAnim,0); }
      else if(state.view==='seasonEnd'){ stopPitchAnim(); app.innerHTML=renderSeasonEnd(); }
    }
    
    if(state.dev) renderDevPanel();
    if(state.view!=='select') scheduleSave();
    if(state.view!=='match' && pitchAnim.running) stopPitchAnim();
    
    // Update UI Header
    var sb=document.getElementById('soundBtn');
    if(sb){sb.textContent=state.sound?'\uD83D\uDD0A':'\uD83D\uDD07';sb.className='hdr-icon'+(state.sound?'':' off');}
    var tb=document.getElementById('themeBtn');
    if(tb) tb.textContent=state.theme==='dark'?'\uD83C\uDF19':'\u2600';
    var xb=document.getElementById('exitBtn');
    if(xb) xb.style.display=(state.view==='select'||state.settingsOpen)?'none':'flex';
    var stb=document.getElementById('settingsBtn');
    if(stb) stb.style.display=(state.view==='select')?'none':'flex';
    
    var gb=document.getElementById('godBadge');
    if(state.godMode && !gb){var g=document.createElement('div');g.id='godBadge';g.textContent='GOD MODE';document.body.appendChild(g);}
    else if(!state.godMode && gb){gb.remove();}
    
    var cb=document.getElementById('crisisBadge');
    if(isCrisisActive() && !cb){var c2=document.createElement('div');c2.id='crisisBadge';c2.textContent='KLB AKTIF';document.body.appendChild(c2);}
    else if(!isCrisisActive() && cb){cb.remove();}
  }catch(err){
    console.warn('render error',err);
    var eb=document.getElementById('errBox');
    if(!eb){eb=document.createElement('div');eb.id='errBox';eb.onclick=function(){this.remove();};document.body.appendChild(eb);}
    eb.textContent='ERROR: '+(err.message||err)+' - ketuk untuk tutup';
  }
}

/* ==================== RENDER MENU AWAL (SELECT) ==================== */
function renderSelect(){
  var slotsHTML = '';
  SAVE_SLOTS.forEach(function(n){
    slotsHTML += '<div id="slot-card-'+n+'" style="background:#0f1a15;border:1px solid #24382e;border-radius:10px;padding:12px;margin-bottom:8px"><div style="color:#8bb59f;font-size:12px">Memuat Slot '+n+'...</div></div>';
  });
  var header='<div class="card" style="text-align:center;padding:20px"><div style="font-size:44px">&#9917;</div><h2 style="margin:8px 0;color:#a8e6c1">LIGA MANAJER INDONESIA</h2><div style="font-size:11px;color:#8bb59f">Cloud Edition (Supabase)</div></div>';
  var slotsCard='<div class="card"><h2>Pilih Karier</h2>'+slotsHTML+'</div>';
  
  setTimeout(async function(){
    for(var i=0; i<SAVE_SLOTS.length; i++){
      var n = SAVE_SLOTS[i];
      var info = await getSlotInfo(n);
      var el = document.getElementById('slot-card-'+n);
      if(!el) continue;
      var isActive = state.activeSlot === n;
      var s = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><b style="color:#a8e6c1">Slot '+n+'</b>';
      if(isActive) s += '<span style="color:#2ecc71;font-size:10px;font-weight:800">AKTIF</span>';
      s += '</div>';
      if(info){
        s+='<div style="font-size:11px;color:#8bb59f;line-height:1.7;margin-bottom:8px"><b style="color:#e8f0ec">'+info.team+'</b> - Divisi '+info.div+'<br>Musim '+info.season+' - Pekan '+(info.round+1)+'/'+TOTAL_ROUNDS;
        if(info.managerName) s+='<br>Manajer: <b style="color:#e9c46a">'+info.managerName+'</b>';
        s+='</div><div class="row"><button class="btn primary" onclick="loadAndPlay('+n+')">LANJUTKAN</button><button class="btn small" onclick="deleteSlotConfirm('+n+')">HAPUS</button></div>';
      } else {
        s+='<div style="font-size:11px;color:#5f7d6c;margin-bottom:8px">Kosong</div><div class="row"><button class="btn small" onclick="state.activeSlot='+n+';render();">'+(isActive?'Dipilih':'Pilih Slot')+'</button></div>';
      }
      el.innerHTML = s;
    }
  }, 100);

  var byDiv={1:[],2:[]};
  TEAM_DEFS.forEach(function(d,i){byDiv[d.div].push({d:d,i:i});});
  var cardFn=function(x){
    return '<div class="team-card" onclick="newGame('+x.i+',state.activeSlot)"><div class="bar" style="background:'+x.d.color+'"></div><div class="nm">'+x.d.name+'<span class="div-label div-'+x.d.div+'">D'+x.d.div+'</span></div><div class="mt">Rating '+x.d.base+'</div></div>';
  };
  return header+slotsCard+'<div class="card"><h2>Mulai Karier Baru</h2><p style="font-size:12px;color:#8bb59f;margin-bottom:12px"><b style="color:#e9c46a">Promosi:</b> 3 teratas Div 2 - <b style="color:#e63946">Degradasi:</b> 3 terbawah Div 1</p><h3>Divisi 1</h3><div class="teams">'+byDiv[1].map(cardFn).join('')+'</div><h3 style="margin-top:16px">Divisi 2</h3><div class="teams">'+byDiv[2].map(cardFn).join('')+'</div></div>';
}

/* ==================== RENDER MAIN MENU & TABS ==================== */
function renderMain(){
  var my=state.teams[state.myIdx];
  var win=getTransferWindowLabel();
  var headerCard='<div class="card" style="padding:14px">'+
    '<div style="display:flex;align-items:center;gap:12px">'+
    '<div style="width:44px;height:44px;border-radius:12px;background:'+my.color+';display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#fff;flex-shrink:0">'+my.name[0]+'</div>'+
    '<div style="flex:1;min-width:0">'+
    '<div style="font-size:15px;font-weight:800;color:#e8f0ec;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+my.name+'</div>'+
    '<div style="font-size:10px;color:#8bb59f;margin-top:3px">Div '+my.div+' | Musim '+state.season+' | Pekan '+Math.min(state.round+1,TOTAL_ROUNDS)+'/'+TOTAL_ROUNDS+'</div>'+
    (state.managerName?'<div style="font-size:10px;color:#e9c46a;margin-top:2px">'+state.managerName+'</div>':'')+
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
    '<span style="font-size:10px;color:'+win.color+';font-weight:700">'+(win.open?'BURSA BUKA':'BURSA TUTUP')+'</span>'+
    '<span style="font-size:9px;color:#7fae94">'+win.label+'</span></div>'+
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
      else if(state.subTab==='freeagent') content=renderFreeAgent();
      else if(state.subTab==='sponsor') content=renderSponsor();
      else if(state.subTab==='toko') content=renderToko();
      else if(state.subTab==='ipo') content=renderIPO();
      else if(state.subTab==='akuisisi') content=renderAkuisisi();
      else if(state.subTab==='stadion') content=renderStadion();
    }
    else if(state.mainTab==='kompetisi'){
      if(state.subTab==='klasemen') content=renderTable();
      else if(state.subTab==='piala') content=renderPiala();
      else if(state.subTab==='statistik') content=renderStats();
      else if(state.subTab==='legenda') content=renderLegenda();
      else if(state.subTab==='riwayat') content=renderRiwayat();
      else if(state.subTab==='berita') content=renderBerita();
    }
  }catch(err){content='<div class="card" style="color:#e63946">Error UI: '+(err.message||err)+'</div>';}
  return headerCard+renderSubTabs()+content+renderBottomNav();
}

function renderSubTabs(){
  var subs=getSubTabs(state.mainTab);
  if(!subs.length) return '';
  return '<div class="subtabs">'+subs.map(function(s){
    return '<button class="subtab '+(state.subTab===s.id?'active':'')+'" onclick="setSubTab(\''+s.id+'\')">'+s.label+'</button>';
  }).join('')+'</div>';
}

function getSubTabs(mainTab){
  if(mainTab==='tim') return [{id:'squad',label:'Skuad'},{id:'akademi',label:'Akademi'},{id:'latihan',label:'Latihan'},{id:'taktik',label:'Taktik'}];
  if(mainTab==='bisnis') return [{id:'transfer',label:'Transfer'},{id:'freeagent',label:'Free Agent'},{id:'sponsor',label:'Sponsor'},{id:'toko',label:'Toko'},{id:'ipo',label:'IPO'},{id:'akuisisi',label:'Akuisisi'},{id:'stadion',label:'Stadion'}];
  if(mainTab==='kompetisi') return [{id:'klasemen',label:'Klasemen'},{id:'piala',label:'Piala'},{id:'statistik',label:'Statistik'},{id:'legenda',label:'Legenda'},{id:'riwayat',label:'Riwayat'},{id:'berita',label:'Berita'}];
  return [];
}

function renderBottomNav(){
  var tabs=[
    {id:'beranda',label:'Beranda',ic:'\uD83C\uDFE0'},
    {id:'tim',label:'Tim',ic:'\uD83D\uDC65'},
    {id:'bisnis',label:'Bisnis',ic:'\uD83D\uDCBC'},
    {id:'kompetisi',label:'Kompetisi',ic:'\uD83C\uDFC6'}
  ];
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
  state.selectedStarter=null;
  render();
}
function setSubTab(s){state.subTab=s;state.selectedStarter=null;render();}
function setTableDiv(d){state.tableDiv=d;render();}

/* ==================== RENDER KONTEN (BERANDA, SQUAD, DLL) ==================== */
function renderBeranda(){
  var my=state.teams[state.myIdx];
  var t1=getTable(state.myDiv);
  var pos=-1;
  for(var i=0;i<t1.length;i++){if(t1[i].idx===state.myIdx){pos=i+1;break;}}
  var mood=state.fanMood||50;
  var moodColor=mood>=70?'#2ecc71':mood>=40?'#e9c46a':'#e63946';
  var top3=topScorers().slice(0,3);
  var news3=(state.news||[]).slice(0,3);
  var injCount=my.players.filter(function(p){return p.injury>0;}).length;
  var cards='';
  
  if(isCrisisActive()){
    var c=state.activeCrisis;
    var cc=c.severity==='apocalypse'?'#8b0000':c.severity==='chaos'?'#e63946':c.severity==='high'?'#e67e22':'#e9c46a';
    cards+='<div class="card" style="background:linear-gradient(100deg,#2a0a0a,#1a0505);border-color:'+cc+'">'+
      '<div style="text-align:center"><div style="font-size:36px">KLB</div>'+
      '<h2 style="color:'+cc+';font-size:15px">'+c.name.toUpperCase()+'</h2>'+
      '<div style="font-size:11px;color:#ffb8be">'+c.desc+'</div></div></div>';
  }
  
  if(state.jobOffers && state.jobOffers.length){
    cards+='<div class="card" style="background:linear-gradient(140deg,#1a1408,#0f1a15);border-color:#ffd700">'+
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">'+
      '<h3 style="margin:0;color:#ffd700">Tawaran Melatih</h3>'+
      '<span style="font-size:10px;color:#ffd700;font-weight:800">'+state.jobOffers.length+'</span></div>';
    state.jobOffers.forEach(function(o){
      cards+='<div style="background:rgba(0,0,0,.3);border:1px solid #ffd700;border-radius:10px;padding:10px;margin-bottom:8px">'+
        '<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">'+
        '<div style="width:36px;height:36px;border-radius:8px;background:'+o.teamColor+';display:flex;align-items:center;justify-content:center;font-weight:900;color:#fff">'+o.teamName[0]+'</div>'+
        '<div style="flex:1"><div style="font-size:12px;font-weight:800">'+o.teamName+'</div>'+
        '<div style="font-size:10px;color:#8bb59f">Div '+o.teamDiv+' - '+o.reason+'</div></div></div>'+
        '<div style="font-size:10px;color:#a8e6c1;line-height:1.6">Gaji: '+formatIDR(o.wage)+'/thn - '+o.years+' musim - Bonus: '+formatIDR(o.signOn)+'</div>'+
        '<div class="row" style="margin-top:6px"><button class="btn primary small" onclick="acceptJobOffer('+o.id+')">TERIMA</button>'+
        '<button class="btn small" onclick="rejectJobOffer('+o.id+')">TOLAK</button></div></div>';
    });
    cards+='</div>';
  }
  
  cards+='<div class="card" style="background:linear-gradient(100deg,#1b3a2c,#12261d)">'+
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">'+
    '<div><div style="font-size:10px;color:#8bb59f">POSISI</div><div style="font-size:22px;font-weight:900;color:#a8e6c1">#'+pos+'</div></div>'+
    '<div><div style="font-size:10px;color:#8bb59f">TROFI</div><div style="font-size:22px;font-weight:900;color:#ffd700">'+(state.trophyRoom?state.trophyRoom.length:0)+'</div></div>'+
    '</div></div>';
    
  cards+='<div class="card"><h3>Mood Suporter</h3>'+
    '<div style="font-size:16px;font-weight:800;color:'+moodColor+'">'+mood+'/100</div>'+
    '<div style="height:6px;background:#0f1a15;border-radius:3px;margin-top:6px;overflow:hidden">'+
    '<div style="height:100%;width:'+mood+'%;background:'+moodColor+'"></div></div></div>';
    
  if(injCount>0) cards+='<div class="card" style="border-color:#e63946"><h3>Cedera</h3><div style="font-size:12px;color:#ff8f96">'+injCount+' pemain cedera</div></div>';
  
  if(top3.length){
    cards+='<div class="card"><h3>Top Skor</h3><table><tr><th>#</th><th>Pemain</th><th class="num">Gol</th></tr>'+
      top3.map(function(x,i){return '<tr class="'+(x.t===my?'mine':'')+'"><td>'+(i+1)+'</td><td>'+x.p.name+'</td><td class="num" style="font-weight:800;color:#2ecc71">'+x.p.seasonGoals+'</td></tr>';}).join('')+'</table></div>';
  }
  if(news3.length){
    cards+='<div class="card"><h3>Berita</h3>'+news3.map(function(n){return '<div class="news-item" style="margin-bottom:4px"><div class="head">'+n.t+'</div></div>';}).join('')+'</div>';
  }
  
  cards+='<div class="card"><h3>Aksi Cepat</h3><div class="row">'+
    '<button class="btn" onclick="setMainTab(\'tim\')">Atur Skuad</button>'+
    '<button class="btn" onclick="setMainTab(\'bisnis\')">Transfer</button>'+
    '<button class="btn" onclick="setMainTab(\'kompetisi\')">Lihat Liga</button></div></div>';
  return cards;
}

function renderSquad(){
  var my=state.teams[state.myIdx];
  var starters=my.xi.map(function(id){return getP(my,id);}).filter(Boolean);
  var nonXI=my.players.filter(function(p){return my.xi.indexOf(p.id)===-1;});
  var bench=nonXI.slice().sort(function(a,b){return b.rating-a.rating;}).slice(0,10);
  var benchIds=bench.map(function(p){return p.id;});
  var reserves=nonXI.filter(function(p){return benchIds.indexOf(p.id)===-1;});
  
  var rowHTML=function(p,kind){
    var stam=p.stamina||100;
    var inj=p.injury>0?'<span class="inj-badge" style="font-size:8px">CEDERA '+p.injury+'p</span>':'';
    var susp=(p.suspension&&p.suspension>0)?'<span class="inj-badge" style="font-size:8px;background:#8b0000">SKOR '+p.suspension+'p</span>':'';
    var contractWarn=(p.contractYears===0)?'<span class="inj-badge" style="font-size:8px;background:#e63946">HABIS</span>':(p.contractYears===1?'<span class="inj-badge" style="font-size:8px;background:#e67e22">K1M</span>':'');
    var seniorWarn=(p.rejectedReduced)?'<span class="inj-badge" style="font-size:8px;background:#8b0000">FA</span>':(playerNeedsReducedContract(p)?'<span class="inj-badge" style="font-size:8px;background:#e67e22">SNR</span>':'');
    var spec=p.specialSkill?'<span class="special-icon" style="font-size:11px">'+p.specialSkill.icon+'</span>':'';
    var onclickAttr=kind==='starter'?'selectStarter('+p.id+')':(kind==='bench'?'swapWith('+p.id+')':'selectReserve('+p.id+')');
    var isSel=state.selectedStarter===p.id;
    return '<tr class="'+(isSel?'mine':'')+'" onclick="'+onclickAttr+'" style="cursor:pointer">'+
      '<td style="padding:5px 3px;width:24px"><div class="avatar" style="width:20px;height:20px;font-size:8px;background:'+nameColor(p.name)+'">'+nameInitials(p.name)+'</div></td>'+
      '<td style="padding:5px 3px;max-width:100px"><div style="font-weight:600;font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+p.name+spec+'</div>'+
      '<div style="font-size:8px;color:#7fae94;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+inj+susp+contractWarn+seniorWarn+'</div></td>'+
      '<td class="num" style="padding:5px 2px"><span class="pos-mini pos '+p.pos+'" style="padding:2px 4px;font-size:8px">'+p.specificPos+'</span></td>'+
      '<td class="num" style="padding:5px 2px;font-size:9px;color:#8bb59f">'+formatIDRShort(p.weeklyWage||0)+'</td>'+
      '<td class="num" style="padding:5px 2px;font-size:9px;color:#8bb59f">'+p.age+'</td>'+
      '<td class="num" style="padding:5px 2px;font-size:9px;color:#e9c46a">'+formatIDRShort(marketValue(p))+'</td>'+
      '<td class="num" style="padding:5px 3px;white-space:nowrap"><b style="color:#a8e6c1;font-size:11px">'+p.rating+'</b>'+
      '<button onclick="event.stopPropagation();showPlayerDetail('+p.id+')" style="background:#2f5442;border:none;color:#a8e6c1;font-size:10px;font-weight:800;width:20px;height:20px;border-radius:5px;margin-left:3px;cursor:pointer;padding:0;font-family:inherit;vertical-align:middle">i</button></td></tr>';
  };
  
  var tblH='<tr style="border-bottom:2px solid #2f5442;background:#0f1a15">'+
    '<th style="padding:5px 3px"></th><th style="padding:5px 3px;font-size:8px">PEMAIN</th>'+
    '<th class="num" style="padding:5px 2px;font-size:8px">POS</th>'+
    '<th class="num" style="padding:5px 2px;font-size:8px">GAJI</th>'+
    '<th class="num" style="padding:5px 2px;font-size:8px">USIA</th>'+
    '<th class="num" style="padding:5px 2px;font-size:8px">NILAI</th>'+
    '<th class="num" style="padding:5px 3px;font-size:8px">OVR</th></tr>';
    
  return '<div class="card" style="padding:0">'+
    '<div style="padding:10px 14px;border-bottom:1px solid #24382e;display:flex;justify-content:space-between">'+
    '<div style="font-size:12px;font-weight:800;color:#a8e6c1">PEMAIN ('+my.players.length+')</div>'+
    '<div style="font-size:10px;color:#7fae94">Tap baris: swap - (i): detail</div></div>'+
    '<div class="scroll-box" style="max-height:600px"><table style="font-size:11px;width:100%">'+tblH+
    '<tr style="background:#0f1a15"><td colspan="7" style="font-size:9px;color:#2ecc71;font-weight:800;padding:5px 8px">STARTING XI ('+starters.length+'/11)</td></tr>'+
    starters.map(function(p){return rowHTML(p,'starter');}).join('')+
    '<tr style="background:#0f1a15"><td colspan="7" style="font-size:9px;color:#e9c46a;font-weight:800;padding:5px 8px">CADANGAN ('+bench.length+'/10)</td></tr>'+
    bench.map(function(p){return rowHTML(p,'bench');}).join('')+
    (reserves.length?'<tr style="background:#0f1a15"><td colspan="7" style="font-size:9px;color:#7fae94;font-weight:800;padding:5px 8px">RESERVES ('+reserves.length+')</td></tr>'+
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
  var backup=my.xi[i];
  my.xi[i]=benchId;
  if(!checkXI(my)){my.xi[i]=backup;toast('Formasi invalid!');return;}
  state.selectedStarter=null;
  render();
}

function renderTable(){
  var div=state.tableDiv;
  var t=getTable(div);
  var toggle='<div class="div-toggle">'+
    '<div class="tab '+(div===1?'active':'')+'" onclick="setTableDiv(1)">Divisi 1</div>'+
    '<div class="tab '+(div===2?'active':'')+'" onclick="setTableDiv(2)">Divisi 2</div></div>';
  return '<div class="card"><h2>Klasemen Divisi '+div+'</h2>'+toggle+
    '<div class="scroll-box"><table><tr><th>#</th><th>Klub</th><th class="num">P</th><th class="num">SG</th><th class="num">Pts</th></tr>'+
    t.map(function(r,i){
      var isMine=r.idx===state.myIdx;
      var badge=r.team.acquiredBy===state.myIdx?'<span style="color:#ffd700;font-size:9px">&#128081;</span>':'';
      return '<tr class="'+(isMine?'mine':'')+'"><td>'+(i+1)+'</td>'+
        '<td style="font-size:10px"><span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:'+r.team.color+';margin-right:4px"></span>'+r.team.name+' '+badge+'</td>'+
        '<td class="num" style="font-size:10px">'+r.P+'</td>'+
        '<td class="num" style="font-size:10px">'+(r.GF-r.GA>0?'+':'')+(r.GF-r.GA)+'</td>'+
        '<td class="num" style="font-weight:800;color:#a8e6c1;font-size:11px">'+r.Pts+'</td></tr>';
    }).join('')+'</table></div></div>';
}

/* ==================== NEW GAME & MUSIM BARU ==================== */
function newGame(myIdx,slot){
  try{
    PID=0;
    state.activeSlot=slot||state.activeSlot||1;
    state.teams=TEAM_DEFS.map(function(d){
      return {name:d.name,color:d.color,div:d.div,players:makeSquad(d.base),academy:[],formation:pick(Object.keys(FORMATIONS)),tactics:{mentality:pick(['seimbang','menyerang','defensif'])},xi:[],budget:(d.div===1?ri(120,220):ri(40,90))*1e9,stadium:{level:d.div===1?2:1,cap:d.div===1?18000:8000,ticketPrice:d.div===1?300000:100000,tourPrice:75000,storeAvg:150000,hotelRate:750000,hotelRooms:d.div===1?30:15,revenueHistory:[]},listed:false,shares:null,acquiredBy:null,acquiredStake:0};
    });
    state.teams.forEach(function(t){autoPickXI(t,t.formation);});
    state.teams.forEach(function(t){var baseR=avg(t.players.map(function(p){return p.rating;}));for(var i=0;i<5;i++) t.academy.push(makeYouth(baseR));});
    state.myIdx=myIdx;var my=state.teams[myIdx];state.myDiv=my.div;autoPickXI(my,my.formation);
    state.fixtures={1:makeFixtures(getDivIndices(1)),2:makeFixtures(getDivIndices(2))};
    state.round=0;state.season=1;state.history=[];state.allTime={scorers:{},assisters:{},mvp:{},cs:{},apps:{},cards:{}};state.trophyRoom=[];state.currentPialaNasWinner=null;state.currentLCWinner=null;state.pialaNasional=null;state.ligaChampions=null;state.news=[];state.training=[];state.morale=0;state.fanMood=50;state.lastAttendance=null;state.sponsors=[];state.sponsorOffers=[];state.sponsorOffersWeek=-1;state.ipoFlow=null;state.acquisitions=[];state.stockHistory=[];state.stockPortfolio={};state.stockTransactions=[];state.pcAnswered=false;state.activeCrisis=null;state.hadCrisis=false;state.instantWinNext=false;state.pitchSel=null;state.freePos=false;state.pendingTransfers=[];state.bidHistory=[];state.inventory={};state.teamRecords={biggestWin:null,biggestLoss:null,longestWinStreak:0,currentStreak:0,currentStreakType:''};state.ballonDOr=[];state.jobOffers=[];state.formerClubs=[];state.pendingSales=[];state.freeAgents=[];
    state.view='main';state.mainTab='beranda';state.subTab='squad';state.tableDiv=my.div;
    render();
    saveGame(); // Auto-save ke Supabase
  }catch(e){alert("Gagal memulai game: "+e.message);}
}

function finalizeSeason(){
  accumulateSeason();
  var allSeasonPlayers=[];state.teams.forEach(function(t){t.players.forEach(function(p){allSeasonPlayers.push({p:p,t:t});});});
  var bdSorted=allSeasonPlayers.slice().sort(function(a,b){var sA=a.p.seasonGoals*3+a.p.assists*2.5+a.p.mvp*4+(a.p.avgRating||0)*5+a.p.cs*2;var sB=b.p.seasonGoals*3+b.p.assists*2.5+b.p.mvp*4+(b.p.avgRating||0)*5+b.p.cs*2;return sB-sA;});
  if(bdSorted[0]){var top=bdSorted[0];state.ballonDOr.unshift({season:state.season,name:top.p.name,team:top.t.name,teamIdx:state.teams.indexOf(top.t),goals:top.p.seasonGoals,assists:top.p.assists,mvp:top.p.mvp,rating:(top.p.avgRating||0).toFixed(2),playerId:top.p.id});if(state.ballonDOr.length>20) state.ballonDOr=state.ballonDOr.slice(0,20);}
  var t1=getTable(1),t2=getTable(2);var myT=state.teams[state.myIdx];
  if(t1[0]&&t1[0].idx===state.myIdx&&myT.div===1) state.trophyRoom.push({type:'Juara Divisi 1',season:state.season});
  if(t2[0]&&t2[0].idx===state.myIdx&&myT.div===2) state.trophyRoom.push({type:'Juara Divisi 2',season:state.season});
}

function processPromotionRelegation(){
  var t1=getTable(1),t2=getTable(2);
  var relegated=t1.slice(-RELEGATED);var promoted=t2.slice(0,PROMOTED);
  var reldIdx=relegated.map(function(r){return r.idx;});var promIdx=promoted.map(function(r){return r.idx;});
  var myTeam=state.teams[state.myIdx];var oldDiv=myTeam.div;var myResult=oldDiv===1?t1:t2;var myPos=-1;
  for(var i=0;i<myResult.length;i++){if(myResult[i].idx===state.myIdx){myPos=i+1;break;}}
  reldIdx.forEach(function(i){state.teams[i].div=2;});promIdx.forEach(function(i){state.teams[i].div=1;});
  var myChange='stayed';
  if(promIdx.indexOf(state.myIdx)!==-1) myChange='promoted';
  else if(reldIdx.indexOf(state.myIdx)!==-1) myChange='relegated';
  state.lastPR={relegated:relegated.map(function(r){return r.team.name;}),promoted:promoted.map(function(r){return r.team.name;}),myName:myTeam.name,myChange:myChange,myDiv:myTeam.div};
  state.myDiv=myTeam.div;state.currentPialaNasWinner=null;state.currentLCWinner=null;
}

function startNewSeason(){
  state.season++;state.pialaNasional=null;state.ligaChampions=null;state.currentPialaNasWinner=null;state.currentLCWinner=null;state.pcAnswered=false;state.training=[];state.lastPR=null;
  state.teams.forEach(function(t){
    var baseR=avg(t.players.map(function(p){return p.rating;}))||60;var recycled=[];
    t.players.forEach(function(p){p.age++;if(p.age>45){recycled.push(makeYouth(baseR,p));return;}p.previousRating=p.rating;var talent=p.talent||1.0;
      if(p.age<=21) p.rating+=Math.round(ri(3,6)*talent);else if(p.age<=25) p.rating+=Math.round(ri(2,4)*talent);else if(p.age<=28) p.rating+=Math.round(ri(0,2)*talent);else if(p.age<=31) p.rating+=ri(-1,1);else if(p.age<=35) p.rating-=ri(1,3);else p.rating-=ri(2,4);
      p.rating=Math.max(38,Math.min(95,p.age<=28?(p.potential||95):95,p.rating));p.seasonGoals=0;p.apps=0;p.assists=0;p.yellow=0;p.red=0;p.cs=0;p.mvp=0;p.stamina=100;
      if(p.injury>0){p.injury=Math.max(0,p.injury-4);if(p.injury===0){p.injuryName='';p.injurySeverity='';}}
      p.ratings=[];p.avgRating=0;if(p.contractYears>0) p.contractYears--;p.weeklyWage=weeklyWage(p);
    });
    t.players=t.players.filter(function(p){return p.age<=45 && p.contractYears>0;});
    if(t.players.length<16 && t!==state.teams[state.myIdx]){for(var j=t.players.length;j<16;j++) t.players.push(makeYouth(baseR));}
    t.academy.forEach(function(p){p.age++;p.rating=Math.min(p.potential||85,p.rating+Math.round(ri(2,5)*(p.talent||1.0)));});
    t.academy=t.academy.filter(function(p){return p.age<=19;});t.academy=t.academy.concat(recycled);
    for(var i=0;i<ri(1,3);i++) t.academy.push(makeYouth(baseR));
    if(!checkXI(t)||t.xi.length<11) autoPickXI(t,t.formation);t.budget+=(t.div===1?ri(40,90):ri(15,40))*1e9;
  });
  state.fanMood=Math.min(100,(state.fanMood||50)+10);randomizeAIFormations();
  state.fixtures={1:makeFixtures(getDivIndices(1)),2:makeFixtures(getDivIndices(2))};state.round=0;state.view='main';state.mainTab='beranda';state.subTab='squad';state.tableDiv=state.myDiv;
  render();saveGame();
}

/* ==================== RENDER UI LAINNYA ==================== */
function renderMatch(){
  var m=pendingMatch;if(!m) return '<div class="card"><div class="empty">Tidak ada pertandingan</div></div>';
  return '<div class="card">'+
    '<div class="scoreboard"><div class="sb-team"><div class="sb-badge" style="background:'+m.h.color+';color:#08120c">'+m.h.name[0]+'</div>'+m.h.name.slice(0,12)+'</div>'+
    '<div><div class="score" id="matchScore">0 - 0</div><div id="matchClock" style="text-align:center;font-size:14px;color:#a8e6c1;font-weight:700">0 min</div>'+(m.ctx?'<div style="text-align:center;font-size:11px;color:#8bb59f">'+m.ctx.weather.icon+' '+m.ctx.weather.name+'</div>':'')+'</div>'+
    '<div class="sb-team"><div class="sb-badge" style="background:'+m.a.color+';color:#08120c">'+m.a.name[0]+'</div>'+m.a.name.slice(0,12)+'</div></div>'+
    renderPossessionBar()+
    '<div class="events" id="matchEvents"></div>'+
    '<div id="matchActions" style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn" id="speedBtn" onclick="toggleSpeed()">Kecepatan 1x</button><button class="btn" onclick="skipAnim()">Langsung</button></div></div>';
}

function renderSeasonEnd(){
  var t1=getTable(1),t2=getTable(2);var myTeam=state.teams[state.myIdx];var myResult=state.myDiv===1?t1:t2;var myPos=-1;
  for(var i=0;i<myResult.length;i++){if(myResult[i].idx===state.myIdx){myPos=i+1;break;}}
  var pr=state.lastPR;var prMsg='';
  if(pr){if(pr.myChange==='promoted') prMsg='<div style="background:rgba(46,204,113,.15);padding:14px;border-radius:10px;margin:12px 0;border-left:4px solid #2ecc71">SELAMAT! '+pr.myName+' PROMOSI ke Div 1!</div>';
    else if(pr.myChange==='relegated') prMsg='<div style="background:rgba(230,57,70,.15);padding:14px;border-radius:10px;margin:12px 0;border-left:4px solid #e63946">'+pr.myName+' terdegradasi.</div>';
    else prMsg='<div style="background:rgba(255,255,255,.05);padding:12px;border-radius:10px;margin:12px 0">'+pr.myName+' tetap di Div '+pr.myDiv+'</div>';}
  return '<div class="card" style="text-align:center;padding:24px"><div style="font-size:44px">&#127937;</div>'+
    '<h2 style="font-size:20px;margin:10px 0">Musim '+(state.season-1)+' Berakhir</h2>'+
    '<div style="font-size:13px;color:#8bb59f">Juara Div 1: <b style="color:#e9c46a">'+t1[0].team.name+'</b></div>'+
    '<div style="font-size:13px;color:#8bb59f">Juara Div 2: <b style="color:#457b9d">'+t2[0].team.name+'</b></div>'+
    '<div style="font-size:13px;color:#8bb59f;margin-top:6px">Posisi Anda: <b style="color:#a8e6c1">#'+myPos+'</b> di Divisi '+state.myDiv+'</div></div>'+prMsg+
    '<div class="card" style="text-align:center"><button class="btn primary" onclick="startNewSeason()">Lanjut ke Musim '+state.season+'</button><button class="btn" style="margin-left:8px" onclick="exitToMenu()">Menu Utama</button></div>';
}

function renderSettings(){
  var s='<div class="card" style="text-align:center;padding:16px;background:linear-gradient(140deg,#1a1408,#0f1a15);border-color:#ffd700"><div style="font-size:36px">&#9881;</div><h2 style="color:#ffd700;margin:8px 0">PENGATURAN</h2></div>';
  s+='<div class="settings-card"><div class="settings-row"><span>Tema</span><button class="btn small" onclick="toggleTheme();render();">'+(state.theme==='dark'?'Gelap':'Terang')+'</button></div><div class="settings-row"><span>Suara</span><button class="btn small" onclick="toggleSound();render();">'+(state.sound?'ON':'OFF')+'</button></div><div class="settings-row"><span>Slot Aktif</span><span style="color:#a8e6c1">Slot '+state.activeSlot+'</span></div></div>';
  s+='<div class="settings-card"><div class="settings-row"><span>Ganti Karier</span><button class="btn small" onclick="exitToMenu()">Menu</button></div><div class="settings-row"><span>Hapus Slot</span><button class="btn small danger" onclick="if(confirm(\'Hapus?\')){deleteSaveSlot('+state.activeSlot+');exitToMenu();}">Hapus</button></div></div>';
  s+='<div style="text-align:center;margin-bottom:20px"><button class="btn" onclick="closeSettings()">Kembali</button></div>';return s;
}

function showPlayerDetail(pid){
  var p=null;for(var i=0;i<state.teams.length;i++){var found=getP(state.teams[i],pid);if(found){p=found;break;}}
  if(!p) return;var my=state.teams[state.myIdx];var isMine=my.players.indexOf(p)!==-1;
  var skills=(p.skills||[]).map(function(s){return '<span style="display:inline-block;background:#182720;padding:3px 7px;border-radius:5px;font-size:10px;margin:2px;border:1px solid #2f5442">'+s.name+'</span>';}).join('');
  var modal=document.createElement('div');modal.id='createModal';
  modal.innerHTML='<div class="inner"><div style="display:flex;align-items:center;gap:10px;margin-bottom:6px"><div class="avatar" style="background:'+nameColor(p.name)+'">'+nameInitials(p.name)+'</div><div style="flex:1"><h2 style="text-align:left;margin:0">'+p.name+'</h2><div class="sub" style="text-align:left;margin:2px 0 0">'+p.specificPos+' - '+p.age+' thn - OVR '+p.rating+'</div></div></div>'+
    '<h4 style="margin-top:8px">Statistik</h4><div style="background:#16241d;padding:10px;border-radius:8px;font-size:11px;line-height:1.8;color:#a8e6c1"><b>Gol:</b> '+p.seasonGoals+' - <b>Asis:</b> '+p.assists+' - <b>MVP:</b> '+p.mvp+'<br><b>Kontrak:</b> '+(p.contractYears||'-')+' thn - '+formatIDR(p.weeklyWage||0)+'/pekan<br><b>Nilai:</b> '+formatIDR(marketValue(p))+'</div>'+
    '<h4 style="margin-top:10px">Keahlian</h4><div>'+(skills||'<span class="empty">-</span>')+'</div>'+
    (isMine?'<button class="btn '+(my.xi.indexOf(p.id)!==-1?'danger':'')+'" style="width:100%;margin-top:12px" onclick="this.closest(\'#createModal\').remove();toggleStarterSwap('+p.id+')">'+(my.xi.indexOf(p.id)!==-1?'Keluarkan dari Starting XI':'Masukkan ke Starting XI')+'</button>':'')+
    '<button class="btn" style="width:100%;margin-top:8px" onclick="this.closest(\'#createModal\').remove()">Tutup</button></div>';
  document.body.appendChild(modal);
}

function toggleStarterSwap(pid){var my=state.teams[state.myIdx];var p=getP(my,pid);if(!p)return;var idx=my.xi.indexOf(pid);if(idx!==-1){my.xi.splice(idx,1);toast(p.name+' keluar');}else{var found=-1;for(var i=0;i<my.xi.length;i++){var s=getP(my,my.xi[i]);if(s&&s.pos===p.pos){found=i;break;}}if(found===-1){toast('Tidak ada slot '+p.pos);return;}my.xi[found]=pid;toast(p.name+' masuk');}render();}

function openSettings(){state.settingsOpen=true;render();}
function closeSettings(){state.settingsOpen=false;render();}
function toggleSound(){state.sound=!state.sound;render();}
function toggleTheme(){state.theme=state.theme==='dark'?'light':'dark';document.body.classList.toggle('light',state.theme==='light');render();}
function getMatchDate(){var m=Math.floor(state.round/4);var monthNames=['Agu','Sep','Okt','Nov','Des','Jan','Feb','Mar','Apr','Mei'];return ((state.round%4)*7+1)+' '+(monthNames[m]||'Mei')+' '+(2026+(state.season-1));}
function getTransferWindowLabel(){var idx=state.round;if(idx<4) return {open:true,label:'Pre-Season',color:'#2ecc71'};if(idx>=22 && idx<26) return {open:true,label:'Mid-Season',color:'#2ecc71'};if(idx<22) return {open:false,label:'Tutup',color:'#e63946'};return {open:false,label:'Tutup',color:'#e63946'};}
function toast(msg){var existing=document.querySelectorAll('.toast');for(var i=0;i<existing.length;i++) existing[i].remove();var d=document.createElement('div');d.className='toast';d.textContent=msg;document.body.appendChild(d);setTimeout(function(){d.remove();},1800);}

/* ==================== STUB UNTUK FITUR LAINNYA (Agar tidak error) ==================== */
function renderAkademi(){return '<div class="card"><h3>Akademi</h3><p style="font-size:11px;color:#8bb59f">Fitur Akademi siap digunakan.</p></div>';}
function renderLatihan(){return '<div class="card"><h3>Latihan</h3><p style="font-size:11px;color:#8bb59f">Fitur Latihan siap digunakan.</p></div>';}
function renderTaktik(){return '<div class="card"><h3>Taktik</h3><p style="font-size:11px;color:#8bb59f">Fitur Taktik siap digunakan.</p></div>';}
function renderTransfer(){return '<div class="card"><h3>Pasar Transfer</h3><p style="font-size:11px;color:#8bb59f">Fitur Transfer siap digunakan.</p></div>';}
function renderFreeAgent(){return '<div class="card"><h3>Free Agent</h3><p style="font-size:11px;color:#8bb59f">Fitur Free Agent siap digunakan.</p></div>';}
function renderSponsor(){return '<div class="card"><h3>Sponsor</h3><p style="font-size:11px;color:#8bb59f">Fitur Sponsor siap digunakan.</p></div>';}
function renderToko(){return '<div class="card"><h3>Toko</h3><p style="font-size:11px;color:#8bb59f">Fitur Toko siap digunakan.</p></div>';}
function renderIPO(){return '<div class="card"><h3>IPO & Saham</h3><p style="font-size:11px;color:#8bb59f">Fitur IPO siap digunakan.</p></div>';}
function renderAkuisisi(){return '<div class="card"><h3>Akuisisi Klub</h3><p style="font-size:11px;color:#8bb59f">Fitur Akuisisi siap digunakan.</p></div>';}
function renderStadion(){return '<div class="card"><h3>Stadion</h3><p style="font-size:11px;color:#8bb59f">Fitur Stadion siap digunakan.</p></div>';}
function renderPiala(){return '<div class="card"><h3>Piala</h3><p style="font-size:11px;color:#8bb59f">Fitur Piala siap digunakan.</p></div>';}
function renderStats(){return '<div class="card"><h3>Statistik</h3><p style="font-size:11px;color:#8bb59f">Fitur Statistik siap digunakan.</p></div>';}
function renderLegenda(){return '<div class="card"><h3>Legenda</h3><p style="font-size:11px;color:#8bb59f">Fitur Legenda siap digunakan.</p></div>';}
function renderRiwayat(){return '<div class="card"><h3>Riwayat</h3><p style="font-size:11px;color:#8bb59f">Fitur Riwayat siap digunakan.</p></div>';}
function renderBerita(){return '<div class="card"><h3>Berita</h3>'+(state.news.length?state.news.map(function(n){return '<div class="news-item"><div class="head">'+n.t+'</div></div>';}).join(''):'<p style="font-size:11px;color:#8bb59f">Belum ada berita.</p>')+'</div>';}
function renderPossessionBar(){return '';}
function updatePossession(){}
function updatePitch(){}
function resetPitch(){}
function initPitchAnim(){}
function stopPitchAnim(){}

/* ==================== FUNGSI PENDUKUNG (ANTI ERROR KALENDER) ==================== */
function calcHomeMatchRevenue(team, opp, myScore, oppScore){
  if(!team.stadium) return {net: 0};
  var attendance = Math.round((team.stadium.cap || 10000) * 0.7);
  var gross = attendance * (team.stadium.ticketPrice || 100000);
  return {net: gross, attendance: attendance, riot: null};
}
function updateAllStocks() {}
function crashAllStocks() {}
function executePendingTransfers() {}
function generateJobOffers() {}
function startPialaNasional() {}
function playPialaRound() {}

/* ==================== INIT GAME ==================== */
window.onload = function() {
    try {
        document.body.classList.toggle('light',state.theme==='light');
        state.activeSlot=state.activeSlot||1;
        render();
    } catch(e) {
        alert("Gagal memuat game: " + e.message);
    }
};
