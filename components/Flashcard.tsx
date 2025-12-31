import React, { useState } from 'react';
import { Vocabulary } from '../types';

interface FlashcardProps {
    data: Vocabulary;
}

const Flashcard: React.FC<FlashcardProps> = ({ data }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const playAudio = (e: React.MouseEvent, lang: 'en-US' | 'en-GB') => {
        e.stopPropagation();
        const u = new SpeechSynthesisUtterance(data.word);
        u.lang = lang;
        window.speechSynthesis.speak(u);
    };

    return (
        <div 
            className="perspective-[1000px] w-full h-64 cursor-pointer group"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                
                {/* Front */}
                <div className="absolute w-full h-full bg-white rounded-lg p-6 flex flex-col justify-center items-center shadow-lg [backface-visibility:hidden]">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-center text-gray-800">{data.word}</h3>
                    <div className="flex space-x-4">
                        <button 
                            onClick={(e) => playAudio(e, 'en-US')} 
                            className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1 rounded-full transition-colors"
                        >
                            <span>US</span> <span>🔊</span>
                        </button>
                        <button 
                            onClick={(e) => playAudio(e, 'en-GB')} 
                            className="flex items-center space-x-1 text-sm text-green-600 hover:text-green-800 bg-green-50 px-3 py-1 rounded-full transition-colors"
                        >
                            <span>UK</span> <span>🔊</span>
                        </button>
                    </div>
                    <div className="absolute bottom-4 text-xs text-gray-400">Tap to flip</div>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full bg-indigo-50 rounded-lg p-6 flex flex-col justify-center overflow-y-auto shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h4 className="text-xl font-bold text-indigo-800 mb-2">{data.definition}</h4>
                    <p className="text-sm text-gray-700 italic border-l-4 border-indigo-200 pl-3">"{data.example}"</p>
                </div>
            </div>
        </div>
    );
};

export default Flashcard;