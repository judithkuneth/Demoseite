/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from '@emotion/react';
import { useState } from 'react';

const headerStyles = css`
  position: relative;
  text-align: center;
  // color: white;
  // margin: 10px;
  // img {
  //   height: 300px;
  //   border-radius: 5%;
  // }
`;

const textInHeaderStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-90%, -50%);
  h2 {
    color: #fffcf2;
  }
  p {
    color: #fffcf2;
    text-align: center;
  }
`;

const backArrow = css`
  transform: scaleX(-1);
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
    <div css={headerStyles}>
      <img width="100%" src={`../${getItem(item).name}.jpg`} alt="" />
      <div css={textInHeaderStyles}>
        <h2>EMS Solutions</h2>

        <img
          css={backArrow}
          src="../arrow.png"
          height="50"
          alt=""
          onClick={(e) => {
            next();
          }}
        />
        <p>{getItem(item).text}</p>
        <button>{getItem(item).buttonText}</button>
        <img
          src="../arrow.png"
          height="50"
          alt=""
          onClick={(e) => {
            next();
          }}
        />
      </div>
    </div>
  );
}
