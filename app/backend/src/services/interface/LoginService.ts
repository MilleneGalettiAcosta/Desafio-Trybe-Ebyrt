export default interface ILoginService<T> {
  login(email: string): Promise<T>
}
