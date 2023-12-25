function shortcut(str1, str2) {
  // Check if either of the input strings is empty
  if (str1.length === 0 || str2.length === 0) {
    return '';
  }

  // Extract the initial letters of the strings and concatenate them
  const initials = str1.charAt(0) + str2.charAt(0);

  return initials;
}

// Examples
console.log(shortcut("Amnesty", "International"));  // Output: 'AI'
console.log(shortcut("Hello", "world"));             // Output: 'Hw'
console.log(shortcut("", "International"));           // Output: ''
console.log(shortcut("Amnesty", ""));                 // Output: ''

module.exports = shortcut;

// Do not change the code below.
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(shortcut(s1, s2));
