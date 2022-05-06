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

## Dependencias Extra

# JEST
Se utilizo Jest para hacer las pruebas de codigo

# Linter
Se utilizo linter para mantener una guia de estilo, para instalar esta dependencia se usa el comando
> npm install eslint --save-dev
Se necesita generar una configuracion puede utilizar el comando
> npm init @eslint/config
Y se configura de la siguiente manera para este proyecto con estas dependencias
![image](https://user-images.githubusercontent.com/99489937/166923843-4e21a32d-2d37-4bfe-95b8-923ef9f47c88.png)

Se creara un archivo llamado `eslinter.js`, asegurate que se parezca a lo siguiente
```js
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"]
    }
};
```
Asi mismo asegurese que el `package.json` se encuentre señalando correctamente a los scripts
Para linux o sistemas UNIX
```js
  "scripts": {
    "test": "node ./node_modules/.bin/jest",
    "linter": "node ./node_modules/eslint/bin/eslint.js .",
    "linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix"
  }
```
Para windows
```js
  "scripts": {
    "test": "node ./node_modules/jest/bin/jest",
    "linter": "node ./node_modules/eslint/bin/eslint.js .",
    "linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix",
    "server": "node ./lib/server.js"
  },
```

![image](https://user-images.githubusercontent.com/99489937/166924737-bbdcf1d6-9f69-4e41-9531-6c7dc52aa91b.png)

Para correr Linter y revisar si se necesita correcciones se utiliza el comando
> npm run linter
![image](https://user-images.githubusercontent.com/99489937/166925052-57f8a713-4d1a-407d-ae85-bbe069bd058b.png)

Puede corregir los errores manualmete o dejar que el Framework lo haga por usted utilizando
> npm run linter-fix
# Se utiliza Github Actions para la automatizacion de pruebas
Crea un directorio en #
```
name: Run Tests in my project every push on GitHub

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - name: Run Jest
      uses: stefanoeb/jest-action@1.0.3
```
