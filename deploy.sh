#!/bin/bash

# Script para desplegar a Vercel
# Este script guía al usuario a través del proceso de deployment

echo "🚀 Iniciando deployment a Vercel..."
echo ""

# Verificar si git está inicializado
if [ ! -d ".git" ]; then
    echo "📦 Inicializando repositorio Git..."
    git init
    git add .
    git commit -m "Initial commit: Spotify web app with Tanstack Query"
    echo "✅ Repositorio Git inicializado"
else
    echo "✅ Repositorio Git ya existe"
fi

echo ""
echo "📝 Pasos siguientes:"
echo ""
echo "1. Si aún no tienes un repositorio en GitHub:"
echo "   - Ve a https://github.com/new"
echo "   - Crea un repositorio llamado 'webspotify'"
echo "   - Copia la URL del repositorio"
echo ""
echo "2. Conecta con GitHub y push:"
echo "   git remote add origin <tu-url-github>"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Instala Vercel CLI:"
echo "   npm install -g vercel"
echo ""
echo "4. Ejecuta Vercel:"
echo "   vercel"
echo ""
echo "5. Actualiza Spotify Developer Dashboard con la URL de Vercel"
echo "   Ejemplo: https://webspotify-xxxxx.vercel.app/"
echo ""
echo "📚 Lee DEPLOYMENT.md para instrucciones detalladas"
echo ""
