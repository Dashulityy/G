import { createStore } from 'vuex'
import trendings from './modules/trendings'
import starred from './modules/starred'
import user from './modules/user'
import repos from './modules/repos'
import followings from './modules/followings'

export default createStore({
  modules: {
    trendings,
    starred,
    user,
    repos,
    followings
  }
})
