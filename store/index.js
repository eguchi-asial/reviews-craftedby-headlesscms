export const state = () => ({
  title: ''
})

export const getters = {
  currentTitle(state) {
    return state.title
  }
}

export const mutations = {
  CHANGE_TITLE(state, title) {
    state.title = title
  }
}
