import { ApiResponse } from "@/types/types";

export const getAllArtists = (bio_url: string): Promise<ApiResponse> => {
    return new Promise((resolve , reject) =>{
        fetch(bio_url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    })
}