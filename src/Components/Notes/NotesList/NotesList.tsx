import { Note } from "../../../types/note";
import NoteCard from "./NoteCard";
import styles from './NotesList.module.scss'

interface NotesListProps{
    notes:Note[]
}

function NotesList({notes}:NotesListProps) {
    
    return ( 
        <div className={styles.NotesList}>
            {notes.map((note)=><NoteCard {...note} key={note.id}/>)}
        </div>
     );
}

export default NotesList;