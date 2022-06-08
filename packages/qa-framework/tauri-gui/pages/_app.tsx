import { AppProps } from 'next/app';
import Head from 'next/head';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { AppShell, useMantineTheme } from '@mantine/core';
import { HeaderContent } from '../components/header/Header';
import { NavbarContent } from '../components/navbar/Navbar';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../data/store';

export default function App(props: AppProps) {
  const theme = useMantineTheme();
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <Provider store={store}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{ colorScheme }}
          >
            <AppShell
              styles={{
                main: {
                  background:
                    colorScheme === 'dark'
                      ? theme.colors.dark[8]
                      : theme.colors.gray[0],
                },
              }}
              navbarOffsetBreakpoint="sm"
              asideOffsetBreakpoint="sm"
              fixed
              padding="md"
              header={<HeaderContent />}
              navbar={<NavbarContent />}
            >
              <Component {...pageProps} />
            </AppShell>
          </MantineProvider>
        </Provider>
      </ColorSchemeProvider>
    </>
  );
}
