export type LocationCoordinates = {
    lon: number;
    lat: number;
};
  
export type ArtistType = {
    id:number;
    name: string;
    meta:string;
    categories: string[];
    bio_url: string;
    bio_summary: string;
    youtube_clipexampleurl: string;
    other_url: string;
    other_text:string;
    location_city: string;
    location_coordinates: LocationCoordinates;
    logo:string;
    gmap_url:string;
    bg:string;
};
  
export type ApiResponse = {
    total_count: number;
    results: ArtistType[];
};
  