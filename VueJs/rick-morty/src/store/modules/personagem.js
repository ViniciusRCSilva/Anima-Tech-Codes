import serviceApi from '../../service/personagem'

export default {
    namespaced: true,
    state: {
        personagens:[],
        personagemDetalhes: [],
        pageIndex: 1
    },
    mutations: {
        SET_PERSONAGENS(state, payload){
            state.personagens = payload
        },
        SET_DETALHES_PERSONAGEM(state, payload){
            state.personagemDetalhes = payload
        },
        SET_PERSONAGENS_PAGINADOS(state, payload){
            state.personagens = payload
        },
        SET_PAGE_INDEX(state, page){
            state.pageIndex += page
        },
        REMOVE_PAGE_INDEX(state, page){
            state.pageIndex -= page
        }
    },
    actions: {
        getPersonagens(context){
            return serviceApi.getPersonagens().then(res => {
                context.commit('SET_PERSONAGENS', res.data.results)
            })
        },
        getPersonagemById(context, id){
            return serviceApi.getPersonagemById(id).then(res => {
                context.commit('SET_DETALHES_PERSONAGEM', res.data)
            })
        },
        getPersonagemByPage(context, params){
            return serviceApi.getPersonagemByPage(params.id).then(res => {
                context.commit('SET_PERSONAGENS_PAGINADOS', res.data.results)
            })
        }
    },
    getters: {
        listPersonagens(state){
            return state.personagens
        },
        listDetalhesPersonagem(state){
            return state.personagemDetalhes
        },
        getPageIndex(state){
            return state.pageIndex
        }
    },
    modules: {
    }
}