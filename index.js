const form = document.getElementById('form');
const email = document.getElementById('email');

//check email function
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    const validate = email.value;
    if(!validateEmail(validate)){
        form.classList.add('error');
    }else{
        form.classList.remove('error');
    }
})