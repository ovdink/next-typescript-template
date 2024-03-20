import { Inter } from 'next/font/google';

import StyledComponentsRegistry from './registry';

import './globals.css';

import { Footer, Header } from '@/components/core';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />

                <title>Template next.js</title>

                <meta name="robots" content="index, follow" />

                <meta name="language" content="en" />

                {/* <meta
            name="description"
            content="Test"
        />
        <meta
            name="keywords"
            content="Test"
        />
        <meta
            property="og:title"
            content="Test"
        />
        <meta
            property="og:description"
            content="Test"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://test.com/" />
        <meta property="og:site_name" content="Test" /> */}

                {/* Internet Explorer optimization */}
                <meta http-equiv="x-ua-compatible" content="ie=edge" />
            </head>

            <body className={inter.className}>
                {/* this is required for styled-components */}
                <StyledComponentsRegistry>
                    <Header />

                    {children}

                    <Footer />
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
