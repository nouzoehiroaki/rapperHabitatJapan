import { useEffect, useState } from 'react'
import { API_ENDPOINT } from '@/libs/api'
import { getAllArtists } from '@/models/Artist'
import { ArtistType } from '@/types/types'
import { Marker, Popup, MapContainer, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import styles from '@/styles/Home.module.scss'
import Link from 'next/link'
export const Map: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [artists, setArtists] = useState<ArtistType[]>([]);
    useEffect(() => {
        const fetchArtistsData = async () => {
            try {
                let res = await getAllArtists(API_ENDPOINT);
                console.log("getAllArtists response:", res);
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
    const position: [number, number] = [35.681240, 139.7645499];
    return (
        <div>
            {loading ? (
                <p className={styles.loading}>Loading...</p>
            ) :
                <MapContainer center={position} zoom={5.3} scrollWheelZoom={false}>
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
                                    iconSize: [50, 50],
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
                                            <p>WEB情報なし</p>
                                        )}
                                        {artist.other_url ? (
                                            <Link href={artist.other_url} target="_blank" rel="noopener noreferrer" className={styles.other_url}>
                                                {artist.other_text}
                                            </Link>
                                        ) : (
                                            <p>Goods情報なし</p>
                                        )}
                                        {artist.youtube_clipexampleurl ? (
                                            <>
                                                <div className={styles.iframeWrapper}>
                                                    <iframe width="560" height="315" src={artist.youtube_clipexampleurl} title="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                                </div>
                                            </>
                                        ) : (
                                            <p>動画情報なし</p>
                                        )}
                                        <p className={styles.location_city}>
                                            {artist.location_city}
                                        </p>
                                        <p className={styles.bio_summary}>
                                            {artist.bio_summary}
                                        </p>
                                    </Popup>
                                </Marker>
                            );
                        })
                    }
                </MapContainer>
            }
        </div>
    )
}
export default Map;