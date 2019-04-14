var selectedRow = null;
var q=1, pre,can,sub;

function inicio() {
	document.getElementById("inicio").style.display = "block";
	document.getElementById("ventas").style.display = "none";
	document.getElementById("reportes").style.display = "none";
	document.getElementById("clientes").style.display = "none";
	document.getElementById("productos").style.display = "none";
}
function ventas() {
	document.getElementById("inicio").style.display = "none";
	document.getElementById("ventas").style.display = "block";
	document.getElementById("reportes").style.display = "none";
	document.getElementById("clientes").style.display = "none";
	document.getElementById("productos").style.display = "none";


}
function reportes() {
	document.getElementById("inicio").style.display = "none";
	document.getElementById("ventas").style.display = "none";
	document.getElementById("reportes").style.display = "block";
	document.getElementById("clientes").style.display = "none";
	document.getElementById("productos").style.display = "none";
}
function clientes() {
	document.getElementById("inicio").style.display = "none";
	document.getElementById("ventas").style.display = "none";
	document.getElementById("reportes").style.display = "none";
	document.getElementById("clientes").style.display = "block";
	document.getElementById("productos").style.display = "none";
}
function productos() {
	document.getElementById("inicio").style.display = "none";
	document.getElementById("ventas").style.display = "none";
	document.getElementById("reportes").style.display = "none";
	document.getElementById("clientes").style.display = "none";
	document.getElementById("productos").style.display = "block";
}
function data1() {
	document.getElementById("cajacliente").value = "David";
}
function data2() {
	document.getElementById("cajacliente").value = "Keyla";
}
function data3() {
	document.getElementById("cajacliente").value = "Ronaldo";
}
function data4() {
	document.getElementById("cajacliente").value = "Lucas";
}
function datopro1(){
	document.getElementById("cajaproducto").value="Mouse";
	document.getElementById("cajaprecio").value="25";
	document.getElementById("cajacantidad").value="20";
}
function datopro2(){
	document.getElementById("cajaproducto").value="Teclado";
	document.getElementById("cajaprecio").value="50";
	document.getElementById("cajacantidad").value="30";
}
function datopro3(){
	document.getElementById("cajaproducto").value="Parlantes";
	document.getElementById("cajaprecio").value="200";
	document.getElementById("cajacantidad").value="20";
}
function datopro4(){
	document.getElementById("cajaproducto").value="Impresora";
	document.getElementById("cajaprecio").value="700";
	document.getElementById("cajacantidad").value="20";
}

////////*AQUI VIENE LO CHEVERE*//////

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["cajaproducto"] = document.getElementById("cajaproducto").value;
    formData["cajaprecio"] = document.getElementById("cajaprecio").value;
    formData["cajacantidad"] = document.getElementById("cajacantidad").value;
    
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    pre = document.getElementById("cajaprecio").value;
    can = document.getElementById("cajacantidad").value;
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "V00"+q++;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.cajaproducto;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.cajaprecio;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.cajacantidad;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = pre*can;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<i class="fas fa-trash-alt" onClick="onDelete(this)" id="deleterow"></i>`;
}
function validate() {
    isValid = true;
    if (document.getElementById("cajaproducto").value == "") {
        isValid = false;
        document.getElementById("ProductoValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("ProductoValidationError").classList.contains("hide"))
            document.getElementById("PoductoValidationError").classList.add("hide");
    }
	return isValid;
}	
function onDelete(td) {
    if (confirm('Estas seguro de eliminar ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function resetForm() {
	document.getElementById("cajacliente").value = "";
    document.getElementById("cajaproducto").value = "";
    document.getElementById("cajaprecio").value = "";
    document.getElementById("cajacantidad").value = "";
    
    selectedRow = null;
}
