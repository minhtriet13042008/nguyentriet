function Kiemtra(ten , mail){
	var ten = document.getElementById("ten").value;
	var email = document.getElementById("mail").value;
	var tel = document.getElementById("tel").value;
	if(ten == "")
		{
		alert("Chua nhap ten");
		return false;
		}
	if(email == "")
		{
		alert("Chua nhap email");
		return false;
		}
	if(tel == "")
		{
		alert("Chua nhap tel");
		return false;
		}
	alert("Form duoc gui thanh cong.");
	event.preventDefault();
	return true;}