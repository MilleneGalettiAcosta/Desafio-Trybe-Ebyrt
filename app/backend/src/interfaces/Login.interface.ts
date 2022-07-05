interface ILogin {
    user: {
    id: number,
    email?: string,
    password?: string,
    },
    token: string,
}

export default ILogin;