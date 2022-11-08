function easyPalindrome(str) {
  const reversedString = str.split("").reverse("").join("").toLowerCase()
  return str.toLowerCase() === reversedString
}
console.log(easyPalindrome("ruppur"))

// => The easy one in my POV :P
