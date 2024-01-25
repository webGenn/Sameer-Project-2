var name_error = document.getElementById("Name_error");
var phone_error = document.getElementById("Phone_error");
var password_error = document.getElementById("Password_error");
var con_pass_error = document.getElementById("Con_pass_error");
var submit_error = document.getElementById("submit_error");

// validating Name 

function ValidateName(){
    var username = document.getElementById("username").value;
        number = /^[0-9]$/;

    if(username.length == 0){
        name_error.innerHTML = "Name is Required";
        name_error.style.color = "red";
        return false;
    }
    if(username.length > 30){
        name_error.innerHTML = "Name Should Be Short";
        name_error.style.color = "red";
        return false;
    }
    if(username.match(number)){
        name_error.innerHTML = "Numbers Are Not Allowed";
        name_error.style.color = "red";
        return false;
    }
    else{
        name_error.innerHTML = "Name Is Valid";
        name_error.style.color = "green";
        return true;
    }
}

// validating phone 

function ValidatePhone(){
    var mobilenumber = document.getElementById("Mobile").value;

    if(mobilenumber.length == 0){
        phone_error.innerHTML = "Mobile Number Is Required";
        phone_error.style.color = "red";
        return false;
    }
    if(mobilenumber.length != 10){
        phone_error.innerHTML = "Mobile Number Must Be Of 10 Digits";
        phone_error.style.color = "red";
        return false;
    }
    if(
        mobilenumber == "0000000000" 
        || mobilenumber == "1234567890"
        || mobilenumber == "1111111111"
        || mobilenumber == "2222222222"
        || mobilenumber == "3333333333"
        || mobilenumber == "4444444444"
        || mobilenumber == "5555555555"
        || mobilenumber == "6666666666"
        || mobilenumber == "7777777777"
        || mobilenumber == "8888888888"
        || mobilenumber == "9999999999"
        || mobilenumber == "9876543210"
    ){
        phone_error.innerHTML = "Invalid Mobile Number";
        phone_error.style.color = "red";
        return false;
    }
    else{
        phone_error.innerHTML = "Mobile Number Is Valid";
        phone_error.style.color = "green";
        return true;
    }
}

// validating password 

function Validatepass(){
    let pass1 = document.getElementById("password").value;
        if(pass1.length == 0){
            password_error.innerHTML = "Password Is Required";
            password_error.style.color = "red";
            return false;
        }
        if(pass1.length < 4){
            password_error.innerHTML = "Password Is Weak";
            password_error.style.color = "red";
            return false;
        }
        if(pass1.length < 8){
            password_error.innerHTML = "Password Is Not Too Strong";
            password_error.style.color = "red";
            return false;
        }
        if(pass1.length > 15){
            password_error.innerHTML = "Password Is Too Long";
            password_error.style.color = "red";
            return false;
        }
        if(
            pass1 == "123456789101112"
            || pass1 == "012345678910111" 
            || pass1 == "abcdefghijklmno"
            || pass1 == "ABCDEFGHIKLMNO"
            || pass1 == "000000000000"
            || pass1 == "111111111111"
            || pass1 == "222222222222"
            || pass1 == "333333333333"
            || pass1 == "444444444444"
            || pass1 == "555555555555"
            || pass1 == "666666666666"
            || pass1 == "777777777777"
            || pass1 == "888888888888"
            || pass1 == "999999999999"
        ){
            password_error.innerHTML = "Password Is Weak";
            password_error.style.color = "red";
            return false; 
        }
        else{
            password_error.innerHTML = "Password Is Valid";
            password_error.style.color = "green";
            return true;
        }
    }


// validating confirm-password 

function Validateconpass(){
let pass1 = document.getElementById("password").value;
let confirm_pass = document.getElementById("Con_pass").value;

    if(confirm_pass.length == 0){
        con_pass_error.innerHTML = "Please Re-Enter Password";
        con_pass_error.style.color = "red";
        return false;
    }
    if(pass1 != confirm_pass){
        con_pass_error.innerHTML = "Password Do Not Match";
        con_pass_error.style.color = "red";
        return false;
    }
    else{
        con_pass_error.innerHTML = "Password Is Matching";
        con_pass_error.style.color = "green";
        return true;
    }

}

// validating button 

function validateform(){
    if(!ValidateName() || !ValidatePhone() || !Validatepass() || !Validateconpass()){
        submit_error.innerHTML = "Please Fill The Data";
        submit_error.style.color = "red";
        return false;
    }
    else{
        submit_error.innerHTML = "Data Filled Successfully!";
        submit_error.style.color = "green";
        return true;
    }
}