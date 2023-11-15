function setNasiGoreng(){
    var makanan = "Nasi Goreng";
    var jumlahpesanan = document.getElementById("nasi-goreng").value;
    
    document.getElementById("output-nasi-goreng").innerHTML = jumlahpesanan + " " + makanan;
}

function validateInput(InputId){
    var jumlahpesanan = document.getElementById(InputId).value;

    if (jumlahpesanan < 0) {
        window.alert("Pesanan Tidak Valid Kurang Dari 0")
        document.getElementById(InputId).value = null;
    } else if (jumlahpesanan > 30){
        window.alert("Pesanan anda melebihi 30, Apakah anda yakin lanjutkan?")
    }
}

    function setOutput(){
        setNasiGoreng();
        setAyamGoreng();
        TotalBilling();
    }

    function setNasiGoreng(){
        var makanan = "Nasi Goreng";
        var jumlahpesanan = document.getElementById("nasi-goreng").value;
        
        document.getElementById("output-nasi-goreng").innerHTML = jumlahpesanan + " " + makanan;
    }

    function setAyamGoreng(){
        var makanan = "Ayam Goreng";
        var jumlahpesanan = document.getElementById("ayam-goreng").value;

        document.getElementById("output-ayam-goreng").innerHTML = jumlahpesanan + " " + makanan;
    }

    function TotalBilling(){
        var totalharganasigoreng = document.getElementById("nasi-goreng").value * 15000;

        var totalhargaayamgoreng = document.getElementById("ayam-goreng").value * 7000;

        var totalharganasigoreng = document.getElementById("baso-urat").value * 12000;

        var totalhargaayamgoreng = document.getElementById("ayam-goreng").value * 10000;

        document.getElementById("output-billing").innerHTML = totalhargaayamgoreng + totalharganasigoreng

    }