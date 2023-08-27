import { describe, it, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import { sum } from '../funcsFortest/sum'
describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
test('expect sum of two numbers', () => {
  expect(sum(2, 5)).toBe(7)
})

describe('HelloWorld', () => {
  it('render properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'test first component' } })
    expect(wrapper.text()).toContain('test first component')
  })
})
