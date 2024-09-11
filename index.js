function CheckToken() {
   const token = localStorage.py_token
   if(!token){
     window.location.href = "login.html"
   }
}
CheckToken()
function logout() {
  localStorage.removeItem("py_token")
  window.location.href = "login.html"
}
async function UserDatail() {
   try{
      const token = localStorage.py_token
      const api = "https://www.melivecode.com/api/auth/user"
      const options = {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
      const request = await fetch(api, options)
      const results = await request.json()
      
      document.getElementById("name").textContent = results.user.fname;
      
      document.getElementById("fullname").textContent = results.user.username;
      
      document.getElementById("profile").src = results.user.avatar;
     
   } catch (e) {
      console.error(e.message)
   }
}
UserDatail()