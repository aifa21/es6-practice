const person={name:"saima",age:17,job:"student",friends:["taifa","naima"]}
const {name,age}=person;
const jobs=person.job;
console.log(name,age,jobs);

const complexObject={
    name:"abc",
    info:{
        leader:"tiger leader",
        address:"ctg",
    }
}
const {leader}=complexObject.info;
console.log(leader);






//destructure

const friends=["amir khan","sakib khan","salman khan","shah khan"];
const [first,second,...rest]=friends;
console.log(first,second);
console.log(rest);