import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';

const FoundationPreview = lazy(() =>
  import('./pages/FoundationPreview').then((m) => ({ default: m.FoundationPreview }))
);

export default function App() {
  return (
    <Router>
      <RootLayout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/foundation" element={<FoundationPreview />} />
          </Routes>
        </Suspense>
      </RootLayout>
    </Router>
  );
}
