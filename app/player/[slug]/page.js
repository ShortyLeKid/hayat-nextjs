"use client"
import albumDatas from "../../_data/data";
import './player.scss';
import Link from "next/link";
import { usePathname } from "next/navigation";


const Player = () => {

    const pathname = usePathname();
    const cleanedPathname = pathname.replace('/player/', '');
    const found = albumDatas.find((element) => element.slug === cleanedPathname);

    document.body.style.backgroundColor = '#f0f0f0';

    return (
        <div className="player-container">
            <iframe
                className='spotify-player'
                src={found.spotifyEmbeedLink}
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
            <Link
                className='button'
                href={"/"}
            >
                Go back
            </Link>
        </div>
    );
};

export default Player;