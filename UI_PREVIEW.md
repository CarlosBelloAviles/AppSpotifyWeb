# 🎨 WebSpotify - UI/UX Preview

## 🖥️ Interfaz de Usuario

### Estado: No Autenticado
```
┌─────────────────────────────────────────────┐
│                   WebSpotify                │
│                    🎵                       │
│                                             │
│                                             │
│                                             │
│        ┌──────────────────────────────┐    │
│        │   Iniciar sesión con Spotify │    │
│        └──────────────────────────────┘    │
│                (Verde #1DB954)              │
│                                             │
│     Haz clic para autenticarte con tu      │
│     cuenta de Spotify                       │
│                                             │
└─────────────────────────────────────────────┘
```

### Estado: Autenticado - Lista de Artistas
```
┌─────────────────────────────────────────────┐
│                   WebSpotify  [Logout]      │
│                    🎵                       │
│                                             │
│ ┌─────────────────────────────────────┐   │
│ │         Dua Lipa                    │   │
│ │   [Imagen del artista]              │   │
│ │   ⭐ 87.2M followers                │   │
│ │                                     │   │
│ │ ▶ Ver Álbumes | ▶ Ver Top Tracks   │   │
│ └─────────────────────────────────────┘   │
│                                             │
│ ┌─────────────────────────────────────┐   │
│ │      The Weeknd                     │   │
│ │   [Imagen del artista]              │   │
│ │   ⭐ 96.4M followers                │   │
│ │                                     │   │
│ │ ▶ Ver Álbumes | ▶ Ver Top Tracks   │   │
│ └─────────────────────────────────────┘   │
│                                             │
│ ... (más artistas)                         │
└─────────────────────────────────────────────┘
```

### Estado: Expandido - Álbumes
```
┌─────────────────────────────────────────────┐
│                   WebSpotify  [Logout]      │
│                    🎵                       │
│                                             │
│ ┌─────────────────────────────────────┐   │
│ │         Dua Lipa                    │   │
│ │   [Imagen del artista]              │   │
│ │   ⭐ 87.2M followers                │   │
│ │                                     │   │
│ │ ▼ ÁLBUMES:                          │   │
│ │   ┌──────────────────────────────┐  │   │
│ │   │ Future Nostalgia             │  │   │
│ │   │ [Album art]                  │  │   │
│ │   │ 2021 - 6 canciones           │  │   │
│ │   └──────────────────────────────┘  │   │
│ │                                     │   │
│ │   ┌──────────────────────────────┐  │   │
│ │   │ Hot & Cold                   │  │   │
│ │   │ [Album art]                  │  │   │
│ │   │ 2020 - 8 canciones           │  │   │
│ │   └──────────────────────────────┘  │   │
│ │                                     │   │
│ │ ▼ TOP TRACKS:                       │   │
│ │   1. Levitating ft. DaBaby          │   │
│ │      🔊 ━━━●━━━━ Preview player    │   │
│ │   2. Don't Start Now                │   │
│ │      🔊 ━━━━━●━━ Preview player    │   │
│ │   3. New Rules                      │   │
│ │      🔊 ━━●━━━━━ Preview player    │   │
│ │                                     │   │
│ │ ▲ OCULTAR                           │   │
│ └─────────────────────────────────────┘   │
│                                             │
│ ┌─────────────────────────────────────┐   │
│ │      The Weeknd                     │   │
│ │   [Imagen del artista]              │   │
│ │   ⭐ 96.4M followers                │   │
│ └─────────────────────────────────────┘   │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🎨 Colores y Estilo

### Paleta de Colores
```
Primary:     #1DB954 (Spotify Green)
Secondary:   #191414 (Dark Black)
Accent:      #FFFFFF (White)
Background:  #121212 (Dark)
Text:        #FFFFFF (White)
Hover:       #1ed760 (Bright Green)
```

### Tipografía
```
Headings:    sans-serif, bold
Body:        sans-serif, regular
Buttons:     sans-serif, bold, uppercase
```

### Dimensiones
```
Container Width:   1200px (responsive)
Card Width:        ~350px
Card Height:       auto (expandible)
Button Height:     48px
Spacing:           16px (1rem)
Border Radius:     8px
```

---

## 📱 Responsive Design

### Desktop (1200px+)
```
[Artista 1] [Artista 2] [Artista 3]
[Artista 4] [Artista 5] [Artista 6]
...
```

### Tablet (768px - 1199px)
```
[Artista 1] [Artista 2]
[Artista 3] [Artista 4]
...
```

### Mobile (< 768px)
```
[Artista 1]
[Artista 2]
[Artista 3]
...
```

---

## 🎬 Estados de UI

### Loading
```
┌─────────────────────────────────────────────┐
│                   WebSpotify                │
│                    🎵                       │
│                                             │
│              ⏳ Cargando...                 │
│                                             │
│           [Spinner animado]                 │
│                                             │
└─────────────────────────────────────────────┘
```

### Error
```
┌─────────────────────────────────────────────┐
│                   WebSpotify                │
│                    🎵                       │
│                                             │
│              ⚠️ Error                       │
│                                             │
│    No se pudieron cargar los datos          │
│    Intenta nuevamente                       │
│                                             │
│         [Botón: Reintentar]                 │
│                                             │
└─────────────────────────────────────────────┘
```

### Auth Callback
```
┌─────────────────────────────────────────────┐
│                   WebSpotify                │
│                    🎵                       │
│                                             │
│          🔄 Autenticando...                 │
│                                             │
│        Procesando tu autorización           │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🎯 Interacciones

### Click "Iniciar sesión"
```
1. Redirige a Spotify auth
   ↓
2. Usuario ve pantalla de login de Spotify
   ↓
3. Usuario ve permisos solicitados
   ↓
4. Usuario hace clic en "Autorizar"
   ↓
5. Spotify redirige de vuelta a tu app
   ↓
6. App intercambia código por token
   ↓
7. App carga lista de artistas
```

### Click "Ver Álbumes"
```
1. Expande sección de álbumes
   ↓
2. Carga álbumes del artista
   ↓
3. Muestra grid de álbumes
   ↓
4. Usuario puede ver portadas
```

### Click "Ver Top Tracks"
```
1. Expande sección de tracks
   ↓
2. Carga top 5 tracks del artista
   ↓
3. Muestra lista con preview player
   ↓
4. Usuario puede escuchar 30 segundos
```

### Click Preview Player
```
1. Abre reproductor HTML5
   ↓
2. Reproduce 30 segundos (Spotify)
   ↓
3. Usuario controla play/pause/volumen
```

### Click "Cerrar sesión"
```
1. Limpia token de localStorage
   ↓
2. Limpia AuthContext
   ↓
3. Redirige a pantalla de login
```

---

## ⌨️ Flujo de Teclado

```
Tab       → Navega entre botones
Enter     → Activa botón
Escape    → Cierra modal (si hay)
```

---

## 📊 Performance Visual

```
Load Time:
- Página principal:        <1 segundo
- Carga de artistas:       ~1-2 segundos
- Carga de álbumes:        ~500ms (caché)
- Carga de tracks:         ~500ms (caché)
- Preview player:          <100ms

Smooth Animations:
- Expansión de cards:      300ms ease
- Fade in de contenido:    200ms ease
- Hover effects:           100ms ease
```

---

## 🎵 Audio Preview

```
┌───────────────────────────────────┐
│ 🎵 Levitating ft. DaBaby          │
├───────────────────────────────────┤
│                                   │
│  🔊  ━━●━━━━━━━━━━━━━━━━ 0:30    │
│       ▶ Pause Vol. Mute           │
│                                   │
│  (HTML5 <audio> embedido)         │
│                                   │
└───────────────────────────────────┘
```

---

## 🌙 Tema Oscuro

La aplicación **siempre está en modo oscuro** para:
- Concordar con Spotify
- Reducir fatiga visual
- Mejor contraste
- Mejor batería (en OLED)

```
Background:  #121212
Cards:       #282828
Text:        #FFFFFF
Accent:      #1DB954
Hover:       #1ed760
Border:      #404040
```

---

## ✨ Animaciones

### Spinner Loading
```
  ⠋
⠙  
⠹
⠸ ← Rota continuamente
⠼
⠴
⠦
⠧
```

### Hover Effects
```
Botón sin hover:   Opacidad 100%
Botón con hover:   Opacidad 120%, Scale 1.05
Card sin hover:    Shadow pequeña
Card con hover:    Shadow grande, Scale 1.02
```

### Fade In
```
Artistas al cargar:
Opacidad: 0% → 100%
Duración: 200ms
```

---

## 🔔 Feedback Visual

### Success
```
✅ Token guardado exitosamente
✅ Artistas cargados
✅ Álbumes expandidos
```

### Error
```
❌ No se pudo cargar el token
❌ Error en la API de Spotify
❌ Token expirado
```

### Loading
```
⏳ Cargando artistas...
⏳ Cargando álbumes...
⏳ Cargando tracks...
```

---

## 📐 Layout Grid

```
12 columnas responsivas:

Desktop (1200px+):
3 columnas × 4 filas = 12 artistas visibles

Tablet (768px - 1199px):
2 columnas × 6 filas = 12 artistas visibles

Mobile (< 768px):
1 columna × 12 filas = 12 artistas visibles
```

---

## 🎯 Accesibilidad

```
✅ Colores con contraste suficiente (WCAG AA)
✅ Botones con tamaño mínimo 44×44px
✅ Texto de botones claro y descriptivo
✅ Soporte para teclado (Tab, Enter)
✅ Focus visible en elementos interactivos
✅ Etiquetas de formularios (si hay)
```

---

## 📱 Touch Friendly

```
Botones:
- Mínimo 44×44px de área táctil
- Padding alrededor de texto
- Doble tap para expandir

Scroll:
- Smooth scroll enabled
- Momentum scroll en iOS
- Lazy load de imágenes
```

---

¡Tu interfaz está lista para impresionar! 🎨✨

Más adelante puedes agregar:
- Búsqueda de artistas
- Favoritos
- Recomendaciones
- Share en redes
