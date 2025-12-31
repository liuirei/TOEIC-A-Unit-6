import React, { useState, useEffect, useRef } from 'react';
import { getDefinition } from '../services/geminiService';

const Popover: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState('');
    const [loading, setLoading] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleSelection = async () => {
            const selection = window.getSelection();
            const text = selection?.toString().trim().replace(/^[.,!?;:"“]+|[.,!?;:"“]+$/g, '').toLowerCase();

            if (!text || text.length < 3 || text.length > 50) {
                // Delay hiding slightly to allow clicking inside popover if needed, 
                // but usually clicking elsewhere clears selection which triggers this.
                // We check if click target is inside popover in mousedown handler below.
                return;
            }

            const range = selection?.getRangeAt(0);
            const rect = range?.getBoundingClientRect();

            if (rect) {
                setWord(text);
                setLoading(true);
                setDefinition('');
                setVisible(true);

                // Calculate position relative to viewport + scroll
                const top = rect.top + window.scrollY - 10; // 10px padding above
                const left = rect.left + window.scrollX + (rect.width / 2);

                setPosition({ top, left });

                // Fetch definition
                const def = await getDefinition(text);
                setDefinition(def);
                setLoading(false);
            }
        };

        const handleMouseUp = (e: MouseEvent) => {
             // If clicking inside the popover, don't re-trigger selection logic
             if (popoverRef.current && popoverRef.current.contains(e.target as Node)) {
                return;
             }
             // Small timeout to let selection settle
             setTimeout(handleSelection, 10);
        };

        const handleMouseDown = (e: MouseEvent) => {
            if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
                setVisible(false);
            }
        };

        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousedown', handleMouseDown);

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);

    const playAudio = (lang: 'en-US' | 'en-GB') => {
        const u = new SpeechSynthesisUtterance(word);
        u.lang = lang;
        window.speechSynthesis.speak(u);
    };

    if (!visible) return null;

    return (
        <div
            ref={popoverRef}
            className="absolute z-[100] w-64 rounded-lg shadow-xl bg-white border border-gray-200 p-4 text-sm transform -translate-x-1/2 -translate-y-full transition-opacity duration-200"
            style={{ top: position.top, left: position.left }}
        >
            <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-lg text-indigo-700 capitalize">{word}</h4>
                <button onClick={() => setVisible(false)} className="text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>

            {loading ? (
                <div className="flex items-center space-x-2 text-gray-500 py-2">
                    <span className="loading-spinner w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full"></span>
                    <span>AI 查詢中...</span>
                </div>
            ) : (
                <div className="animate-fadeIn">
                     <div className="flex space-x-3 mb-3">
                        <button onClick={() => playAudio('en-US')} className="flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-800 bg-blue-50 px-2 py-1 rounded">
                            US 🔊
                        </button>
                        <button onClick={() => playAudio('en-GB')} className="flex items-center space-x-1 text-xs text-green-600 hover:text-green-800 bg-green-50 px-2 py-1 rounded">
                            UK 🔊
                        </button>
                    </div>
                    <p className="text-gray-800 leading-relaxed text-base">{definition}</p>
                </div>
            )}
            
             {/* Small arrow pointing down */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-200 rotate-45"></div>
        </div>
    );
};

export default Popover;