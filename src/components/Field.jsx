const Field = ({
  type,
  placeholder,
  name,
  onChange,
  value,
  error,
  pattern,
}) => {
  const classNames = `field ${error ? 'field--error' : ''}`;
  return (
    <div className={classNames}>
      <input
        value={value}
        name={name}
        onChange={onChange}
        className="field__input"
        type={type}
        placeholder={placeholder}
        pattern={pattern}
      />
      {error && <div className="field__error">{error}</div>}
    </div>
  );
};

export default Field;
