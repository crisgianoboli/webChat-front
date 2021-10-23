El proyecto esta creado en base a [Create React App](https://github.com/facebook/create-react-app)

## Scripts Disponibles

### `npm start`

Corre el frontend en modo desarrollo<br />
Abrir [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La aplicación se recargará si se hacen cambios.<br />
También se verán errores de escritura en la consola.

### `npm test`

Corre los tests en modo interactivo.<br />
Ver [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

### `npm run build`

Buildea la aplicación lista para producción en la carpeta `build`.<br />
Ver [deployment](https://facebook.github.io/create-react-app/docs/deployment) para más información.

# Running

## Docker

El Dockerfile para desarrollo se encuentra bajo el nombre de **dev.Dockerfile**

Build image

```
$ docker build -f dev.Dockerfile -t frontend .
```

Correr en puerto por defecto en contenedor y host

```
$ docker run -p 3000:3000 backend
```

> Nota: Por defecto está configurado el proxy en el package.json hacia **localhost:3002** ésto es util cuando se corre en node dos procesos separados, sin embargo, si se están corriendo dos contenedores separados para el backend y el frontend hay que tener en cuenta que **localhost** referencia al contenedor donde esté corriendo el frontend. Si se quiere referenciar a la ip del contenedor del backend correr el siguiente comando y modificar el proxy según la IPAdress, recordar buildear nuevamente la imagen:

```
docker inspect NOMBRE_O_ID_DEL_CONTENEDOR_DEL_BACKEND -f "{{json .NetworkSettings.Networks }}"
```

## Node

Instalar dependencias

```
$ npm install
```

Correr servidor de desarrollo

```
$ npm run start
```
