import api, { endpoints } from './api'

interface IUser {
  id: string
  name: string
  email: string
  avatar?: string
  created_at: string
  updated_at: string
}

interface IToken {
  type: string
  token: string
  refreshToken: string
}

interface Response {
  user: IUser
  token: IToken
}

interface Request {
  email: string
  password: string
}

export async function signIn({ email, password }: Request): Promise<Response> {
  const auth = await api.post(endpoints.auth, { email, password })
  return auth.data
}
