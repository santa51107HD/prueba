import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {render} from "@testing-library/react"
import Suma from "./Suma"

test('renders content', () => {
  const suma = {
    content: 'This is a test',
    important: true
  }

  const component =  render (<Suma/>)

  // console.log(component)
  component.debug()
})