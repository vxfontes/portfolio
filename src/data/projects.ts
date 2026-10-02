import { ProjectProps } from "@/interface/ProjectProps";

export const projects: ProjectProps[] = [
    {
        id: 105,
        title: "ZimaDash",
        category: "Produto autoral · painel self-hosted",
        status: "Em produção pessoal",
        descriptionPT: "Cockpit self-hosted com cerca de 19 módulos para operar servidor, apps, Cofre, túneis, dados e agentes em um só painel.",
        descriptionEN: "A self-hosted cockpit with roughly 19 modules for operating a server, apps, Vault, tunnels, data, and agents in one place.",
        details: [
            "O ZimaDash é o cockpit do meu servidor pessoal. Além do painel de CPU, memória, disco, temperatura e containers em tempo real, ele concentra cerca de 19 módulos: operações de containers e processos, banco PostgreSQL, Redis, Gitea, logs, arquivos, serviços self-hosted, desktop remoto, alertas e acompanhamento de apps e agentes. Cada integração é independente e tolerante a falhas: se um serviço externo cai, o módulo degrada para offline sem derrubar o painel.\n\nTambém construí ferramentas próprias dentro dele. O Cofre compartilha segredos por links temporários com expiração e burn-after-read; os Túneis Cloudflare expõem serviços, upload ou arquivos sem abrir porta no roteador; e as áreas Apps e Agentes acompanham projetos autorais, Cutuque e sessões de IA. React, Fastify, WebSocket, Docker e nginx formam uma arquitetura modular e stateless.",
            "ZimaDash is the cockpit for my personal server. Beyond real-time CPU, memory, disk, temperature, and container monitoring, it brings together roughly 19 modules: container and process operations, PostgreSQL, Redis, Gitea, logs, files, self-hosted services, remote desktop, alerts, and app and agent monitoring. Each integration is independent and failure-tolerant: if an external service goes down, its module degrades to offline without taking down the dashboard.\n\nI also built product capabilities into it. Vault shares secrets through temporary links with expiry and burn-after-read; Cloudflare Tunnels expose services, uploads, or files without opening router ports; and Apps and Agents monitor personal products, Cutuque, and AI sessions. React, Fastify, WebSocket, Docker, and nginx form a modular stateless architecture."
        ],
        tecnologies: ["React", "Vite", "Fastify", "Node.js", "WebSocket", "Docker", "nginx", "Cloudflare"],
        finish: true,
        link: "",
        repoAvailability: "Disponível em breve",
        icon: "/projects/zimadash-icon.svg",
        imgPrincipal: "/projects/zimadash-dashboard.png",
        imageContain: false,
        imgMobile: [],
        imgDesktop: [
            "/projects/zimadash-dashboard.png",
            "/projects/zimadash-containers.png",
            "/projects/zimadash-databases.png",
            "/projects/zimadash-tunnels.png",
            "/projects/zimadash-vault.png",
        ],
        videos: [], another: [], anotherDescription: []
    },
    {
        id: 104,
        title: "Cutuque",
        category: "Produto autoral · iOS, watchOS e backend",
        status: "Em evolução",
        descriptionPT: "Controle sessões de agentes de código pelo iPhone e Apple Watch, com notificações hápticas e um hub próprio em Go.",
        descriptionEN: "Control coding-agent sessions from iPhone and Apple Watch, with haptic notifications and a self-hosted Go hub.",
        details: [
            "O Cutuque leva sessões de agentes de código para o iPhone, iPad e Apple Watch. Pelo app, dá para iniciar e acompanhar sessões, ver o terminal ao vivo e responder quando um agente pede autorização. No relógio, avisos hápticos chamam a atenção quando uma decisão é necessária; sessões em andamento também podem aparecer na Dynamic Island e na tela bloqueada.\n\nUm hub em Go conecta os dispositivos às sessões de Claude Code, Codex e OpenCode por uma rede privada. O ecossistema inclui ainda um board Kanban compartilhado, uma CLI e um deck físico. O desenho prioriza controle remoto sem transferir o código-fonte para uma nuvem de terceiros.",
            "Cutuque brings coding-agent sessions to iPhone, iPad, and Apple Watch. The app can start and monitor sessions, show a live terminal, and respond when an agent asks for permission. Haptic alerts on the watch call attention when a decision is needed; active sessions can also appear in the Dynamic Island and Lock Screen.\n\nA Go hub connects devices to Claude Code, Codex, and OpenCode sessions over a private network. The ecosystem also includes a shared Kanban board, a CLI, and a physical deck. Its design prioritizes remote control without sending source code to a third-party cloud."
        ],
        tecnologies: ["Go", "Swift", "SwiftUI", "WebSocket", "Tailscale", "Docker"],
        finish: false,
        link: "https://github.com/vxfontes/cutuque",
        icon: "/projects/cutuque-icon.png",
        imgPrincipal: "/projects/cutuque-ipad-sessoes.png",
        imageContain: true,
        imgMobile: [
            "/projects/cutuque-iphone-sessoes.png",
            "/projects/cutuque-iphone-board.png",
            "/projects/cutuque-iphone-terminal.png",
            "/projects/cutuque-watch-acao.png",
            "/projects/cutuque-watch-lista.png",
        ],
        imgDesktop: [
            "/projects/cutuque-ipad-sessoes.png",
            "/projects/cutuque-ipad-board.png",
            "/projects/cutuque-ipad-terminal.png",
        ],
        videos: [], another: [], anotherDescription: []
    },
    {
        id: 103,
        title: "SchemaDock",
        category: "Produto autoral · aplicativo desktop",
        status: "Versão 1.0",
        descriptionPT: "Cliente SQL para macOS que reúne editor, exploração de schemas e ferramentas de projeto em um só ambiente.",
        descriptionEN: "A macOS SQL client that brings a query editor, schema explorer, and project tools into one workspace.",
        details: [
            "O SchemaDock reúne em um aplicativo desktop as tarefas que normalmente ficam espalhadas entre clientes de banco e ferramentas de desenvolvimento. Ele conecta a PostgreSQL, MySQL, Oracle e SQL Server e combina editor SQL com execução em streaming, exploração de schemas e visualização e edição de dados tabulares.\n\nHistórico de consultas, snippets, terminal e ferramentas Git completam o espaço de trabalho. O objetivo é reduzir a troca de contexto sem esconder o que importa para quem trabalha diretamente com bancos de dados.",
            "SchemaDock brings work that is often spread across database clients and developer tools into one desktop app. It connects to PostgreSQL, MySQL, Oracle, and SQL Server, combining a SQL editor with streaming execution, schema exploration, and tabular data viewing and editing.\n\nQuery history, snippets, a terminal, and Git tools complete the workspace. The goal is to reduce context switching without hiding the details database work depends on."
        ],
        tecnologies: ["Tauri", "Rust", "SolidJS", "TypeScript", "Monaco Editor", "SQLite"],
        finish: true,
        link: "",
        repoAvailability: "Disponível em breve",
        icon: "/projects/schemadock.png",
        imgPrincipal: "/projects/schemadock.png",
        imageContain: true,
        imgMobile: [], imgDesktop: [], videos: [], another: [], anotherDescription: []
    },
    {
        id: 102,
        title: "WaterCue",
        category: "Produto autoral · macOS e Windows",
        status: "Mac App Store · Windows beta",
        descriptionPT: "App desktop de hidratação com lembretes e validação por câmera e IA, mantendo dados localmente.",
        descriptionEN: "A desktop hydration app with reminders and camera-based AI verification, keeping data on-device.",
        details: [
            "O WaterCue transforma uma meta diária de hidratação em lembretes que interrompem o uso do computador até a pessoa registrar uma pausa para beber água. Uma verificação por câmera e visão computacional confirma a ação antes de liberar a tela, e o histórico ajuda a acompanhar a rotina.\n\nA versão para macOS está na App Store; a versão para Windows está em beta. Os registros do usuário ficam localmente no dispositivo.",
            "WaterCue turns a daily hydration goal into reminders that pause computer use until the person logs a water break. A camera and computer-vision check verifies the action before unlocking the screen, while history helps track the habit.\n\nThe macOS version is on the App Store; the Windows version is in beta. User records stay on the device."
        ],
        tecnologies: ["Swift", "SwiftUI", "AppKit", "C#", "WPF", "SQLite", "Groq Vision"],
        finish: false,
        link: "https://github.com/vxfontes/WaterCue",
        icon: "/projects/watercue.png",
        imgPrincipal: "/projects/watercue.png",
        imageContain: true,
        imgMobile: [], imgDesktop: [], videos: [], another: [], anotherDescription: []
    },
    {
        id: 101,
        title: "Cobrei",
        category: "Produto autoral · aplicativo mobile",
        status: "Em desenvolvimento",
        descriptionPT: "Gestão simples para pequenos negócios: produtos, precificação, estoque, vendas e despesas.",
        descriptionEN: "Simple operations management for small businesses: products, pricing, inventory, sales, and expenses.",
        details: [
            "O Cobrei foi pensado para pequenos negócios que precisam organizar a operação sem depender de planilhas desconectadas. O app reúne produtos, cálculo de preço, estoque, vendas e despesas, e transforma esses registros em uma visão rápida da atividade financeira.\n\nA experiência mobile prioriza tarefas recorrentes: consultar um item, registrar uma venda e entender como os custos afetam o resultado. O escopo foi desenhado para manter o fluxo leve para quem toca o negócio no dia a dia.",
            "Cobrei is designed for small businesses that need to organize daily operations without relying on disconnected spreadsheets. The app brings together products, pricing, inventory, sales, and expenses, turning those records into a quick view of financial activity.\n\nThe mobile experience prioritizes recurring tasks: checking an item, recording a sale, and understanding how costs affect the result. Its scope keeps the workflow light for people running the business day to day."
        ],
        tecnologies: ["Flutter", "Dart", "Riverpod", "Firebase", "Firestore"],
        finish: false,
        link: "",
        repoAvailability: "Disponível em breve",
        icon: "/projects/cobrei-logo.png",
        imgPrincipal: "/projects/cobrei-logo.png",
        imageContain: true,
        imgMobile: [], imgDesktop: [], videos: [], another: [], anotherDescription: []
    },
    {
        id: 100,
        title: "Organiq",
        category: "Produto autoral · app, backend e IA",
        status: "Na App Store · versão 1.0",
        descriptionPT: "Inbox com IA que organiza notas soltas em tarefas, lembretes, eventos e listas.",
        descriptionEN: "An AI-powered inbox that turns rough notes into organized tasks, reminders, events, and lists.",
        details: [
            "O OrganiQ é uma caixa de entrada para pensamentos que ainda não estão organizados. A pessoa escreve ou dita uma nota; a IA sugere se aquilo deve virar tarefa, lembrete, evento ou item de compras. A sugestão é editável e só entra na agenda ou lista depois da confirmação — a IA ajuda a classificar, mas não decide pela pessoa.\n\nO app inclui agenda unificada, notificações e organização por flags e subflags. A versão iOS já está publicada na App Store. A arquitetura reúne o aplicativo Flutter, uma API em Go e persistência PostgreSQL.",
            "OrganiQ is an inbox for thoughts that are not organized yet. A person types or dictates a note; AI suggests whether it should become a task, reminder, event, or shopping-list item. The suggestion is editable and only enters the calendar or list after confirmation—the AI helps classify, but does not decide for the user.\n\nThe app includes a unified agenda, notifications, and organization with flags and subflags. The iOS version is available on the App Store. Its architecture combines a Flutter app, a Go API, and PostgreSQL persistence."
        ],
        tecnologies: ["Flutter", "Go", "Gin", "PostgreSQL", "LLMs", "Firebase"],
        finish: false,
        link: "https://github.com/vxfontes/organiq",
        appLink: "https://apps.apple.com/br/app/organiq/id6760727396",
        icon: "/projects/organiq.png",
        imgPrincipal: "/projects/organiq-home.jpg",
        imageContain: true,
        imgMobile: [
            "/projects/organiq-home.jpg",
            "/projects/organiq-ai-suggestion.jpg",
            "/projects/organiq-confirmation.jpg",
            "/projects/organiq-agenda.jpg",
            "/projects/organiq-shopping.jpg",
        ],
        imgDesktop: [
            "/projects/organiq-ipad-home.jpg",
            "/projects/organiq-ipad-ai-suggestion.jpg",
            "/projects/organiq-ipad-agenda.jpg",
        ],
        videos: [], another: [], anotherDescription: []
    },
    {
        id: 108,
        title: "Atlas",
        category: "Produto autoral · planejamento de viagens",
        status: "Em uso · acesso pessoal",
        descriptionPT: "Um workspace que reúne agenda, mapa, reservas, lugares salvos e custos de cada viagem.",
        descriptionEN: "A workspace that brings each trip’s itinerary, map, reservations, saved places, and expenses together.",
        details: [
            "O Atlas organiza cada viagem em um workspace com agenda, mapa, lugares, reservas, gastos e diário. Em vez de espalhar informações por documentos e conversas, reúne o planejamento e o que acontece durante a viagem em um só lugar.\n\nA agenda permite planejar por dia e período; o mapa mostra lugares com coordenadas verificadas; reservas e custos podem ser associados às pessoas. Um modo de convidada oferece acesso de leitura limitado à janela da viagem. O produto é mobile-first e roda em infraestrutura pessoal, sem expor o banco de dados.",
            "Atlas organizes each trip in a workspace with an itinerary, map, places, reservations, expenses, and a journal. Instead of scattering information across documents and chats, it keeps planning and in-trip updates together.\n\nThe itinerary supports day-by-day and time-of-day planning; the map only shows places with verified coordinates; reservations and costs can be associated with travelers. A guest mode provides read-only access for a limited travel window. The product is mobile-first and runs on private infrastructure without exposing its database."
        ],
        tecnologies: ["React", "TypeScript", "Vite", "NestJS", "Prisma", "PostgreSQL"],
        finish: true,
        link: "",
        repoAvailability: "Disponível em breve",
        icon: "/projects/atlas-icon.svg",
        imgPrincipal: "/projects/atlas-icon.svg",
        imageContain: true,
        imgMobile: [], imgDesktop: [], videos: [], another: [], anotherDescription: []
    },
    {
        id: 107,
        title: "Wardrobe",
        category: "Produto autoral · catálogo pessoal",
        status: "Em uso",
        descriptionPT: "Catálogo visual para pesquisar peças do guarda-roupa, montar looks e planejar malas.",
        descriptionEN: "A visual wardrobe catalog for finding pieces, composing outfits, and planning what to pack.",
        details: [
            "O Wardrobe transforma um inventário pessoal em um catálogo visual pesquisável. Cada peça tem fotos, ficha em Markdown e dados estruturados; a busca aceita código, nome, categoria, cor e tecido, e os filtros ajudam a navegar por grupos de peças.\n\nUm estúdio de composição combina itens por categoria para montar looks salvos. O fluxo também permite planejar uma mala para uma viagem e manter um histórico de uso, com uma interface pensada para funcionar no celular e hospedagem pessoal.",
            "Wardrobe turns a personal inventory into a searchable visual catalog. Each item has photos, a Markdown record, and structured data; search accepts code, name, category, color, and fabric, while filters help browse item groups.\n\nAn outfit builder combines pieces by category and saves looks. The workflow also supports packing for a trip and keeping a wear history, with a mobile-friendly interface and self-hosted deployment."
        ],
        tecnologies: ["Python", "HTML", "CSS", "JavaScript", "JSON", "PWA"],
        finish: true,
        link: "",
        repoAvailability: "Disponível em breve",
        icon: "/projects/wardrobe-icon.svg",
        imgPrincipal: "/projects/wardrobe-cover.png",
        imageContain: false,
        imgMobile: [], imgDesktop: ["/projects/wardrobe-cover.png"], videos: [], another: [], anotherDescription: []
    },
    {
        id: 106,
        title: "Sem Queimar",
        category: "Produto autoral · PWA de culinária",
        status: "MVP em evolução",
        descriptionPT: "Receitas guiadas passo a passo, com explicações claras para quem está começando a cozinhar.",
        descriptionEN: "Step-by-step guided recipes with clear explanations for people learning to cook.",
        details: [
            "O Sem Queimar parte de uma necessidade simples: ajudar quem está começando a cozinhar a chegar ao fim de uma receita com mais confiança. A experiência dá destaque ao passo a passo, em linguagem direta, e apresenta tempo, dificuldade e categorias para a pessoa escolher algo que caiba no momento.\n\nA área pública permite descobrir e consultar receitas sem criar conta; a edição fica reservada à administração. A aplicação é uma PWA construída como monorepo, com web em Next.js, API NestJS, tipos compartilhados e PostgreSQL.",
            "Sem Queimar starts from a simple need: helping beginners finish a recipe with more confidence. The experience emphasizes clear, direct instructions and surfaces cooking time, difficulty, and categories so people can choose something that fits the moment.\n\nThe public area lets visitors discover recipes without an account, while editing is reserved for an administrator. The app is a PWA in a monorepo, with a Next.js web app, NestJS API, shared types, and PostgreSQL."
        ],
        tecnologies: ["Next.js", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "PWA"],
        finish: false,
        link: "",
        repoAvailability: "Disponível em breve",
        icon: "/projects/sem-queimar-icon.png",
        imgPrincipal: "/projects/sem-queimar-home.png",
        imageContain: false,
        imgMobile: [],
        imgDesktop: [
            "/projects/sem-queimar-home.png",
            "/projects/sem-queimar-recipe.png",
            "/projects/sem-queimar-cooking.png",
        ],
        videos: [], another: [], anotherDescription: []
    },
    {
        id: 99,
        title: "WorkTimer",
        category: "Produto autoral · aplicativo macOS",
        status: "Versão 1.4",
        descriptionPT: "Timer de barra de menu para registrar tempo por atividade, sem conta e sem depender da nuvem.",
        descriptionEN: "A menu bar timer for tracking time by activity, with no account or cloud dependency.",
        details: [
            "O WorkTimer registra tempo por atividade a partir da barra de menus do macOS. Timers nomeados tornam simples alternar entre tarefas e revisar depois como o tempo foi distribuído, sem transformar o acompanhamento em uma ferramenta de apontamento pesada.\n\nO app funciona offline, guarda os dados no próprio Mac e oferece visão diária, histórico, agenda e gráficos. A proposta é manter a ação de iniciar e parar um timer rápida e deixar a análise para quando fizer sentido.",
            "WorkTimer tracks time by activity from the macOS menu bar. Named timers make it simple to switch between tasks and later review how time was spent, without turning tracking into a heavy timesheet workflow.\n\nThe app works offline, stores data on the Mac, and includes daily, history, schedule, and chart views. The goal is to keep starting and stopping a timer quick, leaving analysis for when it is useful."
        ],
        tecnologies: ["Swift", "SwiftUI", "AppKit", "Charts", "JSON local"],
        finish: true,
        link: "",
        repoAvailability: "Disponível em breve",
        icon: "/projects/worktimer.png",
        imgPrincipal: "/projects/worktimer.png",
        imageContain: true,
        imgMobile: [], imgDesktop: [], videos: [], another: [], anotherDescription: []
    }
];
