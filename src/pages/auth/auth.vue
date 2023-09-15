<template>
    <div class="c-auth">
        <div class="auth__container">
            <div class="auth__content">
                <div class="auth__logo">
                    <icon name="logo" />
                </div>
                <div class="auth__desc">
                    More than just one repository.<br />
                    This is our digital world.
                </div>
                <div class="auth__button">
                    <xbutton @click="getAuth">
                        <span>Authorize with github</span>
                        <span class="icon__logo">
                            <icon name="github" />
                        </span>
                    </xbutton>
                </div>
            </div>
            <div class="auth__img">
                <icon name="laptop" />
            </div>
        </div>
    </div>
</template>

<script>
import { icon } from '../../icons'
import { button as xbutton } from '../../components/button'
import axios from 'axios'
import env from '../../../env'
export default {
  name: 'auth',
  components: {
    icon,
    xbutton
  },
  methods: {
    async getAuth () {
      const apiUrl = 'https://github.com/login/oauth/authorize'
      const params = new URLSearchParams()
      params.append('client_id', env.clientId)
      params.append('scope', 'repo:status read:user')

      window.location.href = `${apiUrl}?${params}`
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      try {
        const response = await axios.post(
          'https://webdev-api.loftschool.com/github',
          { clientId: env.clientId, clientSecret: env.clientSecret, code }
        )
        const token = response.data.token
        localStorage.setItem('token', token)
        this.$router.replace({ path: '/' })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
<style lang="scss" src="./auth.scss" scoped></style>
