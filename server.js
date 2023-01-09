const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'eminem': {
        'age': 50,
        'birthName': 'Marshall Bruce Mathers III',
        'birthLocation': 'Detroit, Michigan, USA'
    },
    'dr. dre': {
        'age': 57,
        'birthName': 'Andre Romelle Young',
        'birthLocation': 'Compton, California, USA'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const rapperName = request.params.name.toLowerCase()
    if( rappers[rapperName] ){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])    
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Better go catch it!`)
})
