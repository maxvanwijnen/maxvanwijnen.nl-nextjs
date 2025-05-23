import React, {useEffect, useState} from "react";
import dynamic from "next/dynamic";
const ReactPhotoGallery = dynamic(
  () => import("../components/ReactPhotoGallery/ReactPhotoGallery"),
  { ssr: false }
);
import TextContent from "../components/TextContent/TextContent";
import axios from "axios";
import Head from "next/head";
import Breadcrumbs from '../components/Breadcrumbs';

export default function Portfolio ({props}){

    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState('all');
    
    const categories = [
        { id: 'all', name: 'Alle foto\'s' },
        { id: 'portret', name: 'Portret' },
        { id: 'familie', name: 'Familie' },
        { id: 'fashion', name: 'Fashion' },
        { id: 'trouwen', name: 'Bruiloft' },
        { id: 'zwangerschap', name: 'Zwangerschap' },
        { id: 'loveshoot', name: 'Loveshoot' }
    ];

    useEffect(()=>{console.log(photos)},[photos])
    useEffect(()=>{
        getPictures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) // getPictures is al gedefinieerd met useCallback

    function randomOrder(a, b) {
        return Math.random() - 0.5;
    }

    const getPictures = async (tag = 'all') => {
        setLoading(true);
        setError(null);
        try {
            const result = await axios.get(`/api/portfolio/images?tag=${tag}`);
            let photos = result.data;
            setPhotos(photos);
        }
        catch (e) {
            console.error('Error loading gallery:', e);
            setError('Fout bij het laden van de galerij. Probeer het opnieuw.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <section>
            <Head>
                <title>
                    Portfolio | Bekijk mijn werk | Max van Wijnen Fotografie
                </title>
                <meta
                    name="description"
                    content="Verken fotografie-magie bij Max van Wijnen: betoverende momenten vastgelegd met vakmanschap en passie. Ontdek mijn diverse portfolio!"
                    key="desc"
                />
            </Head>
            <Breadcrumbs />
            <TextContent
                title="Mijn portfolio als portret fotograaf"
                firstItem={false}>Op deze pagina vindt je een selectie foto`s van eerdere shoots. Het juiste licht speelt een belangrijke factor bij het behalen van deze resultaten. Ik fotografeer daarom (afhankelijk van de locatie) het liefst ongeveer 2 uur na zonsopkomst / 2 uur voor zonsondergang. De zon staat dan mooi laag, het licht is zachter, en de schaduwen zijn mooi lang. Dat brengt de mooiste rustige achtergronden en zachte lichtval mijn modellen.
            </TextContent>
            
            <div className="filter-container" style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '10px',
                margin: '20px 0 30px',
                padding: '0 20px'
            }}>
                {categories.map(category => (
                    <button 
                        key={category.id}
                        onClick={() => {
                            setActiveFilter(category.id);
                            getPictures(category.id);
                        }}
                        style={{
                            padding: '8px 16px',
                            border: '1px solid #ddd',
                            background: activeFilter === category.id ? '#333' : '#fff',
                            color: activeFilter === category.id ? '#fff' : '#333',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            
            {loading && <p style={{ textAlign: 'center', padding: '40px 0' }}>Galerij wordt geladen...</p>}
            {error && <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <p>{error}</p>
                <button 
                    onClick={() => getPictures(activeFilter)}
                    style={{
                        padding: '8px 16px',
                        background: '#333',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginTop: '10px'
                    }}
                >
                    Opnieuw proberen
                </button>
            </div>}
            {!loading && !error && Array.isArray(photos) && photos.length > 0 && (
              <ReactPhotoGallery photos={photos} />
            )}
            {!loading && !error && Array.isArray(photos) && photos.length === 0 && (
              <p style={{ textAlign: 'center', padding: '40px 0' }}>Geen foto's gevonden voor deze categorie.</p>
            )}
        </section>

    );
}
