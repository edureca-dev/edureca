import React from 'react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <main className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-slate-50">
      <Container className="text-center">
        <div className="text-9xl font-extrabold text-indigo-100 mb-8">404</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Page Not Found</h1>
        <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto">
          Oops! It seems you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
        </p>
        <Button to="/" variant="primary" size="lg">
          Back to Home
        </Button>
      </Container>
    </main>
  );
};

export default NotFound;
