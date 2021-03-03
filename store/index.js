export const state = () => ({
  title: 'YUCHON REVIEW'
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
