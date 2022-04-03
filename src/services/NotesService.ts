import { $axios } from '../http';



export class NotesService{

  static getNoteCount(){
      return $axios.get<number>('/notes',{params:{all:true}})
  }
}