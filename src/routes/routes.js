import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
// import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import Cards from 'src/components/Dashboard/Views/Cards.vue'
// import Typography from 'src/components/Dashboard/Views/Typography.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
// import Maps from 'src/components/Dashboard/Views/Maps.vue'
// import Notifications from 'src/components/Dashboard/Views/Notifications.vue'
import Learn from 'src/components/Dashboard/Views/Learn.vue'
import Roadtrip from 'src/components/Dashboard/Views/Roadtrip.vue'
import Test from 'src/components/Dashboard/Views/Test.vue'
import Story from 'src/components/Dashboard/Views/Story.vue'
import Entries from 'src/components/Dashboard/Views/Entries.vue'
import Leaderboard from 'src/components/Dashboard/Views/Leaderboard.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'cards',
        name: 'Cards',
        component: Cards
      },
      {
        path: 'learn',
        name: 'Learn',
        component: Learn
      },
      {
        path: 'roadtrip',
        name: 'Roadtrip',
        component: Roadtrip
      },
      {
        path: 'test',
        name: 'Test',
        component: Test
      },
      {
        path: 'story',
        name: 'Story',
        component: Story
      },
      {
        path: 'entries',
        name: 'Entries',
        component: Entries
      },
      {
        path: 'leaderboard',
        name: 'Leaderboard',
        component: Leaderboard
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },

      // unused
      // {
      //   path: 'notifications',
      //   name: 'Notifications',
      //   component: Notifications
      // }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
