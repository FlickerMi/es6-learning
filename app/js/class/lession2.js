/* 解构赋值 */

// 数组解构赋值
{
  let a,b,rest;
  [a,b] = [1,2];
  console.log(a,b);
}
{
  let a,b,rest;
  [a,b,...rest]=[1,2,3,4,5,6];
  console.log(a,b,rest)
}
// 对象解构赋值
{
  let a,b;
  ({a,b}={a:1,b:2});
  console.log(a,b)
}

//默认值
{
  let a,b,c,rest;
  [a,b,c=3] = [1,2];
  console.log(a,b,c);
}

// 变量交换
{
  let a=1;
  let b=2;
  [a,b]=[b,a];
  console.log(a,b);
}
// 取值
{
  function f() {
    return [1,2]
  }
  let a,b;
  [a,b]=f();
  console.log(a,b)
}
// 选择性接收值
{
  function f() {
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,,b]=f();
  console.log(a,b);
}
// 不确定接收值长度，取出第一个，其它保存为数组
{
  function f() {
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,...b]=f();
  console.log(a,b);
}

// 对象解构赋值
{
  let o = {p:32,q:true};
  let {p,q} = o;
  console.log(p,q);
}
// 对象解构赋值默认值处理
{
  let {a=10,b=5}={a:3};
  console.log(a,b);
}
// 对象取值
{
  let metaDate={
    title:'ab',
    test:[{
      title: 'test',
      desc:'description'
    }]
  };
  let {title:esTitle,test:[{title:cnTitle}]} = metaDate;
  console.log(esTitle, cnTitle)
}