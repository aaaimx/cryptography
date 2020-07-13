# Hashed passwords

Cuando Alice inicia sesión en una computadora host (o un sistema de banca telefónica, o cualquier otro tipo de terminal), ¿cómo sabe el anfitrión quién es ella? ¿Cómo sabe el anfitrión que no es Eve tratando de falsificar la identidad de Alice? Tradicionalmente, las contraseñas resuelven este problema. Alice ingresa su contraseña y el anfitrión confirma que es correcta. Tanto Alice como el anfitrión conocen este conocimiento secreto, y el anfitrión se lo solicita a Alice cada vez que intenta iniciar sesión.

El host no necesita saber las contraseñas; el host debe poder diferenciar las contraseñas válidas de las no válidas. Esto es fácil con funciones unidireccionales. En lugar de almacenar contraseñas, el host almacena los hash de las contraseñas.

Procedimiento
1. Alice le envía al host su contraseña.
2. El host realiza una función unidireccional (hashing) en la contraseña.
3. El host compara el resultado del hashing con el valor que almacenó previamente.

Dado que el host ya no almacena una tabla de las contraseñas válidas de todos, se mitiga la amenaza de que alguien entre en el host y robe la lista de contraseñas.

::: warning Nota

La lista de contraseñas operadas por hashing es inútil porque el hash no se puede revertir para recuperar las contraseñas.
:::