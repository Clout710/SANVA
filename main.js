// validation script

const inputs= document.querySelectorAll("input");

 const patterns = {
    phone:/^\d{10}$/,
    firstname:/^[a-z]{3,30}$/i,
    surname :/^[a-z]{3,20}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,9})(\.[a-z]{2,9})?$/,
    message: /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-,])$/,
    
 };


 //validation finction
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