/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from '@emotion/react';
import { useState } from 'react';

const componentStyles = css`
  position: absolute;
  top: 40%;
  left: 10%;
  height: 100px;
  background-color: #bfabab66;
  width: 450px;
`;

const buttonStyles = css`
  position: absolute;
  left: 50%;
  top: 90%;
  width: 200px;
`;

const textStyles = css`
  position: absolute;
  left: 10%;
  top: 20%;
  color: #fffcf2;
`;

const backArrowStyles = css`
  transform: scaleX(-1);
  position: absolute;
  left: -5%;
  top: 30%;
  z-index: 1;
`;
const arrowStyles = css`
  position: absolute;
  left: 95%;
  top: 30%;
  z-index: 1;
`;
const titleStyles = css`
  position: absolute;
  left: 20px;
  top: -35%;
`;
export default function HeaderComponent() {
  const data = [
    {
      id: 1,
      name: 'nasa',
      text:
        'EMS along the entire value chain from electronics development and production to logistics',
      buttonText: 'HAVE A CLOSER LOOK',
    },
    {
      id: 2,
      name: 'glacier',
      text:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo',
      buttonText: 'READ MORE',
    },
    {
      id: 3,
      name: 'fog',
      text:
        'consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,',
      buttonText: 'SHOP NOW',
    },
  ];

  function getItem(id) {
    const item = data.find((e) => e.id === id);
    return item;
  }

  const [item, setItem] = useState(1);
  // const image = getItem(item).name;
  // const text = getItem(item).text;
  // const buttonText = getItem(item).buttonText;
  console.log(getItem(item));
  function next() {
    if (item === 3) {
      setItem(1);
    } else setItem(item + 1);
  }
  function previous() {
    if (item === 1) {
      setItem(3);
    } else setItem(item - 1);
  }
  console.log('item', item);
  return (
    <div>
      <img
        height="700"
        width="100%"
        src={`../${getItem(item).name}.jpg`}
        alt=""
      />
      <div css={componentStyles}>
        <h2 css={titleStyles}>EMS Solutions</h2>
        <p css={textStyles}>{getItem(item).text}</p>
        <img
          css={backArrowStyles}
          src="../arrow.png"
          height="50"
          alt=""
          onClick={(e) => {
            next();
          }}
        />
        <img
          css={arrowStyles}
          src="../arrow.png"
          height="50"
          alt=""
          onClick={(e) => {
            next();
          }}
        />
        <button css={buttonStyles}>{getItem(item).buttonText}</button>
      </div>
    </div>
  );
}
