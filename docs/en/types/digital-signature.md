# Digital signature

Imagine that Alice wants to send a message to Bob. The system uses RSA encryption, and no one can read the message because the message is encrypted. How can Bob know that the message came correctly from Alice? A digital signature can help.

A digital signature is a mathematical scheme for presenting the authenticity of digital messages or documents. A valid digital signature gives a recipient reason to believe that the message was created by a known sender (authentication).

Digital signatures are standard elements of most cryptographic protocol suites and are commonly used for software distribution, financial transactions, and contract management software.

So how does it work?
One of the methods is to encrypt a special tag (which can include your name, ID, or any other personal information) with your private key, which can be decrypted only with your public key and send the tag with your message. Then the receiver can check the authenticity using the sender's public key.

Another method is to get the hash code of your message and decrypt it with the private key, and then send it with the message. This method also gives you a chance to check the message’s completeness. As we saw in the hashing lesson, if we change even one character from the message, the hash function gives us an entirely different hash code.

::: warning Note

PGP (Pretty Good Privacy) is a cryptosystem that includes hashing, symmetric and asymmetric encryptions, digital signatures, and more.
:::