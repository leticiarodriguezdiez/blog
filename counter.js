var contador=0;

exports.getContador=function(req, res, next){

if(req.url=='/') {
	contador++;
	req.visitors=contador;
}
	next();


};


