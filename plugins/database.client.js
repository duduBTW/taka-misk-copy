import Database from '~/utils/database'

export default ({ app: _app }, inject) => {
  const db = new Database('taka-misk-copy')

  inject('database', db)
}
