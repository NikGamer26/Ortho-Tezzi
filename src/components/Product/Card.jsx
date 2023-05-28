import { useState } from 'react';
import classNames from 'classnames';
import Button from '../Button';

function TovaryBlock({
  id,
  name,
  image,
  price,
  sizes,
  onAddToCart,
  addedCount,
  gender,
}) {
  const availableGenders = [
    {
      label: 'Муж.',
      value: 'M',
      disabled: gender === 'M' || gender === 'C' ? false : true,
    },
    {
      label: 'Жен.',
      value: 'W',
      disabled: gender === 'W' || gender === 'C' ? false : true,
    },
  ];

  const [activeGender, setActiveGender] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  return (
    <div className="product-block">
      <div className="product-block__preview">
        <img className="product-block__image" src={image} alt="tovary" />
      </div>
      <h4 className="product-block__title">{name}</h4>
      <div className="product-block__selector">
        <ul>
          {availableGenders.map((gender, index) => (
            <li
              key={gender.value}
              onClick={() => setActiveGender(index)}
              className={classNames({
                active: activeGender === index,
                disabled: gender.disabled,
              })}
            >
              {gender.label}
            </li>
          ))}
        </ul>
        <ul>
          {sizes?.map((size, index) => (
            <li
              key={size}
              onClick={() => setActiveSize(index)}
              className={classNames({
                active: activeSize === index,
              })}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="product-block__bottom">
        <div className="product-block__price">{price} ₽</div>
        <Button
          onClick={() =>
            onAddToCart({ productId: id, size: sizes[activeSize], gender })
          }
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span> Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
}

export default TovaryBlock;
