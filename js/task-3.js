function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
  }
  
  console.log(checkForSpam("Buy now, our biggest sale!")); // true
  console.log(checkForSpam("Great deals on SPAM")); // true
  console.log(checkForSpam("Hello, how are you?")); // false