function jumlahvolumeduakubus(a,b) {
	var volumeA;
	var volumeB;
	var total;
	
	volumeA = a * a * a;
	volumeB = b * b * b;
	
	total = volumeA + volumeB
	
	return total;
}

alert(jumlahvolumeduakubus(8, 1));
