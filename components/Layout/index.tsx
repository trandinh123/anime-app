import Head from 'next/head'
import React, { ReactChild } from 'react'
import Header from '../Header'

function Layout({children}: {children: ReactChild}) {
  return (
	<div className='container'>
		<Header></Header>
		<div className='child__container'>
			{children}
		</div>
		<style jsx>{`
			.container {
			}

			@media (min-width: 1024px) {
				.child__container {
					position: absolute;
					top: 0;
					left: 320px;
					max-width: calc(100vw - 320px);
				}
			}
		`}</style>
	</div>
  )
}

export default Layout