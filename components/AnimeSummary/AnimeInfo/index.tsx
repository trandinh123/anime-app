import React, { useContext, useEffect } from 'react'
import IAnime from '../../../interfaces/IAnime';
import { MovieContext } from '../../../pages/movie/[id]'
import { AiOutlinePlayCircle, AiOutlineEye } from 'react-icons/ai';
import Link from 'next/link';

function AnimeInfo() {
  const anime: IAnime = useContext(MovieContext)!;
  const trailerRef = React.useRef<HTMLDivElement>(null);
  const [view, setView] = React.useState(false);
  const [openTrailer, setOpenTrailer] = React.useState(false);

  useEffect(() => {
    function onClick(e: any) {
      if(e.target === trailerRef.current) {
        setOpenTrailer(!openTrailer);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [openTrailer])

  return (
    <div className='container'>
      <div className="title">
        <h2>{anime.title_english}</h2>
        <p>{anime.title}</p>
      </div>
      <div className="genres">
        <span className='head'>The Genres</span>
        <ul>{anime.genres.map((genre: any) => (
            <li key={genre.name}>
              <AiOutlinePlayCircle style={{color: 'red'}}/> 
              <Link passHref href={`/genre/${genre.mal_id}`} key={genre.name}>{genre.name}</Link>
            </li>
          )
        )}</ul>

      </div>
      <p className='synopsis'>
        <span className='head'>The Synopsis</span>
        <p>{anime.synopsis}</p>
        <button onClick={() => setView(!view)} className='button'>{view ? 'Hide' : 'View more'}</button>
      </p>
      <button 
        className='button--trailer'
        onClick={() => setOpenTrailer(!openTrailer)}
      >
        <AiOutlineEye style={{color: 'red', fontSize: '1.25rem'}}/> Trailer
      </button>
      <div className='trailer' ref={trailerRef}>
        <iframe width={'100%'} height={'60%'} src={openTrailer ? anime.trailer.embed_url : false} ></iframe>
      </div>
      <style jsx>{`
        .container {
          margin: .75rem 2rem 1.5rem;
          display: grid;
        }
        .title {
          display: grid;
          margin-top: .75rem 0 1.5rem;
          row-gap: .25rem;
        }
        
        .genres {
          display: grid;
          margin: 1.25rem 0 1.5rem;
          row-gap: .75rem;
        }
        .head {
          font-weight: 600;
          font-size: 1.25rem;
        }
        .genres ul {
          display: flex;
          flex-flow: row wrap;
          column-gap: 1.25rem;
          row-gap: .5rem;
        }
        .genres li {
          display: flex;
          align-items: center;
          justify-content: center;
          column-gap: .25rem;
        }

        .synopsis {
          display: grid;
          row-gap: .75rem;
        }
        .synopsis p {
          
          max-height: ${view ? 'auto' : '35vh'};
          line-height: 1.5rem;
          overflow: ${view ? 'visible' : 'hidden'};
        }
        .button {
          padding: .5rem .75rem;
          font-size: 1rem;
          color: white;
          background: black;
          border: none;
          font-weight: 300;
        }

        .button--trailer {
          padding: .5rem .75rem;
          font-size: 1rem;
          color: white;
          background: black;
          border: none;
          font-weight: 600;
          margin: 1.25em 0 1.75rem;
          display: inline-flex;
          align-items: center;
          column-gap: .5rem;
          max-width: min(150px, 50%);
        }

        .trailer {
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          align-items: center;
          justify-content: center;
          background-color: rgba(0,0,0, 0.5);
          display: ${openTrailer ? 'flex' : 'none'};
          z-index: 9999;
        }

        .trailer iframe {
          border: none;
          display: ${openTrailer ? 'block' : 'none'};
        }

        @media (min-width: 1024px) {
          .button {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default AnimeInfo