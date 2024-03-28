import axios from "axios";
import router from "@/router";
import { getAccessToken } from "./jwt.service";


export const httpAuth = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
    
});


export const httpApi = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
});

httpAuth.interceptors.request.use(
    function (req) {
        return req;
    },

    function (error) {
        return  Promise.reject({
            "status": error.response.status,
            "message": error.response.message
        });
    }
)

httpApi.interceptors.request.use(
    function (req) {
        const token = getAccessToken();
        if (token) {
            req.headers.Authorization = `Bearer ${token}`;
        }
        return req
    },
    function (error) {
        return Promise.reject({
            "status": error.response.status,
            "message": error.response.message
        });
    }
)


httpApi.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        console.log(error)
        if (error.response.status == 401) {
            router.push({name: 'login'})
        }
        else {
            return Promise.reject({
                "status": error.response.status,
                "message": error.response.message
            });
        }
    }
);


export default  {
    httpApi,
    httpAuth,
}