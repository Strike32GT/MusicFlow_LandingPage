# MusicFlow Landing Page — Memoria permanente

Este archivo reúne las reglas y los datos que no deben olvidarse al trabajar en el proyecto. Debe leerse completo junto con `CONTEXT.md` antes de realizar cambios.

## Flujo obligatorio para cada cambio

1. Revisar `git status` antes de editar y conservar cambios ajenos o no relacionados.
2. Leer `MEMORY.md`, `CONTEXT.md` y `AGENTS.md` antes de implementar.
3. Seguir las prácticas recomendadas de Astro y consultar su documentación oficial cuando la tarea afecte rutas, componentes, estilos, contenido o integraciones.
4. Implementar el cambio en el código fuente; no editar manualmente archivos generados dentro de `dist/`.
5. Validar en proporción al cambio. Como mínimo, ejecutar `npm run build`.
6. Regenerar `dist/` después de cada cambio para que la salida local de producción coincida con el código fuente. Actualmente `dist/` está ignorado por Git, por lo que se actualiza localmente pero no se incluye en el commit.
7. Revisar `git diff --check` y cualquier comprobación funcional relevante.
8. No preparar ni crear un commit si existe un error conocido de compilación, validación o funcionamiento relacionado con la tarea. Resolver primero todos los errores posibles.
9. Cuando las comprobaciones terminen correctamente, crear un commit de Git limitado a los archivos de la tarea.
10. No ejecutar `git push`. El usuario realizará el push desde su terminal.

Si una validación requiere una dependencia no instalada, no instalarla ni modificar dependencias sin necesidad. Utilizar las verificaciones disponibles, documentar la limitación y no afirmar que una comprobación se ejecutó si no fue así.

## Convenciones de Git

- Usar mensajes de commit claros y específicos, preferentemente con prefijos como `feat:`, `fix:`, `docs:`, `refactor:` o `chore:`.
- No usar `git reset --hard`, `git checkout --` ni comandos destructivos para descartar trabajo.
- No modificar commits anteriores con `--amend` salvo petición expresa del usuario.
- No incluir archivos temporales, resultados de investigación ni artefactos ajenos a la tarea.
- Antes del commit, comprobar exactamente qué archivos quedarán incluidos.
- Si el worktree contiene cambios ajenos, dejarlos fuera del commit siempre que sea posible.

## Tecnología y comandos

- Framework: Astro.
- Estilos: Tailwind CSS y `src/styles/global.css`.
- Salida: sitio estático en `dist/`.
- Compilación de producción: `npm run build`.
- Servidor de desarrollo: usar modo de segundo plano según `AGENTS.md`: `astro dev --background`.
- No introducir React solamente para iconos o interacciones simples. Preferir HTML, Astro y JavaScript del navegador.
- Los iconos de marca usados en la landing se cargan con Font Awesome mediante su versión HTML.
- Respetar accesibilidad: navegación por teclado, foco visible, etiquetas accesibles, contraste y `prefers-reduced-motion`.
- Mantener la experiencia responsive en móvil, tablet y escritorio.

## Rutas del sitio

- `/` — landing principal.
- `/documentacion` — documentación funcional y técnica.
- `/artistas` — portal informativo para artistas.

## Enlaces oficiales vigentes

- Aplicación e inicio de sesión: `https://musicflowapp.net/`
- Acceso para artistas: `https://musicflowapp.net/artist-login`
- Instagram: `https://www.instagram.com/musicflow_oficial/`
- Discord: `https://discord.gg/M5gZ5Dbfp`
- Video demo móvil: `https://pub-379cc6f935d24bca91216ed62a5ed5f3.r2.dev/MusicFlow_Demo_MObile.mp4`
- Video demo web: `https://pub-379cc6f935d24bca91216ed62a5ed5f3.r2.dev/Video-Demo-WebMusicFlow.mp4`
- Video demo de escritorio: `https://pub-379cc6f935d24bca91216ed62a5ed5f3.r2.dev/Video-DesktopWindows-MusicFlow.mp4`
- APK Android: `https://pub-6f2b26bf8b324bb89b330c8446a750c0.r2.dev/Mobile/Android/MusicFlowV1-Mobile.apk`

Los botones “Iniciar sesión” y “Escuchar ahora” deben abrir la aplicación principal. Todos los botones “Crear perfil” o “Crear perfil de artista” deben abrir el acceso para artistas.

## Descargas

- Web abre directamente `https://musicflowapp.net/`.
- El menú móvil ofrece Android mediante APK. La opción de iPhone fue eliminada.
- El menú de escritorio contempla Windows `.exe` y Linux mediante instalador o MediaFire.
- El enlace Android está publicado. Los enlaces de Windows y Linux siguen pendientes y se presentan con un tutorial de instalación próximo a publicarse.
- Cuando el usuario entregue los enlaces, actualizar el menú, este archivo y `CONTEXT.md`, validar las descargas y regenerar `dist/`.

## Datos funcionales verificados

- Ecualizador integrado de 10 bandas: 32, 64, 125, 250, 500, 1k, 2k, 4k, 8k y 16k Hz.
- Rango de ganancia documentado: −15 dB a +15 dB.
- Presets incluidos: Flat, Bass Boost, Treble Boost, Vocal, Rock, Electronic, Acoustic y Classical.
- La ecualización por segmentos es una función Premium.
- FlowIA es una función Premium y admite hasta 200 solicitudes mensuales según la implementación revisada.
- Plan Premium: S/ 13 al mes.
- El plan gratuito admite hasta 5 presets personalizados y no incluye FlowIA ni ecualización por segmentos.
- Para artistas solo se admiten archivos WAV y FLAC. No afirmar que se aceptan MP3, M4A, OGG, AAC, AIFF u otros formatos.
- Límite de carga documentado: 50 MB.
- No existe monetización implementada para artistas. No mencionar ingresos, porcentajes, pagos o reparto de regalías.
- Versión pública de la documentación: `v1.0.0`.
- Última actualización mostrada: noviembre de 2026.

## Diseño y contenido que deben conservarse

- Identidad visual clara, luminosa y predominantemente azul; evitar regresar a una paleta excesivamente oscura.
- El logo oficial es `assets/music-flow.png` y se utiliza en navbar, hero y tabla comparativa.
- El logo principal del hero tiene una animación vertical suave y debe respetar reducción de movimiento.
- La visualización de EQ anima las diez bandas de abajo hacia arriba y su estado activo se expresa como “ON” con una luz verde brillante.
- Los títulos principales de la landing, el título de Planes y el título del portal de artistas usan una entrada elegante y deben respetar reducción de movimiento.
- La tabla comparativa usa `assets/Spotify.png` y `assets/YTMusic.png`.
- El gráfico del portal de artistas anima sus barras al entrar en el viewport y respeta `prefers-reduced-motion`.
- El video móvil se reproduce automáticamente, silenciado y en bucle, sin controles de descarga visibles.
- Las tres miniaturas de plataforma muestran sus videos automáticamente, silenciados y en bucle.
- Las páginas Documentación, Artistas y Requisitos declaran el favicon de MusicFlow.
- El portal de artistas revela títulos grandes al desplazarse, anima sus estadísticas y cambia el estado de carga de las canciones a “Listo”.
- La documentación debe explicar las funciones en lenguaje comprensible y con precisión técnica, sin inventar capacidades.
- Los atajos de teclado no tienen una sección propia; cualquier aclaración debe mantenerse en preguntas frecuentes.

## Criterio de veracidad

No publicar precios, límites, plataformas, requisitos, formatos, enlaces o funciones sin respaldo en el proyecto o confirmación del usuario. Si falta un dato necesario, dejarlo claramente pendiente o solicitarlo. La landing no debe prometer funciones aún no implementadas.

## Mantenimiento de esta memoria

Actualizar este archivo cuando cambie cualquiera de los siguientes elementos:

- flujo de compilación, validación, despliegue o commits;
- dependencias o arquitectura de Astro;
- URLs oficiales o enlaces de descarga;
- precios, límites o planes;
- formatos admitidos;
- funciones disponibles o pendientes;
- estructura de rutas;
- decisiones visuales permanentes.

No registrar aquí detalles efímeros, resultados temporales ni información secreta.
