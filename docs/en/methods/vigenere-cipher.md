# Vigenère Cipher

The **Vigenère cipher** is a method to encrypt alphabetic text by using the position of the letter of the input on the key.
The key is a word decided by the user and is kept secret.
The message cannot be decrypted without the key. 

Let's encrypt the word "sololearn" with the key "web".

**Word:** _sololearn_
**Key:** _web_
**Encrypted message:** _osmwpfwvo_

The explanation follows:
```
w e b w e b w e b
s  o l  o  l  e a  r n

w + s = o
e + o = s
b + l = m
w + o = w
e + l = p
b + e = f
w + a = w
e + r = v
b + n = o

```

::: warning Note
Specials characters are not used is this type of cipher.
:::