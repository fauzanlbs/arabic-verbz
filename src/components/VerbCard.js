import Link from 'next/link';

export default function VerbCard({ verb }) {
  return (
    <Link href={`/verbs/${verb.id}`} className="block">
      <div className="p-6 border-4 border-[#000000] rounded-none 
                    bg-[#706F6F] hover:bg-[#8B8B8B] 
                    transform hover:translate-y-[-4px] 
                    transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                    hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="text-3xl font-['Press_Start_2P'] text-right mb-4 text-[#FFD700]">
          {verb.word}
        </div>
        <div className="font-['Press_Start_2P'] text-sm text-[#FFFFFF] mb-3">
          Arti: {verb.meaning}
        </div>
        <div className="font-['Press_Start_2P'] text-xs text-[#90EE90]">
          Tipe: {verb.type}
        </div>
        <div className="mt-4 space-y-3 border-t-4 border-[#000000] pt-4">
          <p className="font-['Press_Start_2P'] text-xs text-[#FFD700]">Contoh:</p>
          {verb.examples.map((example, index) => (
            <div key={index} className="text-sm">
              <p className="text-right font-['Press_Start_2P'] text-[#FFFFFF]">{example.arabic}</p>
              <p className="font-['Press_Start_2P'] text-xs text-[#90EE90]">{example.translation}</p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
} 