const _setStorageItem = (k, v) => {
	if (v == null || v === 'undefined' || v === 'null') return
	localStorage.setItem(k, JSON.stringify(v))
}

const _getStorageItem = k => {
	try {
		return JSON.parse(localStorage.getItem(k))
	} catch {
		localStorage.removeItem(k)
	}
	return null
}

const _createStorageKey = k => `__mock_${k}__`

export const createStorage = (initialStorage = {}) => {
	const _storage = {}
	const storage = {}
	for (const k in initialStorage) {
		const e = initialStorage[k]
		const sk = _createStorageKey(k)
		_storage[k] = _getStorageItem(sk) ?? e
		Object.defineProperty(storage, k, {
			get: () => {
				return _storage[k]
			},
			set: v => {
				_storage[k] = v
				_setStorageItem(sk, v)
			},
		})
	}
	return storage
}

export const waitFunc = () =>
	new Promise(resolve => {
		const randTime = Math.random() * 500 + 500
		setTimeout(() => {
			resolve()
		}, randTime)
	})
