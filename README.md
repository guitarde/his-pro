# Proyecto final RS-F
Este repositorio consta con el Front-end del proyecto final realizado para el Bootcamp impartido por Geekhubs para Ribera Salud. 

 Trata de una aplicación pensada para el sector sanitario con la que se pueden gestionar una serie de usuarios de tipo pacientes o profesionales. Incluye las operaciones básicas de un CRUD, y poder borrar todos los profesionales de tipo médicos.

## Tecnologías
El proyecto ha sido realizado con [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1 y, para la realización de esta primera parte, con [Json Server](https://github.com/typicode/json-server).

### Pre-requisitos
Para la correcta ejecución del proyecto en local es necesario tener instalado **Node.js**, el cual se puede obtener desde su [página oficial](https://nodejs.org/es/).

Se necesita instalar también **Json Server**:
```
npm install -g json-server
```

El último requisito para poder ejecutar el proyecto es instalar los paquetes necesarios en el repositorio descargado o clonado. Para ello, desde la carpeta donde se encuentra, se ejecuta:
```
npm install
```

### Ejecución
Para iniciar la base de datos con **json server** se debe ejecutar el siguiente comando indicando la ruta en la que se encuentra el archivo json que almacena los datos. En el caso de este proyecto desde la carpeta principal:
```
json-server --watch db/db.json
```

Para ejecutar el proyecto se utiliza con el comando de **angular**: 
```
ng serve
```

Una vez finalizado el paso anterior ya está listo para ser consultado el proyecto en la dirección  `http://localhost:4200/`.


### Vista general 
Aquí podemos ver visión general.

![alt text](./src/assets/img/picture.png)