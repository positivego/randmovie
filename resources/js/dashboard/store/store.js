import { createStore } from "vuex";
import { menuModule } from "./menu-module";

export default createStore ({

    modules: {
        menu: menuModule
    }
    
})