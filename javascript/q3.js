console.log("-----  QUICK SORT -----");
var ar1 = [4, 3, 8, 2, 10]
console.log(ar1);

function quickSort(meuArray, inicio, final)
{
    var ini = inicio;
    var fim = final;
    var meio =  Math.floor((ini + fim)/2);
    
    //percorrer o array, com o objetivo de chegar no if  
    while(fim > ini)
    {   //se o elemento do meio do array for maior que o primeiro, compara entre o meio e o segundo 
        while(meuArray[meio] > meuArray[ini])
            ini++;
        //se elemento final for maior que o do meio, significa que ta tudo certo, então ele testa com o elemento anterior
        while(meuArray[fim] > meuArray[meio])
            fim--;
        //se o inicio e o fim forem iguais, significa que devemos inverter suas posições
        if(ini <= fim)
        {
            var aux = meuArray[ini];
            meuArray[ini] = meuArray[fim];
            meuArray[fim] = aux;
            ini++;
            fim--;
        }
        if(fim>inicio)
            quickSort(ar1, inicio, fim);
        if(fim<inicio)
            quickSort(ar1, ini, final);
    }
}
quickSort(ar1, 0, ar1.length-1 );
console.log(ar1);