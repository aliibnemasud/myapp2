const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');

 
app.use(express.json())


app.get('/', (req, res)=> {
    res.send('Baby, I  can have james bond tom and jerry');
})

const users = [
    {id: 1, name: 'Ali', email: 'ali@gmail.com', phone: 01456464 },
    {id: 2, name: 'Shathil', email: 'shathil@gmail.com', phone: 01456464 },
    {id: 3, name: 'Akash', email: 'akash@gmail.com', phone: 01456464 },
    {id: 4, name: 'Rony', email: 'rony@gmail.com', phone: 01456464 }
]

app.get('/users', (req, res)=> {
    res.send(users)
})

// Post catching there

app.post('/user', (req, res)=> {
    console.log(req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})


app.get('/user/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

// why it is not working .... ??

/* app.get('/users/user/:id', (req, res)=> {
    console.log(req.params)
    const id = parseInt(req.params.id);
    const user = users.find(u => 
        {
            if (u.id === id) {
                res.send(user);
            }
            else {
                res.send("No user found");
               }           
       })   
}) */

app.listen(port, ()=> {
    console.log('Listing port', port);
})