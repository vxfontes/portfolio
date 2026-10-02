# Portfólio — Vanessa Fontes

## Analytics

O portfólio usa PostHog apenas após o visitante aceitar análise de navegação. A integração mantém os eventos anônimos: não chama `identify()` e não envia nome ou e-mail.

Para ativar localmente, copie `.env.example` para `.env.local` e informe o token do projeto. Na Vercel, adicione as mesmas variáveis em **Project Settings → Environment Variables**:

```bash
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=phc_...
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

Eventos coletados: visualização de página, navegação por seção, abertura de projeto, links externos de projeto, contato e expansão de experiências. O banner permite aceitar, recusar e reabrir as preferências pelo link **Privacidade** no rodapé.
