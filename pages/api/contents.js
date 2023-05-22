import {instance} from "@/pages/api/instance"
import axios from "axios";

export const scholarapi = async(type, ordering, search, pageno) => {
    const response = await instance.get('content/scholarship', {params: {type, ordering, search, pageno }})
    return response
}

export const extraapi = async(type, ordering, search, pageno) => {
    const response = await instance.get('content/activity', {params: {type, ordering, search, pageno }})
    return response
}

export const contestapi = async(type, ordering, search, pageno) => {
    const response = await instance.get('content/contest', {params: {type, ordering, search, pageno }})
    return response
}

export const interestapi = async(type, ordering, search, pageno) => {
    const response = await instance.get('bookmark', {params: {type, ordering, search, pageno }})
    return response
}

export const searchapi = async(type, ordering, search) => {
    const response = await instance.get('content', {params: {type, ordering, search }})
    return response
}

export const aiapi = async(type, ordering, search, pageno) => {
    const response = await instance.get('bookmark', {params: {type, ordering, search, pageno }})
    return response
}

export const hotapi = async() => {
    const response = await instance.get('content', {params: {ordering:"view_num", pageno: 1 }})
    return response
}
