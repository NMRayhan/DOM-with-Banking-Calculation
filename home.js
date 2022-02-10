function hello(){
    document.getElementById('loginSection').style.display = 'none';
    window.location.href = "banking.html";
}

document.getElementById('logInBtn').addEventListener('click', function () {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorMsg = document.getElementById('errorMsg');
    errorMsg.style.color = 'red';
    if(email!= '' && password!= ''){
        if (email.toLowerCase() == 'rayhan@gmail.com') {
            if (password == 12345) {
                hello();
            }else{
                errorMsg.innerHTML = 'Wrong Password';
            }
        }else{
            errorMsg.innerHTML = 'Wrong Email';
        }
    }else{
        errorMsg.innerHTML = 'Please Enter Email and Password';
    }
})