import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import AnimeItem from '../AnimeList/AnimeItem';
import IAnimeItem from '../../interfaces/IAnimeItem';
import Fallback from '../Fallback';
import Carousel from '../Carousel';
function AnimeRecommend() {
	let router = useRouter();
	let [animes, setAnimes] = useState<IAnimeItem[]>([]);
	let [loaded, setLoaded] = useState(false)
	const movieId = router.query.id;
	useEffect(() => {
		async function getAnimeRecommend() {
			setLoaded(false);
			let res = await axios.get(`https://api.jikan.moe/v4/anime/${movieId}/recommendations`)
			setAnimes(res.data.data.map((item: any) => item.entry));
			setLoaded(true);
		}
		getAnimeRecommend();
	}, [])
	const settings = {
		className:'center',
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		centerMode: true,
		lazyLoad: true
	  };

	  console.log(animes.length)
	  return (
		<div className='container'>
			<div className='title'>Recommended</div>
			<Carousel animes={animes}/>
			<style jsx>{`
				.title {
					font-size: 1.5rem;
					font-weight: 600;
					margin: 0 2rem;
					position: relative;					
				}

				.container {
					display: ${animes.length > 0 ? 'block' : 'none'};
				}
			`}</style>
		</div>
	  );
}

export default AnimeRecommend