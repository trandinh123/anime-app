import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import { useSelector, useDispatch } from 'react-redux';
import { getGenre, selectGenre} from '../../feature/Genre/genreSlice';
import {HiOutlineMenuAlt1, HiArrowLeft} from 'react-icons/hi';
import Link from 'next/link'
import SearchBar from '../SearchBar';
const Sidebar = dynamic(() => import('./Sidebar'), {
	loading: () => <p>Loading</p>
})

function Header() {
	let [openSidebar, setOpenSidebar] = useState(false);
	let dispatch = useDispatch()
	useEffect(() => {
		dispatch(getGenre());
	}, [])
	let genres = useSelector(selectGenre);

	return (
		<div className="container">
			<div className='head'>
				<div className="menu-icon" onClick={() => setOpenSidebar(!openSidebar)}>
					{
						openSidebar ? <HiArrowLeft/> : <HiOutlineMenuAlt1/>
					}
				</div>
				<div className="logo">
					<div style={{
							display: "flex",
							alignItems: 'center',
							justifyContent: 'center',
							fontSize: '1rem'
						}}>
						<Link
							href='/'
							passHref
						>
								My Anime*chan
							
						</Link>	
					</div>
					
				</div>
			</div>
			<Sidebar genres={genres} openSidebar={openSidebar} handleSidebar={() => setOpenSidebar(!openSidebar)}/>
			<SearchBar/>
			<style jsx>{`
				.container {
					position: fixed;
					top: 0;
					width: 100vw;
					padding: 1rem .75rem;
					background: whitesmoke;
					color: black;
					z-index: 100;
					display: flex;
					align-items: center;
					flex-flow: row;
				}

				.head {
					width: 100%;
					display: flex;
					align-items: center;
				}

				.menu-icon {
					margin: 0 .75rem;
					font-size: 1.5rem;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.logo {
					font-weight: 550;
					display: flex;
					align-items: center;
					justify-content: center;
					column-gap: 1.5rem;
					transition: .3s;
				}
				
				@media (min-width: 1024px) {
					.container {
						max-width: calc(100vw - 320px);
						position: fixed;
						top: 0;
						left: 300px;
						width: 100%;
					}

					.menu-icon {
						display: none;
					}

					.logo {
						font-weight: 900;
						font-size: 5rem;
					}
				}
			`}	
			</style>
		</div>
	)
}

export default React.memo(Header);