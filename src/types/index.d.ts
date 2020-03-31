export type Circle = {
  id: number
  name: string
  about: string
  catchCopy: string
  description: string
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