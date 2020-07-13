# RSA (criptosistema)

RSA es uno de los primeros criptosistemas de clave pública (asimétrica) y se usa ampliamente para la transmisión segura de datos. RSA significa Rivest-Shamir-Adleman, letras iniciales de los apellidos de sus creadores. Esta asimetría se basa en la dificultad práctica de la factorización del producto de dos números primos grandes, el "problema de factorización".

Así es como funciona la generación de claves:

1. Elija dos números primos distintos, p y q.
2. Calcule n = p * q. n se utiliza como módulo para las claves públicas y privadas. Su longitud, generalmente expresada en bits, es la longitud de la clave.
3. Calcule λ (n) = least_common_multiple (p - 1, q - 1). Este valor es privado.
4. Elija un número entero e tal que 1 <e <λ (n), e y λ (n) sean números coprimos.
5. Determine d a partir de d * e ≡ 1 (mod λ (n)).

_e_ se publica como el exponente de clave pública.

_d_ se mantiene como el exponente de clave privada.

**Par de claves**
- clave pública: (e, n)
- clave privada: (d, n)

Actualmente, los tamaños estándar para las claves RSA son los siguientes:
- 512 bits - Clave de baja resistencia
- 1024 bits - Clave de resistencia media
- 2048 bits - Clave de alta resistencia
- 4096 bits - Clave de muy alta resistencia

Supongamos que Bob quiere enviar información a Alice. Si deciden usar RSA, Bob debe conocer la clave pública de Alice para cifrar el mensaje y Alice debe usar su clave privada para descifrar el mensaje. Para permitir que Bob envíe sus mensajes cifrados, Alice transmite su clave pública (n, e) a Bob a través de un canal confiable (no necesariamente secreto). La clave privada de Alice (d) nunca se distribuye.

Intentemos generar un par de claves muy simple:

```
1. p = 61 y q = 53
2. n = 61 * 53 = 3233
3. λ (n) = mcm (p-1, q-1) = mcm (60, 52) = 780
4. e = 17 (1 <e <λ (n), e y λ (n) son números coprimos)
5. d = 413 (d * e mod λ (n) = 1)
```

clave pública: (n = 3233, e = 17)

clave privada: (n = 3233, d = 413)

Generamos el par de claves. Necesitamos la clave pública (n, e) para cifrar el texto sin formato. Asignemos texto plano a m y el texto cifrado a c; entonces el texto cifrado será:

```
c = m ^ e mod n
```

Por ejemplo, si nuestro texto simple m = 65, entonces:

```
c (m) = 65 ^ 17 mod 3233 = 2790
```

Para descifrar el texto cifrado con la clave privada (n, d), debemos usar esto:

```
m (c) = c ^ d mod n = 2790 ^ 413 mod 3233 = 65
```

::: warning Ejercicio

Intente escribir un programa (en cualquier idioma) para generar un par de claves simple, cifrar el texto sin formato y descifrar.
:::