import { createRouter, createWebHistory } from "vue-router";
import Timetable from "../pages/Timetable.vue"

const routes = [
  {
  path:"/",
  component: Timetable
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
