import { useEffect, useState } from 'react'
import { API_ENDPOINT } from '@/libs/api'
import { getAllArtists } from '@/models/Artist'
import { ArtistType } from '@/types/types'
import { Marker, Popup, MapContainer, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import styles from '@/styles/Home.module.scss'
import Link from 'next/link'
import Search from './Search'
interface Props {
    center: [number, number];
    zoom: number;
}
const MapUpdater: React.FC<Props> = ({ center, zoom }) => {
    const map = useMap();

    useEffect(() => {
        map.setView(center, zoom);
    }, [center, zoom, map]);

    return null;
};
export const Map: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [artists, setArtists] = useState<ArtistType[]>([]);
    useEffect(() => {
        const fetchArtistsData = async () => {
            try {
                let res = await getAllArtists(API_ENDPOINT);
                if (res && res.results) {
                    setArtists(res.results);
                }
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchArtistsData();
    }, []);
    const [mapCenter, setMapCenter] = useState<[number, number]>([35.681240, 139.7645499]);
    const [zoom, setZoom] = useState<number>(5.3);
    const handleSearch = (searchKeyword: string) => {
        const lowerCaseKeyword = searchKeyword.toLowerCase();
        const foundArtist = artists.find(artist =>
            artist.meta.toLowerCase().includes(lowerCaseKeyword)
        );
        if (foundArtist) {
            console.log("Artist found, updating state...", foundArtist);
            setMapCenter([foundArtist.location_coordinates.lat, foundArtist.location_coordinates.lon]);
            setZoom(100);
        } else {
            alert('もうちょい具体的に！');
        }
    };
    return (
        <div>
            {loading ? (
                <p className={styles.loading}>Loading...</p>
            ) :
                <>
                    <Search onSearch={handleSearch} />
                    <MapContainer center={mapCenter} zoom={zoom} scrollWheelZoom={false} key={`${mapCenter[0]},${mapCenter[1]},${zoom}`}>
                        <MapUpdater center={mapCenter} zoom={zoom} />
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            artists.map((artist, index) => {
                                const artistPosition: [number, number] = [artist.location_coordinates.lat, artist.location_coordinates.lon];
                                let myIcon;
                                if (artist.logo) {
                                    myIcon = new L.Icon({
                                        iconUrl: artist.logo,
                                        iconSize: [30, 30],
                                        iconAnchor: [12, 41],
                                        popupAnchor: [0, -41]
                                    });
                                } else {
                                    myIcon = new L.Icon({
                                        iconUrl: '/marker-icon-2x.png',
                                        iconSize: [25, 41],
                                        iconAnchor: [12, 41],
                                        popupAnchor: [0, -41]
                                    });
                                }
                                return (
                                    <Marker key={index} position={artistPosition} icon={myIcon}>
                                        <Popup>
                                            <h2>{artist.name}</h2>
                                            <p className={styles.categories}>
                                                {artist.categories}
                                            </p>
                                            {artist.bio_url ? (
                                                <Link href={artist.bio_url} target="_blank" rel="noopener noreferrer" className={styles.bio_url}>
                                                    店舗情報
                                                </Link>
                                            ) : (
                                                <p>情報なし</p>
                                            )}
                                            {artist.other_url ? (
                                                <Link href={artist.other_url} target="_blank" rel="noopener noreferrer" className={styles.other_url}>
                                                    {artist.other_text}
                                                </Link>
                                            ) : (
                                                <p>情報なし</p>
                                            )}
                                            {artist.youtube_clipexampleurl ? (
                                                <>
                                                    <div className={styles.iframeWrapper}>
                                                        <iframe width="560" height="315" src={artist.youtube_clipexampleurl} title="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                                    </div>
                                                </>
                                            ) : (
                                                <p>情報なし</p>
                                            )}
                                            {artist.gmap_url ? (
                                                <Link href={artist.gmap_url} target="_blank" rel="noopener noreferrer" className={styles.gmap_url}>
                                                    {artist.location_city}
                                                </Link>
                                            ) : (
                                                <p className={styles.location_city}>
                                                    {artist.location_city}
                                                </p>
                                            )}
                                            <p className={styles.bio_summary}>
                                                {artist.bio_summary}
                                            </p>
                                        </Popup>
                                    </Marker>
                                );
                            })
                        }
                    </MapContainer>
                </>
            }
        </div>
    )
}
export default Map;