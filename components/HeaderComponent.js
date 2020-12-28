/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from '@emotion/react';
import { useState } from 'react';

const componentStyles = css`
  position: absolute;
  top: 40%;
  left: 10%;
  height: 110px;
  background-color: #e2d9d95e;
  width: 400px;
  @media (max-width: 768px) {
    height: 150px;
    width: 70%;
    h1 {
      font-size: 28px;
    }
  }
  @media (max-width: 350px) {
    height: 200px;
    width: 70%;
    h1 {
      font-size: 24px;
    }
  }
`;
const imageStyles = css`
  height: 600px;
  width: 100%;
  object-fit: cover;
`;
const buttonStyles = css`
  position: absolute;
  left: 50%;
  top: 90%;
  width: auto;
  padding: 10px 15px;
  font-size: 14px;
  color: #fff;
  background-color: #81bd00;
  border: none;
  font-weight: 500;
`;

const textStyles = css`
  position: absolute;
  left: 10%;
  top: 20%;
  color: #404040;
  font-weight: 500;
  margin-right: 15px;
`;

const backArrowStyles = css`
  transform: scaleX(-1);
  position: absolute;
  left: -10%;
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
  top: -50%;
  // @media (max-width: 768px) {
  //   font-size: 28px;
  // }
  // @media (max-width: 350px) {
  //   font-size: 28px;
  // }
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
        'consequat vitae, eleifend ac, enim. Aliquam lorem  consequat, dapibus in, viverra quis,',
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
      <img css={imageStyles} src={`../${getItem(item).name}.jpg`} alt="" />
      <div css={componentStyles}>
        <h1 css={titleStyles}>EMS-Manufacturing</h1>
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
