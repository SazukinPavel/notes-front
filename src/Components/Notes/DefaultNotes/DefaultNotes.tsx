import { useGetNotesQuery } from "../../../store/apis/notesApi";
import NotesList from "../NotesList";

function Notes(){

    const {data:notes,isLoading,isError}=useGetNotesQuery(null)

    return ( 
        <div>
            {notes  && <NotesList notes={notes}/>}
        </div>
     );
}

export default Notes
;