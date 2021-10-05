const cors = require('cors')
const express = require('express')
const app = express()

app.use( cors() )

const port = 5000

const coursesArr = [ 'HTML', 'CSS', "JavaScript", 'DOM', "SPA", 'Backend', 'Fullstack', "Final Project" ]

app.get('/json', (req, res) => {
    console.log('courses at DCI');

    res.json(coursesArr)

})

// BONUS

app.get('/text', (req, res) => {
    res.json(coursesArr.join())
})

app. get('/html', (req, res) => {

    const list = coursesArr.map(item => {
        if(item == "Backend"){
         return '<li><b>' + item + '</b></li>'
        }else{
         return   '<li>' + item + '</li>'
        }
    })

    console.log(list);

    const html = '<ul>' + list.concat().join('') + '</ul>'

    res.send(html)
})














app.listen(port, () => {
    console.log('API has successfully started in PORT 5000');
})

