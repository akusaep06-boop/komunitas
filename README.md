# SA-MP Community

Website komunitas GTA SA-MP: akun dan profil, chat, berbagi modpack, voice war (Discord), dan panel admin.
Hanya HTML, CSS, dan JavaScript, tanpa build, jadi bisa langsung dipasang di GitHub Pages.

## File
- `index.html` : seluruh website
- `config.js` : pengaturan Firebase dan hash password admin
- `firestore.rules` : aturan database Firebase

## Pasang di GitHub Pages
1. Buat repository baru di GitHub (public), lalu upload semua file di folder ini.
2. Buka **Settings > Pages**, pada Source pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu Save.
3. Tunggu satu sampai dua menit. Alamatnya: `https://USERNAME.github.io/NAMA-REPO/`

Tanpa langkah berikutnya, website jalan di **mode lokal**: akun, chat, dan modpack hanya tersimpan di browser masing-masing, jadi orang lain tidak melihatnya.

## Aktifkan mode online (data dibagikan ke semua orang)
1. Buka https://console.firebase.google.com lalu buat proyek (gratis).
2. **Build > Firestore Database > Create database** (pilih lokasi terdekat).
3. Buka tab **Rules**, tempel isi `firestore.rules`, lalu Publish.
4. **Project settings > Your apps > Web (`</>`)**, daftarkan aplikasi, lalu salin objek `firebaseConfig`.
5. Tempel ke `window.FIREBASE_CONFIG` di `config.js`, commit, dan tunggu Pages diperbarui.
6. Di **Authentication > Settings > Authorized domains** pastikan domain `USERNAME.github.io` ada.

## Ganti password admin
Admin dibuka dengan mengetuk ikon perisai di pojok kiri atas 3 kali. Password bawaannya `112233`, ganti segera:
1. Buka website di browser, tekan F12, buka tab Console.
2. Jalankan (ganti `PASSWORDBARU`):
```js
(async()=>{const h=await crypto.subtle.digest('SHA-256',new TextEncoder().encode('admin:PASSWORDBARU:samp'));console.log([...new Uint8Array(h)].map(x=>x.toString(16).padStart(2,'0')).join(''))})()
```
3. Salin hasilnya ke `window.ADMIN_HASH` di `config.js`.

## Catatan keamanan (penting)
Karena tidak ada server, semua pemeriksaan dilakukan di browser:
- Hash password admin terlihat di `config.js`, dan aturan Firestore di atas terbuka untuk semua. Orang yang paham teknis bisa menghapus data atau mengaku sebagai admin.
- Hash password akun member juga tersimpan di database dan bisa dibaca.
- Cocok untuk komunitas kecil yang saling percaya. Untuk pengamanan sungguhan dibutuhkan server atau Firebase Authentication dengan aturan yang ketat.

## Catatan lain
- File modpack tidak diunggah ke website, hanya foto preview. File dibagikan lewat link download (Mediafire, Google Drive, dll).
- Link Voice War ada di konstanta `DISCORD` pada `index.html`.
