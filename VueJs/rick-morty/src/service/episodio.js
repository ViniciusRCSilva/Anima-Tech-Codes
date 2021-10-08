import api from './api';

export default {
    getEpisodios(){
        return api.get('/episode').then(res => {
            return res
        }).catch(error => {
            return error
        })
    },
    getEpisodioById(id){
        return api.get(`/episode/${id}`).then(res => {
            return res
        }).catch(error => {
            return error
        })
    },
    getEpisodioByPage(id){
        return api.get(`/episode/?page=${id}`).then(res => {
            return res
        }).catch(error => {
            return error
        })
    }
}