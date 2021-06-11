var database =  [
    {
        username:'smallcow',
        password:'Power'
    }
];

var newsFeed = [
    {
        username:'Bobby',
        timeline:'So Haapy!!!! :-)'
    },
    {
        username:'Sally',
        timeline:'Javascript is Sooo cooool'
    },
];

var userNamePrompt = prompt('what s your usernmae?')
var passwordPrompt = prompt('what s your passwrod?')

function signIn(user,pass){
    if(user === database[0].username &&
       pass === database[0].password){
           console.log(newsFeed);
       }else{
           alert('sorry, your dont')
       }
}

signIn(userNamePrompt,passwordPrompt);