const TVPLayout = () => import("@/layouts/Layout.vue");
const Home = () => import("@/pages/Home.vue");
const About = () => import("@/pages/About.vue");
const NotFound = () => import("@/pages/NotFound.vue");
const Contact = () => import("@/pages/Contact.vue");
const Partnerships = () => import("@/pages/Partnerships.vue");
const TVPCenterResource = () => import("@/pages/TVPCenterResource.vue");
const TVPResourcesPage = () => import("@/pages/TVPResourcesPage.vue");
const TVPFeaturingActivist = () => import("@/pages/TVPFeaturingActivist.vue");
const TVPRelocationProposal = () => import("@/pages/TVPRelocationProposal.vue");
const TVPAdvisors = () => import("@/pages/TVPAdvisors.vue");
const TVPVisit = () => import("@/pages/TVPVisit.vue");
const TVPHistory = () => import("@/pages/TVPHistory.vue");
const TVPProjects = () => import("@/pages/TVPProjects.vue");
const TVPTimeline = () => import("@/pages/TVPTimeline.vue");
const TVPAsiProject = () => import("@/pages/TVPAsiProject.vue");  
const Resume = () => import("@/pages/Resume.vue");  
const Mission = () => import("@/pages/Mission.vue");
const Solutions = () => import("@/pages/Solutions.vue");
const FAQ = () => import("@/pages/FAQ.vue");
const Media = () => import("@/pages/Media.vue");
const Tokenomics = () => import("@/pages/Tokenomics.vue");
const OutpostProposal = () => import("@/pages/OutpostProposal.vue");

export const routes = [
  {
    path: "/",
    component: TVPLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "outpostproposal",
        name: "OutpostProposal",
        component: OutpostProposal,
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
      {
        path: "resources",
        name: "TVPCenterResource",
        component: TVPCenterResource,
      },
      {
        path: "projects",
        name: "TVPProjects",
        component: TVPProjects,
      },
      {
        path: "timeline",
        name: "TVPTimeline",
        component: TVPTimeline,
      },
      {
        path: "asi-proposal",
        name: "TVPAsiProject",
        component: TVPAsiProject,
      },
      {
        path: "visit",
        name: "TVPVisit",
        component: TVPVisit,
      },
      {
        path: "history",
        name: "TVPHistory",
        component: TVPHistory,
      },
      {
        path: "relocation-proposal",
        name: "TVPRelocationProposal",
        component: TVPRelocationProposal,
      },
      {
        path: "advisors",
        name: "TVPAdvisors",
        component: TVPAdvisors,
      },
      {
        path: "featuring-activist",
        name: "TVPFeaturingActivist",
        component: TVPFeaturingActivist,
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact,
      },
      {
        path: "partnerships",
        name: "Partnerships",
        component: Partnerships,
      },
      {
        path: 'resume',
        name: 'Resume',
        component: Resume
      },
      {
        path: "planets",
        name: "PTVPPlanets",
        component: () => import("@/pages/TVPPlanets.vue"),
      },
      {
        path: "resources-page",
        name: "TVPResourcesPage",
        component: TVPResourcesPage,
      },
      {
        path: "mission",
        name: "Mission",
        component: Mission,
      },
      {
        path: "solutions",
        name: "Solutions",
        component: Solutions,
      },
      {
        path: "faq",
        name: "FAQ",
        component: FAQ,
      },
      {
        path: "media",
        name: "Media",
        component: Media,
      },
      {
        path: "tokenomics",
        name: "Tokenomics",
        component: Tokenomics,
      },
    ],
  },
  {
    path: '/partnership',
    redirect: '/partnerships',
  },
  {
    path: '/relocation-proposal',
    redirect: '/partnerships',
  },
  {
    path: '/proposals',
    redirect: '/partnerships',
  },
  {
    path: '/OutpostProposal',
    redirect: '/partnerships',
  },
  {
    path: '/TVPRelocationProposal',
    redirect: '/partnerships',
  },
  {
    path: '/Partnership.vue',
    redirect: '/partnerships',
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];
