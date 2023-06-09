export interface UserLogin{
  id:number
  username:string,
  password:string,
  isadmin:boolean,
  img_src:string,
  isactive:boolean,


}
export interface LoginForm {
  username: string;
  password: string;
}

export interface RegisterForm {
  username: string;
  password: string;
  confirm_password: string;
}
