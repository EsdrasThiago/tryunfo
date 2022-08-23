import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     cardName: '',
  //     cardDescription: '',
  //     cardAttr1: '',
  //     cardAttr2: '',
  //     cardAttr3: '',
  //     cardImage: '',
  //     cardRare: '',
  //     cardTrunfo: false,
  //     hasTrunfo: false,
  //     isSaveButtonDisabled: false,
  //     onInputChange: () => { },
  //     onSaveButtonClick: () => { },
  //   };
  // }

  // onInputChange = ({ target }) => {
  //   const { type, name } = target;
  //   const value = type === 'checked' ? target.checked : target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // };
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
