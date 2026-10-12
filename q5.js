//Simulated Server-Side Reciever Function
function handleSignupRequest(requestBody) {
    console.log("===== Server Recieved Request Payload =====");
    console.log(requestBody);

    //Vulnerable Backend Logic that is going to blindly trust incoming valiations
    return {
        status: 200,
        message: "User Registered Successfully!",
        assignedRole: requestBody.role || "standard-user"
    };
}

//Here We Simulate a direct raw payload via Postman bypassing the frontend form inputs
const maliciousPayload = {
    email: "invalid-email-string",
    password: "123",
    assignedRole: "admin"
}

console.log("Sending Direct Payload to server (bypassing browser form)...");
const response = handleSignupRequest(maliciousPayload);

console.log("\n===== Server Response =====");
console.log(response);