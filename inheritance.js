class parent{
    constructor(){
        this.fathername="faruque";
    }
}
class child extends parent{
    constructor(name){
        super();
        this.childname=name;
    }
    fullName(){
        return this.childname+" "+this.fathername;
    }
}

const baby=new child("aifa");
const baby2=new child("saima");
//console.log(baby);
console.log(baby2.fullName());

