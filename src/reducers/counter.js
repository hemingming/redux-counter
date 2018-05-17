/*
 * reducers
 * counter.js
 */

const defaultCount = {
	count: 0
}

const counter = (state = defaultCount, action) => {
	switch(action.type) {
		case 'INCREMENT':
		return {
			count: state.count + 1
		};
		case 'DECREMENT':
		return {
			count: state.count - 1
		};
		default:
		return state;
	}
}

export default counter
