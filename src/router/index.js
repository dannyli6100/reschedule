import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import SchedulePage from "../components/SchedulePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: App,
    },
    {
      path: "/schedule",
      name: "schedule",
      component: SchedulePage,
      props: true,
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/
  ],
});

router.push({
  name: "schedule",
  params: {
    scribeList: {
      name: "name",
      hoursPerWeek: "hoursPerWeek",
      availability: [
        { avail: "Monday" },
        { avail: "Tuesday" },
        { avail: "Wednesday" },
        { avail: "Thursday" },
        { avail: "Friday" },
      ],
      id: "id",
    },
    providerList: {
      name: "name",
      mondayHours: "mondayHours",
      tuesdayHours: "tuesdayHours",
      wednesdayHours: "wednesdayHours",
      thursdayHours: "thursdayHours",
      fridayHours: "fridayHours",
      id: "id",
    },
  },
});

export default router;
