export const state = () => ({
  user: {},
  authenticated: false
})
export const mutations = {
  login(state, user) {
    state.user = user
    state.authenticated = true
  },
  logOut(state) {
    state.user = {}
    state.authenticated = false
  }
}
