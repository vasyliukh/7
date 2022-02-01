import VueRouter from 'vue-router'
import register_form from "@/components/register_form";
import App from "@/App";
export default new VueRouter(
    {
        routes:[
            {
                path:'',
                component:App
            }
        ],
        mode:'history'

    }
)