export function reviews(state = [], action){
	switch(action.type){
		case 'REVIEWS_FETCH_DATA_SUCCESS':
			return action.reviews
		default:
			return state
	}
}
