button = document.querySelector(".submit");
let header = document.querySelector(".header")


/// Add more user, to your Data 
const users = [
    {
        "id" : 1,
        "name" : "Karim Salimov",
        "job" : "Programist",
        "birthDate" : "2001-01-01",
        "address" : "Kulob",
    },
    {
        "id" : 2,
        "name" : "Karim Halimov",
        "job" : "Programist",
        "birthDate" : "2021-03-20",
        "address" : "Hujand",
    },
    {
        "id" : 3,
        "name" : "Muso Halimov",
        "job" : "Duhtur",
        "birthDate" : "2020-02-20",
        "address" : "Dushanbe",
    }
    
]

button.addEventListener("click", function(){

let user = {
     "id" : document.querySelector("#id").value,
    "name" : document.querySelector("#name").value,
    "job" : document.querySelector("#job").value,
    "birthDate" : document.querySelector("#date").value,
    "address" : document.querySelector("#address").value,
}

if(isValidInput(user) &&  existUser(user)){
    header.innerHTML = "Pasport Validation Controller<br><br>Succefully entered"
}else {
    header.innerHTML = "Pasport Validation Controller<br><br> Problem with User Autantication"

}
function isValidInput(user){
    if(user.id !== "" && user.name !=="" && user.job !== "" && user.birthDate !== "" && user.address !== ""  ){
     return true
    }else{
        return false
    }
}
  function existUser(client){
      for(let item of users){
          if(
              client.id == item.id &&
              client.name == item.name &&
              client.job == item.job &&
              client.birthDate == item.birthDate &&
              client.address == item.address
          ){ return true}
         else {
              return false
          }
      }
  }
    
})
    

   