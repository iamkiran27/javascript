// Create a simple application which displays two counts:Local Score, Session Score and a button to increment these counts. Local score must persist in Local Storage and Session score must persist in Session Storage and must reset on closing the session.



let localP = document.getElementById("local");
let localS = document.getElementById("session");

  
function setInitialData()
{
  
  if(!localStorage.getItem("localCounter"))
  {
    console.log("Yooo")
    localP.innerHTML = ": " + 0;
    localS.innerHTML = ": " + 0;
  }
  else{
    localP.innerHTML = ": " + localStorage.getItem("localCounter");
    localS.innerHTML = ": " + 0;
  }
  sessionStorage.clear();

}

var clearLocalStorage = () => {
  localStorage.clear();
  localP.innerHTML = ": " + 0;
}

var clearSessionStorage = () => {
  sessionStorage.clear();
  localS.innerHTML = ": "+ 0;
}
      function incrementLocal()
      {

        if(localStorage.getItem("localCounter"))
        {

          localP.innerHTML = ": " + (parseInt(localStorage.getItem("localCounter")) + 1)
          localStorage.setItem("localCounter",parseInt(localStorage.getItem("localCounter")) + 1);
        }
else{
  localP.innerHTML = ": " + 1;
  localStorage.setItem("localCounter", 1);
}
      }

      function incrementSession()
      {

if(sessionStorage.getItem("sessionCounter"))
        {

          localS.innerHTML = ": " + (parseInt(sessionStorage.getItem("sessionCounter")) + 1)
          sessionStorage.setItem("sessionCounter",parseInt(sessionStorage.getItem("sessionCounter")) + 1);
        }
else{
  localS.innerHTML = ": " + 1;
  sessionStorage.setItem("sessionCounter", 1);
}
      
      }