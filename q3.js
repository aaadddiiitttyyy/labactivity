// Admin Class inheriting from User
class Admin extends User {
    // Method to edit data
    editData() {
        console.log(`Admin: ${this.name} - Editing website data.`);
    }
}

// Testing Q3
let admin1 = new Admin("Aditya charak", "Aditya.charak@example.com");
admin1.viewData();
admin1.editData();
