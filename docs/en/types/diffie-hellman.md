# Diffie-Hellman Key Exchange Protocol

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