# Hashing

**Hashing** means generating value or values from a string of text using a mathematical function.

Hashing is one way to enable security during the process of message transmission when the message is intended for a particular recipient only. A formula generates the hash, which helps to protect the security of the transmission against tampering.

When a user sends a secure message, a hash of the intended message is generated and encrypted and is sent along with the message. When the message is received, the receiver decrypts the hash as well as the message. Then, the receiver creates another hash from the message. If the two hashes are identical when compared, then a secure transmission has occurred. This hashing process ensures that an unauthorized end user does not alter the message.

Here is a small example in Python that encrypts "Hello World" in SHA-1 (Secure Hashing Algorithm):

```python
import hashlib
hash_object = hashlib.sha1(b'Hello World')
hex_dig = hash_object.hexdigest()

print(hex_dig)
```
::: tip Example
Get a long string that is hashed by the SHA-1 algorithm similar to this:
_0a4d55a8d778e5022fab701977c5d840bbc486d0_
:::

::: warning Nota

Hashing is used to index and retrieve items in a database because it is easier to find the item using the shortened hashed key than by using the original value.
:::