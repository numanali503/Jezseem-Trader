import React from 'react'
import Intro from './Intro'
import Overview from './Overview'
import Departments from './Departments'
import KeyAreas from './KeyAreas'
import Capital from './Capital'
import Objectives from './Objectives'
import Empowerment from './Empowerment'
import CTA from './CTA'

function Container() {
  return (
    <div className='space-y-12'>
      <Intro />
      <Overview />
      <Departments />
      <KeyAreas />
      <Capital />
      <Objectives />
      <Empowerment />
      <CTA />
    </div>
  )
}

export default Container
