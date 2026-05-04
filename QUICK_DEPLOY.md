# 🚀 COMANDOS RÁPIDOS - Deployment a Vercel

Copia y pega estos comandos en tu terminal para deployar rápidamente.

## Paso 1: Inicializar Git

```bash
cd webSpotify
git init
git add .
git commit -m "Initial commit: Spotify web app with Tanstack Query and Vercel config"
```

## Paso 2: Crear y Conectar con GitHub

1. **En GitHub.com**:
   - Ve a https://github.com/new
   - Nombre: `webspotify`
   - Selecciona Public (recomendado)
   - Clic en "Create repository"

2. **En tu terminal** (reemplaza TU-USUARIO):

```bash
git remote add origin https://github.com/TU-USUARIO/webspotify.git
git branch -M main
git push -u origin main
```

## Paso 3: Instalar y Conectar Vercel

```bash
npm install -g vercel
vercel
```

Sigue las instrucciones:
- Login con GitHub (cuando lo pida)
- Import/Link existing project
- Vercel detectará automáticamente:
  - Root directory: `.` (webSpotify)
  - Build Command: `npm run build`
  - Output Directory: `dist`

Espera a que se complete el primer deploy.

## Paso 4: Agregar Variables de Entorno

**IMPORTANTE**: Esto es CRÍTICO para que funcione la autenticación.

```bash
vercel env add VITE_CLIENT_ID
# Pega: ef7e2259c19c460280907b8e68ee701c
# Selecciona: Production, Preview, Development

vercel env add VITE_CLIENT_SECRET
# Pega: 7f9183fd770c432baed62e1dd430f600
# Selecciona: Production, Preview, Development
```

Alternativa (Vercel Dashboard):
1. Ve a https://vercel.com/dashboard
2. Selecciona tu proyecto
3. Settings → Environment Variables
4. Agrega:
   - Key: `VITE_CLIENT_ID` / Value: `ef7e2259c19c460280907b8e68ee701c`
   - Key: `VITE_CLIENT_SECRET` / Value: `7f9183fd770c432baed62e1dd430f600`
5. Guarda

## Paso 5: Re-deploy con Variables

Después de agregar variables de entorno:

```bash
vercel --prod
```

O en dashboard: Deployments → Último deploy → Redeploy button

## Paso 6: Obtener URL de Vercel

Vercel te proporcionará una URL como:
```
https://webspotify-xxxxx.vercel.app
```

Guarda esta URL, la necesitarás en el siguiente paso.

## Paso 7: Actualizar Spotify Developer Dashboard

1. Ve a https://developer.spotify.com/dashboard
2. Selecciona tu app "WebSpotify"
3. Haz clic en "Edit Settings"
4. En "Redirect URIs" agrega la URL de Vercel:
   ```
   https://webspotify-xxxxx.vercel.app/
   ```
   (Reemplaza xxxxx con tu ID, y INCLUYE el `/` final)

5. Click "Save"
6. **IMPORTANTE**: Espera 5-10 minutos para que Spotify procese el cambio

## Paso 8: Prueba

```
Abre en tu navegador: https://webspotify-xxxxx.vercel.app
Haz clic en "Iniciar sesión"
Autoriza la aplicación
¡Deberías ver la lista de artistas!
```

---

## ✅ Todo en una secuencia

Si lo haces rápido, aquí está todo junto:

```bash
# 1. Preparar código
cd webSpotify
git init
git add .
git commit -m "Initial commit"

# 2. Conectar con GitHub (después de crear repo en https://github.com/new)
git remote add origin https://github.com/TU-USUARIO/webspotify.git
git branch -M main
git push -u origin main

# 3. Instalar y deployar con Vercel
npm install -g vercel
vercel

# 4. Después del primer deploy, agregar variables
vercel env add VITE_CLIENT_ID
# (pega: ef7e2259c19c460280907b8e68ee701c)

vercel env add VITE_CLIENT_SECRET
# (pega: 7f9183fd770c432baed62e1dd430f600)

# 5. Re-deploy
vercel --prod
```

Luego:
1. Copia tu URL de Vercel
2. Actualiza Spotify Dashboard (Settings → Redirect URIs)
3. Espera 5-10 minutos
4. ¡Prueba!

---

## 🐛 Si hay problemas

### "vercel not found"
```bash
# Vercel no está instalado globalmente
npm install -g vercel
```

### "Build failed"
```bash
# Verifica que compila localmente
npm run build

# Si hay errores, intenta:
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### "VITE_CLIENT_ID is undefined"
```bash
# Las variables no se han propagado
# 1. En Vercel Dashboard, verifica que estén en "Production"
# 2. Re-deploy: vercel --prod
# 3. Espera 1-2 minutos
```

### "Invalid OAuth2 redirect URI"
```bash
# Spotify rechaza tu URI
# Verifica:
# 1. La URL en Spotify Dashboard coincida exactamente
# 2. Incluya el "/" final
# 3. Espera 5-10 minutos
```

---

## 📊 Status actual

```
✅ Código: Completamente desarrollado
✅ Configuración: Vercel lista
✅ Documentación: 7 guías creadas
⏳ Deployment: En tus manos
```

**Tiempo estimado**: 15-20 minutos hasta producción

---

## 🎯 Verificación Post-Deploy

```bash
# Verifica que tu app esté en vivo
curl https://webspotify-xxxxx.vercel.app

# Deberías ver HTML con "Iniciar sesión" button
```

---

## 💬 Resumen Rápido

| Paso | Tiempo | Comando/Acción |
|---|---|---|
| 1 | 1 min | `git init && git add . && git commit` |
| 2 | 5 min | Crear repo en GitHub y push |
| 3 | 3 min | `npm install -g vercel && vercel` |
| 4 | 2 min | Agregar variables de entorno |
| 5 | 2 min | Re-deploy |
| 6 | 1 min | Copiar URL de Vercel |
| 7 | 1 min | Actualizar Spotify Dashboard |
| 8 | - | Esperar 5-10 minutos |
| 9 | 1 min | Probar en navegador |

**Total**: ~20 minutos ⏱️

---

¡Listo! 🚀

Una vez completes estos pasos, tu WebSpotify estará en vivo en internet con HTTPS y todo lo que necesita.
