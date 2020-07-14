# Ejemplos

## JSON Web Token (JWT)

### ¿Qué es JSON Web Token?

JSON Web Token (JWT) es un estándar abierto (RFC 7519) que define una forma compacta y autónoma para transmitir información de forma segura entre las partes como un objeto JSON. Esta información puede ser verificada y confiable porque está firmada digitalmente. Los JWT se pueden firmar usando una clave secreta (con el algoritmo HMAC) o un par de claves pública / privada usando RSA o ECDSA.

Aunque los JWT se pueden cifrar para proporcionar también secreto entre las partes, nos centraremos en los tokens firmados. Los tokens firmados pueden verificar la integridad de los reclamos que contiene, mientras que los tokens cifrados ocultan esos reclamos de otras partes. Cuando los tokens se firman utilizando pares de claves públicas/privadas, la firma también certifica que solo la parte que posee la clave privada es la que la firmó.

::: warning Nota
JWT aún estando compuesto por varios algoritmos, es una encriptación simetrica
:::

### ¿Cuándo deberías usar JSON Web Tokens?

Estos son algunos escenarios en los que los tokens web JSON son útiles:

- **Autorización:** Este es el escenario más común para usar JWT. Una vez que el usuario haya iniciado sesión, cada solicitud posterior incluirá el JWT, lo que le permitirá acceder a rutas, servicios y recursos que están permitidos con ese token. El inicio de sesión único es una característica que usa ampliamente JWT hoy en día, debido a su pequeña sobrecarga y su capacidad de usarse fácilmente en diferentes dominios.

- **Intercambio de información:** Los tokens web JSON son una buena forma de transmitir información de manera segura entre las partes. Debido a que los JWT se pueden firmar, por ejemplo, utilizando pares de claves públicas / privadas, puede estar seguro de que los remitentes son quienes dicen ser. Además, como la firma se calcula utilizando el encabezado y la carga útil, también puede verificar que el contenido no haya sido alterado.

### ¿Cuál es la estructura JSON Web Token?

En su forma compacta, JSON Web Tokens consta de tres partes separadas por puntos (.), que son:

1. Header
2. Payload
3. Signature

Por lo tanto, un JWT generalmente se parece a lo siguiente.

```
xxxxx.yyyyy.zzzzz
```

#### Analicemos las diferentes partes.

**Header**

El encabezado generalmente consta de dos partes: el tipo de token, que es JWT, y el algoritmo de firma que se utiliza, como HMAC SHA256 o RSA.

::: tip Ejemplo

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```
Entonces, este JSON está codificado en Base64Url para formar la primera parte del JWT.
:::

**Payload**

La segunda parte del token es la carga útil, que contiene los reclamos. Las reclamaciones son declaraciones sobre una entidad (generalmente, el usuario) y datos adicionales. Existen tres tipos de reclamaciones: _registradas, públicas y privadas_.

- Reclamos registradas: se trata de un conjunto de reclamaciones predefinidas que no son obligatorias pero se recomiendan para proporcionar un conjunto de reclamaciones útiles e interoperables. Algunos de ellos son: iss (emisor), exp (tiempo de vencimiento), sub (tema), aud (audiencia) y otros.

Tenga en cuenta que los nombres de los reclamos tienen solo tres caracteres, ya que JWT debe ser compacto.

- Reclamos públicos: los que usan JWT pueden definirlos a voluntad. Pero para evitar colisiones, deben definirse en el Registro de tokens web JSON de IANA o definirse como un URI que contiene un espacio de nombres resistente a colisiones.

- Reclamos privados: son los reclamos personalizados creados para compartir información entre las partes que acuerdan usarlos y no son reclamos registrados ni públicos.

::: tip Ejemplo

```json
{
  "sub": "1234567890",
  "nombre": "John Doe",
  "admin": true
}
```

La carga útil se codifica luego en Base64Url para formar la segunda parte del JSON Web Token.
:::

Tenga en cuenta que para los tokens firmados, esta información, aunque protegida contra la manipulación, es legible por cualquier persona. No coloque información secreta en los elementos de carga o encabezado de un JWT a menos que esté encriptado.

**Signature**

Para crear la parte de la firma, debe tomar el encabezado codificado, la carga útil codificada, una clave secreta, el algoritmo especificado en el encabezado y firmarlo.

::: tip Ejemplo 
Si desea utilizar el algoritmo SHA256 de HMAC, la firma se creará de la siguiente manera:

```js
HMACSHA256 (
  base64UrlEncode (head) + "." +
  base64UrlEncode (payload),
  clave
)
```
:::

La firma se usa para verificar que el mensaje no se cambió en el camino y, en el caso de los tokens firmados con una clave privada, también puede verificar que el remitente del JWT es quien dice ser.

### Poniendo todo junto

El resultado son tres cadenas de URL Base64 separadas por puntos que se pueden pasar fácilmente en entornos HTML y HTTP, a la vez que son más compactas en comparación con los estándares basados ​​en XML como SAML.

A continuación se muestra un JWT que tiene el encabezado y la carga útil anteriores codificados, y está firmado con una clave.

<center>
    <img src="https://cdn.auth0.com/content/jwt/encoded-jwt3.png" width="500">
</center>

## Protocolo de intercambio de claves Diffie-Hellman

El intercambio de claves Diffie-Hellman (DH) fue el primer algoritmo de clave pública inventado (1976). Obtiene su seguridad de la dificultad de calcular logaritmos discretos en un campo finito, en comparación con la facilidad de calcular la exponenciación en el mismo campo.

Diffie-Hellman se puede usar para la distribución de claves. Alice y Bob pueden usar este algoritmo para generar una clave secreta, pero no se puede usar para cifrar y descifrar mensajes. Por eso se le conoce como el "Protocolo de intercambio de claves Diffie-Hellman".

El objetivo es que Alice y Bob tengan una clave secreta mutua sin usar un canal seguro o una reunión segura (tenga en cuenta que no pueden verse cara a cara).

Primero, Alice y Bob están de acuerdo en un número primo grande, n y g, de modo que g es un modo primitivo n (en aritmética modular, un número g es un módulo raíz primitivo n si cada número un número primo de n es congruente con una potencia de g módulo n). Estos dos enteros no tienen que ser secretos; Alice y Bob pueden aceptarlos a través de algún canal inseguro. Incluso pueden ser comunes entre un grupo de usuarios. No importa. Luego, el protocolo es el siguiente:

1. Alice elige un entero grande aleatorio x y lo envía a Bob X que se calcula de la siguiente manera:

```
X = g ^ x (mod n)
```

2. Bob elige un entero grande aleatorio y y lo envía a Alice Y que se calcula de la siguiente manera:

```
Y = g ^ y (mod n)
```

3. Alice calcula k de la siguiente manera:

```
k = Y * x (mod n)
```

4. Bob calcula k´ de la siguiente manera:

```
k´ = X * y (mod n)
```

Tanto k como k´ son iguales a g^(x * y) mod n. Nadie que esté escuchando en el canal puede calcular ese valor; solo saben n, g, X e Y. A menos que puedan calcular el logaritmo discreto y recuperar x o y, no pueden resolver el problema. Entonces, k es la clave secreta que tanto Alice como Bob calcularon de forma independiente y hemos alcanzado el objetivo.

::: warning Nota

La elección de g y n puede tener un impacto sustancial en la seguridad de este sistema. Se basa en la dificultad de factorizar números del mismo tamaño que n.
:::

## RSA (criptosistema)

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

::: warning Nota

Tanto RSA como el Protocolo de intercambio de claves Diffie-Hellman, son de tipo asimétrico.
:::