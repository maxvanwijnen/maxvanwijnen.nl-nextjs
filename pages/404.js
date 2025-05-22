import Link from 'next/link';
import SEO from '../components/SEO/SEO';

const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Pagina niet gevonden | Max van Wijnen Fotografie"
        description="Deze pagina bestaat niet of is verplaatst. Ga terug naar de homepage of bekijk ons aanbod."
        noindex={true}
        nofollow={true}
      />
      
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="mt-6 text-5xl font-extrabold text-gray-900">404</h1>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Pagina niet gevonden</h2>
          <p className="mt-2 text-sm text-gray-600">
            Helaas, de pagina die je zoekt bestaat niet of is verplaatst.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/" legacyBehavior>
            <a className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Terug naar de homepage
            </a>
          </Link>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">Of bekijk onze andere pagina&apos;s:</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/fotoshoot" legacyBehavior>
              <a className="text-sm font-medium text-blue-600 hover:text-blue-500">Fotoshoots</a>
            </Link>
            <Link href="/over-mij" legacyBehavior>
              <a className="text-sm font-medium text-blue-600 hover:text-blue-500">Over Mij</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="text-sm font-medium text-blue-600 hover:text-blue-500">Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
