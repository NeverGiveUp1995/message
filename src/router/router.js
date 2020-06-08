/**
 * @description :页面路由
 * @author：涂玉
 * @email :18827511277@163.com
 * @creatTime : 2020/6/8
 */
import VueRouter from 'vue-router'
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import NotFound from "../pages/NotFound";

export default new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({y: 0}),//切换路由时，滚动条回到顶部
    routes: [
        {path: '/', component: Login},
        {path: '/home', component: Home},
        {path: '*', component: NotFound}//配置404页面
    ]
})
