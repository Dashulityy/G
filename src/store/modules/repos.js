import axios from 'axios'

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_REPOS: (state, payload) => {
      state.data = payload
    }
  },
  actions: {
    async fetchRepos ({ commit }) {
      const token = localStorage.getItem('token')
      try {
        const { data } = await axios.get(
          'https://api.github.com/user/repos',
          {
            headers: {
              Authorization: `token ${token}`
            }
          }
        )
        commit('SET_REPOS', data)
      } catch (e) {
        console.log(e)
        throw e
      }
    }
  }
}
