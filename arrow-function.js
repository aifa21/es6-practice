const double=function(num){
    return num*2;
}
const res=double(5);
console.log(res);


// ....... arrow-function ........
const double2= num=>num*2; //one parameter
const res2=double2(6);
console.log(res2);

const add= (x,y)=>x+y; //one parameter
const res3=add(3,4);
console.log(res3);

const func= ()=>5; //no parameter
const res4=func();
console.log(res4);


const doMath= (x,y)=>{
    const sum=x+y;
    const diff=x-y;
    const res=sum*diff;
    return res;

} 
const res5=doMath(2,1);
console.log(res5);