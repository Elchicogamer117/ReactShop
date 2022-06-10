import React, { useState } from 'react'

//* Stateful component
const Button = () => {
  const [name, setName] = useState('Hello world 🖖')
  return (
    <div>
      {/* <h1> Hello world 🖖</h1> */}
      <h1> {name} </h1>
    </div>
  )
}
//* Stateless component
const ButtonSla = () => <ButtonS />
const ButtonSlb = ( {text} ) => <ButtonPrint text = {text} />
const ButtonSlc = ( {name}) => {
    <div>
      <h1> {name} </h1>
    </div>
}
//* Class component,  deprecated form, replaced for usestate, use of constructor for state initialization
class App extends React.Component {

  constructor() {
      super();
      this.sate = {
          count: 0
      };
  }

  render() {
      return (
          <div>
              <h1>Hello world! </h1>
          </div>
      )
  }
}
//* HOC (high order components) extend functionality, deprecated by react context
function ComponentWrapper(WrapperComponent) {
  class Wrapper extends Component {
      render () {
          return <WrapperComponent {...this.props} />;
      }
  }

  return Wrapper;
}