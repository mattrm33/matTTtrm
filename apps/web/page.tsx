'use client'
import { useState } from 'react';
import { SearchBar } from '@/components/ui/search-bar'; // Importé de packages/ui

export default function OSINTPage() {
  const [results, setResults] = useState([]);

  const handleSearch = async (query: string, country: string) => {
    const response = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({ query, country })
    });
    const data = await response.json();
    setResults(data);
  };

  return (
    <main className="p-8 bg-slate-950 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8">matTTtrm <span className="text-blue-500">Engine</span></h1>
      <SearchBar onSearch={handleSearch} />
      {/* Intégration de React Flow ici pour le graphe de résultats */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Composants de résultats */}
      </div>
    </main>
  );
}
