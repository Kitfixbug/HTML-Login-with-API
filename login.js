function checkToken() {
   const token = localStorage.py_token
   if(!token)
   {
      console.warn("no token")
   }else{
     window.location.href = "index.html"
   }
}
checkToken()
function register() {
  alert("The membership system is not yet available.")
}
async function login() {
   try{
     const email = document.getElementById("email").value;
      const pass = document.getElementById("pass").value;
      
      const api = "https://www.melivecode.com/api/login"
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
           username: email,
           password: pass,
           expiresIn: 600000
        })
      }
      const request = await fetch(api, options)
      const results = await request.json();
      
      if(results.status === "ok")
      {
         Swal.fire({
           icon: "success",
           title: `status ${results.status}`,
           text: results.message
         }).then((result)=>{
            if(result.isConfirmed){
              localStorage.setItem("py_token", results.accessToken)
              window.location.href = "index.html"
            }
         })
      }else{
         Swal.fire({
           icon: "error",
           title: results.status,
           text: results.message
         })
      }
      
   } catch (e) {
      alert("error "+e.message)
   }
}