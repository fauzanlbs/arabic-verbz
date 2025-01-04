'use client';

import { verbs } from '../../../data/verbs';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { pressStart2P } from '../../fonts';

export default function VerbDetail() {
  const params = useParams();
  const verb = verbs.find(v => v.id === params.id);

  if (!verb) return <div>Loading...</div>;

  const renderTasrifForms = (forms) => {
    if (!forms || typeof forms !== 'object') return null;

    return (
      <table className="w-full text-right border-collapse">
        <thead>
          <tr>
            <th className={`${pressStart2P.className} text-xs text-[#FFD700] border-b-2 border-[#FFD700]`}>Gender</th>
            <th className={`${pressStart2P.className} text-xs text-[#FFD700] border-b-2 border-[#FFD700]`}>Forms</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(forms) ? (
            <tr className="border-b border-[#FFD700]">
              <td className={`${pressStart2P.className} text-xs text-[#FFD700] capitalize p-2`}>-</td>
              <td className={`${pressStart2P.className} text-[#FFFFFF] text-md p-2`}>
                {forms.join(', ')}
              </td>
            </tr>
          ) : (
            Object.entries(forms).map(([gender, words]) => (
              <tr key={gender} className="">
                <td className={`${pressStart2P.className} text-xs text-[#FFD700] capitalize p-2`}>{gender}</td>
                <td className={`${pressStart2P.className} text-[#FFFFFF] text-md p-2`}>
                  {Array.isArray(words) && words.join(', ')}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    );
  };

  const renderTasrifSection = (title, data) => {
    if (!data) return null;

    return (
      <div className="bg-[#4A4A4A] p-4 border-4 border-[#000000] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h4 className={`${pressStart2P.className} mb-4 text-[#90EE90]`}>{title}</h4>
        <div className="space-y-4">
          {Object.entries(data).map(([type, forms]) => (
            <div key={type} className="space-y-2">
              <h5 className={`${pressStart2P.className} text-sm text-[#FFD700] capitalize`}>{type}</h5>
              {renderTasrifForms(forms)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#383838] py-12">
      <div className="container mx-auto px-4">
        <Link href="/">
          <span className={`${pressStart2P.className} text-[#90EE90] hover:text-[#FFD700] mb-6 inline-block`}>
            ← KEMBALI
          </span>
        </Link>

        <div className="bg-[#706F6F] border-4 border-[#000000] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="text-6xl text-right mb-8 text-[#FFD700] font-arabic">
            {verb.word}
          </div>
          <div className={`${pressStart2P.className} mb-4 text-[#FFFFFF]`}>
            <span className="text-[#90EE90]">ARTI:</span> {verb.meaning} / {verb.meaning_en}
          </div>
          <div className={`${pressStart2P.className} mb-6 text-[#FFFFFF]`}>
            <span className="text-[#90EE90]">TIPE:</span> {verb.type}
          </div>

          <div className="mb-8 border-t-4 border-[#000000] pt-6">
            <h3 className={`${pressStart2P.className} mb-4 text-[#FFD700]`}>
              CONTOH PENGGUNAAN
            </h3>
            {verb.examples.map((example, index) => (
              <div key={index} className="mb-4">
                <p className="text-3xl text-[#FFFFFF] font-arabic text-right leading-loose">
                  {example.arabic}
                </p>
                <p className={`${pressStart2P.className} text-sm text-[#90EE90]`}>
                  {example.translation}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t-4 border-[#000000] pt-6">
            <h3 className={`${pressStart2P.className} mb-6 text-[#FFD700]`}>
              TASRIF LUGHAWI
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {renderTasrifSection('MADHI', verb.tasrif.madhi)}
              {renderTasrifSection('MUDHARI', verb.tasrif.mudhari)}
              {renderTasrifSection('AMR', verb.tasrif.amr)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 