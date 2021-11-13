export const authModule = {
    state: () => ({
      authorization: false,
      authed: false,
      token: ""
    }),
    mutations: {
      editAuthorization(state, edit) {
          state.authorization = edit;
      },
      editAuthed(state, edit){
          state.authed = edit;
      },
      tokenIn(state, token){
          state.token = token;
      }
    },
    namespaced: true
}