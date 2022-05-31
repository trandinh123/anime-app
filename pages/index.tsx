import axios from 'axios';
import type { NextPage } from 'next'
import Head from 'next/head'
import IAnimeItem from '../interfaces/IAnimeItem';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Content from '../components/Content';
const Home: NextPage<{animes: IAnimeItem[]}> = () => {
  let [animes, setAnimes] = useState<IAnimeItem []>([])
  let router = useRouter();
  let page: number = Number(router.query.page) > 0 ? Number(router.query.page) : 1;
  useEffect(() => {
    async function getAnime() {
      try {
        let res = await axios.get(`https://api.jikan.moe/v4/anime?limit=10&page=${page}`);
        setAnimes(res.data.data)
      } catch(e) {
        console.log(e)
      }
    }
    getAnime();
    return () => axios.CancelToken.source().cancel()
  }, [page])
  return (
    <Layout>
      <>
        <Head>
          <title>My Anime*chan</title>
        </Head>
        <main>
          <Content animes={animes} title={"Top Anime"}/>
        </main>
        <style jsx>{
        `
          @media screen and (min-width: 1024px) {
            main {
              margin-top: 8vh;
            } 
          }
        `
        }
        </style>
      </>
    </Layout>
  )
}
export default Home;