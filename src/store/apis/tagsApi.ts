import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { axiosBaseQuery } from "../../http";

export const tagsApi=createApi({
    reducerPath:'tagsApi',
    baseQuery: axiosBaseQuery({baseUrl: '/notes',}),
    endpoints:builder=>({
        getNotes:builder.query({
            query:()=>({
                url:'',
                method:'get',
                params:{full:true}
            })
        })
    })
})

export const {useGetNotesQuery}=tagsApi