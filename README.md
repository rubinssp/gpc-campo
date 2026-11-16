# GCP Campo – locais para alvos

App web offline que sugere os **melhores locais para os alvos de controle (GCPs)** de um voo de drone, direto no celular ou na coletora Android.

- Abre o polígono do voo em **KML ou KMZ** (Google Earth, QGIS, SIGMINE) e converte para UTM / SIRGAS 2000.
- Espalha os alvos pelas bordas e pelo miolo, respeitando uma margem interna e as **áreas a evitar** (mata, cava ativa, açude), que podem vir no mesmo arquivo ou num segundo KML.
- Pontos de **checagem** opcionais, posicionados entre os alvos.
- Calcula o **GSD** e quantos pixels o alvo ocupa na foto (DJI Mini SE, Phantom 4 Pro ou câmera digitada).
- **Relevo opcional** (Copernicus GLO-90 via Open-Meteo): busca com internet, fica salvo e funciona offline depois; evita encostas e cobre partes altas e baixas.
- Toque num alvo e depois no mapa para mudar o lugar dele; "Recalcular" redistribui os outros.
- **Ir até o alvo** com o GPS do aparelho (distância e azimute), sem internet.
- Exporta **CSV** (Ponto, E, N, Cota, Lat, Lon) para a coletora e **KML** para o Google Earth.

## Instalar
1. Abra o endereço do GitHub Pages no Chrome, com internet, uma vez.
2. Toque em **Instalar** (ou menu ⋮ → Instalar app).
3. Use offline pelo ícone na tela inicial.

## Atualizar
Troque os arquivos e mude `CACHE` em `sw.js` (ex.: `gcp-campo-v2`).
