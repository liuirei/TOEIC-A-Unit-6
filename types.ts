export interface Vocabulary {
    word: string;
    definition: string;
    example: string;
}

export interface Question {
    id: string;
    text: string;
    options: string[];
    answer: string;
    exp: string;
}

export interface ReadingItem {
    id: string;
    title: string;
    content: string; // HTML string
    questions: Question[];
}

export type TabType = 'flashcards' | 'handout' | 'textbook-ex' | 'textbook-prac';

export interface ReadingData {
    'handout': ReadingItem[];
    'textbook-ex': ReadingItem[];
    'textbook-prac': ReadingItem[];
}