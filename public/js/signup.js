const mailCont = document.querySelector('.mail-container');
const emailBtn = document.getElementById('mail');
const passwordBtn = document.getElementById('password');


const signinBtn = document.getElementById('signInWithMail');
const signupBtn = document.getElementById('signUp');

const auth = firebase.auth();

signupBtn.addEventListener('click',function(){
    var email = emailBtn.value;
    var password = passwordBtn.value;
    auth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
        window.location.href = '/profile'
    })
    .catch(err=>{
        console.log(err)
    })
})
