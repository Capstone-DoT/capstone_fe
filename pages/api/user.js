import {instance} from "@/pages/api/instance"

export const signupApi = async(id, password) => {
    const formData = new FormData()
    formData.append("id", id)
    formData.append("password", password)
    const response = await instance.post('user/signup', formData)
    console.log(response)
    return response
}
