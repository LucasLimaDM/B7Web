import { users } from "@/data/db";
import { typeUser } from "@/types/typeUser";

interface LoginApiInterface {
  login: Function,
  emptyUser: typeUser,
}

export const loginApi: LoginApiInterface = {
  login(email: string, password: string){
    let response: typeUser = this.emptyUser;
    users.map(us => {
      if(us.email===email&&us.password===password){
        response = us;
      }
    })
    return response;
  },

  emptyUser: {
    username: '',
    email: '',
    password: '',
    message: '',

  }
}