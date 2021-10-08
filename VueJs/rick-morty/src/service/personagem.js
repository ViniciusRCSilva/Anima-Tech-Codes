import api from './api';

export default {
    getPersonagens(){
        return api.get('/character').then(res => {
            return res
        }).catch(error => {
            return error
        })
    },
    getPersonagemById(id){
        return api.get(`/character/${id}`).then(res => {
            return res
        }).catch(error => {
            return error
        })
    },
    getPersonagemByPage(id){
        return api.get(`/character/?page=${id}`).then(res => {
            return res
        }).catch(error => {
            return error
        })
    }
}