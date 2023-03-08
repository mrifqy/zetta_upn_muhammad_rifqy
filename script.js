function purchaseBook(title, author, harga, persenDiskon, persenPajak) {
  const TOKO = "Toko Buku Pintu";
  const PAJAK = persenPajak / 100;
  const DISC = persenDiskon / 100;

  let diskon = harga * DISC;
  let hargaDiskon = harga - diskon;
  let tax = hargaDiskon * PAJAK;
  let totalHarga = hargaDiskon + tax;

  console.log(`       ${TOKO}!\n`);
  console.log(`Judul Buku          : ${title}`);
  console.log(`Author              : ${author}`);
  console.log(`Harga               : Rp${harga.toFixed(2)}`);
  console.log(`Diskon              : ${persenDiskon}%`);
  console.log(`Total diskon        : Rp${diskon.toFixed(2)}`);
  console.log(`Harga setelah diskon: Rp${hargaDiskon.toFixed(2)}`);
  console.log(`Pajak               : ${persenPajak}%`);
  console.log(`Total pajak         : Rp${tax.toFixed(2)}`);
  console.log(`Harga dengan pajak  : Rp${totalHarga.toFixed(2)}`);
  console.log('Thank You!');

}

purchaseBook("Negeri 5 Menara", "A Fuadi", 75000, 10, 11);
