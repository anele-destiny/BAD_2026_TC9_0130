//Demonstrating Browser API vs Node.js Global Environment
try {
    //Attempting to use a browser (HTML) DOM Method in Node.js
    document.getElementById("name");
} catch (error) {
    console.log("===== DOM Access Error in Node.js =====");
    console.log("Error Name: ${error.name}");
    console.log("Error Message: ${error.message}\n");
}

//Inspecting the Actual Node.js Global Environment
console.log("===== Node.js Global Environment =====");
console.log("Does the 'global' variable exist? ", typeof global !== "undefined");
console.log("Operating System Platform: ", process.platform);
console.log("Node.js Runtime Version: ", process.version);