# Salted Passwords

En la lección anterior, explicamos por qué es mejor almacenar contraseñas hash. Pero un archivo de contraseñas cifradas con una función hash sigue siendo vulnerable. Imaginemos que un hacker compila una lista de los millones de contraseñas más comunes. Él opera en todos los millones de ellos con la función hash y almacena los resultados. Ahora, el hacker roba una lista de valores hash almacenados en la base de datos. Compara esa lista con su lista de posibles contraseñas cifradas y descubre posibles coincidencias.
Esto se llama un ataque de diccionario.
La sal es una forma de hacerlo más difícil.

**Salt** es una cadena aleatoria que se concatena con la contraseña antes de cifrarla. Tanto el valor de sal como el resultado de la función hash se almacenan en la base de datos en el host. Si el número de posibles valores de sal es lo suficientemente grande, esto prácticamente elimina un ataque de diccionario contra las contraseñas de uso común porque el pirata informático debe generar el hash unidireccional para cada valor de sal posible.

::: warning Nota

Salt solo protege contra ataques generales de diccionario en un archivo de contraseña, no contra un ataque concertado en una sola contraseña. Protege a las personas que tienen la misma contraseña en varias máquinas pero no mejora las contraseñas mal elegidas.
:::