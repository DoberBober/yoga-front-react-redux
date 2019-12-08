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

export function reviewsFetchDataSuccess(reviews){
	return {
		type: 'REVIEWS_FETCH_DATA_SUCCESS',
		reviews
	}
}

export function errorAfterFiveSecond(){
	return (dispatch) => {
		setTimeout(() => {
			dispatch(hasError(true))
		}, 5000)
	}
}

export function fetchReviews(url){
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
			.then((reviews) => {
				dispatch(reviewsFetchDataSuccess(reviews))
				dispatch(hasError(false))
				dispatch(isLoading(false))
			})
			.catch(() => {
				dispatch(hasError(true))
			})
	}
}
