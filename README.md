
# Code Companion 🚀

¡Bienvenido a Code Companion! El propósito de este proyecto es actuar como un asistente de programación personal.

Utiliza la API de un modelo de lenguaje avanzado para potenciar un chat interactivo donde puedes hacer preguntas de programación y obtener ayuda instantánea. Es la herramienta perfecta para resolver dudas, aprender nuevos conceptos y mejorar tu flujo de trabajo como desarrollador.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:**
  - [Angular](https://angular.io/)
  - [Angular Material](https://material.angular.io/) para los componentes de la UI.
  - [TypeScript](https://www.typescriptlang.org/)
- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/) para el servidor y las rutas de la API.

---

## 📂 Estructura del Proyecto

Este repositorio es un **monorepo**, lo que significa que contiene ambos proyectos en un solo lugar para facilitar su gestión.

- `backend/`: Contiene todo el código del servidor de Node.js.
- `frontend/ui/`: Contiene la aplicación de cliente desarrollada con Angular.

---

## ⚙️ Instalación y Puesta en Marcha

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

### Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (que incluye npm).

### 1. Clonar el Repositorio

```bash
git clone https://github.com/luissmora/code-companion.git
cd code-companion
```

### 2. Configurar el Backend

```bash
# Navega a la carpeta del backend
cd backend

# Instala las dependencias
npm install

# Crea un archivo .env en la carpeta `backend` y añade tu clave de API.
# Ejemplo de contenido para `.env`:
# API_KEY=tu_clave_de_openai_aqui

# Inicia el servidor
node server.js
```
El servidor del backend se ejecutará en `http://localhost:3000` (o el puerto que esté configurado).

### 3. Configurar el Frontend

En una **nueva terminal**, navega a la carpeta del frontend desde la raíz del proyecto.

```bash
# Navega a la carpeta del frontend
cd frontend/ui

# Instala las dependencias
npm install

# Inicia la aplicación de Angular
npm start
```
La aplicación del frontend estará disponible en `http://localhost:4200`.

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor, crea un *fork* del repositorio y envía un *Pull Request*.
