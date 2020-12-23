/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from '@emotion/react';

const backgroundStyles = css`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../nasa.jpg');
  opacity: 1;
  background-repeat: no-repeat;
  background-size: 1800px;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: red;
  }
`;

export default function Header() {
  return (
    <header>
      <div css={backgroundStyles}>
        <h1> EMS-Manufacturing</h1>
        {/* <img src="nasa.jpg" alt="" /> */}
        <div>
          <p style={{ color: 'white' }}>
            EMS along the entire value chain from electronics development and
            production to logistics
          </p>
          <button>HAVE A CLOSER LOOK</button>
        </div>
      </div>
    </header>
  );
}
