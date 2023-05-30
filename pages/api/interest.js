import {instance} from "@/pages/api/instance"

export const contentapi = async(type, order) => {
    const response = await instance.get('bookmark', {params: {type, order }})
    return response
}

export const addApi = async(type, contentId) => {
    const response = await instance.post('bookmark', {type, contentId})
    return response
}

export const rmApi = async(type, contentId) => {
    const response = await instance.delete('bookmark', { data: {type, contentId}})
    return response
}