export const menuModule = {

    state: () => ({
        activelink: null,
        activeLists: [],
    }),

    getters: {

    },

    mutations: {

        setActiveLink(state, linkName)
        {
            return state.activelink = linkName
        },

        setList(state, listName)
        {
            return state.activeLists.push(listName)
        },

        removeList(state, listName)
        {
            return state.activeLists.splice(state.activeLists.indexOf(listName), 1)
        },

    },

    actions: {

        changeActiveLink({state, commit}, linkName)
        {
            if(state.activelink != linkName) return commit('setActiveLink', linkName)
        },

        openOrCloseList({state, commit}, listName)
        {
            if(!state.activeLists.find(el => el === listName)) {

                return commit('setList', listName);

            } else {

                return commit('removeList', listName);

            }
        },

    },

    namespaced: true

}