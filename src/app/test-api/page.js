"use client";
import { useState } from 'react';
import { getServices, getTestimonials, getContacts } from '@/lib/api';

export default function TestApiPage() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const testFunction = async (func, name) => {
    try {
      setLoading(true);
      setError(null);
      console.log(`Testing ${name}...`);
      const response = await func();
      console.log(`${name} response:`, response);
      setResult({ name, response });
    } catch (err) {
      console.error(`${name} error:`, err);
      setError({ name, error: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">API Test Page</h1>
      
      <div className="space-y-4">
        <button 
          onClick={() => testFunction(getServices, 'getServices')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          Test getServices
        </button>
        
        <button 
          onClick={() => testFunction(getTestimonials, 'getTestimonials')}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4"
          disabled={loading}
        >
          Test getTestimonials
        </button>
        
        <button 
          onClick={() => testFunction(getContacts, 'getContacts')}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ml-4"
          disabled={loading}
        >
          Test getContacts
        </button>
      </div>

      {loading && <p className="mt-4 text-blue-600">Loading...</p>}
      
      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <h3 className="font-bold">Error in {error.name}:</h3>
          <p>{error.error}</p>
        </div>
      )}
      
      {result && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          <h3 className="font-bold">Success in {result.name}:</h3>
          <pre className="mt-2 text-sm overflow-auto">
            {JSON.stringify(result.response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
