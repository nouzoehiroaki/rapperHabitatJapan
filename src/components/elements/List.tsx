import { useEffect, useState } from 'react'
import { API_ENDPOINT } from '@/libs/api'
import { getAllArtists } from '@/models/Artist'
import { ArtistType } from '@/types/types'
import styles from '@/styles/List.module.scss'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, FreeMode } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'

type ListProps = {
    initialArtists: ArtistType[];
};

export const List: React.FC<ListProps> = ({ initialArtists }) => {
    const [loading, setLoading] = useState(!initialArtists);
    const [artists, setArtists] = useState<ArtistType[]>(initialArtists || []);
    useEffect(() => {
        if (!initialArtists || initialArtists.length === 0) {
            setLoading(true);
            const fetchArtistsData = async () => {
                try {
                    let res = await getAllArtists(API_ENDPOINT);
                    if (res && res.results) {
                        setArtists(res.results);
                        setLoading(false);
                    }
                } catch (error) {
                    console.error(error);
                    setLoading(false);
                }
            };
            fetchArtistsData();
        }
    }, []);
    return (
        <div className={styles.main}>
            {loading ? (
                <p className={styles.loading}>Loading...</p>
            ) : (
                <Swiper
                    modules={[Navigation, Scrollbar, FreeMode]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    freeMode={true}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1199: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {artists.map((artist) => (
                        <SwiperSlide key={artist.id}>
                            <div className={styles.card} >
                                <div className={styles.card__content}>
                                    <div
                                        className={styles.card__front}
                                        style={{ backgroundImage: `url(${artist.bg || 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/fair.jpg'})` }}
                                    >
                                        <h3 className={styles.card__title}>{artist.name}</h3>
                                        <p className={styles.card__subtitle}>
                                            {artist.categories}
                                        </p>
                                    </div>
                                    <div className={styles.card__back}>
                                        <div className={styles.card__body}>
                                            {artist.bio_summary}
                                            <Link href={artist.bio_url} target="_blank" rel="noopener noreferrer" className={styles.bio_url}>
                                                Seemore
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    )
}
export async function getServerSideProps() {
    let initialArtists: ArtistType[] = [];
    try {
        const res = await getAllArtists(API_ENDPOINT);
        if (res && res.results) {
            initialArtists = res.results;
        }
    } catch (error) {
        console.error(error);
    }
    return { props: { initialArtists } };
}

export default List