// .....  1 .....
function add(n1,n2){
  n2=n2||20;
  return n1+n2;
}
const total=add(15);
console.log(total);

// .... 2 .....

function add(n1,n2=25){
    
    return n1+n2;
  }
  const total=add(15);
  console.log(total);

  // .... 3 ....
  function add(n1,n2=25){
    
    return n1+n2;
  }
  const total=add(15,1);
  console.log(total);