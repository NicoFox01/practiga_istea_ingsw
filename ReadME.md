Descripción del repositorio:
El presente repositorio se lleva a cabo como actividad para la materia Ingeniería de Software - ISTEA.
La misma busca crear un proyecto e implementarlo con las herramientas de Git y Docker.

Alumno:
Nicolás Gonzalez

Docente:
Marcos Luciano Sosa

Alcance:
El presente proyecto está orientado a complementar los conocimientos de la cursada.

Utilidad del código:
El presente programa web sirve para conseguir un numero al azar del 1 al 10

Tecnologías Utilizadas:
* HTML, CSS, JS
* Docker
* Github

Instrucciones para ejecutar el protecto:
1) Clonar el repositorio (bash):
git clone https://github.com/NicoFox01/practiga_istea_ingsw.git

2) Ingresar a la carpeta (bash):
cd nombre-del-proyecto

3) Cronstruir y Ejecutar el contenedor de Docker:
docker build -t practica-istea
docker run -d -p 8080:80 --name web-html mi-web-html

El mismo se va a ejecutar en el puerto 80:80

4) Acceso a la aplicación:
Una vez que la imagen esté corriendo, debemos ir a http://localhost:8080
