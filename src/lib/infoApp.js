// Mesin tampilan Media Informasi Klinik Oilia Rorotan.
// Isi teks halaman (ID + EN) ada di file ini; data jadwal/kontak ada di src/data/klinik.js
import {CLINIC,DAYS,SCHED,PHOTO_OF,TELE_DAYS,RS,HAK,KEWAJIBAN} from '../data/klinik';

let mounted=false;
export function mountInfoApp(){
if(mounted) return; mounted=true;
let lang='id';
try{const s=localStorage.getItem('oilia-lang');if(s==='en'||s==='id')lang=s}catch(e){}
const T=(id,en)=>lang==='en'?en:id;


const I={
  route:'<path d="M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M6 15V9a4 4 0 0 1 4-4h2M18 9v6a4 4 0 0 1-4 4h-2"/>',
  phone:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  tooth:'<path d="M12 5c-2-2-6-2-7 1-1 4 1 7 2 10 .5 2 1 4 2 4s1.5-3 3-3 2 3 3 3 1.5-2 2-4c1-3 3-6 2-10-1-3-5-3-7-1z"/>',
  doc:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  hosp:'<path d="M4 21V7l8-4 8 4v14"/><path d="M10 21v-5h4v5M12 8v4M10 10h4"/>',
  loop:'<path d="M4 12a8 8 0 0 1 14-5.3L20 9M20 12a8 8 0 0 1-14 5.3L4 15"/><path d="M20 4v5h-5M4 20v-5h5"/>',
  people:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><circle cx="17" cy="9" r="2.5"/><path d="M16 15c3 0 5 2 5 4"/>',
  pill:'<rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-45 12 12)"/><path d="M9 9l6 6"/>',
  lung:'<path d="M12 4v8M12 12c-1 1-3 1-4 0M12 12c1 1 3 1 4 0"/><path d="M8 7c-3 1-5 5-5 10 0 2 2 3 4 2l2-1V9M16 7c3 1 5 5 5 10 0 2-2 3-4 2l-2-1V9"/>',
  baby:'<circle cx="12" cy="6" r="3"/><path d="M8 21c0-5 1-8 4-10 3 2 4 5 4 10"/><path d="M9 15h6"/>',
  flask:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M7.5 15h9"/>',
  plane:'<path d="M2 16l20-8-6 12-3-5-5 3z"/><path d="M13 15l-3-3"/>',
  clip:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 11l2 2 4-4M9 17h6"/>',
  pin:'<path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  scale:'<path d="M12 3v18M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>',
  rules:'<path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',
  siren:'<path d="M6 18v-6a6 6 0 0 1 12 0v6"/><path d="M4 21h16v-3H4zM12 2v2M4.2 5.2l1.4 1.4M19.8 5.2l-1.4 1.4"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  chat:'<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>'
};
const ico=k=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${I[k]}</svg>`;
const steps=arr=>`<ol class="steps">${arr.map((s,i)=>`<li class="step"><div class="num">${i+1}</div><div><h3>${s[0]}</h3><p>${s[1]}</p>${s[2]?`<span class="tag">${s[2]}</span>`:''}</div></li>`).join('')}</ol>`;
const ul=(arr,cls='')=>`<ul class="${cls}">${arr.map(x=>`<li>${x}</li>`).join('')}</ul>`;
let MODE='bpjs';
const rel=ids=>`<h2>${T('Informasi terkait','Related information')}</h2><div class="related">${ids.map(id=>{const c=cats(MODE).find(x=>x.id===id);return c?`<a href="#${MODE}-${id}">${c.t()}</a>`:''}).join('')}</div>`;

/* ---------- schedule data ---------- */
const PHOTOS=new Proxy({},{get:(_,k)=>`/foto/${String(k)}.jpg`});
const avatar=(n,sm)=>{const k=PHOTO_OF[n];if(k)return `<img class="av${sm?' sm':''}" src="${PHOTOS[k]}" alt="${n}" loading="lazy">`;const ini=n.replace(/^(dr\.|drg\.|Bidan)\s*/,'').split(' ').slice(0,2).map(w=>w[0]).join('');return `<span class="av init${sm?' sm':''}">${ini}</span>`};
const jakartaDay=()=>{try{const d=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Jakarta',weekday:'short'}).format(new Date());return {Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6}[d]}catch(e){return new Date().getDay()}};
let selDay=null;

function schedFor(d){
  const s=SCHED[d]; const dn=DAYS[d-1];
  const row=(n,h,note)=>`<div class="sched-row"><div class="who">${avatar(n)}<div>${n}${note?`<em>${note}</em>`:''}</div></div><span>${h}</span></div>`;
  let h=`<div class="sched">`;
  h+=`<div class="sched-block"><h3>${T('Poli Umum','General Clinic')}</h3>${s.umum.map(x=>row(x[0],x[1])).join('')}</div>`;
  h+=`<div class="sched-block"><h3>${T('Poli Gigi','Dental Clinic')}</h3>${s.gigi.map(x=>row(x[0],x[1])).join('')}</div>`;
  h+=`<div class="sched-block"><h3>${T('Poli KIA (Bidan)','Maternal & Child Health (Midwife)')}</h3>${row('Bidan Tittin Widya Astuti, A.Md.Keb.','13.00–16.30')}</div>`;
  const VT=T('Vaksinasi internasional','International vaccination');
  if(TELE_DAYS.includes(d)) h+=`<div class="sched-block"><h3>${VT} & ${T('Telemedicine BPJS','BPJS telemedicine')}</h3>${row('dr. Rio Alexander','08.00–14.00',T('Setelah 14.00, vaksinasi dilayani dokter vaksinator yang bertugas.','After 14.00, vaccination is handled by the vaccinating doctor on duty.'))}</div>`;
  else if(d===3) h+=`<div class="sched-block"><h3>${VT}</h3>${row('dr. Rio Alexander','08.00–20.00',T('Sekaligus praktik Poli Umum','Also on General Clinic duty'))}</div>`;
  else h+=`<div class="sched-block"><h3>${VT}</h3><p class="fine">${T('Dilayani dokter vaksinator yang bertugas, 08.00–20.00.','Handled by the vaccinating doctor on duty, 08.00–20.00.')}</p></div>`;
  return h+`</div>`;
}

/* ---------- hospitals ---------- */

/* ---------- rights ---------- */

/* ---------- shared pages ---------- */
const P={};
P.jadwal=()=>{
  const today=jakartaDay(); if(selDay===null) selDay=(today>=1&&today<=6)?today:1;
  return `<h1>${T('Jadwal Praktik','Clinic Schedule')}</h1>
<div class="stat"><div><b>${T('Senin–Sabtu','Mon–Sat')}</b><span>${T('Tutup hari Minggu dan tanggal merah','Closed on Sundays and public holidays')}</span></div><div><b>08.00–19.30</b><span>${T('Pengambilan nomor antrean. Jika pasien sedikit, bisa sampai 19.45 WIB.','Queue numbers available. When it is quiet, until 19.45 WIB.')}</span></div></div>
${today===0?`<div class="note gold"><b>${T('Hari ini Minggu, klinik tutup.','Today is Sunday. The clinic is closed.')}</b></div>`:''}
<p class="fine">${T('Pilih hari untuk melihat dokter yang praktik (semua jam dalam WIB).','Pick a day to see who is on duty (all times WIB).')}</p>
<div class="days" id="days">${DAYS.map(d=>`<button class="day" data-day="${d[0]}" aria-pressed="${selDay===d[0]}">${T(d[3],d[4])}${d[0]===today?`<small>${T('hari ini','today')}</small>`:''}</button>`).join('')}</div>
<h2 id="dayTitle">${T(DAYS[selDay-1][1],DAYS[selDay-1][2])}</h2>
<div id="dayBody">${schedFor(selDay)}</div>
<div class="note"><b>${T('Catatan','Notes')}</b>${ul([
 T('Vaksinasi internasional tersedia Senin–Sabtu, 08.00–20.00 WIB.','International vaccination is available Monday–Saturday, 08.00–20.00 WIB.'),
 T('Ingin buku ICV jadi di hari yang sama? Datang sebelum pukul 12.00 WIB.','Need your ICV book the same day? Arrive before 12.00 WIB.'),
 T('Imunisasi anak setiap tanggal 28, mulai pukul 10.30 WIB. Jika tanggal 28 jatuh pada hari Minggu atau tanggal merah, jadwal dimajukan; silakan konfirmasi ke WhatsApp klinik.','Childhood immunisation is on the 28th of each month from 10.30 WIB. If the 28th falls on a Sunday or public holiday it is moved earlier; please confirm on the clinic WhatsApp.'),
 T('Jadwal dapat berubah sewaktu-waktu. Hubungi WhatsApp klinik untuk memastikan.','Schedules may change. Contact the clinic on WhatsApp to confirm.')
])}</div>`;
};
P.kontak=()=>`<h1>${T('Lokasi & Kontak','Location & Contact')}</h1>
<div class="card"><h2>${T('Alamat','Address')}</h2><p>${CLINIC.addr}</p>
<p class="fine">${T('Patokan: dekat Kantor Lurah Rorotan, Jakarta Utara.','Landmark: near the Rorotan Sub-district Office (Kantor Lurah Rorotan), North Jakarta.')}</p>
<div class="links"><a class="btn" href="${CLINIC.maps}" target="_blank" rel="noopener">${ico('pin').replace('<svg','<svg width="18" height="18"')} ${T('Buka di Google Maps','Open in Google Maps')}</a></div></div>
<div class="card"><h2>${T('Parkir','Parking')}</h2>${ul([T('Motor: di teras klinik.','Motorcycles: on the clinic\'s front terrace.'),T('Motor dan mobil: di seberang klinik.','Motorcycles and cars: across the street from the clinic.')])}</div>
<div class="card"><h2>${T('Kontak','Contact')}</h2><div class="kv">
${[['WhatsApp',CLINIC.wa],[T('Telepon','Phone'),CLINIC.tel],['Email',CLINIC.email],['Instagram','@'+CLINIC.ig],['TikTok','@'+CLINIC.tt]].map(([k,v])=>`<div class="kv-row"><div><small>${k}</small><b>${v}</b></div><button class="copy" data-copy="${v}">${T('Salin','Copy')}</button></div>`).join('')}
</div><div class="links"><a class="btn" href="${CLINIC.waLink}" target="_blank" rel="noopener">${T('Chat WhatsApp','Chat on WhatsApp')}</a><a class="btn ghost" href="https://www.instagram.com/${CLINIC.ig}/" target="_blank" rel="noopener">Instagram</a><a class="btn ghost" href="https://www.tiktok.com/@${CLINIC.tt}" target="_blank" rel="noopener">TikTok</a></div></div>
<div class="note"><b>${T('Waktu balasan WhatsApp','WhatsApp reply hours')}</b><p>${T('Pesan dibalas pada jam kerja, 08.00–20.00 WIB, atau lebih cepat bila customer service sedang tersedia di luar jam kerja.','Messages are answered during working hours, 08.00–20.00 WIB, or sooner if customer service is available outside those hours.')}</p></div>`;
P.tatatertib=()=>{
 const g=[
  [T('Kesehatan dan kebersihan','Health and hygiene'),[
   T('Buanglah sampah pada tempatnya.','Put rubbish in the bins provided.'),
   T('Jika batuk atau pilek, gunakan masker.','If you have a cough or cold, wear a mask.'),
   T('Terapkan etika batuk: tutup mulut dan hidung dengan lengan bagian dalam (siku) saat batuk atau bersin.','Follow cough etiquette: cover your mouth and nose with the inside of your elbow when coughing or sneezing.'),
   T('Dilarang merokok di seluruh area klinik.','Smoking is not allowed anywhere on clinic premises.')]],
  [T('Antrean dan pelayanan','Queue and service'),[
   T('Jika baru pertama kali berobat, silakan bertanya kepada petugas.','If this is your first visit, please ask our staff for help.'),
   T('Perhatikan nomor antrean Anda agar tidak terlewat saat dipanggil. Jika terlewat, konfirmasi ke perawat agar dipanggil kembali.','Watch for your queue number so you are not skipped. If you missed your call, tell a nurse so you can be called again.'),
   T('Ikuti arahan petugas.','Follow staff instructions.'),
   T('Patuhi ketentuan klinik, baik yang tertulis maupun yang dijelaskan oleh petugas.','Follow clinic rules, whether written or explained by staff.')]],
  [T('Pendamping pasien','Companions'),[
   T('Pendamping pasien maksimal 1 orang.','One companion per patient at most.'),
   T('Maksimal 2 orang pendamping untuk pasien yang sulit berjalan.','Up to two companions for patients who have difficulty walking.')]],
  [T('Ketertiban dan keamanan','Order and safety'),[
   T('Jaga ketenangan dan ketertiban di lingkungan klinik.','Keep the clinic quiet and orderly.'),
   T('Dilarang melakukan kekerasan, baik fisik maupun verbal, terhadap petugas.','Physical or verbal violence against staff is prohibited.'),
   T('Dilarang mengambil foto atau video pelayanan di klinik tanpa izin petugas.','Photographing or filming services at the clinic without staff permission is prohibited.')]],
  [T('Pembayaran dan fasilitas','Payment and facilities'),[
   T('Pembayaran yang sudah dilakukan tidak dapat dikembalikan dengan alasan apa pun.','Payments made are non-refundable for any reason.'),
   T('Kerusakan perabotan, alat medis, atau fasilitas klinik yang disebabkan pasien atau pengunjung menjadi tanggung jawab orang yang menyebabkannya.','Damage to furniture, medical equipment or facilities caused by a patient or visitor is the responsibility of the person who caused it.')]]
 ];
 let n=0;
 return `<h1>${T('Tata Tertib Pasien dan Pengunjung','Rules for Patients and Visitors')}</h1>
<p>${T('Demi kenyamanan dan keselamatan bersama, setiap pasien dan pengunjung Klinik Pratama Oilia Medical Centre Rorotan wajib mematuhi tata tertib berikut.','For everyone\'s comfort and safety, all patients and visitors to Klinik Pratama Oilia Medical Centre Rorotan must follow these rules.')}</p>
<div class="rules">${g.map(([h,items])=>`<div class="card"><h2>${h}</h2><ol class="num-list" start="${n+1}">${items.map(i=>{n++;return `<li>${i}</li>`}).join('')}</ol></div>`).join('')}</div>`;
};
P.hak=()=>`<h1>${T('Hak dan Kewajiban Pasien','Patient Rights and Responsibilities')}</h1>
<p class="fine">${T('Berdasarkan Keputusan Kepala Klinik Pratama Oilia Medical Centre Rorotan Nomor 22 Tahun 2023.','Based on Decree of the Head of Klinik Pratama Oilia Medical Centre Rorotan No. 22 of 2023.')}</p>
<div class="card"><h2>${T('Hak pasien','Patient rights')}</h2><ol class="num-list">${HAK.map(x=>`<li>${T(x[0],x[1])}</li>`).join('')}</ol></div>
<div class="card"><h2>${T('Kewajiban pasien','Patient responsibilities')}</h2><ol class="num-list">${KEWAJIBAN.map(x=>`<li>${T(x[0],x[1])}</li>`).join('')}</ol></div>
<div class="note"><b>${T('Saran dan pengaduan','Suggestions and complaints')}</b><p>${T('Sampaikan melalui kotak saran di klinik atau WhatsApp klinik '+CLINIC.wa+'.','Use the suggestion box at the clinic or the clinic WhatsApp '+CLINIC.wa+'.')}</p></div>`;
P.tbc=()=>`<h1>${T('Layanan TBC','Tuberculosis (TB) Care')}</h1>
<div class="note ok"><b>${T('Gratis, untuk pasien BPJS maupun pribadi','Free, for both BPJS and self-pay patients')}</b><p>${T('Klinik melayani pasien TBC dari awal pemeriksaan hingga sembuh.','The clinic cares for TB patients from the first check-up until they are cured.')}</p></div>
<div class="card"><h2>${T('Layanan yang tersedia','Services')}</h2>${ul([
 T('Pemeriksaan fisik oleh dokter','Physical examination by a doctor'),
 T('Pemeriksaan dahak','Sputum testing'),
 T('Pelacakan kontak serumah','Household contact tracing'),
 T('Pemberian obat TBC sampai sembuh','TB medication until cured'),
 T('Obat pencegahan TBC bagi orang yang tinggal serumah dengan pasien TBC','TB preventive medication for people living with a TB patient')],'check')}</div>
<h2>${T('Cara pemeriksaan dahak','How sputum testing works')}</h2>
${steps([
 [T('Terima 2 pot dahak','Get 2 sputum pots'),T('Pot dahak diberikan oleh klinik untuk dibawa pulang.','The clinic gives you the pots to take home.')],
 [T('Tampung dahak di rumah','Collect sputum at home'),T('Keluarkan dahak ke dalam pot sesaat setelah bangun tidur dan sesudah makan. Pastikan yang ditampung adalah dahak, bukan air liur.','Cough sputum into the pots right after waking up and after eating. Make sure it is sputum from the chest, not saliva.')],
 [T('Kembalikan pot ke klinik','Return the pots to the clinic'),T('Klinik akan mengirim dahak ke laboratorium Puskesmas Cilincing untuk diperiksa.','The clinic sends the samples to the Puskesmas Cilincing laboratory for testing.')]
])}`;
P.kia=()=>`<h1>${T('Kehamilan, KB & Imunisasi Anak','Pregnancy, Family Planning & Child Immunisation')}</h1>
<div class="card"><h2>${T('Poli KIA','Maternal & Child Health Clinic')}</h2><p><b>Bidan Tittin Widya Astuti, A.Md.Keb.</b></p><p>${T('Senin–Sabtu, 13.00–16.30 WIB','Monday–Saturday, 13.00–16.30 WIB')}</p></div>
<div class="card"><h2>${T('Pemeriksaan kehamilan (ANC)','Antenatal care (ANC)')}</h2>${ul([
 T('Konsultasi kehamilan dengan bidan','Pregnancy consultation with the midwife'),
 T('USG oleh dokter pada trimester 1 dan trimester 3','Ultrasound by a doctor in the 1st and 3rd trimester')],'check')}</div>
<div class="card"><h2>${T('Layanan lain di Poli KIA','Other services')}</h2>${ul([
 T('Layanan KB (keluarga berencana)','Family planning (contraception)'),
 T('Imunisasi anak setiap tanggal 28, mulai pukul 10.30 WIB: hepatitis B, polio, DPT, campak, dan MMR','Childhood immunisation on the 28th of each month from 10.30 WIB: hepatitis B, polio, DPT, measles and MMR')],'check')}</div>
<div class="note"><b>${T('Jika tanggal 28 hari Minggu atau tanggal merah','If the 28th is a Sunday or public holiday')}</b><p>${T('Jadwal imunisasi dimajukan. Silakan konfirmasi terlebih dahulu ke WhatsApp klinik '+CLINIC.wa+'.','Immunisation is moved to an earlier day. Please confirm first on the clinic WhatsApp '+CLINIC.wa+'.')}</p></div>
<div class="note gold"><b>${T('Persalinan belum tersedia di klinik','Childbirth is not yet available at the clinic')}</b><p>${T('Untuk persalinan, silakan ke bidan jejaring kami:','For delivery, please go to our partner midwife:')}</p></div>
<div class="card"><h2>PMB Fitria Tristianti, S.Tr.Keb.</h2><p>Jl. Sungai Kendal No.31, RT.2/RW.8, Rorotan, Kec. Cilincing, Jakarta Utara 14140</p>
<div class="kv"><div class="kv-row"><div><small>${T('Kontak','Contact')}</small><b>0821-1461-7775</b></div><button class="copy" data-copy="082114617775">${T('Salin','Copy')}</button></div></div>
<p class="fine">${T('Persalinan di PMB Fitria dapat ditanggung BPJS.','Delivery at PMB Fitria can be covered by BPJS.')}</p></div>`;
P.suratsakit=()=>`<h1>${T('Surat Keterangan Sakit','Sick Leave Letter')}</h1>
<p>${T('Pasien boleh meminta surat sakit, tetapi <b>keputusan tetap berada pada dokter yang memeriksa</b>.','You may ask for a sick leave letter, but <b>the decision rests with the examining doctor</b>.')}</p>
<div class="note ok"><b>${T('Diterbitkan jika','Issued when')}</b><p>${T('Pasien sakit sedang atau berat sehingga perlu beristirahat.','You are moderately or severely ill and need rest.')}</p></div>
<div class="note"><b>${T('Tidak diterbitkan jika','Not issued when')}</b><p>${T('Dokter menilai pasien masih dapat bekerja atau beraktivitas.','The doctor judges you are still able to work or carry on with daily activities.')}</p></div>
<div class="card"><h2>${T('Ketentuan','Rules')}</h2>${ul([
 T('Istirahat maksimal <b>3 hari</b>.','Maximum rest of <b>3 days</b>.'),
 T('Tidak dapat dibuat mundur tanggalnya.','Cannot be backdated.'),
 T('Tidak diterbitkan melalui telemedicine. Pasien yang cukup ditangani lewat telemedicine berarti sakitnya ringan.','Not issued through telemedicine. If telemedicine is enough, the illness is considered mild.'),
 T('Tidak ada biaya tambahan khusus untuk surat sakit.','There is no extra charge for the letter itself.')])}</div>
<div class="note"><b>${T('Butuh surat keterangan sehat?','Need a health certificate?')}</b><p>${T('Surat keterangan sehat diterbitkan melalui medical check-up (layanan pribadi).','Health certificates are issued through a medical check-up (self-pay service).')} <a href="#umum-mcu">${T('Lihat medical check-up','See medical check-up')}</a></p></div>`;

P.darurat=()=>`<h1>${T('Kapan Harus Langsung ke IGD?','When to Go Straight to the ER')}</h1>
<div class="note warn"><b>${T('Jangan datang ke klinik dan jangan menunggu antrean','Do not come to the clinic or wait in a queue')}</b><p>${T('Jika Anda atau keluarga mengalami salah satu keadaan di bawah ini, segera ke IGD rumah sakit terdekat atau hubungi layanan darurat.','If you or a family member has any of the conditions below, go to the nearest hospital emergency department (IGD) or call emergency services.')}</p></div>
<div class="stat"><div><b>119</b><span>${T('Layanan ambulans gawat darurat (SPGDT)','Emergency ambulance service (SPGDT)')}</span></div><div><b>112</b><span>${T('Layanan darurat Jakarta Siaga','Jakarta Siaga emergency line')}</span></div></div>
<div class="card"><h2>${T('Napas dan jantung','Breathing and heart')}</h2>${ul([
 T('Sesak napas berat, napas berbunyi, atau bibir dan ujung jari kebiruan','Severe shortness of breath, noisy breathing, or blue lips or fingertips'),
 T('Nyeri dada hebat, terasa ditekan atau menjalar ke lengan, leher, atau rahang','Severe chest pain or pressure spreading to the arm, neck or jaw'),
 T('Tersedak dan tidak bisa bernapas atau berbicara','Choking and unable to breathe or speak')])}</div>
<div class="card"><h2>${T('Otak dan kesadaran','Brain and consciousness')}</h2>${ul([
 T('Tanda stroke: wajah mencong, lengan atau tungkai lemah sebelah, bicara pelo, terjadi mendadak','Signs of stroke: drooping face, weakness on one side, slurred speech, starting suddenly'),
 T('Pingsan, sulit dibangunkan, atau bingung mendadak','Fainting, hard to wake, or sudden confusion'),
 T('Kejang','Seizures'),
 T('Sakit kepala hebat yang muncul tiba-tiba','Sudden, severe headache')])}</div>
<div class="card"><h2>${T('Cedera dan perdarahan','Injury and bleeding')}</h2>${ul([
 T('Kecelakaan dengan cedera berat, benturan kepala disertai muntah atau penurunan kesadaran','Serious accident injuries, or a head injury with vomiting or reduced consciousness'),
 T('Perdarahan hebat yang tidak berhenti setelah ditekan','Heavy bleeding that does not stop with pressure'),
 T('Dugaan patah tulang dengan bentuk anggota gerak berubah','Suspected broken bone with a visibly deformed limb'),
 T('Luka bakar luas atau mengenai wajah, tangan, atau kelamin','Large burns, or burns to the face, hands or genitals'),
 T('Tersengat listrik, tenggelam, atau digigit hewan berbisa','Electric shock, near-drowning, or venomous bites')])}</div>
<div class="card"><h2>${T('Keadaan lain','Other conditions')}</h2>${ul([
 T('Reaksi alergi berat: bengkak di wajah, bibir, atau lidah disertai sesak','Severe allergic reaction: swollen face, lips or tongue with difficulty breathing'),
 T('Muntah darah atau BAB hitam atau berdarah','Vomiting blood, or black or bloody stools'),
 T('Nyeri perut hebat yang mendadak','Sudden severe abdominal pain'),
 T('Keracunan makanan, obat, atau bahan kimia','Poisoning from food, medicine or chemicals'),
 T('Muntah atau diare terus-menerus hingga sangat lemas dan tidak bisa minum','Continuous vomiting or diarrhoea with severe weakness and inability to drink'),
 T('Ibu hamil: perdarahan dari jalan lahir, ketuban pecah, kejang, atau gerakan janin berkurang','Pregnancy: vaginal bleeding, waters breaking, seizures, or reduced baby movements')])}</div>
<div class="note ok"><b>${T('Peserta BPJS Kesehatan','BPJS Kesehatan members')}</b><p>${T('Dalam keadaan gawat darurat, peserta BPJS dapat langsung ke IGD rumah sakit tanpa surat rujukan dari klinik. Kondisi gawat darurat ditentukan oleh dokter IGD.','In an emergency, BPJS members can go straight to a hospital ER without a referral letter from the clinic. Whether it is an emergency is decided by the ER doctor.')}</p></div>
<p class="fine">${T('Rumah sakit terdekat dari klinik antara lain RS Umum Pekerja dan RS Firdaus (±3,7 km).','The nearest hospitals include RS Umum Pekerja and RS Firdaus (about 3.7 km).')} <a href="#bpjs-rujukan">${T('Lihat daftar rumah sakit','See the hospital list')}</a></p>
${rel(['kecelakaan'])}`;

P.kecelakaan=()=>`<h1>${T('Penjaminan Biaya Kecelakaan','Who Pays for Accident Care')}</h1>
<p>${T('Penjamin biaya pengobatan kecelakaan bergantung pada jenis kecelakaannya. Cek jenis kecelakaan Anda di bawah ini.','Who covers your treatment depends on the type of accident. Find yours below.')}</p>
<div class="tbl"><table><thead><tr><th>${T('Jenis kecelakaan','Type of accident')}</th><th>${T('Penjamin','Covered by')}</th></tr></thead><tbody>
<tr><td>${T('Kecelakaan kerja, atau kecelakaan lalu lintas saat berangkat/pulang kerja atau dinas','Work accident, or traffic accident while commuting or on a work trip')}</td><td><b>BPJS Ketenagakerjaan</b></td></tr>
<tr><td>${T('Kecelakaan lalu lintas di luar urusan kerja yang melibatkan kendaraan lain, atau sebagai penumpang angkutan umum','Traffic accident not related to work involving another vehicle, or as a public transport passenger')}</td><td><b>Jasa Raharja</b>${T(', dilanjutkan BPJS Kesehatan',', then BPJS Kesehatan')}</td></tr>
<tr><td>${T('Kecelakaan lalu lintas tunggal di luar urusan kerja','Single-vehicle traffic accident not related to work')}</td><td><b>BPJS Kesehatan</b></td></tr>
</tbody></table></div>
<div class="note warn"><b>${T('Laporan polisi adalah syarat utama','A police report is the key requirement')}</b><p>${T('Untuk semua kecelakaan lalu lintas, segera buat laporan ke kepolisian (Unit Laka Lantas) di wilayah kejadian. Tanpa laporan polisi, klaim biasanya tidak dapat diproses.','For every traffic accident, report it to the traffic police (Unit Laka Lantas) where it happened as soon as possible. Without a police report, claims usually cannot be processed.')}</p></div>

<h2>BPJS Ketenagakerjaan (${T('Jaminan Kecelakaan Kerja','Work Accident Insurance')})</h2>
<div class="card">${ul([
 T('Untuk kecelakaan saat bekerja, saat dinas, atau di perjalanan berangkat dan pulang kerja melalui rute yang wajar dari rumah ke tempat kerja.','For accidents at work, on work trips, or while commuting to and from work by a normal route between home and workplace.'),
 T('Harus terdaftar sebagai peserta aktif BPJS Ketenagakerjaan.','You must be an active BPJS Ketenagakerjaan member.'),
 T('Segera beri tahu perusahaan. Perusahaan wajib melapor ke BPJS Ketenagakerjaan paling lambat 2 x 24 jam sejak kecelakaan.','Tell your employer immediately. Your employer must report it to BPJS Ketenagakerjaan within 2 x 24 hours.'),
 T('Berobat di rumah sakit atau klinik mitra BPJS Ketenagakerjaan (trauma center/PLKK) agar biaya ditanggung langsung sesuai kebutuhan medis.','Get treated at a BPJS Ketenagakerjaan partner hospital or clinic (trauma centre/PLKK) so costs are covered directly according to medical need.'),
 T('Jika kecelakaan lalu lintas melibatkan kendaraan lain, Jasa Raharja membayar lebih dulu sesuai batasnya dan sisanya ditanggung BPJS Ketenagakerjaan.','If a traffic accident involves another vehicle, Jasa Raharja pays first up to its limit and BPJS Ketenagakerjaan covers the rest.'),
 T('Kecelakaan kerja tidak ditanggung BPJS Kesehatan.','Work accidents are not covered by BPJS Kesehatan.')])}
<p><b>${T('Dokumen','Documents')}</b></p>${ul([T('KTP dan kartu peserta BPJS Ketenagakerjaan','ID card and BPJS Ketenagakerjaan membership card'),T('Kronologi kejadian dan keterangan saksi','Account of the accident and witness statements'),T('Laporan polisi (untuk kecelakaan lalu lintas)','Police report (for traffic accidents)'),T('Bukti absensi atau surat tugas dari perusahaan','Attendance record or duty letter from your employer')],'check')}
<p class="fine">${T('Informasi: call center BPJS Ketenagakerjaan 175.','Information: BPJS Ketenagakerjaan call centre 175.')}</p></div>

<h2>Jasa Raharja</h2>
<div class="card">${ul([
 T('Untuk korban kecelakaan lalu lintas yang melibatkan kendaraan lain (tabrakan), pejalan kaki yang ditabrak, dan penumpang angkutan umum.','For victims of traffic accidents involving another vehicle, pedestrians hit by a vehicle, and public transport passengers.'),
 T('Kecelakaan tunggal kendaraan pribadi tidak ditanggung Jasa Raharja.','Single-vehicle accidents in a private vehicle are not covered by Jasa Raharja.'),
 T('Tidak perlu terdaftar sebagai peserta.','No membership needed.')])}
<div class="lab">
<div><b>${T('Biaya perawatan','Medical treatment')}</b>${T('maks. Rp20 juta','up to Rp20 million')}</div>
<div><b>${T('Pertolongan pertama (P3K)','First aid')}</b>${T('maks. Rp1 juta','up to Rp1 million')}</div>
<div><b>${T('Ambulans','Ambulance')}</b>${T('maks. Rp500 ribu','up to Rp500,000')}</div>
</div>
<p><b>${T('Dokumen','Documents')}</b></p>${ul([T('Laporan polisi','Police report'),T('KTP dan Kartu Keluarga korban','Victim\'s ID card and family card (KK)'),T('Surat keterangan dari rumah sakit','Medical certificate from the hospital')],'check')}
<p class="fine">${T('Di rumah sakit yang bekerja sama dengan Jasa Raharja, petugas RS dapat membantu mengurus surat jaminan. Jika biaya melebihi Rp20 juta, kelebihannya dapat dilanjutkan oleh BPJS Kesehatan bagi peserta aktif.','At hospitals that work with Jasa Raharja, hospital staff can help arrange the guarantee letter. Costs above Rp20 million can be continued by BPJS Kesehatan for active members.')}</p></div>

<h2>BPJS Kesehatan</h2>
<div class="card">${ul([
 T('<b>Kecelakaan tunggal</b> (misalnya jatuh sendiri dari motor): BPJS Kesehatan menjadi penjamin pertama.','<b>Single-vehicle accident</b> (for example falling off your own motorbike): BPJS Kesehatan is the first payer.'),
 T('<b>Kecelakaan yang melibatkan kendaraan lain</b>: BPJS Kesehatan menjadi penjamin kedua, menanggung biaya yang melebihi batas Jasa Raharja.','<b>Accident involving another vehicle</b>: BPJS Kesehatan is the second payer and covers costs above the Jasa Raharja limit.'),
 T('Status kepesertaan BPJS Kesehatan harus aktif.','Your BPJS Kesehatan membership must be active.'),
 T('Tetap siapkan laporan polisi, termasuk untuk kecelakaan tunggal, karena digunakan untuk memastikan penjaminnya.','Still prepare a police report, including for single-vehicle accidents, because it is used to confirm who pays.'),
 T('Kecelakaan kerja dan kecelakaan saat perjalanan kerja ditanggung BPJS Ketenagakerjaan, bukan BPJS Kesehatan.','Work and commuting accidents are covered by BPJS Ketenagakerjaan, not BPJS Kesehatan.')])}
<p class="fine">${T('Informasi: BPJS Kesehatan Care Center 165.','Information: BPJS Kesehatan Care Center 165.')}</p></div>

<div class="note"><b>${T('Luka ringan akibat kecelakaan?','Minor injuries from an accident?')}</b><p>${T('Luka lecet atau luka robek kecil dapat ditangani di klinik (rawat luka dan jahit luka). Bawa laporan polisi jika ada, dan petugas akan menjelaskan penjaminannya. Cedera berat langsung ke IGD rumah sakit.','Grazes and small cuts can be treated at the clinic (wound care and stitches). Bring a police report if you have one and staff will explain how it is covered. For serious injuries, go straight to a hospital ER.')}</p></div>
<p class="fine">${T('Ketentuan dapat berubah sesuai peraturan terbaru. Konfirmasi ke petugas rumah sakit, Jasa Raharja, atau BPJS terkait.','Rules may change with new regulations. Confirm with hospital staff, Jasa Raharja, or the relevant BPJS office.')}</p>
${rel(['darurat'])}`;

const SHARED=[
 {id:'jadwal',ic:'cal',t:()=>T('Jadwal Praktik','Clinic Schedule'),d:()=>T('Dokter, dokter gigi, dan bidan per hari','Doctors, dentists and midwife by day'),r:P.jadwal},
 {id:'kontak',ic:'pin',t:()=>T('Lokasi & Kontak','Location & Contact'),d:()=>T('Alamat, parkir, WhatsApp, media sosial','Address, parking, WhatsApp, social media'),r:P.kontak},
 {id:'tatatertib',ic:'rules',t:()=>T('Tata Tertib','Clinic Rules'),d:()=>T('Aturan untuk pasien dan pengunjung','Rules for patients and visitors'),r:P.tatatertib},
 {id:'hak',ic:'scale',t:()=>T('Hak & Kewajiban Pasien','Patient Rights'),d:()=>T('Hak Anda dan kewajiban sebagai pasien','Your rights and responsibilities'),r:P.hak},
 {id:'darurat',ic:'siren',t:()=>T('Gawat Darurat','Emergencies'),d:()=>T('Kapan harus langsung ke IGD','When to go straight to the ER'),r:P.darurat},
 {id:'kecelakaan',ic:'shield',t:()=>T('Penjaminan Kecelakaan','Accident Coverage'),d:()=>T('BPJS Kesehatan, BPJS Ketenagakerjaan, Jasa Raharja','BPJS Kesehatan, BPJS Ketenagakerjaan, Jasa Raharja'),r:P.kecelakaan}
];

/* ---------- BPJS ---------- */
const BPJS=[
 {id:'alur',ic:'route',t:()=>T('Alur Berobat BPJS','BPJS Visit Steps'),d:()=>T('Dari daftar di rumah sampai pulang','From registering at home to going home'),r:()=>`<h1>${T('Alur Berobat Pasien BPJS','Steps for BPJS Patients')}</h1>
${steps([
 [T('Daftar lewat Mobile JKN dari rumah','Register on Mobile JKN from home'),T('Pilih Klinik Pratama Oilia Medical Centre Rorotan dan poli tujuan (Poli Umum atau Poli Gigi). Pasien yang belum mendaftar tetap dilayani, tetapi akan diarahkan mendaftar lewat Mobile JKN sesuai ketentuan BPJS.','Choose Klinik Pratama Oilia Medical Centre Rorotan and your clinic (General or Dental). If you have not registered you will still be seen, but staff will ask you to register on Mobile JKN as required by BPJS.')],
 [T('Ambil nomor antrean di klinik','Take a queue number at the clinic'),T('Mulai pukul 08.00 sampai 19.30 WIB. Urutan pelayanan mengikuti <b>nomor antrean yang diambil di klinik</b>, bukan urutan daftar di Mobile JKN.','From 08.00 to 19.30 WIB. You are served by <b>the queue number taken at the clinic</b>, not by your Mobile JKN registration order.')],
 [T('Tunggu dipanggil di pendaftaran','Wait to be called at registration'),T('Tunjukkan KTP (atau KIA untuk anak), nomor antrean, dan aplikasi Mobile JKN.','Show your ID card (KTP, or KIA for children), queue number and the Mobile JKN app.')],
 [T('Ke ruang tunggu poli','Go to the clinic waiting area'),T('Menuju ruang tunggu Poli Umum atau Poli Gigi. Tanda-tanda vital Anda diperiksa terlebih dahulu.','Go to the General or Dental waiting area. Your vital signs are checked first.')],
 [T('Tunggu dipanggil ke poli','Wait to be called in'),T('Pasien dipanggil dengan <b>nomor antrean</b>, bukan nama. Jika terlewat, konfirmasi ke perawat agar dipanggil kembali.','Patients are called by <b>queue number</b>, not by name. If you missed your call, tell a nurse so you can be called again.')],
 [T('Diperiksa dokter','See the doctor'),T('Sampaikan keluhan Anda dengan jelas.','Describe your complaint clearly.')],
 [T('Farmasi atau pulang','Pharmacy or home'),T('Jika diresepkan obat, tunggu di ruang tunggu depan sampai dipanggil farmasi. Jika tidak ada obat, Anda bisa langsung pulang.','If you are prescribed medicine, wait in the front waiting area until the pharmacy calls you. Otherwise you can go home.')]
])}
<div class="card"><h2>${T('Yang perlu dibawa','What to bring')}</h2>${ul([T('KTP, atau KIA (Kartu Identitas Anak) untuk anak','ID card (KTP), or KIA for children'),T('Aplikasi Mobile JKN di HP','The Mobile JKN app on your phone'),T('Kartu BPJS fisik <b>tidak</b> diperlukan','A physical BPJS card is <b>not</b> needed')],'check')}</div>
<div class="note gold"><b>${T('Status BPJS tidak aktif atau terdaftar di faskes lain?','BPJS inactive or registered at another clinic?')}</b><p>${T('Anda tetap dilayani, tetapi dengan pembayaran pribadi.','You will still be seen, but as a self-pay patient.')} <a href="#umum">${T('Lihat info pasien pribadi','See self-pay information')}</a></p></div>
${rel(['tele','gigi','suratsakit','jadwal'])}`},

 {id:'tele',ic:'phone',t:()=>T('Telemedicine Mobile JKN','Mobile JKN Telemedicine'),d:()=>T('Untuk keluhan ringan, tanpa antre','For mild complaints, no queue'),r:()=>`<h1>${T('Telemedicine Mobile JKN','Mobile JKN Telemedicine')}</h1>
<p>${T('Poli Umum BPJS tidak dibatasi jumlah pasiennya. Untuk keluhan ringan, pasien diarahkan berkonsultasi lewat telemedicine di aplikasi Mobile JKN sehingga tidak perlu mengantre di klinik.','There is no daily limit for the BPJS General Clinic. For mild complaints, patients are directed to telemedicine in the Mobile JKN app so they do not need to queue.')}</p>
<div class="stat"><div><b>${T('Sen, Sel, Kam, Jum','Mon, Tue, Thu, Fri')}</b><span>08.00–14.00 WIB · dr. Rio Alexander</span></div></div>
<div class="card"><h2>${T('Keluhan yang diarahkan ke telemedicine','Complaints suited to telemedicine')}</h2>${ul([
 T('Batuk atau pilek ringan, kurang dari 1 minggu','Mild cough or cold, less than 1 week'),
 T('Mual, muntah, diare, atau nyeri perut ringan, kurang dari 3 hari','Mild nausea, vomiting, diarrhoea or stomach ache, less than 3 days')])}
<p class="fine">${T('Dokter akan menilai kondisi Anda saat konsultasi dan menentukan apakah cukup lewat telemedicine atau perlu diperiksa langsung.','The doctor assesses you during the consultation and decides whether telemedicine is enough or you need an in-person exam.')}</p></div>
<h2>${T('Setelah konsultasi','After the consultation')}</h2>
${steps([
 [T('Jika sakit ringan: resep diberikan','If mild: you receive a prescription'),T('Resep muncul di aplikasi Mobile JKN.','The prescription appears in the Mobile JKN app.')],
 [T('Ambil obat di farmasi klinik','Collect medicine at the clinic pharmacy'),T('Tunjukkan resep di aplikasi ke bagian farmasi, lalu tunggu dipanggil setelah obat selesai disiapkan.','Show the prescription in the app to the pharmacy, then wait to be called when it is ready.')],
 [T('Jika sakit sedang/berat','If moderate or severe'),T('Anda akan diminta datang untuk diperiksa langsung di klinik mengikuti alur berobat BPJS.','You will be asked to come in for an in-person exam following the BPJS visit steps.')]
])}
<div class="note"><b>${T('Di luar jadwal telemedicine','Outside telemedicine hours')}</b><p>${T('Telemedicine tidak tersedia. Silakan berobat langsung ke klinik, meskipun sakit ringan.','Telemedicine is not available. Please visit the clinic in person, even for mild illness.')}</p></div>
<div class="note"><b>${T('Surat sakit','Sick leave letter')}</b><p>${T('Tidak diterbitkan melalui telemedicine.','Not issued through telemedicine.')}</p></div>
${rel(['alur','suratsakit'])}`},

 {id:'gigi',ic:'tooth',t:()=>T('Poli Gigi BPJS','BPJS Dental Clinic'),d:()=>T('Kuota 10 pasien per hari','10 patients per day'),r:()=>`<h1>${T('Poli Gigi BPJS','BPJS Dental Clinic')}</h1>
<div class="stat"><div><b>10</b><span>${T('pasien BPJS per hari','BPJS patients per day')}</span></div><div><b>H-1 · 08.00</b><span>${T('pendaftaran dibuka lewat Mobile JKN','registration opens on Mobile JKN')}</span></div></div>
${steps([
 [T('Daftar lewat Mobile JKN, H-1 mulai 08.00','Register on Mobile JKN the day before, from 08.00'),T('Pendaftaran dibuka satu hari sebelum hari pemeriksaan pukul 08.00 WIB, hanya melalui Mobile JKN (tidak bisa datang langsung).','Registration opens at 08.00 WIB one day before your visit, only through Mobile JKN (not in person).')],
 [T('Jika kuota penuh','If the quota is full'),T('Anda tidak dapat mendaftar untuk hari itu. Silakan coba lagi saat pendaftaran hari berikutnya dibuka. Tidak ada pengecualian kuota.','You cannot register for that day. Try again when the next day\'s registration opens. There are no exceptions to the quota.')],
 [T('Datang di hari pemeriksaan','Come on your appointment day'),T('Ikuti alur berobat BPJS: ambil nomor antrean, pendaftaran, ruang tunggu Poli Gigi, lalu diperiksa dokter gigi.','Follow the BPJS steps: queue number, registration, dental waiting area, then the dentist.')]
])}
<div class="note"><b>${T('Contoh','Example')}</b><p>${T('Ingin periksa gigi hari Rabu? Daftar di Mobile JKN pada hari Selasa mulai pukul 08.00.','Want a dental visit on Wednesday? Register on Mobile JKN on Tuesday from 08.00.')}</p></div>
<div class="card"><h2>${T('Layanan gigi BPJS','BPJS dental services')}</h2><div class="chips">${[T('Konsultasi','Consultation'),T('Pengobatan','Treatment'),'Scaling',T('Tambal gigi','Fillings'),T('Cabut gigi','Extractions')].map(x=>`<span>${x}</span>`).join('')}</div><p class="fine">${T('Sesuai indikasi dan keadaan medis pasien.','Based on medical need and your condition.')}</p></div>
${rel(['jadwal','alur','rujukan'])}`},

 {id:'suratsakit',ic:'doc',t:()=>T('Surat Sakit','Sick Leave Letter'),d:()=>T('Kapan surat sakit diterbitkan','When a letter is issued'),r:P.suratsakit},

 {id:'rujukan',ic:'hosp',t:()=>T('Rujukan ke Rumah Sakit','Hospital Referral'),d:()=>T('Ketentuan dan daftar RS rujukan','Rules and referral hospitals'),r:()=>`<h1>${T('Rujukan ke Rumah Sakit','Hospital Referral')}</h1>
<p>${T('Anda boleh bertanya kepada dokter apakah kondisi Anda perlu dirujuk. <b>Keputusan tetap berada pada dokter yang memeriksa</b>, berdasarkan ada atau tidaknya indikasi medis.','You may ask the doctor whether you need a referral. <b>The decision rests with the examining doctor</b>, based on medical need.')}</p>
<div class="note ok"><b>${T('Jika ada indikasi rujukan','If a referral is indicated')}</b><p>${T('Anda dapat memilih rumah sakit tujuan dari daftar RS rujukan di bawah.','You can choose a hospital from the list below.')}</p></div>
<div class="note"><b>${T('Jika tidak ada indikasi rujukan','If no referral is indicated')}</b><p>${T('Ikuti anjuran dokter. Jika kondisi tidak berubah, datang kembali untuk kontrol agar dokter dapat memeriksa ulang.','Follow the doctor\'s advice. If your condition does not change, come back for a follow-up so the doctor can re-examine you.')}</p></div>
<div class="card"><h2>${T('Ketentuan surat rujukan','Referral letter rules')}</h2>${ul([
 T('Berlaku selama <b>3 bulan</b>.','Valid for <b>3 months</b>.'),
 T('Harus dicetak di klinik setelah pemeriksaan langsung. Tidak bisa melalui Mobile JKN.','Printed at the clinic after an in-person exam. Not available through Mobile JKN.'),
 T('Jika tidak digunakan dalam <b>1 minggu</b>, rujukan dinonaktifkan dan tidak bisa dipakai di RS. Anda perlu diperiksa kembali di klinik untuk mencetak ulang.','If not used within <b>1 week</b>, it is deactivated and cannot be used at the hospital. You must be re-examined at the clinic to reprint it.')])}</div>
<h2>${T('Daftar RS rujukan','Referral hospitals')}</h2>
<p class="fine">${T('Diurutkan dari yang terdekat dengan klinik.','Sorted by distance from the clinic.')}</p>
<div class="rs">${RS.map(r=>`<div class="rs-item"><b>${r[0]}<span class="kelas">${T('Kelas','Class')} ${r[1]}</span></b><div class="dist">${lang==='en'?r[4].replace(',','.'):r[4]} km<small>${T('dari klinik','from clinic')}</small></div><p>${r[2]}, Jakarta Utara · ${r[3]}</p></div>`).join('')}</div>
<p class="fine">${T('Jadwal dokter spesialis di rumah sakit dapat berubah. Hubungi rumah sakit tujuan untuk memastikan jadwal.','Specialist schedules at hospitals change. Contact the hospital to confirm.')}</p>
${rel(['kontrol','prb'])}`},

 {id:'kontrol',ic:'loop',t:()=>T('Perpanjang Rujukan','Renew a Referral'),d:()=>T('Datang langsung & bawa surat kontrol','Come in person with a control letter'),r:()=>`<h1>${T('Perpanjang Rujukan','Renewing a Referral')}</h1>
<div class="note warn"><b>${T('Wajib datang langsung','You must come in person')}</b><p>${T('Perpanjangan rujukan tidak bisa diwakilkan atau dititipkan.','A referral renewal cannot be done by someone else on your behalf.')}</p></div>
<div class="stat"><div><b>${T('1 minggu','1 week')}</b><span>${T('sebelum masa berlaku rujukan habis, Anda sudah bisa memperpanjang','before your referral expires, you can already renew it')}</span></div></div>
<div class="card"><h2>${T('Yang dibawa','What to bring')}</h2>${ul([T('<b>Surat kontrol</b> dari rumah sakit','<b>Control letter</b> (surat kontrol) from the hospital'),T('Mobile JKN atau KTP untuk pendaftaran di klinik','Mobile JKN or your ID card for registration')],'check')}</div>
<h2>${T('Mengapa surat kontrol diperlukan?','Why is a control letter needed?')}</h2>
<p>${T('Surat kontrol adalah bukti resmi bahwa dokter rumah sakit meminta dokter Klinik Oilia Rorotan untuk mengembalikan pasien ke RS karena perawatan di RS belum selesai.','The control letter is official proof that the hospital doctor has asked Klinik Oilia Rorotan to send you back because your hospital treatment is not finished.')}</p>
<div class="note gold"><b>${T('Belum mendapat surat kontrol?','No control letter yet?')}</b><p>${T('Mintalah secara aktif kepada pihak rumah sakit, baik dokter, perawat, maupun bagian administrasi, sebelum Anda pulang dari RS.','Ask the hospital for one, whether the doctor, a nurse or the administration desk, before you leave the hospital.')}</p></div>
${rel(['rujukan','prb'])}`},

 {id:'prolanis',ic:'people',t:()=>T('Prolanis','Prolanis'),d:()=>T('Program penyakit kronis (DM & hipertensi)','Chronic disease programme (diabetes & hypertension)'),r:()=>`<h1>Prolanis</h1>
<p>${T('Prolanis (Program Pengelolaan Penyakit Kronis) adalah program BPJS untuk peserta dengan <b>diabetes melitus</b> dan <b>hipertensi</b>.','Prolanis (Chronic Disease Management Programme) is a BPJS programme for members with <b>diabetes</b> and <b>hypertension</b>.')}</p>
${steps([
 [T('Konsultasi ke klinik','Consult at the clinic'),T('Berobat seperti alur BPJS biasa.','Follow the usual BPJS visit steps.')],
 [T('Ditetapkan sebagai peserta Prolanis','Confirmed as a Prolanis member'),T('Dokter menilai apakah Anda termasuk pasien Prolanis.','The doctor decides whether you qualify.')],
 [T('Diundang ke grup WhatsApp Prolanis','Invited to the Prolanis WhatsApp group'),T('Jadwal kegiatan diinformasikan di grup ini.','Activity schedules are shared in this group.')]
])}
<div class="card"><h2>${T('Kegiatan Prolanis','Prolanis activities')}</h2>${ul([T('Konsultasi dengan dokter','Doctor consultations'),T('Pemeriksaan laboratorium','Laboratory tests'),T('Senam Prolanis','Prolanis exercise sessions')],'check')}</div>
${rel(['prb','alur'])}`},

 {id:'prb',ic:'pill',t:()=>T('PRB (Obat Rutin)','PRB (Routine Medicine)'),d:()=>T('Program Rujuk Balik & apotek jejaring','Referral-back programme & partner pharmacies'),r:()=>`<h1>${T('PRB: Program Rujuk Balik','PRB: Referral-Back Programme')}</h1>
<div class="stat"><div><b>${T('Tiap bulan','Monthly')}</b><span>${T('pasien PRB kontrol ke klinik','PRB patients visit the clinic')}</span></div></div>
${steps([
 [T('Konsultasi ke dokter','See the doctor'),T('Ikuti alur berobat BPJS seperti biasa.','Follow the usual BPJS visit steps.')],
 [T('Dokter meresepkan obat rutin','The doctor prescribes your routine medicine'),T('Anda akan menerima resep obat rutin PRB.','You receive a prescription for your PRB medicine.')],
 [T('Bawa resep dan berkas ke apotek jejaring','Take the prescription and documents to a partner pharmacy'),T('Obat PRB diambil di apotek jejaring, bukan di farmasi klinik.','PRB medicine is collected at a partner pharmacy, not at the clinic pharmacy.')]
])}
<h2>${T('Apotek jejaring','Partner pharmacies')}</h2>
<div class="card"><h2>Apotek Lido</h2><p>Jl. Anggrek No.37, RT.2/RW.12, Rawabadak Utara, Kec. Koja, Jakarta Utara 14230</p></div>
<div class="card"><h2>Apotek Kimia Farma Kebon Bawang</h2><p>Jl. Bugis No.25, RT.1/RW.11, Kebon Bawang, Kec. Tanjung Priok, Jakarta Utara 14320</p></div>
${rel(['prolanis','kontrol'])}`},

 {id:'tbc',ic:'lung',t:()=>T('Layanan TBC','TB Care'),d:()=>T('Gratis, dari periksa sampai sembuh','Free, from diagnosis to cure'),r:P.tbc},
 {id:'kia',ic:'baby',t:()=>T('Kehamilan, KB & Imunisasi','Pregnancy, Family Planning & Immunisation'),d:()=>T('Poli KIA & bidan jejaring persalinan','Midwife clinic & partner for childbirth'),r:P.kia}
];

/* ---------- PRIBADI ---------- */
const UMUM=[
 {id:'alur',ic:'route',t:()=>T('Alur Berobat Pribadi','Self-pay Visit Steps'),d:()=>T('Langkah dan titik pembayaran','Steps and when to pay'),r:()=>`<h1>${T('Alur Berobat Pasien Pribadi','Steps for Self-pay Patients')}</h1>
<p>${T('Alurnya sama dengan pasien BPJS, dengan pembayaran pribadi saat pendaftaran dan setelah pemeriksaan.','The steps are the same as for BPJS patients, with self-payment at registration and after the examination.')}</p>
<div class="note ok"><b>${T('Antrean pasien pribadi','Self-pay queue')}</b><p>${T('Saat jumlah pasien kondusif, pasien pribadi didahulukan. Jika pasien BPJS sedang sangat banyak, pasien dipanggil sesuai urutan antrean.','When the clinic is not too busy, self-pay patients are seen first. When there are many BPJS patients waiting, patients are called in queue order.')}</p></div>
${steps([
 [T('Ambil nomor antrean','Take a queue number'),T('Mulai pukul 08.00 sampai 19.30 WIB.','From 08.00 to 19.30 WIB.')],
 [T('Pendaftaran','Registration'),T('Tunjukkan KTP (atau KIA untuk anak) dan nomor antrean, lalu lakukan pembayaran pendaftaran.','Show your ID card (or KIA for children) and queue number, then pay the registration fee.'),T('Bayar','Pay')],
 [T('Ke ruang tunggu poli','Go to the clinic waiting area'),T('Tanda-tanda vital Anda diperiksa terlebih dahulu.','Your vital signs are checked first.')],
 [T('Tunggu dipanggil ke poli','Wait to be called in'),T('Pasien dipanggil dengan nomor antrean, bukan nama. Jika terlewat, konfirmasi ke perawat.','Patients are called by queue number, not by name. If you missed your call, tell a nurse.')],
 [T('Diperiksa dokter','See the doctor'),T('Dokter menentukan apakah Anda memerlukan laboratorium, tindakan, EKG, atau USG.','The doctor decides whether you need lab tests, a procedure, ECG or ultrasound.')],
 [T('Bayar layanan di kasir','Pay for services at the cashier'),T('Kasir berada di bagian pendaftaran. Bayar konsultasi dan layanan yang Anda terima.','The cashier is at the registration desk. Pay for the consultation and services you received.'),T('Bayar','Pay')],
 [T('Obat','Medicine'),T('Jika mendapat kertas resep, bayar obat di kasir terlebih dahulu. Setelah itu apoteker menyiapkan obat dan Anda menunggu dipanggil. Jika tidak ada obat, Anda bisa langsung pulang.','If you receive a paper prescription, pay for the medicine at the cashier first. The pharmacist then prepares it and calls you. If there is no medicine, you can go home.'),T('Bayar obat','Pay for medicine')]
])}
<div class="card"><h2>${T('Metode pembayaran','Payment methods')}</h2><div class="chips"><span>${T('Tunai','Cash')}</span><span>${T('Kartu debit','Debit card')}</span><span>Transfer</span></div><p class="fine">${T('Pembayaran dengan QRIS belum tersedia.','QRIS payment is not available.')}</p></div>
${rel(['layanan','vaksin','jadwal'])}`},

 {id:'layanan',ic:'flask',t:()=>T('Laboratorium & Tindakan','Lab Tests & Procedures'),d:()=>T('Lab, tindakan medis, EKG, USG, home visit','Lab, procedures, ECG, ultrasound, home visit'),r:()=>`<h1>${T('Layanan Pemeriksaan & Tindakan','Tests & Procedures')}</h1>
<p class="fine">${T('Informasi tarif dapat ditanyakan di kasir atau melalui WhatsApp klinik.','Ask the cashier or the clinic WhatsApp for prices.')}</p>
<h2>${T('Laboratorium','Laboratory')}</h2>
<div class="lab">
<div><b>${T('Hematologi','Haematology')}</b>${T('Hematologi lengkap','Complete blood count')}</div>
<div><b>${T('Kimia klinik','Clinical chemistry')}</b>${T('Glukosa, kolesterol, asam urat, SGOT, SGPT, ureum, kreatinin, HDL, LDL, trigliserida, HbA1c','Glucose, cholesterol, uric acid, SGOT, SGPT, urea, creatinine, HDL, LDL, triglycerides, HbA1c')}</div>
<div><b>${T('Elektrolit','Electrolytes')}</b>Na, K, Cl</div>
<div><b>${T('Imunologi','Immunology')}</b>HIV, HBsAg, VDRL, TPHA, Widal</div>
<div><b>Urine</b>${T('Urine lengkap','Urinalysis')}</div>
<div><b>${T('Tes narkoba','Drug test')}</b>${T('5 parameter, 6 parameter','5-panel, 6-panel')}</div>
</div>
<h2>${T('Tindakan medis umum','General procedures')}</h2>
<div class="chips">${[
 T('Rawat luka','Wound care'),T('Jahit luka (hecting)','Wound suturing'),T('Eksisi clavus (mata ikan)','Corn (clavus) excision'),T('Cross insisi','Cross incision'),T('Insisi abses','Abscess incision'),T('Irigasi mata','Eye irrigation'),T('Irigasi telinga','Ear irrigation'),T('Pengambilan benda asing','Foreign body removal'),T('Ekstraksi kuku','Nail extraction'),T('Resusitasi / infus','Resuscitation / IV fluids'),T('Nebulisasi','Nebulisation'),T('Oksigenasi','Oxygen therapy'),T('Injeksi obat','Injections')
].map(x=>`<span>${x}</span>`).join('')}</div>
<div class="card"><h2>EKG</h2><p>${T('Rekam jantung (elektrokardiografi) sesuai anjuran dokter.','Electrocardiogram as advised by the doctor.')}</p></div>
<div class="card"><h2>USG 2D</h2><p>${T('USG kehamilan (ANC) dan USG abdomen. Tidak perlu janji.','Pregnancy (ANC) and abdominal ultrasound. No appointment needed.')}</p></div>
<div class="card"><h2>Home visit</h2><p>${T('Layanan pemeriksaan di rumah tersedia. Hubungi WhatsApp klinik untuk informasi dan penjadwalan.','Home visits are available. Contact the clinic WhatsApp for details and booking.')}</p></div>
${rel(['alur','mcu','gigi'])}`},

 {id:'mcu',ic:'clip',t:()=>T('Medical Check-up & Surat Sehat','Medical Check-up & Health Certificate'),d:()=>T('Untuk kerja, sekolah, dan keperluan lain','For work, school and other needs'),r:()=>`<h1>${T('Medical Check-up & Surat Keterangan Sehat','Medical Check-up & Health Certificate')}</h1>
<p>${T('Surat keterangan sehat diterbitkan melalui medical check-up. Tarifnya berbeda dengan konsultasi biasa.','Health certificates are issued through a medical check-up, priced separately from a regular consultation.')}</p>
<div class="card"><h2>${T('Pemeriksaan yang dilakukan','What is included')}</h2>${ul([T('Wawancara riwayat kesehatan (anamnesis)','Health history interview'),T('Pemeriksaan fisik','Physical examination'),T('Tes buta warna','Colour blindness test'),T('Tes urine narkoba, jika dibutuhkan','Urine drug test, if required')],'check')}</div>
${rel(['alur','layanan'])}`},

 {id:'vaksin',ic:'plane',t:()=>T('Vaksinasi Internasional & Haji/Umroh','International & Hajj/Umrah Vaccination'),d:()=>T('Termasuk buku kuning (ICV)','Including the yellow book (ICV)'),r:()=>`<h1>${T('Vaksinasi Internasional','International Vaccination')}</h1>
<p>${T('Klinik melayani vaksinasi untuk perjalanan ke luar negeri, termasuk untuk jamaah <b>haji dan umroh</b>, dan menerbitkan <b>buku kuning / ICV</b> (International Certificate of Vaccination).','The clinic provides travel vaccinations, including for <b>Hajj and Umrah</b> pilgrims, and issues the <b>yellow book / ICV</b> (International Certificate of Vaccination).')}</p>
<div class="card"><h2>${T('Vaksin dewasa & internasional','Adult & travel vaccines')}</h2><div class="chips">${['Meningitis','Polio','Yellow fever',T('Tifoid','Typhoid'),'Influenza','Tetanus','HPV',T('MMR (campak, gondongan, rubela)','MMR (measles, mumps, rubella)'),T('Varisela (cacar air)','Varicella (chickenpox)'),'Hepatitis A','Hepatitis B'].map(x=>`<span>${x}</span>`).join('')}</div><p class="fine">${T('Vaksin meningitis dan polio umumnya menjadi syarat umroh/haji; yellow fever untuk perjalanan ke negara tertentu. Vaksinasi dewasa lainnya dapat dikonsultasikan dengan dokter.','Meningitis and polio are usually required for Umrah/Hajj; yellow fever for travel to certain countries. Ask our doctor about other adult vaccines.')}</p></div>
<div class="card"><h2>${T('Vaksin anak','Childhood vaccines')}</h2><div class="chips">${['Hepatitis B','Polio','DPT',T('Campak','Measles'),'MMR'].map(x=>`<span>${x}</span>`).join('')}</div><p class="fine">${T('Imunisasi anak dilayani di Poli KIA setiap tanggal 28, mulai pukul 10.30 WIB. Bawa buku KIA anak.','Childhood immunisation is given at the Maternal & Child Health clinic on the 28th of each month from 10.30 WIB. Bring the child\'s KIA book.')} <a href="#${MODE}-kia">${T('Lihat info KIA','See maternal & child info')}</a></p></div>
<div class="stat"><div><b>${T('Senin–Sabtu','Mon–Sat')}</b><span>08.00–20.00 WIB</span></div><div><b>${T('Tanpa janji','Walk-in')}</b><span>${T('Tidak perlu membuat janji','No appointment needed')}</span></div></div>
<div class="card"><h2>${T('Dokter yang melayani','Who vaccinates')}</h2><div class="sched-row"><div class="who">${avatar('dr. Rio Alexander')}<div>dr. Rio Alexander<em>${T('Sen, Sel, Kam, Jum 08.00–14.00 · Rabu 08.00–20.00','Mon, Tue, Thu, Fri 08.00–14.00 · Wed 08.00–20.00')}</em></div></div></div><p class="fine">${T('Di luar jam tersebut, vaksinasi dilayani dokter vaksinator yang bertugas.','Outside these hours, vaccination is handled by the vaccinating doctor on duty.')}</p></div>
<div class="note ok"><b>${T('Buku ICV jadi hari itu juga: datang sebelum 12.00 WIB','ICV book ready the same day: arrive before 12.00 WIB')}</b><p>${T('Buku kuning/ICV dapat dicetak di hari yang sama (cito) jika vaksinasi dilakukan sebelum pukul 12.00 WIB.','Your yellow book/ICV can be printed the same day if you are vaccinated before 12.00 WIB.')}</p></div>
<p class="fine"><a href="#umum-jadwal">${T('Lihat dokter yang bertugas per hari','See who is on duty each day')}</a></p>
<div class="note gold"><b>${T('Haji dan umroh','Hajj and Umrah')}</b><p>${T('Vaksinasi haji/umroh dilakukan maksimal 1 bulan sebelum keberangkatan.','Hajj/Umrah vaccination is given no later than 1 month before departure.')}</p></div>
<div class="note"><b>${T('Kenali ketentuan negara tujuan','Know your destination\'s requirements')}</b><p>${T('Setiap negara dan vaksin punya ketentuan waktu yang berbeda. Pastikan Anda mengetahuinya sebelum datang, konsultasikan dengan dokter kami, atau ikuti anjuran tempat kerja/travel Anda.','Each country and vaccine has its own timing rules. Check them before you come, consult our doctor, or follow your employer\'s or travel agent\'s advice.')}</p></div>
${rel(['alur','jadwal'])}`},

 {id:'gigi',ic:'tooth',t:()=>T('Poli Gigi','Dental Clinic'),d:()=>T('Tanpa batas kuota','No daily quota'),r:()=>`<h1>${T('Poli Gigi (Pasien Pribadi)','Dental Clinic (Self-pay)')}</h1>
<p>${T('Tidak ada batasan kuota untuk pasien gigi pribadi dan tidak perlu mendaftar H-1. Ikuti alur berobat pasien pribadi.','There is no daily quota for self-pay dental patients and no need to register the day before. Follow the self-pay visit steps.')}</p>
<div class="note gold"><b>${T('Perhatikan','Please note')}</b><p>${T('Pendaftaran bisa ditutup lebih awal jika pasien sangat banyak atau Anda datang menjelang akhir jam praktik poli gigi.','Registration may close early if it is very busy or if you arrive near the end of dental clinic hours.')}</p></div>
<div class="card"><h2>${T('Layanan gigi','Dental services')}</h2><div class="chips">${[T('Konsultasi','Consultation'),T('Pengobatan','Treatment'),'Scaling',T('Tambal gigi','Fillings'),T('Cabut gigi','Extractions')].map(x=>`<span>${x}</span>`).join('')}</div></div>
${rel(['jadwal','alur','layanan'])}`},

 {id:'suratsakit',ic:'doc',t:()=>T('Surat Sakit','Sick Leave Letter'),d:()=>T('Kapan surat sakit diterbitkan','When a letter is issued'),r:P.suratsakit},
 {id:'kia',ic:'baby',t:()=>T('Kehamilan, KB & Imunisasi','Pregnancy, Family Planning & Immunisation'),d:()=>T('Poli KIA & bidan jejaring persalinan','Midwife clinic & partner for childbirth'),r:P.kia},
 {id:'tbc',ic:'lung',t:()=>T('Layanan TBC','TB Care'),d:()=>T('Gratis, juga untuk pasien pribadi','Free, also for self-pay patients'),r:P.tbc}
];

const cats=m=>(m==='bpjs'?BPJS:UMUM).concat(SHARED);

/* ---------- views ---------- */
const app=document.getElementById('app'),bar=document.getElementById('bar');
const LOGO='/logo.png';
function welcome(){
 return `<section class="welcome view">
 <div class="welcome-top"><div class="brand"><img class="logo" src="${LOGO}" alt="Logo Klinik Oilia"><div><small>Klinik Pratama</small><strong>Oilia Medical Centre Rorotan</strong></div></div><button class="lang" data-lang>${lang==='en'?'Bahasa Indonesia':'English'}</button></div>
 <div style="display:flex;flex-direction:column;gap:10px"><h1>${T('Selamat datang di Media Informasi <span>Klinik Pratama Oilia Medical Centre Rorotan</span>','Welcome to the information hub of <span>Klinik Pratama Oilia Medical Centre Rorotan</span>')}</h1>
 <p class="lead">${T('Alur berobat, syarat, jadwal, dan layanan klinik dalam satu tempat.','Visit steps, requirements, schedules and services, all in one place.')}</p></div>
 <div class="wa-note">${ico('chat')}<p>${T('Pesan WhatsApp Anda akan dibalas pada jam kerja (08.00–20.00 WIB). Sambil menunggu, silakan baca informasi di halaman ini.','Your WhatsApp message will be answered during working hours (08.00–20.00 WIB). While you wait, feel free to read the information here.')}</p></div>
 <div class="ask"><h2>${T('Apakah Anda ingin menggunakan BPJS?','Will you be using BPJS?')}</h2>
  <div class="choices">
   <a class="choice ya" href="#bpjs"><b>${T('Ya','Yes')}</b><span>${T('Berobat dengan BPJS Kesehatan','Use BPJS Kesehatan (JKN)')}</span></a>
   <a class="choice tidak" href="#umum"><b>${T('Tidak','No')}</b><span>${T('Berobat dengan biaya pribadi','Pay for myself')}</span></a>
  </div>
  <p class="fine">${T('Anda bisa berganti pilihan kapan saja melalui tombol di bagian atas halaman.','You can switch at any time using the button at the top of the page.')}</p>
 </div>
 <div class="grid">${SHARED.slice(0,2).map(x=>`<a class="cat" href="#bpjs-${x.id}"><div class="ico">${ico(x.ic)}</div><div><b>${x.t()}</b><span>${x.d()}</span></div></a>`).join('')}</div>
 </section>`;
}
function todayCard(){
 const d=jakartaDay();
 if(d===0) return `<div class="today"><div class="eyebrow">${T('Hari ini','Today')}</div><b>${T('Minggu: klinik tutup','Sunday: clinic closed')}</b></div>`;
 const s=SCHED[d];
 return `<div class="today"><div class="eyebrow">${T('Praktik hari ini','On duty today')} · ${T(DAYS[d-1][1],DAYS[d-1][2])}</div>
 ${s.umum.map(x=>`<div class="today-row"><div class="who">${avatar(x[0],1)}<b>${x[0]}</b></div><span>${T('Umum','General')} · ${x[1]}</span></div>`).join('')}
 ${s.gigi.map(x=>`<div class="today-row"><div class="who">${avatar(x[0],1)}<b>${x[0]}</b></div><span>${T('Gigi','Dental')} · ${x[1]}</span></div>`).join('')}
 <div class="today-row"><div class="who">${avatar('Bidan Tittin',1)}<b>Bidan Tittin</b></div><span>KIA · 13.00–16.30</span></div></div>`;
}
function hub(m){
 const main=m==='bpjs'?BPJS:UMUM;
 const card=x=>`<a class="cat" href="#${m}-${x.id}"><div class="ico">${ico(x.ic)}</div><div><b>${x.t()}</b><span>${x.d()}</span></div></a>`;
 return `<section class="view"><div class="hub-head"><div class="eyebrow">${m==='bpjs'?T('Pasien BPJS','BPJS patients'):T('Pasien pribadi','Self-pay patients')}</div>
 <h1>${m==='bpjs'?T('Informasi untuk pasien BPJS','Information for BPJS patients'):T('Informasi untuk pasien dengan biaya pribadi','Information for self-pay patients')}</h1>
 <p class="lead">${T('Pilih topik yang ingin Anda ketahui.','Choose a topic.')}</p></div>
 ${todayCard()}
 <div class="section-label">${T('Layanan','Services')}</div>
 <div class="grid">${main.map(card).join('')}</div>
 <div class="section-label">${T('Informasi klinik','Clinic information')}</div><div class="grid">${SHARED.map(card).join('')}</div></section>`;
}
function footer(){
 document.getElementById('foot').innerHTML=`<div class="foot-sos"><div><b>${T('Keadaan gawat darurat?','Emergency?')}</b> ${T('Jangan menunggu antrean. Segera ke IGD rumah sakit terdekat atau hubungi 119.','Do not wait in the queue. Go to the nearest hospital emergency department or call 119.')}</div>
 <div class="links"><a class="btn sos" href="#${MODE}-darurat">${T('Daftar keadaan gawat darurat','Emergency warning signs')}</a><a class="btn ghost" href="#${MODE}-kecelakaan">${T('Penjaminan kecelakaan','Accident coverage')}</a></div></div>
 <div>${T('Informasi di halaman ini bersifat umum dan tidak menggantikan pemeriksaan dokter. Keputusan medis tetap berada pada dokter yang memeriksa.','This page gives general information and does not replace a medical examination. Medical decisions rest with the examining doctor.')}</div>
 <div>Klinik Pratama Oilia Medical Centre Rorotan · Rorotan, Cilincing, Jakarta Utara · WhatsApp ${CLINIC.wa}</div>`;
}
function setLang(l){lang=l;try{localStorage.setItem('oilia-lang',l)}catch(e){}document.documentElement.lang=l;render(true)}

function render(keepScroll){
 let h=(location.hash||'').slice(1);
 if(h==='en'||h==='id'){setLang(h);history.replaceState(null,'',location.pathname+location.search);return}
 const [m,id]=h.split('-');
 document.documentElement.lang=lang;
 footer();
 document.body.classList.toggle('mode-umum',m==='umum');
 if(m!=='bpjs'&&m!=='umum'){bar.hidden=true;app.innerHTML=welcome();if(!keepScroll)scrollTo(0,0);return}
 MODE=m;
 bar.hidden=false;
 const cat=id&&cats(m).find(c=>c.id===id);
 const pill=document.getElementById('modePill');
 pill.textContent=m==='bpjs'?'BPJS':T('Pribadi','Self-pay');
 pill.title=T('Ganti jenis pembayaran','Switch payment type');
 pill.onclick=()=>{const o=m==='bpjs'?'umum':'bpjs';location.hash=o+(id&&cats(o).some(c=>c.id===id)?'-'+id:'')};
 document.getElementById('langBar').textContent=lang==='en'?'ID':'EN';
 document.getElementById('backBtn').setAttribute('aria-label',T('Kembali','Back'));
 document.getElementById('backBtn').onclick=()=>{location.hash=cat?m:''};
 document.getElementById('barSub').textContent=cat?cat.t():(m==='bpjs'?T('Pasien BPJS','BPJS patients'):T('Pasien pribadi','Self-pay patients'));
 app.innerHTML=cat?`<article class="art view">${cat.r()}</article>`:hub(m);
 if(!keepScroll)scrollTo(0,0);
}
document.getElementById('langBar').onclick=()=>setLang(lang==='en'?'id':'en');
app.addEventListener('click',e=>{
 const l=e.target.closest('[data-lang]'); if(l){setLang(lang==='en'?'id':'en');return}
 const d=e.target.closest('.day'); if(d){selDay=+d.dataset.day;
   document.querySelectorAll('.day').forEach(b=>b.setAttribute('aria-pressed',b===d));
   document.getElementById('dayTitle').textContent=T(DAYS[selDay-1][1],DAYS[selDay-1][2]);
   document.getElementById('dayBody').innerHTML=schedFor(selDay);return}
 const c=e.target.closest('.copy'); if(c){const v=c.dataset.copy;const done=()=>{c.textContent=T('Tersalin','Copied');setTimeout(()=>c.textContent=T('Salin','Copy'),1500)};
   try{navigator.clipboard.writeText(v).then(done,()=>{sel(c)})}catch(err){sel(c)}}
});
function sel(c){const b=c.previousElementSibling.querySelector('b');const r=document.createRange();r.selectNodeContents(b);const s=getSelection();s.removeAllRanges();s.addRange(r)}
addEventListener('hashchange',()=>render());
render();
}
