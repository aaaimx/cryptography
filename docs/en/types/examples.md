# Examples

## JSON Web Token (JWT)

### What is JSON Web Token?

JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.

::: warning Note
JWT is still composed of several algorithms, it is a symmetric encryption
:::

### When should you use JSON Web Tokens?
Here are some scenarios where JSON Web Tokens are useful:

- **Authorization:** This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.

- **Information Exchange:** JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.

### What is the JSON Web Token structure?
In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:

1. Header
2. Payload
3. Signature

Therefore, a JWT typically looks like the following.

```
xxxxx.yyyyy.zzzzz
```

#### Let's break down the different parts.

**Header**

The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.

::: tip Example

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```
Then, this JSON is Base64Url encoded to form the first part of the JWT.
:::

**Payload**

The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: _registered, public, and private claims_.

- Registered claims: These are a set of predefined claims which are not mandatory but recommended, to provide a set of useful, interoperable claims. Some of them are: iss (issuer), exp (expiration time), sub (subject), aud (audience), and others.

Notice that the claim names are only three characters long as JWT is meant to be compact.

- Public claims: These can be defined at will by those using JWTs. But to avoid collisions they should be defined in the IANA JSON Web Token Registry or be defined as a URI that contains a collision resistant namespace.

- Private claims: These are the custom claims created to share information between parties that agree on using them and are neither registered or public claims.

::: tip Example

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
``` 

The payload is then Base64Url encoded to form the second part of the JSON Web Token.
:::

Do note that for signed tokens this information, though protected against tampering, is readable by anyone. Do not put secret information in the payload or header elements of a JWT unless it is encrypted.

**Signature**

To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

::: tip Example 

If you want to use the HMAC SHA256 algorithm, the signature will be created in the following way:

```js
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret
)
```
:::

The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is.

### Putting all together
The output is three Base64-URL strings separated by dots that can be easily passed in HTML and HTTP environments, while being more compact when compared to XML-based standards such as SAML.

The following shows a JWT that has the previous header and payload encoded, and it is signed with a secret. Encoded JWT

<center>
    <img src="https://cdn.auth0.com/content/jwt/encoded-jwt3.png" width="500">
</center>

## Diffie-Hellman Key Exchange Protocol

Diffie-Hellman key exchange (DH) was the first public-key algorithm ever invented (1976). It gets its security from the difficulty of calculating discrete logarithms in a finite field, as compared with the ease of calculating exponentiation in the same field.

Diffie-Hellman can be used for key distribution. Alice and Bob can use this algorithm to generate a secret key, but it cannot be used to encrypt and decrypt messages. So it is known as the "Diffie–Hellman Key Exchange Protocol."

The goal is for Alice and Bob have a mutual secret key without using a secure channel or a secure meeting (note that they can't see each other face to face).

First, Alice and Bob agree on a large primes, n and g, such that g is primitive mod n (in modular arithmetic, a number g is a primitive root modulo n if every number a coprime to n is congruent to a power of g modulo n). These two integers don’t have to be secret; Alice and Bob can agree to them over some insecure channel. They can even be common among a group of users. It doesn’t matter. Then, the protocol goes as follows:

1. Alice chooses a random large integer x and sends to Bob X that is calculated as follows:

```
X = g^x(mod n)
```

2. Bob chooses a random large integer y and sends to Alice Y that is calculated as follows:

```
Y = g^y(mod n)
```

3. Alice computes k as follows:

```
k = Y*x(mod n)
```

4. Bob computes k´ as follows:

```
k´ = X*y(mod n)
```
Both k and k´ are equal to g^(x*y) mod n. No one who is listening on the channel can compute that value; they only know n, g, X, and Y. Unless they can compute the discrete logarithm and recover x or y, they cannot solve the problem. So, k is the secret key that both Alice and Bob computed independently and we’ve reached the goal.

::: warning Note

The choice of g and n can have a substantial impact on the security of this system. It is based on the difficulty of factoring numbers the same size as n.
:::

## RSA (cryptosystem)

RSA is one of the first public-key (asymmetric) cryptosystems and is widely used for secure data transmission. RSA stands for Rivest-Shamir-Adleman, initial letters of the surnames of its creators. This asymmetry is based on the practical difficulty of the factorization of the product of two large prime numbers, the "factoring problem".

Here's how key generation works:

1. Choose two distinct prime numbers, p, and q.
2. Compute n = p * q. n is used as the modulus for both the public and private keys. Its length, usually expressed in bits, is the key length.
3. Compute λ(n) = least_common_multiple(p − 1, q − 1). This value is private.
4. Choose an integer e such that 1 < e < λ(n), e and λ(n) are coprime.
5. Determine d from d * e ≡ 1 (mod λ(n)).

_e_ is released as the public key exponent.

_d_ is kept as the private key exponent.

**Key pair**
- public key: (e, n)
- private key: (d, n)

Currently, the standard sizes for RSA keys are as follows:
- 512 bits - Low-strength key
- 1024 bits - Medium-strength key
- 2048 bits - High-strength key
- 4096 bits - Very high-strength key

Suppose that Bob wants to send information to Alice. If they decide to use RSA, Bob must know Alice's public key to encrypt the message and Alice must use her private key to decrypt the message. To enable Bob to send his encrypted messages, Alice transmits her public key (n, e) to Bob via a reliable (not necessarily secret) channel. Alice's private key (d) is never distributed.

Let's try to generate very simple key pair:

```
1. p = 61 and q = 53
2. n = 61 * 53 =  3233
3. λ(n) = lcm(p-1, q-1) = lcm(60, 52) = 780
4. e = 17  (1 < e < λ(n), e and λ(n) are coprime)
5. d = 413  (d * e mod λ(n) = 1)
```

public key: (n = 3233, e = 17)

private key: (n = 3233, d = 413)

We generated the key pair. We need the public key (n, e) to encrypt plaintext. Let's assign plaintext to m and the ciphertext to c; then ciphertext will be:

```
c = m ^ e mod n
```

For example, if our plaintext m = 65, then:

```
c(m) = 65 ^ 17 mod 3233 = 2790
```

To decrypt the ciphertext with the private key (n, d), we should use this:

```
m(c) = c^d mod n = 2790^413 mod 3233 = 65
```

::: warning Exercise

Try to write a program (in any language) to generate a simple key pair, encrypt the plaintext, and decrypt.
:::

::: warning Note

Both RSA and the Diffie-Hellman Key Exchange Protocol are asymmetric.
:::