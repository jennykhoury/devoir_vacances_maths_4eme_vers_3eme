$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$inputHtml = Join-Path $scriptDir "evaluation_diagnostique.html"
$outputPdf = Join-Path $scriptDir "evaluation_diagnostique.pdf"
$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

if (-not (Test-Path $edgePath)) {
    Write-Error "Microsoft Edge introuvable dans le dossier par défaut."
    exit 1
}

Write-Host "Génération du PDF de l'évaluation diagnostique en cours..."
# Edge requires file:// absolute path for local files to print correctly
$fileUrl = "file:///" + $inputHtml.Replace('\', '/').Replace(' ', '%20')

Write-Host "URL du fichier : $fileUrl"
Write-Host "Destination du PDF : $outputPdf"

# We execute Edge with parameters
& $edgePath --headless --no-sandbox --disable-gpu --print-to-pdf="$outputPdf" "$fileUrl"

# Sleep 5 seconds to wait for file writing to finish
Start-Sleep -Seconds 5

if (Test-Path $outputPdf) {
    Write-Host "Génération réussie ! Le PDF est disponible à : $outputPdf"
} else {
    Write-Error "Erreur lors de la génération du PDF."
}
