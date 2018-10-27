/* 字符串拓展 */

{
  // ES5
  console.log('a',`\u0061`);// 正常情况下
  console.log('s',`\u20BB7`);// 码值大于两个字节（0xFFFF）
  // ES6
  console.log('s',`\u{20BB7}`);
}

{
  // codePointAt API
  // ES5
  let s = '𠮷';
  console.log('length', s.length);// ES5中认为长度是2
  console.log('0', s.charAt(0));// 取字符
  console.log('0', s.charAt(1));
  console.log('at0', s.charCodeAt(0));// 取unicode码值
  console.log('at1', s.charCodeAt(1));
  // ES6
  let s1 = '𠮷a';
  console.log('length', s1.length);
  console.log('code0', s1.codePointAt(0));// 取十进制码值，完整的
  console.log('code0.to16', s1.codePointAt(0).toString(16));// 16进制码值
  console.log('code1', s1.codePointAt(1));// 只取后两个字节
  console.log('code2', s1.codePointAt(2));
}

{
  // fromCharCode API
  console.log(String.fromCharCode("0x20bb7"));// 取码值
  console.log(String.fromCodePoint("0x20bb7"));
  console.log(String.fromCodePoint(0x78, 0x1f680, 0x79));
  console.log(String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y');

}

// 遍历器接口
{
  let str = '\u{20BB7}abc';
  // ES5
  for (let i=0; i<str.length;i++){
    console.log('es5', str[i]);
  }
  // ES6
  for (let code of str){
    console.log('es6', code);
  } 
}

// 判断字符串是否包含某些字符
{
  let str = "string";
  console.log('includes', str.includes('r'));
  console.log('start', str.startsWith('str'));
  console.log('end', str.endsWith('ng'));
  console.log('includes3', str.includes('ing', 3));
  console.log('start3', str.startsWith('ing', 3));
  console.log('end3', str.endsWith('str', 4));
}

// 复制字符串
{
  let str = "abc";
  console.log(str.repeat(2));
}

// 模板字符串
{
  let name = "list";
  let info = "hello world";
  let m = `i\`m ${name}, ${info}`;
  console.log(m);

  function fn() {
    return "Hello World";
  }
  console.log(`foo ${fn()} bar`);

  const tmpl = addrs => `
    <table>
    ${addrs.map(addr => `
      <tr><td>${addr.first}</td></tr>
      <tr><td>${addr.last}</td></tr>
    `).join('')}
    </table>
  `;
  let content = [{'first':'f','last':'l'}];
  console.log(tmpl(content));
}

{
  // 写法一
  let str1 = 'return ' + '`Hello ${name}!`';
  let func1 = new Function('name', str1);
  console.log(func1('Jack')); // "Hello Jack!"

  // 写法二
  let str2 = '(name) => `Hello ${name}!`';
  let func2 = eval.call(null, str2);
  console.log(func2('Jack')); // "Hello Jack!"
}

// es7 提案
{
  console.log('1'.padStart(3,'0'));// 第一个参数为返回长度，长度不够补足第二个参数 001
  console.log('1'.padEnd(3,'0'));// 100

  // 大于或等于原长度
  console.log('xxx'.padStart(2, 'ab'));// 'xxx'
  console.log('xxx'.padEnd(2, 'ab'));// 'xxx'

  // 用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串
  console.log('abc'.padStart(10, '0123456789')); // '0123456abc'

  // 如果省略第二个参数，则会用空格补全长度。
  console.log('x'.padStart(4)); // '   x'
  console.log('x'.padEnd(4)); // 'x   '
}


// 标签模板
{
  let user = {
    name: 'list',
    info: 'hello world'
  };
  console.log(abc`i am ${user.name}, ${user.info}`);
  function abc(s, v1, v2) {
    console.log(s,v1,v2);
    return s+v1+v2;
  }
}

{
  console.log(String.raw`Hi\n${1+2}`);
  console.log(`Hi\n${1+2}`);
}