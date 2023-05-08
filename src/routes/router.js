import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import Home from "../views/Home/Home.vue";
import Checkout from "../views/Checkout/Checkout.vue";
import Products from "../views/Products/Products.vue";
import Camisetas from "../views/Camisetas/Camisetas.vue";
import Moletons from "../views/Moletons/Moletons.vue";
import Shorts from "../views/Shorts/Shorts.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: () => {
      return { path: "/produtos" };
    },
  },
  {
    path: "/produtos",
    name: "Products",
    component: Products,
    children: [
      { path: "camisetas", component: Camisetas },
      { path: "moletons", component: Moletons },
      { path: "shorts", component: Shorts },
    ],
  },

  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
