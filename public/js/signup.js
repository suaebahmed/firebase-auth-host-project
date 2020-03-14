const signupCont = document.querySelector('.signup-container');
const mail = document.getElementById('mail');
const pw = document.getElementById('password');

const signupBtn = document.getElementById('signUp');
const auth = firebase.auth();

signupBtn.addEventListener('click',function(){
    var email = mail.value;
    var password = pw.value;
    auth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
        emailVerificationEmail();
    })
    .catch(err=>{
        console.log(err)
    })
})

const emailVerificationEmail = () =>{
    auth.currentUser.sendEmailVerification() //ve.
        .then(()=>{
        window.location.assign('../profile')
        })
        .catch(err=>{
            console.log(err)
        })
}