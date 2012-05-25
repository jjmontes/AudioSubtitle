AudioSubtitle
=============

Reproductor de subtítulos para archivos de audio.

"AudioSubtitle" utiliza HTML5 para poder repdroducir un archivo de subtítulo asociado a un archivo de audio, sincronizado según el tiempo de reproducción del archivo de audio.

Estructura del proyecto
=======================
El proyecto esta dividido en 3 partes:
 1. remotetextfile: Contiene un mini-proyecto que lee archivos remotos. Depende de jQuery.
 2. subtitle: Contiene un mini-proyecto que lee e interpreta archivos de subtitulos. Depende del proyecto "remotetextfile".
 3. audiosubtitle: Contiene el mini-proyecto que subtitula archivos de audio. Depende del proyecto "subtitle".

Soporte
=======
Esta es una librería expermiental, por lo que podría contener errores. 

//TODO:
=======
Algunas mejoras interesantes a realizar podrían ser:
- Validar que el archivo de subtítulo tenga el formato correcto.
- Lectura asincrónica del archivo.
- Especificar archivo de subtítulo, hoy el archivo de subtítulos debe llamarse exactamente como el de audio, cambiando la extensión por SRT.
- Especificar idioma del archivo del subtítulo a reproducir.
- Encoding de subtítulos.

Contacto
=======
Twitter - @jjmoa

e-Mail - juanjose.montesdeocaarbos [at] gmail.com
