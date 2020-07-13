# Protocolo de intercambio de claves Diffie-Hellman

El intercambio de claves Diffie-Hellman (DH) fue el primer algoritmo de clave pública inventado (1976). Obtiene su seguridad de la dificultad de calcular logaritmos discretos en un campo finito, en comparación con la facilidad de calcular la exponenciación en el mismo campo.

Diffie-Hellman se puede usar para la distribución de claves. Alice y Bob pueden usar este algoritmo para generar una clave secreta, pero no se puede usar para cifrar y descifrar mensajes. Por eso se le conoce como el "Protocolo de intercambio de claves Diffie-Hellman".

El objetivo es que Alice y Bob tengan una clave secreta mutua sin usar un canal seguro o una reunión segura (tenga en cuenta que no pueden verse cara a cara).

Primero, Alice y Bob están de acuerdo en un número primo grande, n y g, de modo que g es un modo primitivo n (en aritmética modular, un número g es un módulo raíz primitivo n si cada número un número primo de n es congruente con una potencia de g módulo n). Estos dos enteros no tienen que ser secretos; Alice y Bob pueden aceptarlos a través de algún canal inseguro. Incluso pueden ser comunes entre un grupo de usuarios. No importa. Luego, el protocolo es el siguiente:

1. Alice elige un entero grande aleatorio x y lo envía a Bob X que se calcula de la siguiente manera:

```
X = g ^ x (mod n)
```

2. Bob elige un entero grande aleatorio y y lo envía a Alice Y que se calcula de la siguiente manera:

```
Y = g ^ y (mod n)
```

3. Alice calcula k de la siguiente manera:

```
k = Y * x (mod n)
```

4. Bob calcula k´ de la siguiente manera:

```
k´ = X * y (mod n)
```

Tanto k como k´ son iguales a g^(x * y) mod n. Nadie que esté escuchando en el canal puede calcular ese valor; solo saben n, g, X e Y. A menos que puedan calcular el logaritmo discreto y recuperar x o y, no pueden resolver el problema. Entonces, k es la clave secreta que tanto Alice como Bob calcularon de forma independiente y hemos alcanzado el objetivo.

::: warning Nota

La elección de g y n puede tener un impacto sustancial en la seguridad de este sistema. Se basa en la dificultad de factorizar números del mismo tamaño que n.
:::