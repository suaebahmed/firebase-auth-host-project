const mailCont = document.querySelector('.mail-container');
const emailBtn = document.getElementById('mail');
const passwordBtn = document.getElementById('password');


const signinBtn = document.getElementById('signInWithMail');
const signUp = document.getElementById('signUp');

const auth = firebase.auth();

signUp.addEventListener('click',function(){
    window.location.assign('./signup')
})
signinBtn.addEventListener('click',function(){
    var email = emailBtn.value;
    var password = passwordBtn.value;
    auth.signInWithEmailAndPassword(email,password)
    .then(res=>{
        window.location.assign('./profile')
    })
    .catch(err=>{
        console.log(err)
    })
})