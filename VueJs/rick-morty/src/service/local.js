import api from './api';

export default {
    getLocais(){
        return api.get('/location').then(res => {
            return res
        }).catch(error => {
            return error
        })
    },
    getLocalById(id){
        return api.get(`/location/${id}`).then(res => {
            return res
        }).catch(error => {
            return error
        })
    },
    getLocalByPage(id){
        return api.get(`/location/?page=${id}`).then(res => {
            return res
        }).catch(error => {
            return error
        })
    }
}