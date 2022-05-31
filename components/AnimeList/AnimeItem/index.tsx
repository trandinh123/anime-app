import React, { useContext } from 'react'
import IAnimeItem from '../../../interfaces/IAnimeItem'
import Image from 'next/image'
import {FaStar, FaHeart} from 'react-icons/fa'
import LinkItem from '../../LinkItem'
function AnimeItem({ anime }: {anime: IAnimeItem}) {
  return (
	<LinkItem
		link={`/movie/${anime.mal_id}`}
	>
	<div className='container'>
		<div className='image-container'>
			<Image
				src={anime.images.jpg.image_url}
				alt={anime.title}
				width={225}
				height={335}
				objectFit='contain'
			/>
			<div className="tag">
				<span><FaStar></FaStar> {anime.score}</span>
				<span><FaHeart/> {anime.popularity}</span>
			</div>
		</div>
		<h3>{anime.title_english}</h3>
		<p className='title--japanese'>{anime.title}</p>
		
		
		<style>{`
			.container {
				display: flex;
				flex-flow: column nowrap;
				align-items: center;
				justify-content: center;
				
			}
			.image-container {
				position: relative;
			}
			h3 {
				text-align: center;
				font-weight: 550;
				font-size: 1rem;
			}
			.title--japanese {
				text-align: center;
				margin: .75rem;
				font-size: 0.75rem;
				width: 100%;
				color: #333333;
			}
			.tag {
				display: grid;
				position: absolute;
				bottom: .75rem;
				row-gap: .25rem;
				right: 0;
				width: 100%;
			}
			.tag span {
				width: 30%;
				text-align: center;
				background: white;
				opacity: .8;
				color: green;
				font-weight: 500;
				border-radius: .5rem;
				padding: .25rem .75rem;
				display: flex;
				align-items: center;
				column-gap: .25rem;
				font-size: .75rem;
			}
		`}</style>
	</div>
	</LinkItem>
  )
}

export default AnimeItem