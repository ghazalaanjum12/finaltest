// Function to generate the table
function generateTable() {
    let rowsInput = document.getElementById('t1');
    let colsInput = document.getElementById('t2');

    // Validate input for rows
    let rows = parseFloat(rowsInput.value);
    if (!Number.isInteger(rows) || rows <= 0) {
        alert("Please enter a valid number for the number of rows.");
        rowsInput.value = "";
        return;
    }

    // Validate input for columns
    let cols = parseFloat(colsInput.value);
    if (!Number.isInteger(cols) || cols <= 0) {
        alert("Please enter a valid number for the number of columns.");
        colsInput.value = "";
        return;
    }

    // Generating the table
    let table = "<table id='generatedTable' border='1'>";
    for (let i = 0; i < rows; i++) {
        table += "<tr>";
        for (let j = 0; j < cols; j++) {
            table += "<td id='cell_" + i + "_" + j + "'>Cell " + i + "," + j + "</td>";
        }
        table += "</tr>";
    }
    table += "</table>";

    // Replace the contents of the body with the generated table
    document.body.innerHTML = table + "<br><button id='b2' onclick='addColumn()'>Add Column</button> <button id='b3' onclick='addRow()'>Add Row</button>";
}


// Function to add a column to the table
function addColumn() {
    let table = document.getElementById('generatedTable');
    let rows = table.rows;
    let cols = table.rows[0].cells.length;
    for (let i = 0; i < rows.length; i++) {
        let cell = rows[i].insertCell(cols);
        cell.innerHTML = "Cell " + i + "," + cols;
        if (cell.cellIndex === cols) {
            cell.style.background = "#f0f0f0"; 
        }
    }
}

// Function to add a row to the table
function addRow() {
    let table = document.getElementById('generatedTable');
    let newRow = table.insertRow(-1);
    let cols = table.rows[0].cells.length;
    for (let i = 0; i < cols; i++) {
        let cell = newRow.insertCell(i);
        cell.innerHTML = "Cell " + (table.rows.length - 1) + "," + i;
        if (cell.parentNode.rowIndex === table.rows.length - 1) {
            cell.style.background = "#f0f0f0";
        }
    }
}
