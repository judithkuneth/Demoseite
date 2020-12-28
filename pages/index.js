/** @jsx jsx */
/** @jsxRuntime classic */
import Head from 'next/head';
import Link from 'next/link';
import { css, jsx } from '@emotion/react';
import ImageComponent from '../components/ImageComponent';
import HeaderComponent from '../components/HeaderComponent';

const mainStyles = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  p {
    font-size: 14px;
    text-align: center;
    a {
      color: #81bd00;
      font-weight: 500;
    }
  }
`;

const matrixStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1100px;
  margin-top: 30px;
`;

const footerStyles = css`
  background-color: #81bd00;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  align-items: center;
  height: 70px;
  justify-content: center;

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    p {
      color: #404040;
    }
    a {
      margin: 0px 5px;
      color: white;
    }
  }
`;
const navStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  div {
    a {
      margin: 0px 15px;
      color: #404040;
      font-weight: 500;
    }
  }
  @media (min-width: 768px) {
    div {
      div {
        display: none;
      }
    }
  }
  @media (max-width: 768px) {
    div {
      a {
        display: none;
      }
      div:hover {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 1;
        position: relative;
        border-radius: 5px;
        background-color: #f1efef;

        a {
          display: flex;
          font-size: 18px;
          margin: 5px 15px;
        }
      }
    }
  }
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Demoseite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav css={navStyles}>
        <Link href="/">
          <img
            alt=""
            src="/logo.png"
            height="30"
            style={{ margin: '0px 15px' }}
          />
        </Link>
        <div>
          <Link href="/">
            <a>Produkte & Lösungen</a>
          </Link>
          <Link href="/">
            <a>EMS</a>
          </Link>
          <Link href="/">
            <a>Service & Support</a>
          </Link>
          <Link href="/">
            <a>Über tele</a>
          </Link>
          <Link href="/">
            <a>Produktsuche</a>
          </Link>
          <div>
            <img src="/hamburger.png" alt="" height="30px" />
            <a>some Link</a>
            <a>some Link</a>
            <a>some Link</a>
            <a>Produkte</a>
            <a>EMS</a>
            <a>Support</a>
            <a>Über tele</a>
            <a>Suche</a>
          </div>
        </div>
      </nav>

      <main>
        <HeaderComponent />
        <div css={mainStyles}>
          <h2>Check out our product categories</h2>
          <p>
            Here you can find the data sheets of all our{' '}
            <a href="">product categories.</a>
          </p>
          <p>
            Alternatively you can use our handy <a href="">product wizard.</a>
          </p>
          <div css={matrixStyles}>
            <ImageComponent />
            <ImageComponent />
            <ImageComponent />
            <ImageComponent />
            <ImageComponent />
            <ImageComponent />
            <ImageComponent />
            <ImageComponent />
            <ImageComponent />
          </div>
        </div>
      </main>

      <footer css={footerStyles}>
        <div>
          <p style={{ fontWeight: '700', marginRight: '5px' }}>Firmenname </p>{' '}
          <p> | Straße Hausnummer | Adresse | Land</p>
        </div>

        <div>
          <a>Datenschutzerklärung</a>
          <a>AGB</a>
          <a>Impressum</a>
        </div>
      </footer>
    </div>
  );
}
