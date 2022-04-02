import { User } from '../../../../../types/user';
import styles from './NoteAuthor.module.scss'

function NoteAuthor({username}:User) {
    return ( 
        <div className={styles.NoteAuthor}>
            <span>Автор:{username}</span>
        </div>
     );
}

export default NoteAuthor;