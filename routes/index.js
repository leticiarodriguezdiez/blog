
/*
 * GET home page.
 * visitors: 'req.visitors'
 */

exports.index = function(req, res){
  //res.render('layaut', { title: 'Leti and María´s blog',
  						//visitors: req.visitors
						
   //});
  res.render('layout', { 'visitors': req.visitors});

};