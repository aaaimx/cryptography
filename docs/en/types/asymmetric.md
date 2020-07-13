# Asymmetric Encryption

Public-key cryptography (asymmetric cryptography) is any cryptographic system that uses pairs of keys: public keys which may be disseminated widely, and private keys which are known only to the owner. This accomplishes two functions: authentication, where the public key verifies that a holder of the paired private key sent the message, and encryption, where only the paired private key holder can decrypt the message encrypted with the public key.

<center>
    <img src = "https://upload.wikimedia.org/wikipedia/commons/c/c5/Asymmetric_encryption.png">
</center>

Public key algorithms are fundamental security ingredients in cryptosystems, applications, and protocols. Some encryption schemes can be proven secure on the basis of the presumed difficulty of a mathematical problem, such as factoring the product of two large primes or computing discrete logarithms.

Some examples of asymmetric key encryption:
- Diffie-Hellman key exchange protocol
- DSS (Digital Signature Standard)
- Various password-authenticated key agreement techniques 
- RSA encryption algorithm

::: warning Note
Asymmetric key encryption is more secure than symmetric, because you can share your public key as necessary and keep your private key secret. But symmetric algorithms are faster, so that's why the two types are almost always used together.
::: 