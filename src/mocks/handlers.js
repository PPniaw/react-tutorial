import { rest } from 'msw'
import { createStorage, waitFunc } from './lib'

const storage = createStorage({
	authTime: 0,
	token: String(Math.random()),
	users: [],
})

const login = rest.post('/api/login', async (req, res, ctx) => {
	await waitFunc()
	const { username, password } = req.body
	if (
		storage.users.some(e => e.username === username && e.password === password)
	) {
		storage.token = String(Math.random())
		storage.authTime = 3
		return res(
			ctx.status(200),
			ctx.json({
				token: storage.token,
				message: '登入成功',
				success: true,
			}),
		)
	}
	return res(
		ctx.status(500),
		ctx.json({
			message: '請輸入正確的帳號或密碼',
			success: false,
		}),
	)
})

const register = rest.post('/api/register', async (req, res, ctx) => {
	await waitFunc()
	const { username, password } = req.body
	if (username == null || password == null) {
		return res(
			ctx.status(500),
			ctx.json({
				message: '帳號或密碼不得為空',
				success: false,
			}),
		)
	}
	if (storage.users.some(e => e.username === username)) {
		return res(
			ctx.status(500),
			ctx.json({
				message: '該用戶已存在',
				success: false,
			}),
		)
	}
	if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(username)) {
		return res(
			ctx.status(500),
			ctx.json({
				message: '帳號格式錯誤',
				success: false,
			}),
		)
	}
	if (typeof password !== 'string' || !/^[A-z]\d{2,6}[A-z]$/.test(password)) {
		return res(
			ctx.status(500),
			ctx.json({
				message: '密碼格式錯誤',
				success: false,
			}),
		)
	}
	storage.users = [{ username, password }, ...storage.users]
	return res(
		ctx.status(200),
		ctx.json({
			message: '註冊成功',
			success: true,
		}),
	)
})

const authentication = rest.get(
	'/api/authentication',
	async (req, res, ctx) => {
		await waitFunc()
		const token = req.headers.get('AUTHENTICATION_TOKEN')
		if (token !== storage.token || storage.authTime <= 0) {
			return res(
				ctx.status(403),
				ctx.json({
					message: '權限不足',
					success: false,
				}),
			)
		}
		storage.authTime--

		return res(
			ctx.status(200),
			ctx.json({
				message: '驗證成功',
				success: true,
			}),
		)
	},
)

export const handlers = [login, register, authentication]
