import { stories } from '../pages/stories'
import { feeds } from '../pages/feeds'
import { auth } from '../pages/auth'
import { repos } from '../pages/repos'
import { following } from '@/pages/following'

export default [
  {
    path: '/auth',
    component: auth,
    name: 'auth'
  },
  {
    path: '/',
    component: feeds,
    name: 'feeds'
  },
  {
    path: '/stories/:id',
    component: stories,
    name: 'stories'
  },
  {
    path: '/repos',
    component: repos,
    name: 'repos'
  },
  {
    path: '/following',
    component: following,
    name: 'following'
  }
]
