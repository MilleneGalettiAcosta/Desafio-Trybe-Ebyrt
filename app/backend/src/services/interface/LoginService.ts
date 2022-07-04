export default interface ILoginService<T> {
  login(email: string, password:string, token: string): Promise<T>
}
