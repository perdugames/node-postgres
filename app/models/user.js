import db from '../db'

db.query('SELECT NOW() as now')
.then(res => console.log(res.rows[0]))
.catch(e => console.error(e.stack))

module.exports = {
  select: (table, filter) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT $1::text as message', ['SELECT!'])
      .then(res => resolve(res))
      .catch(e => reject(e))
    })
  },
  insert: (text, params) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT $1::text as message', ['INSERT!'])
      .then(res => resolve(res))
      .catch(e => reject(e))
    })
  },
  update: (text, params) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT $1::text as message', ['UPDATE!'])
      .then(res => resolve(res))
      .catch(e => reject(e))
    })
  },
  delete: (text, params) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT $1::text as message', ['DELETE!'])
      .then(res => resolve(res))
      .catch(e => reject(e))
    })
  }
}