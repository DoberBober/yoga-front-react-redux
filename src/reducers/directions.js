export function directions(state = [], action){
	switch(action.type){
		case 'DIRECTIONS_FETCH_DATA_SUCCESS':
			return action.directions
		default:
			return state
	}
}
