const age=[1,2,3,4,5];
const age1=[5,6,7,8];
const age2=[3,3,3];
const allAges=age.concat(age1).concat([100]).concat(age2);
console.log(allAges);


//  three dots
const ag=[1,2,3,4,5];
const ag1=[5,6,7,8];
const ag2=[3,3,3];
const Ages=[...ag,...ag1,5, ...ag2]
console.log(Ages);

//max()

const a=100;
const b=300;
const c=200;
//const max1=Math.max(a,b,c);
const arr=[200,400,500,234];
const max2=Math.max(...arr);
console.log(max2);