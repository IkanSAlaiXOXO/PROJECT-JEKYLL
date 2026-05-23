function login(){

  const password =
  document.getElementById("password").value;

  if(password === "LUCIEN"){

    window.location.href =
    "database.html";

  }

  else{

    document.getElementById("message")
    .innerHTML =
    "ACCESS DENIED";

  }

}
