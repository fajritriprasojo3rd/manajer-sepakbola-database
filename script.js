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
function catOf(sp){if(sp==='GK') return 'GK';if(['CB','RB','LB','LWB','RWB'].indexOf(sp)!==-1) return 'DEF';if(['RMF','LMF','CMF','DMF','AMF'].indexOf(sp)!==-1) return 'MID';return 'FWD';}
var PLAY_STYLES={CF:['Pemburu Gol','Target Man','Pemburu Peluang'],SS:['Penyerang Bayangan','Pemburu Celah','Sayap Terobos'],AMF:['Otak Permainan','Playmaker Kreatif','Pemburu Celah'],CMF:['Box-To-Box','Orkestrator'],DMF:['Jangkar','Perusak Serangan'],RMF:['Pemain Sayap Kreatif','Spesialis Umpan Silang','Sayap Terobos','Pembantu Serangan','Pemburu Celah'],LMF:['Pemain Sayap Kreatif','Spesialis Umpan Silang','Sayap Terobos','Pembantu Serangan','Pemburu Celah'],CB:['Pembangun Serangan','Perusak Serangan'],RB:['Bek Sayap Menyerang','Bek Sayap Bertahan','Spesialis Umpan Silang'],LB:['Bek Sayap Menyerang','Bek Sayap Bertahan','Spesialis Umpan Silang'],RWB:['Bek Sayap Menyerang','Spesialis Umpan Silang','Pemain Sayap Kreatif'],LWB:['Bek Sayap Menyerang','Spesialis Umpan Silang','Pemain Sayap Kreatif'],GK:['Kiper Agresif','Kiper Bertahan','Kiper Build-up','Kiper Stoper']};
var SKILL_POOL={GK:['Refleks','Penempatan Posisi','Distribusi Bola','Penyelamatan Penalti','Kiper Sapu','Satu Lawan Satu','Kontrol Udara'],DEF:['Tekel','Penjagaan','Sundulan','Intersepsi','Kekuatan Udara','Tekel Meluncur','Blok Tubuh','Kekuatan Fisik'],MID:['Umpan','Visi Bermain','Dribel','Stamina','Tembakan Jarak Jauh','Pengatur Serangan','Kontrol Bola','Umpan Silang'],FWD:['Penyelesaian Akhir','Dribel','Kecepatan','Sundulan','Tembakan Jarak Jauh','Pemburu Gol','Pergerakan Tanpa Bola','Tendangan Voli']};

var FORMATIONS={'4-3-3':{GK:1,DEF:['CB','CB','RB','LB'],MID:['CMF','CMF','AMF'],FWD:['CF','SS','SS']},'4-4-2':{GK:1,DEF:['CB','CB','RB','LB'],MID:['RMF','CMF','CMF','LMF'],FWD:['CF','SS']},'3-5-2':{GK:1,DEF:['CB','CB','CB'],MID:['RMF','DMF','CMF','AMF','LMF'],FWD:['CF','SS']},'5-3-2':{GK:1,DEF:['RWB','CB','CB','CB','LWB'],MID:['CMF','CMF','AMF'],FWD:['CF','SS']}};
function formationCounts(fname){var f=FORMATIONS[fname];var c={GK:0,DEF:0,MID:0,FWD:0};if(f.GK) c.GK=f.GK;if(f.DEF instanceof Array) c.DEF=f.DEF.length; else c.DEF=f.DEF||0;if(f.MID instanceof Array) c.MID=f.MID.length; else c.MID=f.MID||0;if(f.FWD instanceof Array) c.FWD=f.FWD.length; else c.FWD=f.FWD||0;return c;}
var FORMATION_POS={'4-3-3':{GK:[[4,32]],DEF:[[18,24],[18,40],[18,54],[18,10]],MID:[[34,24],[34,40],[42,32]],FWD:[[52,32],[54,10],[54,54]]},'4-4-2':{GK:[[4,32]],DEF:[[18,24],[18,40],[18,54],[18,10]],MID:[[36,10],[36,26],[36,38],[36,54]],FWD:[[54,24],[54,40]]},'3-5-2':{GK:[[4,32]],DEF:[[18,18],[18,32],[18,46]],MID:[[36,8],[36,20],[36,32],[36,44],[36,56]],FWD:[[54,24],[54,40]]},'5-3-2':{GK:[[4,32]],DEF:[[16,8],[16,20],[16,32],[16,44],[16,56]],MID:[[36,20],[36,32],[36,44]],FWD:[[54,24],[54,40]]}};

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
  news:[],inflation:1.0,marketPlayers:[],allTime:{scorers:{},assisters:{},mvp:{},cs:{},apps:{}},
  trophyRoom:[],sponsors:[],sponsorOffers:[],freeAgents:[],inventory:{},teamRecords:{},
  godMode:false,sound:true,theme:'dark',settingsOpen:false,selectedStarter:null
};
var TOTAL_ROUNDS=22; var STAMINA_COST=18;

// ==========================================
// 4. GENERATOR PEMAIN & TIM INTERNASIONAL
// ==========================================
function rollSpecificPos(cat){if(cat==='GK') return 'GK';return pick(POSITIONS_SPECIFIC[cat]);}
function rollPlayStyle(sp){return pick(PLAY_STYLES[sp]||['Standar']);}
function rollSkills(sp){var cat=catOf(sp);var pool=SKILL_POOL[cat]||[];var out=[];var seen={};var c=ri(2,3);for(var i=0;i<c;i++){var s=pick(pool);if(!seen[s]){out.push({name:s});seen[s]=true;}}return out;}

function makeSquad(base){
  var comp={GK:2,DEF:5,MID:5,FWD:4};var out=[];
  ['GK','DEF','MID','FWD'].forEach(function(cat){
    for(var i=0;i<comp[cat];i++){
      var sp=rollSpecificPos(cat);var rating=Math.max(45,Math.min(95,Math.round(base+rnd(-6,6))));
      out.push({id:PID++,name:generateIndonesianName(),pos:cat,specificPos:sp,age:ri(18,32),rating:rating,playStyle:rollPlayStyle(sp),skills:rollSkills(sp),stats:{shooting:rating-5,passing:rating-5,dribbling:rating-5,defending:rating-5,physical:rating-5,speed:rating-5},seasonGoals:0,apps:0,assists:0,mvp:0,cs:0,yellow:0,red:0,stamina:100,injury:0,suspension:0,contractYears:ri(1,4),weeklyWage:Math.round((rating-40)*1.5e6),avgRating:0});
    }
  });
  return out;
}

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
          intlPlayers.push({id: PID++, name: generateIndonesianName(), pos: pos, specificPos: pick(POSITIONS_SPECIFIC[pos]), age: ri(19, 32), rating: Math.max(65, Math.min(95, Math.round(baseRating + rnd(-4, 4)))), seasonGoals: 0, apps: 0, assists: 0, mvp: 0, stamina: 100, injury: 0, suspension: 0, contractYears: ri(1, 4), weeklyWage: ri(100, 300) * 1000000});
        }
      });
      intlTeams.push({name: city + ' ' + suffix, color: pick(['#e63946', '#1a3a8f', '#2ecc71', '#f4a261', '#9b59b6']), div: 3, country: country.name, players: intlPlayers, formation: '4-3-3', xi: [], budget: 500e9});
    }
  }
  return intlTeams;
}

// ==========================================
// 5. AUTO XI & FIXTURES & KALENDER
// ==========================================
function getP(team,id){if(!team||!team.players)return null;for(var i=0;i<team.players.length;i++){if(team.players[i].id===id)return team.players[i];}return null;}
function autoPickXI(team,formation){
  var f=FORMATIONS[formation||'4-3-3'];var xi=[];var used={};
  ['GK','DEF','MID','FWD'].forEach(function(cat){
    var c=team.players.filter(function(p){return p.pos===cat&&!p.injury&&!used[p.id];});
    c.sort((a,b)=>b.rating-a.rating);
    for(var i=0;i<f[cat].length;i++){if(c[i]){xi.push(c[i].id);used[c[i].id]=true;}}
  });
  team.xi=xi;
}
function checkXI(team){var c={GK:0,DEF:0,MID:0,FWD:0};team.xi.forEach(function(id){var p=getP(team,id);if(p)c[p.pos]++;});var need=formationCounts(team.formation);return c.GK>=need.GK&&c.DEF>=need.DEF&&c.MID>=need.MID&&c.FWD>=need.FWD;}
function getDivIndices(div){return state.teams.map(function(t,i){return t.div===div?i:-1;}).filter(function(i){return i>=0;});}
function makeFixtures(teamIndices){var ids=teamIndices.slice();var n=ids.length;var firstLeg=[];for(var r=0;r<n-1;r++){var pairs=[];for(var i=0;i<n/2;i++) pairs.push([ids[i],ids[n-1-i]]);firstLeg.push(pairs);var fixed=ids[0];var rest=ids.slice(1);rest.unshift(rest.pop());ids=[fixed].concat(rest);}var secondLeg=firstLeg.map(function(rd){return rd.map(function(pa){return [pa[1],pa[0]];});});var allRounds=firstLeg.concat(secondLeg);return allRounds.map(function(rd){return rd.map(function(pa){return {home:pa[0],away:pa[1],played:false,hg:0,ag:0};});});}
function getMatchDate(){var baseDay=((state.round*7)+state.dayInWeek);var m=Math.floor(baseDay/28);var d=(baseDay%28)+1;var monthNames=['Agu','Sep','Okt','Nov','Des','Jan','Feb','Mar','Apr','Mei'];return d+' '+(monthNames[m]||'Mei')+' '+(2026+Math.floor(m/9));}
function getTransferWindowLabel(){return {open:true,label:'Bursa Aktif',color:'#2ecc71'};}

// ==========================================
// 6. MATCH ENGINE
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

function simulateSegment(home,away,fromMin,toMin,ctx){
  for(var min=fromMin;min<=toMin;min++){
    if(Math.random()<0.5){
      var isH2=Math.random()<0.5;
      var att=isH2?home:away; var def=isH2?away:home;
      var diff=((isH2?ctx.H.atk:ctx.A.atk)+(isH2?3:0))-(isH2?ctx.A.def:ctx.H.def);
      var pGoal=0.08*Math.exp(diff/12);
      if(pGoal>0.6)pGoal=0.6; if(pGoal<0.01)pGoal=0.01;
      
      if(Math.random()<pGoal){
        var s=pickScorer(att); if(!s)continue;
        if(isH2)ctx.hg++; else ctx.ag++;
        var assistTxt='',a=pickAssist(att,s.id);
        if(a && Math.random()<0.7){a.assists++;assistTxt=' (assist: '+a.name+')';}
        ctx.events.push({min:min,type:'goal',team:isH2?'home':'away',scorerId:s.id,text:'GOL! '+s.name+' ('+att.name+')'+assistTxt});
      } else {
        if(Math.random()<0.3) ctx.events.push({min:min,type:'commentary',team:isH2?'home':'away',text:'Peluang untuk '+att.name+' tapi melenceng!'});
      }
    }
    if(Math.random()<0.01){
      var isH3=Math.random()<0.5; var t3=isH3?home:away; var players=t3.xi.map(function(id){return getP(t3,id);}).filter(Boolean);
      if(players.length){var p3=pick(players);p3.yellow++;ctx.events.push({min:min,type:'card',team:isH3?'home':'away',text:'Kartu kuning untuk '+p3.name});}
    }
  }
}

function finalizeMatch(home,away,ctx){
  [home,away].forEach(function(t){t.xi.forEach(function(id){var p=getP(t,id);if(p){p.apps++;p.stamina=Math.max(0,p.stamina-STAMINA_COST);if(!p.ratings)p.ratings=[];p.ratings.push(6+rnd(0,3));p.avgRating=avg(p.ratings.slice(-10));}});});
  ctx.events.forEach(function(e){if(e.type==='goal'){var t=e.team==='home'?home:away;var p=getP(t,e.scorerId);if(p){p.seasonGoals++;}}});
}

function playRound(){
  var mine=null;
  [1,2].forEach(function(div){
    var round=state.fixtures[div][state.round]; if(!round)return;
    round.forEach(function(f){
      var h=state.teams[f.home],a=state.teams[f.away];
      var isUser=(f.home===state.myIdx)||(f.away===state.myIdx);
      var ctx={H:teamStats(h),A:teamStats(a),hg:0,ag:0,events:[]};
      simulateSegment(h,a,1,90,ctx);
      if(isUser){mine={f:f,h:h,a:a,ctx:ctx};} 
      else{f.hg=ctx.hg;f.ag=ctx.ag;f.played=true;finalizeMatch(h,a,ctx);}
    });
  });
  pendingMatch=mine;
  if(mine){state.view='match';render();} else {nextRound();}
}

function advanceDay(){
  var daysLeft=7-state.dayInWeek;var add=daysLeft<2?daysLeft:2;state.dayInWeek+=add;
  state.teams[state.myIdx].players.forEach(function(p){if(p.stamina<100&&p.injury===0)p.stamina=Math.min(100,p.stamina+5);});
  toast('Waktu berlalu '+add+' hari.');render();saveGame();
}

function nextRound(){
  state.round++;state.dayInWeek=1;pendingMatch=null;
  if(state.round>=TOTAL_ROUNDS){state.view='seasonEnd';}else{state.view='main';state.mainTab='beranda';}
  render();saveGame();
}

// ==========================================
// 7. DATABASE SUPABASE
// ==========================================
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

/* ==================== RENDER DISPATCHER & NAVIGASI ==================== */
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
  
  // TAMBAHKAN BARIS INI: Memastikan tim selalu 11 orang & ada kiper
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
      else if(state.subTab==='freeagent') content=renderFreeAgent();
      else if(state.subTab==='sponsor') content=renderSponsor();
      else if(state.subTab==='toko') content=renderToko();
      else if(state.subTab==='ipo') content=renderIPO();
      else if(state.subTab==='akuisisi') content=renderAkuisisi();
      else if(state.subTab==='stadion') content=renderStadion();
    }
    else if(state.mainTab==='kompetisi'){
      if(state.subTab==='klasemen') content=renderTable();
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
  if(mainTab==='bisnis') return [{id:'transfer',label:'Transfer'},{id:'freeagent',label:'Free Agent'},{id:'sponsor',label:'Sponsor'},{id:'toko',label:'Toko'},{id:'ipo',label:'IPO'},{id:'akuisisi',label:'Akuisisi'},{id:'stadion',label:'Stadion'}];
  if(mainTab==='kompetisi') return [{id:'klasemen',label:'Klasemen'},{id:'bestxi',label:'Best XI'},{id:'piala',label:'Piala'},{id:'statistik',label:'Statistik'},{id:'legenda',label:'Legenda'},{id:'riwayat',label:'Riwayat'},{id:'berita',label:'Berita'}];
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

/* ==================== BERANDA & KALENDER ==================== */
function renderBeranda(){
  var my=state.teams[state.myIdx];
  var t1=getTable(state.myDiv);
  var pos=-1; for(var i=0;i<t1.length;i++){if(t1[i].idx===state.myIdx){pos=i+1;break;}}
  
  var isMatchDay = (state.dayInWeek >= 7);
  var isMatchDay = (state.dayInWeek >= 7);
var mainButton = '';

if (isMatchDay) {
  // Cek apakah XI valid (11 orang & ada kiper)
  if (isXIValid()) {
      mainButton = '<button class="btn primary" onclick="playRound()" style="width:100%;margin-bottom:10px;padding:15px;font-size:16px;box-shadow:0 4px 15px rgba(46,204,113,0.4);">⚽ MAIN PERTANDINGAN</button>';
  } else {
      mainButton = '<button class="btn" disabled style="width:100%;margin-bottom:10px;padding:15px;font-size:14px;background:#3a1d20;color:#ff8f96;border:1px solid #e63946;">⚠️ STARTING XI BELUM VALID (Butuh 11 Pemain & 1 Kiper)</button>';
  }
} else {
  // ... (Biarkan kode tombol "Lanjut Hari" yang asli di sini)
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

  var news3=(state.news||[]).slice(0,3);
  if(news3.length){
    cards+='<div class="card"><h3>Berita Terbaru</h3>'+news3.map(function(n){
      return '<div class="news-bubble">'+n.t+'</div>';
    }).join('')+'</div>';
  }
  return cards;
}

/* ==================== SKUAD & POP-UP MODAL ==================== */
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
    var onclickAttr=kind==='starter'?'selectStarter('+p.id+')':(kind==='bench'?'swapWith('+p.id+')':'selectReserve('+p.id+')');
    var isSel=state.selectedStarter===p.id;
    
    // Lingkaran Posisi
    var posColor = p.pos==='GK'?'#5e60ce':p.pos==='DEF'?'#2a9d8f':p.pos==='MID'?'#e9c46a':'#e63946';
    var textColor = p.pos==='MID'?'#04160c':'#fff';

    return '<tr class="'+(isSel?'mine':'')+'" onclick="'+onclickAttr+'" style="cursor:pointer">'+
      '<td style="padding:5px 3px;width:32px;text-align:center;">'+
        '<div class="squad-pos" style="background:'+posColor+';color:'+textColor+';">'+p.specificPos+'</div>'+
      '</td>'+
      '<td style="padding:5px 3px;max-width:100px"><div style="font-weight:600;font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+p.name+spec+'</div>'+
      '<div style="font-size:8px;color:#7fae94;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+inj+susp+'</div></td>'+
      '<td class="num" style="padding:5px 2px;font-size:9px;color:#8bb59f">'+formatIDRShort(p.weeklyWage||0)+'</td>'+
      '<td class="num" style="padding:5px 2px;font-size:9px;color:#8bb59f">'+p.age+'</td>'+
      '<td class="num" style="padding:5px 2px;font-size:9px;color:#e9c46a">'+formatIDRShort(marketValue(p))+'</td>'+
      '<td class="num" style="padding:5px 3px;white-space:nowrap"><b style="color:#a8e6c1;font-size:11px">'+p.rating+'</b>'+
      '<button onclick="event.stopPropagation();showPlayerDetail('+p.id+')" style="background:#2f5442;border:none;color:#a8e6c1;font-size:10px;font-weight:800;width:20px;height:20px;border-radius:5px;margin-left:3px;cursor:pointer;padding:0;font-family:inherit;vertical-align:middle">i</button></td></tr>';
  };
  
  var tblH='<tr style="border-bottom:2px solid #2f5442;background:#0f1a15">'+
    '<th style="padding:5px 3px;text-align:center;">POS</th><th style="padding:5px 3px;font-size:8px">PEMAIN</th>'+
    '<th class="num" style="padding:5px 2px;font-size:8px">GAJI</th>'+
    '<th class="num" style="padding:5px 2px;font-size:8px">USIA</th>'+
    '<th class="num" style="padding:5px 2px;font-size:8px">NILAI</th>'+
    '<th class="num" style="padding:5px 3px;font-size:8px">OVR</th></tr>';
    
  return '<div class="card" style="padding:0">'+
    '<div style="padding:10px 14px;border-bottom:1px solid #24382e;display:flex;justify-content:space-between;align-items:center;">'+
      '<div style="font-size:12px;font-weight:800;color:#a8e6c1">PEMAIN ('+my.players.length+')</div>'+
      '<div style="display:flex;gap:8px;align-items:center;">'+
        '<div style="font-size:10px;color:#7fae94;display:none;">Tap: swap</div>'+
        '<button class="btn small primary" onclick="autoLineup()">⚡ Auto XI</button>'+
      '</div>'+
    '</div>'+
    '<div class="scroll-box" style="max-height:600px"><table style="font-size:11px;width:100%">'+tblH+
    '<tr style="background:#0f1a15"><td colspan="6" style="font-size:9px;color:#2ecc71;font-weight:800;padding:5px 8px">STARTING XI ('+starters.length+'/11)</td></tr>'+
    starters.map(function(p){return rowHTML(p,'starter');}).join('')+
    '<tr style="background:#0f1a15"><td colspan="6" style="font-size:9px;color:#e9c46a;font-weight:800;padding:5px 8px">CADANGAN ('+bench.length+'/10)</td></tr>'+
    bench.map(function(p){return rowHTML(p,'bench');}).join('')+
    (reserves.length?'<tr style="background:#0f1a15"><td colspan="6" style="font-size:9px;color:#7fae94;font-weight:800;padding:5px 8px">RESERVES ('+reserves.length+')</td></tr>'+
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
  if(isMine) {
    var cost = Math.round(marketValue(p) * 0.2);
    contractBtn = '<button onclick="extendContract('+p.id+','+cost+'); document.getElementById(\'createModal\').remove();" style="width:100%;margin-bottom:10px;padding:12px;border-radius:8px;background:#3498db;color:#fff;font-weight:bold;border:none;cursor:pointer;font-size:12px;">Perpanjang Kontrak (+3 Thn) - '+formatIDRShort(cost)+'</button>';
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
    contractBtn +
    (isMine?'<button onclick="document.getElementById(\'createModal\').remove(); toggleStarter('+p.id+');" style="width:100%;margin-bottom:10px;padding:12px;border-radius:8px;background:'+(my.xi.indexOf(p.id)!==-1?'#e63946':'#2ecc71')+';color:'+(my.xi.indexOf(p.id)!==-1?'#fff':'#04160c')+';font-weight:bold;border:none;cursor:pointer;font-size:12px;">'+(my.xi.indexOf(p.id)!==-1?'Keluarkan dari Starting XI':'Masukkan ke Starting XI')+'</button>':'')+
    '<button onclick="document.getElementById(\'createModal\').remove()" style="width:100%;padding:12px;border-radius:8px;background:transparent;color:#8bb59f;border:1px solid #24382e;font-weight:bold;cursor:pointer;font-size:12px;">Tutup</button>'+
  '</div>';
  document.body.appendChild(modal);
}

function extendContract(id, cost) {
  var my = state.teams[state.myIdx];
  var p = getP(my, id);
  if(!p) return;
  if(my.budget < cost) return toast("Uang tidak cukup untuk perpanjang kontrak!");
  my.budget -= cost; p.contractYears += 3; p.weeklyWage = Math.round(p.weeklyWage * 1.1);
  toast(p.name + " memperpanjang kontrak 3 tahun!"); saveGame(); render();
}
function toggleStarter(pid){var my=state.teams[state.myIdx];var idx=my.xi.indexOf(pid);if(idx!==-1)my.xi.splice(idx,1);render();}

/* ==================== FITUR BISNIS (TRANSFER, TOKO, SPONSOR) ==================== */
function renderTransfer(){
  if(!state.marketPlayers || state.marketPlayers.length === 0) {
      state.marketPlayers = [];
      var firstNames = ["Budi", "Agus", "Rizky", "Fajar", "Ilham", "Dimas", "Yoga", "Reza", "Fikri", "Hafiz", "Bima", "Bayu", "Eko", "Adi", "Rian", "Rangga", "Panji", "Satria", "Hendra", "Slamet"];
      var lastNames = ["Santoso", "Wijaya", "Saputra", "Pratama", "Hidayat", "Nugroho", "Kurniawan", "Putra", "Siregar", "Sinaga", "Nasution", "Lubis"];
      var positions = ['GK', 'DEF', 'MID', 'FWD'];
      var specificPos = {GK:['GK'],DEF:['CB','RB','LB','LWB','RWB'],MID:['RMF','LMF','CMF','DMF','AMF'],FWD:['SS','CF']};
      
      for (let i = 0; i < 1000; i++) {
          let pos = pick(positions); let sp = pick(specificPos[pos]); let rating = ri(55, 85);
          state.marketPlayers.push({id: 500000 + i, name: pick(firstNames) + ' ' + pick(lastNames), pos: pos, specificPos: sp, age: ri(18, 33), rating: rating, seasonGoals: 0, apps: 0, assists: 0, mvp: 0, contractYears: 3, weeklyWage: Math.round((rating - 40) * 1.5e6)});
      }
  }

  var my = state.teams[state.myIdx];
  var html = '<div class="card"><h2>Pasar Transfer</h2>';
  
  if(!state.transferFilter) state.transferFilter = 'SEMUA';
  var filters = ['SEMUA', 'GK', 'DEF', 'MID', 'FWD'];
  html += '<div style="display:flex;gap:5px;overflow-x:auto;margin-bottom:10px;padding-bottom:5px;">';
  filters.forEach(f => { html += '<button class="btn small '+(state.transferFilter===f?'primary':'')+'" onclick="state.transferFilter=\''+f+'\';render()">'+f+'</button>'; });
  html += '</div>';

  var targets = [];
  state.teams.forEach(function(t, i){ if(i === state.myIdx) return; t.players.forEach(function(p){ if(t.xi.indexOf(p.id) === -1) targets.push({p:p, t:t, i:i}); }); });
  if(state.marketPlayers) { state.marketPlayers.forEach(function(p) { targets.push({p:p, t:{name: 'Pasar Bebas'}, i: -1}); }); }
  
  if(state.transferFilter !== 'SEMUA') { targets = targets.filter(x => x.p.pos === state.transferFilter); }
  targets.sort((a,b) => b.p.rating - a.p.rating);
  
  html += '<div style="font-size:11px;color:#8bb59f;margin-bottom:10px;">Total Tersedia: <b>'+targets.length+'</b> pemain</div>';
  html += '<div class="scroll-box" style="max-height: 500px;"><table><tr><th>Nama</th><th>Klub</th><th class="num">OVR</th><th class="num">Harga</th><th></th></tr>';
  targets.slice(0, 100).forEach(function(x){
      var price = marketValue(x.p) * (x.i === -1 ? 1.2 : 1.0); var afford = my.budget >= price;
      html += '<tr><td><b>'+x.p.name+'</b><br><span style="font-size:9px;color:#8bb59f">'+x.p.specificPos+' - '+x.p.age+'thn</span></td>'+
          '<td style="font-size:9px">'+x.t.name+'</td><td class="num" style="color:#a8e6c1;font-weight:bold">'+x.p.rating+'</td>'+
          '<td class="num" style="color:#e9c46a">'+formatIDRShort(price)+'</td>'+
          '<td><button class="btn small '+(afford?'primary':'')+'" '+(afford?'':'disabled')+' onclick="buyMarketPlayer('+x.p.id+','+price+','+x.i+')">Beli</button></td></tr>';
  });
  return html + '</table></div></div>';
}

function buyMarketPlayer(id, price, sellerIdx){
  var my = state.teams[state.myIdx]; if(my.budget < price) return toast("Uang tidak cukup!");
  if (sellerIdx === -1) {
      var idx = state.marketPlayers.findIndex(p => p.id === id); if(idx === -1) return;
      var p = state.marketPlayers[idx]; my.budget -= price; my.players.push(p); state.marketPlayers.splice(idx, 1);
      toast("Berhasil membeli " + p.name + " dari pasar bebas!");
  } else {
      var seller = state.teams[sellerIdx]; var p2 = getP(seller, id);
      my.budget -= price; seller.budget += price; seller.players = seller.players.filter(x => x.id !== id); seller.xi = seller.xi.filter(x => x !== id);
      autoPickXI(seller, seller.formation); my.players.push(p2); toast("Berhasil membeli " + p2.name + " dari " + seller.name + "!");
  }
  render(); saveGame();
}

function renderFreeAgent(){
  var my = state.teams[state.myIdx];
  if(!state.freeAgents || !state.freeAgents.length){
    state.freeAgents = [];
    for(var i=0; i<10; i++) state.freeAgents.push({id: 90000+i, name: generateIndonesianName(), specificPos: pick(['DEF','MID','FWD']), pos: pick(['DEF','MID','FWD']), rating: ri(60, 75), age: ri(20, 32), seasonGoals:0, apps:0, assists:0, mvp:0, contractYears: 2});
  }
  var html = '<div class="card"><h2>Free Agent</h2><table><tr><th>Nama</th><th>Pos</th><th class="num">OVR</th><th></th></tr>';
  state.freeAgents.forEach(function(p){ html += '<tr><td><b>'+p.name+'</b></td><td>'+p.specificPos+'</td><td class="num" style="color:#a8e6c1">'+p.rating+'</td><td><button class="btn small primary" onclick="signFreeAgent('+p.id+')">Rekrut</button></td></tr>'; });
  return html + '</table></div>';
}
function signFreeAgent(id){
  var my = state.teams[state.myIdx]; var idx = state.freeAgents.findIndex(x => x.id === id);
  if(idx === -1) return; var p = state.freeAgents[idx]; p.id = PID++; my.players.push(p); state.freeAgents.splice(idx, 1);
  toast(p.name + " bergabung!"); render(); saveGame();
}

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
  else {
      state.sponsorOffers.forEach(function(s){ html += '<div style="background:#0f1a15;border-left:4px solid '+s.color+';padding:12px;margin-bottom:8px;border-radius:8px;display:flex;justify-content:space-between;align-items:center"><div><b style="color:'+s.color+'">'+s.name+'</b><br><span style="font-size:11px;color:#8bb59f">'+formatIDR(s.value)+'/tahun ('+s.duration+' Thn)</span></div><button class="btn primary small" onclick="acceptSponsor('+s.id+')">TTD</button></div>'; });
  }
  return html + '</div>';
}
function acceptSponsor(id){
  var my = state.teams[state.myIdx]; var idx = state.sponsorOffers.findIndex(x => x.id === id); if(idx === -1) return;
  var s = state.sponsorOffers[idx]; s.startSeason = state.season; s.endSeason = state.season + s.duration - 1;
  if(!state.sponsors) state.sponsors = []; state.sponsors.push(s); my.budget += s.value; state.sponsorOffers.splice(idx, 1);
  toast("Kontrak " + s.name + " disetujui! +" + formatIDR(s.value)); render(); saveGame();
}

function renderToko(){
  var my = state.teams[state.myIdx]; var items = [{name: 'Booster Pemain', price: 20e9, desc: '+1 Rating'}];
  var html = '<div class="card"><h2>Toko Klub</h2>';
  items.forEach(function(item){ html += '<div style="background:#0f1a15;padding:12px;margin-bottom:8px;border-radius:10px;display:flex;justify-content:space-between;align-items:center"><div><b>'+item.name+'</b><br><span style="font-size:10px;color:#8bb59f">'+item.desc+'</span></div><button class="btn small primary" onclick="buyItem('+item.price+')">Beli</button></div>'; });
  return html + '</div>';
}
function buyItem(price){ var my = state.teams[state.myIdx]; if(my.budget<price)return; my.budget-=price; toast("Dibeli!"); render(); saveGame(); }

function renderStadion(){
  var my = state.teams[state.myIdx]; var lvl = my.stadium ? my.stadium.level : 1; var cap = my.stadium ? my.stadium.cap : 10000;
  var html = '<div class="card"><h2>Stadion</h2><div style="background:#0f1a15;padding:20px;border-radius:12px;text-align:center;margin-bottom:15px;"><div style="font-size:40px;">🏟️</div><div style="font-size:16px;font-weight:bold;color:#a8e6c1">Level '+lvl+'</div><div style="font-size:12px;color:#8bb59f">Kapasitas: '+cap+'</div></div>';
  if(lvl < 5){ html += '<button class="btn primary" style="width:100%" onclick="upgradeStadium('+(lvl*100e9)+')">Upgrade - 100M</button>'; }
  return html + '</div>';
}
function upgradeStadium(cost){ var my = state.teams[state.myIdx]; if(my.budget<cost)return; my.budget-=cost; my.stadium.level++; my.stadium.cap+=10000; toast("Stadion Upgrade!"); render(); saveGame(); }

function renderIPO() {
  return '<div class="card" style="text-align:center;padding:20px"><div style="font-size:40px">📈</div><h2 style="margin:10px 0">Bursa Saham (IPO)</h2><p style="font-size:12px;color:#8bb59f;margin-bottom:15px">Buka akses publik untuk mendapatkan dana segar.</p><button class="btn" disabled style="width:100%">Segera Hadir</button></div>';
}
function renderAkuisisi() {
  return '<div class="card" style="text-align:center;padding:20px"><div style="font-size:40px">🤝</div><h2 style="margin:10px 0">Akuisisi Klub</h2><p style="font-size:12px;color:#8bb59f;margin-bottom:15px">Beli saham mayoritas klub lain.</p><button class="btn" disabled style="width:100%">Segera Hadir</button></div>';
}

/* ==================== AKADEMI, LATIHAN, TAKTIK ==================== */
function renderAkademi() {
  var my = state.teams[state.myIdx]; if(!my.academy) my.academy = [];
  var html = '<div class="card"><h2>Akademi Muda</h2>';
  if(my.academy.length === 0) html += '<div class="empty">Belum ada pemain di akademi.</div>';
  else {
    html += '<div class="scroll-box" style="display:flex; flex-direction:column; gap:8px;">';
    my.academy.sort((a,b) => (b.potential || 0) - (a.potential || 0));
    my.academy.forEach(function(p) {
      var pot = p.potential || 85; var progress = Math.round((p.rating / pot) * 100); if(progress > 100) progress = 100;
      var barColor = pot >= 90 ? '#ffd700' : pot >= 80 ? '#2ecc71' : '#3498db';
      var tierTag = p.tier === 'golden' ? '<span style="color:#ffd700;font-weight:bold;font-size:10px;">🌟 GOLDEN BOY</span>' : p.tier === 'elite' ? '<span style="color:#a8e6c1;font-weight:bold;font-size:10px;">💎 ISTIMEWA</span>' : '';
      html += '<div class="acad-card"><div style="flex:1;"><div style="font-size:12px; font-weight:bold; color:#e8f0ec; display:flex; justify-content:space-between;"><span>'+p.name+'</span> '+tierTag+'</div><div style="font-size:10px; color:#8bb59f; margin-top:2px;">'+p.specificPos+' - '+p.age+' Tahun</div><div style="margin-top:6px; display:flex; align-items:center; gap:6px;"><div class="progress-bg"><div class="progress-fill" style="width:'+progress+'%; background:'+barColor+';"></div></div><span style="font-size:9px; color:'+barColor+'; font-weight:bold;">'+p.rating+' / '+pot+'</span></div></div><div>'+(p.age >= 15 ? '<button class="btn small primary" style="border-radius:20px; padding:6px 12px; font-size:10px;" onclick="promoteYouth('+p.id+')">Promosi</button>' : '<span style="font-size:9px; color:#e63946;">Belum 15th</span>')+'</div></div>';
    });
    html += '</div>';
  }
  return html + '</div>';
}
function promoteYouth(id) { var my = state.teams[state.myIdx]; var idx = my.academy.findIndex(p => p.id === id); if(idx !== -1) { my.players.push(my.academy[idx]); my.academy.splice(idx, 1); toast("Pemain dipromosikan!"); render(); saveGame(); } }

function renderLatihan() {
  var my = state.teams[state.myIdx];
  var html = '<div class="card"><h2>Pusat Latihan</h2><p style="font-size:11px;color:#8bb59f;margin-bottom:12px;">Pilih pemain untuk ditingkatkan ratingnya (+1).</p>';
  html += '<div class="scroll-box"><table><tr><th>Nama</th><th>Pos</th><th class="num">OVR</th><th></th></tr>';
  my.players.forEach(function(p) { html += '<tr><td>'+p.name+'</td><td>'+p.specificPos+'</td><td class="num" style="color:#a8e6c1">'+p.rating+'</td><td><button class="btn small primary" onclick="trainPlayer('+p.id+')">Latih</button></td></tr>'; });
  return html + '</table></div></div>';
}
function trainPlayer(id) { var my = state.teams[state.myIdx]; var p = getP(my, id); if(p) { if(p.rating >= 95) return toast("Rating maksimal!"); p.rating++; toast(p.name + " naik rating!"); render(); saveGame(); } }

function renderTaktik() {
  var my = state.teams[state.myIdx]; var formation = my.formation || '4-3-3'; var posData = FORMATION_POS[formation] || FORMATION_POS['4-3-3'];
  var xiPlayers = my.xi.map(id => getP(my, id)).filter(Boolean); var slots = [];
  if(posData.GK) posData.GK.forEach(p => slots.push({x: p[0], y: p[1], pos: 'GK'}));
  if(posData.DEF) posData.DEF.forEach(p => slots.push({x: p[0], y: p[1], pos: 'DEF'}));
  if(posData.MID) posData.MID.forEach(p => slots.push({x: p[0], y: p[1], pos: 'MID'}));
  if(posData.FWD) posData.FWD.forEach(p => slots.push({x: p[0], y: p[1], pos: 'FWD'}));
  var playersSVG = '';
  for(var i=0; i<slots.length; i++) {
      var slot = slots[i]; var p = xiPlayers[i]; var px = slot.x; var py = slot.y;
      var color = slot.pos === 'GK' ? '#5e60ce' : slot.pos === 'DEF' ? '#2a9d8f' : slot.pos === 'MID' ? '#e9c46a' : '#e63946';
      var textColor = slot.pos === 'MID' ? '#04160c' : '#fff'; var nameText = p ? p.name.split(' ')[0] : 'Kosong'; var ovrText = p ? p.rating : '-';
      playersSVG += '<g transform="translate('+px+','+py+')"><circle r="4.5" fill="'+color+'" stroke="#fff" stroke-width="0.5" /><text y="0.8" text-anchor="middle" font-size="2.5" fill="'+textColor+'" font-weight="bold">'+ovrText+'</text><text y="6" text-anchor="middle" font-size="2" fill="#fff" font-weight="bold">'+nameText+'</text></g>';
  }
  var html = '<div class="card"><h2>Taktik & Formasi</h2><div style="background:#0f1a15; padding:15px; border-radius:12px; border:1px solid #24382e; margin-bottom:15px; text-align:center;"><h3 style="margin:0 0 10px 0; color:#a8e6c1;">'+formation+'</h3><svg viewBox="0 0 100 64" style="width:100%; border-radius:8px; background:#2d6b3a; display:block;"><rect width="100" height="64" fill="#2d6b3a"/><rect width="100" height="8" fill="#276334"/><rect y="16" width="100" height="8" fill="#276334"/><rect y="32" width="100" height="8" fill="#276334"/><rect y="48" width="100" height="8" fill="#276334"/><rect x="1" y="1" width="98" height="62" fill="none" stroke="#fff" stroke-width="0.35" opacity="0.4"/><line x1="50" y1="1" x2="50" y2="63" stroke="#fff" stroke-width="0.3" opacity="0.4"/><circle cx="50" cy="32" r="9" fill="none" stroke="#fff" stroke-width="0.3" opacity="0.4"/><rect x="1" y="14" width="16" height="36" fill="none" stroke="#fff" stroke-width="0.3" opacity="0.4"/><rect x="83" y="14" width="16" height="36" fill="none" stroke="#fff" stroke-width="0.3" opacity="0.4"/>'+playersSVG+'</svg></div>';
  html += '<h3>Ubah Formasi</h3><div class="row">';
  Object.keys(FORMATIONS).forEach(function(f) { html += '<button class="btn '+(my.formation===f?'primary':'')+'" onclick="state.teams[state.myIdx].formation=\''+f+'\';autoPickXI(state.teams[state.myIdx],\''+f+'\');render()">'+f+'</button>'; });
  return html + '</div></div>';
}

/* ==================== KOMPETISI (TABEL, BEST XI, STATISTIK, LEGENDA) ==================== */
function getTable(div){
  var idxs=getDivIndices(div);var t=idxs.map(function(i){return {team:state.teams[i],idx:i,P:0,W:0,D:0,L:0,GF:0,GA:0,Pts:0};});
  var map={};t.forEach(function(r){map[r.idx]=r;});
  if(state.fixtures[div]) state.fixtures[div].forEach(function(rd){rd.forEach(function(f){if(!f.played)return;var h=map[f.home],a=map[f.away];if(!h||!a)return;h.P++;a.P++;h.GF+=f.hg;h.GA+=f.ag;a.GF+=f.ag;a.GA+=f.hg;if(f.hg>f.ag){h.W++;a.L++;h.Pts+=3;}else if(f.hg<f.ag){a.W++;h.L++;a.Pts+=3;}else{h.D++;a.D++;h.Pts++;a.Pts++;}});});
  t.sort(function(x,y){return y.Pts-x.Pts||(y.GF-y.GA)-(x.GF-x.GA);});return t;
}
function renderTable(){
  var div = state.tableDiv || state.myDiv || 1; var t = getTable(div);
  var toggle = '<div class="div-toggle"><button class="div-btn '+(div===1?'active':'')+'" onclick="setTableDiv(1)">Divisi 1</button><button class="div-btn '+(div===2?'active':'')+'" onclick="setTableDiv(2)">Divisi 2</button></div>';
  var html = '<div class="card"><h2>Klasemen Divisi '+div+'</h2>' + toggle;
  html += '<div class="scroll-box"><table><tr><th>#</th><th>Klub</th><th class="num">P</th><th class="num">SG</th><th class="num">Pts</th></tr>';
  t.forEach(function(r,i){
    var isMine = r.idx === state.myIdx; var rowStyle = '';
    if(div === 1 && i >= t.length - 3) rowStyle = 'background:rgba(230,57,70,0.1);';
    if(div === 2 && i < 3) rowStyle = 'background:rgba(46,204,113,0.1);';
    html += '<tr class="'+(isMine?'mine':'')+'" style="'+rowStyle+'"><td>'+(i+1)+'</td><td style="font-size:11px; font-weight:bold;"><span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:'+r.team.color+'; margin-right:6px;"></span>'+r.team.name+'</td><td class="num" style="font-size:11px;">'+r.P+'</td><td class="num" style="font-size:11px;">'+(r.GF-r.GA>0?'+':'')+(r.GF-r.GA)+'</td><td class="num" style="font-weight:900; color:#a8e6c1; font-size:12px;">'+r.Pts+'</td></tr>';
  });
  return html + '</table></div></div>';
}

function renderBestXI(){
  var myDiv = state.myDiv; var divTeams = state.teams.filter(t => t.div === myDiv); var allPlayers = [];
  divTeams.forEach(t => { t.players.forEach(p => { if(p.apps >= 3) { var perfScore = ((p.avgRating || p.rating) * 10) + (p.seasonGoals * 2) + (p.assists * 1.5) + (p.mvp * 3); allPlayers.push({p: p, t: t, score: perfScore}); } }); });
  allPlayers.sort((a,b) => b.score - a.score);
  var bestXI = { GK: [], DEF: [], MID: [], FWD: [] };
  allPlayers.forEach(x => { var maxAllowed = (x.p.pos === 'GK') ? 1 : (x.p.pos === 'DEF') ? 4 : 3; if(bestXI[x.p.pos].length < maxAllowed) bestXI[x.p.pos].push(x); });
  var html = '<div class="card"><h2>Best XI (Musim ' + state.season + ')</h2><p style="font-size:11px;color:#8bb59f;margin-bottom:15px;">Formasi 4-3-3. Dipilih berdasarkan performa rata-rata, gol, assist, dan MVP.</p>';
  var posNames = { GK: '🧤 Kiper', DEF: '🛡️ Bek', MID: '⚙️ Gelandang', FWD: '⚽ Penyerang' }; var posColors = { GK: '#9b59b6', DEF: '#3498db', MID: '#e9c46a', FWD: '#e63946' };
  ['GK', 'DEF', 'MID', 'FWD'].forEach(pos => {
    if (bestXI[pos].length > 0) {
      html += '<h3 style="color:'+posColors[pos]+'; margin-top:15px;">' + posNames[pos] + '</h3><table><tr><th>Pemain</th><th>Klub</th><th class="num">Rating</th><th class="num">G/A/MVP</th></tr>';
      bestXI[pos].forEach(x => { var isMine = x.t === state.teams[state.myIdx]; var ratingStr = x.p.avgRating ? x.p.avgRating.toFixed(2) : x.p.rating; html += '<tr class="'+(isMine?'mine':'')+'"><td><b>'+x.p.name+'</b></td><td style="font-size:9px">'+x.t.name.slice(0,10)+'</td><td class="num" style="color:#2ecc71;font-weight:bold;">'+ratingStr+'</td><td class="num" style="font-size:10px;">'+x.p.seasonGoals+'/'+x.p.assists+'/'+x.p.mvp+'</td></tr>'; });
      html += '</table>';
    }
  });
  if(allPlayers.length === 0) html += '<div class="empty">Belum ada cukup data pertandingan.</div>';
  return html + '</div>';
}

function topScorers(){var all=[];state.teams.forEach(function(t){t.players.forEach(function(p){if(p.seasonGoals>0)all.push({p:p,t:t});});});all.sort(function(a,b){return b.p.seasonGoals-a.p.seasonGoals;});return all;}
function renderStats(){
  var myDiv = state.myDiv; var divTeams = state.teams.filter(t => t.div === myDiv); var allPlayers = [];
  divTeams.forEach(t => { t.players.forEach(p => { allPlayers.push({p: p, t: t}); }); });
  var topScorersList = allPlayers.filter(x => x.p.seasonGoals > 0).sort((a,b) => b.p.seasonGoals - a.p.seasonGoals).slice(0, 5);
  var topAssistsList = allPlayers.filter(x => x.p.assists > 0).sort((a,b) => b.p.assists - a.p.assists).slice(0, 5);
  var topMVPList = allPlayers.filter(x => x.p.mvp > 0).sort((a,b) => b.p.mvp - a.p.mvp).slice(0, 5);
  var html = '<div class="card"><h2>Statistik Liga Divisi ' + myDiv + '</h2>';
  html += '<h3 style="color:#2ecc71;margin-top:15px;">⚽ Top Skor</h3>'; if(topScorersList.length === 0) html += '<div class="empty">Belum ada gol.</div>'; else { html += '<table><tr><th>Pemain</th><th>Klub</th><th class="num">Gol</th></tr>'; topScorersList.forEach(x => { html += '<tr class="'+(x.t === state.teams[state.myIdx]?'mine':'')+'"><td>'+x.p.name+'</td><td style="font-size:9px">'+x.t.name.slice(0,10)+'</td><td class="num" style="color:#2ecc71;font-weight:bold">'+x.p.seasonGoals+'</td></tr>'; }); html += '</table>'; }
  html += '<h3 style="color:#3498db;margin-top:15px;">👟 Top Assist</h3>'; if(topAssistsList.length === 0) html += '<div class="empty">Belum ada assist.</div>'; else { html += '<table><tr><th>Pemain</th><th>Klub</th><th class="num">Assist</th></tr>'; topAssistsList.forEach(x => { html += '<tr class="'+(x.t === state.teams[state.myIdx]?'mine':'')+'"><td>'+x.p.name+'</td><td style="font-size:9px">'+x.t.name.slice(0,10)+'</td><td class="num" style="color:#3498db;font-weight:bold">'+x.p.assists+'</td></tr>'; }); html += '</table>'; }
  html += '<h3 style="color:#ffd700;margin-top:15px;">⭐ Top MVP</h3>'; if(topMVPList.length === 0) html += '<div class="empty">Belum ada MVP.</div>'; else { html += '<table><tr><th>Pemain</th><th>Klub</th><th class="num">MVP</th></tr>'; topMVPList.forEach(x => { html += '<tr class="'+(x.t === state.teams[state.myIdx]?'mine':'')+'"><td>'+x.p.name+'</td><td style="font-size:9px">'+x.t.name.slice(0,10)+'</td><td class="num" style="color:#ffd700;font-weight:bold">'+x.p.mvp+'</td></tr>'; }); html += '</table>'; }
  return html + '</div>';
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
  var html = '<div class="card" style="background:linear-gradient(140deg,#1a1408,#0f1a15);border-color:#ffd700;"><div style="text-align:center;margin-bottom:20px;"><div style="font-size:40px;">👑</div><h2 style="color:#ffd700;margin:10px 0;">Hall of Fame</h2><p style="font-size:11px;color:#8bb59f;">Daftar pemain terhebat sepanjang sejarah kompetisi (Skor GOAT).</p></div>';
  if(legends.length === 0) html += '<div class="empty">Belum ada legenda. Selesaikan musim pertama Anda!</div>';
  else {
      html += '<div class="scroll-box"><table><tr><th>#</th><th>Pemain</th><th class="num">Skor</th><th class="num">Gol</th><th class="num">Asis</th><th class="num">MVP</th></tr>';
      legends.slice(0, 20).forEach((x, i) => { var rankColor = i === 0 ? '#ffd700' : i === 1 ? '#c0c0c0' : i === 2 ? '#cd7f32' : '#7fae94'; var medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i+1); html += '<tr><td style="font-weight:bold;color:'+rankColor+'">'+medal+'</td><td><div style="font-weight:bold;color:#e8f0ec;font-size:12px;">'+x.name+'</div><div style="font-size:9px;color:#8bb59f;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:120px;">'+x.teamsStr+'</div></td><td class="num" style="font-weight:900;color:#ffd700;">'+x.score+'</td><td class="num" style="color:#2ecc71;">'+x.goals+'</td><td class="num" style="color:#3498db;">'+x.assists+'</td><td class="num" style="color:#e9c46a;">'+x.mvp+'</td></tr>'; });
      html += '</table></div>';
  }
  return html + '</div>';
}

function renderPiala() { return '<div class="card"><h2>Piala</h2><div class="empty">Piala belum dimulai.</div></div>'; }
function renderRiwayat() { return '<div class="card"><h2>Riwayat</h2><div class="empty">Musim baru saja dimulai.</div></div>'; }
function renderBerita() {
  var html = '<div class="card"><h2>Berita Sepak Bola</h2>';
  if(state.news.length === 0) html += '<div class="empty">Belum ada berita hari ini.</div>';
  else { state.news.forEach(function(n) { var borderColor = '#457b9d'; if (n.t.includes('ALERT') || n.t.includes('Cedera') || n.t.includes('Kalah')) borderColor = '#e63946'; else if (n.t.includes('Sembuh') || n.t.includes('Menang') || n.t.includes('Juara')) borderColor = '#2ecc71'; else if (n.t.includes('Sponsor') || n.t.includes('Bonus') || n.t.includes('Dana')) borderColor = '#ffd700'; html += '<div class="news-bubble" style="border-left-color:'+borderColor+';">'+n.t+'</div>'; }); }
  return html + '</div>';
}
function renderSeasonEnd() { return '<div class="card" style="text-align:center"><h2>Musim Berakhir</h2><button class="btn primary" onclick="location.reload()">Muat Ulang</button></div>'; }

/* ==================== MATCH UI & ANIMASI 2D ==================== */
function renderMatch(){
  var m=pendingMatch;if(!m) return '<div class="card">No Match</div>';
  var f = FORMATION_POS[m.h.formation||'4-3-3']; var hPos=[]; var aPos=[]; var idxH={GK:0,DEF:0,MID:0,FWD:0}; var idxA={GK:0,DEF:0,MID:0,FWD:0};
  m.h.xi.map(id=>getP(m.h,id)).filter(Boolean).forEach(function(p){var arr=f[p.pos];if(arr){var pos=arr[idxH[p.pos]++ % arr.length];hPos.push({x:pos[0],y:pos[1]});}});
  m.a.xi.map(id=>getP(m.a,id)).filter(Boolean).forEach(function(p){var arr=f[p.pos];if(arr){var pos=arr[idxA[p.pos]++ % arr.length];aPos.push({x:100-pos[0],y:pos[1]});}});
  var playersSVG='';
  hPos.forEach(function(p,i){ playersSVG+='<g class="pp" data-bx="'+p.x+'" data-by="'+p.y+'" transform="translate('+p.x+','+p.y+')"><circle r="1.9" fill="'+m.h.color+'" stroke="#fff" stroke-width="0.25"/><text y="0.7" text-anchor="middle" font-size="1.8" fill="#fff" font-weight="700">'+(i+1)+'</text></g>'; });
  aPos.forEach(function(p,i){ playersSVG+='<g class="pp" data-bx="'+p.x+'" data-by="'+p.y+'" transform="translate('+p.x+','+p.y+')"><circle r="1.9" fill="'+m.a.color+'" stroke="#fff" stroke-width="0.25"/><text y="0.7" text-anchor="middle" font-size="1.8" fill="#fff" font-weight="700">'+(i+1)+'</text></g>'; });
  var pitchHTML = '<div class="pitch-wrap"><svg viewBox="0 0 100 64" class="pitch" preserveAspectRatio="xMidYMid meet"><rect width="100" height="64" fill="#2d6b3a"/><rect width="100" height="8" fill="#276334"/><rect y="16" width="100" height="8" fill="#276334"/><rect y="32" width="100" height="8" fill="#276334"/><rect y="48" width="100" height="8" fill="#276334"/><rect x="1" y="1" width="98" height="62" fill="none" stroke="#fff" stroke-width="0.35" opacity="0.85"/><line x1="50" y1="1" x2="50" y2="63" stroke="#fff" stroke-width="0.3" opacity="0.85"/><circle cx="50" cy="32" r="9" fill="none" stroke="#fff" stroke-width="0.3" opacity="0.85"/><rect x="1" y="14" width="16" height="36" fill="none" stroke="#fff" stroke-width="0.3" opacity="0.85"/><rect x="83" y="14" width="16" height="36" fill="none" stroke="#fff" stroke-width="0.3" opacity="0.85"/>'+playersSVG + '<g class="ball" id="pitchBall" transform="translate(50,32)"><circle r="0.9" fill="#fff" stroke="#111" stroke-width="0.15"/></g></svg></div>';
  var eventsHTML = m.ctx.events.map(e => '<div class="event '+(e.type==='goal'?'goal':'')+'">'+e.min+"' - "+e.text+'</div>').join('');
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
  for (var i = 0; i < pitchAnim.players.length; i++) { var p = pitchAnim.players[i]; var swayX = Math.sin(pitchAnim.t * 0.9 + p.seed) * 0.5; var swayY = Math.cos(pitchAnim.t * 0.7 + p.seed * 1.7) * 0.4; p.x += ((p.tx + swayX) - p.x) * 0.075; p.y += ((p.ty + swayY) - p.y) * 0.075; p.el.setAttribute('transform', 'translate(' + p.x.toFixed(2) + ',' + p.y.toFixed(2) + ')'); }
  if (pitchAnim.ball) { var b = pitchAnim.ball; b.x += (b.tx - b.x) * 0.09; b.y += (b.ty - b.y) * 0.09; b.el.setAttribute('transform', 'translate(' + b.x.toFixed(2) + ',' + b.y.toFixed(2) + ')'); }
  pitchAnim.raf = requestAnimationFrame(loopPitchAnim);
}

/* ==================== MENU AWAL & INIT ==================== */
function renderSelect(){
  var slotsHTML='';[1,2,3].forEach(n=>{slotsHTML+='<div id="slot-card-'+n+'" style="background:#0f1a15;border:1px solid #24382e;border-radius:10px;padding:12px;margin-bottom:8px;"><div style="color:#8bb59f;font-size:12px;">Memuat Slot '+n+'...</div></div>';});
  setTimeout(async function(){ for(var i=0;i<3;i++){var n=i+1;var info=await getSlotInfo(n);var el=document.getElementById('slot-card-'+n);if(!el)continue; if(info){el.innerHTML='<b>Slot '+n+'</b><br><span style="font-size:11px">'+info.team+' (Pekan '+(info.round+1)+')</span><br><button class="btn primary" onclick="loadAndPlay('+n+')">LANJUTKAN</button>';}else{el.innerHTML='<b>Slot '+n+'</b><br><span style="font-size:11px">Kosong</span><br><button class="btn small" onclick="newGame(0,'+n+')">Mulai (Persija)</button>';} } },100);
  return '<div class="card" style="text-align:center"><h2>LIGA MANAJER</h2></div><div class="card">'+slotsHTML+'</div>';
}
async function loadAndPlay(n){ if(await loadGame(n)) { state.view='main'; render(); } else { toast('Gagal memuat'); } }
function newGame(myIdx,slot){
  PID=0; state.activeSlot=slot||1;
  state.teams=TEAM_DEFS.map(d=>({name:d.name,color:d.color,div:d.div,players:makeSquad(d.base),formation:'4-3-3',xi:[],budget:100e9,stadium:{level:1,cap:10000}}));
  var intl = generateInternationalTeams(); state.teams = state.teams.concat(intl);
  state.teams.forEach(t=>autoPickXI(t, t.formation));
  state.myIdx=myIdx; state.myDiv=state.teams[myIdx].div;
  state.fixtures={1:makeFixtures(getDivIndices(1)),2:makeFixtures(getDivIndices(2))};
  state.round=0; state.dayInWeek=1; state.season=1; state.view='main'; state.mainTab='beranda'; state.subTab='squad';
  render(); saveGame();
}
function addRandomNews(){ if(!state.news)state.news=[]; state.news.unshift({t:'Berita hari ini: Kompetisi berjalan ketat.'}); }
function toast(msg){var ex=document.querySelectorAll('.toast');for(var i=0;i<ex.length;i++)ex[i].remove();var d=document.createElement('div');d.className='toast';d.textContent=msg;document.body.appendChild(d);setTimeout(()=>d.remove(),2000);}
function exitToMenu(){ saveGame(); state.view='select'; render(); }

/* ==================== FUNGSI PENYELAMAT ==================== */
function getTransferWindowLabel() {
    return { open: true, label: 'Bursa Aktif', color: '#2ecc71' };
}

function getMatchDate() {
    var baseDay = ((state.round * 7) + state.dayInWeek);
    var m = Math.floor(baseDay / 28);
    var d = (baseDay % 28) + 1;
    var monthNames = ['Agu', 'Sep', 'Okt', 'Nov', 'Des', 'Jan', 'Feb', 'Mar', 'Apr', 'Mei'];
    return d + ' ' + (monthNames[m] || 'Mei') + ' ' + (2026 + Math.floor(m / 9));
}

/* ==================== FUNGSI PENYELAMAT 2 ==================== */
function marketValue(p){
  var ageF = p.age<=23?1.4 : p.age<=27?1.2 : p.age<=30?0.9 : p.age<=33?0.5 : 0.25;
  var baseValue = Math.max(3, Math.round((p.rating-40)*(p.rating-40)/30*ageF)) * 1e9;
  return Math.round(baseValue * (state.inflation || 1.0));
}

function weeklyWage(p){
  return Math.round((p.rating-40)*1.5e6);
}

function playerNeedsReducedContract(p){
  if(p.age>=32) return true;
  if(p.previousRating && p.previousRating > p.rating+3) return true;
  return false;
}

/* ==================== VALIDASI STARTING XI ==================== */
function ensureValidStartingXI() {
  var my = state.teams[state.myIdx];
  if (!my) return;
  
  // Pastikan array xi ada
  if (!my.xi) my.xi = [];

  var currentXI = my.xi.map(id => getP(my, id)).filter(Boolean);
  var hasGK = currentXI.some(p => p.pos === 'GK');
  
  // Jika tidak ada kiper, atau pemain kurang dari 11
  if (!hasGK || currentXI.length < 11) {
      // Gunakan fungsi autoPickXI bawaan game untuk merombak XI
      autoPickXI(my, my.formation || '4-3-3');
  }
}

function isXIValid() {
  var my = state.teams[state.myIdx];
  if (!my || !my.xi) return false;
  var currentXI = my.xi.map(id => getP(my, id)).filter(Boolean);
  var hasGK = currentXI.some(p => p.pos === 'GK');
  return currentXI.length === 11 && hasGK;
}

window.onload = function() { 
  try { render(); } catch(e) { alert("Gagal memuat game: " + e.message); } 
};
