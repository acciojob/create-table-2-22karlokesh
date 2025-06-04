// function createTable() {
//     //Write your code here
  
// }

// not understandable
function createTable() {
    // Prompt the user for number of rows
    let rows = prompt("Input number of rows");
    let cols = prompt("Input number of columns");

    // Convert to integers
    rows = parseInt(rows);
    cols = parseInt(cols);

    // Validate inputs
    if (isNaN(rows) || isNaN(cols)) {
        alert("Please enter valid numeric values.");
        return;
    }

    if (rows <= 0 || cols <= 0) {
        alert("Number of rows and columns must be greater than 0.");
        return;
    }

    // Get the table element
    let table = document.getElementById("myTable");

    // Clear previous table content if any
    table.innerHTML = "";

    // Create rows and columns
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < cols; j++) {
            let cell = document.createElement("td");
            cell.textContent = `Row-${i} Column-${j}`;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
}

