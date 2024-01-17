describe('Pomodoro', () => {

  it('Renders the Default State', () => {
    cy.clock()
    cy.visit('/')

    cy.get('[data-test="focus-btn"]').should('exist')
    cy.get('[data-test="short-break-btn"]').should('exist')
    cy.get('[data-test="long-break-btn"]').should('exist')
    cy.get('[data-test="refresh-btn"]').should('exist')
    cy.get('[data-test="toggle-btn"]').should('exist')
    
    cy.get('[data-test="timer"]').should('have.text', '25:00')

    cy.tick(5000)

    cy.get('[data-test="timer"]').should('have.text', '25:00')

    cy.get('[data-test="counter"]').should('have.text', '#0')
  })

  it('Plays and Pauses the Timer', () => {
    cy.visit('/')

    const toggle_btn = cy.get('[data-test="toggle-btn"]')

    toggle_btn.click()

    cy.clock()
    cy.tick(4000)
    cy.get('[data-test="timer"]').should('have.text', '24:56')

    cy.tick(3000)
    cy.get('[data-test="timer"]').should('have.text', '24:53')

    toggle_btn.click()

    cy.tick(4000)
    cy.get('[data-test="timer"]').should('have.text', '24:53')

    toggle_btn.click()

    cy.get('[data-test="timer"]').should('have.text', '24:50')
  })

})

describe('Timer Mode Buttons', () => {

  it('Switches to Focus Mode', () => {
    cy.visit('/')

    const toggle_btn = cy.get('[data-test="toggle-btn"]')
    const short_break_btn = cy.get('[data-test="short-break-btn"]')
    const focus_btn = cy.get('[data-test="focus-btn"]')

    short_break_btn.click()
    toggle_btn.click()
    cy.clock()

    cy.tick(2000)
    cy.get('[data-test="timer"]').should('have.text', '04:58')

    focus_btn.click()
    cy.get('[data-test="timer"]').should('have.text', '25:00')
    cy.tick(2000)
    cy.get('[data-test="timer"]').should('have.text', '25:00')

    toggle_btn.click()
    cy.get('[data-test="timer"]').should('have.text', '24:56')
  })

  it('Switches to Break Mode', () => {
    cy.visit('/')

    const toggle_btn = cy.get('[data-test="toggle-btn"]')
    const short_break_btn = cy.get('[data-test="short-break-btn"]')

    toggle_btn.click()
    cy.clock()

    cy.tick(2000)
    cy.get('[data-test="timer"]').should('have.text', '24:58')

    short_break_btn.click()
    cy.get('[data-test="timer"]').should('have.text', '05:00')
    cy.tick(2000)
    cy.get('[data-test="timer"]').should('have.text', '05:00')

    toggle_btn.click()
    cy.get('[data-test="timer"]').should('have.text', '04:58')
  })

  it('Switches to Interval Mode', () => {
    cy.visit('/')

    const toggle_btn = cy.get('[data-test="toggle-btn"]')
    const long_break_btn = cy.get('[data-test="long-break-btn"]')

    toggle_btn.click()
    cy.clock()

    cy.tick(2000)
    cy.get('[data-test="timer"]').should('have.text', '24:58')

    long_break_btn.click()
    cy.get('[data-test="timer"]').should('have.text', '15:00')
    cy.tick(2000)
    cy.get('[data-test="timer"]').should('have.text', '15:00')

    toggle_btn.click()
    cy.get('[data-test="timer"]').should('have.text', '14:57')
  })

})

describe('Refresh Button', () => {

  it('Refresh: Focus Mode', () => {
    cy.visit('/')

    const toggle_btn = cy.get('[data-test="toggle-btn"]')
    const refresh_btn = cy.get('[data-test="refresh-btn"]')

    toggle_btn.click()
    cy.clock()

    cy.tick(3000)
    cy.get('[data-test="timer"]').should('have.text', '24:57')

    refresh_btn.click()
    cy.get('[data-test="timer"]').should('have.text', '25:00')

    cy.tick(4000)
    cy.get('[data-test="timer"]').should('have.text', '25:00')
  })

  it('Refresh: Break Mode', () => {
    cy.visit('/')

    const toggle_btn = cy.get('[data-test="toggle-btn"]')
    const refresh_btn = cy.get('[data-test="refresh-btn"]')
    const short_break_btn = cy.get('[data-test="short-break-btn"]')

    short_break_btn.click()
    toggle_btn.click()
    cy.clock()

    cy.tick(4000)
    cy.get('[data-test="timer"]').should('have.text', '04:56')

    refresh_btn.click()
    cy.get('[data-test="timer"]').should('have.text', '05:00')

    cy.tick(4000)
    cy.get('[data-test="timer"]').should('have.text', '05:00')
  })

  it('Refresh: Interval Mode', () => {
    cy.visit('/')

    const toggle_btn = cy.get('[data-test="toggle-btn"]')
    const refresh_btn = cy.get('[data-test="refresh-btn"]')
    const long_break_btn = cy.get('[data-test="long-break-btn"]')

    long_break_btn.click()
    toggle_btn.click()
    cy.clock()

    cy.tick(2000)
    cy.get('[data-test="timer"]').should('have.text', '14:58')

    refresh_btn.click()
    cy.get('[data-test="timer"]').should('have.text', '15:00')

    cy.tick(4000)
    cy.get('[data-test="timer"]').should('have.text', '15:00')
  })

})