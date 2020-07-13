# AES (Advanced Encryption Standard)

The Advanced Encryption Standard, or AES, is a symmetric block cipher chosen by the U.S. government to protect classified information and is implemented in software and hardware throughout the world to encrypt sensitive data.

NIST (The National Institute of Standards and Technology) specified that the new advanced encryption standard algorithm must be a block cipher capable of handling 128 bit blocks, using keys sized at 128, 192, and 256 bits. Other criteria for being chosen as the next advanced encryption standard algorithm included security, implementation and cost. Intended to be released under a royalty-free basis, the candidate algorithms were to be evaluated on computational and memory efficiency.

AES comprises three block ciphers: AES-128, AES-192 and AES-256. Each cipher encrypts and decrypts data in blocks of 128 bits using cryptographic keys of 128-, 192-, and 256-bits, respectively.

<center>
    <img src = "https://intalsis.com/es-es/assets/images/aes_design.jpg" width="300">
</center>

Symmetric ciphers use the same key for encrypting and decrypting, so the sender and the receiver must both know (and use) the same secret key. There are 10 rounds for 128-bit keys, 12 rounds for 192-bit keys, and 14 rounds for 256-bit keys. A round consists of several steps including substitution, transposition, mixing of the input plain text, and transforming it into the final output of cipher text.

::: tip Example 
"Hello, world!" encrypted in AES-128 is "AOuS61U0LrJOfnXsO4HCgg==".
:::

::: warning Note
"==" at the end of the encrypted string sign means that we got base64 output.
:::