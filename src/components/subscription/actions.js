export function isLoading(bool){
	return {
		type: 'IS_LOADING',
		isLoading: bool
	}
}

export function hasError(bool){
	return {
		type: 'ERROR',
		hasError: bool
	}
}

export function subscriptionsFetchDataSuccess(subscriptions){
	return {
		type: 'SUBSCRIPTIONS_FETCH_DATA_SUCCESS',
		subscriptions
	}
}

export function changeCurrentSubscriptionSuccess(type){
	return {
		type: 'CHANGE_CURRENT_SUBSCRIPTION',
		currentSubscription: type
	}
}

export function errorAfterFiveSecond(){
	return (dispatch) => {
		setTimeout(() => {
			dispatch(hasError(true))
		}, 5000)
	}
}

export function setCurrentSubscription(type){
	return (dispatch) => {
		if(type){
			dispatch(changeCurrentSubscriptionSuccess(type))
		}
	}
}

export function fetchSubscriptions(url){
	return async (dispatch) => {
		dispatch(isLoading(true))

		await fetch(url)
			.then((response) => {
				if(!response.ok) {
					throw Error(response.statusText)
				}
				return response
			})
			.then((response) => response.json())
			.then((subscriptions) => {
				dispatch(subscriptionsFetchDataSuccess(subscriptions))
				dispatch(hasError(false))
				dispatch(isLoading(false))
			})
			.catch(() => {
				dispatch(hasError(true))
			})
	}
}
