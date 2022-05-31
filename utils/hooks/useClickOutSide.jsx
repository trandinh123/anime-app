import React, { useEffect, useRef } from 'react'

function useClickOutSide(ref, cb) {
	function handleClick(e) {
		if(ref.current && !ref.current.contains(e.target)) {
			cb();
		}
  	}
	useEffect(() => {
		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	}, [ref, cb])
}

export default useClickOutSide