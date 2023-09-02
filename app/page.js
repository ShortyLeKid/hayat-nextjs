"use client"
import './home.scss'
import albumDatas from './_data/data'
import AlbumCard from './_components/AlbumCard'


export default function Home() {
	return (
		<div className='home-container'>
			<div className='home-container__bio'>
				<p>
					"The HAYAT project is a platform of expression that I established as a tribute to my mother. My goal is to release music I personally enjoy, and promote artists I genuinely appreciates.
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
			<div className="home-container__album-list">
				{albumDatas.map(({
					artist,
					title,
					cover,
					coverColor,
					link,
					slug,
					id,
					isEnabled
				}) => (
					<AlbumCard
						artist={artist}
						title={title}
						cover={cover}
						coverColor={coverColor}
						link={link}
						key={id}
						slug={slug}
						isEnabled={isEnabled}
					/>
				))}
			</div>
		</div>
	)
}
