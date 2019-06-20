function addressbook()
{
	this.contact=[]
}
function Contact(first_name,second_name,phone_number,email,address)
{
	this.first_name = first_name,
	this.second_name = second_name,
	this.phone_number = phone_number,
	this.email = email,
	this.address = address
}

Contact.prototype.full_name = function()

{

	console.log("My fullname:" + this.first_name + " " + this.second_name);

}

var Contact = new Contact ("Melissa","Kaitesi","Telephone","email","address");
Contact.full_name();