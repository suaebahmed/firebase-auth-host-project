const logOut = document.getElementById('logOut');
const mergeAccounts = document.getElementById('mergeAccounts')
const modifyAccount = document.getElementById('modifyAccount');
const displayNameHolder =document.getElementById('displayNameHolder');
const photoHolder = document.getElementById('photoHolder')

const auth = firebase.auth();

logOut.addEventListener('click',function(e){
    auth.signOut()
    .then(()=>{
        window.location.assign('../')
    })
    .catch(err=>{
        console.log(err)
    })
})

auth.onAuthStateChanged(function(user){
    console.log(user)
})

mergeAccounts.addEventListener('click',function(){
    window.location.assign('./merge')
})
modifyAccount.addEventListener('click',function(){
    window.location.assign('./edit')
})