import { createMocks } from 'node-mocks-http'
import hello from '../hello'

describe('/hello]', () => {
    test('returns a greeting', async () => {
        const { req, res } = createMocks({
            method: 'GET',
        })

        await hello(req, res)

        expect(res._getStatusCode()).toBe(200)
        expect(JSON.parse(res._getData())).toEqual({
            message: 'Hello world',
        })
    })
})
