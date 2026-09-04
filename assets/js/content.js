/* ============================================================
   Diccionario de contenido — español e inglés.

   Este es el único archivo que necesitas tocar para cambiar los
   textos del sitio. Cada clave corresponde a un atributo
   data-i18n en index.html.

   Regla: si añades una clave en "es", añádela también en "en".
   El español que ves en index.html es la copia de respaldo que
   se muestra cuando JavaScript no está disponible; manténla
   sincronizada con lo que pongas aquí.
   ============================================================ */

var CONTENT = {

  es: {
    "meta.title": "Marco Rojas — Backend Python para sistemas de IA",
    "meta.desc": "Desarrollador backend Python con más de cinco años de experiencia, especializado en sistemas de IA generativa sobre Azure: RAG, agentes conversacionales y APIs en producción.",
    "meta.ogDesc": "Cinco años construyendo backend. Los últimos dos, haciendo que modelos no deterministas se comporten igual todos los días en producción.",

    "misc.skip": "Saltar al contenido",

    "rail.role": "Backend Python para sistemas de IA",
    "rail.thesis": "Cinco años construyendo backend. Los últimos dos, haciendo que modelos no deterministas se comporten igual todos los días en producción.",
    "rail.location": "Huixquilucan México. · Disponible en remoto",
    "rail.navAria": "Secciones del sitio",
    "rail.langAria": "Idioma del sitio",

    "theme.toDark": "Cambiar a tema oscuro",
    "theme.toLight": "Cambiar a tema claro",

    "nav.about": "Sobre mí",
    "nav.exp": "Experiencia",
    "nav.projects": "Mis proyectos",
    "nav.tech": "Tecnologías",
    "nav.contact": "Contacto",

    "sec.about": "Sobre mí",
    "sec.exp": "Experiencia",
    "sec.projects": "Mis proyectos",

    "modal.label": "Proyectos",
    "modal.close": "Cerrar",
    "sec.tech": "Tecnologías",
    "sec.contact": "Contacto",

    "about.photoAlt": "Marco Rojas, retrato en blanco y negro",
    "about.p1": "Soy ingeniero en Telemática por el Instituto Politécnico Nacional. Empecé escribiendo microservicios y automatización para redes de telecomunicaciones, seguí con sistemas de operaciones en el sector financiero, y desde hace poco más de dos años construyo soluciones de IA generativa sobre Azure.",
    "about.p2": "En el camino aprendí lo que hoy define mi trabajo: la consistencia de un agente no se arregla ajustando el prompt. Se diseña — con orquestación, tools que encapsulan la lógica de negocio y validaciones en el backend que deciden qué puede hacer el modelo y bajo qué condiciones.",
    "about.p3": "Me interesa la parte del problema donde el reto técnico se cruza con el de negocio: traducir una necesidad real en un sistema que se pueda medir, observar y sostener en producción.",

    "exp.mobiik.role": "Desarrollador IA",
    "exp.mobiik.note": "· Ciudad de México",
    "exp.mobiik.b1": "Lideré parte del backend de soluciones de IA conversacional por voz y texto sobre Azure.",
    "exp.mobiik.b2": "Diseñé chatbots multimodales con memoria persistente en Cosmos DB y MongoDB.",
    "exp.mobiik.b3": "Implementé pipelines RAG con Azure AI Search y embeddings, y desarrollé tools que ampliaban las capacidades de los agentes: llamadas a APIs externas, limpieza de datos y recuperación de información estructurada.",
    "exp.mobiik.b4": "Integré Azure Cost Management y Log Analytics para dar visibilidad sobre uso, costo y desempeño de los agentes en producción.",
    "exp.mobiik.cta": "Ver proyectos",

    "exp.citi.role": "Desarrollador Python y SQL",
    "exp.citi.note": "· Proyecto Finsus, sector financiero",
    "exp.citi.b1": "Desarrollé módulos y extensiones del sistema interno de operaciones sobre PostgreSQL, con interfaces GLADE y plantillas Glabels.",
    "exp.citi.b2": "Analicé, corregí y optimicé funciones en PL/pgSQL.",
    "exp.citi.b3": "Construí APIs con FastAPI para agilizar las operaciones CRUD del sistema.",
    "exp.citi.b4": "Automaticé procedimientos con ETLs en Pentaho Data Integration.",
    "exp.citi.cta": "Ver proyecto",

    "exp.emqu.role": "Desarrollador Python · Technical Lead",
    "exp.emqu.note": "· Cliente AT&T",
    "exp.emqu.b1": "Desarrollé microservicios en Python con Flask, Flask-RestX y FastAPI.",
    "exp.emqu.b2": "Automaticé la conexión, extracción y procesamiento de datos sobre dispositivos de red vía SSH con Netmiko, Paramiko, Pandas y TextFSM.",
    "exp.emqu.b3": "Implementé bases de datos relacionales y no relacionales — MongoDB, Neo4j, InfluxDB, MySQL y Postgres con Hasura — según lo que pedía cada proyecto.",
    "exp.emqu.b4": "Lideré al equipo backend del sistema de monitoreo y trazabilidad de nodos de red.",
    "exp.emqu.cta": "Ver proyecto",

    "proj.megacable.sector": "· Telecomunicaciones",
    "proj.megacable.title": "Asistente RAG interno con control de acceso",
    "proj.megacable.context": "Asistente conversacional para que colaboradores de distintas áreas resuelvan dudas respetando sus roles y permisos, sobre una base de conocimiento que se actualiza dinámicamente.",
    "proj.megacable.role": "Desarrollé el módulo de búsqueda inteligente de documentos y el de personalización de usuario, y trabajé en el control del comportamiento del agente: un system prompt acotado, tools para las acciones con lógica de negocio y validaciones en backend sobre qué herramienta podía usar y bajo qué condiciones.",
    "proj.megacable.metric": "Conversaciones fuera del flujo esperado",
    "proj.megacable.note": "80 % menos casos fuera de flujo. El negocio ganó la confianza para ampliar el agente a más áreas de la empresa.",

    "proj.tec.sector": "· Educación",
    "proj.tec.title": "Chatbot de normativa académica",
    "proj.tec.context": "Chatbot para que estudiantes y profesores de preparatoria resuelvan dudas sobre la normativa interna del instituto, con arquitectura RAG.",
    "proj.tec.role": "Construí la lógica interna del chatbot y su API, la orquestación de la recuperación de fragmentos para el modelo y el manejo del histórico de conversación. Definí también el formato, el tono y las reglas de referenciación de fuentes.",
    "proj.tec.metric": "Tasa global de respuestas incorrectas",
    "proj.tec.note": "64 % menos respuestas incorrectas. Suficiente confianza para extender el producto y evaluar una fase a nivel universidad.",

    "proj.voz.client": "Multinacional de alimentos · Prueba de concepto",
    "proj.voz.title": "Agente de voz para ventas en ruta",
    "proj.voz.context": "Agente de voz para que el personal de ventas resolviera dudas sobre productos, clientes, promociones y ventas mientras visita clientes en ruta.",
    "proj.voz.role": "Lideré el desarrollo de las tools del agente y de las Azure Functions que procesaban el catálogo de la fuente de conocimiento. Las tools hacían consultas, cálculos y agregaciones sobre la base de datos, y devolvían tablas e imágenes además de texto.",
    "proj.voz.outcome": "Entregado dentro del plazo acordado y probado en campo por el equipo de ventas, con buena respuesta.",

    "proj.att.sector": "· Telecomunicaciones",
    "proj.att.title": "Monitoreo y trazabilidad de nodos de red",
    "proj.att.context": "Sistema para monitorear y trazar el estado de una red de nodos y ejecutar sobre ellos flujos de configuración.",
    "proj.att.role": "Lideré al equipo backend en el diseño y la construcción del sistema, desde la extracción de datos de los dispositivos hasta la ejecución de los flujos.",
    "proj.att.outcome": "Redujo de forma significativa los tiempos de configuración y de generación de reportes.",

    "proj.finsus.sector": "· Sector financiero",
    "proj.finsus.title": "Operaciones internas y estados de cuenta",
    "proj.finsus.context": "Sistema interno de operaciones de una institución financiera, con foco en la generación de estados de cuenta de varios de sus productos.",
    "proj.finsus.role": "Desarrollé módulos y extensiones sobre PostgreSQL, APIs en FastAPI para las operaciones CRUD y ETLs en Pentaho para automatizar procesos que antes eran manuales.",

    "mine.mexlex.client": "Proyecto personal · 2026",
    "mine.mexlex.title": "MexlexAgent — agente RAG sobre legislación mexicana",
    "mine.mexlex.context": "Agente conversacional para consultar leyes mexicanas y la Constitución, construido para llegar al fondo de LangChain y LangGraph sobre el ecosistema de Azure.",
    "mine.mexlex.role": "Ingesta de PDFs con chunking por frontera de artículo, retrieval híbrido en Azure AI Search con metadata filtrable, y un agente ReAct con tools de búsqueda legal, lookup exacto de artículo y búsqueda web opcional. La interfaz es Chainlit con streaming, y el historial se persiste en Cosmos DB.",
    "mine.mexlex.outcome": "Ocho fases cerradas, con una suite de evaluación que uso como regresión cada vez que toco prompts o chunking, y disclaimers atados a la vigencia real de cada ley.",
    "mine.mexlex.repo": "Ver el repositorio",

    "mine.poke.client": "Proyecto personal · 2026",
    "mine.poke.title": "poke-visor — OCR de capturas sin servidor",
    "mine.poke.context": "Azure Function que procesa capturas del perfil de Pokémon GO subidas a Blob Storage y extrae de ellas las estadísticas del jugador.",
    "mine.poke.role": "Se dispara con Event Grid al crearse el blob, extrae el texto con Azure AI Document Intelligence, infiere el equipo a partir del color de las bandas laterales de la imagen y escribe el resultado en Cosmos DB.",
    "mine.poke.outcome": "Locks de idempotencia en Cosmos para que los reintentos de Event Grid no dupliquen trabajo, y un contrato estricto de nombre de blob que valida la entrada antes de gastar una llamada al servicio de OCR.",
    "mine.poke.repo": "Ver el repositorio",

    "mine.recomendautos.client": "Proyecto académico · 2020–2021",
    "mine.recomendautos.title": "Recomendautos — recomendador de autos con app Android",
    "mine.recomendautos.context": "Sistema de recomendación de automóviles en dos piezas: un servidor que expone la API y el modelo, y una aplicación Android que lo consume.",
    "mine.recomendautos.role": "Construí el servidor en Flask con Flask-RESTful y MySQL, el scraping del catálogo con Scrapy y el modelo de agrupamiento con k-modes y scikit-learn. La app Android, en Java, habla con la API mediante Retrofit.",
    "mine.recomendautos.repo": "Servidor y modelo",
    "mine.recomendautos.repoApp": "App Android",

    "delta.before": "antes",
    "delta.after": "después",

    "tech.langs": "Lenguajes",
    "tech.backend": "Backend y APIs",
    "tech.ai": "IA generativa",
    "tech.data": "Datos",
    "tech.cloud": "Nube y entrega",
    "tech.ui": "Interfaces y datos visuales",
    "tech.net": "Redes y automatización",

    "edu.title": "Formación",
    "edu.i1": "Ingeniería en Telemática — UPIITA, IPN",
    "edu.i2": "Azure AI Fundamentals — Microsoft",
    "edu.i3": "Machine Learning y Data Science — Udemy",
    "edu.i4": "AWS Cloud Practitioner — AWS Academy",

    "contact.lead": "Estoy abierto a escuchar propuestas de backend, de IA generativa o del cruce entre ambas.",
    "contact.cta": "Hablemos",
    "contact.emailAria": "Enviar un correo",
    "contact.kEmail": "Correo",
    "contact.kPhone": "Teléfono",
    "contact.kPlace": "Ubicación",
    "contact.vPlace": "Huixquilucan México · Disponible en remoto",

    "footer.built": "Diseñado y construido por Marco Rojas. Sitio estático, sin framework ni servidor."
  },

  en: {
    "meta.title": "Marco Rojas — Python backend for AI systems",
    "meta.desc": "Backend Python developer with over five years of experience, specialized in generative AI systems on Azure: RAG, conversational agents and production APIs.",
    "meta.ogDesc": "Five years building backends. The last two making non-deterministic models behave the same way every day in production.",

    "misc.skip": "Skip to content",

    "rail.role": "Python backend for AI systems",
    "rail.thesis": "Five years building backends. The last two making non-deterministic models behave the same way every day in production.",
    "rail.location": "Mexico City · Available remotely",
    "rail.navAria": "Site sections",
    "rail.langAria": "Site language",

    "theme.toDark": "Switch to dark theme",
    "theme.toLight": "Switch to light theme",

    "nav.about": "About",
    "nav.exp": "Experience",
    "nav.projects": "My projects",
    "nav.tech": "Stack",
    "nav.contact": "Contact",

    "sec.about": "About",
    "sec.exp": "Experience",
    "sec.projects": "My projects",

    "modal.label": "Projects",
    "modal.close": "Close",
    "sec.tech": "Stack",
    "sec.contact": "Contact",

    "about.photoAlt": "Marco Rojas, black and white portrait",
    "about.p1": "I'm a Telematics engineer from Instituto Politécnico Nacional, in Mexico. I started out writing microservices and automation for telecom networks, moved on to operations systems in finance, and for the past two years I've been building generative AI solutions on Azure.",
    "about.p2": "Along the way I learned what defines my work today: an agent's consistency isn't fixed by tweaking the prompt. It's designed — with orchestration, tools that hold the business logic, and backend validations that decide what the model can do and under which conditions.",
    "about.p3": "I'm drawn to the part of the problem where the technical challenge meets the business one: turning a real need into a system you can measure, observe and keep running in production.",

    "exp.mobiik.role": "AI Developer",
    "exp.mobiik.note": "· Mexico City",
    "exp.mobiik.b1": "Led part of the backend for voice and text conversational AI solutions on Azure.",
    "exp.mobiik.b2": "Designed multimodal chatbots with persistent memory on Cosmos DB and MongoDB.",
    "exp.mobiik.b3": "Built RAG pipelines with Azure AI Search and embeddings, and developed tools that extended what the agents could do: external API calls, data cleaning and structured retrieval.",
    "exp.mobiik.b4": "Integrated Azure Cost Management and Log Analytics to give visibility into agent usage, cost and performance in production.",
    "exp.mobiik.cta": "View projects",

    "exp.citi.role": "Python and SQL Developer",
    "exp.citi.note": "· Finsus project, financial sector",
    "exp.citi.b1": "Built modules and extensions for the internal operations system on PostgreSQL, with GLADE interfaces and Glabels templates.",
    "exp.citi.b2": "Analyzed, fixed and optimized PL/pgSQL functions.",
    "exp.citi.b3": "Built FastAPI services to speed up the system's CRUD operations.",
    "exp.citi.b4": "Automated procedures with ETLs in Pentaho Data Integration.",
    "exp.citi.cta": "View project",

    "exp.emqu.role": "Python Developer · Technical Lead",
    "exp.emqu.note": "· AT&T account",
    "exp.emqu.b1": "Built Python microservices with Flask, Flask-RestX and FastAPI.",
    "exp.emqu.b2": "Automated connection, extraction and processing of data from network devices over SSH with Netmiko, Paramiko, Pandas and TextFSM.",
    "exp.emqu.b3": "Implemented relational and non-relational databases — MongoDB, Neo4j, InfluxDB, MySQL and Postgres with Hasura — depending on what each project called for.",
    "exp.emqu.b4": "Led the backend team for the network node monitoring and traceability system.",
    "exp.emqu.cta": "View project",

    "proj.megacable.sector": "· Telecommunications",
    "proj.megacable.title": "Internal RAG assistant with access control",
    "proj.megacable.context": "Conversational assistant that lets employees across departments get answers while respecting their roles and permissions, over a knowledge base that updates dynamically.",
    "proj.megacable.role": "I built the smart document search module and the user personalization module, and worked on controlling the agent's behavior: a tightly scoped system prompt, tools for the actions carrying business logic, and backend validations over which tool the agent could use and when.",
    "proj.megacable.metric": "Conversations outside the expected flow",
    "proj.megacable.note": "80 % fewer off-flow cases. The business gained enough confidence to roll the agent out to more departments.",

    "proj.tec.sector": "· Education",
    "proj.tec.title": "Academic policy chatbot",
    "proj.tec.context": "Chatbot that helps high-school students and teachers resolve questions about the institution's internal policy, on a RAG architecture.",
    "proj.tec.role": "I built the chatbot's internal logic and its API, the orchestration of chunk retrieval for the model, and conversation history handling. I also defined the response format, the tone and the source citation rules.",
    "proj.tec.metric": "Overall incorrect answer rate",
    "proj.tec.note": "64 % fewer incorrect answers. Enough confidence to extend the product and evaluate a university-wide phase.",

    "proj.voz.client": "Multinational food company · Proof of concept",
    "proj.voz.title": "Voice agent for field sales",
    "proj.voz.context": "Voice agent so sales reps could get answers about products, customers, promotions and sales while visiting clients on their route.",
    "proj.voz.role": "I led development of the agent's tools and of the Azure Functions that processed the knowledge source catalog. The tools ran queries, calculations and aggregations against the database, returning tables and images alongside text.",
    "proj.voz.outcome": "Delivered within the agreed timeline and tested in the field by the sales team, with good feedback.",

    "proj.att.sector": "· Telecommunications",
    "proj.att.title": "Network node monitoring and traceability",
    "proj.att.context": "System to monitor and trace the state of a network of nodes and run configuration flows against them.",
    "proj.att.role": "I led the backend team through the design and construction of the system, from pulling data off the devices to executing the flows.",
    "proj.att.outcome": "Cut configuration and report generation times significantly.",

    "proj.finsus.sector": "· Financial sector",
    "proj.finsus.title": "Internal operations and account statements",
    "proj.finsus.context": "Internal operations system for a financial institution, focused on generating account statements for several of its products.",
    "proj.finsus.role": "I built modules and extensions on PostgreSQL, FastAPI services for CRUD operations, and Pentaho ETLs to automate processes that used to be manual.",

    "mine.mexlex.client": "Personal project · 2026",
    "mine.mexlex.title": "MexlexAgent — RAG agent over Mexican law",
    "mine.mexlex.context": "Conversational agent for querying Mexican law and the Constitution, built to get to the bottom of LangChain and LangGraph on the Azure stack.",
    "mine.mexlex.role": "PDF ingestion with article-boundary chunking, hybrid retrieval on Azure AI Search with filterable metadata, and a ReAct agent with tools for legal search, exact article lookup and optional web search. The interface is Chainlit with streaming, and history is persisted in Cosmos DB.",
    "mine.mexlex.outcome": "Eight phases done, with an evaluation suite I run as a regression every time I touch prompts or chunking, and disclaimers tied to how current each law actually is.",
    "mine.mexlex.repo": "View the repository",

    "mine.poke.client": "Personal project · 2026",
    "mine.poke.title": "poke-visor — serverless OCR for screenshots",
    "mine.poke.context": "Azure Function that processes Pokémon GO profile screenshots uploaded to Blob Storage and pulls the player's stats out of them.",
    "mine.poke.role": "Triggered by Event Grid when the blob is created, it extracts text with Azure AI Document Intelligence, infers the team from the color of the side bands in the image, and writes the result to Cosmos DB.",
    "mine.poke.outcome": "Idempotency locks in Cosmos so Event Grid retries don't duplicate work, and a strict blob-name contract that validates the input before spending a call on the OCR service.",
    "mine.poke.repo": "View the repository",

    "mine.recomendautos.client": "Personal project · 2020–2021",
    "mine.recomendautos.title": "Recomendautos — car recommender with an Android app",
    "mine.recomendautos.context": "Car recommendation system in two pieces: a server exposing the API and the model, and an Android application that consumes it.",
    "mine.recomendautos.role": "I built the server in Flask with Flask-RESTful and MySQL, the catalog scraping with Scrapy, and the clustering model with k-modes and scikit-learn. The Android app, in Java, talks to the API through Retrofit.",
    "mine.recomendautos.repo": "Server and model",
    "mine.recomendautos.repoApp": "Android app",

    "delta.before": "before",
    "delta.after": "after",

    "tech.langs": "Languages",
    "tech.backend": "Backend and APIs",
    "tech.ai": "Generative AI",
    "tech.data": "Data",
    "tech.cloud": "Cloud and delivery",
    "tech.ui": "Interfaces and data visuals",
    "tech.net": "Networking and automation",

    "edu.title": "Education",
    "edu.i1": "B.Eng. in Telematics — UPIITA, IPN",
    "edu.i2": "Azure AI Fundamentals — Microsoft",
    "edu.i3": "Machine Learning and Data Science — Udemy",
    "edu.i4": "AWS Cloud Practitioner — AWS Academy",

    "contact.lead": "I'm open to hearing about backend work, generative AI, or where the two meet.",
    "contact.cta": "Let's talk",
    "contact.emailAria": "Send an email",
    "contact.kEmail": "Email",
    "contact.kPhone": "Phone",
    "contact.kPlace": "Location",
    "contact.vPlace": "Mexico City · Available remotely",

    "footer.built": "Designed and built by Marco Rojas. Static site, no framework and no server."
  }
};

/* ------------------------------------------------------------
   Datos de contacto.
   Se ensamblan en el cliente para no dejar la dirección y el
   teléfono completos escritos en el HTML.
   TODO Marco: pon aquí tus usuarios reales de LinkedIn y GitHub.
   ------------------------------------------------------------ */

var CONTACT = {
  emailUser: "marcoarojas.95",
  emailDomain: "gmail.com",
  phoneCountry: "52",
  phoneNumber: "5527643170",
  phonePretty: "+52 55 2764 3170",
  linkedin: "marco-antonio-rojas-garcia-95b30220b",
  github: "bitmarc",
  instagram: "bitmarc01"
};
