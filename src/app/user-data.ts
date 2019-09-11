import {InMemoryDbService} from 'angular-in-memory-web-api';


export class UserData implements InMemoryDbService {
    createDb(){
      const users=[
        {id:101,name:'Akshay'},
        {id:102,name:'Sushil'},
        {id:103,name:'Vaibhav'},
        {id:104,name:'Priyanka'},
        {id:105,name:'Aniket'},
      ];
      return {users};
      
    }
  }
  