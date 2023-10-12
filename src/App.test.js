import {fireEvent, render, screen } from '@testing-library/react'
import Timer from './components/Timer'

// sjekker om timeren starter med 0
it('should start at 0', () => {
    render(<Timer/>)

    const h1 = document.querySelector("h1")
    expect(h1).toHaveTextContent("Timer: 0")
})
// sjekker om timeren/h1-teksten er 5 / Timer: 5, etter 5 sekunder.
it('should be at 5 after 5 seconds', () => {
    render(<Timer/>)
    fireEvent.click(screen.getByText("Start"))
    setTimeout(() => {
      expect(h1).toHaveTextContent("Timer: 5")
    },5000) 
})
