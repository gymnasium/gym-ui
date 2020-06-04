/* eslint-disable react/jsx-props-no-spreading */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import { typeface, color } from '../../styles';

const invalidStyle = css`
  label {
    background-color: ${color.red};
    color: ${color.white};
    padding: 0.6rem;
    border-radius: 2px;
  }
  input {
    border: 2px solid ${color.red};
  }
`;

const style = css`
  display: flex;
  flex-direction: column;
  margin: 10px 0 5px 0;
  font-family: ${typeface.text};
  color: ${color.grey.A400};

  label {
    font-size: 1rem;
    text-transform: uppercase;
    font-family: ${typeface.title};
    font-weight: bold;
    margin: 0 0 6px 0;
    line-height: 1.3rem;
    width: fit-content;
  }

  input {
    font-size: 0.9rem;
    padding: 0.9rem;
    border: 1px solid ${color.grey.regular};
    border-bottom: 2px solid ${color.orange};
    margin-bottom: 0.5rem;
    height: 1.3rem;
  }

  .helperText {
    margin-bottom: 0.6rem;
  }

  .validationMessage {
    color: ${color.red};
    font-weight: bold;
    margin-bottom: 0.6rem;
  }
`;

interface Props {
  /**
   * Text Field HTML DOM Id
   */
  id: string;
  /**
   * Label
   */
  label: string;
  /**
   * Placeholder Text
   */
  placeholder?: string;
  /**
   * Expected type of input data
   * e.g. text, email, password
   */
  type?: string;
  /**
   * State value of the input text field
   * construct the state following this example:
   * const [userName, setUserName] = useState(initialValue)
   * Then pass `userName` to this parameter
   */
  valueState: string;
  /**
   * Satet setter function of the input text field
   * construct the setter function following this example:
   * const [userName, setUserName] = useState(initialValue)
   * Then pass `setUserName` to this parameter
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  valueSetter: Function;
  /** Input is required */
  isRequired?: boolean;
  /**
   * Additional helper text to show under the input field
   */
  helperText?: React.ReactNode;
  /**
   * Minimum Length (characters)
   */
  minLength?: number;
  /**
   * Max Length (characters)
   */
  maxLength?: number;
}

const TextField: React.FunctionComponent<Props> = ({
  id,
  label,
  placeholder = ' ',
  type = 'text',
  valueState,
  valueSetter,
  isRequired = false,
  minLength,
  maxLength,
  helperText,
  ...rest
}: Props): React.ReactElement => {
  const [isValid, setIsValid] = useState(true);
  const [validationMessage, setValidationMessage] = useState('');

  return (
    <div css={[style, !isValid && invalidStyle]}>
      <label css={!isValid && invalidStyle} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={isRequired}
        placeholder={placeholder}
        value={valueState}
        onChange={(event): void => valueSetter(event.target.value)}
        minLength={minLength}
        maxLength={maxLength}
        aria-describedby="register-username-desc"
        aria-required="true"
        onBlur={(event): void => {
          setIsValid(event.target.checkValidity());
          setValidationMessage(event.target.validationMessage);
        }}
        {...rest}
      />
      {validationMessage && (
        <span className="validationMessage">{validationMessage}</span>
      )}
      {helperText && <span className="helperText">{helperText}</span>}
    </div>
  );
};

export default TextField;
