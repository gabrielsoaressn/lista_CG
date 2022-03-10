var array = new Array(10);
var contaPares = 0;

console.log("------------CONTA PARES-------------");
for(var i = 0; i<10; i++)
{
    array[i] = Math.floor(Math.random()*65536);
    if(array[i]%2 == 0)
        contaPares++;
}

console.log("Array gerado: " + array + "\nQuantidade de pares: " + contaPares);