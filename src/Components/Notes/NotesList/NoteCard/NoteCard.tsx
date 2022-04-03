import { Note } from "../../../../types/note";
import TagList from "./NoteTagList";
import styles from './NoteCard.module.scss'
import NoteAuthor from "./NoteAuthor";

function NoteCard({description,title,tags,user}:Note) {
    return ( 
        <div className={styles.NoteCard}>
            <h3>Тема:{title}</h3>
            <p>Описание:{description}</p>
            <TagList tags={tags}/>
            <NoteAuthor {...user}/>
        </div>
     );
}

export default NoteCard;