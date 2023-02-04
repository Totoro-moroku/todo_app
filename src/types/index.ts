export type AuthType = {
  username?: string | null
  email: string
  password: string
}

export type Profile = {
  id: string | undefined
  updated_at: string | Date
  username: string | undefined
  avatar_url: string | undefined
  first_name: string | undefined
  last_name: string | undefined
  self_introduction: string | undefined
}

export type EditProgile = Omit<
  Profile,
  'updated_at' | 'avatar_url' | 'username '
>

export type AlertType = {
  open: boolean
  color: COLOR_TYPE | string
  message: string | null
  time: number
}

export type AlertColorType = {
  bg: string
  border: string
  text: string
  icon: string
}

export enum COLOR_TYPE {
  GREEN,
  RED,
}