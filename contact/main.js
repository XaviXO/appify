// select element function 
const selectElement = function(element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open')
});

// scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left',{
    origin: 'left',
    duration: 1000,
    distace:'25rem',
    delay: 300
});

sr.reveal('.animate-right',{
    origin: 'right',
    duration: 1000,
    distace:'25rem',
    delay: 600
});

sr.reveal('.animate-top',{
    origin: 'top',
    duration: 1000,
    distace:'25rem',
    delay: 600
});

sr.reveal('.animate-bottom',{
    origin: 'bottom',
    duration: 1000,
    distace:'25rem',
    delay: 600
});

function validation(){
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;
    
    error_message.style.padding = "10px";
    if(first.length < 1){
        text = "Please Enter Valid First Name";
        error_message.innerHMTL = text;
        return false;
    }
    if(last.length < 1){
        text = "Please Enter Valid Last Name";
        error_message.innerHMTL = text;
        return false;
    }
    if(isNaN(phone) || phone.length !== 10){
        text = "Please Enter Valid Phone Number";
        error_message.innerHMTL = text;
        return false;
    }
    if(email.indexOf("@") !== -1 || email.length < 8){
        text = "Please Enter Valid email";
        error_message.innerHMTL = text;
        return false;
    }
    if(message.length < 50){
        text = "Please Enter More Than 50 Characters";
        alert(text);
        return false;
    }
    alert("form Submitted Successfully!")
    return true;
}