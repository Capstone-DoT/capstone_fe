import {instance} from "@/pages/api/instance"

export const signupApi = async(id, password) => {
    const response = await instance.post('user/signup', {id, password})
    return response
}

export const loginApi = async(id, password) => {
    const response = await instance.post('user/signin', {id, password})
    instance.defaults.headers.common['token'] = response.data.result?.token;
    return response
} 