export const state = () => ({
  user: {},
  authenticated: false,
  message: ''
})
export const mutations = {
  login(state, user) {
    state.user = user
    state.authenticated = true
    state.message = ''
  },
  logOut(state) {
    state.user = {}
    state.authenticated = false
  },
  signUp(state, user) {
    state.user = user
    state.message = 'Your registration was successful your username is'
  }
}
