import Home from '../components/Home'
import Turkiye from '../components/Turkiye'
import confirmedChart from "../components/confirmedChart";

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
    },
    {
      path: '/chart',
      name: 'Turkey',
      component: confirmedChart
    }

  ],
  mode: 'history',
});
