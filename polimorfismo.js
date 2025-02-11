var gatoPol = /** @class */ (function () {
    function gatoPol() {
    }
    gatoPol.prototype.hacerSonido = function () {
        console.log("miau");
    };
    return gatoPol;
}());
var perroPol = /** @class */ (function () {
    function perroPol() {
    }
    perroPol.prototype.hacerSonido = function () {
        console.log("guau");
    };
    return perroPol;
}());
function hacerSonidoAnimales(arr) {
    console.log("aaaaaaa");
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var a = arr_1[_i];
        a.hacerSonido();
    }
}
var arr = [new gatoPol(), new perroPol()];
hacerSonidoAnimales(arr);
