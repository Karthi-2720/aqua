function LoginValidate(){
    
    var enteremail=document.getElementById('email').value;
    var enterpassword=document.getElementById('pwd').value;

    var getEmail=localStorage.getItem('email')
    var getPwd=localStorage.getItem('password')
    if(enteremail==getEmail)
    {
        if(enterpassword==getPwd)
        {
            alert("login success");
            window.location= "/home.html" ;
            return false; 
            
        }
        else function LoginValidate(){
            var enteremail=document.getElementById('email').value;
            var enterpassword=document.getElementById('pwd').value;
    
            var getEmail=localStorage.getItem('email')
            var getPwd=localStorage.getItem('password')
            if(enteremail==getEmail)
            {
                if(enterpassword==getPwd)
                {
                    document.querySelector('.main').classList.add('animate__animated', 'animate__fadeOutUp');
                    setTimeout(function() {
                        alert("login success");
                        window.location= "/home.html";
                    }, 800);
                    return false;
                }
                else
                {
                    document.getElementById('pwd').classList.add('animate__animated', 'animate__shakeX');
                    setTimeout(function() {
                        document.getElementById('pwd').classList.remove('animate__animated', 'animate__shakeX');
                        alert("wrong password");
                    }, 500);
                    return false;
                }
            }
            else
            {
                document.getElementById('email').classList.add('animate__animated', 'animate__shakeX');
                setTimeout(function() {
                    document.getElementById('email').classList.remove('animate__animated', 'animate__shakeX');
                    alert("invalid details");
                }, 500);
                return false;
            }
        }
    
        // Add animation when the page loads
        window.onload = function() {
            document.querySelectorAll('input').forEach(function(input, index) {
                setTimeout(function() {
                    input.classList.add('animate__animated', 'animate__fadeInUp');
                }, 300 * index);
            });
        };
        {
            alert("wrong password");

        }
    }
        else
        {
            alert("invalid details");
        }
   
    
    }
