const SearchResult = ({ result }) => (
	<div className='search-by-name-result'>
		{
			result.name && result.amount
				? <>
					<span>{result.name}</span>
					<span>{result.amount}</span>
				</>
				: result
		}
	</div>
)

export default SearchResult