import Home from '@/views/Home.vue'
import OurServices from '@/views/OurServices.vue'
import KnowUs from '@/views/KnowUs.vue'
import ContactUs from '@/views/ContactUs.vue'
import Surveillance from '@/components/our-services-component/Surveillance.vue'
import AccessControl from '@/components/our-services-component/AccessControl.vue'
import HomeAutomation from '@/components/our-services-component/home_automation.vue'
import InternetConfiguration from '@/components/our-services-component/internet_configuration.vue'
import FireFighting from '@/components/our-services-component/FireFighting.vue'
import BMS from '@/components/our-services-component/BMS.vue'
import GuestRoom from '@/components/our-services-component/GuestRoom.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/our_services',
    name: 'ourServices',
    component: OurServices,
    children: [
      {
        path: '/surveillance',
        name: 'surveillance',
        component: Surveillance
      },
      {
        path: '/AccessControl',
        name: 'accessControl',
        component: AccessControl
      },
      {
        path: '/home_automation',
        name: 'homeAutomation',
        component: HomeAutomation
      },
      {
        path: '/internet_configuration',
        name: 'internetConfiguration',
        component: InternetConfiguration
      },
      {
        path: '/fireFighting',
        name: 'fireFighting',
        component: FireFighting
      },
      {
        path: '/bms',
        name: 'bms',
        component: BMS
      },
      {
        path: '/guestRoom',
        name: 'guestRoom',
        component: GuestRoom
      }
    ]
  },
  {
    path: '/KnowUs',
    name: 'knowUs',
    component: KnowUs
  },
  {
    path: '/ContactUs',
    name: 'contactUs',
    component: ContactUs
  }
]
