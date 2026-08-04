Aquí tienes el contenido detallado de la fuente **"Pre-Tesis Exposición Grupo C21 Mas-Montoya (1).pdf"**, organizado por el contenido de sus diapositivas en formato Markdown:

# MusicFlow - Pre-Tesis StartUp 2026

### Diapositiva 1: Portada
*   **Título del Proyecto:** MUSICFLOW.
*   **Subtítulo:** App multiplataforma de reproducción musical con ecualización personalizada multinivel, asistida por un agente de Inteligencia Artificial.
*   **Integrantes:** Aldy Montoya y Fernando Mas.
*   **Contexto:** Pre-Tesis || StartUp || Tecsup 2026-1.
*   **Elementos Visuales:** Logo de la aplicación y mockups de la interfaz en una laptop y un smartphone.

### Diapositiva 2: Índice
*   **Contenidos de la presentación:**
    1.  Introducción.
    2.  Solución.
    3.  Stack tecnológico.
    4.  Arquitectura del sistema.
    5.  Base de datos.
    6.  Cronograma.
    7.  Resultados.

### Diapositiva 3: Introducción y Problemática
*   **Descripción:** El consumo de música digital es parte de la rutina de jóvenes en Lima Metropolitana.
*   **Problemas identificados:**
    *   **Ecualización limitada:** Dependencia de extensiones en web/desktop y opciones básicas en móviles.
    *   **Calidad de audio insuficiente:** El uso de formato MP3 comprimido reduce la fidelidad y limita los efectos de la ecualización.
    *   **Ausencia de IA integrada:** Falta de asistentes que configuren el audio mediante lenguaje natural.

### Diapositiva 4: La Solución
*   **Concepto:** Una experiencia musical inteligente y personalizada.
*   **Propuesta:** Aplicación multiplataforma que combina ecualización multinivel y un asistente de IA capaz de interpretar instrucciones en lenguaje natural para personalizar el sonido.
*   **Funcionalidades:** Reproducción, gestión de biblioteca y configuración de audio vía chat de IA con consistencia entre dispositivos.

### Diapositiva 5: Objetivos, Alcance y Valores
*   **Objetivo General:** Desarrollar una app con ecualización inteligente asistida por IA para personalizar el audio por canción, playlist o de forma global.
*   **Alcance:** Implementar gestión de biblioteca, sincronización entre dispositivos y versiones para web, móvil y escritorio.
*   **Valores del Proyecto:** Personalización, innovación, simplicidad y accesibilidad.

### Diapositiva 6: Stack Tecnológico
*   **Frontend:** React, Flutter, Electron, TailwindCSS y Stich.
*   **Backend:** NestJS, JWT, PostgreSQL, CloudFlare, Redis, Claude-API (Anthropic) y Render.

### Diapositiva 7: Arquitectura del Sistema
*   **Clientes:** Web App (React 18 + Vite), Desktop (Electron 30+), Mobile (Flutter 3.x).
*   **Componentes Técnicos:**
    *   **Capa Web/Desktop:** Zustand para estado y Web Audio API para el motor de ecualización.
    *   **Capa Mobile:** Riverpod 2, Drift SQLite (offline) y motor `just_audio`.
    *   **Backend:** API REST con NestJS 10, persistencia en PostgreSQL 16 (Prisma 5 ORM) y Redis para caché.
    *   **Servicios Externos:** Stripe (pagos), Claude API (sugerencias de EQ) y FCM (notificaciones push).

### Diapositiva 8: Base de Datos
*   **Detalle:** Diagrama de Entidad-Relación (DER) que incluye tablas para usuarios, dispositivos, estadísticas de escucha, preferencias, canciones (tracks), playlists, solicitudes de IA (`AIRequest`), configuraciones de ecualización (`EQConfig`) e historial de reproducción.

### Diapositiva 9: Cronograma de Desarrollo (Abril)
*   **Análisis:** Identificación de necesidades y alcance al inicio de abril.
*   **Prototipado:** Definición de interfaces y UX el 11 de abril.
*   **Frontend:** Inicio del desarrollo web y móvil el 19 de abril.
*   **Backend:** Configuración de la API y autenticación el 24 de abril.

### Diapositiva 10: Resultados Esperados
*   **Mejora de experiencia:** Personalización sencilla y precisa mediante el sistema de ecualización asistido por IA.
*   **Eficiencia multiplataforma:** Sincronización de datos consistente y acceso a funciones avanzadas desde cualquier entorno (web, móvil o escritorio).

### Diapositiva 11: Conclusiones y Cierre
*   **Sección:** CONCLUSIONES.
*   **Cierre:** ¡GRACIAS! - Tecsup 2026.