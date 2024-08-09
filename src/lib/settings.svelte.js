let isNavigating = $state(false);

export function getIsNavigating() {
	
	function isNavigatingFalse() {
		isNavigating = false
	}
	function isNavigatingTrue() {
		isNavigating = true
	}

	return {
		get isNavigating() {
			return isNavigating;
		},
		isNavigatingFalse,
        isNavigatingTrue
	};
}