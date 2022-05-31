import React from 'react'
import IAnimeItem from '../../interfaces/IAnimeItem'
import AnimeList from '../AnimeList'
import {FaAngleDoubleRight} from 'react-icons/fa';
import LinkItem from '../LinkItem';
function Content({ animes, title }: {animes: IAnimeItem[], title: string}) {
  return (
	<div className='container'>
		<LinkItem
			link='/discover?cat=top'
		>
			<div className='title'>{title} <FaAngleDoubleRight/></div>
		</LinkItem>
		
		<AnimeList animes={animes} currPage={1} hasNextPage={false}/>
		<style jsx>{`
			.container {
				margin-top: calc(5vh);
				row-gap: 1.5rem;
				display:block;
			}

			.title {
				font-size: 1.5rem;
				font-weight: 600;
				display: flex;
				align-items: flex-end;
				flex-flow: row;
				column-gap: .75rem;
				margin-bottom: 1.25rem;
			}
		`}</style>
	</div>
  )
}

export default Content