'use client';

import React, { Suspense } from 'react';
import SlowComponent from '@/components/slow-component';

export default function SuspenseTestPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>🥽 Suspense 테스트 페이지</h1>
      <Suspense fallback={<div>⏳ 로딩 중…</div>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}