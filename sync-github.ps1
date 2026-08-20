git add .

$status = git status --porcelain

if (-not $status) {
    Write-Host "Nenhuma alteração para enviar."
    exit
}

$data = Get-Date -Format "yyyy-MM-dd HH:mm"
git commit -m "Atualizacao automatica - $data"

git push origin main

Write-Host "Projeto enviado para o GitHub com sucesso."