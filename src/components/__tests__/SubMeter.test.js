import { mount } from '@vue/test-utils'
import { describe, expect, it, beforeAll, afterAll, afterEach, test } from 'vitest'
import SubMeter from '../SubMeter.vue'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

export const restHandlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts?id=4600', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 3
        }
      ])
    )
  })
]
const server = setupServer(...restHandlers)
beforeAll(() => {
  console.log('before All')
  server.listen({ onUnhandledRequest: 'error' })
})
afterAll(() => {
  console.log('after All')
  server.close()
})
afterEach(() => {
  console.log('after Each')
  server.resetHandlers()
})

describe('test submeter mount', () => {
  it('should', () => {
    const wrapper = mount(SubMeter, { props: { dt: 'test dt props' } })
    expect(wrapper.text()).toContain('test dt props')
  })
  test('has a button', () => {
    const wrapper = mount(SubMeter, {})
    expect(wrapper.find('h6').exists()).toBe(true)
  })
  test('Button clicked', async () => {
    const wrapper = mount(SubMeter, {})
    const ac = await wrapper.get('button').trigger('click')
    console.log(ac)
    expect(wrapper.vm.search).toEqual('')
  })
})
