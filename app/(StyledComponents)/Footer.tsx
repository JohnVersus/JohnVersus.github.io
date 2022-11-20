'use client';
import css from 'styled-jsx/css';

const FooterStyle = css.resolve`
  footer {
    display: flex;
    flex: 1;
    height: 5vh;
    padding: 0.5rem 0;
    border-top: 1px solid var(--primary);
    justify-content: center;
    align-items: center;
  }

  footer a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterStyled = ({ children }: { children: JSX.Element | string }) => (
  <footer className={FooterStyle.className}>
    {children}
    {FooterStyle.styles}
  </footer>
);
