import { Tag } from './tag';
import { User } from './user';

export interface Note{
    id:string
    title:string
    description:string
    user:User
    tags:Tag[]
}