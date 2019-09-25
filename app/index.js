require('dotenv').config()
import User from './models/user'

User.select()
.then(res => console.log(res.rows[0]))
.catch(e => console.error(e.stack))

User.insert()
.then(res => console.log(res.rows[0]))
.catch(e => console.error(e.stack))

User.update()
.then(res => console.log(res.rows[0]))
.catch(e => console.error(e.stack))

User.delete()
.then(res => console.log(res.rows[0]))
.catch(e => console.error(e.stack))
