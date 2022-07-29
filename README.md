# Neuron Challenge
Challenge realizado en el marco de la prueba tecnica para la empresa [Neuron Health](https://www.linkedin.com/company/fuve/).

Consiste en realizar una interfaz de login. Esta realizdo en Javascript, NodeJs en backend y React para el frontend.

## Back End && Database

Backend creado con NodeJs y Express, se utilizo Sequelize como ORM y PostgreSQL como database. Tambien se hizo uso de bcrypt para encriptar contraseñas y JWT para hacer uso de la autenticación.

## Frontend
Frontend creado con Create React App, utilizando javascript. Se hizo uso de libreria SweetAlert2 para las alertas, Axios para las llamadas a la API-

## Links
[Deploy del proyecto](https://neuron-challenge.vercel.app/)

[Deploy del backend](https://neuron-challenge.herokuapp.com/ping)

## Rutas para backend: 

### `POST`: 

 New User:
    
    https://neuron-challenge.herokuapp.com/user + body { username, email, password, name, lastname, phone, image}
 Login:

     https://neuron-challenge.herokuapp.com/login + body { email, password}

### `GET`: 

 Ping:
    
    https://neuron-challenge.herokuapp.com/ping
 
 User info:

     https://neuron-challenge.herokuapp.com/user/${id} + Bearer token
     
 User id:

     https://neuron-challenge.herokuapp.com/userid + Bearer token



