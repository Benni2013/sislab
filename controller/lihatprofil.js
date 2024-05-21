// Mengimpor modul Express
const express = require('express');
const router = express.Router();

// Mendefinisikan data dummy untuk profil pengguna
const userData = {
  namaLengkap: 'John Doe',
  nim: '12345678',
  email: 'johndoe@example.com',
  alamat: 'Jl. Contoh No. 123, Kota Contoh'
};

// Route untuk menampilkan halaman lihatprofil
router.get('/lihatprofil', (req, res) => {
  res.render('lihatprofil', userData);
});

module.exports = router;