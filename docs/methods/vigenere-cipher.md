# Vigenère Cipher

El **cifrado de Vigenère** es un método para cifrar texto alfabético utilizando la posición de la letra de la entrada más la posición de la letra de la clave.
La clave es una palabra decidida por el usuario y se mantiene en secreto.
El mensaje no se puede descifrar sin la clave.

Encriptemos la palabra "sololearn" con la clave "web".

**Palabra:** _sololearn_

**Clave:** _web_

**Mensaje cifrado:** _osmwpfwvo_

La explicación a continuación:
```
w e b w e b w e b
s o l o l e a r n

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

::: warning Nota

No se utilizan caracteres especiales en este tipo de cifrado.
:::