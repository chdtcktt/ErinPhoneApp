export class Location {
    id: number;
    name: string;
    description: string;
    filterKeywords: FilterKeyword[]
}

export class FilterKeyword {
    key: string;
}