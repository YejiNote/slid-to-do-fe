'use client'

import {ErrorBoundary, FallbackProps} from 'react-error-boundary'
import NotFound from './not-found'
import LoginPage from './login/page'
import {useQueryErrorResetBoundary} from '@tanstack/react-query'

const ErrorFallback = ({error, resetErrorBoundary}: FallbackProps) => {
    const {reset} = useQueryErrorResetBoundary()
    const {status, message} = error as Error & {status?: number; message: string}
  
    if (status === 401) {
        return <LoginPage />
    }
    if (status === 404) {
        return <NotFound />
    }

    const handleReset = () => {
        alert('새로고침됩니다!')
        resetErrorBoundary()
    }
    return (
        <div role="alert" className="flex flex-col items-center">
            <p>Something went wrong:</p>

            <div className="">
                <p>코드 : {status ?? '알 수 없음'}</p>
                <p className="mt-1">{message}</p>
            </div>
            <button onClick={handleReset} className="mt-4 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                Try again
            </button>
        </div>
    )
}

export const ErrorBoundaryWrapper = ({children, onReset}: {children: React.ReactNode; onReset: () => void}) => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={onReset}>
            {children}
        </ErrorBoundary>
    )
}
