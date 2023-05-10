import axios from "axios";

export const instance = axios.create({baseURL:"http://54.180.62.54:3001/"})


export const testApi = async() => {
    const response = await instance.get('content')
    console.log(response)
    return response
}
