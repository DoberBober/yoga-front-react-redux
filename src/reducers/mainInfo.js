export function mainInfo(state = {}, action){
	switch(action.type){
		case 'MAIN_INFO_FETCH_DATA_SUCCESS':
			return action.mainInfo
		default:
			return state
	}
}
