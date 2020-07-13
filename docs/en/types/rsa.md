# RSA (cryptosystem)

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