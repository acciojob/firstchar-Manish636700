function firstChar(text) { 
  if (typeof text !== "string") return ""; // Handle non-string input
  let trimmed = text.trim();
  return trimmed.length > 0 ? trimmed[0] : "";
}

// Do not change the code below
// Uncomment the following line to show the prompt popup
const text = prompt("Enter text:") || ""; // Ensure text is a string
alert(firstChar(text));
