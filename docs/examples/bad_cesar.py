"""
El siguiente codigo toma una cadena y realiza el CIFRADO CESAR o tambien conocido
como cifrado por desplazamiento. Es un tipo de cifrado por sustitucion en el que una
letra en el texto original es reemplazada por otra letra que se encuentra un numero
fijo de posiciones mas adelante en el alfabeto. Por ejemplo, con un desplazamiento de 3,
la A seria sustituida por la D (situada 3 lugares a la derecha de la A), la B seria
reemplazada por la E, la Z seria reemplazada por la C (al ser la Z la ultima letra, el conteo
debe reiniciarse, en este caso no se consideran simbolos), etc.

https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar
"""


class BadCesar():
    def __init__(self, key: int):
        self.__key = key  # clave de desplazamiento
        # simbolos permitidos
        self.SYMBOLS = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz1234567890 !?."

    def encrypt(self, message):
        translated = ""
        for symbol in message:
            # si es un caracter permitido
            if symbol in self.SYMBOLS:
                # obtenemos el indice/position
                symbolIndex = self.SYMBOLS.find(symbol)
                symbolIndex += self.__key
                if symbolIndex >= len(self.SYMBOLS):
                    symbolIndex -= len(self.SYMBOLS)
                translated += self.SYMBOLS[symbolIndex]
            else:
                translated += symbol
        return translated

    def decrypt(self, message):
        translated = ""
        for symbol in message:
            # si es un caracter permitido
            if symbol in self.SYMBOLS:
                # obtenemos el indice/position
                symbolIndex = self.SYMBOLS.find(symbol)
                symbolIndex -= self.__key
                if symbolIndex < 0:
                    symbolIndex += len(self.SYMBOLS)
                translated += self.SYMBOLS[symbolIndex]
            else:
                translated += symbol
        return translated
