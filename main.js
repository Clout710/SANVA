// validation script

const inputs= document.querySelectorAll("input");

 const patterns = {
    phone:/^\d{10}$/,
    firstname:/^[a-z]{3,30}$/i,
    surname :/^[a-z]{3,20}$/i,
    email: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,9})(\.[a-z]{2,9})?$/,
    message: /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-,])$/,
    
 };


 //validation function
function validate(field, regex){
if(regex.test(field.value)){
    field.className = "valid";
    } else {
    field.className ="invalid";
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup",(e) => {


        validate(e.target, patterns[e.target.attributes.name.value])
    
});
});

function showAlert() {
    if(regex.test(field.value)){
        field.className = "valid";
        } else {
        field.className ="invalid";
    }





    //this one was commented out already

    // var myText = "This can be whatever text you like!";
    // alert (myText);
  }
















function ValidationEvent() {
    var name = document.getElementById("firstname").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("phone").value;
    var emailReg = /^([\w.]+@([\w]+.)+[\w]{2,4})?$/;
    
    if (name != '' && email != '' && contact != '') {
        if (email.match(emailReg)) {
            // if  (document.getElementById("male").checked || document.getElementById("female").checked) {
                if (contact.length == 10) {
                alert("Thank you for your submission.");
                return true;
                } else {
                    alert("The Contact No. must be at least 10 digit long!");
                    return false;
                    }
            // } else {
            // alert("You must select gender.....!");
            // return false;
            // }
        } else {
            alert("Invalid Email Address...!!!");
            return false;
            }
    } else {
        alert("Please fill in all the required fields.");
        return false;
        }
    }
    