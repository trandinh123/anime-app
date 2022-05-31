import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import AnimeItem from '../../components/AnimeList/AnimeItem'
import Header from '../../components/Header';
import Spinner from '../../components/Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';
import Fallback from '../../components/Fallback';
import Layout from '../../components/Layout'
import AnimeList from '../../components/AnimeList';
function Search() {
	let router = useRouter();
	let [animes, setAnimes] = useState([]);
	let [page, setPage] = useState(2);
	let [loaded, setLoaded] = useState(false);
	console.log(loaded);
	useEffect(() => {
		async function getAnimeSearch() {
			setLoaded(false);
			let res = await axios.get(`https://api.jikan.moe/v4/anime?q=${router.query.q}`);
			setAnimes(res.data);
			setLoaded(true);
		}
		getAnimeSearch();
	}, [router.query.q])
	let fetchMoreData = async () => {
		async function getAnimeSearch() {
			let res = await axios.get(`https://api.jikan.moe/v4/anime?q=${router.query.q}&page=${page}`);
			setPage(page + 1);
			let newAnimes = JSON.parse(JSON.stringify(animes));
			newAnimes.data = [...animes.data, ...res.data.data];
			newAnimes.pagination.has_next_page = res.data.pagination.has_next_page;
			setAnimes(newAnimes)
		}
		getAnimeSearch();
	}
	return (
		<Layout>
			<div className="anime-list">
				{
					loaded ? <InfiniteScroll
						dataLength={5}
						loader={<></>}
						next={fetchMoreData}
						hasMore={animes === undefined ? true : animes?.pagination?.has_next_page}
						endMessage={<></>}
					>
						<AnimeList animes={animes.data} currPage={1} hasNextPage={false}/>	
					</InfiniteScroll>
					: <Fallback/>
				}	
			</div>
			<style jsx>{`
				.anime-list {
					display: grid;
					justify-content: center;
					row-gap: 1.75rem;
					margin: 5.75rem 0 1.5rem;
					overflow: auto;
					
				}
			`}</style>
		</Layout>
	)
}

export default Search