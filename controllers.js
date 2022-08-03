const HomeController = (req, res) =>{
    res.render('index')
}

const AboutController = (req, res) =>{
    res.render('calculator')
}

const UserController = (req,res) =>{
        if(users.find(user => user.name == req.params.name.toLowerCase())){
            res.status(200)
            res.send(`<h1>${req.params.name}'s profile</h1>`)
        }else{
            res.status(404)
            res.send(`<h1>This page isn't available!</h1>`)
        }
}

const users = [
    {name:"fnazarov97", age:25},
    {name:"eldor", age:23},
    {name:"shodiyor", age:26},
]



module.exports = {
    HomeController, 
    AboutController,
    UserController,
    users
}