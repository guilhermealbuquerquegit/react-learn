'use strict'
import React from 'react'
import createReactClass from 'create-react-class'

var Title = createReactClass({
  render: function() {
    return React.createElement('h1', null, 'Título da Aplicação')
  }
})

export default Title
