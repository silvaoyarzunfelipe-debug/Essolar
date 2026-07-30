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

// Imagen de kit estilo fotografía: casa con techo de paneles al atardecer,
// cinta con kWp y batería si el kit la incluye.
function svgKitBanner(p) {
  const kwpTxt = String(p.kwp.toFixed(2)).replace(/0$/, "").replace(".", ",");
  const conBat = p.batKwh > 0;
  const batTxt = String(p.batKwh).replace(".", ",");
  // Techo: grilla 6x3 en plano inclinado (skewX). Celdas con panel según cantidad real (máx 18).
  const nPan = Math.min(p.paneles, 18);
  const cols = 6, filas = 3;
  const cw = 36, ch = 39, gx = 2, gy = 2, X0 = 205, Y0 = 42;
  let celdas = "";
  for (let f = 0; f < filas; f++) {
    for (let c = 0; c < cols; c++) {
      const idx = f * cols + c;
      const x = X0 + c * (cw + gx), y = Y0 + f * (ch + gy);
      if (idx < nPan) {
        celdas += `<rect x="${x}" y="${y}" width="${cw}" height="${ch}" rx="2" fill="url(#celdaPanel-${p.sku})" stroke="#9fc4e8" stroke-width="1"/>
        <line x1="${x + cw / 2}" y1="${y}" x2="${x + cw / 2}" y2="${y + ch}" stroke="#7aa8d4" stroke-width="0.7" opacity="0.7"/>`;
      } else {
        celdas += `<rect x="${x}" y="${y}" width="${cw}" height="${ch}" fill="#5d6672" opacity="0.35"/>`;
      }
    }
  }
  const bateria = conBat ? `
    <g transform="translate(342,96)">
      <rect x="8" y="-7" width="24" height="9" rx="3" fill="#1d7a43"/>
      <rect width="40" height="58" rx="8" fill="url(#gBat-${p.sku})" stroke="#1d7a43" stroke-width="2"/>
      <path d="M23 10 L13 32 L20 32 L17 48 L29 26 L22 26 L26 10 Z" fill="#ffffff"/>
      <rect x="-4" y="62" width="48" height="16" rx="8" fill="rgba(8,24,38,0.75)"/>
      <text x="20" y="73" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="700" font-family="Arial, sans-serif">${batTxt} kWh</text>
    </g>` : "";
  return `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${p.nombre}: ${kwpTxt} kWp">
    <defs>
      <linearGradient id="cieloKit-${p.sku}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#9db8d2"/><stop offset="0.55" stop-color="#f3c98b"/><stop offset="1" stop-color="#f0a55c"/>
      </linearGradient>
      <linearGradient id="celdaPanel-${p.sku}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#2b4f7e"/><stop offset="0.5" stop-color="#16304f"/><stop offset="1" stop-color="#0e2036"/>
      </linearGradient>
      <linearGradient id="gCinta-${p.sku}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#f4511e"/><stop offset="1" stop-color="#f5a623"/>
      </linearGradient>
      <linearGradient id="gBat-${p.sku}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#4cc46f"/><stop offset="1" stop-color="#2a9d52"/>
      </linearGradient>
      <linearGradient id="gMadera-${p.sku}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#c98d5a"/><stop offset="1" stop-color="#a96f42"/>
      </linearGradient>
      <clipPath id="clipTecho-${p.sku}"><polygon points="66,160 172,40 366,40 260,160"/></clipPath>
    </defs>
    <rect width="400" height="260" fill="url(#cieloKit-${p.sku})"/>
    <circle cx="118" cy="70" r="56" fill="#ffe9bd" opacity="0.85"/>
    <circle cx="118" cy="70" r="26" fill="#fff6e0"/>
    <ellipse cx="320" cy="26" rx="90" ry="12" fill="#ffffff" opacity="0.25"/>
    <ellipse cx="60" cy="34" rx="70" ry="10" fill="#ffffff" opacity="0.2"/>
    <!-- chimenea -->
    <rect x="316" y="14" width="22" height="40" fill="#8a5a3b"/>
    <rect x="312" y="10" width="30" height="8" fill="#6f452c"/>
    <!-- techo con paneles -->
    <polygon points="66,160 172,40 366,40 260,160" fill="#454c57"/>
    <g clip-path="url(#clipTecho-${p.sku})"><g transform="skewX(-41.5)">${celdas}</g></g>
    <polygon points="66,160 172,40 366,40 260,160" fill="none" stroke="#333a44" stroke-width="3"/>
    <!-- alero y fachada -->
    <rect x="58" y="158" width="212" height="10" fill="#333a44"/>
    <rect x="70" y="168" width="190" height="74" fill="url(#gMadera-${p.sku})"/>
    <g stroke="#8f5c33" stroke-width="1" opacity="0.5">
      <line x1="70" y1="182" x2="260" y2="182"/><line x1="70" y1="196" x2="260" y2="196"/>
      <line x1="70" y1="210" x2="260" y2="210"/><line x1="70" y1="224" x2="260" y2="224"/>
    </g>
    <rect x="84" y="180" width="42" height="52" rx="2" fill="#ffca7a" stroke="#5c3d22" stroke-width="3"/>
    <line x1="105" y1="180" x2="105" y2="232" stroke="#5c3d22" stroke-width="2"/>
    <rect x="140" y="180" width="42" height="52" rx="2" fill="#ffca7a" stroke="#5c3d22" stroke-width="3"/>
    <line x1="161" y1="180" x2="161" y2="232" stroke="#5c3d22" stroke-width="2"/>
    <rect x="200" y="184" width="34" height="58" rx="2" fill="#5c3d22"/>
    <circle cx="228" cy="214" r="2.5" fill="#f5a623"/>
    <!-- muro lateral derecho -->
    <polygon points="260,160 366,40 366,242 260,242" fill="#b57847" opacity="0.9"/>
    <polygon points="260,160 366,40 366,242 260,242" fill="#00000022"/>
    <rect x="300" y="180" width="34" height="40" rx="2" fill="#ffca7a" stroke="#5c3d22" stroke-width="3"/>
    <!-- suelo y vegetación -->
    <rect y="240" width="400" height="20" fill="#6d4a33"/>
    <ellipse cx="52" cy="238" rx="34" ry="22" fill="#c75b2e"/>
    <ellipse cx="30" cy="244" rx="22" ry="14" fill="#a34423"/>
    <ellipse cx="286" cy="244" rx="26" ry="12" fill="#4a6b3a"/>
    <ellipse cx="380" cy="246" rx="30" ry="12" fill="#3f5c32"/>
    <!-- cinta kWp -->
    <g transform="rotate(7 400 0)">
      <rect x="222" y="-22" width="230" height="56" fill="url(#gCinta-${p.sku})"/>
      <text x="330" y="24" text-anchor="middle" fill="#ffffff" font-size="24" font-weight="800" font-family="Arial, sans-serif">${kwpTxt} kWp</text>
    </g>
    ${bateria}
  </svg>`;
}

// Card de kit compartida entre home y tienda.
function plantillaKit(p) {
  const batChip = p.batKwh > 0
    ? `<span><strong>Batería:</strong> ${String(p.batKwh).replace(".", ",")} kWh</span>`
    : `<span><strong>Batería:</strong> ampliable</span>`;
  const wsp = `https://wa.me/${ESSOLAR_CONFIG.whatsapp}?text=${encodeURIComponent("Hola, me interesa el " + p.nombre + " (SKU " + p.sku + "). ¿Me pueden orientar?")}`;
  return `
    <div class="kit-img">${svgKitBanner(p)}<img class="kit-foto" src="img/kits/${p.sku}.jpg" alt="" loading="lazy" onerror="this.parentElement.querySelector('.kit-chips-img').remove(); this.remove()"><div class="kit-chips-img"><span class="chip-kwp">${String(p.kwp.toFixed(2)).replace(/0$/, "").replace(".", ",")} kWp</span>${p.batKwh > 0 ? `<span class=\"chip-bat\">🔋 ${String(p.batKwh).replace(".", ",")} kWh</span>` : ""}</div></div>
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
