const TVPLayout = () => import("@/layouts/Layout.vue");
const Resume = () => import("@/pages/Resume.vue");
const NotFound = () => import("@/pages/NotFound.vue");
const TVPPlanets = () => import("@/pages/TVPPlanets.vue");
const OutpostProposal = () => import("@/pages/OutpostProposal.vue");
const Playground = () => import("@/pages/Playground.vue");
export const routes = [
  {
    path: "/",
    component: TVPLayout,
    children: [
      {
        path: "",
        name: "Resume",
        component: Resume,
      },
      {
        path: "planets",
        name: "TVPPlanets",
        component: TVPPlanets,
      },
      {
        path: "outpostproposal",
        name: "OutpostProposal",
        component: OutpostProposal,
      },
      {
        path: "playground",
        name: "Playground",
        component: Playground,
      },
      // Open Source Demo Elements
      // All open source elements are now accessed via Playground with ?element=ElementName
    ],
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];
