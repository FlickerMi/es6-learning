/* let,const命令 */
function test() {
  // for (let i=1; i<3; i++) {
  //   console.log(i)
  // }
  // console.log(i)
  // let a = 1;
  // let a = 2;
}

function last() {
  const k = {
    a:1
  };
  console.log(k);
  k.b = 3;
  console.log(k)
}
// test();
last();