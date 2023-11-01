"use client"
import './home.scss'
import AlbumCard from './_components/AlbumCard'
import { Skeleton } from '@mui/material'
import useFetch from './_hooks/useFetch'


export default function Home() {

	const [allAlbums, isLoading] = useFetch("/api/albums/all")

	return (
		<div className='home-container'>
			<div className='home-container__bio'>
				<p>
					"The HAYAT project is a platform of expression that I established as a tribute to my mother. My goal is to release music I personally enjoy, and promote artists I genuinely appreciate.
				</p>
				<p>
					HAYAT is not about being trendy nor following sophisticated vibes. It's about exploring originality and supporting artists who dare to take a little step aside from the norm.
				</p>
				<p>
					It's all about keeping it simple and true to my taste."
				</p>
				<p>
					- Armless Kid
				</p>
			</div>
			{isLoading ? (
				<div className="home-container__album-list">
					{[...Array(3)].map((_, i) =>
						<div key={i} style={{ marginBottom: '20px' }}>
							<Skeleton style={{ marginBottom: '5px' }} variant="rounded" width={200} height={40} />
							<Skeleton variant="rounded" width={200} height={180} />
						</div>)}
				</div>
			) : (
				<div className="home-container__album-list">
					{allAlbums.map(({
						artist,
						title,
						cover,
						coverColor,
						link,
						slug,
						_id,
						isEnabled
					}) => (
						<AlbumCard
							artist={artist}
							title={title}
							cover={cover}
							coverColor={coverColor}
							link={link}
							key={_id}
							slug={slug}
							isEnabled={isEnabled}
						/>
					))}
				</div>
			)}
		</div>
	)
}
