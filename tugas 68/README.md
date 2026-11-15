# Program Hitung Diskon

## Deskripsi
Program sederhana menggunakan bahasa pemrograman PHP untuk menghitung diskon berdasarkan total belanja. Program akan menentukan persentase diskon, menghitung potongan harga, dan menampilkan total pembayaran.

## Ketentuan Diskon

| Total Belanja | Diskon |
|---|---|
| Di bawah Rp100.000 | 0% |
| Rp100.000 – Rp249.999 | 5% |
| Rp250.000 – Rp499.999 | 10% |
| Rp500.000 ke atas | 20% |

## Fitur
- Memasukkan total belanja.
- Menentukan diskon secara otomatis.
- Menghitung potongan harga.
- Menghitung total pembayaran setelah diskon.

## Teknologi
- PHP

## Cara Menjalankan
1. Pastikan PHP sudah terinstal.
2. Buka terminal pada folder program.
3. Jalankan perintah berikut:

```bash
php hitung_diskon.php
```

4. Masukkan total belanja yang diinginkan.
5. Program akan menampilkan hasil perhitungan diskon.

## Contoh Output

```text
=== PROGRAM HITUNG DISKON ===
Masukkan total belanja: Rp980000

Total Belanja : Rp980.000
Diskon        : 20%
Potongan      : Rp196.000
Total Bayar   : Rp784.000
```

## Rumus Perhitungan

- Potongan Diskon = Total Belanja × Persentase Diskon / 100
- Total Bayar = Total Belanja - Potongan Diskon

## Penutup
Program ini dibuat sebagai latihan dasar pemrograman PHP dengan menerapkan variabel, input, output, percabangan `if-elseif-else`, dan operasi aritmatika.
