import React from 'react';
import classNames from 'classnames';

const Button = ({
  onClick,
  className,
  outline,
  children,
  type = '',
  variant,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
        'button--big': variant === 'big',
        'button--disabled': disabled,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
