require('dotenv').config()
import {Pool} from 'pg'
const pool = new Pool()

module.exports = {
  query: (text, params) => {
    return new Promise((resolve, reject) => {
      pool.query(text, params).then(res => {
        const start = Date.now()
        const duration = Date.now() - start
        console.log('executed query', {text, duration, rows: res.rowCount})
        resolve(res)
      }).catch(e => reject(e))
    })
  }
}