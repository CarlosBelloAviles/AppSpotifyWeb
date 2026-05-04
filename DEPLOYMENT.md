# 🚀 Guía de Deployment en Vercel

Esta guía te ayudará a desplegar tu aplicación Spotify Web en Vercel.

## Paso 1: Inicializar Git (si no está hecho)

```bash
git init
git add .
git commit -m "Initial commit: Spotify web app with Tanstack Query"
```

## Paso 2: Crear un repositorio en GitHub

1. Ve a [GitHub.com](https://github.com) y crea un nuevo repositorio (puede ser público o privado)
2. Copia la URL del repositorio (ej: `https://github.com/tu-usuario/webspotify.git`)
3. En tu terminal, agrega el remote y push:

```bash
git remote add origin https://github.com/tu-usuario/webspotify.git
git branch -M main
git push -u origin main
```

## Paso 3: Desplegar en Vercel

### Opción A: Usando Vercel CLI (Recomendado)

1. Instala Vercel CLI:
```bash
npm install -g vercel
```

2. Ejecuta Vercel en el directorio del proyecto:
```bash
vercel
```

3. Sigue las instrucciones interactivas:
   - Selecciona "Use existing sources" o conecta tu GitHub
   - Confirma el directorio raíz (`webSpotify`)
   - Para "Build Command" escribe: `npm run build`
   - Para "Output Directory" escribe: `dist`

### Opción B: Usando Vercel Dashboard

1. Ve a [Vercel.com](https://vercel.com) y crea una cuenta
2. Haz clic en "New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará la configuración automáticamente
5. Agrega las variables de entorno

## Paso 4: Configurar Variables de Entorno en Vercel

En el dashboard de Vercel (Project Settings → Environment Variables):

1. Agrega `VITE_CLIENT_ID`: `ef7e2259c19c460280907b8e68ee701c`
2. Agrega `VITE_CLIENT_SECRET`: `7f9183fd770c432baed62e1dd430f600`

**Importante**: Estas variables deben ser accesibles en tiempo de construcción (Build-time).

## Paso 5: Obtener la URL de Vercel

Una vez deployed, Vercel te proporcionará una URL como:
```
https://webspotify-xxxxx.vercel.app
```

## Paso 6: Actualizar Spotify Developer Dashboard

1. Ve a [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Selecciona tu aplicación
3. Ve a "Edit Settings"
4. En "Redirect URIs", agrega:
   ```
   https://webspotify-xxxxx.vercel.app/
   ```
   (Reemplaza `xxxxx` con tu ID de Vercel)

5. Guarda los cambios

## Paso 7: Probar la Aplicación

1. Abre `https://webspotify-xxxxx.vercel.app` en tu navegador
2. Haz clic en "Iniciar sesión"
3. Autoriza la aplicación
4. Deberías ver la lista de artistas

## Troubleshooting

### Error: "Invalid OAuth2 redirect URI"
- Verifica que la URL en Spotify Dashboard sea exacta (con el `/` final)
- Espera 5-10 minutos después de guardar los cambios en Spotify Dashboard

### Error: "VITE_CLIENT_ID is not defined"
- Verifica que las variables de entorno estén establecidas en Vercel
- Re-deploy después de agregar las variables

### Error: "localhost:5173 refused to connect"
- Esto significa que estás intentando usar el servidor local sin que sea el Vercel correcto
- Abre la URL de Vercel, no localhost

### Problemas con CORS
- El backend de Spotify no debería tener CORS issues
- Si ocurren, verifica que estés usando los endpoints correctos

## Próximos Pasos Opcionales

### Agregar dominio personalizado
1. En Project Settings → Domains
2. Agrega tu dominio personalizado
3. Sigue las instrucciones para configurar DNS

### Configurar CD automático
Vercel automáticamente redeploy cada vez que hagas push a `main`

### Monitorar Performance
Usa Vercel Analytics (Projects → Analytics)

## Notas Importantes

- **Nunca** comitees las credenciales de Spotify en Git sin cifrar
- Las variables de entorno se inyectan en tiempo de construcción (build time)
- El `.vercelignore` excluye archivos innecesarios del deploy
- El `vercel.json` configura los comandos de build automáticamente

---

¡Listo! Tu aplicación Spotify Web debería estar en vivo 🎵
