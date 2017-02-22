// TODO


class GroceryListItem extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		done: false
		};
	}

	onListItemClick() {
		this.setState({
			done: !this.state.done
		});
	}


	render() {

		var style = {
			'font-weight': this.state.done ? 'bold' : 'normal'
		};

		return (
				<li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.item}</li>
			);
	}

}


var GroceryList = (props) => (
	<ul>
		{props.items.map(item =>
		<GroceryListItem item={item} />
		)}
	</ul>
);


ReactDOM.render(<GroceryList items={['Cucumber', 'Kale']}/>, document.getElementById('app'));



