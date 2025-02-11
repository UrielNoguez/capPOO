class Cat{
    private _name:string;
    private _sex:"macho"|"hembra";
    private _age: number;
    private _weight: number;
    private _color:string;
    private _texture: string;

    constructor(name:string,sex:"macho"|"hembra",age:number,weight:number,color:string,texture:string){
        this._name=name;
        this._sex=sex;
        this._age=age;
        this._weight=weight;
        this._color=color;
        this._texture=texture
    };

    get name(){
        return this._name;
    }
    set name(name:string){
        this._name=name
    }

    get sex(){
        return this._sex;
    }

    set sex(sex:"macho"|"hembra"){
        this._name=sex
    }

    get age(){
        return this._age;
    }

    set age(age:number){
        this._age=age;
    }

    get weight(){
        return this._weight;
    }

    set weight(weight:number){
        this._weight=weight;
    }

    get color(){
        return this._color;
    }
    set color(color:string){
        this._color=color
    }

    get texture(){
        return this._color;
    }
    set texture(texture:string){
        this._texture=texture
    }

    public breathe():boolean{
        return true;
    }

    public eat(food:string):string{
        return food;
    }

    public run(destination:string){
        return destination
    }

    public sleep(hours:number):string{
        return `este gato duerme ${hours} horas`;
    }

    public meow(){
        return "miau";
    }

}

var oscar:Cat=new Cat("Oscar","macho",3,7,"Marron","rayada");
var luna:Cat=new Cat("Luna","hembra",2,5,"gris","lisa");

console.log(oscar.age)

console.log(oscar);
console.log(luna)