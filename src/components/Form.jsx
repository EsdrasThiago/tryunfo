import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      hasTrunfo,
      onSaveButtonClick } = this.props;
    return (
      <form className="forms">
        Nome da carta:
        <input
          autoComplete="off"
          type="text"
          data-testid="name-input"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
          className="forms__input"
        />
        Descrição da carta:
        <input
          autoComplete="off"
          type="textarea"
          data-testid="description-input"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
          className="forms__input"
          maxLength="200"
        />
        Atributo de força:
        <input
          type="number"
          autoComplete="off"
          placeholder="Insira numero"
          data-testid="attr1-input"
          name="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
          className="forms__input"
        />
        Atributo de velocidade:
        <input
          type="number"
          autoComplete="off"
          placeholder="Insira numero"
          data-testid="attr2-input"
          name="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
          className="forms__input"
        />
        Atributo de defesa:
        <input
          type="number"
          autoComplete="off"
          placeholder="Insira numero"
          data-testid="attr3-input"
          name="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
          className="forms__input"
        />
        Imagem da carta:
        <input
          autoComplete="off"
          type="text"
          data-testid="image-input"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
          className="forms__input"
        />
        Raridade da carta:
        <select
          autoComplete="off"
          data-testid="rare-input"
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
          className="forms__input"
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        Super Trunfo:
        {hasTrunfo
          ? <p className="forms__input">Você já tem um Super Trunfo em seu baralho</p>
          : (
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              className="forms__input"
            />) }
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ () => onSaveButtonClick({
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          }) }
          className="forms__input"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
