document.getElementById('btn-l').addEventListener('click', function(){

    let email = document.getElementById('email');
    let mail = email.value;
    
    let password = document.getElementById('pass');
    let pass = password.value;

    if (mail=== 'sifatesadakin10@gmail.com' && pass === 'balerpassword' ){
        window.location.href= 'bank.html';
        console.log('Welcome Sifat-E-Sadakin');
    }
    else{
        alert('Invalid Email or password')
        console.log('Invalid Email or password');
    }

})