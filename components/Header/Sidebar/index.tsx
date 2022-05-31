import { FaMedal, FaThumbsUp, FaCalendarAlt, FaTags } from 'react-icons/fa';
import Link from 'next/link';
import { EventHandler, useEffect, useRef } from 'react';
import LinkItem from '../../LinkItem';
import Image from 'next/image';
interface IGenre {
	mal_id: number,
	name: string,
	url: string,
	count: number
}

interface Genres {
	value: IGenre[],
	status: string
}

interface SidebarProps {
	genres: Genres,
	openSidebar: boolean,
	handleSidebar: () => void
}

function Sidebar({ genres, openSidebar, handleSidebar }: SidebarProps) {
	let ref = useRef<HTMLDivElement>(null);

	return (
		<div ref={ref}>	
			<div className="container">
				<div className='sidebar__logo'>
					<Image
							alt="Logo"
							width={90}
							height={90}
							layout='fixed'
							src='/icon.png'
						/>
				</div>
				<div className="discover">
					<h3>Discover</h3>
					<ul className='list'>
						<li>
							<span className='list__icon'>
								<FaMedal/>
							</span>
							<LinkItem link={'/discover?cat=bypopularity'}>
								<>Popular</>
							</LinkItem>
						</li>
						<li>
							<span className="list__icon">
								<FaThumbsUp/>
							</span>
							<LinkItem link={'/discover?cat=top'}>
								<>Top</>
							</LinkItem>
						</li>
						<li>
							<span className="list__icon">
								<FaCalendarAlt/>
							</span>
							<LinkItem link={'/discover?cat=upcoming'}>
								<>Upcoming</>
							</LinkItem>
						</li>
					</ul>
				</div>	
				<div className='genre'>
					<h3>Genres</h3>
					<ul className='list'>
						{
							genres.status === 'success' && genres.value.length > 0 &&
							genres?.value?.map((genre, index) => 
									<li key={index}>
										<Link 
											href={`/genre/${genre.mal_id}`}
											passHref
										>
											<a onClick={handleSidebar}>
												<span className="list__icon">
													<FaTags/>
												</span>
												{genre.name} 
												<span className="count">
													{genre.count}
												</span>
											</a>
										</Link>
									</li>

							)
						}
					</ul>
				</div>
			</div>
			<style jsx>{`
				.container {
					position: fixed;
					top: calc(10vh - 0.125rem);
					left: ${!openSidebar ? '-300rem' : '-.75rem'};
					transition: .3s;
					background: #f1f1f1;
					padding: 1.25rem;
					display: flex;
					flex-flow: column;
					align-items: center;
					overflow-y: auto;
					overflow-x: hidden;
					max-width: 300px;
					width: 70vw;
					z-index: 9999;
					row-gap: 1.25rem;
				}

				.list {
					list-style: none;
					padding: 0.5rem 0.75rem;
				}

				.discover .list {
					display: grid;
					width: 100%;
					row-gap: 1.25rem;
				}
				.list li a{
					padding: 0.5rem 2.75rem;
					display: flex;
					align-item: center;
				}

				.list__icon {
					padding: 0 .5rem;
				}

				.count {
					padding: 0 0.5rem;
					font-size: .75rem;
					opacity: .8;
				}
				.discover h3 {
					margin: .5rem 0;
					margin-left: 1.5rem;
				}
				.genre h3 {
					padding: .75rem 1.75rem;
				}
				.genre .list{
					overflow-y: auto;
					height: 100vh;
					padding-bottom: 20rem;
				}

				.sidebar__logo {
					display: none;
				}
				@media (min-width: 1024px) {
					.container {
						position: fixed;
						top: 0;
						left: 0;
						z-index: 9999;
						oveflow: visible;
						heigth: 100vh;
						background: whitesmoke;
					}

					.sidebar__logo {
						display: block;
						margin: 2rem 0;
					}
				}
			`}</style>
		</div>
	)
}

export default Sidebar