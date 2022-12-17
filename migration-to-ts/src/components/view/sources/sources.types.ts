export interface ISources {
    draw: (data: SourcesData[]) => void;
    undraw: (data: SourcesData[]) => void;
}

export interface SourcesData {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}
