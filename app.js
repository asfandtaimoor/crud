let selectedRow = null;

function onFormSubmit() {
    var formData = readFormData();

    if (selectedRow == null) insertNewRecord(formData)
    else updateRecord(formData);

    resetForm();

}



// Read  form data 

function readFormData() {

    let formData = {};

    formData["fullname"] = document.getElementById('full-name').value;
    formData["empCode"] = document.getElementById('emp-code').value;
    formData["salary"] = document.getElementById('salary').value;
    formData["city"] = document.getElementById('city').value;

    return formData;

}


// Insert new  Record

function insertNewRecord(data) {

    let table = document.getElementById('employee-list').getElementsByTagName('tbody')[0];

    let newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;


    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;


    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;


    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = ` <a  onClick="onEdit(this)">Edit |</a>
                        <a  onClick="onDelete(this)">Delete</a>`


}



// Reset All form data


function resetForm() {
    document.getElementById('full-name').value = "";
    document.getElementById('emp-code').value = "";
    document.getElementById('salary').value = "";
    document.getElementById('city').value = "";
}


// Edit row

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;

    document.getElementById('full-name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('emp-code').value = selectedRow.cells[1].innerHTML;
    document.getElementById('salary').value = selectedRow.cells[2].innerHTML;
    document.getElementById('city').value = selectedRow.cells[3].innerHTML;

}



// Update Record

function updateRecord(formData) {

    selectedRow.cells[0].innerHTML = formData.fullname;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;

}



// Delete

function onDelete(td) {

    if (confirm('Are you sure want to delte this record')) {
        row = td.parentElement.parentElement;
        document.getElementById('employee-list').deleteRow(row.rowIndex);
        resetForm();
    }

}