import React, { useEffect, useRef, useState } from 'react'
import IAnimeItem from '../../interfaces/IAnimeItem'
import AnimeItem from '../AnimeList/AnimeItem';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import { IconType } from 'react-icons/lib';
function Arrow({ icon, styles }: {icon?: IconType | JSX.Element, styles: string}) {
	return (
		<div className='arrow' >
			{icon}
			<style jsx>{`
				.arrow {
					width: 30px;
					height: 30px;
					background: black;
					color: white;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					position: absolute;
					${styles}
					
				}

				.arrow:hover {
					background: #777;
					color: black;
					transition: .5s;
					transform: scale(1.3);
				}

				@media (min-width: 1024px) {
					.arrow {
						width: 40px;
						height: 40px;
						font-size: 1.25rem;
					}
				}
			`}</style>
		</div>
	)
}
function Carousel({ animes }: {animes: IAnimeItem[]}) {
	let carouselRef = useRef<HTMLDivElement>(null);
  return (
	<div className='container'>
		<div className='carousel' ref={carouselRef}>
				{
					animes.map((anime, idx) => {
						return (
							<div key={anime.mal_id} className='slide'>
								<AnimeItem  anime={anime}/>
							</div>
						)
					})
				}
				
		</div>
		<div onClick={() => {
				if(carouselRef?.current?.scrollLeft !== undefined) {
					carouselRef.current.scrollLeft -= carouselRef.current.scrollWidth / animes.length;
				}
			}}>
			<Arrow icon={<AiOutlineArrowLeft/>} styles='top: 40%; left: 0.75rem;' />
		</div>
		<div onClick={() => {
				if(carouselRef?.current?.scrollLeft !== undefined) {
					carouselRef.current.scrollLeft += carouselRef.current.scrollWidth / animes.length;
				}
			}}>
			<Arrow icon={<AiOutlineArrowRight/>} styles='top: 40%; right: 0.75rem;'/>
		</div>
		
		<style jsx>{`
			.container {
				position: relative;
				width: 100vw;
			}


			.carousel {
				display: flex;
				flex-flow: row;
				overflow-x: scroll;
				scroll-snap-type: x mandatory;
				scroll-behavior: smooth;
				-webkit-overflow-scrolling: touch;
				width: 80%;
				column-gap: 2.5rem;
				padding: 0 2rem;
				align-items: center;
				max-height: 70vh;
				overflow-y: hidden;
				margin: 2rem 2rem;

			}

			.slide {
				min-width: 150px;
				max-width: 300px;
			}

			.slide:hover {
				transition: .7s;
				transform: translateY(-.75rem) scale(1.2);
			
			}

			@media (min-width: 1024px) {
				.container {
					width: calc(100vw - 400px);
				}
				.carousel {
					margin: 2rem 0;
					padding-top: 1.5rem;
				}

				.carousel::-webkit-scrollbar{
					width: 20px;
  					height: 8px;
				}
				.carousel::-webkit-scrollbar-thumb {
					background: #666;
					border-radius: .5rem;
				}
			}
		`}</style>
	</div>
  )
}

export default Carousel