/* ============================================================
   CONFIGURACIÓN — edita solo este bloque
   ============================================================ */
const CONFIG = {
  // Clave pública de Web3Forms (https://web3forms.com): pon allí tu email y te envían la clave.
  // No es secreta: está pensada para ir en la web. Los mensajes llegan a tu bandeja.
  web3formsKey: "1b5bb779-d709-4295-917e-63224257ba3b",
  whatsapp: "34623184718",              // ← WhatsApp en formato internacional, sin + ni espacios
  whatsappLabel: "+34 623 184 718"      // ← cómo se muestra en pantalla
};

/* Prototipos. `img` es opcional: pon la ruta de una captura (assets/img/xxx.png)
   y sustituirá al icono. `url` solo para juegos ya publicados. */
const GAMES = [
  { id:"casa", icon:"🏚️", c:["#6d28d9","#1e1b4b"], cat:"puzzle", img:"assets/img/casa-02_buscando.png", shots:["assets/img/casa-02_buscando.png","assets/img/casa-03_encontrando.png","assets/img/casa-04_pista.png","assets/img/casa-05_nivel_completado.png","assets/img/casa-01_menu.png"],
    name:"Casa Encantada",
    genre:{es:"Objetos escondidos", en:"Hidden objects"},
    desc:{es:"Explora una mansión embrujada y encuentra los objetos ocultos en cada estancia.", en:"Explore a haunted mansion and find the hidden objects in every room."} },
  { id:"detective", icon:"🔍", c:["#0ea5e9","#1e3a8a"], cat:"puzzle", img:"assets/img/detective-06_pista_hallada.png", shots:["assets/img/detective-06_pista_hallada.png","assets/img/detective-08_pueblo_coloreado.png","assets/img/detective-05_buscando.png","assets/img/detective-02_mapa.png","assets/img/detective-07_color.png"],
    name:"Detective de la Fiesta Mayor",
    genre:{es:"Objetos escondidos", en:"Hidden objects"},
    desc:{es:"Escenas gigantes llenas de detalle donde resuelves casos buscando pistas.", en:"Huge detailed scenes where you solve cases by hunting for clues."} },
  { id:"runica", icon:"ᚱ", c:["#475569","#0f172a"], cat:"puzzle", img:"assets/img/runica-05_nivel_avanzado.png", shots:["assets/img/runica-05_nivel_avanzado.png","assets/img/runica-04_nivel_1.png","assets/img/runica-02_mapa.png","assets/img/runica-06_pista.png","assets/img/runica-08_codice.png"],
    name:"Rúnica",
    genre:{es:"Puzle", en:"Puzzle"},
    desc:{es:"Puzle de encajar patrones con runas vikingas, tono serio y mitológico.", en:"Pattern-fitting puzzle with Viking runes and a serious, mythological tone."} },
  { id:"vikingo", icon:"🛡️", c:["#0891b2","#164e63"], cat:"strategy", img:"assets/img/vikingos-aldea.jpg", shots:["assets/img/vikingos-aldea.jpg","assets/img/vikingos-titulo.jpg","assets/img/vikingos-jefe.jpg","assets/img/vikingos-castillo.jpg","assets/img/vikingos-nieve.jpg","assets/img/vikingos-cristal.jpg","assets/img/vikingos-campamento.jpg","assets/img/vikingos-heroes.jpg"],
    name:"Aldea Vikinga",
    genre:{es:"Defensa de base", en:"Base defense"},
    desc:{es:"Defiende tu aldea vikinga, mejora edificios y recluta guerreros.", en:"Defend your Viking village, upgrade buildings and recruit warriors."} },
  { id:"tactico", icon:"🎲", c:["#b45309","#451a03"], cat:"strategy", img:"assets/img/plen-arena.jpg", shots:["assets/img/plen-arena.jpg","assets/img/plen-bioma.jpg","assets/img/plen-mapa.jpg","assets/img/plen-supervivencia.jpg","assets/img/plen-ciudad.jpg","assets/img/plen-heroe.jpg","assets/img/plen-historia.jpg"],
    name:"Mazmorra Táctica",
    genre:{es:"Táctico por turnos", en:"Turn-based tactics"},
    desc:{es:"Combate táctico por turnos en mazmorras de fantasía, en solitario contra la IA.", en:"Turn-based dungeon tactics in a fantasy setting, solo against the AI."} },
  { id:"comics", icon:"📚", c:["#db2777","#4c1d95"], cat:"idle", img:"assets/img/comics-03_ampliada.png", shots:["assets/img/comics-03_ampliada.png","assets/img/comics-01_inicio.png","assets/img/comics-02_tienda.png","assets/img/comics-04_personal.png","assets/img/comics-05_mejoras.png","assets/img/comics-06_nivel.png"],
    name:"Cómics & Minis Tycoon",
    genre:{es:"Tycoon isométrico", en:"Isometric tycoon"},
    desc:{es:"Monta y amplía tu tienda friki de cómics y miniaturas, planta a planta.", en:"Build and expand your geek shop of comics and miniatures, floor by floor."} },
  { id:"gatos", icon:"🐱", c:["#f59e0b","#78350f"], cat:"idle", modes:["2d"], img:"assets/img/gatos-03_tablero.png", shots:["assets/img/gatos-03_tablero.png","assets/img/gatos-05_nuevo_gato.png","assets/img/gatos-06_glosario.png","assets/img/gatos-02_inicio.png","assets/img/gatos-07_nuevo_rey.png","assets/img/gatos-08_mundo_completo.png"],
    name:"Gatolución",
    genre:{es:"Fusión / idle", en:"Merge / idle"},
    desc:{es:"Fusiona gatos y hazlos evolucionar a lo largo de la historia. Mundo 1: Prehistoria, con 6 gatos, glosario y aviso de cada gato nuevo.", en:"Merge cats and evolve them through the ages of history. World 1: Prehistory, with 6 cats, a glossary and a popup for every new cat."} },
  { id:"yokai", icon:"👹", c:["#be123c","#1c1917"], cat:"action", img:"assets/img/yokai-3b_batalla_0.png", shots:["assets/img/yokai-3b_batalla_0.png","assets/img/yokai-4_cartas.png","assets/img/yokai-3_batalla_2.png","assets/img/yokai-1_menu.png","assets/img/yokai-6_talentos.png"],
    name:"Yōkai Hunter",
    genre:{es:"Survivor roguelike", en:"Survivor roguelike"},
    desc:{es:"Sobrevive a hordas de yōkai en el Japón Sengoku, mejorando tu build en cada partida.", en:"Survive yōkai hordes in Sengoku Japan, upgrading your build every run."} },
  { id:"dungeoncards", icon:"🃏", c:["#7c3aed","#1e1b4b"], cat:"cards", img:"assets/img/cartas-04_partida.png", shots:["assets/img/cartas-04_partida.png","assets/img/cartas-05_partida_avanzada.png","assets/img/cartas-h0_saltador.png","assets/img/cartas-h1_cultista.png"],
    name:"Dungeon de Cartas",
    genre:{es:"Solitario de cartas", en:"Card dungeon crawler"},
    desc:{es:"Solitario tipo dungeon crawler con tienda y progresión entre partidas.", en:"Dungeon-crawler card solitaire with a shop and meta progression."} },
  { id:"refugio", icon:"🦌", c:["#15803d","#422006"], cat:"idle", img:"assets/img/refugio-a_base.png", shots:["assets/img/refugio-a_base.png","assets/img/refugio-b_z1.png","assets/img/refugio-c_z4_solares.png","assets/img/refugio-e_z6.png","assets/img/refugio-f_z7.png","assets/img/refugio-h_ambulancia_sale.png"],
    name:"Refugio Ibérico",
    genre:{es:"Gestión", en:"Management"},
    desc:{es:"Gestiona un refugio de fauna ibérica: zonas, rescates y sueltas a la naturaleza.", en:"Run an Iberian wildlife shelter: zones, rescues and releases into the wild."} },
  { id:"campamento", icon:"🏕️", c:["#16a34a","#14532d"], cat:"idle", modes:["3d"],
    img:"assets/img/campamento-4.png", shots:["assets/img/campamento-4.png","assets/img/campamento-5.png","assets/img/campamento-6.png","assets/img/campamento-1.png","assets/img/campamento-2.png","assets/img/campamento-3.png"],
    name:"Campamento",
    genre:{es:"Idle tycoon 3D", en:"3D idle tycoon"},
    desc:{es:"Gestiona un camping en vista isométrica: recoge billetes y basura, contrata rangers y desbloquea zonas.", en:"Run a campsite in isometric view: collect cash and litter, hire rangers and unlock new areas."} },
  { id:"lobo", icon:"🐺", c:["#475569","#0c4a6e"], cat:"idle", modes:["3d"], img:"assets/img/lobo-03_combate.png", shots:["assets/img/lobo-03_combate.png","assets/img/lobo-04_guarida.png","assets/img/lobo-02_caza.png","assets/img/lobo-06_mejoras_nivel.png","assets/img/lobo-07_bioma_completo.png","assets/img/lobo-01_intro.png"],
    name:"Lobo Cazador",
    genre:{es:"Caza y mejoras", en:"Hunt & upgrade"},
    desc:{es:"Caza, carga, vende y mejora con un lobo por biomas ibérico, nevado y de fantasía. MVP 3D low poly: Sierra Ibérica con 4 presas y 4 mejoras.", en:"Hunt, carry, sell and upgrade as a wolf across Iberian, snowy and fantasy biomes. Low poly 3D MVP: Iberian Sierra with 4 prey and 4 upgrades."} },
];

/* Juegos propios ya publicados: NO están a la venta (sí un prototipo basado en ellos). */
const PUBLISHED = [
  { id:"sarten", icon:"🍳", c:["#ff8a3d","#c2410c"], name:"El juego de la sartén",
    img:"assets/img/sarten-destacada.jpg", shots:["assets/img/sarten-destacada.jpg","assets/img/sarten-1_calle.jpg","assets/img/sarten-2_gato.jpg","assets/img/sarten-3_vecina.jpg","assets/img/sarten-4_tarta.jpg","assets/img/sarten-5_ayuda.jpg","assets/img/sarten-6_jefes.jpg","assets/img/sarten-7_pueblo.jpg"],
    url:"https://play.google.com/store/apps/details?id=com.eljuegodelasarten.game",
    genre:{es:"Acción", en:"Action"},
    desc:{es:"Un héroe y su sartén. Combate cuerpo a cuerpo con humor. Nuestro juego, publicado en Google Play.", en:"A hero and his frying pan. Humorous melee combat. Our own game, live on Google Play."} }
];

const MODES = {
  all:{es:"Todos los estilos", en:"All styles"}, "2d":{es:"2D", en:"2D"}, "3d":{es:"3D Low Poly", en:"3D Low Poly"}
};
const CATS = {
  all:{es:"Todos", en:"All"}, action:{es:"Acción", en:"Action"}, puzzle:{es:"Puzle", en:"Puzzle"},
  strategy:{es:"Estrategia", en:"Strategy"}, idle:{es:"Idle / Tycoon", en:"Idle / Tycoon"},
  cards:{es:"Cartas", en:"Cards"}
};

/* Paquetes (estilo Fiverr). Precios en euros; edita aquí precios, plazos y características.
   Cada característica: [texto_es, texto_en, incluido] */
const PACKS = [
  { id:"basic", price:{"2d":65,"3d":99}, days:5, rev:2,
    name:{es:"Básico", en:"Basic"},
    title:{es:"Prototipo jugable", en:"Playable prototype"},
    desc:{es:"Prototipo funcional hecho con Godot 4 para validar tu idea y enseñarla a socios o inversores.", en:"Working Godot 4 prototype to validate your idea and show it to partners or investors."},
    feats:[
      ["Prototipo jugable","Playable prototype",1],
      ["1 nivel o escena","1 level or scene",1],
      ["Arte básico","Basic art",1],
      ["APK de prueba","Test APK",1],
      ["Entrega de archivos en ZIP","Files delivered as a ZIP",1],
      ["Animaciones","Animations",0],
      ["Subida a la tienda","Store upload",0],
      ["Código fuente","Source code",0]
    ] },
  { id:"standard", price:{"2d":250,"3d":299}, days:15, rev:3,
    name:{es:"Estándar", en:"Standard"},
    title:{es:"Juego completo", en:"Full game"},
    desc:{es:"Juego completo con progresión, varios niveles, arte propio y animaciones, listo para probar con jugadores.", en:"Complete game with progression, multiple levels, custom art and animations, ready to playtest."},
    feats:[
      ["Juego funcional completo","Complete working game",1],
      ["20 niveles","20 levels",1],
      ["Arte y UI propios","Custom art and UI",1],
      ["Animaciones","Animations",1],
      ["Guardado y ajustes","Save system and settings",1],
      ["Código fuente","Source code",1],
      ["Entrega de archivos en ZIP","Files delivered as a ZIP",1],
      ["Subida a la tienda","Store upload",0]
    ] },
  { id:"premium", price:{"2d":500,"3d":699}, days:30, rev:5,
    name:{es:"Premium", en:"Premium"},
    title:{es:"Juego + subida a tienda", en:"Game + store upload"},
    desc:{es:"Todo lo anterior más monetización y subida del juego a la tienda. Los costes de la tienda los cubre el cliente.", en:"Everything above plus monetization and uploading the game to the store. Store costs are covered by the client."},
    feats:[
      ["Juego funcional completo","Complete working game",1],
      ["40 niveles y progresión","40 levels and progression",1],
      ["Anuncios y compras integradas","Ads and in-app purchases",1],
      ["Arte, animaciones y sonido","Art, animations and sound",1],
      ["Entrega de archivos en ZIP","Files delivered as a ZIP",1],
      ["Subida a la tienda (costes a cargo del cliente)","Store upload (store costs paid by the client)",1],
      ["Código fuente","Source code",1],
      ["30 días de soporte","30 days of support",1]
    ] }
];

const I18N = {
  es:{ nav_home:"Inicio", contact_title_juegos:"Hablemos de tu juego", contact_sub_juegos:"Cuéntanos qué tienes en mente: género, referencias, plataforma y plazos. Te respondemos en 24-48 h.", contact_title_web:"Hablemos de tu web", contact_sub_web:"Cuéntanos qué necesitas: una web nueva o mantener la que ya tienes. Te respondemos en 24-48 h.", contact_title_ciber:"Hablemos de tu seguridad", contact_sub_ciber:"Cuéntanos qué quieres proteger o revisar. Te respondemos en 24-48 h y definimos el alcance contigo.", f_ph_msg_juegos:"Género, referencias, plazos, plataforma…", f_ph_msg_web:"Tipo de web, si ya tienes una, plazos…", f_ph_msg_ciber:"Qué quieres proteger o revisar, tamaño de la empresa, plazos…", wa_text_juegos:"Hola, me gustaría desarrollar un juego. Mi idea es: ", wa_text_web:"Hola, me interesa una web (creación o mantenimiento). Lo que necesito: ", wa_text_ciber:"Hola, me interesa un servicio de ciberseguridad. Lo que necesito: ", ws1:"Nos cuentas qué necesitas", ws2:"Propuesta y presupuesto cerrado", ws3:"Diseñamos y desarrollamos", ws4:"Publicamos y mantenemos", nav_games:"Juegos", nav_web:"Web", nav_cyber:"Ciberseguridad", main_eyebrow:"Desarrollo y ciberseguridad", main_title:"Juegos, webs y <em>ciberseguridad</em> a medida.", main_lead:"Creamos juegos móviles y páginas web, y protegemos a tu empresa con pentesting, SIEM, SOC y DLP.", main_cta1:"Hablemos", main_cta2:"Ver servicios", a_games_t:"Juegos móviles", a_games_p:"Prototipos jugables y juegos completos con Godot, en 2D o 3D low poly.", a_games_l:"Ver juegos →", a_web_t:"Web", a_web_p:"Creación de páginas web a medida y mantenimiento para que estén siempre al día y seguras.", a_web_l:"Ver web →", a_cyber_t:"Ciberseguridad", a_cyber_p:"Pentesting, SIEM con Wazuh y SOC, y prevención de fuga de datos (DLP).", a_cyber_l:"Ver ciberseguridad →", web_title:"Web: creación y mantenimiento", web_sub:"Tu web hecha a medida y siempre cuidada. Alcance claro y presupuesto cerrado antes de empezar.", w1_t:"Creación de webs", w1_p:"Diseño a medida, adaptado a móvil y ordenador, rápido y listo para publicar.", w2_t:"Mantenimiento", w2_p:"Actualizaciones, copias de seguridad, cambios de contenido y vigilancia para que tu web no se quede atrás.", w3_t:"Segura desde el principio", w3_p:"Configuración segura y revisión antes de salir, con el respaldo de nuestro equipo de ciberseguridad.", web_cta:"Pedir presupuesto web", cy_title:"Ciberseguridad para empresas", cy_sub:"Para saber dónde están tus riesgos y vigilarlos. Siempre con autorización y alcance pactado por escrito.", c1_t:"Pentesting", c1_p:"Pruebas de intrusión controladas sobre webs, redes y sistemas. Entregamos un informe con los hallazgos, su gravedad y cómo corregirlos.", c2_t:"SIEM (Wazuh) y SOC", c2_p:"Wazuh como SIEM: recoge y correlaciona los eventos de tus equipos y servidores. El SOC vigila esas alertas, las analiza y actúa ante los incidentes.", c3_t:"DLP", c3_p:"Prevención de fuga de datos: identificamos qué información sensible tienes y evitamos que salga de tu organización.", cs1:"Reunión y alcance", cs2:"Propuesta y presupuesto", cs3:"Ejecución del servicio", cs4:"Informe y seguimiento", cy_cta:"Pedir presupuesto de ciberseguridad", f_area:"¿Qué te interesa?", area_juegos:"Juegos", area_web:"Web", area_ciber:"Ciberseguridad", area_otro:"Otro", nav_protos:"Prototipos", nav_services:"Servicios", nav_contact:"Contacto", nav_packs:"Paquetes",
    pk_title:"Paquetes", pk_sub:"Elige el punto de partida. Si tu proyecto es distinto, te preparamos un presupuesto a medida.",
    pk_note:"Entregamos los archivos del juego en un ZIP. Solo el paquete Premium incluye la subida a la tienda, y los costes de la tienda (cuenta de desarrollador, tasas…) los cubre el cliente.", mode_label:"Estilo gráfico", f_mode:"Estilo gráfico", pk_both:"Disponible en 2D y 3D Low Poly",
    pk_days:"días de entrega", pk_rev:"revisiones", pk_continue:"Continuar", pk_ask:"Consultar por WhatsApp",
    pk_mail_subject:"Paquete %s — buski87.dev", pk_mail_body:"Hola, me interesa el paquete %s (%p €). Mi idea de juego es:\n\n",
    pk_wa_text:"Hola, me interesa el paquete %s (%p €). Mi idea de juego es: ",
    hero_eyebrow:"Estudio de juegos móviles",
    hero_title:"Tu idea de juego, <em>jugable</em> en pocos días.",
    hero_lead:"Desarrollamos juegos móviles a medida. Partimos de un prototipo funcional para que veas y toques tu idea antes de comprometer un gran presupuesto.",
    hero_cta1:"Quiero mi juego", hero_cta2:"Ver prototipos",
    stat_protos:"prototipos a la venta", stat_engine:"motor", stat_store:"Google Play",
    protos_title:"Prototipos a la venta",
    protos_sub:"Prototipos funcionales listos para adaptar a tu proyecto: tu temática, tu arte y tus reglas. Elige uno parecido a lo que buscas y hablamos.",
    nav_pub:"Nuestros juegos", pub_title:"Nuestros juegos publicados",
    pub_sub:"Juegos propios que ya están en tienda. No están a la venta, pero sí puedes encargarnos un prototipo basado en ellos.",
    pub_badge:"PUBLICADO", pub_own:"Juego propio · no está a la venta", pub_cta:"Quiero un prototipo basado en este juego",
    stat_pub:"juego publicado", stat_for_sale:"prototipos a la venta",
    pre_based:"Me interesa un prototipo basado en «%s». Mi idea y temática:\n",
    serv_title:"Juegos: qué hacemos por ti",
    s1_t:"Prototipo en días", s1_p:"Un MVP jugable con el bucle principal del juego para validar la idea cuanto antes.",
    s2_t:"Tu temática, tu estilo", s2_p:"Adaptamos mecánicas probadas a tu marca, historia o personajes originales.",
    s3_t:"Del prototipo a la tienda", s3_p:"Pulido, monetización y builds para Android. En el paquete Premium también subimos el juego a la tienda.",
    step1:"Nos cuentas la idea", step2:"Te enseñamos un prototipo", step3:"Lo ajustamos juntos", step4:"Te entregamos el juego",
    contact_title:"Hablemos de tu proyecto",
    contact_sub:"Cuéntanos qué necesitas: un juego, una web o un servicio de ciberseguridad. Te respondemos en 24-48 h.",
    contact_mail:"Escribir por email", contact_wa:"Escribir por WhatsApp",
    footer_priv:"Política de privacidad", footer_note:"Los nombres de los prototipos son provisionales. Todos los juegos usan arte y temática propios.",
    play:"Ver en Google Play", want:"Quiero algo así", live:"PUBLICADO", proto:"PROTOTIPO",
    mail_subject:"Consulta desde buski87.dev", mail_body:"Hola, me gustaría hablar de un proyecto. Mi idea es:\n\n",
    wa_text:"Hola, me gustaría hablar de un proyecto: ",
    mail_subject_game:"Quiero un juego como ", mail_body_game:"Hola, me interesa un juego parecido a «%s». Mi idea y mi temática serían:\n\n",
    wa_text_game:"Hola, me interesa un juego parecido a «%s». Mi idea es: ",
    contact_line:"También por WhatsApp: ",
    f_name:"Nombre", f_email:"Tu email", f_pack:"Paquete de interés", f_unknown:"Aún no lo sé",
    f_msg:"Cuéntanos qué necesitas", f_ph_msg:"Qué quieres hacer, plazos, referencias…",
    f_send:"Enviar mensaje", f_sending:"Enviando…",
    f_ok:"¡Gracias! Hemos recibido tu mensaje y te responderemos en 24-48 h.",
    f_err:"No se ha podido enviar. Inténtalo de nuevo o escríbenos por WhatsApp.",
    f_nokey:"El formulario aún no está activado. Escríbenos por WhatsApp.",
    f_consent:"Acepto que usen mis datos solo para responder a mi consulta (<a href=\"privacidad.html\" target=\"_blank\" rel=\"noopener\">política de privacidad</a>).", f_consent_err:"Marca la casilla para poder enviar el mensaje.",
    pre_game:"Me interesa un juego parecido a «%s». Mi idea y temática:\n", pre_pack:"",
    f_wait:"Un momento… vuelve a pulsar «Enviar» en unos segundos.",
    f_links:"Por favor, no incluyas enlaces en el mensaje: cuéntanos la idea con tus palabras.",
    f_rate:"Ya has enviado un mensaje hace un momento. Espera un minuto antes de enviar otro." },
  en:{ nav_home:"Home", contact_title_juegos:"Let's talk about your game", contact_sub_juegos:"Tell us what you have in mind: genre, references, platform and deadlines. We reply within 24-48 h.", contact_title_web:"Let's talk about your website", contact_sub_web:"Tell us what you need: a new website or maintenance for the one you have. We reply within 24-48 h.", contact_title_ciber:"Let's talk about your security", contact_sub_ciber:"Tell us what you want to protect or review. We reply within 24-48 h and define the scope with you.", f_ph_msg_juegos:"Genre, references, deadlines, platform…", f_ph_msg_web:"Type of website, whether you already have one, deadlines…", f_ph_msg_ciber:"What you want to protect or review, company size, deadlines…", wa_text_juegos:"Hi, I'd like to develop a game. My idea is: ", wa_text_web:"Hi, I'm interested in a website (creation or maintenance). What I need: ", wa_text_ciber:"Hi, I'm interested in a cybersecurity service. What I need: ", ws1:"Tell us what you need", ws2:"Proposal and fixed quote", ws3:"We design and build", ws4:"We publish and maintain", nav_games:"Games", nav_web:"Web", nav_cyber:"Cybersecurity", main_eyebrow:"Development and cybersecurity", main_title:"Games, websites and <em>cybersecurity</em>, tailor-made.", main_lead:"We build mobile games and websites, and protect your company with pentesting, SIEM, SOC and DLP.", main_cta1:"Let's talk", main_cta2:"See services", a_games_t:"Mobile games", a_games_p:"Playable prototypes and full games built with Godot, in 2D or low poly 3D.", a_games_l:"See games →", a_web_t:"Web", a_web_p:"Custom website creation and maintenance so they are always up to date and secure.", a_web_l:"See web →", a_cyber_t:"Cybersecurity", a_cyber_p:"Pentesting, SIEM with Wazuh and SOC, and data loss prevention (DLP).", a_cyber_l:"See cybersecurity →", web_title:"Web: creation and maintenance", web_sub:"Your website, custom-built and always looked after. Clear scope and a fixed quote before we start.", w1_t:"Website creation", w1_p:"Custom design, adapted to mobile and desktop, fast and ready to publish.", w2_t:"Maintenance", w2_p:"Updates, backups, content changes and monitoring so your website never falls behind.", w3_t:"Secure from the start", w3_p:"Secure configuration and a review before launch, backed by our cybersecurity team.", web_cta:"Request a web quote", cy_title:"Cybersecurity for companies", cy_sub:"To know where your risks are and keep watch over them. Always with written authorization and an agreed scope.", c1_t:"Pentesting", c1_p:"Controlled penetration tests on websites, networks and systems. We deliver a report with the findings, their severity and how to fix them.", c2_t:"SIEM (Wazuh) and SOC", c2_p:"Wazuh as the SIEM: it collects and correlates events from your endpoints and servers. The SOC watches those alerts, analyzes them and acts on incidents.", c3_t:"DLP", c3_p:"Data loss prevention: we identify what sensitive information you hold and stop it from leaving your organization.", cs1:"Meeting and scope", cs2:"Proposal and quote", cs3:"Service delivery", cs4:"Report and follow-up", cy_cta:"Request a cybersecurity quote", f_area:"What are you interested in?", area_juegos:"Games", area_web:"Web", area_ciber:"Cybersecurity", area_otro:"Other", nav_protos:"Prototypes", nav_services:"Services", nav_contact:"Contact", nav_packs:"Packages",
    pk_title:"Packages", pk_sub:"Pick your starting point. If your project is different, we'll prepare a custom quote.",
    pk_note:"We deliver the game files as a ZIP. Only the Premium package includes uploading to the store, and store costs (developer account, fees…) are covered by the client.", mode_label:"Graphics style", f_mode:"Graphics style", pk_both:"Available in 2D and 3D Low Poly",
    pk_days:"day delivery", pk_rev:"revisions", pk_continue:"Continue", pk_ask:"Ask on WhatsApp",
    pk_mail_subject:"%s package — buski87.dev", pk_mail_body:"Hi, I'm interested in the %s package (€%p). My game idea is:\n\n",
    pk_wa_text:"Hi, I'm interested in the %s package (€%p). My game idea is: ",
    hero_eyebrow:"Mobile game studio",
    hero_title:"Your game idea, <em>playable</em> in days.",
    hero_lead:"We build custom mobile games. We start from a working prototype so you can see and touch your idea before committing to a large budget.",
    hero_cta1:"I want my game", hero_cta2:"See prototypes",
    stat_protos:"prototypes for sale", stat_engine:"engine", stat_store:"Google Play",
    protos_title:"Prototypes for sale",
    protos_sub:"Working prototypes ready to adapt to your project: your theme, your art and your rules. Pick one close to what you need and let's talk.",
    nav_pub:"Our games", pub_title:"Our published games",
    pub_sub:"Our own games, already on the store. They are not for sale, but you can commission a prototype based on them.",
    pub_badge:"LIVE", pub_own:"Our own game · not for sale", pub_cta:"I want a prototype based on this game",
    stat_pub:"published game", stat_for_sale:"prototypes for sale",
    pre_based:"I'm interested in a prototype based on “%s”. My idea and theme:\n",
    serv_title:"Games: what we do for you",
    s1_t:"Prototype in days", s1_p:"A playable MVP with the core loop of the game to validate the idea fast.",
    s2_t:"Your theme, your style", s2_p:"We adapt proven mechanics to your brand, story or original characters.",
    s3_t:"From prototype to store", s3_p:"Polish, monetization and Android builds. With the Premium package we also upload the game to the store.",
    step1:"Tell us your idea", step2:"We show you a prototype", step3:"We tune it together", step4:"We deliver the game",
    contact_title:"Let's talk about your project",
    contact_sub:"Tell us what you need: a game, a website or a cybersecurity service. We reply within 24-48 h.",
    contact_mail:"Send an email", contact_wa:"Message on WhatsApp",
    footer_priv:"Privacy policy", footer_note:"Prototype names are provisional. All games use original art and themes.",
    play:"View on Google Play", want:"I want something like this", live:"LIVE", proto:"PROTOTYPE",
    mail_subject:"Inquiry from buski87.dev", mail_body:"Hi, I'd like to talk about a project. My idea is:\n\n",
    wa_text:"Hi, I'd like to talk about a project: ",
    mail_subject_game:"I want a game like ", mail_body_game:"Hi, I'm interested in a game similar to “%s”. My idea and theme would be:\n\n",
    wa_text_game:"Hi, I'm interested in a game similar to “%s”. My idea is: ",
    contact_line:"Also on WhatsApp: ",
    f_name:"Name", f_email:"Your email", f_pack:"Package of interest", f_unknown:"Not sure yet",
    f_msg:"Tell us what you need", f_ph_msg:"What you want to do, deadlines, references…",
    f_send:"Send message", f_sending:"Sending…",
    f_ok:"Thanks! We got your message and will reply within 24-48 h.",
    f_err:"Could not send. Please try again or message us on WhatsApp.",
    f_nokey:"The form isn't active yet. Please message us on WhatsApp.",
    f_consent:"I agree that my data is used only to reply to my inquiry (<a href=\"privacidad.html\" target=\"_blank\" rel=\"noopener\">privacy policy</a>).", f_consent_err:"Please tick the box to send your message.",
    pre_game:"I'm interested in a game similar to “%s”. My idea and theme:\n", pre_pack:"",
    f_wait:"One moment… press “Send” again in a few seconds.",
    f_links:"Please don't include links in the message: tell us your idea in your own words.",
    f_rate:"You just sent a message. Please wait a minute before sending another." }
};

let lang = "es";
let filter = "all";
if ((navigator.language || "es").slice(0,2) === "en") lang = "en";
try { const s = localStorage.getItem("lang"); if (s === "es" || s === "en") lang = s; } catch(e){}

const t = k => I18N[lang][k];
const $ = s => document.querySelector(s);

function curArea(){ const f = $("#f-area"); return f ? f.value : ""; }
const tk = k => I18N[lang][k + "_" + curArea()] || I18N[lang][k];
function waHref(game){
  const text = game ? t("wa_text_game").replace("%s", game) : tk("wa_text");
  return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(text);
}

function esc(s){ return String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }

function renderFilters(){
  if (!$("#filters")) return;
  $("#filters").innerHTML = Object.keys(CATS).map(k =>
    `<button class="chip${k===filter?" on":""}" data-k="${k}">${esc(CATS[k][lang])}</button>`).join("");
  $("#filters").querySelectorAll(".chip").forEach(b => b.onclick = () => { filter = b.dataset.k; renderFilters(); renderGrid(); });
  $("#mode-filter").innerHTML = Object.keys(MODES).map(k =>
    `<button class="chip${k===modeFilter?" on":""}" data-k="${k}">${esc(MODES[k][lang])}</button>`).join("");
  $("#mode-filter").querySelectorAll(".chip").forEach(b => b.onclick = () => { modeFilter = b.dataset.k; renderFilters(); renderGrid(); });
}

/* ---- Galería (lightbox): clic en la imagen de una ficha con varias capturas ---- */
let gal = null;
function galShow(i){
  gal.i = (i + gal.list.length) % gal.list.length;
  gal.img.src = gal.list[gal.i];
  gal.cnt.textContent = (gal.i + 1) + " / " + gal.list.length;
  gal.thumbs.querySelectorAll("img").forEach((im, k) => im.classList.toggle("on", k === gal.i));
}
function galClose(){ if (gal){ gal.el.hidden = true; document.body.style.overflow = ""; } }
function galOpen(g){
  if (!gal){
    const el = document.createElement("div");
    el.className = "gal"; el.hidden = true;
    el.innerHTML = '<button class="gal-x" aria-label="Cerrar">✕</button><button class="gal-nav prev" aria-label="Anterior">‹</button>' +
      '<figure><img alt=""><figcaption><b></b><span></span></figcaption><div class="gal-thumbs"></div></figure><button class="gal-nav next" aria-label="Siguiente">›</button>';
    document.body.appendChild(el);
    gal = { el, img: el.querySelector("figure img"), name: el.querySelector("b"), cnt: el.querySelector("span"), thumbs: el.querySelector(".gal-thumbs"), list: [], i: 0 };
    el.addEventListener("click", e => { if (e.target === el) galClose(); });
    el.querySelector(".gal-x").onclick = galClose;
    el.querySelector(".prev").onclick = () => galShow(gal.i - 1);
    el.querySelector(".next").onclick = () => galShow(gal.i + 1);
    document.addEventListener("keydown", e => {
      if (el.hidden) return;
      if (e.key === "Escape") galClose();
      else if (e.key === "ArrowLeft") galShow(gal.i - 1);
      else if (e.key === "ArrowRight") galShow(gal.i + 1);
    });
    let x0 = null;
    el.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, {passive:true});
    el.addEventListener("touchend", e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null; if (Math.abs(dx) > 50) galShow(gal.i + (dx < 0 ? 1 : -1)); });
  }
  gal.list = g.shots; gal.name.textContent = g.name;
  gal.thumbs.innerHTML = g.shots.map((u, k) => `<img src="${esc(u)}" alt="" data-k="${k}">`).join("");
  gal.thumbs.querySelectorAll("img").forEach(im => im.onclick = () => galShow(+im.dataset.k));
  gal.el.hidden = false; document.body.style.overflow = "hidden";
  galShow(0);
}

function renderGrid(){
  if (!$("#grid")) return;
  const list = GAMES.filter(g => (filter === "all" || g.cat === filter) && (modeFilter === "all" || (g.modes || ["2d","3d"]).includes(modeFilter)));
  $("#grid").innerHTML = list.map(g => {
    const art = g.img
      ? `<img src="${esc(g.img)}" alt="${esc(g.name)}" loading="lazy">${(g.shots||[]).length>1?`<span class="shots-badge">📷 ${g.shots.length}</span>`:""}`
      : `<span aria-hidden="true">${g.icon}</span>`;
    const play = g.url ? `<a href="${esc(g.url)}" target="_blank" rel="noopener">${t("play")} ↗</a>` : "";
    return `<article class="game">
      <div class="art${(g.shots||[]).length>1?" has-shots":""}" data-id="${esc(g.id)}" style="background:linear-gradient(135deg,${g.c[0]},${g.c[1]})">
        <span class="badge${g.status==="live"?" live":""}">${g.status==="live"?t("live"):t("proto")}</span>${art}
      </div>
      <div class="body">
        <span class="genre">${esc(g.genre[lang])}</span>
        <div class="tags">${(g.modes || ["2d","3d"]).map(m => `<span class="tag">${esc(MODE_NAME(m))}</span>`).join("")}</div>
        <h3>${esc(g.name)}</h3>
        <p>${esc(g.desc[lang])}</p>
        <div class="row">${play}<a href="#contacto" data-want="${esc(g.name)}">${t("want")} →</a></div>
      </div></article>`;
  }).join("");
  $("#grid").querySelectorAll(".art.has-shots").forEach(a => {
    a.onclick = () => galOpen(GAMES.find(g => g.id === a.dataset.id));
  });
}

function renderPublished(){
  if (!$("#pub-grid")) return;
  $("#pub-grid").innerHTML = PUBLISHED.map(g => `<article class="pub">
    <div class="art${(g.shots||[]).length>1?" has-shots":""}" data-id="${esc(g.id)}" style="background:linear-gradient(135deg,${g.c[0]},${g.c[1]})"><span class="badge live">${t("pub_badge")}</span>${(g.shots||[]).length>1?`<span class="shots-badge">📷 ${g.shots.length}</span>`:""}${g.img ? `<img src="${esc(g.img)}" alt="${esc(g.name)}" loading="lazy">` : `<span aria-hidden="true">${g.icon}</span>`}</div>
    <div class="body">
      <span class="genre">${esc(g.genre[lang])}</span>
      <h3>${esc(g.name)}</h3>
      <p>${esc(g.desc[lang])}</p>
      <p class="own">🔒 ${t("pub_own")}</p>
      <div class="row">
        ${g.url ? `<a class="btn" href="${esc(g.url)}" target="_blank" rel="noopener">${t("play")} ↗</a>` : ""}
        <a class="btn primary" href="#contacto" data-based="${esc(g.name)}">${t("pub_cta")} →</a>
      </div>
    </div></article>`).join("");
  $("#pub-grid").querySelectorAll(".art.has-shots").forEach(a => {
    a.onclick = () => galOpen(PUBLISHED.find(g => g.id === a.dataset.id));
  });
}

let pack = "standard";
let mode = "2d", modeFilter = "all";
const price = p => p.price[mode];
function fill(s, p){ return t(s).replace("%s", p.name[lang]).replace("%p", price(p)); }
const MODE_NAME = m => MODES[m][lang];
function setMode(m){
  mode = m; renderModeTabs(); renderPacks(); renderPackSelect();
  const fm = $("#f-mode"); if (fm) fm.value = m;
}

function renderModeTabs(){
  if (!$("#mode-tabs")) return;
  $("#mode-tabs").innerHTML = ["2d","3d"].map(m =>
    `<button class="chip${m===mode?" on":""}" data-m="${m}">${esc(MODE_NAME(m))}</button>`).join("");
  $("#mode-tabs").querySelectorAll(".chip").forEach(b => b.onclick = () => setMode(b.dataset.m));
}
function renderPacks(){
  if (!$("#pk-tabs")) return;
  $("#pk-tabs").innerHTML = PACKS.map(p =>
    `<button class="tab${p.id===pack?" on":""}" role="tab" data-id="${p.id}">${esc(p.name[lang])}</button>`).join("");
  $("#pk-tabs").querySelectorAll(".tab").forEach(b => b.onclick = () => { pack = b.dataset.id; renderPacks(); });
  const p = PACKS.find(x => x.id === pack);
  const idx = lang === "es" ? 0 : 1;
  const wa = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(fill("pk_wa_text", p));
  $("#pk-body").innerHTML = `
    <p class="pk-price">€${price(p)} <small>${esc(MODE_NAME(mode))}</small></p>
    <p class="pk-both">${t("pk_both")}</p>
    <h3>${esc(p.title[lang])}</h3>
    <p class="pk-desc">${esc(p.desc[lang])}</p>
    <div class="pk-meta"><span>⏱ ${p.days} ${t("pk_days")}</span><span>🔁 ${p.rev} ${t("pk_rev")}</span></div>
    <ul class="pk-list">${p.feats.map(f => `<li class="${f[2]?"":"no"}">${esc(f[idx])}</li>`).join("")}</ul>
    <p class="pk-note">ℹ️ ${t("pk_note")}</p>
    <a class="btn primary" href="#contacto" data-pack="${p.id}">${t("pk_continue")} →</a>
    <a class="btn wa" href="${wa}" target="_blank" rel="noopener">💬 ${t("pk_ask")}</a>`;
}

function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  $("#lang").textContent = lang === "es" ? "EN" : "ES";
  if ($("#wa")) $("#wa").href = waHref();
  if ($("#f-msg")) $("#f-msg").placeholder = tk("f_ph_msg");
  renderAreaSelect(); renderPackSelect(); renderModeTabs();
  renderPublished(); renderFilters(); renderGrid(); renderPacks();
}

/* ---------- Formulario de contacto (Web3Forms) ---------- */
const MIN_FILL_MS = 4000;      // menos de 4 s desde que carga la página = bot
const COOLDOWN_MS = 60000;     // 1 envío por minuto y navegador
let formStart = Date.now();
function renderAreaSelect(){
  const sel = $("#f-area");
  if (!sel || sel.tagName !== "SELECT") return;
  const cur = sel.value;
  sel.innerHTML = `<option value="">${esc(t("f_unknown"))}</option>` +
    ["juegos","web","ciber","otro"].map(a => `<option value="${a}">${esc(t("area_" + a))}</option>`).join("");
  sel.value = cur; toggleArea();
}
function toggleArea(){ const g = $("#game-fields"); if (g && $("#f-area").tagName === "SELECT") g.hidden = $("#f-area").value !== "juegos"; }
if ($("#f-area")) $("#f-area").addEventListener("change", toggleArea);
function renderPackSelect(){
  if (!$("#f-pack")) return;
  const sel = $("#f-pack"), cur = sel.value;
  sel.innerHTML = `<option value="">${esc(t("f_unknown"))}</option>` +
    PACKS.map(p => `<option value="${p.id}">${esc(p.name[lang])} — €${price(p)}</option>`).join("");
  sel.value = cur;
  const fm = $("#f-mode"), cm = fm.value;
  fm.innerHTML = `<option value="">${esc(t("f_unknown"))}</option><option value="2d">${esc(MODE_NAME("2d"))}</option><option value="3d">${esc(MODE_NAME("3d"))}</option>`;
  fm.value = cm;
}
function goForm(opts){
  const area = opts.area || ((opts.pack || opts.game || opts.based) ? "juegos" : "");
  if (area && $("#f-area") && $("#f-area").tagName === "SELECT"){ $("#f-area").value = area; toggleArea(); }
  if (opts.pack) setMode(mode);
  if (opts.pack) $("#f-pack").value = opts.pack;
  const ta = $("#f-msg");
  if (opts.game && !ta.value.trim()) ta.value = t("pre_game").replace("%s", opts.game);
  if (opts.based && !ta.value.trim()) ta.value = t("pre_based").replace("%s", opts.based);
}
document.addEventListener("click", e => {
  const a = e.target.closest("a[data-want],a[data-pack],a[data-based],a[data-area]");
  if (a) goForm({ game: a.dataset.want, pack: a.dataset.pack, based: a.dataset.based, mode: a.dataset.mode, area: a.dataset.area });
});
$("#cform").addEventListener("submit", async e => {
  e.preventDefault();
  const st = $("#f-status"), btn = $("#f-btn");
  st.className = "f-status"; st.textContent = "";
  if (!CONFIG.web3formsKey || CONFIG.web3formsKey.startsWith("PEGA_")){
    st.classList.add("err"); st.textContent = t("f_nokey"); return;
  }
  const fd = new FormData(e.target);
  if (!$("#f-consent").checked){ st.classList.add("err"); st.textContent = t("f_consent_err"); return; }
  if (fd.get("botcheck")) return;               // anti-spam (campo oculto)
  // Anti-spam: tiempo mínimo, sin enlaces y un envío por minuto
  if (Date.now() - formStart < MIN_FILL_MS){ st.classList.add("err"); st.textContent = t("f_wait"); return; }
  if (/(https?:\/\/|www\.|\w+\.(com|net|org|ru|xyz|top|info)\b)/i.test(String(fd.get("message")))){
    st.classList.add("err"); st.textContent = t("f_links"); return; }
  try {
    const last = Number(localStorage.getItem("lastSent") || 0);
    if (Date.now() - last < COOLDOWN_MS){ st.classList.add("err"); st.textContent = t("f_rate"); return; }
  } catch(_){}
  fd.delete("botcheck"); fd.delete("consent"); fd.set("consentimiento", "Sí");
  const area = fd.get("area") || "";
  const AREA_ES = { juegos: "Juegos", web: "Web", ciber: "Ciberseguridad", otro: "Otro" };
  fd.set("area", AREA_ES[area] || "—");
  if (area === "juegos"){
    const pk = PACKS.find(p => p.id === fd.get("pack"));
    const md = fd.get("mode");
    fd.set("pack", pk ? pk.name.es + " (€" + pk.price[md === "3d" ? "3d" : "2d"] + (md ? "" : ", precio 2D") + ")" : "—");
    fd.set("estilo", md === "3d" ? "3D Low Poly" : md === "2d" ? "2D" : "—");
  } else { fd.delete("pack"); }
  fd.delete("mode");
  fd.append("access_key", CONFIG.web3formsKey);
  fd.append("subject", "Nuevo contacto — buski87.dev (" + (AREA_ES[area] || "sin área") + ")");
  fd.append("from_name", "Buski87 (web)");
  btn.disabled = true; btn.textContent = t("f_sending");
  try {
    const r = await fetch("https://api.web3forms.com/submit", { method:"POST", headers:{Accept:"application/json"}, body: fd });
    const j = await r.json();
    if (r.ok && j.success){
      st.classList.add("ok"); st.textContent = t("f_ok"); e.target.reset(); formStart = Date.now();
      try { localStorage.setItem("lastSent", String(Date.now())); } catch(_){}
    }
    else { st.classList.add("err"); st.textContent = t("f_err"); }
  } catch(err){ st.classList.add("err"); st.textContent = t("f_err"); }
  btn.disabled = false; btn.textContent = t("f_send");
});

$("#lang").onclick = () => {
  lang = lang === "es" ? "en" : "es";
  try { localStorage.setItem("lang", lang); } catch(e){}
  applyLang();
};
if ($("#count")) $("#count").textContent = GAMES.length;
$("#year").textContent = new Date().getFullYear();
applyLang();
