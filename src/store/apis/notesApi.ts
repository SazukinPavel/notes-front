import { Note } from './../../types/note';
import { NotesPaginationOption } from './../../types/pagination';
import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { axiosBaseQuery } from "../../http";



export const notesApi=createApi({
    reducerPath:'notesApi',
    baseQuery: axiosBaseQuery({baseUrl: '/notes',}),
    endpoints:builder=>({
        getNotes:builder.query<Note[],NotesPaginationOption>({
            query:({take,page})=>({
                url:'',
                method:'get',
                params:{full:true,take,page}
            })
        })
    })
})


export const {useGetNotesQuery}=notesApi