module.exports = function check(str, bracketsConfig) {
  let stack = []
  const BRACKETS_PAIRS = Object.assign({}, ...bracketsConfig.map(([item1, item2]) => ({[item2]:item1})))
  // console.log("🚀 ~ file: main.js ~ line 4 ~ check ~ BRACKETS_PAIRS", BRACKETS_PAIRS)
  const OPEN_BRACKETS = bracketsConfig.map(([item1, item2]) => item1)
  const CLOSE_BRACKETS = bracketsConfig.map(([item1, item2]) => item2)
  
  for (let i = 0; i < str.length; i++) {
    let curSymbol = str[i]
    if (!CLOSE_BRACKETS.includes(curSymbol)) {
      stack.push(curSymbol)
    } else if (stack[stack.length - 1] === BRACKETS_PAIRS[curSymbol]) {stack.pop()}
      else if (stack[stack.length - 1] !== curSymbol) {stack.push(curSymbol)}
    // else {
    //   if (stack.length === 0) {
    //     return false
    //   }
    //   let aboveSymbol = stack[stack.length - 1];
    
    //   if (BRACKETS_PAIRS[curSymbol] === aboveSymbol) {
    //     stack.pop()
    //   } else {
    //     return false
    //   }
    // }
  }
  // console.log(stack)
  return stack.length === 0

}
