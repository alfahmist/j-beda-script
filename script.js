class Angkot {
    constructor(supir,trayek, penumpang, kas){
        this.supir = supir;
        this.trayek = trayek;
        this.penumpang = penumpang;
        this.kas = kas;
        
    }

    penumpangNaik(namaPenumpang) {
        // cek apakah ada kursi kosong ?
        // jika kosong isi kursi pertama yang kosong
        if(this.penumpang.includes(undefined)) {
            // cari kursi kosong pertama
            var index = this.penumpang.findIndex(function(x){
                return x == undefined
            })
            // isi kursi yang pertama kosong
            this.penumpang[index] = namaPenumpang;
        }
        // jika tidak kosong
        else {
            // cek nama penumpang apakah sudah naik ?
            if(this.penumpang.includes(namaPenumpang)){
                console.log(namaPenumpang + " sudah naik");
            } 
            // jika belum naik isi urutan terakhir
            else {
                this.penumpang.push(namaPenumpang);
            }
        }
            console.log(this.penumpang);
    }

    penumpangTurun(namaPenumpang, bayar){
        // cek apakah ada penumpang yang sudah naik ?
        if(this.penumpang.length > 0){
            var kosong = this.penumpang.filter(function(x){
                return x == undefined
            })
            //  cek apakah seluruh kursi angkotnya kosong ?
            if (kosong.length != this.penumpang.length){
                // cek apakah nama penumpang sudah naik ?
                // jika ada
                if(this.penumpang.includes(namaPenumpang))
                {
                    // cari penumpang duduk di mana
                    var index = this.penumpang.findIndex(function(x){
                        return x == namaPenumpang
                    })
                    // bayar
                    this.kas += bayar;
                    // isi kursinya menjadi undefined
                    this.penumpang[index] = undefined;
                    
                    console.log(namaPenumpang + " membayar "+ bayar); 
                    console.log("Kas : " + this.kas); 
                    console.log(this.penumpang);
                } 
                // jika belum naik
                else {
                    console.log(namaPenumpang+ " Belum Naik")
                }
            }
            // jika seluruh kursi angkotnya kosong
            else {
                console.log("Belum ada Penumpang")
            }  
  
        } 
        // jika sama sekali belum ada yang naik
        else {
            console.log("Belum ada Penumpang")
            }
        }
    }

var angkot1 = new Angkot("Budi", ["Cilitan","Kp Rambutan"],[],0)
