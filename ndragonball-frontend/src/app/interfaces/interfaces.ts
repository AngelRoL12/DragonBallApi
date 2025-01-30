export interface Personaje {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    deletedAt?: boolean | null;
    favorito?: boolean;
}

export interface PersonajesResponse {
    items: Personaje[];
    links: {
        first: string;
        last: string;
        next: string;
        previous: string;
    };
    meta: {
        currentPage: number;
        itemCount: number;
        itemsPerPage: number;
        totalItems: number;
        totalPages: number;
    }
}

export interface User {
    name: string;
    password: string;
}

export interface Params {
    limit: string;
    page?: string;
    name?: string;
    gender?: 'Male' | 'Female' | 'Other' | 'Uknown';
    race?: string;
    affiliation?: string;
  }