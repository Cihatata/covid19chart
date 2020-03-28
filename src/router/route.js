import Home from '../components/Home'
import Turkiye from '../components/Turkiye'
import kiyasla from "../components/kiyasla";
import ulkeler from "../components/countryInfo";

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
      path: '/kiyasla',
      name: 'Kiyasla',
      component: kiyasla,
    },
    {
      path:'/ulkeler/:ulke',
      name:ulkeler,
      component:ulkeler
    }

  ],
  mode: 'history',
});
