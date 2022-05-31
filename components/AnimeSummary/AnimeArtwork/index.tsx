import React, { useContext } from 'react'
import Image from 'next/image';
import {MovieContext} from '../../../pages/movie/[id]'
function AnimeArtwork() {
  let anime: any = React.useContext(MovieContext)
  return (
	  <div>
      <div className="image__container">
        <Image
          src={anime!.images.jpg.large_image_url}
          alt={anime.title}
          width={375}
          height={538}
        />
      </div>
      <style jsx>{`
        .image__container {
          margin: 2rem;
        }

      `} </style>
    </div>
  )
}

export default AnimeArtwork