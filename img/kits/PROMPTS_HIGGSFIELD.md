# Protocolo de fotos de kits — Higgsfield AI (o cualquier generador)

## Cómo funciona
El sitio busca automáticamente `img/kits/<SKU>.jpg`. Si la foto existe, se muestra; si no, aparece la ilustración SVG de respaldo. **No hay que tocar código**: genera la imagen, guárdala con el nombre del SKU y súbela a esta carpeta.

- Formato: JPG, idealmente 800×520 px (proporción ~3:2), < 200 KB.
- Nombre exacto: `ES-OG-4K-B5.jpg`, `ES-ON-5K.jpg`, etc. (respetar mayúsculas).

## Prompt base (español — traducir a inglés suele dar mejores resultados)

> Fotografía realista de una casa moderna chilena de madera con un gran techo a dos aguas completamente cubierto de paneles solares fotovoltaicos azul oscuro, luz dorada de atardecer, ventanas cálidamente iluminadas, jardín con arbustos otoñales, cielo despejado con nubes suaves, ángulo tres cuartos desde el suelo, estilo fotografía de arquitectura, alta calidad, sin personas, sin texto, sin logos.

Versión en inglés:

> Realistic photography of a modern Chilean wooden house with a large gable roof fully covered with dark blue photovoltaic solar panels, golden sunset light, warmly lit windows, garden with autumn shrubs, clear sky with soft clouds, three-quarter angle from the ground, architecture photography style, high quality, no people, no text, no logos.

**Importante:** generar SIN texto ni logos — la cinta de kWp y el ícono de batería los pone el sitio encima (pendiente de activar si se quiere sobre fotos) o se dejan fuera. No incluir marcas.

## Variaciones por kit (cambiar solo la frase de paneles/contexto)

| SKU | Paneles a pedir | Contexto sugerido |
|---|---|---|
| ES-OG-4K-B5 | "5 solar panels in one row" | cabaña pequeña de madera |
| ES-OG-6K-B5 | "5 solar panels in one row" | casa rural con bomba de agua |
| ES-OG-6K-B8 | "6 solar panels in one row" | casa familiar en parcela |
| ES-OG-6K-B14 | "9 solar panels in two rows" | casa en el sur de Chile, bosque |
| ES-OG-8K-B5 | "5 solar panels" | galpón/taller rural |
| ES-OG-8K-B8 | "9 solar panels in two rows" | casa familiar grande |
| ES-OG-8K-B14 | "9 solar panels in two rows" | casa con clima lluvioso del sur |
| ES-OG-12K-B5 | "9 solar panels" | bodega agrícola con riego |
| ES-OG-12K-B14 | "9 solar panels in two rows" | casa grande con taller |
| ES-OG-12K-B14X | "18 solar panels in three rows" | lodge/hostal rural |
| ES-OG-16K-B8 | "9 solar panels" | pyme rural, cámara de frío |
| ES-OG-16K-B14 | "9 solar panels" | local comercial rural |
| ES-OG-16K-B8X | "12 solar panels in two rows" | packing agrícola |
| ES-OG-16K-B14X | "18 solar panels in three rows" | instalación comercial |
| ES-OG-24K-B14 | "18 solar panels in three rows" | agroindustria/maestranza |
| ES-ON-3K | "5 solar panels" | casa urbana chilena |
| ES-ON-5K | "8 solar panels in two rows" | casa familiar urbana |
| ES-ON-6K | "10 solar panels in two rows" | casa grande con auto eléctrico |
| ES-ON-8K | "13 solar panels in three rows" | oficina/local pyme |

## Checklist al subir
1. Nombre = SKU exacto + `.jpg`
2. Peso < 200 KB (comprimir en tinypng.com si hace falta)
3. Revisar que no haya texto/marcas generadas por la IA dentro de la imagen
