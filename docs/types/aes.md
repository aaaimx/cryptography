# AES (Estándar de cifrado avanzado)

El Advanced Encryption Standard, o AES, es un cifrado de bloque simétrico elegido por el gobierno de los EE. UU. Para proteger la información clasificada y se implementa en software y hardware en todo el mundo para cifrar datos confidenciales.

El NIST (Instituto Nacional de Estándares y Tecnología) especificó que el nuevo algoritmo estándar de cifrado avanzado debe ser un cifrado de bloques capaz de manejar bloques de 128 bits, utilizando claves de 128, 192 y 256 bits. Otros criterios para ser elegido como el siguiente algoritmo estándar de cifrado avanzado incluyen seguridad, implementación y costo. Con la intención de ser lanzados bajo una base libre de regalías, los algoritmos candidatos debían ser evaluados en eficiencia computacional y de memoria.

AES consta de tres cifras de bloque: AES-128, AES-192 y AES-256. Cada cifrado cifra y descifra datos en bloques de 128 bits utilizando claves criptográficas de 128, 192 y 256 bits, respectivamente.

<center>
    <img src = "https://intalsis.com/es-es/assets/images/aes_design.jpg" width="300">
</center>

Los cifrados simétricos usan la misma clave para cifrar y descifrar, por lo que el remitente y el receptor deben conocer (y usar) la misma clave secreta. Hay 10 rondas para claves de 128 bits, 12 rondas para claves de 192 bits y 14 rondas para claves de 256 bits. Una ronda consta de varios pasos que incluyen la sustitución, la transposición, la mezcla del texto plano de entrada y su transformación en la salida final del texto cifrado.

::: tip Ejemplo
"¡Hola Mundo!" encriptada en AES-128 es "AOuS61U0LrJOfnXsO4HCgg==".
:::

::: warning Nota
"==" al final del signo de cadena encriptada significa que obtuvimos una salida base64.
:::