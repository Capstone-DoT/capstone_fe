import {instance} from "@/pages/api/instance"

export const checkApi = async(contentType, contentId, token) => {
    instance.defaults.headers.common['token'] = token
    const response = await instance.get('bookmark/check', {params: {contentType, contentId }})
    return response
}

export const contentapi = async(type, order, token) => {
    instance.defaults.headers.common['token'] = token
    const response = await instance.get('bookmark', {params: {type, order }})
    return response
}

export const addApi = async(type, contentId, token) => {
    instance.defaults.headers.common['token'] = token
    const response = await instance.post('bookmark', {type, contentId})
    return response
}

export const rmApi = async(type, contentId, token) => {
    instance.defaults.headers.common['token'] = token
    const response = await instance.delete('bookmark', { data: {type, contentId}})
    return response
}