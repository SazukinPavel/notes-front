import axios, { AxiosError, AxiosRequestConfig } from "axios";
import {BaseQueryFn} from '@reduxjs/toolkit/query'

export const $axios=axios.create({
    baseURL:'http://localhost:4200/'
})

$axios.interceptors.request.use((config)=>{
    const token=localStorage.getItem('token')
    if(token && config.headers){
        config.headers.authorization=token
    }
    return config
})

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data,params}) => {
    try {
      const result = await $axios({ url: baseUrl + url, method, data ,params})
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError as AxiosError
      return {
        error: { status: err.response?.status, data: err.response?.data },
      }
    }
  }