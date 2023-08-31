import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from 'vitest'
import SubMeter from '../SubMeter.vue'
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
const stock = {
  type: 'apples',
  age: 25,
  count: 10
}
const stocks = {
  type: 'apples',
  age: 25,
  count: 10
}

describe('test submeter mount', () => {
  test('test tobe and toequal', () => {
    expect(stocks).toEqual(stock)
  })
  it('check props', () => {
    const wrapper = mount(SubMeter, { props: { dt: 'test dt props' } })
    expect(wrapper.text()).toContain('test dt props')
  })
  test('has a button', () => {
    const wrapper = mount(SubMeter, {})
    expect(wrapper.find('h6').exists()).toBe(true)
  })
  test('test existancy of item in component', () => {
    const comp = mount(SubMeter, {})
    expect(comp.find('a').exists()).toBe(true)
  })
})
