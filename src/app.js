function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = greet; // Export the greet function so it can be used in other files

if (require.main === module) {
  // If this file is run directly, execute the following code
  const name = process.argv[2] || 'World'; // Get the name from command line arguments or default to 'World'
  console.log(greet(name)); // Call the greet function and log the result
}