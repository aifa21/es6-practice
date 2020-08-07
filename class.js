class student{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school="BAWA"
    }
}
const student1=new student(2,"aifa");
const student2=new student(3,"saima");
console.log(student1,student2);
console.log(student1.name,student2.id);