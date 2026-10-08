import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'
import { Navbar } from '../shared/layout/Navbar/Navbar'
import { Footer } from '../shared/layout/Footer/Footer'
import { AuthProvider } from '#/modules/auth/context/authProvider'
import { cdn } from '#/shared/libs/cdn/cdn'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Xeronics | Electronics & Tech Accessories for Everyday Life',
      },
      {
        name: 'description',
        content:
          'Shop electronics and tech accessories for work, gaming, content creation, and everyday life at Xeronics.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'preconnect',
        href: import.meta.env.VITE_CDN_URL,
        crossOrigin: 'anonymous',
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: cdn('favicon-v1.svg'),
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <Navbar></Navbar>
          <main className="flex-1">{children}</main>
          <Footer></Footer>
        </AuthProvider>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
