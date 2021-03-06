import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Flexbox from '@/components/Flexbox'
import Button from '@/components/Button'
import Banner from '@/components/Banner'
import VueCss from '@/components/VueCss'
import Transform from '@/components/Transform'
import AnimatedIcon from '@/components/AnimatedIcon'
import BorderEfect from '@/components/BorderEfect'
import Fixed from '@/components/Fixed'
import Input from '@/components/Input'
import BorderEfect2 from '@/components/BorderEfect2'
import CheckBox from '@/components/CheckBox'
import Bordershapes from '@/components/Bordershapes'
import Select from '@/components/Select'
import Radio from '@/components/Radio'
import Checkbox2 from '@/components/Checkbox2'
import Switches from '@/components/Switches'
import WavesEffect from '@/components/WavesEffect'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/flexbox',
      name: 'Flexbox',
      component: Flexbox
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/banner',
      name: 'Banner',
      component: Banner
    },
    {
      path: '/vuecss',
      name: 'VueCss',
      component: VueCss
    },
    {
      path: '/transform',
      name: 'Transform',
      component: Transform
    },
    {
      path: '/animatedicon',
      name: 'AnimatedIcon',
      component: AnimatedIcon
    },
    {
      path: '/borderefect',
      name: 'BorderEfect',
      component: BorderEfect
    },
    {
      path: '/fixed',
      name: 'Fixed',
      component: Fixed
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    },
    {
      path: '/borderefect2',
      name: 'BorderEfect2',
      component: BorderEfect2
    },
    {
      path: '/checkbox',
      name: 'CheckBox',
      component: CheckBox
    },
    {
      path: '/bordershapes',
      name: 'Bordershapes',
      component: Bordershapes
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/checkbox2',
      name: 'Checkbox2',
      component: Checkbox2
    },
    {
      path: '/switches',
      name: 'Switches',
      component: Switches
    },
    {
      path: '/wavesEffect',
      name: 'WavesEffect',
      component: WavesEffect
    }
  ]
})
