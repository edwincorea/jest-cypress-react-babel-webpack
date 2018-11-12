import React from 'react'
import loadable from 'react-loadable'
import {render} from '../../test/calculator-test-utils'
import Calculator from '../calculator'

test('renders', async () => {
    await loadable.preloadAll()
    render(<Calculator />)
})
