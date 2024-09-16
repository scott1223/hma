export async function fetchWithRetry(url, options = {}, retries = 3) {
	for (let attempt = 1; attempt <= retries; attempt++) {
		try {
			const response = await fetch(url, options);
            
			if (response.status === 401) {
				if (attempt === retries) {
					throw new Error(`Unauthorized (401) after ${retries} retries.`);
				}
				console.warn(`Attempt ${attempt} failed with 401. Retrying...`);
			} else {
				return await response.json();
			}
		} catch (error) {
			if (attempt === retries) {
				throw new Error(`Failed after ${retries} attempts: ${error.message}`);
			}
		}
	}
}
