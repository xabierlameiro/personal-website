// @flow
import '../styles/globals.css'
import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function MyApp({
    Component,
    pageProps,
}: {
    Component: React.ComponentType<*>,
    pageProps: { ... },
}): React.Element<*> {
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    )
}

export default MyApp
