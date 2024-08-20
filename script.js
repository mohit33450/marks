function generateStudentForms() {
    const numStudents = parseInt(document.getElementById('num-students').value);
    const formsContainer = document.getElementById('students-forms');

    // Clear existing forms
    formsContainer.innerHTML = '';

    // Generate forms for each student
    for (let i = 1; i <= numStudents; i++) {
        const formHtml = `
            <fieldset>
                <legend>Student ${i}</legend>
                <div class="form-group">
                    <label for="name-${i}">Name:</label>
                    <input type="text" id="name-${i}" required>
                </div>
                <div class="form-group">
                    <label for="seatno-${i}">Seat Number:</label>
                    <input type="text" id="seatno-${i}" required>
                </div>
                <div class="form-group">
                    <label for="cppm-${i}">CPP Marks:</label>
                    <input type="number" id="cppm-${i}" min="0" max="100" required>
                </div>
                <div class="form-group">
                    <label for="cs-${i}">CS Marks:</label>
                    <input type="number" id="cs-${i}" min="0" max="100" required>
                </div>
                <div class="form-group">
                    <label for="maths-${i}">Maths Marks:</label>
                    <input type="number" id="maths-${i}" min="0" max="100" required>
                </div>
                <div class="form-group">
                    <label for="ic-${i}">IC Marks:</label>
                    <input type="number" id="ic-${i}" min="0" max="100" required>
                </div>
                <div class="form-group">
                    <label for="dsa-${i}">DSA Marks:</label>
                    <input type="number" id="dsa-${i}" min="0" max="100" required>
                </div>
            </fieldset>
        `;
        formsContainer.innerHTML += formHtml;
    }
}

function generateReport() {
    const numStudents = parseInt(document.getElementById('num-students').value);
    const marksheetsContainer = document.getElementById('marksheets');

    // Clear existing reports
    marksheetsContainer.innerHTML = '';

    for (let i = 1; i <= numStudents; i++) {
        const name = document.getElementById(`name-${i}`).value;
        const seatno = document.getElementById(`seatno-${i}`).value;
        const cppm = parseInt(document.getElementById(`cppm-${i}`).value);
        const cs = parseInt(document.getElementById(`cs-${i}`).value);
        const maths = parseInt(document.getElementById(`maths-${i}`).value);
        const ic = parseInt(document.getElementById(`ic-${i}`).value);
        const dsa = parseInt(document.getElementById(`dsa-${i}`).value);

        const total = cppm + cs + maths + ic + dsa;
        const percentage = Math.floor(total / 5); // Integer division

        let gradeClass = 'grade-fail';
        let grade = 'fail';

        if (percentage >= 80) {
            gradeClass = 'grade-A';
            grade = 'A';
        } else if (percentage >= 60) {
            gradeClass = 'grade-B';
            grade = 'B';
        } else if (percentage >= 40) {
            gradeClass = 'grade-C';
            grade = 'C';
        }

        const marksheetHtml = `
            <div class="marksheet ${gradeClass}">
                <h2>Student Report</h2>
                <table>
                    <tr><th>Field</th><th>Details</th></tr>
                    <tr><td>Name:</td><td>${name}</td></tr>
                    <tr><td>Seat No:</td><td>${seatno}</td></tr>
                    <tr><td>CPP Marks:</td><td>${cppm}</td></tr>
                    <tr><td>CS Marks:</td><td>${cs}</td></tr>
                    <tr><td>Maths Marks:</td><td>${maths}</td></tr>
                    <tr><td>IC Marks:</td><td>${ic}</td></tr>
                    <tr><td>DSA Marks:</td><td>${dsa}</td></tr>
                    <tr><td>Total:</td><td>${total}</td></tr>
                    <tr><td>Percentage:</td><td>${percentage}%</td></tr>
                    <tr><td>Grade:</td><td>${grade}</td></tr>
                </table>
            </div>
        `;
        marksheetsContainer.innerHTML += marksheetHtml;
    }
}
