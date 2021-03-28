function tambah () {
	var hasil = 0;
	for (var i = 0; i < arguments.length; 1++) {
		hasil += arguments[i];
	}
	return hasil; 
	
}

var coba = tambah(1,2,3,4,5);
console.log(coba)