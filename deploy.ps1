# Script para desplegar a Vercel (Windows PowerShell)
# Este script guía al usuario a través del proceso de deployment

Write-Host "🚀 Iniciando deployment a Vercel..." -ForegroundColor Green
Write-Host ""

# Verificar si git está inicializado
if (-not (Test-Path .git)) {
    Write-Host "📦 Inicializando repositorio Git..." -ForegroundColor Yellow
    git init
    git add .
    git commit -m "Initial commit: Spotify web app with Tanstack Query"
    Write-Host "✅ Repositorio Git inicializado" -ForegroundColor Green
} else {
    Write-Host "✅ Repositorio Git ya existe" -ForegroundColor Green
}

Write-Host ""
Write-Host "📝 Pasos siguientes:" -ForegroundColor Cyan
Write-Host ""

Write-Host "1️⃣  Si aún no tienes un repositorio en GitHub:" -ForegroundColor White
Write-Host "   - Ve a https://github.com/new" -ForegroundColor Gray
Write-Host "   - Crea un repositorio llamado 'webspotify'" -ForegroundColor Gray
Write-Host "   - Copia la URL del repositorio" -ForegroundColor Gray
Write-Host ""

Write-Host "2️⃣  Conecta con GitHub y push:" -ForegroundColor White
Write-Host "   git remote add origin <tu-url-github>" -ForegroundColor Gray
Write-Host "   git branch -M main" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
Write-Host ""

Write-Host "3️⃣  Instala Vercel CLI:" -ForegroundColor White
Write-Host "   npm install -g vercel" -ForegroundColor Gray
Write-Host ""

Write-Host "4️⃣  Ejecuta Vercel:" -ForegroundColor White
Write-Host "   vercel" -ForegroundColor Gray
Write-Host ""

Write-Host "5️⃣  Actualiza Spotify Developer Dashboard con la URL de Vercel" -ForegroundColor White
Write-Host "   Ejemplo: https://webspotify-xxxxx.vercel.app/" -ForegroundColor Gray
Write-Host ""

Write-Host "📚 Lee DEPLOYMENT.md para instrucciones detalladas" -ForegroundColor Cyan
Write-Host ""

Write-Host "Presiona Enter para cerrar..." -ForegroundColor DarkGray
Read-Host
