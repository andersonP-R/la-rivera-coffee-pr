import SaveUsers from "./saveUsers.js";

export default class SaveApp {
    constructor(){
        this.add = new SaveUsers();
    }

    load (){
        this.add.saveUser();
        
    }
}