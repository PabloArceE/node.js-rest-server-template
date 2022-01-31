const {request, response} = require('express');

const userGet = (req = request, res= response)=>{ 

    const {param1, param2, param3} = req.query;

    res.json({
        msg: 'get API - controller',
        param1,
        param2,
        param3
    })
}

const userPost = (req = request, res = response)=>{ 
    
    const {nombre, edad, anyElement} = req.body;
    
    res.json({
        msg: 'post API - controller',
        nombre,
        edad
    })
}

const userPut = (req = request, res = response)=>{
    
    const id = req.params.id
    
    res.json({
        msg: 'put API - controller',
        id
    })
}

const userPatch = (req = request, res = response)=>{ 
    res.json({
        msg: 'patch API - controller'
    })
}
const userDelete = (req = request, res = response)=>{ 
    res.json({
        msg: 'delete API - controller'
    })
}



module.exports = {
    userGet,
    userPut,
    userPost,
    userPatch,
    userDelete
}