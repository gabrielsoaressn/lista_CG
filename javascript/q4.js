(function(){ var operacoes = function(arg){ }})();

var operacoes = function(arg){ 
    if(!(this instanceof operacoes)){ 
       return new opeacoes(arg); 
    }
    this.myArg = arg;
 }
 
operacoes.fn = operacoes.prototype = { 
    norma: function(){ 
        document.querySelector(this.myArg).setAttribute(“style”,”display:none”); }
}
