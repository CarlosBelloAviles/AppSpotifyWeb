# 📋 CHECKLIST FINAL - WebSpotify para Vercel

Usa este checklist para asegurar que todo está listo antes de deployar.

## ✅ PRE-DEPLOYMENT

### Local Setup
- [ ] Todas las dependencias instaladas (`node_modules/`)
- [ ] `.env` tiene credenciales Spotify válidas
- [ ] `.env` NO está commiteado (check `.gitignore`)
- [ ] `npm run dev` funciona sin errores
- [ ] `npm run build` compila sin errores

### Código
- [ ] `src/Components/Login.tsx` importa `getRedirectUri`
- [ ] `src/config/vercel.ts` existe y exporta funciones
- [ ] No hay `console.error` o `console.warn` en production
- [ ] No hay código comentado que no deba estar
- [ ] TypeScript compila sin errores (`npm run build`)

### Configuración Vercel
- [ ] `vercel.json` existe en raíz
- [ ] `.vercelignore` existe en raíz
- [ ] `package.json` tiene todos los scripts
- [ ] `.gitignore` incluye `.env`

### Git
- [ ] Repositorio Git inicializado (`git init`)
- [ ] Primer commit hecho (`git commit -m "..."`)
- [ ] Remoto de GitHub configurado (`git remote -v`)
- [ ] Código pusheado a GitHub (`git push`)

---

## ✅ DEPLOYMENT

### GitHub
- [ ] Repositorio creado en GitHub
- [ ] URL: `https://github.com/TU-USUARIO/webspotify`
- [ ] Código pusheado (branch: `main`)
- [ ] Repositorio visible públicamente (opcional pero recomendado)

### Vercel CLI
- [ ] Vercel CLI instalado (`npm install -g vercel`)
- [ ] Login en Vercel (`vercel login`)
- [ ] Proyecto creado en Vercel (`vercel`)

### Vercel Dashboard
- [ ] Proyecto visible en Dashboard
- [ ] Build pasó exitosamente
- [ ] Deployment URL asignada (ej: `https://webspotify-xxxxx.vercel.app`)
- [ ] Environment Variables configuradas:
  - [ ] `VITE_CLIENT_ID` = `ef7e2259c19c460280907b8e68ee701c`
  - [ ] `VITE_CLIENT_SECRET` = `7f9183fd770c432baed62e1dd430f600`
- [ ] Re-deploy hecho después de agregar variables

---

## ✅ SPOTIFY DASHBOARD

### Registro de App
- [ ] App registrada en Spotify Developer
- [ ] Client ID: `ef7e2259c19c460280907b8e68ee701c`
- [ ] Client Secret: `7f9183fd770c432baed62e1dd430f600`

### Redirect URIs
Actualizar en Settings → Redirect URIs:
- [ ] `http://localhost:5173/` (desarrollo)
- [ ] `https://webspotify-xxxxx.vercel.app/` (producción)

**Nota**: Spotify puede tardar 5-10 minutos en procesar cambios

---

## ✅ TESTING

### En Desarrollo Local
```bash
npm run dev
```
- [ ] App abre en `http://localhost:5173`
- [ ] Button "Iniciar sesión" visible
- [ ] Click abre Spotify login
- [ ] Spotify redirige de vuelta correctamente
- [ ] Token se guarda en localStorage
- [ ] Lista de artistas se carga
- [ ] Álbumes se expanden correctamente
- [ ] Audio preview funciona
- [ ] Logout funciona

### En Producción (Vercel)
- [ ] Abre URL de Vercel
- [ ] Button "Iniciar sesión" visible
- [ ] Login funciona correctamente
- [ ] Datos se cargan desde Spotify API
- [ ] Caché funciona (recarga rápida)
- [ ] Audio preview funciona
- [ ] Logout limpia token

### Network (F12 → Network)
- [ ] Petición a Spotify Auth: `accounts.spotify.com/authorize`
- [ ] Petición a Spotify API: `api.spotify.com/v1/...`
- [ ] Todas con status 200/201

### Console (F12 → Console)
- [ ] Sin errores rojos
- [ ] Sin warnings críticos
- [ ] CORS no bloqueado

---

## ✅ PERFORMANCE

- [ ] Página carga en < 3 segundos
- [ ] Datos en caché después de primera carga
- [ ] Recarga desde caché < 100ms
- [ ] No hay memory leaks (DevTools → Memory)
- [ ] Responsive en mobile (F12 → Toggle device toolbar)

---

## ✅ SECURITY

- [ ] HTTPS en Vercel ✅ (no HTTP)
- [ ] `.env` NO en Git ✅ (check `git log` or `git ls-files .env`)
- [ ] Client Secret NO en frontend ✅
- [ ] Token en localStorage (acceptable para SPA)
- [ ] No hay secrets en source code comments

---

## 🚨 PROBLEMAS COMUNES

| Síntoma | Causa | Solución |
|---|---|---|
| "Invalid OAuth2 redirect URI" | URL en Spotify no coincide | Verifica URL exacta (con /) |
| Blank white page | Build error | Check Vercel logs |
| Auth infinite loop | Token corrupto | Limpiar localStorage (F12 → Application) |
| CORS error | Endpoint incorrecto | Verifica endpoint en spotify.ts |
| "VITE_CLIENT_ID is undefined" | Variables no en Vercel | Re-deploy después de agregar variables |

---

## 📊 ROLLBACK (Si algo sale mal)

1. En Vercel Dashboard: Deployments → Selecciona versión anterior
2. Click "Redeploy" button
3. Espera 1-2 minutos

---

## 📈 MONITOREO POST-DEPLOYMENT

Configurar alertas en Vercel:
1. Dashboard → Project Settings → Monitor
2. Enable: Error Rate, Slow Network Response
3. Configure: Email notifications

---

## 🎯 FINAL

- [ ] Checklist completado 100%
- [ ] URL de Vercel funciona perfectamente
- [ ] Family/friends pueden loguear y ver artistas
- [ ] Sin errores en consola
- [ ] App lista para producción

---

**Fecha de Deploy**: _______________

**URL de Producción**: `https://webspotify-xxxxx.vercel.app/`

**Notas**: ___________________________________

---

¡Felicidades! 🎉 Tu app está en producción.
