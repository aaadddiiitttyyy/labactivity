// User Class
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // Method to view data
    viewData() {
        console.log(`User: ${this.name}, Email: ${this.email} - Viewing website data.`);
    }
}

// Testing Q2
let user1 = new User("John Doe", "john@example.com");
user1.viewData();
