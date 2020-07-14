# Ejemplos

## JSON Web Token (JWT)

### ¿Qué es el token web JSON?

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