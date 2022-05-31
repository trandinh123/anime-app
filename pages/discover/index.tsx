import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout';
import AnimeList from '../../components/AnimeList';
import Head from 'next/head';

interface PaginationState {
	current_page?: number;
	has_next_page?: boolean;
	items?: any;
	last_visibe_page?: number;
}
function Discover() {
	let router = useRouter();
	let cat = router?.query?.cat?.length ? router.query.cat : "top";
	let page = (!isNaN(Number(router?.query?.page)) ? Number(router?.query?.page) : 1);
	let [animes, setAnimes] = useState([]);
	let [pagination, setPagination] = useState<PaginationState>({});
	useEffect(() => {
		let source = axios.CancelToken.source();
		async function getAnime() {
			let res = await axios.get(`https://api.jikan.moe/v4/top/anime?filter=${cat}&page=${page}`);
			setAnimes(res.data.data);
			setPagination(res.data.pagination);
		}
		getAnime();

		return () => {
			source.cancel();
		}
	}, [])
	
	return (
		<Layout>
			<>
				<Head>
					<title>{`${cat} movie`}</title>
				</Head>
				<div className='container'>
					<AnimeList animes={animes} currPage={page} hasNextPage={pagination.has_next_page !== undefined ? pagination.has_next_page : false}/>
				</div>
				<style jsx>{`
					.container {
						margin-top: 5.75rem;
					}
				`}</style>
			</>
		</Layout>
	)
}

export default Discover