# 🎯 INSTRUCCIONES DE DEPLOYMENT - EJECUTAR AHORA

## Aquí están los 9 pasos para deployar tu WebSpotify 🚀

Sigue estos comandos exactamente en orden. Abre **PowerShell** y copia/pega cada uno.

---

## PASO 1: Ve a la carpeta del proyecto

```powershell
cd 'c:\Users\mari\Documents\Mis Proyectos\Mis Proyectos\WebSpotify\webSpotify'
```

Presiona **Enter**. Si no hay error, continúa.

---

## PASO 2: Inicializar Git

```powershell
git init
```

Presiona **Enter**.

---

## PASO 3: Agregar todos los archivos

```powershell
git add .
```

Presiona **Enter**.

---

## PASO 4: Hacer el primer commit

```powershell
git commit -m "Initial commit: Spotify web app"
```

Presiona **Enter**.

---

## PASO 5: Crear repositorio en GitHub

1. Abre en tu navegador: **https://github.com/new**
2. En "Repository name" escribe: **webspotify**
3. Selecciona: **Public**
4. Click en **"Create repository"**
5. **COPIA LA URL** que aparece (algo como `https://github.com/TU-USUARIO/webspotify.git`)

---

## PASO 6: Conectar con GitHub (usa la URL que copiaste)

Reemplaza `AQUI-VA-TU-URL` con la URL que copiaste:

```powershell
git remote add origin AQUI-VA-TU-URL
```

Por ejemplo:
```powershell
git remote add origin https://github.com/marianasmith/webspotify.git
```

Presiona **Enter**.

---

## PASO 7: Cambiar rama a main

```powershell
git branch -M main
```

Presiona **Enter**.

---

## PASO 8: Push a GitHub

```powershell
git push -u origin main
```

Presiona **Enter**. Esto subirá tu código a GitHub.

---

## PASO 9: Instalar Vercel CLI

```powershell
npm install -g vercel
```

Presiona **Enter**. Espera a que termine (puede tardar ~30 segundos).

---

## PASO 10: Login en Vercel

```powershell
vercel login
```

Presiona **Enter**. Se abrirá tu navegador. **Autoriza** la conexión con GitHub.

---

## PASO 11: Desplegar a Vercel

```powershell
vercel
```

Presiona **Enter**. Vercel te hará preguntas. Responde:

| Pregunta | Respuesta |
|---|---|
| `Set up and deploy "..."?` | **y** → Enter |
| `Link to existing project?` | **n** → Enter |
| `What's your project's name?` | **webspotify** → Enter |
| `In which directory is your code?` | **./** → Enter |
| `Want to override the settings?` | **n** → Enter |

**ESPERA A QUE TERMINE.** Verás algo como:
```
✅ Production: https://webspotify-xxxxx.vercel.app
```

**COPIA ESTA URL** - la necesitarás en el paso 16.

---

## PASO 12: Agregar primera variable de entorno

```powershell
vercel env add VITE_CLIENT_ID
```

Presiona **Enter**. Cuando pida que pegues el valor, copia esto:
```
ef7e2259c19c460280907b8e68ee701c
```

Presiona **Enter** después de pegar.

---

## PASO 13: Agregar segunda variable de entorno

```powershell
vercel env add VITE_CLIENT_SECRET
```

Presiona **Enter**. Cuando pida que pegues el valor, copia esto:
```
7f9183fd770c432baed62e1dd430f600
```

Presiona **Enter** después de pegar.

---

## PASO 14: Re-desplegar con las variables

```powershell
vercel --prod
```

Presiona **Enter**. Verá nuevamente:
```
✅ Production: https://webspotify-xxxxx.vercel.app
```

---

## PASO 15: Actualizar Spotify Developer Dashboard

1. Abre: **https://developer.spotify.com/dashboard**
2. **Selecciona tu app** "WebSpotify"
3. Haz click en **"Edit Settings"**
4. En la sección **"Redirect URIs"** agrega esta URL:
   ```
   https://webspotify-xxxxx.vercel.app/
   ```
   (Reemplaza `xxxxx` con el ID de tu URL de Vercel)
5. Click en **"Save"**

**IMPORTANTE**: Spotify puede tardar **5-10 minutos** en procesar este cambio.

---

## PASO 16: Esperar y Probar

1. **Espera 5-10 minutos** (toma un café ☕)
2. Abre en tu navegador tu URL de Vercel:
   ```
   https://webspotify-xxxxx.vercel.app
   ```
3. Click en **"Iniciar sesión"**
4. Autoriza la aplicación en Spotify
5. ¡Deberías ver la lista de artistas! 🎵

---

## ✅ ¡COMPLETADO!

Si llegaste aquí y tu app funciona:

🎉 **¡FELICIDADES! Tu WebSpotify está en vivo en internet!**

Puedes compartir la URL con amigos y familia. Todos pueden iniciar sesión y ver los artistas.

---

## 🐛 Si Algo Falla

### Error: "fatal: not a git repository"
- Verifica que estés en la carpeta correcta:
  ```powershell
  Get-Location
  ```
- Debería mostrar: `C:\Users\mari\Documents\Mis Proyectos\Mis Proyectos\WebSpotify\webSpotify`

### Error: "VITE_CLIENT_ID is undefined" o página en blanco
- Las variables de entorno NO se han agregado correctamente
- Ve a: https://vercel.com/dashboard
- Selecciona tu proyecto
- Settings → Environment Variables
- Verifica que estén las 2 variables
- Si no están, agrégalas manualmente allí
- Haz: `vercel --prod` nuevamente

### Error: "Invalid OAuth2 redirect URI"
- La URL en Spotify Dashboard NO coincide con la de Vercel
- Verifica que sea EXACTAMENTE: `https://webspotify-xxxxx.vercel.app/`
- Nota la `/` al final
- Espera 5-10 minutos después de guardar en Spotify

### Login infinite loop
- Abre tu navegador en modo **incógnito**
- Abre DevTools (F12)
- Application → Storage → Clear all
- Recarga la página
- Intenta login nuevamente

### Blank white page
- Abre DevTools (F12)
- Ve a Console
- Busca errores rojos
- Si hay, copia el error y búscalo en DEPLOYMENT.md

---

## 📞 Verificación Rápida

Antes de considerarlo "completo", verifica:

- ✅ Tu URL de Vercel abre en el navegador
- ✅ Ves el botón "Iniciar sesión"
- ✅ Click en el botón abre Spotify login
- ✅ Después de autorizar, ves artistas
- ✅ Puedes expandir álbumes
- ✅ Puedes ver tracks
- ✅ Puedes escuchar preview (30 seg)

**¿Todos ✅? → ¡Éxito! 🎉**

---

## 🎬 Próximos Pasos (Opcionales)

1. **Agregar dominio personalizado**
   - https://vercel.com/dashboard
   - Settings → Domains
   - Sigue instrucciones

2. **Hacer cambios al código**
   - Edita archivo en VS Code
   - Git add + commit + push
   - Vercel auto-deploya (1-2 min)

3. **Ver logs de deployment**
   - https://vercel.com/dashboard
   - Deployments → Selecciona uno
   - Ver logs

---

## 💾 Comandos Para Recordar

```powershell
# Cambiar a la carpeta
cd 'c:\Users\mari\Documents\Mis Proyectos\Mis Proyectos\WebSpotify\webSpotify'

# Ver si hay cambios
git status

# Subir cambios después
git add .
git commit -m "Tu mensaje"
git push

# Re-deploy en Vercel
vercel --prod

# Ver desarrollo local
npm run dev
# Abre http://localhost:5173
```

---

## ✨ ¡Listo!

Tu app **WebSpotify** está ahora en vivo en internet. 

**URL**: `https://webspotify-xxxxx.vercel.app`

🎵 ¡A disfrutar! 🚀
