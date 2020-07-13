# Cifrado asimétrico

La criptografía de clave pública (criptografía asimétrica) es cualquier sistema criptográfico que utiliza pares de claves: claves públicas que pueden difundirse ampliamente y claves privadas que son conocidas solo por el propietario. Esto cumple dos funciones: autenticación, donde la clave pública verifica que un titular de la clave privada emparejada envió el mensaje, y cifrado, donde solo el titular de la clave privada emparejada puede descifrar el mensaje cifrado con la clave pública.

<center>
    <img src = "https://upload.wikimedia.org/wikipedia/commons/c/c5/Asymmetric_encryption.png">
</center>

Los algoritmos de clave pública son ingredientes de seguridad fundamentales en criptosistemas, aplicaciones y protocolos. Algunos esquemas de cifrado pueden probarse seguros sobre la base de la presunta dificultad de un problema matemático, como factorizar el producto de dos números primos grandes o calcular logaritmos discretos.

Algunos ejemplos de cifrado de clave asimétrica:
- Protocolo de intercambio de claves Diffie-Hellman
- DSS (estándar de firma digital)
- Varias técnicas de acuerdo de clave autenticadas con contraseña
- Algoritmo de cifrado RSA

::: warning Nota
El cifrado de clave asimétrica es más seguro que simétrico, porque puede compartir su clave pública según sea necesario y mantener su clave privada en secreto. Pero los algoritmos simétricos son más rápidos, por eso los dos tipos casi siempre se usan juntos.
:::