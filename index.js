// Define receivesAFunction function
function receivesAFunction(callback) {
    callback();
  }
  
  // Define returnsANamedFunction function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This is a named function");
    };
  }
  
  // Define returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function");
    };
  }
  
  // Test the functions
  receivesAFunction(() => {
    console.log("Callback function called");
  });
  
  const namedFunction = returnsANamedFunction();
  namedFunction(); // This will log "This is a named function"
  
  const anonymousFunction = returnsAnAnonymousFunction();
  anonymousFunction(); // This will log "This is an anonymous function"
  