const SearchForm = ({ nameField, setNameField, handleClick }) => (
	<form>
		<h2><label htmlFor='name-field'>Search by name</label></h2>

		<div className='name-input'>
			<input id='name-field' type='text' value={nameField}
				onChange={e => setNameField(e.target.value)} />
			<input type='submit' onClick={handleClick} value='Search' />
		</div>
	</form>
)

export default SearchForm