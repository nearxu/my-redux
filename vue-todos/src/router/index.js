import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'

import Increase from "@/components/increase";
import Todo from "@/components/todo";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/increase",
      name: "Increase",
      component: Increase
    },
    {
      path: "/",
      name: "Todo",
      component: Todo
    }
  ]
});
