import React from 'react'
import AnimeRecommend from '../AnimeRecommend'
import AnimeArtwork from './AnimeArtwork'
import AnimeInfo from './AnimeInfo'

function AnimeSummary() {
  return (
	<div className='container'>
		<AnimeArtwork/>
		<AnimeInfo/>
		<style jsx>{`
			.container {
				margin-top: 10vh;
			}

			@media (min-width: 768px) {
				.container {
					display: grid;
					grid-template-columns: .4fr .6fr;
					align-items: start;
					margin-top: calc(10vh + 2rem);
					margin-left: .75rem;
				}
			}
		`}</style>
	</div>
  )
}

export default AnimeSummary