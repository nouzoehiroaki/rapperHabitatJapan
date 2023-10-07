import type { NextApiRequest, NextApiResponse } from 'next'

export type LocationCoordinates = {
  lon: number;
  lat: number;
};

export type ArtistType = {
  name: string;
  categories: string[];
  bio_url: string;
  bio_yearsactivestart: string;
  bio_birthdate: string | null;
  bio_summary: string;
  bio_yearsactiveend: string | null;
  bio_deathdate: string | null;
  youtube_clipexampleurl: string;
  location_city: string;
  location_neighborhood: string;
  location_coordinates: LocationCoordinates;
};

export type ApiResponse = {
  total_count: number;
  results: ArtistType[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  res.status(200).json({
    total_count: 1,
    results: [
      {
        name: "kge",
        categories: ["rapper"],
        bio_url: "https://kgetheshadowmen.com/",
        bio_yearsactivestart: "1997",
        bio_birthdate: null,
        bio_summary: "Valete is a Portuguese hip hop artist named Keidje Lima from Benfica, Lisbon.",
        bio_yearsactiveend: null,
        bio_deathdate: null,
        youtube_clipexampleurl: "https://www.youtube.com/embed/tNvE5uTG9nY?si=L0b0ZuFiG07cXN8c",
        location_city: "千葉",
        location_neighborhood: "柏",
        location_coordinates: {
          lon: 139.9507887,
          lat: 35.8390478
        }
      },
      {
        name: "Hunger",
        categories: ["rapper"],
        bio_url: "https://kgetheshadowmen.com/",
        bio_yearsactivestart: "1997",
        bio_birthdate: null,
        bio_summary: "Valete is a Portuguese hip hop artist named Keidje Lima from Benfica, Lisbon.",
        bio_yearsactiveend: null,
        bio_deathdate: null,
        youtube_clipexampleurl: "https://www.youtube.com/embed/tNvE5uTG9nY?si=L0b0ZuFiG07cXN8c",
        location_city: "宮城",
        location_neighborhood: "仙台",
        location_coordinates: {
          lon: 140.869418,
          lat: 38.268195
        }
      }
    ]
  })
}
