# Cifrado simétrico

**Los algoritmos de clave simétrica** son algoritmos para criptografía que usan las mismas claves criptográficas para el cifrado de texto plano y descifrado de texto cifrado.

<center>
    <img src = "https://blog.emsisoft.com/wp-content/uploads/2017/06/symmetric_encryption_graphic_en-730x409.png" width="500">
</center>

El primer y más simple ejemplo de un cifrado simétrico es el cifrado César. Es un tipo de cifrado de sustitución en el que cada carácter en el texto sin formato se reemplaza por un carácter con un número fijo de posiciones hacia arriba o hacia abajo en el alfabeto. Veamos cómo funciona en un ejemplo de código.

Por ejemplo, si elegimos la clave de cifrado como "desplazamiento a la derecha por 3" sería:

```cpp
string encText = CaesarEncrypt ();
...
string plainText = "Some_Test_Example";
...
plainText[iter] += 3;
```

::: warning Nota

Si observa los códigos de caracteres ANSI, los caracteres más comunes están entre 33 y 122, 124 y 126. Recuerde que el último cambio de caracteres debe volver al principio y viceversa.
:::

Como puede predecir, la clave de descifrado, en este caso, será "desplazamiento a la izquierda por 3":
```cpp
string decrText = CaesarDecrypt (encText);
 ...
encText[iter] -= 3;
```

::: warning Nota

Casi todos los sistemas criptográficos modernos todavía usan algoritmos de clave simétrica internamente para encriptar la mayor parte de los mensajes. Los cifrados simétricos se usan comúnmente para lograr otras primitivas criptográficas además del cifrado.
:::