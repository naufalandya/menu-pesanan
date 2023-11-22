function validateInput(InputId){
    var jumlahpesanan = document.getElementById(InputId).value;

    if (jumlahpesanan < 0) {
        window.alert("Pesanan Tidak Valid Kurang Dari 0")
        document.getElementById(InputId).value = null;
    } else if (jumlahpesanan > 30){
        window.alert("Pesanan anda melebihi 30, Apakah anda yakin lanjutkan?")
    }
}

var isClickable = true;

function validateUpdate() {
    if (isClickable) {
        var jumlah = document.getElementById("input-jumlah").value;

        if (jumlah != null && jumlah != 0) {
            tambahPesanan();

            isClickable = false;

            setTimeout(function () {
                isClickable = true;
            }, 1000); 
        } else {
            window.alert("Angka Belum Mengisi");
        }
    }
}


function validateConfirm(){
    var check = document.getElementById("billing-pelanggan").getElementsByTagName("tr");
    if (check.length > 0){
        validateConfirmFinal();
    } else {
        window.alert("Tidak ada pesanan");
    }
}

function validateConfirmFinal(){
    
    var input = prompt("Konfirmasi Pesanan? Ya/Tidak");
    var konfirmasinya = input.toLowerCase();

    switch (konfirmasinya){
        case "ya":
            konfirmasi();
            break;
        case "tidak":
            window.alert("Harap Konfirmasi Kembali")
            break;
        default:
            validateConfirm();
    }
}



var angkapesanan = 0;

function tambahPesanan(){

    var nama = document.getElementById("nama-pesanan").value;
    var jumlah = document.getElementById("input-jumlah").value;
    
    var listharga = {
        "Nasi Goreng": 15000,
        "Ayam Goreng": 7000,
        "Baso Urat": 12000,
        "Sate Ayam": 14000,
        "Mie Ayam": 10000,
        "Mie Instant": 7000,
        "Air Putih": 1000,
        "Teh Manis/Anget": 5000,
        "Es Jeruk": 5000,
        "Es Kelapa": 5000,
        "Kopi": 4000,
        "Nasi Putih": 4000,
        "Gorengan": 2000,
        "Kerupuk Putih": 2000,
        "Emping": 5000,
        "Tahu": 2000,
        "Tempe": 2000,
        "Telor Ceplok": 5000,
        "Telor Dadar": 5000
    };

    var harga = listharga[nama];


    const pesanan = {
        angkapesanan : angkapesanan,
        namapesanan : function(){
            return nama;
        },
        jumlahpesanan : function(){
            return jumlah;
        },
        harga : function(){
            if (harga !== undefined){
                return harga
            } else {
                return 0;
            }      
        },
        totalharga : function(){
            return this.jumlahpesanan() * this.harga()
        }
        };


    var daftarPesananDiv = document.getElementById("billing-pelanggan");
    var pesananDiv = document.createElement("tr");

    for (i = 0; i <= angkapesanan; i++){
        var pesananku = `pesanan-${i}`
        pesananDiv.classList.add('data-pesanan');

        var pesananstring = pesananku.toString();
        pesananDiv.setAttribute('id', `pesanan-${i}`)
        pesananDiv.innerHTML = `<td>${pesanan.namapesanan()}</td><td>${pesanan.jumlahpesanan()}</td><td>${pesanan.totalharga()}</td><td><input type="button" value="❌" onclick="hapusini('${pesananstring}');"></td>`
    }

    angkapesanan = angkapesanan + 1


    daftarPesananDiv.appendChild(pesananDiv);
    
    return pesanan
}

var nomorpesanan = 0;

var nomorlist = 0;

function konfirmasi(){
    
    var atasnama = prompt("Atas nama pembelian? ");
    var daftarPesananDiv = document.getElementById("billing-pelanggan").getElementsByTagName("tr");



    var totalHarga = 0;
    for (var i = 1; i < daftarPesananDiv.length; i++) {
        var kolomHarga = daftarPesananDiv[i].getElementsByTagName("td")[2];
        var harga = parseFloat(kolomHarga.innerText); 
        totalHarga += harga;
    }
    nomorpesanan = nomorpesanan + 1;

    var waktuSaatIni = new Date();

    var tanggal = waktuSaatIni.getDate();
    var bulan = waktuSaatIni.getMonth();
    var tahun = waktuSaatIni.getFullYear();
    var jam = formatWaktu(waktuSaatIni.getHours());
    var menit = formatWaktu(waktuSaatIni.getMinutes());
    var detik = formatWaktu(waktuSaatIni.getSeconds());

    document.getElementById("update-data").disabled = true

    document.getElementById("total-harga").innerHTML = `<td>${atasnama}</td><td>${totalHarga}</td><td class="waktu"><p>${tanggal + " - " + bulan + " - " + tahun}</p>
    <p>${jam + " : " + menit + " : " + detik}</p></td>`;

    var riwayatcontainer = document.getElementById("riwayat-pembelian");
    var listpembelian = document.createElement("tr");


    nomorlist = nomorlist + 1;

    listpembelian.innerHTML = `<td>${nomorlist}</td><td>${atasnama}</td><td>${totalHarga}</td><td class="waktu"><p>${tanggal + " - " + bulan + " - " + tahun}</p>
    <p>${jam + " : " + menit + " : " + detik}</p></td>`;

    riwayatcontainer.appendChild(listpembelian)

}

function formatWaktu(n) {
    return n < 10 ? '0' + n : n;
}

function resetin(){
    var input = prompt("Reset Pesanan? Ya/Tidak");
    var konfirmasi = input.toLowerCase();

    switch (konfirmasi){
        case "ya":
            var tabel = document.getElementById("billing-pelanggan");
            var child = document.getElementsByClassName("data-pesanan");

            while (child.length > 0) {
                tabel.removeChild(child[0]);
            }

            document.getElementById("total-harga").innerHTML = null
            document.getElementById("update-data").disabled = false
            break;
        case "tidak":
            window.alert("Harap Konfirmasi Kembali")
            break;
        default:
            resetin();
    }
   
}

function hapusini(InputId){
    document.getElementById(InputId).innerHTML = null;
}




