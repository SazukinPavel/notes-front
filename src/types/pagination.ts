import { notePaginationSlice } from './../store/slices/notePaginationSlice';
interface PaginationOption{
    take:number
    page:number
}

export interface NotesPaginationOption extends PaginationOption{

}

interface  PaginationSliceState{
    page:number
    all:number
    take:number
}

export interface NotePaginationSliceState extends PaginationSliceState{

}