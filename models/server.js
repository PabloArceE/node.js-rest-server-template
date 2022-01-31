const express = require('express');
const cors = require('cors');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        this.middlewares();
        
        this.routes();
    };

    middlewares(){
        // this is a built-in middleware function in Express. It serve static files and is based on server-static. In this case the static file is the public folder.
        this.app.use(express.static('public'));

        // returns middleware that only parses json and only looks at request where the Content-Type header matches the type option.
        this.app.use(express.json());

        // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
        this.app.use(cors());
    }

    routes(){
        // este método incluye todo los sets de las rutas utilizando un middleware que enlaza los archivos donde estan los recursos
        this.app.use(this.usersPath , require('../routes/users'));
    };

    listen(){
        this.app.listen(this.port);
    };

};

module.exports = Server;

// Express basado en clases