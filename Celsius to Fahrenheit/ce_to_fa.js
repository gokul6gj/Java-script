// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Function to convert centimeters to millimeters
function convertFaToCe(Ce) {
    // 1 cm = 10 mm
    const FaToCe = 1.8 ;

    // Convert cm to mm
    const Fa = (Ce * FaToCe)+32;
    return Fa;
}

// Example usage: Get input from the user and display the conversion

// Get user input for centimeters
const CeInput = prompt("Enter the length in Celsius ");

// Convert input to a number
const FaNumber = parseFloat(CeInput);

// Check if input is valid
if (isNaN(FaNumber)) {
    console.log("Please enter a valid number for Celsius .");
} else {
    // Calculate the length in millimeters
 
     const FaResult = convertFaToCe(FaNumber);
    console.log(`${FaNumber}° Celsius is equal to ${FaResult}° Fahrenheit.`);
}
