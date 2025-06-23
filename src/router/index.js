import { createRouter, createWebHistory } from 'vue-router'
// Unified import: all page components
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'
import Resume from '@/pages/Resume.vue'
import TVPCenterResource from '@/pages/TVPCenterResource.vue'
import TVPFeaturingActivist from '@/pages/TVPFeaturingActivist.vue'
import TVPRelocationProposal from '@/pages/TVPRelocationProposal.vue'
import TVPAdvisors from '@/pages/TVPAdvisors.vue'
import TVPHistory from '@/pages/TVPHistory.vue'
import TVPVisit from '@/pages/TVPVisit.vue'
import TVPAsiProject from '@/pages/TVPAsiProject.vue'
import TVPProjects from '@/pages/TVPProjects.vue'
import TVPTimeline from '@/pages/TVPTimeline.vue'
import Partnership from '@/pages/Partnership.vue'
import NotFound from '@/pages/NotFound.vue'
import Mission from '@/pages/Mission.vue'
import Solutions from '@/pages/Solutions.vue'
import FAQ from '@/pages/FAQ.vue'
import Media from '@/pages/Media.vue'
import Tokenomics from '@/pages/Tokenomics.vue'
import OutpostProposal from "@/pages/OutpostProposal.vue";

// Unified layout for all main routes
import TVPLayout from '@/layouts/Layout.vue'

const routes = [
  {
    path: '/',
    component: TVPLayout,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'about', name: 'About', component: About },
      { path: 'resume', name: 'Resume', component: Resume },
      { path: 'resources', name: 'TVPCenterResource', component: TVPCenterResource },
      { path: 'center-resource', name: 'TVPCenterResourceAlt', component: TVPCenterResource },
      { path: 'projects', name: 'TVPProjects', component: TVPProjects },
      { path: 'history', name: 'TVPHistory', component: TVPHistory },
      { path: 'timeline', name: 'TVPTimeline', component: TVPTimeline },
      { path: 'visit', name: 'TVPVisit', component: TVPVisit },
      { path: 'featuring-activist', name: 'TVPFeaturingActivist', component: TVPFeaturingActivist },
      { path: 'relocation-proposal', name: 'TVPRelocationProposal', component: TVPRelocationProposal },
      { path: 'outpostproposal', name: 'OutpostProposal', component:      OutpostProposal },
      { path: 'advisors', name: 'TVPAdvisors', component: TVPAdvisors },
      { path: 'asi-proposal', name: 'TVPAsiProject', component: TVPAsiProject },
      { path: 'contact', name: 'Contact', component: Contact },
      { path: 'partnership', name: 'Partnership', component: Partnership },
      { path: 'mission', name: 'Mission', component: Mission },
      { path: 'solutions', name: 'Solutions', component: Solutions },
      { path: 'tokenomics', name: 'Tokenomics', component: Tokenomics },
      { path: 'faq', name: 'FAQ', component: FAQ },
      { path: 'media', name: 'Media', component: Media },
    ]
  },
  // Catch-all for 404
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Navigation guard to handle route changes
router.beforeEach((to, from, next) => {
  // Add any authentication or route protection logic here
  next()
})

export default router