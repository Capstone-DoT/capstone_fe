import {instance} from "@/pages/api/instance"
import axios from "axios";

export const scholarapi = async() => {
    const response = await instance.get('content/scholarship')
    return response
}

export const extraapi = async() => {
    const response = await instance.get('content/activity')
    return response
}

export const contestapi = async() => {
    const response = await instance.get('content/contest')
    return response
}

export const interestapi = async() => {
    const response = await instance.get('bookmark')
    return response
}
