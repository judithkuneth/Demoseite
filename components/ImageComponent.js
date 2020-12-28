/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from '@emotion/react';

const componentStyles = css`
  border: 1px solid #e9e9e9;
  width: 300px;
  margin: 10px 10px;
`;

const textStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px 10px;
`;

export default function Imagecomponent() {
  return (
    <div css={componentStyles}>
      <img src="../placeholder.png" alt="" height="200" />
      <div css={textStyles}>
        <h3>ZEITRELAIS</h3>
        <p>hier könnte eine kurze Beschreibung der Produkt-Kategorie stehen.</p>
      </div>
    </div>
  );
}
