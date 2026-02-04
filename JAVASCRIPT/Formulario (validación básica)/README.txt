Formulario de validación simple:
Se abre por el archivo html principal "index.html"

-Se escribe nombre, email y materia.
-el archivo code.js es donde está la validación, la función validarCampos se encarga de validar los inputs de la siguiente forma:
nombre: -Tiene que ser un string entre 3 y 40 caracteres. (fuera de este rango se asume que no existe ningun nombre así)
email: -Tiene que tener un "@" y tambien un "." , y debe ser un string entre 5 y 40 caracteres. (fuera de este rango se asume que no existe ningun email así).
materia: -Tiene que ser un string entre 3 y 40 carácteres. (fuera de este rango se asume que no existe ninguna materia así)

Trabajo con getElementId(""), querySelector(""), innerHTML para escribir html y classList para escribir clases