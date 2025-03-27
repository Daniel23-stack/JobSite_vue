import { createRouter, createMemoryHistory, createWebHashHistory } from 'vue-router'
 import HomeView from '@/views/HomeView.vue'
import JobResultsView from '@/views/JobResultsView.vue'
import JobsView from '@/views/JobsView.vue'


const routes = [
  {
    path:"/",
    name:"Home",
    component : HomeView,
  },
  {
    path:"/jobs/results",
    name:"JobResults",
    component : JobResultsView,
  },
  {
    path:"/jobs/results/:id",
    name:"JobListing",
    component : JobsView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router