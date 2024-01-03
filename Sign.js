var users = [{username: "Amr", password: "8888"}];
function registration() 
{
    var User_name = document.getElementById("User Name").value;
    var password = document.getElementById("Password").value;
    var Confirm_Password = document.getElementById("Confirm Password").value;
    var email = document.getElementById("Email").value;
    var age = document.getElementById("Age").value;
    var regix = /^(?=.*[-#$.%&@!+=\\*])(?=.*[a-zA-Z])(?=.*\d).{5,12}$/; 

    
    if (User_name == "" ) 
    {
        alert("Please fill in all fields.");
    }
    
    else if(User_name.length <5 || User_name.length>15)
    {
        document.getElementById('p1').innerHTML="Enter UserName Between 5 to 15";
    }
    else if(!password.match(regix))
    {
        document.getElementById('p2').innerHTML="Password Not Strong";
    }
    else if(password != Confirm_Password)
    {
        document.getElementById('p3').innerHTML="Password Not Match Confirm Password"
    }
    else
    {
        var bb = {User_name:User_name , password:password}
        console.log(bb);
        console.push(bb)
        alert("SigUp Successfully");
    }
}

function login_succ()
{
    var user = document.getElementById('User Name').value
    var pass = document.getElementById('Password').value;
    if(user==""||pass=="")
    {
      alert("Check Empty Fields")
    }
    else
    {
        for(let i=0; i<user.length;i++)
        {
            if(user==users[i].username && pass==user[i].password)
            {
                alert("Login Successfully");
            }
            alert("Login Field");
            console.log(users);
        }
    }
}