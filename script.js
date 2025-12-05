function createPerson() {
    // Get user input from text boxes
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const course = document.getElementById("course").value;
    const section = document.getElementById("section").value;
    const role = document.getElementById("role").value;

    // Create the person object
    const person = {
        firstName: firstName,
        lastName: lastName,
        course: course,
        section: section,
        role: role,
    };


       
    
    // Convert the object to formatted JSON (pretty print)
    const jsonPerson = JSON.stringify(person, null, 2);   
    
    
    // Display the object
    console.log("Person object:");
    console.log(person);

    // Display the JSON data line-by-line
    console.log("JSON format:");
    console.log(jsonPerson);
        
}