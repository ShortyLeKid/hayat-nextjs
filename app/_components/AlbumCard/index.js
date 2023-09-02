import './albumcard.scss';
import Image from 'next/image';
import Link from 'next/link';

const AlbumCard = ({
    title,
    artist,
    cover,
    coverColor,
    slug,
    isEnabled
}) => {

    const handleHover = () => {
        document.body.style.backgroundColor = coverColor;
    };

    const handleHoverOut = () => {
        document.body.style.backgroundColor = '#f0f0f0';
    };

    return (
        <div className='album-player-container'>
            <Link
                href={isEnabled ? `/player/${slug}` : '#'}
                // onClick={isEnabled ? () => navigate(`/player/${slug}`) : null}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
                className="album-card"
            >
                <div className='album-card__header'>
                    <div className='album-card__artist'>
                        {artist}
                    </div>
                    <div className='album-card__title'>
                        {title}
                    </div>
                </div>
                <Image
                    alt='ep cover'
                    className='album-card__cover'
                    src={cover}
                />
            </Link>
        </div>
    );
};

export default AlbumCard;