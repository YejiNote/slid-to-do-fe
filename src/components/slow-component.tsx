'use client'

import React from 'react'

const fetchData = () => new Promise<string>((resolve) => setTimeout(() => resolve('🚀 데이터 로딩 완료!'), 2000))

function createResource<T>(promise: Promise<T>) {
    let status = 'pending'
    let result: T
    let suspender = promise.then(
        (r) => {
            status = 'success'
            result = r
        },
        (e) => {
            status = 'error'
            result = e
        },
    )
    return {
        read() {
            if (status === 'pending') throw suspender
            if (status === 'error') throw result
            return result
        },
    }
}

const resource = createResource(fetchData())

const SlowComponent = () => {
    const text = resource.read() // 로딩 중이면 throw(promise)
    return <div>{text}</div>
}

export default SlowComponent
