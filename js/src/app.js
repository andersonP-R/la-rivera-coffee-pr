import navBar from "./modules/navBar.js";
import SaveUsers from "./modules/Sign-up/saveUsers.js";

export default class App {
    constructor(){
        this.save = new SaveUsers();
    }

    load(){
        // fx navbar & new footer
        navBar();
        
    }
}