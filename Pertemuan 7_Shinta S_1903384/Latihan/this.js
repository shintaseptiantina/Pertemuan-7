var obj = [ a : 10, nama : 'Shandika'];
obj.halo = function() {
	console.log(this);
	console.log('halo');
}
obj.halo();