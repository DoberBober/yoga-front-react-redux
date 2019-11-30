export function subscriptions(state = [], action){
	switch(action.type){
		case 'SUBSCRIPTIONS_FETCH_DATA_SUCCESS':
			return {
				...action.subscriptions,
				currentSubscription: action.subscriptions.types[1]
			}
		case 'CHANGE_CURRENT_SUBSCRIPTION':
			return {
				...state,
				currentSubscription: action.currentSubscription
			}
		default:
			return state
	}
}
