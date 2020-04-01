export type Circle = {
  id: number
  name: string
  about: string
  catchCopy: string
  members_number: string
  workTime: string
  location: string
  cost: string
  description: string
  eyecatch: string
  twitter: string
  email: string
  url: string
  images: []
  types: Type[]
  category: Category
}

export type Type = {
  id: number
  name: string
}

export type Category = {
  id: number
  name: string
}

export type StateChanger = {
  loaded: () => void
  complete: (noResults?: boolean) => void
  reset: () => void
  error: () => void
}