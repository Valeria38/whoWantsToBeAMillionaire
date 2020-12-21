import './styles.scss';

const Button = ({ children, onClick, dataTestId }) => (
  <button className="button" onClick={onClick} data-testid={dataTestId}>
    {children}
  </button>
);

export default Button;
