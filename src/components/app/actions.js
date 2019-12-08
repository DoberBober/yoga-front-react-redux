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

export function mainInfoFetchDataSuccess(mainInfo){
	return {
		type: 'MAIN_INFO_FETCH_DATA_SUCCESS',
		mainInfo
	}
}

export function errorAfterFiveSecond(){
	return (dispatch) => {
		setTimeout(() => {
			dispatch(hasError(true))
		}, 5000)
	}
}

export function fetchMainInfo(url){
	return async (dispatch) => {
		await fetch(url)
			.then((response) => {
				if(!response.ok) {
					throw Error(response.statusText)
				}
				return response
			})
			.then((response) => response.json())
			.then((mainInfo) => {
				dispatch(mainInfoFetchDataSuccess(mainInfo))
				dispatch(hasError(false))
			})
			.catch(() => {
				dispatch(hasError(true))
			})
	}
}
