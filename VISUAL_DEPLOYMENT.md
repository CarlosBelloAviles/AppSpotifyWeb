# 🎯 DEPLOYMENT VISUAL - Paso a Paso

## 🔴 PASO 1️⃣: Abre PowerShell

```
1. Presiona Windows + R
2. Escribe: powershell
3. Presiona Enter
```

Deberías ver algo como:
```
PS C:\Users\mari>
```

---

## 🔴 PASO 2️⃣: Ve a tu carpeta

Copia y pega esto en PowerShell:

```powershell
cd 'c:\Users\mari\Documents\Mis Proyectos\Mis Proyectos\WebSpotify\webSpotify'
```

Presiona **Enter**.

Verás:
```
PS C:\Users\mari\Documents\Mis Proyectos\Mis Proyectos\WebSpotify\webSpotify>
```

---

## 🔴 PASO 3️⃣: Inicializar Git

```powershell
git init
```

Presiona **Enter**.

---

## 🔴 PASO 4️⃣: Agregar archivos

```powershell
git add .
```

Presiona **Enter**.

---

## 🔴 PASO 5️⃣: Primer commit

```powershell
git commit -m "Initial commit: Spotify web app"
```

Presiona **Enter**.

Verás algo como:
```
[master (root-commit) 1234567] Initial commit
 41 files changed, 3500 insertions(+)
 create mode 100644 package.json
 ...
```

✅ **Si ves esto, Git está listo.**

---

## 🔵 PASO 6️⃣: Crear Repo en GitHub

### En tu navegador:

1. Abre: https://github.com/new
2. En "Repository name" escribe: **webspotify**
3. En "Description" (opcional): **Spotify Web App with React**
4. Selecciona: **Public**
5. Click en **"Create repository"**

Verás una pantalla azul. **COPIA LA URL** que dice:

```
https://github.com/TU-USUARIO/webspotify.git
```

Ejemplo:
```
https://github.com/marianasmith/webspotify.git
```

---

## 🔵 PASO 7️⃣: Conectar a GitHub

Vuelve a PowerShell. Pega esto (con TU URL):

```powershell
git remote add origin https://github.com/TU-USUARIO/webspotify.git
```

Presiona **Enter**.

---

## 🔵 PASO 8️⃣: Cambiar rama

```powershell
git branch -M main
```

Presiona **Enter**.

---

## 🔵 PASO 9️⃣: Subir a GitHub

```powershell
git push -u origin main
```

Presiona **Enter**.

Espera. Verás:
```
Enumerating objects: 41, done.
Counting objects: 100% (41/41), done.
...
To https://github.com/TU-USUARIO/webspotify.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

✅ **Tu código está en GitHub!**

---

## 🟢 PASO 10️⃣: Instalar Vercel

```powershell
npm install -g vercel
```

Presiona **Enter**. Espera ~30 segundos.

Verás:
```
added 22 packages
```

---

## 🟢 PASO 1️⃣1️⃣: Login en Vercel

```powershell
vercel login
```

Presiona **Enter**. Se abrirá tu navegador. **Haz clic en "Authorize Vercel CLI"**.

Vuelve a PowerShell.

---

## 🟢 PASO 1️⃣2️⃣: Deploy a Vercel

```powershell
vercel
```

Presiona **Enter**.

Vercel te hará preguntas. **Responde así:**

```
? Set up and deploy "...WebSpotify\webSpotify"? (Y/n) › y
(Presiona: y y Enter)

? Link to existing project? (y/N) › n
(Presiona: n y Enter)

? What's your project's name? › webspotify
(Presiona: Enter)

? In which directory is your code? › ./
(Presiona: Enter)

? Want to override the settings above? (y/N) › n
(Presiona: n y Enter)
```

**Espera a que termine...** Verás:

```
✅ Production: https://webspotify-xxxxx.vercel.app
```

**COPIA ESTA URL** 📋

---

## 🟢 PASO 1️⃣3️⃣: Agregar Variable 1

```powershell
vercel env add VITE_CLIENT_ID
```

Presiona **Enter**.

Cuando pida el valor, copia esto:
```
ef7e2259c19c460280907b8e68ee701c
```

Presiona **Enter**.

---

## 🟢 PASO 1️⃣4️⃣: Agregar Variable 2

```powershell
vercel env add VITE_CLIENT_SECRET
```

Presiona **Enter**.

Cuando pida el valor, copia esto:
```
7f9183fd770c432baed62e1dd430f600
```

Presiona **Enter**.

---

## 🟢 PASO 1️⃣5️⃣: Re-Deploy

```powershell
vercel --prod
```

Presiona **Enter**.

Espera. Verás nuevamente:
```
✅ Production: https://webspotify-xxxxx.vercel.app
```

---

## 🟡 PASO 1️⃣6️⃣: Actualizar Spotify Dashboard

### En tu navegador:

1. Abre: https://developer.spotify.com/dashboard
2. Haz clic en tu app **"WebSpotify"**
3. Haz clic en **"Edit Settings"**
4. En la sección **"Redirect URIs"** encontrarás un campo
5. Haz clic en **"Add"**
6. Escribe:
   ```
   https://webspotify-xxxxx.vercel.app/
   ```
   (Reemplaza xxxxx con el ID de tu URL de Vercel)
7. Presiona **"Save"**

⚠️ **Spotify tarda 5-10 minutos en procesar esto**

---

## 🟡 PASO 1️⃣7️⃣: Esperar

☕ **Tómate 10 minutos de descanso. Spotify está procesando tu cambio.**

---

## 🟡 PASO 1️⃣8️⃣: Probar en el Navegador

1. Abre tu URL de Vercel:
   ```
   https://webspotify-xxxxx.vercel.app
   ```

2. ¿Ves un botón verde que dice **"Iniciar sesión"**?
   - Si sí → ¡Excelente! ✅
   - Si no → Espera más, Spotify aún está procesando

3. Haz clic en **"Iniciar sesión"**

4. Te llevará a Spotify. Autoriza la app.

5. Deberías ver **la lista de artistas** 🎵

---

## 🎉 PASO 1️⃣9️⃣: ¡COMPLETADO!

Si ves artistas y puedes expandir álbumes/tracks:

## 🎉 ¡FELICIDADES! 🎉

Tu WebSpotify está **EN VIVO EN INTERNET**!

```
URL: https://webspotify-xxxxx.vercel.app

Comparte con amigos y familia! 🎵✨
```

---

## 📋 Checklist Final

Marca mientras avanzas:

```
☐ PASO 1-5: Git init + GitHub
☐ PASO 6-9: Git push
☐ PASO 10: Vercel CLI instalado
☐ PASO 11: Deploy a Vercel (tienes URL)
☐ PASO 12-14: Variables agregadas
☐ PASO 15: Spotify Dashboard actualizado
☐ PASO 16: Esperaste 10 minutos
☐ PASO 17: Abriste la URL en navegador
☐ PASO 18: Funcionó! ✅
```

---

## 🐛 Error?

### "Invalid OAuth2 redirect URI"
→ Espera 10 minutos más. Spotify está procesando.

### "Blank white page"
→ Abre F12, ve a Console, copia el error.

### "Button no visible"
→ Recarga la página (F5). Si sigue igual, limpia cache.

### "Login no funciona"
→ Abre en navegador incógnito (Ctrl+Shift+N)

---

## 🚀 ¡Ahora!

Sigue los 19 pasos arriba en orden.

**Tiempo total: ~30 minutos** ⏱️

¡A deployar! 🚀✨
