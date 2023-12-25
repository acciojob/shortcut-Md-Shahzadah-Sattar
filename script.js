function shortcut(s1, s2) {
  // Check if either of the input strings is empty
  if (s1.length === 0 || s2.length === 0) {
    return '';
  }

  // Extract the initial letters of the strings and concatenate them
  const initials = s1.charAt(0) + s2.charAt(0);

  return initials;
}

// Uncomment the code below if you want to take input from the user
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");

// Call the shortcut function with user input
// alert(shortcut(s1, s2));

// Alternatively, you can provide sample strings for testing
const result = shortcut("Amnesty", "International");
console.log(result); // This will log the result to the console
