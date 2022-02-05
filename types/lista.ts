export interface IList {
  titulo: string
  'valor-1': string
  'valor-2': string
  'valor-3': string
  'valor-4': string
  'valor-5': string
  'valor-6': string
  'valor-7': string
  'valor-8': string
  'valor-9': string
}

export type IListCompleta = IList & {
  id: string
}

export type NomeTabelas = 'lista' | 'tabela'
