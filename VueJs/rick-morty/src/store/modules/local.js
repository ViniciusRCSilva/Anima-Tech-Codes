import serviceApi from '../../service/local'

export default {
    namespaced: true,
    state: {
        locais:[],
        pageIndex: 1
    },
    mutations: {
        SET_LOCAIS(state, payload){
            state.locais = payload
        },
        SET_LOCAIS_PAGINADOS(state, payload){
            state.locais = payload
        },
        SET_PAGE_INDEX(state, page){
            state.pageIndex += page
        },
        REMOVE_PAGE_INDEX(state, page){
            state.pageIndex -= page
        }
    },
    actions: {
        getLocais(context){
            return serviceApi.getLocais().then(res => {
                context.commit('SET_LOCAIS', res.data.results)
            })
        },
        getLocalByPage(context, params){
            return serviceApi.getLocalByPage(params.id).then(res => {
                context.commit('SET_LOCAIS_PAGINADOS', res.data.results)
            })
        }
    },
    getters: {
        listLocais(state){
            return state.locais
        },
        getPageIndex(state){
            return state.pageIndex
        }
    },
    modules: {
    }
}