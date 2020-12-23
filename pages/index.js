import Head from 'next/head';
import Link from 'next/link';
// import Header from '../components/Header';
import ImageComponent from '../components/ImageComponent';
import HeaderComponent from '../components/HeaderComponent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Demoseite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Link href="/">
          <img
            alt=""
            src="/logo.png"
            height="40"
            style={{ margin: '10px 5px' }}
          />
        </Link>
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
      </nav>

      <main>
        <HeaderComponent />
        <h2>Check out our product categories</h2>
        <p>Here you can nd the data sheets of all our </p>{' '}
        <a>product categories.</a>
        <br />
        <p>Alternatively you can use our handy</p>
        <a>product wizard.</a>
        <div>
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
      </main>

      <footer>
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
