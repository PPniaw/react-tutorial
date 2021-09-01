import { setupWorker } from 'msw'
import { handlers } from './handlers'

export const setupMSW = async (options = {}) => {
	const worker = setupWorker(...handlers)
	await worker.start()
}
