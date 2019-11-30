export function directionsPage(state = [], action){
	switch(action.type){
		case 'DIRECTIONS_PAGE_FETCH_DATA_SUCCESS':
			return action.directions
		default:
			return state
	}
}
