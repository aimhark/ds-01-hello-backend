const express = require('express')
const app = express()

const coursesArr = [ 'HTML', 'CSS', "JavaScript", 'DOM', "SPA", 'Backend', 'Fullstack', "Final Project" ]

app.get('/json', (req, res) => {
    console.log('courses at DCI');

    res.json(coursesArr)

})

app.listen(5000, () => {
    console.log('API has successfully started in PORT 5000');
})

