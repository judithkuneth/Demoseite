/** @jsx jsx */
/** @jsxRuntime classic */
import Head from 'next/head';
import Link from 'next/link';
import { css, jsx } from '@emotion/react';
// import Header from '../components/Header';
import ImageComponent from '../components/ImageComponent';
import HeaderComponent from '../components/HeaderComponent';

const mainStyles = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const matrixStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1100px;
`;

const footerStyles = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  height: 70px;
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    a {
      margin: 0px 5px;
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
        </div>
      </nav>

      <main>
        <HeaderComponent />
        <div css={mainStyles}>
          <h2>Check out our product categories</h2>
          <p>
            Here you can nd the data sheets of all our{' '}
            <a>product categories.</a>
          </p>
          <p>
            Alternatively you can use our handy <a>product wizard.</a>
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
        <p>Firmenname | Straße Hausnummer | Adresse | Land</p>
        <div>
          <a>Datenschutzerklärung</a>
          <a>AGB</a>
          <a>Impressum</a>
        </div>
      </footer>
    </div>
  );
}
