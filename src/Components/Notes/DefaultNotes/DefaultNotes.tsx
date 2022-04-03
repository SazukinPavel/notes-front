import { useEffect } from "react";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useGetNotesQuery } from "../../../store/apis/notesApi";
import { setAllNotesThunk, setNotesPage } from "../../../store/slices/notePaginationSlice";
import PaginationBar from "../../UI/PaginationBar";
import NotesList from "../NotesList";

function Notes(){

    const {page,take,all}=useTypedSelector((state)=>state.notePagination)
    const {data:notes,isLoading,isError}=useGetNotesQuery({take,page})
    const dispatch=useTypedDispatch()

    useEffect(()=>{
        dispatch(setAllNotesThunk(null))
    },[])

    const onPageSelect=(page:number)=>dispatch(setNotesPage(page))

    return ( 
        <div>
            {isLoading?
            <div>Loading</div>
            : <>
                {notes  && <NotesList notes={notes}/>}
                {all>0 && <PaginationBar take={take} page={page} setPage={onPageSelect} all={all}/>}
            </>
            }
        </div>
     );
}

export default Notes
;