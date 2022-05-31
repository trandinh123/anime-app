import React, { useCallback } from 'react'
import {BiSearchAlt} from 'react-icons/bi';
import useClickOutSide from '../../utils/hooks/useClickOutSide';
import {useRouter} from 'next/router'
function SearchBar() {
	let [visible, setVisible] = React.useState(false);
	let ref = React.useRef(null)
	let inputRef = React.useRef<HTMLInputElement>(null)
	let router = useRouter();
	useClickOutSide(ref, () => visible && setVisible(!visible))

	let handleSearch = useCallback((e) => {
		e.preventDefault();
		router.push(`/search?q=${e.target[0].value}`)
	}, [router])

	return (
		<div className='container'>
			<form className='search__container' ref={ref} onSubmit={(e) => handleSearch(e)}> 
				<input ref={inputRef} placeholder='Search' />
				<div className='search__icon' onClick={
						() => {
							setVisible(!visible)
							if(!visible) inputRef?.current?.focus();
						}
					}>
					<BiSearchAlt/>
				</div>
			</form>
			<style jsx>{`

				.container {
					align-selft: flex-end;
					margin-right: auto;
					min-width: 2.125rem;
				}
				form {
					display: flex;
					align-items: center;
					border: 1px solid black;
					border-radius: 1.25rem;
					position: relative;
					overflow: hidden;
				}	

				input {	
					width:   ${visible ? '90%' : '0px'};
					padding: ${visible ? '.25rem .75rem' : ''};
					height:  ${visible ? '2rem' : '0'};
					font-size: 1.125rem;
					border: none;
					outline: none;
					transition: width 350ms ;
				}
				
				.search__icon {
					display: flex;
					align-items: center;
					justify-content: center;
					outline: none;
					height: 2rem;
					width: 2rem;
					padding: .0.25rem;
					font-size: 1.5rem;
					background: black;
					color: white;
				}
			
			`}
			</style>
		</div>
	)
}

export default SearchBar