# ES: Breaking Bad

# Instalación y Documentación

## DESARROLLO

En el directorio del proyecto, puede ejecutar:

1. Instale el proyecto con `npm install` // `yarn install`
2. Inicialice la aplicación con `npm run start`

# Información sobre la app

La app está envuelta por react router v6 la cual crea 2 rutas, una para la home `(/)` y otra para ver los detalles del personaje`(/detail/:Char+Name)`.

- Para la gestión del estado, he decicido utilizar Redux con Redux Toolkit, para que veais un poco como lo utilizo. Para una app de 2 pantallas si es cierto que no haría falta y se podría usar otros metodos como useContext.
  - Al cargar la primera pantalla te carga todas los los personajes de Breaking Bad ya que la API tenía de otra serie también. Esto lo carga solo una vez y lo almacena en el estado de Redux así que si se navega entre pantallas y vuelve al inicio no vuelve a cargarlos.
  - Al entrar en los detalles de un personaje desde la home, busca entre los personajes del estado al que has hecho click y te lo carga de ahi, no vuelve a cargarlos de la API. Por el contrario, si entras directamente con el link `ejemplo: (http://localhost:3000/detail/walter-white)` sin pasar por el inicio, al no tener los personajes cargados, te carga simplemente el personaje buscado desde la API. Si entras a un personaje inexistente te redirige a home.
  - La frase y la muerte del personaje lo carga cada vez que entras en la pantalla. Las frases no se repiten ya que mira que sea distinta de la antrior.
- El cambio de idioma se hizo utilizado el paquete i18next cargando el idioma por defecto la de tu navegador y al elegir otra (desde los 3 puntos de la esquina superior) la guarda en una cookie con el idioma elegido para que no se vuelva a cambiar al entrar a otra página.
- El buscaor del inicio, busca por el nombre del personaje directamente en el array que ya tenemos cargado.
- Para el estilo se está utilizando Tailwind.

# Organización del proyecto

- components: Componentes utilizados en la app y alguno que se ha utilizado varias veces.
- data: Información de redux y gestión de estados.
- i18n: Configuración de las traducciones.
- pages: Pantallas de la web con sus componentes.
- services: Llamadas a api

---

# EN: Breaking Bad

# Installation and Documentation

## DEVELOPMENT

In the project directory, you can run:

1. Install the project with `npm install` // `yarn install`
2. Initialize app with `npm run start`

# Information about the app

The app is wrapped by react router v6 which creates 2 routes, one for the home `(/)` and one to see the details of the character `(/detail/:Char+Name)`.

- For state management, I have decided to use Redux with Redux Toolkit, so you can see how I use it. For a 2-screen app, it is true that it would not be necessary and other methods such as useContext could be used.
  - When loading the first screen, it loads all the Breaking Bad characters since the API had other serie as well. This loads it only once and stores it in the Redux state so if you navigate between screens and return to home it doesn't reload them.
  - When entering the details of a character from the home page, it searches between the characters of the state you have clicked on and loads it from there, it does not load them again from the API. On the contrary, if you enter directly with the link `example: (http://localhost:3000/detail/walter-white)` without going through the beginning, since you do not have the characters loaded, it simply loads the character you are looking for from the API. If you enter a nonexistent character, it redirects you to home.
  - The quote and the death of the character loads it every time you enter the screen. The quote are not repeated since it looks that it is different from the previous one.
- The language change was made using the i18next package, loading the default language of your browser and when choosing another (from the 3 points in the upper corner) it saves it in a cookie with the chosen language so that it is not changed again going to another page.
- The search engine at the beginning, searches by the name of the character directly in the array that we already have loaded.
- For styling Tailwind is being used.

# Project Organization

- components: Components used in the app and some that have been used several times.
- data: Redux information and state management.
- i18n: Configuration of the translations.
- pages: Screens of the web with its components.
- services: API calls.
