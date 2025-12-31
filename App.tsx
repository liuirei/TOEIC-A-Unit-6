import React, { useState } from 'react';
import { TabType } from './types';
import { VOCABULARY_DATA, READING_DATA } from './constants';
import Flashcard from './components/Flashcard';
import ReadingView from './components/ReadingView';
import Popover from './components/Popover';

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('flashcards');

    const renderContent = () => {
        switch (activeTab) {
            case 'flashcards':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                        {VOCABULARY_DATA.map((vocab) => (
                            <Flashcard key={vocab.word} data={vocab} />
                        ))}
                    </div>
                );
            case 'handout':
                return <ReadingView items={READING_DATA['handout']} />;
            case 'textbook-ex':
                return <ReadingView items={READING_DATA['textbook-ex']} />;
            case 'textbook-prac':
                return <ReadingView items={READING_DATA['textbook-prac']} />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 font-sans selection:bg-indigo-100 selection:text-indigo-900">
            {/* Header & Tabs */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-indigo-700 leading-tight tracking-tight">TOEIC (A) Unit 6</h1>
                        <span className="text-sm font-medium text-gray-500">Single Passages Learning Center</span>
                    </div>

                    <div className="flex space-x-2 overflow-x-auto hide-scrollbar border-b border-gray-200">
                        <TabButton 
                            label="單字閃卡" 
                            isActive={activeTab === 'flashcards'} 
                            onClick={() => setActiveTab('flashcards')} 
                        />
                        <TabButton 
                            label="課堂講義 (Ruby)" 
                            isActive={activeTab === 'handout'} 
                            onClick={() => setActiveTab('handout')} 
                        />
                        <TabButton 
                            label="教科書例題" 
                            isActive={activeTab === 'textbook-ex'} 
                            onClick={() => setActiveTab('textbook-ex')} 
                        />
                        <TabButton 
                            label="教科書實戰" 
                            isActive={activeTab === 'textbook-prac'} 
                            onClick={() => setActiveTab('textbook-prac')} 
                        />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto p-4 sm:p-6 lg:p-8 flex-grow">
                {renderContent()}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
                <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} English Learning Center. Powered by React & Gemini AI.
                </div>
            </footer>

            {/* Floating Features */}
            <Popover />
        </div>
    );
};

interface TabButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`
                px-6 py-3 text-base rounded-t-lg transition-all duration-200 whitespace-nowrap border-t-4 border-x
                ${isActive 
                    ? 'bg-white text-indigo-700 font-bold border-t-indigo-600 border-x-gray-200 border-b-transparent translate-y-[1px]' 
                    : 'bg-gray-100 text-gray-500 font-medium border-transparent hover:bg-gray-200 hover:text-gray-700'
                }
            `}
        >
            {label}
        </button>
    );
};

export default App;