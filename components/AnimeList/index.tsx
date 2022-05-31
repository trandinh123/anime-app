import React, { createContext, useState } from 'react'
import AnimeItem from './AnimeItem'
import IAnimeItem from '../../interfaces/IAnimeItem'
import Pagination from '../Pagination'
import {BiArrowFromLeft} from 'react-icons/bi';
function AnimeList({ animes, currPage, hasNextPage, title } : { animes : IAnimeItem[], currPage: number, hasNextPage: boolean, title?: string }) {
	return (
		<div>
			<div className="anime-list">
				{
					animes?.map((anime, index) => 
						<AnimeItem key={index} anime={anime}/>
					)	
				}
			</div>
			<div>
				<Pagination currPage={currPage} hasNextPage={hasNextPage}/>
			</div> 
			<style jsx>{`
				.anime-list {
					display: grid;
					justify-content: center;
					row-gap: 1.75rem;
					margin: 0 0 1.5rem;
				}
				@media (min-width: 375px) {
					.anime-list {
						grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
						justify-content: space-evenly;
						margin-right: 2rem;
						margin-left: 2rem;
						column-gap: 2.5rem;
						row-gap: 10vh;
					}
				}

				@media (min-width: 768px) {
					.anime-list {
						grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
					}
				}
			`}</style>
		</div>
	)
}

export default AnimeList