import Spinner from '../Spinner';
export default function Fallback() {
	return (
		<div className='spinner-container'>
			<Spinner/>
			<style jsx>{`
				.spinner-container {
					width: 100vw;
					height: 100vh;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			`}</style>
		</div>
	)
}