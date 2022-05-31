import axios from 'axios';
import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../../../components/Header/index';
import IAnimeItem from '../../../interfaces/IAnimeItem';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../../../components/Layout';
const AnimeList = dynamic(
	() => import('../../../components/AnimeList')
);
export async function getServerSideProps({ params }: {params: any}) {
	params.genreID = params.genreID ?? 1;
	params.page = params.page ?? 1;
	let res = await axios.get(`https://api.jikan.moe/v4/anime?limit=15&page=${params.page}&genres=${params.genreID}`)
	
	return {
		props: {
			animes: res.data,
		}
	}
}

const Home: NextPage<{animes: IAnimeItem[] | any}> = ({animes}) => {
	let router = useRouter();
	let hasNextPage = animes.pagination.has_next_page;
	let page: number = Number(router.query.page) > 0 ? Number(router.query.page) : 1;
	return (
		<Layout>
			<>
				<Head>
					<title>My anime app</title>
				</Head>
				<main>
					{
						animes.data.length > 0 &&
						<div style={{marginTop: "5.75rem"}}>
							<AnimeList animes={animes.data} currPage={page} hasNextPage={hasNextPage} />
						</div>
					}
				</main>
			</>
		</Layout>
	)
}
export default Home;