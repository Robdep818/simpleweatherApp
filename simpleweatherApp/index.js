/* #steps in installing express

mkdir myapp

cd myapp
create repo
npm init
NOTE: will create package.json 

npm install express

add .gitignore */

const express = require('express')
const app = express()
const port =3000

app.get('/', (req, res) => {
 res.send('Hello World')
})

app.listen(port, () => {
    console.log('example app listening on port ${port}')
})
