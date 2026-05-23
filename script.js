function login(){
    const password =
    document.getElementById("passsword").value;

    if(password == "LUCIEN"){

        window.location.href = "database.html";

    }else{

        document.getElementById("message").innerHTML = "ACCESS DENIED";
    }
    
}
    }