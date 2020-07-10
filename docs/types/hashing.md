# Hashing

**Hashing** significa generar valor o valores a partir de una cadena de texto utilizando una función matemática.

El hash es una forma de habilitar la seguridad durante el proceso de transmisión del mensaje cuando el mensaje está destinado solo a un destinatario en particular. Una fórmula genera el hash, que ayuda a proteger la seguridad de la transmisión contra la manipulación.

Cuando un usuario envía un mensaje seguro, se genera y encripta un hash del mensaje deseado y se envía junto con el mensaje. Cuando se recibe el mensaje, el receptor descifra el hash y el mensaje. Luego, el receptor crea otro hash del mensaje. Si los dos hashes son idénticos en comparación, se ha producido una transmisión segura. Este proceso de hash asegura que un usuario final no autorizado no altere el mensaje.

Aquí hay un pequeño ejemplo en Python que encripta "Hello World" en SHA-1 (Secure Hashing Algorithm):

```python
import hashlib
hash_object = hashlib.sha1(b'Hello World')
hex_dig = hash_object.hexdigest()

print(hex_dig)
```
::: tip Nota
Obtendrá una cadena larga que es hash por el algoritmo SHA-1 parecida a esta:
_0a4d55a8d778e5022fab701977c5d840bbc486d0_
:::