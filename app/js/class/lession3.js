/* 正则扩展 */

// ES5中写法
{
  let regex = new RegExp('xyz','i');// 字符串，修饰符
  let regex2 = new RegExp(/xyz/i);// 只能一个参数，正则表达式
  console.log(regex.test('xyz123'),regex.test('xyz123'));

  let regexEs6 = new RegExp(/xyz/ig,'i');// 允许正则表达式，允许修饰符
  console.log(regexEs6.flags);// 获取正则对象修饰符
}

//  y修饰符
{
  let a = 'bbb_bb_b';
  let a1 = /b+/g;// 都是全局匹配，但是g修饰符是从上次，中间任何都可以，y匹配成功后，是紧接着下一个匹配字符
  let a2 = /b+/y;
  console.log('one',a1.exec(a),a2.exec(a));
  console.log('two',a1.exec(a),a2.exec(a));

  console.log(a1.sticky, a2.sticky);// sticky，检查是否设置了y修饰符
}

// u修饰符，unicode
{
  console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));// 认为你是两个字符
  console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));// 认为你是一个字符

  console.log(/\u{61}/.test('a'));
  console.log(/\u{61}/u.test('a'));// 如果{}中是unicode字符编码，要加u修饰符才能被识别
  
  console.log(`\u{20BB7}`);
  let s = '𠮷';
  console.log('u-1',/^.$/.test(s)); //.匹配任何字符，大于两个字节的unicode字符需要加u，同时也不能匹配 ，换行符，回车符，行分隔符，段分隔符
  console.log('u-2',/^.$/u.test(s));
  
  console.log('test-1',/𠮷{2}/.test('𠮷𠮷'));
  console.log('test-2',/𠮷{2}/u.test('𠮷𠮷'));// 如果处理的正则表达式中有大于两个字节的字符中，要加u修饰符；
}

// s修饰符
{
  console.log(/foo.bar/.test('foo\nbar'));// .不匹配换行符
  console.log(/foo[^]bar/.test('foo\nbar'));// 不太符合直觉
  console.log(/foo.bar/s.test('foo\nbar'));

}