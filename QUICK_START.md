# 🚀 Quick Start Guide

## ⚡ En 5 Minutos

### Paso 1: Instalar
```bash
npm install
```

### Paso 2: Ejecutar
```bash
npm run dev
```

### Paso 3: Abrir
Abre `http://localhost:5173` en tu navegador

### Paso 4: Login
Haz click en "Iniciar sesión" y autoriza con tu cuenta de Spotify

### Paso 5: ¡Disfruta!
Explora artistas, álbumes y canciones

---

## 📦 ¿Qué se instalará?

```
react                 - Framework UI
react-dom            - DOM de React
@tanstack/react-query - Gestión de datos
axios                - Cliente HTTP
```

---

## 🎯 Lo que funciona

✅ **Login** - Autenticación con Spotify
✅ **Artistas** - 23 artistas populares  
✅ **Álbumes** - Por cada artista
✅ **Canciones** - Top 10 con preview
✅ **Caché** - Tanstack Query automático
✅ **Responsive** - Funciona en móvil

---

## 🔐 Credenciales

Ya están en `.env`:
```
VITE_CLIENT_ID=ef7e2259c19c460280907b8e68ee701c
VITE_CLIENT_SECRET=7f9183fd770c432baed62e1dd430f600
```

---

## 💡 Estructura Simple

```
App
├── Login (Top-right)
└── Artistas
    ├── ArtistCard
    │   ├── Imagen
    │   ├── Nombre
    │   ├── Seguidores
    │   └── Detalles
    │       ├── Álbumes
    │       └── Canciones
```

---

## 🎨 Tema

- Verde Spotify (#1db954)
- Fondos oscuros
- Diseño limpio
- Moderno

---

## 📱 Probado en

✅ Desktop (1920x1080)
✅ Tablet (768px)
✅ Móvil (375px)

---

## ⚠️ Si algo falla

1. Limpia node_modules:
```bash
rm -r node_modules
npm install
```

2. Verifica .env tenga las claves

3. Asegúrate que puerto 5173 esté disponible

4. Recarga el navegador (Ctrl+Shift+R)

---

## 📖 Más Información

- Ver `INSTRUCCIONES.md` para detalles completos
- Ver `README_PROYECTO.md` para estructura
- Ver `CAMBIOS.md` para lista de cambios

---

## 🎉 ¡Listo!

Ejecuta:
```bash
npm install && npm run dev
```

¡Y comienza a explorar! 🎵
