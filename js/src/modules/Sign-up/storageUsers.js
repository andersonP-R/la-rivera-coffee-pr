export default class StorageUsers {
    constructor (){
        this.userId = 1;
    }

    save(data){
        localStorage.setItem('users', JSON.stringify(data));
    }

    getData(){
        let users = JSON.parse(localStorage.getItem('users'));

        if (!users || users.length < 1){

            users = [
                {
                    userId: 0,
                    userName: 'default name',
                    userEmail: 'default email',
                    userPass: 'default pass'
                }
            ];

            this.userId = 1;

        } else {
            this.userId = users[users.length - 1].userId + 1;
        }

        return users;

    }

    getLastId(){
        return this.userId;
    }
}

