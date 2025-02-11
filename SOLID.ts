//S: single responsability
//Responsabilidad unica
class Employee{
    private _name:string;
    constructor(name:string){
        this._name=name
    }

    get name():string{
        return this._name;
    }
}

class TimeSheetReport extends Employee{

    constructor(name:string){
        super(name);
    }
    print(e:Employee){
        console.log(e.name)
    }
}

var a=new TimeSheetReport("aaaaa");
a.print(new Employee("aaaa"));