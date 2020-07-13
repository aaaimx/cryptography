# Caesar Cipher
<img src="https://cdn4.paynopain.com/wp-content/uploads/CifradoCesar-1024x432.png">
<br>
<br>

The **Caesar cipher** is one of the earliest known and simplest ciphers. It is a type of substitution cipher in which each letter in the plaintext is shifted to a certain number of places down the alphabet. For example, with a shift of 1, A would be replaced by B, B would become C, and so on. The method is named after Julius Caesar, who allegedly used it to communicate with his generals.

Here is a quick example of the encryption and decryption steps involved with the Caesar cipher. The text we will encrypt is "defend the east wall of the castle," with a shift (key) of 1.

::: tip Example
Plaintext: _"defend the east wall of the castle"_

Ciphertext: _"efgfoe uif fbtu xbmm pg uif dbtumf"_
::: 

It is easy to see how each character in the plaintext is shifted up the alphabet. Decryption is just as easy, by using an offset of -1.

::: tip Example

Plaintext: _"abcdefghijklmnopqrstuvwxyz"_

Ciphertext: _"bcdefghijklmnopqrstuvwxyza"_

The text above is shifted by 1 offset.
:::

::: warning Note

If a different key is used, the cipher alphabet will be shifted a different amount.
:::