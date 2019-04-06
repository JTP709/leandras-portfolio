import React from 'react'

const HeaderGeneric = (props) => (
    <header id="header">
        <h1>{ props.header }</h1>
        <p>{ props.description }</p>
    </header>
)

export default HeaderGeneric
