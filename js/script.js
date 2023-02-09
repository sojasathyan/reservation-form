// alert("hello");
function validate() {
	let n = document.getElementById("name").value;
	let mail = document.getElementById("M").value;
	let cityy = document.getElementById("city").value;
	let d = document.getElementById("date1").value;
	let nregx = /^[a-zA-Z]{2,15}$/;
	let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let p = document.getElementById("persons").value;
	if (n == "") {
		alert("name field is empty");
		return false;
	} else if (!nregx.test(n)) {
		alert("Enter strings only");
		return false;
	} else if (!email.test(mail)) {
		alert("Enter valid email");
		return false;
	} else if (d == "") {
		alert("Select date");
		return false;
	} else if (cityy == "select") {
		alert("please select tour package");
		return false;
	} else if (isNaN(p)) {
		alert(" enter number of persons");
		return false;
	} else if (
		document.getElementById("boarding").checked == false &&
		document.getElementById("Fooding").checked == false &&
		document.getElementById("sightseeing").checked == false
	) {
		alert("choose atleat one option");
		return false;
	} else if (
		document.getElementById("agree").checked == false &&
		document.getElementById("disagree").checked == false
	) {
		alert("choose atleat one option");
		return false;
	} else {
		return true;
	}
}
