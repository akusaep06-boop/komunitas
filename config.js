// ===== PENGATURAN WEBSITE =====

// 1) Mode online (data dibagikan ke semua orang).
//    Isi dengan konfigurasi Firebase Anda. Jika dibiarkan null, website jalan
//    dalam mode lokal (data hanya tersimpan di perangkat masing-masing).
window.FIREBASE_CONFIG = null;
/* Contoh:
window.FIREBASE_CONFIG = {
  apiKey: "ISI_DARI_FIREBASE",
  authDomain: "proyek-anda.firebaseapp.com",
  projectId: "proyek-anda",
  storageBucket: "proyek-anda.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
*/

// 2) Hash password admin (bawaan = password 112233, SEGERA GANTI).
//    Cara membuat hash baru ada di README.md.
window.ADMIN_HASH = "a3228a479bd2e3ae86ecb32a536c4365d45f671a7e1c3f5bfa0ae101734ea200";
