import React, { useState, useEffect } from 'react';
import { ReadingItem } from '../types';

interface ReadingViewProps {
    items: ReadingItem[];
}

const ReadingView: React.FC<ReadingViewProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
    const [showResults, setShowResults] = useState(false);

    // Reset state when items change (tab switch)
    useEffect(() => {
        setCurrentIndex(0);
        setUserAnswers({});
        setShowResults(false);
    }, [items]);

    const currentItem = items[currentIndex];

    const handleAnswerSelect = (questionId: string, value: string) => {
        if (showResults) return; // Disable changing after submit
        setUserAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowResults(true);
    };

    const handleNavClick = (index: number) => {
        setCurrentIndex(index);
        setUserAnswers({});
        setShowResults(false);
        const container = document.getElementById('reading-container');
        if (container) container.scrollTop = 0;
    };

    if (!currentItem) return <div>No content available.</div>;

    return (
        <div className="flex flex-col h-full">
            {/* Sub Navigation */}
            <div className="bg-gray-50 border-b border-gray-200 py-2 overflow-x-auto hide-scrollbar mb-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 sticky top-0 z-10">
                <div className="flex space-x-2">
                    {items.map((item, idx) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(idx)}
                            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                                idx === currentIndex
                                    ? 'bg-indigo-100 text-indigo-700'
                                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                            }`}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="lg:flex lg:space-x-8 flex-grow overflow-hidden" id="reading-container">
                {/* Left: Passage */}
                <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg mb-6 lg:mb-0 overflow-y-auto max-h-[75vh]">
                    <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">{currentItem.title}</h3>
                    <div 
                        className="prose max-w-none text-sm space-y-4 border border-gray-300 p-4 rounded bg-white text-gray-700"
                        dangerouslySetInnerHTML={{ __html: currentItem.content }} 
                    />
                </div>

                {/* Right: Quiz */}
                <div className="lg:w-1/2 overflow-y-auto max-h-[75vh] pr-2">
                    <form onSubmit={handleSubmit} className="space-y-6 pb-8">
                        {currentItem.questions.map((q) => {
                            const userAnswer = userAnswers[q.id];
                            const isCorrect = userAnswer === q.answer;
                            const optionValue = (opt: string) => opt.match(/^\(([A-D])\)/)?.[1] || '';

                            return (
                                <div key={q.id} className="bg-white p-5 rounded-lg shadow">
                                    <p className="font-medium mb-3 text-gray-900">{q.text}</p>
                                    <div className="space-y-2">
                                        {q.options.map((opt) => {
                                            const val = optionValue(opt);
                                            let optionClass = "block border border-gray-200 rounded-md p-3 cursor-pointer hover:bg-gray-50 transition-colors";
                                            
                                            if (showResults) {
                                                if (val === q.answer) {
                                                    optionClass = "block border rounded-md p-3 cursor-default bg-green-100 border-green-500";
                                                } else if (val === userAnswer && val !== q.answer) {
                                                    optionClass = "block border rounded-md p-3 cursor-default bg-red-100 border-red-500";
                                                } else {
                                                    optionClass = "block border border-gray-200 rounded-md p-3 cursor-default opacity-60";
                                                }
                                            } else {
                                                if (userAnswer === val) {
                                                    optionClass = "block border rounded-md p-3 cursor-pointer bg-indigo-50 border-indigo-300 ring-1 ring-indigo-300";
                                                }
                                            }

                                            return (
                                                <label key={val} className={optionClass}>
                                                    <input
                                                        type="radio"
                                                        name={q.id}
                                                        value={val}
                                                        className="mr-2 sr-only" // Hide default radio, use styling
                                                        checked={userAnswer === val}
                                                        onChange={() => handleAnswerSelect(q.id, val)}
                                                        disabled={showResults}
                                                    />
                                                    <span className={showResults && val === q.answer ? "font-bold text-green-800" : ""}>{opt}</span>
                                                </label>
                                            );
                                        })}
                                    </div>
                                    
                                    {showResults && (
                                        <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r text-sm text-gray-700 animate-fadeIn">
                                            <p className="font-bold text-yellow-800 mb-1">解析：</p>
                                            <div dangerouslySetInnerHTML={{ __html: q.exp }} />
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        {!showResults ? (
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200 shadow-md transform active:scale-95"
                            >
                                送出答案並看詳解
                            </button>
                        ) : (
                            <div className="text-center p-4 bg-gray-100 rounded-lg text-gray-600">
                                已顯示詳解。切換文章以重置測驗。
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReadingView;