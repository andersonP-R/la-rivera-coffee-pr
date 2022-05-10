import StorageUsers from "./storageUsers.js";

export default class SaveUsers {
    constructor() {

        this.StorageUsers = new StorageUsers();

        this.user_name = document.getElementById("name");
        this.user_email = document.getElementById("email");
        this.user_pass = document.getElementById("pass");

        this.form = document.getElementById("form");
        this.paragraph = document.getElementById("warnings");

    }

    saveUser() {
        this.form.addEventListener('submit', e => {
            e.preventDefault();

            let users = this.StorageUsers.getData();
            let lastId = this.StorageUsers.getLastId();

            let userName = this.user_name.value;
            let userEmail = this.user_email.value;
            let userPass = this.user_pass.value;

            this.paragraph.innerHTML = "";

            // form validate
            let warnings = "";
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            let enter = false;

            if (userName.length < 5) {
                warnings += `Invalid name* <br>`;
                enter = true;
            }

            if (!regexEmail.test(userEmail)) {
                warnings += `Invalid email* <br>`;
                enter = true;
            }

            if (userPass.length < 8) {
                warnings += `Short password* <br>`;
                enter = true;
            }

            if (enter) {
                this.paragraph.innerHTML = warnings;
            } else {
                let user = {
                    userId: lastId++,
                    userName,
                    userEmail,
                    userPass
                }

                users.push(user);

                // save users to localstorage
                this.StorageUsers.save(users);

                this.cleanFields();

                alert("Successful registration");

                location.href = "/LaRivera/index.html"

            }

            return false;
        });
    }

    cleanFields() {
        this.user_name.value = "";
        this.user_email.value = "";
        this.user_pass.value = "";
    }

}