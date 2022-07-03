var d = [1];
for ( var i = 1; i < 4; i++) {
	d[i] = i * (i + 1) ;
}
var s = [];
s = d. slice (1 ,3) ;
var x = s [0] * s [1];
console . log (d) ;
console . log (s) ;
console . log (x) ;