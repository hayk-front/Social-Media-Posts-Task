import Vue from "vue";
import Router from "vue-router";
import Posts from "./components/Post";
import Comments from "./components/Comments";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost";
import Details from "./components/Details";


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "posts",
            component: Posts
        },
        {
            path: "/comments",
            name: "comments",
            component: Comments,
        },
        {
            path: "/create",
            name: "create",
            component: CreatePost,
        },
        {
            path: "/details",
            name: "details",
            component: Details,
        },
        {
            path: "/update",
            name: "update",
            component: UpdatePost,
        },


    ]
})