$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$inputHtml = Join-Path $scriptDir "index.html"
$outputPdf = Join-Path $scriptDir "devoir_vacances_3eme.pdf"
$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

if (-not (Test-Path $edgePath)) {
    Write-Error "Microsoft Edge introuvable dans le dossier par defaut."
    exit 1
}

Write-Host "Generation du PDF en cours..."
# Edge requires file:// absolute path for local files to print correctly
$fileUrl = "file:///" + $inputHtml.Replace('\', '/')

& $edgePath --headless --no-sandbox --disable-gpu --print-to-pdf="$outputPdf" "$fileUrl"

if (Test-Path $outputPdf) {
    Write-Host "Generation reussie ! Le PDF est disponible a : $outputPdf"
} else {
    Write-Error "Erreur lors de la generation du PDF."
}
