import React from 'react'
import renderer from 'react-test-renderer'

import { axe, toHaveNoViolations } from 'jest-axe'
import { render } from '@testing-library/react'

import Button from './button'


expect.extend(toHaveNoViolations)

describe('Button', () => {
  /**
   * Snapshot
   * Primary
   * Secondary
   * Tertiary
   */
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Button
          action="secondary"
          className="w-full"
          disabled={false}
          role="link"
          title="Learn more about me"
          to="/about"
        >
          Learn more about me&nbsp;&nbsp;<i className="fa-regular fa-chevron-right" />
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Button
          action="secondary"
          className="w-full"
          disabled={false}
          role="link"
          title="Learn more about me"
          to="/about"
        >
          Learn more about me&nbsp;&nbsp;<i className="fa-regular fa-chevron-right" />
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Button
          action="tertiary"
          disabled={false}
          role="link"
          title="Return to homepage"
          className="mt-6 w-max"
          to="/"
        >
          <i className="fas fa-arrow-left" />&nbsp;&nbsp;Return to homepage
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  /**
   * Accessibility
   * Primary
   * Secondary
   * Tertiary
   */
  it('should have no violations', async () => {
    const { container } = render(
      <Button
        action="primary"
        className="mt-4"
        disabled={false}
        role="button"
        title="Submit"
        type="submit"
      >
        Submit
      </Button>
    )
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  it('should have no violations', async () => {
    const { container } = render(
      <Button
        action="secondary"
        className="w-full"
        disabled={false}
        role="link"
        title="Learn more about me"
        to="/about"
      >
        Learn more about me&nbsp;&nbsp;<i className="fa-regular fa-chevron-right" />
      </Button>
    )
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  it('should have no violations', async () => {
    const { container } = render(
      <Button
        action="tertiary"
        disabled={false}
        role="link"
        title="Return to homepage"
        className="mt-6 w-max"
        to="/"
      >
        <i className="fas fa-arrow-left" />&nbsp;&nbsp;Return to homepage
      </Button>
    )
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
