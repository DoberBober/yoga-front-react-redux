export function hasError(state = false, action){
	switch(action.type){
		case 'ERROR':
			return action.hasError
		default:
			return state
	}
}

export function isLoading(state = true, action){
	switch(action.type){
		case 'IS_LOADING':
			return action.isLoading
		default:
			return state
	}
}
