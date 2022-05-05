# Code-Challenge
Repositorio donde se deposito la practica Code-Challenge, consiste en adquirir información especifica de los estudiantes de Visual Partner


# Ejecuta el comando para instalar el servidor Express
La dependencia Express servira para poder montar el servidor que recibira las solicitudes y devolvera una respuesta
1. Instala la dependencia express: `npm install express --save`
2. Corre tu servidor express con el comando: `npm run server`
3. Entra a tu navegador a localhost:3000


# Endpoints disponibles
Se cuenta con 4 endpoints diferentes para acceder y utilizar la informacion, todos los endpoint devuelven un formato JSON

1. Se puede obtener todos los estudiantes `http://localhost:3000/v1/students`
![image](https://user-images.githubusercontent.com/99489937/166848747-20fca9a2-f582-437d-a143-1addfe03589b.png)


2. Se puede obtener todos los estudiantes con certificado `http://localhost:3000/v1/students/certification`
![image](https://user-images.githubusercontent.com/99489937/166848725-23e41b16-f10c-409e-950e-d81e1e10000c.png)


3. Se puede obtener todos los email de estudiantes con certificado `http://localhost:3000/v1/students/certification/email`
![image](https://user-images.githubusercontent.com/99489937/166848679-01eacc69-76ea-482d-adec-b9aea11c269b.png)


4. Se puede obtener los alumnos con creditos mayor a 500 entrando a `http://localhost:3000/v1/students/credits`
![image](https://user-images.githubusercontent.com/99489937/166848777-0cb15368-8014-4eb4-baf4-de64fda0e5cc.png)
