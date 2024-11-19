'use client';
import StyledComponentsRegistry from '@/lib/registry';
import { Providers } from './provider';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import { ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { useApollo } from '@/lib/client';

export default function RootLayout({
  children,
  initializeApolloState
}: {
  children: React.ReactNode;
  initializeApolloState?: NormalizedCacheObject | undefined;
}) {
  const client = useApollo(initializeApolloState);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <html lang="en">
          <head>
            <title>Won Games</title>
            <link rel="shortcut icon" href="/img/icon-512.png" type="image/png" />
            <link rel="icon" href="/img/icon-512.png" type="image/png" sizes="512x512" />
            <link rel="icon" href="/img/icon-192.png" type="image/png" sizes="192x192" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" sizes="512x512" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="description" content="The best Game Stores in the world!" />
          </head>
          <body>
            <StyledComponentsRegistry>
              <Providers>
                {children}
              </Providers>
            </StyledComponentsRegistry>
          </body>
        </html>
      </ThemeProvider>
    </ApolloProvider>
  );
}
