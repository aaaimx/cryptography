# Symmetric Encryption

**Symmetric-key algorithms** are algorithms for cryptography that use the same cryptographic keys for both encryption of plaintext and decryption of ciphertext.

<center>
    <img src = "https://blog.emsisoft.com/wp-content/uploads/2017/06/symmetric_encryption_graphic_en-730x409.png" width="500">
</center>

The earliest and simplest example of a symmetric cipher is the Caesar cipher. It is a type of substitution cipher in which each character in the plaintext is replaced by a character some fixed number of positions up or down the alphabet. Let's see how it works in a code example.

For example, if we choose the encryption key as the "right shift by 3" it would be:

```cpp
string encText = CaesarEncrypt(); 
...
string plainText = "Some_Test_Example";
...
plainText[iter] += 3;
```

::: warning Note

If you look at ANSI character codes, the most common characters are between 33 and 122, 124, and 126. Remember that the last character shift should return to the beginning and vice versa.
:::

As you can predict, the decryption key, in this case, will be "left shift by 3":
```cpp
string decrText = CaesarDecrypt(encText);
 ...
encText[iter] -= 3;
```

::: warning Note 

Nearly all modern cryptographic systems still use symmetric-key algorithms internally to encrypt the bulk of the messages. Symmetric ciphers are commonly used to achieve other cryptographic primitives than just encryption.
:::