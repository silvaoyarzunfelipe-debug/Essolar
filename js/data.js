// Catálogo essolar.cl — precios CLP IVA incluido, solo equipos.
// NOTA: capacidades de batería pendientes de ajustar a módulos GoodWe Lynx reales del distribuidor.
const ESSOLAR_PRODUCTS = [
  {
    sku: "ES-OG-4K-B5", sistema: "Off-Grid", inversorKw: 4, paneles: 5, panelW: 620, kwp: 3.10, batKwh: 5,
    precio: 2386300,
    nombre: "Kit Solar Off-Grid Híbrido 4 kW",
    resumen: "5 paneles de 620 W · 3,1 kWp · inversor híbrido GoodWe 4 kW · batería 5 kWh",
    desc: "El punto de entrada a la independencia energética. Este kit combina un inversor híbrido GoodWe de 4 kW con 3,1 kWp de generación fotovoltaica y una batería de litio de 5 kWh, suficiente para cubrir iluminación, refrigerador, TV, router y carga de dispositivos en una vivienda pequeña o cabaña. El inversor híbrido gestiona automáticamente la prioridad entre sol, batería y generador de respaldo, por lo que no necesitas intervenir en la operación diaria. Es la opción correcta si tu consumo mensual es acotado y buscas un sistema serio sin sobredimensionar la inversión.",
    ideal: ["Cabañas y viviendas pequeñas sin acceso a red", "Parcelas de agrado con uso de fin de semana", "Primer sistema off-grid con posibilidad de ampliación"],
    nota: "Con 5 kWh útiles de acumulación, dimensiona tus consumos nocturnos con margen: un refrigerador eficiente más iluminación LED consume del orden de 1,5–2 kWh por noche. Si proyectas bomba de agua o herramientas eléctricas, evalúa directamente el kit de 6 u 8 kW. La instalación interior debe declararse ante la SEC mediante trámite TE-1, ejecutado por instalador autorizado — servicio que ofrecemos como adicional."
  },
  {
    sku: "ES-OG-6K-B5", sistema: "Off-Grid", inversorKw: 6, paneles: 5, panelW: 620, kwp: 3.10, batKwh: 5,
    precio: 2846300,
    nombre: "Kit Solar Off-Grid Híbrido 6 kW",
    resumen: "5 paneles de 620 W · 3,1 kWp · inversor híbrido GoodWe 6 kW · batería 5 kWh",
    desc: "La misma generación del kit de entrada, pero con un inversor GoodWe de 6 kW que te da holgura real de potencia instantánea: puedes partir una bomba de agua, un hervidor o una herramienta sin que el sistema se proteja por sobrecarga. Es la configuración recomendada cuando el consumo diario es moderado pero existen cargas puntuales exigentes. Mantiene la batería de 5 kWh para respaldo nocturno y acepta generador como fuente auxiliar en días de baja radiación, con conmutación automática gestionada por el inversor.",
    ideal: ["Viviendas off-grid con bomba de pozo o hidropack", "Talleres rurales con herramientas monofásicas", "Usuarios que priorizan potencia sobre acumulación"],
    nota: "La diferencia entre 4 y 6 kW de inversor no está en cuánta energía generas al día (los paneles son los mismos) sino en cuántas cargas simultáneas soportas. Regla práctica: suma la potencia de partida de tus motores (una bomba de 1 HP puede demandar 3× su nominal al arrancar). Declaración TE-1 ante SEC requerida para la instalación interior."
  },
  {
    sku: "ES-OG-6K-B8", sistema: "Off-Grid", inversorKw: 6, paneles: 6, panelW: 620, kwp: 3.72, batKwh: 8.75,
    precio: 4013500,
    nombre: "Kit Solar Off-Grid Híbrido 6 kW",
    resumen: "6 paneles de 620 W · 3,72 kWp · inversor híbrido GoodWe 6 kW · batería 8,75 kWh",
    desc: "El equilibrio para vivir sin red todo el año. Con 3,72 kWp de generación y 8,75 kWh de batería, este kit sostiene el consumo de una vivienda familiar estándar: refrigerador, lavadora, iluminación completa, TV y electrónica, con autonomía nocturna cómoda. El inversor híbrido GoodWe de 6 kW absorbe las cargas de partida habituales de una casa y permite conectar generador para los frentes de mal tiempo del sur. Es nuestro kit más equilibrado en relación generación/acumulación/precio para residencia permanente.",
    ideal: ["Residencia permanente off-grid de familia pequeña", "Parcelas en zonas con buena radiación", "Reemplazo de generador como fuente principal"],
    nota: "En el sur de Chile la generación invernal puede caer al 30–40% de la estival; con 8,75 kWh de batería y generador auxiliar el sistema pasa el invierno sin sobresaltos. Recomendamos tablero con protecciones DC (fusibles y desconectador) y SPD en ambos lados del inversor. Instalación declarable vía TE-1 ante SEC."
  },
  {
    sku: "ES-OG-6K-B14", sistema: "Off-Grid", inversorKw: 6, paneles: 9, panelW: 620, kwp: 5.58, batKwh: 14.3,
    precio: 4870300,
    nombre: "Kit Solar Off-Grid Híbrido 6 kW",
    resumen: "9 paneles de 620 W · 5,58 kWp · inversor híbrido GoodWe 6 kW · batería 14,3 kWh",
    desc: "Máxima autonomía en la línea de 6 kW. Los 5,58 kWp de paneles cargan de sobra la batería de 14,3 kWh incluso en días parcialmente nublados, y esa acumulación te da una a dos noches completas de operación sin sol. Es la configuración para quien quiere minimizar el uso del generador a lo estrictamente excepcional. El inversor híbrido GoodWe administra la carga de forma automática priorizando siempre la energía solar disponible.",
    ideal: ["Residencia permanente con alta exigencia de autonomía", "Zonas con días nublados frecuentes", "Usuarios que quieren jubilar el generador"],
    nota: "La relación 5,58 kWp / 14,3 kWh permite recuperar carga completa de batería en un día de sol razonable — criterio clave que muchos sistemas mal dimensionados no cumplen y que acorta la vida útil del banco. Verifica que la corriente de cortocircuito del arreglo no exceda la entrada MPPT del inversor al ampliar paneles a futuro. TE-1 ante SEC para la instalación interior."
  },
  {
    sku: "ES-OG-8K-B5", sistema: "Off-Grid", inversorKw: 8, paneles: 5, panelW: 620, kwp: 3.10, batKwh: 5,
    precio: 3191300,
    nombre: "Kit Solar Off-Grid Híbrido 8 kW",
    resumen: "5 paneles de 620 W · 3,1 kWp · inversor híbrido GoodWe 8 kW · batería 5 kWh",
    desc: "Potencia de sobra, acumulación de entrada. Este kit está pensado para faenas, talleres y usos productivos donde lo crítico es mover cargas grandes durante el día — soldadoras, bombas, compresores — más que acumular energía para la noche. El inversor GoodWe de 8 kW entrega margen amplio de potencia instantánea y la batería de 5 kWh cubre iluminación y consumos base fuera de horario solar. Ampliable en paneles y batería según crezca la operación.",
    ideal: ["Faenas y talleres con cargas diurnas exigentes", "Sistemas de bombeo con consumo concentrado de día", "Proyectos que ampliarán paneles en etapa 2"],
    nota: "Si tu operación es esencialmente diurna, este dimensionamiento es eficiente: consumes la energía directamente del arreglo sin ciclar la batería, lo que alarga su vida útil. Para motores trifásicos consulta por la alternativa adecuada — este kit es monofásico. Declaración TE-1 ante SEC; en recintos de trabajo considera además las exigencias del Pliego Técnico RIC correspondiente."
  },
  {
    sku: "ES-OG-8K-B8", sistema: "Off-Grid", inversorKw: 8, paneles: 9, panelW: 620, kwp: 5.58, batKwh: 8.75,
    precio: 4755300,
    nombre: "Kit Solar Off-Grid Híbrido 8 kW",
    resumen: "9 paneles de 620 W · 5,58 kWp · inversor híbrido GoodWe 8 kW · batería 8,75 kWh",
    desc: "El kit familiar con músculo. Combina 5,58 kWp de generación, batería de 8,75 kWh y un inversor GoodWe de 8 kW capaz de mover una casa completa con cargas simultáneas: lavadora centrifugando mientras funciona el horno eléctrico y la bomba del pozo. Para una familia que vive off-grid sin querer administrar qué enciende y qué no, esta es la configuración que da tranquilidad. Generador auxiliar conectable con partida y detención automáticas según estado de carga.",
    ideal: ["Casa familiar off-grid con uso eléctrico intensivo", "Viviendas con bomba de pozo y electrodomésticos completos", "Quienes no quieren pensar en qué encienden"],
    nota: "Con 8 kW de inversor el tablero de distribución debe protegerse acorde: diferenciales y disyuntores dimensionados a la nueva capacidad, no a la antigua acometida si la hubiera. Es un punto que revisamos siempre en la visita técnica previa. TE-1 ante SEC incluible en nuestro servicio de tramitación."
  },
  {
    sku: "ES-OG-8K-B14", sistema: "Off-Grid", inversorKw: 8, paneles: 9, panelW: 620, kwp: 5.58, batKwh: 14.3,
    precio: 5330300,
    nombre: "Kit Solar Off-Grid Híbrido 8 kW",
    resumen: "9 paneles de 620 W · 5,58 kWp · inversor híbrido GoodWe 8 kW · batería 14,3 kWh",
    desc: "Potencia y autonomía sin transar ninguna de las dos. La batería de 14,3 kWh sostiene la casa una a dos noches completas y el inversor GoodWe de 8 kW responde a cualquier combinación razonable de cargas domésticas. Es el kit para residencia permanente en zonas donde el clima obliga a acumular: días cortos de invierno, nublados persistentes o simplemente la exigencia de no depender jamás del generador. La gestión solar-batería-generador es completamente automática.",
    ideal: ["Residencia permanente en el sur de Chile", "Familias con consumo nocturno alto", "Máxima independencia del generador"],
    nota: "Este kit tolera bien la incorporación futura de cargas grandes (por ejemplo, un minisplit para calefacción eficiente). Si ese es tu plan, díselo a nuestro equipo en la cotización: la posición del tablero y la sección de conductores se definen una sola vez y conviene dejarlas holgadas. TE-1 ante SEC requerido."
  },
  {
    sku: "ES-OG-12K-B5", sistema: "Off-Grid", inversorKw: 12, paneles: 9, panelW: 620, kwp: 5.58, batKwh: 5,
    precio: 4295300,
    nombre: "Kit Solar Off-Grid Híbrido 12 kW",
    resumen: "9 paneles de 620 W · 5,58 kWp · inversor híbrido GoodWe 12 kW · batería 5 kWh",
    desc: "Configuración de potencia mayor con acumulación de entrada, orientada a operaciones productivas diurnas: packing agrícola, riego tecnificado, talleres con maquinaria. Los 5,58 kWp alimentan directamente las cargas durante el día y el inversor GoodWe de 12 kW da margen para partidas de motores y funcionamiento simultáneo de equipos. La batería de 5 kWh mantiene servicios básicos fuera de horario solar. Una base seria para crecer por etapas en paneles y acumulación.",
    ideal: ["Riego y bombeo con operación diurna", "Packing y faenas agrícolas de temporada", "Proyectos productivos que crecerán por etapas"],
    nota: "En sistemas productivos el análisis correcto parte por la curva de consumo horaria, no por el promedio mensual. Si tu carga se concentra entre 10:00 y 17:00, este dimensionamiento aprovecha la generación directa y la batería chica deja de ser una limitante. Nuestro equipo de ingeniería puede levantar esa curva contigo antes de comprar. TE-1 ante SEC."
  },
  {
    sku: "ES-OG-12K-B14", sistema: "Off-Grid", inversorKw: 12, paneles: 9, panelW: 620, kwp: 5.58, batKwh: 14.3,
    precio: 5905300,
    nombre: "Kit Solar Off-Grid Híbrido 12 kW",
    resumen: "9 paneles de 620 W · 5,58 kWp · inversor híbrido GoodWe 12 kW · batería 14,3 kWh",
    desc: "El kit para casas grandes y usos mixtos casa-taller. Sus 12 kW de inversor GoodWe mueven simultáneamente lo que una vivienda amplia exige — cocina eléctrica, bomba, lavadora, herramientas — y la batería de 14,3 kWh entrega autonomía nocturna real. Con 5,58 kWp de generación el balance diario cierra para consumos residenciales altos, y el generador queda como respaldo genuinamente excepcional. Gestión automática de fuentes con prioridad solar.",
    ideal: ["Casas grandes con equipamiento eléctrico completo", "Uso mixto vivienda + taller u oficina", "Reemplazo definitivo de generador diario"],
    nota: "Si el consumo real supera los 15 kWh/día de forma sostenida, conviene evaluar el paso a 18 paneles: la batería grande sin generación suficiente termina ciclando a media carga, lo que degrada su vida útil. Te ayudamos a validar el número con tu boleta o un registro de consumo. TE-1 ante SEC."
  },
  {
    sku: "ES-OG-12K-B14X", sistema: "Off-Grid", inversorKw: 12, paneles: 18, panelW: 620, kwp: 11.16, batKwh: 14.3,
    precio: 7555500,
    nombre: "Kit Solar Off-Grid Híbrido 12 kW",
    resumen: "18 paneles de 620 W · 11,16 kWp · inversor híbrido GoodWe 12 kW · batería 14,3 kWh",
    desc: "Generación al doble: 11,16 kWp que cargan la batería de 14,3 kWh incluso en condiciones de radiación desfavorables, con excedente diurno abundante para consumir directo del arreglo. Es la configuración off-grid para quien no acepta compromisos — casas grandes en el sur, hostales y lodges, operaciones que funcionan todos los días del año. El inversor GoodWe de 12 kW administra el conjunto y el generador pasa a ser un seguro que rara vez se usa.",
    ideal: ["Lodges, hostales y turismo rural", "Casas grandes en zonas de baja radiación invernal", "Operación off-grid 365 días sin generador"],
    nota: "18 paneles exigen diseño serio del arreglo: strings balanceados en el MPPT, estructura calculada para viento según la zona, y canalización DC con protecciones adecuadas. La diferencia entre una instalación correcta y una improvisada se nota el primer temporal. Nuestra instalación incluye ese cálculo. TE-1 ante SEC."
  },
  {
    sku: "ES-OG-16K-B8", sistema: "Off-Grid", inversorKw: 16, paneles: 9, panelW: 620, kwp: 5.58, batKwh: 8.75,
    precio: 6198500,
    nombre: "Kit Solar Off-Grid Híbrido 16 kW",
    resumen: "9 paneles de 620 W · 5,58 kWp · inversor híbrido GoodWe 16 kW · batería 8,75 kWh",
    desc: "Inversor de gran capacidad para cargas exigentes con demanda concentrada. Los 16 kW de potencia GoodWe permiten operar equipamiento comercial o agrícola pesado — cámaras de frío, compresores, maquinaria de taller — mientras los 5,58 kWp y la batería de 8,75 kWh cubren la operación base. Configuración típica de primera etapa en proyectos productivos que ampliarán generación una vez validada la operación.",
    ideal: ["Pymes rurales con maquinaria exigente", "Cámaras de frío y procesos con compresores", "Primera etapa de proyecto productivo escalable"],
    nota: "Un inversor de 16 kW con 5,58 kWp de generación implica que las cargas grandes deben coincidir con horas de sol o apoyarse en generador. Es un diseño válido para demanda concentrada y puntual; si tu operación es continua, prioriza la versión de 12 o 18 paneles. Conversemos tu perfil de carga antes de decidir. TE-1 ante SEC."
  },
  {
    sku: "ES-OG-16K-B14", sistema: "Off-Grid", inversorKw: 16, paneles: 9, panelW: 620, kwp: 5.58, batKwh: 14.3,
    precio: 7003500,
    nombre: "Kit Solar Off-Grid Híbrido 16 kW",
    resumen: "9 paneles de 620 W · 5,58 kWp · inversor híbrido GoodWe 16 kW · batería 14,3 kWh",
    desc: "La variante de acumulación reforzada en la línea de 16 kW. La batería de 14,3 kWh extiende la operación de cargas comerciales hacia la tarde-noche: un local que atiende hasta las 22:00, una sala de procesos con turno vespertino, un sistema de frío que no puede detenerse. El inversor GoodWe de 16 kW asegura que la potencia nunca sea el cuello de botella, y el generador auxiliar entra solo cuando la acumulación lo requiere.",
    ideal: ["Comercios con horario extendido sin red", "Procesos con frío que no admite cortes", "Operaciones con turno vespertino"],
    nota: "Para cargas de frío continuo calcula la energía de 24 h, no solo la potencia: un compresor de 2 kW con 50% de ciclo de trabajo son 24 kWh/día — más de lo que 5,58 kWp generan en invierno. En esos casos la ampliación a 12–18 paneles no es opcional, es de diseño. Nuestro equipo lo dimensiona contigo. TE-1 ante SEC."
  },
  {
    sku: "ES-OG-16K-B8X", sistema: "Off-Grid", inversorKw: 16, paneles: 12, panelW: 620, kwp: 7.44, batKwh: 8.75,
    precio: 6877000,
    nombre: "Kit Solar Off-Grid Híbrido 16 kW",
    resumen: "12 paneles de 620 W · 7,44 kWp · inversor híbrido GoodWe 16 kW · batería 8,75 kWh",
    desc: "Más generación para la línea de 16 kW: 7,44 kWp que alimentan directamente cargas diurnas intensivas y mantienen la batería de 8,75 kWh siempre disponible para el cierre del día. Configuración pensada para operaciones productivas de jornada completa — riego, packing, talleres — donde el grueso del consumo ocurre con sol y la acumulación cumple rol de respaldo y servicios base nocturnos.",
    ideal: ["Operaciones agrícolas de jornada completa", "Talleres y maestranzas rurales", "Consumo diurno intensivo con base nocturna acotada"],
    nota: "Con 12 paneles el arreglo típico va en dos strings; la orientación e inclinación de cada uno afecta el rendimiento del MPPT. Si tu techo tiene dos aguas útiles, aprovecharlas bien es parte del diseño, no un detalle. Lo resolvemos en la visita técnica. TE-1 ante SEC."
  },
  {
    sku: "ES-OG-16K-B14X", sistema: "Off-Grid", inversorKw: 16, paneles: 18, panelW: 620, kwp: 11.16, batKwh: 14.3,
    precio: 8360500,
    nombre: "Kit Solar Off-Grid Híbrido 16 kW",
    resumen: "18 paneles de 620 W · 11,16 kWp · inversor híbrido GoodWe 16 kW · batería 14,3 kWh",
    desc: "El tope de la línea 16 kW: 11,16 kWp de generación, 14,3 kWh de acumulación y potencia GoodWe de sobra para operar una instalación comercial o una gran casa sin red, todos los días del año. Con esta relación generación/batería el sistema se recupera rápido tras días malos y el generador queda relegado a emergencias reales. Para proyectos donde la energía es infraestructura crítica, no un experimento.",
    ideal: ["Instalaciones comerciales sin acceso a red", "Grandes casas con ocupación permanente", "Proyectos donde la continuidad es crítica"],
    nota: "A esta escala el proyecto merece memoria de cálculo: caídas de tensión, coordinación de protecciones, puesta a tierra y estructura verificada por viento. Es exactamente el tipo de ingeniería que incluimos en nuestra instalación y que diferencia un sistema confiable de una suma de componentes. TE-1 ante SEC."
  },
  {
    sku: "ES-OG-24K-B14", sistema: "Off-Grid", inversorKw: 24, paneles: 18, panelW: 620, kwp: 11.16, batKwh: 14.3,
    precio: 8360500,
    nombre: "Kit Solar Off-Grid Híbrido 24 kW",
    resumen: "18 paneles de 620 W · 11,16 kWp · inversor híbrido GoodWe 24 kW · batería 14,3 kWh",
    desc: "Nuestra mayor capacidad de potencia instantánea: 24 kW de inversor GoodWe para operaciones con maquinaria pesada, partidas de motores grandes o alta simultaneidad de cargas. Comparte generación (11,16 kWp) y acumulación (14,3 kWh) con el tope de la línea 16 kW, pero duplica el margen de potencia — la variable que define si tu proceso puede o no funcionar a la vez. Para agroindustria, maestranzas y proyectos comerciales fuera de red.",
    ideal: ["Agroindustria con motores de alta demanda", "Maestranzas y procesos con simultaneidad de cargas", "Proyectos comerciales fuera de red"],
    nota: "Elegir entre este kit y el 16 kW equivalente es una decisión de potencia, no de energía: mismo balance diario, distinta capacidad de simultaneidad. Si dudas, la respuesta está en tu peak de demanda de 15 minutos, no en tu consumo mensual. Levantamos ese dato en terreno antes de que inviertas de más — o de menos. TE-1 ante SEC."
  },
  {
    sku: "ES-ON-3K", sistema: "On-Grid", inversorKw: 3, paneles: 5, panelW: 620, kwp: 3.10, batKwh: 0,
    precio: 3162500,
    nombre: "Kit Solar On-Grid Híbrido 3 kW",
    resumen: "5 paneles de 620 W · 3,1 kWp · inversor On-Grid híbrido GoodWe 3 kW",
    desc: "Tu primera rebaja seria de la cuenta de luz. Este kit conectado a red genera durante el día la energía que tu casa consume, y los excedentes se inyectan a la red bajo el mecanismo de netbilling de la Ley 21.118, descontándose de tu boleta. El inversor híbrido GoodWe de 3 kW deja además la puerta abierta a incorporar baterías más adelante sin cambiar de equipo. Ideal para viviendas con cuentas de $40.000–$70.000 mensuales.",
    ideal: ["Viviendas urbanas con cuenta media", "Primer paso solar con equipo ampliable", "Consumo concentrado en el día"],
    nota: "Los sistemas conectados a red requieren tramitación TE-4 ante la SEC y el proceso de conexión con tu distribuidora para activar el netbilling — sin ese trámite, no hay descuento por inyección. Es nuestro servicio de tramitación SEC, con nombre y apellido: lo hacemos nosotros, de la declaración a la puesta en servicio."
  },
  {
    sku: "ES-ON-5K", sistema: "On-Grid", inversorKw: 5, paneles: 8, panelW: 620, kwp: 4.96, batKwh: 0,
    precio: 3438500,
    nombre: "Kit Solar On-Grid Híbrido 5 kW",
    resumen: "8 paneles de 620 W · 4,96 kWp · inversor On-Grid híbrido GoodWe 5 kW",
    desc: "El kit conectado a red más equilibrado para una casa familiar: 4,96 kWp que cubren el consumo diurno completo de la mayoría de los hogares chilenos y generan excedentes que la distribuidora descuenta de tu cuenta vía netbilling. El inversor híbrido GoodWe de 5 kW admite baterías a futuro, de modo que puedes partir bajando la cuenta hoy y sumar respaldo ante cortes mañana, sin duplicar inversión en equipos.",
    ideal: ["Casas familiares con cuenta $70.000–$120.000", "Quienes planean batería de respaldo a futuro", "Techos con buena orientación norte"],
    nota: "Bajo netbilling los excedentes se valorizan a precio de energía (no de cuenta completa), por lo que el mejor retorno viene de autoconsumir: programa lavadora, termo eléctrico y cargas desplazables en horario solar. En la propuesta te entregamos la estimación de generación mensual esperada según tu comuna. TE-4 y conexión con la distribuidora incluibles en nuestra tramitación."
  },
  {
    sku: "ES-ON-6K", sistema: "On-Grid", inversorKw: 6, paneles: 10, panelW: 620, kwp: 6.20, batKwh: 0,
    precio: 4025000,
    nombre: "Kit Solar On-Grid Híbrido 6 kW",
    resumen: "10 paneles de 620 W · 6,2 kWp · inversor On-Grid híbrido GoodWe 6 kW",
    desc: "Para consumos altos: 6,2 kWp de generación que hacen retroceder de forma contundente cuentas sobre $120.000. Diez paneles de 620 W alimentan la vivienda durante el día e inyectan el excedente a la red con descuento en boleta vía netbilling. El inversor híbrido GoodWe de 6 kW soporta la incorporación posterior de baterías, convirtiendo el sistema en respaldo ante cortes sin cambiar el equipo central.",
    ideal: ["Casas grandes con climatización eléctrica", "Cuentas mensuales sobre $120.000", "Hogares con auto eléctrico o proyecto de tenerlo"],
    nota: "Si cargas o cargarás un auto eléctrico en casa, este es el punto de partida correcto: la carga domiciliaria típica (7 kW AC) conviene programarla en horario solar para maximizar autoconsumo. Verificamos también que tu empalme y tablero soporten la nueva configuración — parte del checklist de nuestra visita técnica. TE-4 ante SEC."
  },
  {
    sku: "ES-ON-8K", sistema: "On-Grid", inversorKw: 8, paneles: 13, panelW: 620, kwp: 8.06, batKwh: 0,
    precio: 4887500,
    nombre: "Kit Solar On-Grid Híbrido 8 kW",
    resumen: "13 paneles de 620 W · 8,06 kWp · inversor On-Grid híbrido GoodWe 8 kW",
    desc: "Nuestro mayor kit conectado a red: 8,06 kWp orientados a grandes consumos residenciales y pymes — oficinas, locales comerciales, consultas — donde la operación diurna coincide naturalmente con la generación solar. La inversión se recupera vía autoconsumo directo más netbilling por excedentes, y el inversor híbrido GoodWe de 8 kW queda preparado para baterías si el negocio exige continuidad ante cortes.",
    ideal: ["Pymes con operación diurna", "Grandes casas con consumo eléctrico intensivo", "Negocios que evalúan respaldo ante cortes"],
    nota: "Para pymes el análisis correcto compara tu curva de consumo con la curva de generación: si operas de lunes a viernes en horario hábil, el calce es casi perfecto y el retorno mejora frente al caso residencial. Revisamos además la capacidad disponible de tu empalme antes de confirmar el diseño. TE-4 ante SEC y gestión de netbilling con tu distribuidora, servicio incluible."
  }
];

const ESSOLAR_CONFIG = {
  // TODO: reemplazar por el número de WhatsApp comercial de essolar.cl
  whatsapp: "56900000000",
  email: "contacto@essolar.cl",
  garantiaInversor: "Inversor GoodWe: 5 años, ampliable a 10 con registro",
  garantiaBateria: "Batería GoodWe Lynx: 10 años",
  garantiaPaneles: "Paneles: garantía según fabricante"
};

function clp(n) {
  return "$" + n.toLocaleString("es-CL");
}

// Ilustración SVG parametrizada: casa con paneles según el kit.
// Off-Grid muestra batería; On-Grid muestra poste de red.
function svgCasaKit(p) {
  const nPan = Math.min(p.paneles, 8);
  const porFila = Math.min(nPan, 4);
  const filas = nPan > 4 ? 2 : 1;
  const panW = 30, panH = 26, gap = 5;
  let paneles = "";
  for (let f = 0; f < filas; f++) {
    const enFila = f === 0 ? porFila : nPan - porFila;
    for (let i = 0; i < enFila; i++) {
      const x = 200 - (enFila * (panW + gap)) / 2 + i * (panW + gap);
      const y = 66 + f * (panH + 5);
      paneles += `<g transform="translate(${x},${y}) skewX(-14)">
        <rect width="${panW}" height="${panH}" rx="2" fill="#14406b" stroke="#0b2540" stroke-width="1.5"/>
        <line x1="${panW/2}" y1="0" x2="${panW/2}" y2="${panH}" stroke="#3b6ea5" stroke-width="1"/>
        <line x1="0" y1="${panH/2}" x2="${panW}" y2="${panH/2}" stroke="#3b6ea5" stroke-width="1"/>
      </g>`;
    }
  }
  const extra = p.sistema === "Off-Grid"
    ? `<rect x="318" y="150" width="34" height="46" rx="4" fill="#1a7f5a" stroke="#14684a" stroke-width="2"/>
       <rect x="324" y="144" width="22" height="8" rx="2" fill="#14684a"/>
       <path d="M338 158 L328 174 L335 174 L331 190 L343 171 L336 171 L340 158 Z" fill="#f5a623"/>`
    : `<line x1="345" y1="196" x2="345" y2="88" stroke="#8a7a66" stroke-width="6"/>
       <line x1="325" y1="100" x2="365" y2="100" stroke="#8a7a66" stroke-width="4"/>
       <path d="M328 102 Q300 118 268 96" stroke="#55637a" stroke-width="2" fill="none"/>
       <path d="M362 102 Q380 130 372 196" stroke="#55637a" stroke-width="2" fill="none"/>`;
  return `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${p.nombre}: casa con ${p.paneles} paneles solares">
    <defs>
      <linearGradient id="cielo-${p.sku}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#bfe0f5"/><stop offset="1" stop-color="#e8f4fc"/>
      </linearGradient>
      <clipPath id="techo-${p.sku}"><polygon points="108,118 168,58 232,58 292,118"/></clipPath>
    </defs>
    <rect width="400" height="220" fill="url(#cielo-${p.sku})"/>
    <circle cx="52" cy="46" r="22" fill="#f5a623"/>
    <g stroke="#f5a623" stroke-width="3" stroke-linecap="round">
      <line x1="52" y1="12" x2="52" y2="4"/><line x1="52" y1="80" x2="52" y2="88"/>
      <line x1="18" y1="46" x2="10" y2="46"/><line x1="86" y1="46" x2="94" y2="46"/>
      <line x1="28" y1="22" x2="22" y2="16"/><line x1="76" y1="70" x2="82" y2="76"/>
      <line x1="76" y1="22" x2="82" y2="16"/><line x1="28" y1="70" x2="22" y2="76"/>
    </g>
    <rect x="0" y="196" width="400" height="24" fill="#8fc9a8"/>
    <rect x="118" y="118" width="164" height="78" fill="#f7f1e3" stroke="#d9cdb4" stroke-width="2"/>
    <polygon points="108,118 168,58 232,58 292,118" fill="#c9b896"/>
    <g clip-path="url(#techo-${p.sku})">${paneles}</g>
    <rect x="138" y="150" width="26" height="46" rx="2" fill="#14406b"/>
    <circle cx="159" cy="174" r="2" fill="#f5a623"/>
    <rect x="196" y="146" width="34" height="26" rx="2" fill="#bfe0f5" stroke="#14406b" stroke-width="2.5"/>
    <line x1="213" y1="146" x2="213" y2="172" stroke="#14406b" stroke-width="2"/>
    <rect x="248" y="146" width="24" height="26" rx="2" fill="#bfe0f5" stroke="#14406b" stroke-width="2.5"/>
    ${extra}
  </svg>`;
}

// Banner tipo flyer del kit: componentes (panel / inversor / batería) sobre fondo oscuro.
function svgKitBanner(p) {
  const watts = (p.inversorKw * 1000).toLocaleString("es-CL");
  const conBat = p.batKwh > 0;
  const batTxt = String(p.batKwh).replace(".", ",");
  // posiciones: 3 columnas con batería, 2 sin batería
  const cx = conBat ? [90, 200, 310] : [130, 270];
  const items = [];
  // Panel solar
  items.push(`<g transform="translate(${cx[0] - 42},96)">
    <rect width="84" height="104" rx="4" fill="#122c47" stroke="#3b6ea5" stroke-width="2.5"/>
    <g stroke="#2e5f8a" stroke-width="1.4">
      <line x1="28" y1="0" x2="28" y2="104"/><line x1="56" y1="0" x2="56" y2="104"/>
      <line x1="0" y1="26" x2="84" y2="26"/><line x1="0" y1="52" x2="84" y2="52"/><line x1="0" y1="78" x2="84" y2="78"/>
    </g>
    <rect width="84" height="104" rx="4" fill="none" stroke="#5e8fc0" stroke-width="1" opacity="0.6"/>
  </g>
  <text x="${cx[0]}" y="218" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700" font-family="Arial, sans-serif">${p.paneles} PANELES ${p.panelW} W</text>`);
  // Inversor
  items.push(`<g transform="translate(${cx[1] - 38},104)">
    <rect width="76" height="92" rx="8" fill="#f4f6f8" stroke="#c9d3de" stroke-width="2"/>
    <rect x="14" y="14" width="48" height="26" rx="3" fill="#0b1f33"/>
    <text x="38" y="31" text-anchor="middle" fill="#f5a623" font-size="11" font-weight="700" font-family="Arial, sans-serif">${p.inversorKw} kW</text>
    <circle cx="24" cy="58" r="5" fill="#f5a623"/>
    <circle cx="40" cy="58" r="5" fill="#1fae5a"/>
    <rect x="14" y="72" width="48" height="6" rx="3" fill="#c9d3de"/>
  </g>
  <text x="${cx[1]}" y="218" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700" font-family="Arial, sans-serif">INVERSOR ${p.inversorKw} kW MPPT</text>`);
  // Batería
  if (conBat) {
    items.push(`<g transform="translate(${cx[2] - 32},100)">
      <rect width="64" height="96" rx="8" fill="#f4f6f8" stroke="#c9d3de" stroke-width="2"/>
      <rect x="0" y="30" width="64" height="12" fill="#f5a623"/>
      <text x="32" y="66" text-anchor="middle" fill="#0b1f33" font-size="12" font-weight="800" font-family="Arial, sans-serif">${batTxt}</text>
      <text x="32" y="80" text-anchor="middle" fill="#55637a" font-size="8" font-weight="700" font-family="Arial, sans-serif">kWh LiFePO4</text>
      <rect x="18" y="8" width="28" height="8" rx="4" fill="#c9d3de"/>
    </g>
    <text x="${cx[2]}" y="218" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700" font-family="Arial, sans-serif">BATERÍA LITIO ${batTxt} kWh</text>`);
  }
  const badge = p.sistema === "Off-Grid" ? "OFF-GRID HÍBRIDO" : "ON-GRID · NETBILLING";
  return `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${p.nombre}: componentes del kit">
    <defs>
      <linearGradient id="fondoKit-${p.sku}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0e2438"/><stop offset="1" stop-color="#081826"/>
      </linearGradient>
    </defs>
    <rect width="400" height="260" fill="url(#fondoKit-${p.sku})"/>
    <g stroke="#16324d" stroke-width="1"><line x1="0" y1="240" x2="400" y2="150"/><line x1="0" y1="260" x2="400" y2="190"/></g>
    <circle cx="368" cy="96" r="46" fill="#f5a623" opacity="0.10"/>
    <g transform="translate(16,14)">
      <circle cx="11" cy="11" r="7" fill="#f5a623"/>
      <g stroke="#f5a623" stroke-width="2" stroke-linecap="round">
        <line x1="11" y1="0" x2="11" y2="2"/><line x1="11" y1="20" x2="11" y2="22"/>
        <line x1="0" y1="11" x2="2" y2="11"/><line x1="20" y1="11" x2="22" y2="11"/>
      </g>
      <text x="28" y="16" fill="#ffffff" font-size="14" font-weight="800" letter-spacing="2" font-family="Arial, sans-serif">ESOLAR</text>
    </g>
    <g>
      <rect x="252" y="14" width="134" height="22" rx="11" fill="none" stroke="#f5a623" stroke-width="1.5"/>
      <text x="319" y="29" text-anchor="middle" fill="#f5a623" font-size="10" font-weight="800" font-family="Arial, sans-serif">${badge}</text>
    </g>
    <text x="200" y="76" text-anchor="middle" font-family="Arial, sans-serif">
      <tspan fill="#ffffff" font-size="27" font-weight="800">KIT SOLAR </tspan><tspan fill="#f5a623" font-size="27" font-weight="800">${watts} W</tspan>
    </text>
    ${items.join("")}
    <text x="200" y="246" text-anchor="middle" fill="#8fb3d4" font-size="9" font-weight="700" letter-spacing="1" font-family="Arial, sans-serif">EQUIPOS GOODWE · INCLUYE SET DE MONTAJE, CABLES Y PROTECCIONES</text>
  </svg>`;
}

// Card de kit compartida entre home y tienda.
function plantillaKit(p) {
  const batChip = p.batKwh > 0
    ? `<span><strong>Batería:</strong> ${String(p.batKwh).replace(".", ",")} kWh</span>`
    : `<span><strong>Batería:</strong> ampliable</span>`;
  const wsp = `https://wa.me/${ESSOLAR_CONFIG.whatsapp}?text=${encodeURIComponent("Hola, me interesa el " + p.nombre + " (SKU " + p.sku + "). ¿Me pueden orientar?")}`;
  return `
    <div class="kit-img">${svgKitBanner(p)}</div>
    <div class="badges">
      <span class="badge ${p.sistema === "On-Grid" ? "ongrid" : ""}">${p.sistema}</span>
      <span class="badge marca">GoodWe</span>
    </div>
    <h3>${p.nombre}</h3>
    <div class="chips">
      <span><strong>Inversor:</strong> ${p.inversorKw} kW</span>
      <span><strong>Paneles:</strong> ${p.paneles} × ${p.panelW} W</span>
      ${batChip}
    </div>
    <div class="bloque-precio">
      <div class="fila"><span>Solo equipos</span><strong>${clp(p.precio)}</strong></div>
      <small>(IVA incluido)</small>
      <p>Instalación, flete y tramitación SEC se cotizan aparte según proyecto y comuna.</p>
    </div>
    <div class="acciones">
      <a class="btn btn-verde" href="producto.html?sku=${p.sku}">Ver kit</a>
      <a class="btn btn-sol" href="cotizacion.html?sku=${p.sku}">Cotizar</a>
    </div>
    <a class="btn btn-wsp btn-block" target="_blank" rel="noopener" href="${wsp}">✆ Consultar WhatsApp</a>`;
}
