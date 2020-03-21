import Home from '../components/Home'
import Turkiye from '../components/Turkiye'

export default ({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/turkey',
      name: 'Turkey',
      component: Turkiye
    }

  ],
  mode: 'history',
});
