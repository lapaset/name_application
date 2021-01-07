const NameList = ({ names }) => (
	<ul>
		{
			names
				.map(n => <li key={n.name}>
					<span>{n.name}</span>
					<span>{n.amount}</span>
				</li>)
		}
	</ul>
)

export default NameList