function isAnagram(str1, str2) {
  const formatString = (str) => str.toLowerCase().split("").sort().join("");

  return formatString(str1) === formatString(str2);
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
