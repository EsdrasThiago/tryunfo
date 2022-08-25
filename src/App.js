import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardSaved: [],
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.buttonChecker());
  };

  buttonChecker = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;
    const maxNumber = 210;
    const maxAttr = 90;
    const minAttr = 0;
    const attr1 = +cardAttr1 <= maxAttr && +cardAttr1 >= minAttr;
    const attr2 = +cardAttr2 <= maxAttr && +cardAttr2 >= minAttr;
    const attr3 = +cardAttr3 <= maxAttr && +cardAttr3 >= minAttr;
    const allValues = +cardAttr1 + +cardAttr2 + +cardAttr3 <= maxNumber;
    if (
      cardName
      && cardDescription
      && cardImage
      && cardRare
      && allValues
      && attr1
      && attr2
      && attr3) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  onSaveButtonClick = (card) => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
    });
    this.setState((lastCard) => ({
      cardSaved: [...lastCard.cardSaved, card],
      hasTrunfo: [...lastCard.cardSaved, card].some((cards) => cards.cardTrunfo === true),
    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      cardSaved,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {
          cardSaved.map((saved) => (<Card
            key={ saved.cardName }
            cardName={ saved.cardName }
            cardDescription={ saved.cardDescription }
            cardAttr1={ saved.cardAttr1 }
            cardAttr2={ saved.cardAttr2 }
            cardAttr3={ saved.cardAttr3 }
            cardImage={ saved.cardImage }
            cardRare={ saved.cardRare }
            cardTrunfo={ saved.cardTrunfo }
          />))
        }
      </div>
    );
  }
}

export default App;
