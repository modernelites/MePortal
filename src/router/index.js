import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
// import axios from 'axios';
import about from '@/components/about/about';
import about0 from '@/components/about/about0';
import about1 from '@/components/about/about1';
import about2 from '@/components/about/about2';
import about20 from '@/components/about/about20';
import about21 from '@/components/about/about21';
import about22 from '@/components/about/about22';
import contact from '@/components/contact/contact';
import contact1 from '@/components/contact/contact1';
import contact2 from '@/components/contact/contact2';
import contact3 from '@/components/contact/contact3';
import contact4 from '@/components/contact/contact4';
import error from '@/components/error/error';
import footer from '@/components/footer/footer';
import header from '@/components/header/header';
import home from '@/components/home/home';
import load from '@/components/load/load';
import login from '@/components/login/login';
import login1 from '@/components/login/login1';
import login2 from '@/components/login/login2';
import login3 from '@/components/login/login3';
import modificationData from '@/components/modification_data/modification_data';
import modificationData1 from '@/components/modification_data/modification_data1';
import modificationData2 from '@/components/modification_data/modification_data2';
import modificationData3 from '@/components/modification_data/modification_data3';
import personalCenter from '@/components/personal_center/personal_center';
import personalCenter1 from '@/components/personal_center/personal_center1';
import personalCenter2 from '@/components/personal_center/personal_center2';
import personalCenter3 from '@/components/personal_center/personal_center3';
import personalCenter4 from '@/components/personal_center/personal_center4';
import personalCenter5 from '@/components/personal_center/personal_center5';
import register from '@/components/register/register';
import register1 from '@/components/register/register1';
import register2 from '@/components/register/register2';
import register3 from '@/components/register/register3';
import register4 from '@/components/register/register4';
import register5 from '@/components/register/register5';
import register6 from '@/components/register/register6';
import org from '@/components/org/org';
import trainingCamp from '@/components/training_camp/training_camp';
import portrait from '@/components/portrait/portrait';
import region from '@/components/region/region';

Vue.use(Router);
Vue.use(VueResource);
// Vue.use(axios);

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home
  },
    {
      path: '/index',
      name: 'home',
      component: home
    },
    {
      path: '/index,:id',
      name: 'home',
      component: home
    }, {
      path: '/header',
      name: 'header',
      component: header
    }, {
      path: '/login/',
      component: login,
      children: [{
        path: 'login1',
        component: login1
      }, {
        path: 'login2',
        component: login2
      }, {
        path: 'login3',
        component: login3
      }]
    }, {
      path: '/about/',
      redirect: '/about/about0',
      component: about,
      children: [{
        path: 'about0',
        component: about0
      },
        {
          path: 'about1',
          component: about1
        }, {
          path: 'about2',
          component: about2,
          redirect: 'about2/about20',
          children: [{
            path: 'about20',
            component: about20
          },
            {
              path: 'about21',
              component: about21
            }, {
              path: 'about22',
              component: about22
            }]
        }
      ]
    }, {
      path: '/contact/',
      component: contact,
      children: [{
        path: 'contact1',
        component: contact1
      }, {
        path: 'contact2',
        component: contact2
      }, {
        path: 'contact3',
        component: contact3
      }, {
        path: 'contact4',
        component: contact4
      }]
    }, {
      path: '/error',
      name: 'error',
      component: error
    }, {
      path: '/load',
      name: 'load',
      component: load
    }, {
      path: '/footer',
      name: 'footer',
      component: footer
    }, {
      path: '/modification_data/',
      name: 'modificationData',
      component: modificationData,
      children: [{
        path: 'modification_data1',
        component: modificationData1
      }, {
        path: 'modification_data2',
        component: modificationData2
      }, {
        path: 'modification_data3',
        component: modificationData3
      }]
    }, {
      path: '/personal_center/',
      name: 'personalCenter',
      component: personalCenter,
      children: [{
        path: 'personal_center1',
        component: personalCenter1
      }, {
        path: 'personal_center2',
        component: personalCenter2
      }, {
        path: 'personal_center3',
        component: personalCenter3
      }, {
        path: 'personal_center4',
        component: personalCenter4
      }, {
        path: 'personal_center5',
        component: personalCenter5
      }]
    }, {
      path: '/register/',
      name: 'register',
      component: register,
      children: [{
        path: 'register1/:id',
        name: 'register1',
        component: register1
      }, {
        path: 'register2/:id',
        name: 'register2',
        component: register2
      }, {
        path: 'register3/:id',
        name: 'register3',
        component: register3
      }, {
        path: 'register4/:id',
        name: 'register4',
        component: register4
      }, {
        path: 'register5/:id',
        name: 'register5',
        component: register5
      }, {
        path: 'register6/:id',
        name: 'register6',
        component: register6
      }]
    }, {
      path: '/org/:id',
      name: 'org',
      component: org
    }, {
      path: '/org',
      redirect: '/org/0',
      name: 'org',
      component: org
    },
    {
      path: '/training_camp/:ctid/:cid',
      name: 'trainingCamp',
      component: trainingCamp
    }, {
      path: '/portrait',
      name: 'portrait',
      component: portrait
    }, {
      path: '/region',
      name: 'region',
      component: region
    }
  ]
});
