import { openDB, IDBPDatabase } from 'idb'
import { v4 as uuidv4 } from 'uuid'

import { NomeTabelas, IList } from '~/types/lista'
import { ITabela } from '~/types/tabela'

type Status = 'success' | 'error'
type Listener = (status: Status, data?: any) => void

export interface IGetTodos {
  titulo: string
  data: ITabela | IList
  tipo: NomeTabelas
}

class Database {
  private DATABASE: string
  private createdListeners: Listener[] = []
  db: IDBPDatabase | undefined

  constructor(database: string) {
    this.DATABASE = database
    this.criarTabelas(['lista', 'tabela'])
  }

  private async criarTabelas(tabelas: NomeTabelas[]) {
    try {
      this.db = await openDB(this.DATABASE, 1, {
        upgrade(db: IDBPDatabase) {
          for (const tableName of tabelas) {
            if (db.objectStoreNames.contains(tableName)) {
              continue
            }

            db.createObjectStore(tableName, {
              autoIncrement: true,
              keyPath: 'id',
            })
          }
        },
      })
    } catch (error) {
      this.created('error', error)
    } finally {
      this.created('success')
    }
  }

  private created(status: Status, data?: any) {
    this.createdListeners.forEach((listener) => {
      listener(status, data)
    })
  }

  public onCreated(listener: Listener) {
    this.createdListeners.push(listener)
  }

  private async getGenerico<T>(tabela: NomeTabelas): Promise<T[]> {
    if (this.db) {
      const tx = this.db.transaction(tabela, 'readonly')
      const store = tx.objectStore(tabela)
      return await store.getAll()
    }

    return []
  }

  public async getTodos(): Promise<IGetTodos[]> {
    if (this.db) {
      const tabela = (await this.getGenerico<ITabela>('tabela')).map(
        (tabela): IGetTodos => ({
          titulo: tabela.perguntas.map((t) => t.titulo).join(', '),
          data: tabela,
          tipo: 'tabela',
        })
      )

      const lista = (await this.getGenerico<IList>('lista')).map(
        (lista): IGetTodos => ({
          titulo: lista.titulo,
          data: lista,
          tipo: 'lista',
        })
      )

      return [...lista, ...tabela]
    }

    return []
  }

  public async adicionarValor(tabela: NomeTabelas, valor: object) {
    if (this.db) {
      const tx = this.db.transaction(tabela, 'readwrite')
      const store = tx.objectStore(tabela)
      const result = await store.put(valor)

      return result
    }
  }

  public async adicionarLista(valor: IList) {
    if (this.db) {
      const tx = this.db.transaction('lista', 'readwrite')
      const store = tx.objectStore('lista')

      const result = await store.put({ ...valor, id: uuidv4() })
      return result
    }
  }

  public async getLista() {
    if (this.db) {
      const tx = this.db.transaction('lista', 'readonly')
      const store = tx.objectStore('lista')
      const result = await store.getAll()

      return result
    }

    return []
  }

  public async getItemLista(id: string) {
    if (this.db) {
      const tx = this.db.transaction('lista', 'readonly')
      const store = tx.objectStore('lista')
      const result = await store.get(id)

      return result
    }

    return null
  }

  public async adicionarTabela(valor: ITabela) {
    if (this.db) {
      const tx = this.db.transaction('tabela', 'readwrite')
      const store = tx.objectStore('tabela')

      const result = await store.put({ ...valor, id: uuidv4() })
      return result
    }
  }

  public async getItemTabela(id: string) {
    if (this.db) {
      const tx = this.db.transaction('tabela', 'readonly')
      const store = tx.objectStore('tabela')
      const result = await store.get(id)

      return result
    }

    return null
  }
}

export default Database
