import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;
    return (
      <div className="card">
        <h1
          data-testid="name-card"
          className="card__input"
        >
          { cardName }
        </h1>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          className="card__image"
        />
        <p data-testid="description-card" className="card__input">{ cardDescription }</p>
        <h3 data-testid="attr1-card" className="card__input">
          { cardAttr1 }
          {' '}
          pontos de Força
        </h3>
        <h3 data-testid="attr2-card" className="card__input">
          { cardAttr2 }
          {' '}
          pontos de Velocidade
        </h3>
        <h3 data-testid="attr3-card" className="card__input">
          { cardAttr3 }
          {' '}
          pontos de Defesa
        </h3>
        <p data-testid="rare-card" className="card__input">{ cardRare }</p>
        {cardTrunfo
          ? (
            <h2 data-testid="trunfo-card" className="card__input">Super Trunfo</h2>)
          : ''}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
