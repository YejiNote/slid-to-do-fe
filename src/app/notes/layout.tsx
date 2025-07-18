import React, {Suspense} from 'react'
import {ErrorBoundaryProvider} from '../providers/error-boundary-provider'
import LoadingSpinner from '@/components/common/loading-spinner'

export const metadata = {
    title: 'notes',
}

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <ErrorBoundaryProvider>
            <Suspense fallback={<LoadingSpinner />}>
                <main>{children}</main>
            </Suspense>
        </ErrorBoundaryProvider>
    )
}

export default layout
