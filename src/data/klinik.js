// ==========================================================
// DATA KLINIK — ubah di file ini jika ada perubahan
// jadwal, dokter, kontak, daftar RS, atau hak & kewajiban.
// Foto dokter ada di folder public/foto/
// ==========================================================
export const CLINIC={
  wa:'0812-8803-4522', waLink:'https://wa.me/6281288034522',
  tel:'021-22417301', email:'olmc2rorotan@gmail.com',
  addr:'Jl. Rorotan IV No.46 A, RT.14/RW.6, Rorotan, Kec. Cilincing, Jakarta Utara, DKI Jakarta 14140',
  maps:'https://www.google.com/maps/search/?api=1&query=Klinik+Pratama+Oilia+Medical+Centre+Rorotan+Jl.+Rorotan+IV+No.46A',
  ig:'klinikoilia_rorotan', tt:'klinikoilia2rorotan'
};
export const DAYS=[[1,'Senin','Monday','Sen','Mon'],[2,'Selasa','Tuesday','Sel','Tue'],[3,'Rabu','Wednesday','Rab','Wed'],[4,'Kamis','Thursday','Kam','Thu'],[5,'Jumat','Friday','Jum','Fri'],[6,'Sabtu','Saturday','Sab','Sat']];
export const SCHED={
 1:{umum:[['dr. Firmansyah','08.00–20.00']],gigi:[['drg. Rezka Indriani','08.00–15.00']]},
 2:{umum:[['dr. Firmansyah','08.00–20.00']],gigi:[['drg. Rima Ristanti Suryani','08.00–15.00'],['drg. Annisa Fitriana','15.00–20.00']]},
 3:{umum:[['dr. Rio Alexander','08.00–20.00']],gigi:[['drg. Azzahra Novita Dewi','08.00–15.00'],['drg. Annisa Fitriana','15.00–20.00']]},
 4:{umum:[['dr. Fadilla Yedona Putri','08.00–20.00']],gigi:[['drg. Rima Ristanti Suryani','08.00–15.00']]},
 5:{umum:[['dr. Fadilla Yedona Putri','08.00–20.00']],gigi:[['drg. Azzahra Novita Dewi','08.00–15.00']]},
 6:{umum:[['dr. Firmansyah','08.00–20.00']],gigi:[['drg. Rezka Indriani','08.00–15.00']]}
};
export const PHOTO_OF={'dr. Rio Alexander':'rio','dr. Firmansyah':'firmansyah','dr. Fadilla Yedona Putri':'fadilla','drg. Rima Ristanti Suryani':'rima','drg. Azzahra Novita Dewi':'azzahra','drg. Annisa Fitriana':'annisa','drg. Rezka Indriani':'rezka','Bidan Tittin Widya Astuti, A.Md.Keb.':'tittin','Bidan Tittin':'tittin'};
export const TELE_DAYS=[1,2,4,5];
export const RS=[
 ['RS Umum Pekerja','C','Jl. Tipar Cakung No.46','021-2974848','3,69'],
 ['RS Firdaus','C','Jl. Siak J5/14 Komp. Bea Cukai','021-4407322','3,69'],
 ['RS Islam Jakarta Sukapura','C','Jl. Tipar Cakung No.8','021-4400778','4,10'],
 ['RS Gading Pluit','B','Jl. Boulevard Timur Raya','021-4521001','4,72'],
 ['RS Pelabuhan Jakarta','C','Jl. Kramat Jaya No.1','021-4403026','5,14'],
 ['RSUD Cilincing','C','Jl. Madya Kebantenan No.4','021-4412889','5,39'],
 ['RSUD Tugu Koja','C','Jl. Walang Permai No.39','021-4367168','6,03'],
 ['RSUD Koja','B','Jl. Deli No.4 RT.11/RW.7','021-43938478','7,78'],
 ['RS Mata JEC Primasana','C','Jl. Kebon Bawang Raya No.1','021-4367090','8,41'],
 ['RS Hermina Podomoro','C','Jl. Danau Agung 2 Blok E3 No.2','021-6404910','10,48'],
 ['RS Royal Progress','B','Jl. Danau Sunter Utara','021-6400261','10,50'],
 ['RS Atma Jaya','B','Jl. Pluit Raya','021-6606127','18,26']
];
export const HAK=[
 ['Memperoleh layanan yang manusiawi, adil, jujur, dan tanpa diskriminasi.','Receive humane, fair, honest and non-discriminatory care.'],
 ['Memperoleh layanan kesehatan yang bermutu sesuai standar profesi dan standar prosedur operasional.','Receive quality care that meets professional standards and standard operating procedures.'],
 ['Memperoleh pelayanan yang efektif dan efisien sehingga terhindar dari kerugian fisik dan materi.','Receive effective and efficient care that protects you from physical and financial harm.'],
 ['Memilih dokter dan dokter gigi sesuai keinginan dan peraturan yang berlaku di klinik.','Choose your doctor or dentist, in line with clinic regulations.'],
 ['Meminta konsultasi tentang penyakitnya kepada dokter dan dokter gigi lain yang memiliki Surat Izin Praktik (SIP), baik di dalam maupun di luar klinik.','Seek a consultation about your illness from another licensed doctor or dentist, inside or outside the clinic.'],
 ['Mendapatkan privasi dan kerahasiaan penyakit yang diderita, termasuk data medisnya.','Privacy and confidentiality of your illness and medical data.'],
 ['Mendapatkan informasi tentang diagnosis, tata cara dan tujuan tindakan medis, alternatif tindakan, risiko dan komplikasi, prognosis, serta perkiraan biaya pengobatan.','Information on your diagnosis, the procedure and its purpose, alternatives, risks and complications, prognosis, and estimated costs.'],
 ['Memberikan persetujuan atau menolak tindakan yang akan dilakukan tenaga kesehatan.','Consent to or refuse any procedure proposed by health workers.'],
 ['Didampingi keluarga dalam keadaan kritis.','Be accompanied by family when in critical condition.'],
 ['Menjalankan ibadah sesuai agama atau kepercayaannya selama tidak mengganggu pasien lain.','Practise your religion or belief, as long as it does not disturb other patients.'],
 ['Memperoleh keamanan dan keselamatan selama dalam perawatan di klinik.','Safety and security while receiving care at the clinic.'],
 ['Mengajukan usul, saran, dan perbaikan atas perlakuan klinik terhadap dirinya.','Give suggestions and request improvements on how the clinic treats you.'],
 ['Menolak pelayanan bimbingan rohani yang tidak sesuai dengan agama dan kepercayaannya.','Refuse spiritual guidance that does not match your religion or belief.'],
 ['Mendapatkan perlindungan atas rahasia kedokteran, termasuk kerahasiaan rekam medis.','Protection of medical confidentiality, including your medical records.'],
 ['Mendapatkan akses terhadap isi rekam medis.','Access the contents of your medical record.'],
 ['Memberikan persetujuan atau menolak menjadi bagian dari penelitian kesehatan.','Consent to or refuse taking part in health research.'],
 ['Menyampaikan keluhan atau pengaduan atas pelayanan yang diterima.','File a complaint about the care you received.'],
 ['Mengeluhkan pelayanan yang tidak sesuai standar melalui media cetak dan elektronik sesuai peraturan perundang-undangan.','Raise complaints about substandard care through print and electronic media, in accordance with the law.']
];
export const KEWAJIBAN=[
 ['Mematuhi peraturan yang berlaku di klinik.','Follow the clinic\'s regulations.'],
 ['Menggunakan fasilitas klinik secara bertanggung jawab.','Use clinic facilities responsibly.'],
 ['Menghormati hak pasien lain, pengunjung, tenaga kesehatan, dan petugas lain yang bekerja di klinik.','Respect the rights of other patients, visitors, health workers and staff.'],
 ['Memberikan informasi yang jujur, lengkap, dan akurat tentang masalah kesehatannya sesuai kemampuan dan pengetahuannya.','Give honest, complete and accurate information about your health, to the best of your knowledge.'],
 ['Memberikan informasi mengenai kemampuan finansial dan jaminan kesehatan yang dimilikinya.','Inform the clinic about your ability to pay and your health insurance.'],
 ['Mematuhi rencana terapi yang direkomendasikan tenaga kesehatan dan telah disetujui setelah mendapat penjelasan.','Follow the treatment plan recommended by health workers that you agreed to after it was explained.'],
 ['Menerima segala konsekuensi atas keputusan pribadi untuk menolak rencana terapi atau tidak mematuhi petunjuk tenaga kesehatan.','Accept the consequences of your own decision to refuse treatment or not follow health workers\' advice.'],
 ['Memberikan imbalan jasa atas pelayanan yang diterima.','Pay for the services you receive.']
];
