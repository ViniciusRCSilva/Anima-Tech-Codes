import serviceApi from '../../service/episodio'

export default {
    namespaced: true,
    state: {
        episodios:[],
        pageIndex: 1
    },
    mutations: {
        SET_EPISODIOS(state, payload){
            state.episodios = payload
        },
        SET_EPISODIOS_PAGINADOS(state, payload){
            state.episodios = payload
        },
        SET_PAGE_INDEX(state, page){
            state.pageIndex += page
        },
        REMOVE_PAGE_INDEX(state, page){
            state.pageIndex -= page
        }
    },
    actions: {
        getEpisodios(context){
            return serviceApi.getEpisodios().then(res => {
                context.commit('SET_EPISODIOS', res.data.results)
            })
        },
        getEpisodioByPage(context, params){
            return serviceApi.getEpisodioByPage(params.id).then(res => {
                context.commit('SET_EPISODIOS_PAGINADOS', res.data.results)
            })
        }
    },
    getters: {
        listEpisodios(state){
            return state.episodios
        },
        getPageIndex(state){
            return state.pageIndex
        }
    },
    modules: {
    }
}