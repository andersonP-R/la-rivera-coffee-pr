const users = JSON.parse(localStorage.getItem('users'));

const nameUser = document.querySelector("#name");
const namePass = document.querySelector("#pass");
const form = document.querySelector("#form");

form.addEventListener('submit', e => {
    e.preventDefault()

    for (let user of users) {
        
        if (nameUser.value === user.userName && namePass.value === user.userPass) {
            alert("welcome");
            location.href = "/LaRivera/index.html"   
        }
    }

    

})