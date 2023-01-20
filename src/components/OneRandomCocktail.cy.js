import React from 'react'
import { OneRandomCocktail } from './OneRandomCocktail'

describe('<OneRandomCocktail />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<OneRandomCocktail />)
  })
})