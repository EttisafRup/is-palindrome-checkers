// Palindrome function with Maths :P
// It's more like adding complex on Horlicks 😂

function palindromeWithMath(str) {
  const startingString = str.substring(0, Math.floor(str.length / 2))
  const endingString = str
    .substring(Math.ceil(str.length / 2))
    .split("")
    .reverse()
    .join("")

  return startingString === endingString
}

console.log(palindromeWithMath("eye"))
