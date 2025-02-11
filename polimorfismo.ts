interface Ianimal{
    hacerSonido():void,

}

class gatoPol implements Ianimal{
    hacerSonido(): void {
        console.log( "miau")
    }
}

class perroPol implements Ianimal{
    hacerSonido(): void {
        console.log("guau")
    }
}

function hacerSonidoAnimales(arr:Ianimal[]):void{
    console.log("aaaaaaa")
    for(var a of arr){
        a.hacerSonido()
    }
}

var arr:Ianimal[]=[new gatoPol(),new perroPol()];
hacerSonidoAnimales(arr);