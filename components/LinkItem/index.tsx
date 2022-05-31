import React from 'react'
import Link from 'next/link'
function LinkItem({ children, link }: {children: React.ReactNode, link: string}) {
  return (
	<>
		<Link
			href={link}
			passHref
		>
			<a>{children}</a>
		</Link>
	</>
  )
}

export default LinkItem