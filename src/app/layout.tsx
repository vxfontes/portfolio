import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AnalyticsProvider from "@/components/AnalyticsProvider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Vanessa Fontes — Engenheira de Software',
    description: 'Engenheira de software com foco em full-stack, mobile, backend e inteligência artificial aplicada.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR" className="!scroll-smooth">
            <body className={inter.className}>
                <AnalyticsProvider>{children}</AnalyticsProvider>
            </body>
        </html>
    )
}
