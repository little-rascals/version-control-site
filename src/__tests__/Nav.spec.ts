import { render, fireEvent } from '@testing-library/svelte'

import Nav from '../components/Nav.svelte'

test('Nav compoennt should show home', () => {
  const { getByText } = render(Nav, {
    segment: 'about'
  })

  expect(getByText('home')).toBeInTheDocument()
  expect(getByText('about')).toBeInTheDocument()
  expect(getByText('blog')).toBeInTheDocument()
})