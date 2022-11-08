// Normal way to check Palindrome for Normal peoples like me 😉

function normalPalindrome(str) {
  let reversedString = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i]
  }
  return reversedString === str
}

console.log(normalPalindrome("eye"))
