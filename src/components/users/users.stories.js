import users from './users.vue'

export default {
  title: "users",
  component: {
    users
  },
  argTypes: {
    user__login: {
      control: 'text'
    }
  }
}

const template = (args) =>({
  components: {
    xUsers: users
  },
  data () {
    return { args }
  },
  template: `<x-users :login="args.user__login"></x-users>`
})

export const Default = template.bind(template);

Default.args = {
  user__login: 'user__login'
}