const fs = require("fs");

// Read JSON file
const data = JSON.parse(fs.readFileSync("university.json", "utf8"));

// Backup function
function backupFile(filePath) {
    const backupPath = `${filePath}.backup.${Date.now()}`;
    fs.copyFileSync(filePath, backupPath);
    console.log("Backup created at:", backupPath);
}

// Add professor function
function addProfessor(data, departmentId, newProfessor) {
    const department = data.university.departments.find(dep => dep.id === departmentId);
    if (!department) {
        console.log("Department not found!");
        return;
    }
    department.professors.push(newProfessor);
    console.log("Professor added successfully!");
}

// Backup before making changes
backupFile("university.json");

// Example: Add a new professor
addProfessor(data, "d1", { id: "p3", name: "Dr. Charlie", specialization: "Databases" });

// Save changes back to file
fs.writeFileSync("university.json", JSON.stringify(data, null, 2));
console.log("Updated data saved to file.");
