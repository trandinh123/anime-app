import React, { useContext } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import { IconType } from 'react-icons';

const NavLink = ({ page, router, children } : {page: number, router: any, children: JSX.Element}) => {
	return (
		<div>
			<Link
				href={
						{
							pathname: router.pathname,
							query: {
								...router.query,
								page: page
							}
						}
					}
					passHref
			>
				{children}
			</Link>
		</div>
	)
}
function Pagination({ currPage, hasNextPage} : {
	currPage: number, 
	hasNextPage: boolean,
}) {
	let router = useRouter();
	return (
		<div className='container'> 
			{
				currPage > 1 && 
				<NavLink router={router} page={currPage - 1}>
					<div className="button">
						<span className='button__icon'>
							<FaArrowLeft></FaArrowLeft>
						</span>
						{currPage - 1}
					</div>
				</NavLink>
			}
			{
				hasNextPage && 
				<NavLink page={currPage + 1} router={router}>
					<div className="button" >
						{currPage + 1}
						<span className='button__icon'>
							<FaArrowRight></FaArrowRight>
						</span>
					</div>
				</NavLink>
			}

			<style jsx>{`
				.container {
					display: flex;
					width: 80vw;
					align-items: center;
					justify-content: space-around;
					flex-flow: row;
					margin: auto;
					margin: 2rem auto;
				}
				.button {
					display: flex;
					align-items: center;
					justify-content: center;
					column-gap: .5rem;
					padding: .5rem 1.25rem;
					font-size: 1rem;
					background: black;
					color: white;
					border: none;
					border-radius: .25rem;
				}
				.button__icon {
					font-size: .75rem;
				}
			`}</style>
		</div>
  	)
}

export default Pagination
