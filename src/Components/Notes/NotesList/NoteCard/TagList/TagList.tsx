import { Tag } from "../../../../../types/tag";
import styles from './TagList.module.scss'

interface TagListProps{
    tags:Tag[]
}

function TagList({tags}:TagListProps) {
    return ( 
        <div className={styles.TagList}>
            {tags.map((tag)=><span>{tag.name}</span>)}
        </div>
     );
}

export default TagList;