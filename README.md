# Media Informasi Klinik Pratama Oilia Medical Centre Rorotan

Website informasi untuk calon pasien. Link website ini dipasang di pesan otomatis WhatsApp Business klinik. Dibuat dengan Next.js dan siap di-deploy ke Vercel.

## Struktur folder

```
info-oilia-rorotan\
├─ public\
│  ├─ logo.png          logo klinik
│  ├─ icon.png          ikon tab browser
│  ├─ og.png            gambar pratinjau saat link dibagikan di WhatsApp
│  └─ foto\             foto dokter & bidan (rio.jpg, firmansyah.jpg, ...)
├─ src\
│  ├─ data\klinik.js    ← JADWAL, DOKTER, KONTAK, DAFTAR RS, HAK & KEWAJIBAN
│  ├─ lib\infoApp.js    ← isi teks semua halaman (Indonesia + Inggris)
│  └─ app\              layout, halaman, dan CSS
└─ package.json
```

### Mengubah isi

| Yang diubah | File |
|---|---|
| Jadwal dokter per hari | `src\data\klinik.js` → `SCHED` |
| Hari telemedicine dr. Rio | `src\data\klinik.js` → `TELE_DAYS` |
| Nomor WA, telepon, alamat, IG, TikTok | `src\data\klinik.js` → `CLINIC` |
| Daftar RS rujukan | `src\data\klinik.js` → `RS` |
| Foto dokter baru | simpan JPG persegi di `public\foto\`, lalu daftarkan namanya di `PHOTO_OF` (`src\data\klinik.js`) |
| Teks halaman (alur, rujukan, vaksin, dll.) | `src\lib\infoApp.js`. Setiap teks ditulis `T('teks Indonesia','English text')` |

## Menjalankan di komputer (Windows CMD)

```
cd "C:\Users\Rio\Documents\Aplikasi dr. Rio\info-oilia-rorotan"
npm install
npm run dev
```

Setelah itu buka http://localhost:3000

## Upload ke GitHub

1. Buat repository baru di GitHub, misalnya `info-oilia-rorotan`.
2. Jalankan perintah berikut:

```
cd "C:\Users\Rio\Documents\Aplikasi dr. Rio\info-oilia-rorotan"
git init
git add .
git commit -m "Media informasi pasien Klinik Oilia Rorotan"
git branch -M main
git remote add origin https://github.com/USERNAME/info-oilia-rorotan.git
git push -u origin main
```

Untuk perubahan berikutnya cukup: `git commit -am "pesan perubahan"` lalu `git push`. Vercel akan deploy otomatis.

## Deploy ke Vercel

1. Buka vercel.com, pilih **Add New → Project**, lalu import repository `info-oilia-rorotan`. Framework otomatis terdeteksi sebagai Next.js, jadi tidak perlu pengaturan tambahan.
2. Di **Settings → Environment Variables**, tambahkan `NEXT_PUBLIC_SITE_URL` berisi alamat domain Anda (misalnya `https://info.domainklinik.com`). Variabel ini dipakai agar gambar pratinjau WhatsApp muncul.
3. Di **Settings → Domains**, tambahkan domain Anda, lalu ikuti instruksi DNS dari Vercel (record A atau CNAME) di penyedia domain.
4. Setelah itu **Redeploy**.

## Link untuk WhatsApp Business

- Bahasa Indonesia: `https://domain-anda/`
- Bahasa Inggris: `https://domain-anda/#en`
- Langsung ke topik tertentu, misalnya `https://domain-anda/#bpjs-jadwal`, `#bpjs-gigi`, `#umum-vaksin`, `#bpjs-darurat`

Contoh pesan otomatis (Greeting message):

> Terima kasih telah menghubungi Klinik Pratama Oilia Medical Centre Rorotan. Pesan Anda akan dibalas pada jam kerja (08.00–20.00 WIB). Sambil menunggu, silakan baca informasi alur berobat, jadwal dokter, dan layanan klinik di: https://domain-anda/
