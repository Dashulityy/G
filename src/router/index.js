import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import axios from 'axios'

export const router = createRouter({
  routes,
  history: createWebHashHistory()
})
router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth'
  if (authRoute) {
    next()
    return
  }
  const token = localStorage.getItem('token')
  if (!token) {
    next({ name: 'auth' })
    return
  }
  try {
    const { data } = await axios.get(
      'https://api.github.com/user',
      {
        headers: {
          Authorization: `token ${token}`
        }
      }
    )
    if (data.status === 401) {
      next({ name: 'auth' })
      console.log('Error 401')
    }
    next()
  } catch (e) {
    next({ name: 'auth' })
  }
})
