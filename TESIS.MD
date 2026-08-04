# Plan de Proyecto de Fin de Carrera (PFC) - MusicFlow

## 1. Información General
* **Título del Proyecto:** MusicFlow – Aplicación multiplataforma de reproducción musical con ecualización personalizada multi-nivel asistida por un agente de inteligencia artificial.
* **Participantes:**
  * **Responsables:** Fernando Mas Pinto y Aldy Jenxy Cuadros.
  * **Asesor:** Jaime Farfan.
  * **Jefe de Departamento:** Ingrid Ccoyllo.
* **Línea de Titulación:** StartUp.
* **Fecha de Registro:** 20 de abril de 2023.

---

## 2. Justificación del Problema
* **Limitaciones Actuales:** Las aplicaciones de streaming (como Spotify o YouTube Music) y reproductores locales ofrecen ecualizadores globales que se aplican uniformemente, sin considerar que cada canción o género tiene necesidades sonoras únicas.
* **Barrera Técnica:** Configurar correctamente un ecualizador de 10 bandas requiere conocimientos de ingeniería de audio que el usuario común no posee, limitándose usualmente a usar "presets" genéricos.
* **Necesidad No Cubierta:** Los usuarios no pueden aplicar perfiles de audio distintos a secciones específicas (como el coro o las estrofas) de una misma canción.

---

## 3. Propuesta de Solución
MusicFlow propone una plataforma multiplataforma (web, escritorio y móvil) con las siguientes innovaciones:
* **Personalización Granular:** Permite ecualizar a nivel global, por lista de reproducción, por canción e incluso por segmentos temporales (intro, coro, puente).
* **Agente de IA:** Un asistente que interpreta peticiones en lenguaje natural (ej. "haz que suene más cálida" o "quiero más bajos en el coro") para configurar automáticamente el audio, eliminando la complejidad técnica para el usuario.

---

## 4. Resultados Finales Esperados

### Sistema de Ecualización (Resultado 1)
* Motor de audio en tiempo real con un ecualizador de **10 bandas** (desde 31Hz hasta 16kHz).
* Rango de ajuste de **-15dB a +15dB**.
* Efectos adicionales: Bass boost, virtualizer, loudness enhancer y reverb con 9 presets.

### Módulo de Segmentos Temporales (Resultado 2)
* Definición de rangos de tiempo específicos dentro de una pista musical.
* Transiciones automáticas y suaves entre las configuraciones de cada segmento.
* Incluye un **editor visual interactivo** tipo timeline.

### Agente de Inteligencia Artificial (Resultado 3)
* Basado en modelos de lenguaje (LLM) de última generación.
* Generación automática de configuraciones óptimas y segmentos temporales según la descripción del usuario.
* Sistema de retroalimentación (*feedback loop*) para mejorar las sugerencias progresivamente.

### Infraestructura Tecnológica (Resultado 4)
* **Arquitectura:** Híbrida con almacenamiento local y sincronización en la nube.
* **Backend:** Desarrollado en **Django** con base de datos **PostgreSQL**.
* **Frontend (Web/Escritorio):** **React + Electron**.
* **Móvil:** **Flutter 3.41**.
* **Sincronización:** Acceso consistente a biblioteca y configuraciones desde cualquier dispositivo.

---

## 5. Pilares Estratégicos

### Misión y Visión (Propósito Central)
Aunque el documento no utiliza los términos "Misión" o "Visión" explícitamente, define un propósito claro:
* **Misión:** Desarrollar una aplicación multiplataforma que democratice el **acceso a experiencias sonoras personalizadas de alta calidad**, eliminando la barrera técnica que supone la ingeniería de audio para el usuario común.
* **Visión (Propósito):** Transformar la forma en que se consume música digital, permitiendo que cada canción, género o sección musical reciba el tratamiento sonoro único que requiere para su máxima apreciación.

---

### Valores del Proyecto
Basado en los objetivos y la descripción de la solución, los valores fundamentales son:
* **Personalización:** Control total desde niveles globales hasta segmentos específicos de una canción.
* **Innovación:** Integración de agentes de **Inteligencia Artificial** de última generación para la gestión del audio.
* **Simplicidad:** Uso de **lenguaje natural** para realizar ajustes técnicos complejos de forma intuitiva.
* **Accesibilidad:** Sincronización multiplataforma (web, escritorio y móvil) para que el usuario acceda a sus preferencias desde cualquier lugar.

---

### Diferenciación frente a Competidores
MusicFlow se posiciona como una alternativa superior a aplicaciones líderes como **Spotify, Apple Music, YouTube Music, Poweramp o VLC** por las siguientes razones:

1. **Granularidad de Ecualización (vs. Ecualizadores Globales):**
   * **Competencia:** La mayoría ofrece ecualizadores globales que se aplican de manera uniforme a toda la biblioteca.
   * **MusicFlow:** Permite ecualizar en múltiples niveles: **global, por lista, por canción y por segmentos temporales** (intro, coro, puente) con transiciones suaves entre ellos.

2. **Eliminación de la Barrera Técnica mediante IA:**
   * **Competencia:** Ajustar 10 bandas de frecuencia (31Hz a 16kHz) requiere conocimientos técnicos que la mayoría no posee, limitando al usuario a "presets" genéricos.
   * **MusicFlow:** El **Agente de IA** interpreta peticiones sencillas (ej. "haz que suene más cálida" o "más bajos en el coro") y genera automáticamente la configuración óptima.

3. **Control Temporal Específico:**
   * MusicFlow resuelve el problema de usuarios que quieren, por ejemplo, resaltar bajos en un coro pero mantener un perfil neutro en las estrofas, una funcionalidad inexistente en las herramientas actuales del mercado.

4. **Ecosistema Multiplataforma Sincronizado:**
   * A diferencia de muchos reproductores locales avanzados que solo están en móvil, MusicFlow garantiza una **arquitectura híbrida** con sincronización en la nube entre Web (React), Desktop (Electron) y Móvil (Flutter).
