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

export function directionsPageFetchDataSuccess(directions){
	return {
		type: 'DIRECTIONS_PAGE_FETCH_DATA_SUCCESS',
		directions
	}
}

export function errorAfterFiveSecond(){
	return (dispatch) => {
		setTimeout(() => {
			dispatch(hasError(true))
		}, 5000)
	}
}

export function fetchDirectionsPage(url){
	return (dispatch) => {
		dispatch(isLoading(true))

		fetch(url)
			.then((response) => {
				if(!response.ok) {
					throw Error(response.statusText)
				}
				return response
			})
			.then((response) => response.json())
			.then((directions) => {
				dispatch(directionsPageFetchDataSuccess(directions))
				dispatch(hasError(false))
				dispatch(isLoading(false))
			})
			.catch(() => {
				dispatch(hasError(true))
			})
	}
}
