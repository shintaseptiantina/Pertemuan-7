var angka = [1,2,5,3,6,8,4];
var angka2 = angka.map(function(e)) {
	return e * 2;
}
console.log(angka2.join(' - '));