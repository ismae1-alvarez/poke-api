interface Pokemon {
    results : Url[];
}

interface Url {
    name: string, 
    url :  string
}

interface BasicPokemonesInfo {
    name :  string;
    url :  string;
}


interface PokemonesLisResponse {
    type :  'list';
    data : Url[]
}


interface DetailedPokemonInfo {
    abilities: Ability[];
    base_experience: number;
    cries: Cries;
    forms: Form[];
    game_indices: GameIndex[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_abilities: any[];
    past_types: any[];
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight : number
}

interface Ability {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

interface Cries {
    latest: string;
    legacy: string;
}

interface Form {
    name: string;
    url: string;
}

interface GameIndex {
    game_index: number;
    version: {
        name: string;
        url: string;
    };
}

interface HeldItem {
    item: {
        name: string;
        url: string;
    };
    version_details: VersionDetail[];
}

interface VersionDetail {
    rarity: number;
    version: {
        name: string;
        url: string;
    };
}

interface Move {
    move: {
        name: string;
        url: string;
    };
    version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
    level_learned_at: number;
    version_group: {
        name: string;
        url: string;
    };
    move_learn_method: {
        name: string;
        url: string;
    };
}

interface Species {
    name: string;
    url: string;
}
interface Sprites {
    other : Other;
}


interface Other {
    home?: Home;    
}

interface Home {
    front_default: string;
    front_female?: string | null;
    front_shiny: string;
    front_shiny_female?: string | null;
}
interface Stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}


interface DetailedPokemonResponse {
    type : 'details';
    data : DetailedPokemonInfo[];
}

type PokemonApiState = PokemonesLisResponse | DetailedPokemonResponse;
