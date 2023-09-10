import axios from 'axios'

export default {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.data = payload
    },
    SET_FOLLOWING: (state, payload) => {
      state.data = payload
    }
  },
  actions: {
    async getUser ({ commit }) {
      const token = localStorage.getItem('token')
      try {
        const { data } = await axios.get(
          'https://api.github.com/user',
          {
            headers: {
              Authorization: `token ${token}`
            }
          }
        )
        commit('SET_USER', data)
        this.$router.replace({ path: '/' })
        console.log(data)
      } catch (e) {
        console.log(e)
        this.$router.replace({ path: '/auth' })
        throw e
      }
    },
    async getUserFollowing ({ commit }) {
      const token = localStorage.getItem('token')
      try {
        const { data } = await axios.get(
          'https://api.github.com/user/following',
          {
            headers: {
              Authorization: `token ${token}`
            }
          }
        )
        commit('SET_FOLLOWING', data)
        // this.$router.replace({ path: '/' })
        console.log(data)
      } catch (e) {
        console.log(e)
        // this.$router.replace({ path: '/auth' })
        throw e
      }
    }
  }
}
