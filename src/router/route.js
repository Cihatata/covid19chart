import Home from '../components/Home'
import Turkiye from '../components/Turkiye'
import ulkeBilgi from "../components/countryInfo";
import dunya from "../components/dunya";

export default ({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/turkiye',
      name: 'Turkiye',
      component: Turkiye
    },
    {
      path: '/ulkeler',
      name: 'Dunya',
      component: dunya,
    },
    {
      path:'/ulkeler/:ulke',
      name:ulkeBilgi,
      component:ulkeBilgi
    }

  ],
  mode: 'history',
});
