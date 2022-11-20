import css from 'styled-jsx/css';

const ColorModeButtonStyle = css.resolve`
  div {
    position: fixed;
    top: 2vw;
    right: 3vw;
    cursor: pointer;
    font-size: 1.5rem;
    text-shadow: 0.1rem 0.1rem 1rem var(--light);

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
  div:active {
    transform: scale(1.2);
  }
`;

export const ColorModeButtonStyled = ({ onClick, children }: { onClick: Function; children: JSX.Element | string }) => (
  <div
    className={ColorModeButtonStyle.className}
    onClick={() => {
      onClick();
    }}
  >
    {children}
    {ColorModeButtonStyle.styles}
  </div>
);
