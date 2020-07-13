# Firma digital

Imagina que Alice quiere enviar un mensaje a Bob. El sistema usa encriptación RSA y nadie puede leer el mensaje porque el mensaje está encriptado. ¿Cómo puede saber Bob que el mensaje llegó correctamente de Alice? Una firma digital puede ayudar.

Una firma digital es un esquema matemático para presentar la autenticidad de mensajes o documentos digitales. Una firma digital válida le da al destinatario una razón para creer que el mensaje fue creado por un remitente conocido (autenticación).

Las firmas digitales son elementos estándar de la mayoría de los conjuntos de protocolos criptográficos y se usan comúnmente para la distribución de software, transacciones financieras y software de gestión de contratos.

¿Entonces, cómo funciona?
Uno de los métodos es cifrar una etiqueta especial (que puede incluir su nombre, ID o cualquier otra información personal) con su clave privada, que puede descifrarse solo con su clave pública y enviar la etiqueta con su mensaje. Luego, el receptor puede verificar la autenticidad utilizando la clave pública del remitente.

Otro método es obtener el código hash de su mensaje y descifrarlo con la clave privada, y luego enviarlo con el mensaje. Este método también le brinda la oportunidad de verificar la integridad del mensaje. Como vimos en la lección de hash, si cambiamos incluso un carácter del mensaje, la función hash nos da un código hash completamente diferente.

::: warning Nota

PGP (Pretty Good Privacy) es un sistema criptográfico que incluye hashing, cifrados simétricos y asimétricos, firmas digitales y más.
:::