import { describe, expect, it } from "vitest";
import { render, screen } from '@testing-library/react'
import { Button } from "./Button";

describe("Button", () => {
  it('can be colored with primary variant', () => {
    render(
      <Button
        variant="primary"
      >
        Test Button
      </Button>
    )
    expect(screen.getByRole('button')).toHaveClass('bg-pink-200 hover:bg-pink-100')
  })

  it('can be colored with secondary variant', () => {
    render(
      <Button
        variant="secondary"
      >
        Test Button
      </Button>
    )
    expect(screen.getByRole('button')).toHaveClass('bg-gray-300 hover:bg-gray-200')
  })
})