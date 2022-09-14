/* Crea una lista con los siguientes elementos:

- Tu nombre (string)
- Tu apellido (string)
- Tu edad (number)
- ¿Eres desarrollador de aplicaciones web? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
- Tu pasatiempos favoritos (Array)
- Declara una funcion miActividadFavorita la cual retorne un string con la accion que mas te guste realizar */

const persona = {
  nombre: 'Jorge',
  apellido: 'Gutierrez',
  edad: 28,
  '¿Eres desarrollador de aplicaciones web?': true,
  'fecha nacimiento': new Date(1994, 5, 20),
  libro: {
    titulo: 'El caballero de la armadura oxidada',
    autor: 'Robert Fisher',
    fecha: new Date(1987,4,1),
    url: 'http://www.librosmaravillosos.com/elcaballerodelaarmaduraoxidada/index.html'
  },
  pasatiempos: [
    'Programar',
    'Ejercicio',
    'Videojuegos',
    'Ver videos'
  ],
  miActividadFavorita: function (){
    console.log('Aprender y divertirme');
  }
};

console.log(persona);
persona.miActividadFavorita();