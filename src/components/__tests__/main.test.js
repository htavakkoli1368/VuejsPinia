import { assert, describe, expect, test } from 'vitest'

// const isDev = true

describe('describe section', () => {
  test('should work as expected', () => {
    expect(Math.sqrt(4)).toBe(2)
  })

  test('skipped', () => {
    assert.equal(Math.sqrt(4), 2)
  })
})
