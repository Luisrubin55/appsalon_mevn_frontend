import api from "../lib/axios";

export default {
    create(data) {
        const token = localStorage.getItem('AUTH_TOKEN')
        return api.post('/appointments', data)
    },
    getByDate(date){
        const token = localStorage.getItem('AUTH_TOKEN')
        return api.get(`/appointments?date=${date}`)
    },
    getUserAppointment(userId){
        return api.get(`/users/${userId}/appointments`)
        
    },
    getById(id){
        return api.get(`/appointments/${id}`)
    },
    update(id, data) {
        return api.put(`/appointments/${id}`, data)
    },
    delete(id) {
        return api.delete(`/appointments/${id}`)
    },
}