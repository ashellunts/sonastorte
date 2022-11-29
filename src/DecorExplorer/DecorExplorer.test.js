import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import DecorExplorer from './DecorExplorer'

const decorsList = [
    {
        name: "русалка",
        tags: ["tag1", "tag2"]
    }
]

test('renders content', () => {
    render(<DecorExplorer decorsList={decorsList} />)
    const element = screen.getByText('русалка')
    expect(element).toBeDefined()
})
