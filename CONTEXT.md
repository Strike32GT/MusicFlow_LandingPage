# MusicFlow Landing Page — Contexto del proyecto

## Resumen

MusicFlow Landing Page es el sitio público de presentación de MusicFlow, una plataforma musical multiplataforma orientada a ofrecer control detallado sobre la experiencia de escucha. La propuesta central combina reproducción musical, ecualización integrada, ajustes temporales por segmentos y asistencia mediante FlowIA.

La landing no es la aplicación musical. Su función es explicar el producto, presentar sus ventajas, dirigir a las personas hacia la aplicación web, documentar sus funciones y ofrecer un acceso específico para artistas.

## Propósito

El sitio debe conseguir que una persona entienda rápidamente:

1. qué es MusicFlow;
2. qué lo diferencia de otros servicios musicales;
3. cómo funciona su ecualización;
4. qué ofrece FlowIA;
5. en qué plataformas está disponible;
6. cuál es la diferencia entre el plan gratuito y Premium;
7. cómo acceder a la aplicación;
8. cómo comenzar como artista.

El contenido debe ser atractivo, pero siempre verídico. La precisión del producto tiene prioridad sobre el lenguaje promocional.

## Público objetivo

- Personas que escuchan música y quieren personalizar graves, medios y agudos.
- Usuarios interesados en audio WAV/FLAC y ajustes de escucha más detallados.
- Personas que quieren crear playlists o recibir sugerencias de ecualización mediante lenguaje natural.
- Usuarios que buscan una experiencia sincronizada entre web, móvil y escritorio.
- Artistas que desean publicar música en WAV o FLAC, definir presets oficiales y consultar estadísticas de audiencia.

## Propuesta de valor

MusicFlow integra el control del sonido dentro del reproductor. El usuario puede trabajar con una EQ de diez bandas, guardar presets y, con Premium, aplicar configuraciones diferentes a tramos concretos de una canción. FlowIA permite describir mediante texto la playlist o el carácter sonoro que se busca.

La experiencia debe comunicarse como potente pero comprensible: no se presupone que el visitante conozca conceptos técnicos de audio.

## Arquitectura de información

### Landing principal — `/`

La página principal contiene:

- navbar con acceso a características, plataformas, comparativa, comunidad, documentación y artistas;
- hero con el mensaje “Tu música, ecualizada a tu manera”;
- botón “Escuchar ahora” que abre `https://musicflowapp.net/`;
- presentación del ecualizador y de FlowIA;
- sección de características;
- sección de plataformas para Web, Móviles y Escritorio;
- menú de descargas por sistema operativo;
- tabla comparativa con Spotify y YouTube Music;
- enlaces de comunidad para Instagram y Discord;
- footer de navegación.

### Documentación — `/documentacion`

Es una guía funcional y técnica para usuarios. Explica:

- introducción e inicio rápido;
- requisitos generales del sistema;
- qué es la ecualización y por qué está integrada;
- bandas, ganancia y presets;
- calidad y carga de WAV/FLAC;
- segmentación temporal;
- FlowIA;
- planes Free y Premium;
- preguntas frecuentes.

La documentación debe evitar especificaciones ficticias. Para artistas, la carga admite exclusivamente WAV y FLAC, con un límite documentado de 50 MB.

### Artistas — `/artistas`

Presenta el flujo para:

- crear un perfil de artista;
- subir canciones WAV o FLAC;
- añadir información del lanzamiento;
- publicar presets de ecualización oficiales;
- revisar estadísticas de audiencia.

Los accesos de creación de perfil dirigen a `https://musicflowapp.net/artist-login`.

El portal no debe mencionar monetización, ingresos, regalías, porcentajes o calendarios de pago porque esas funciones no están implementadas.

## Plataformas y descargas

- Web: disponible en `https://musicflowapp.net/` y no requiere instalación.
- Móvil: Android se descarga mediante APK; la opción de iPhone no se muestra.
- Escritorio: el diseño contempla Windows y Linux; la descripción general también menciona macOS como plataforma de escritorio.

El menú de descargas abre una confirmación para ver el tutorial de instalación. Android enlaza al APK publicado. Windows y Linux muestran que el tutorial está próximo a publicarse hasta recibir sus enlaces de instalación. Cada menú presenta un enlace a `/requisitos` con requisitos mínimos y recomendables de la plataforma elegida. En el sitio estático, la página lee en el navegador `?plataforma=mobile` o `?plataforma=desktop` para renderizar el contenido correcto. Android muestra una tabla de sistema operativo, descarga APK, almacenamiento, conectividad y audio; no incluye procesador, RAM ni pantalla. Escritorio indica Windows 10 de 64 bits como mínimo y compatibilidad Linux con Ubuntu, Debian y Arch Linux.

## Planes

### Free

- reproducción y biblioteca musical;
- EQ de 10 bandas;
- hasta 5 presets personalizados;
- anuncios entre canciones;
- sin FlowIA;
- sin ecualización por segmentos.

### Premium

- precio: S/ 13 al mes;
- sin anuncios;
- descargas para escuchar sin conexión;
- FlowIA con hasta 200 solicitudes mensuales;
- ecualización por segmentos.

## Dirección visual

El diseño está inspirado en una interfaz musical moderna, clara y accesible. La estética utiliza fondos blancos o azules muy suaves, azul intenso como color de acción, tarjetas luminosas y tipografía de alta legibilidad.

Principios visuales:

- evitar interfaces excesivamente oscuras;
- mantener una jerarquía tipográfica clara;
- usar el azul de MusicFlow para llamadas a la acción;
- conservar espacios amplios y componentes redondeados;
- utilizar animaciones con propósito, no decorativas en exceso;
- respetar las preferencias de movimiento reducido;
- conservar contraste, foco visible y navegación por teclado;
- mantener consistencia responsive.

Elementos distintivos:

- logo oficial flotante en el hero;
- representación visual de la EQ de diez bandas;
- bandas de EQ que ascienden de forma escalonada, varían sus niveles de forma dinámica y un indicador “ON” con luz verde para expresar que está activa;
- videos de demostración de Web, Móvil y Escritorio en reproducción automática;
- entradas elegantes para los títulos principales, sin interferir con `prefers-reduced-motion`;
- gráfico de estadísticas que carga al entrar en pantalla;
- iconos de plataforma y comunidad mediante Font Awesome HTML.
- tabla comparativa con una entrada escalonada de sus estados y tarjetas de planes que se destacan solo al pasar el cursor; Premium incorpora una corona.

## Arquitectura técnica

- Astro genera un sitio estático.
- Las páginas viven en `src/pages/`.
- Los estilos compartidos viven en `src/styles/global.css` y se complementan con Tailwind CSS.
- Los recursos públicos están en `public/` y los recursos importados pueden estar en `assets/`.
- La salida de producción se genera en `dist/`.
- No se necesita React para las interacciones actuales: los diálogos, observadores y eventos se implementan con JavaScript del navegador.

## Despliegue y entrega

El repositorio se prepara para que el usuario solo tenga que ejecutar `git push`. Antes de cada commit se debe:

1. completar la implementación;
2. resolver los errores detectados;
3. ejecutar la compilación de producción;
4. regenerar `dist/` localmente;
5. revisar el diff;
6. crear un commit descriptivo.

El agente no realiza el push. `dist/` está ignorado actualmente por Git, por lo que Cloudflare Pages o el proveedor de despliegue debe construir el sitio desde el código fuente durante el despliegue.

## Límites actuales y trabajo pendiente

- Faltan las URLs reales de descarga para Android, Apple, Windows y Linux/MediaFire.
- No existe monetización para artistas.
- No deben publicarse atajos globales no verificados.
- No se deben añadir formatos de carga distintos de WAV y FLAC.
- Cualquier capacidad futura debe confirmarse en la aplicación o por el usuario antes de anunciarse.

## Definición de calidad

Una tarea está terminada cuando:

- cumple la solicitud sin introducir promesas falsas;
- funciona en las rutas afectadas;
- mantiene accesibilidad y responsive design;
- la compilación de producción finaliza sin errores;
- `dist/` se regenera;
- `MEMORY.md` y `CONTEXT.md` siguen siendo correctos;
- no quedan archivos temporales;
- el commit contiene únicamente los cambios pertinentes;
- el usuario puede ejecutar `git push` sin preparar trabajo adicional.
