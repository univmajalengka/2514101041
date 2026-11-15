
<?php
echo "=== PROGRAM HITUNG DISKON ===\n";

echo "Masukkan total belanja: Rp";
$totalBelanja = (int) trim(fgets(STDIN));

if ($totalBelanja >= 500000) {
    $diskon = 20;
} elseif ($totalBelanja >= 250000) {
    $diskon = 10;
} elseif ($totalBelanja >= 100000) {
    $diskon = 5;
} else {
    $diskon = 0;
}

$potongan = $totalBelanja * $diskon / 100;
$totalBayar = $totalBelanja - $potongan;

echo "\nTotal Belanja : Rp" . number_format($totalBelanja, 0, ',', '.') . "\n";
echo "Diskon        : " . $diskon . "%\n";
echo "Potongan      : Rp" . number_format($potongan, 0, ',', '.') . "\n";
echo "Total Bayar   : Rp" . number_format($totalBayar, 0, ',', '.') . "\n";
?>
