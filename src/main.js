function check(str, bracketsConfig) {
  let stack = [];
  let obj = Object.fromEntries(bracketsConfig);
  let reverseObj = {};
  const openBrackets = [];
  
  for (let key in obj) {
    reverseObj[obj[key]] = key;
  }
  
  bracketsConfig.forEach((item, index) => {
    openBrackets.push(item[0]);    
  })

  for (let i = 0; i < str.length; i++) {          //  1             2                 3
    let currentSymbol = str[i];                   //  (             {                 }
    if (openBrackets.includes(currentSymbol)) {   //  true          true             false
      stack.push(currentSymbol);                  // stack['(']    stack['(', '{']    
    } else {
      if (stack.length === 0) {
        return false
      }
    }

    let topElement = stack[stack.length - 1];     // (                {               }
    console.log(reverseObj);
    console.log(`Верхний элемент в стеке: ${topElement}`);
    console.log(`Значение ключа в объекте: ${reverseObj[currentSymbol]}`);

    if (reverseObj[currentSymbol] === topElement) {    //
      stack.pop();
    } else {
      continue
    }
    }

  return stack.length === 0
}

console.log(check('({})', [['(', ')'], ['{', '}']]))

