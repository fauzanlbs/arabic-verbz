'use client';

import { verbs } from '../data/verbs';
import Link from 'next/link';
import { pressStart2P } from './fonts';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('mutal');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredVerbs = verbs.filter(verb => {
    const matchesTab = verb.type === activeTab;
    const matchesSearch = searchQuery === '' || 
      verb.word.includes(searchQuery) || 
      verb.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      verb.meaning_en.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#383838] py-12">
      <div className="container mx-auto px-4">
        <h1 className={`${pressStart2P.className} text-center text-3xl text-[#FFD700] mb-4`}>
          ARABIC VERBZ
        </h1>
        <h3 className={`${pressStart2P.className} text-center text-xl text-[#FFD700] mb-8`}>
          (KAMUS KATA KERJA)
        </h3>

        {/* Search Input */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Cari kata kerja..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`${pressStart2P.className} w-full max-w-md px-4 py-2 bg-[#4A4A4A] text-[#FFD700] border-2 border-[#FFD700] rounded focus:outline-none focus:border-[#90EE90] placeholder-[#706F6F]`}
          />
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#4A4A4A] p-2 rounded-lg flex gap-2">
            <button
              onClick={() => setActiveTab('sahih')}
              className={`${pressStart2P.className} px-4 py-2 rounded ${
                activeTab === 'sahih'
                  ? 'bg-[#FFD700] text-[#4A4A4A]'
                  : 'text-[#FFD700] hover:bg-[#706F6F]'
              } transition-colors`}
            >
              SHAHIH
            </button>
            <button
              onClick={() => setActiveTab('mutal')}
              className={`${pressStart2P.className} px-4 py-2 rounded ${
                activeTab === 'mutal'
                  ? 'bg-[#FFD700] text-[#4A4A4A]'
                  : 'text-[#FFD700] hover:bg-[#706F6F]'
              } transition-colors`}
            >
              MU&apos;TAL
            </button>
          </div>
        </div>

        {/* Verb Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVerbs.map((verb) => (
            <Link key={verb.id} href={`/verbs/${verb.id}`}>
              <div className="bg-[#706F6F] border-4 border-[#000000] p-6 
                            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                            hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                            transition-all cursor-pointer">
                <div className={`${pressStart2P.className} text-3xl text-right mb-4 text-[#FFD700]`}>
                  {verb.word}
                </div>
                <div className={`${pressStart2P.className} text-[#FFFFFF]`}>
                  <span className="text-[#90EE90]">ARTI:</span> {verb.meaning} / {verb.meaning_en}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 