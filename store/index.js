export const state = () => ({
    loadedPosts: 'pourya'
})

export const mutations = {
    setPosts(state, posts) {
        state.loadedPosts = posts
    }
}

export const actions = {
    setPosts({ commit }) {
        this.$axios.$get('https://first-nuxt-project-a269a-default-rtdb.firebaseio.com/posts.json')
            .then((res) => {
                const postArr = []
                for (const key in res) {
                    postArr.push({ ...res[key], id: key })
                }
                commit('setPosts', postArr)
            })
            .catch((e) => {
                console.log(e)
            })
    }
}

export const getters = {
    loadedPosts(state) {
        return state.loadedPosts
    }
}