export const state = () => ({
  routeCounter: 0
})

export const mutations = {
  plusOne (state) {
    state.routeCounter = state.routeCounter + 1
  }
}
