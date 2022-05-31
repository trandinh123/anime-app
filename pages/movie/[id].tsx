import axios from 'axios'
import React, { createContext } from 'react'
import Image from 'next/image';
import AnimeSummary from '../../components/AnimeSummary';
import Header from '../../components/Header';
import AnimeRecommend from '../../components/AnimeRecommend';
import Head from 'next/head';
import Layout from '../../components/Layout';

export async function getServerSideProps({ params }: any) {
	let res = await axios.get(`https://api.jikan.moe/v4/anime/${params.id}`)
	return {
		props: {
			anime: res.data.data
		}
	}
}
export const MovieContext = createContext(null);
function Movie({ anime }: any) {
	return (
		<MovieContext.Provider value={anime}>
			<Head>
				<title>{anime.title_english ?? "Movie"}</title>
			</Head>
			<Layout>
				<div className="container">				
					<AnimeSummary/>
					<AnimeRecommend/>
					<style jsx>{`
						.container {
							margin: 0 0 15vh;
							display: grid;
							row-gap: 2rem;
						}
						
					`}</style>
				</div>
			</Layout>
		</MovieContext.Provider>
	)
}

export default Movie;