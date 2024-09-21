document.getElementById('login-btn')
    .addEventListener('click', function(){
        
        console.log('this si ');

        const gmails = document.getElementById('gmail-id').value;
        const pin = document.getElementById('pass-no').value;
        console.log(gmails , pin);

        if (gmails === 'tareq' && pin === '1234'){
            console.log("you are log in");
            window.location.href = '/home.html'
        }else{
            alert('wrong id')
        }
    })