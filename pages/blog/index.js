import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import styles from '../../styles/BlogOverview.module.scss';

// Blog artikelen handmatig gedefinieerd (kan later dynamisch)
const blogPosts = [
  {
    slug: '5-tips-voor-effectieve-fashion-fotografie',
    title: '5 Tips voor Effectieve Fashion Fotografie',
    excerpt: 'Verbeter je fashion fotografie met deze 5 praktische tips voor betere resultaten en meer creativiteit.',
  },
  {
    slug: 'fashion-fotografie-soluzione',
    title: 'Fashion Fotografie: Soluzione',
    excerpt: 'Een kijkje achter de schermen bij een fashion shoot voor het merk Soluzione.',
  },
  {
    slug: 'fashion-fotoshoot-leiden-mannelijk-model',
    title: 'Fashion Fotoshoot Leiden: Mannelijk Model',
    excerpt: 'Lees alles over deze bijzondere fotoshoot met een mannelijk model in Leiden.',
  },
  {
    slug: 'modefotografie-voor-webshops',
    title: 'Modefotografie voor webshops',
    excerpt: 'Professionele beelden die je kleding laten verkopen. Waarom goede modefotografie essentieel is voor jouw webshop.',
  },
];

export default function BlogOverview() {
  return (
    <>
      <Head>
        <title>Blog | Max van Wijnen Fotografie</title>
        <meta name="description" content="Lees de nieuwste blogs over fotografie, fashion shoots en tips van Max van Wijnen." key="desc" />
      </Head>
      <Breadcrumbs />
      <section className={styles.blogOverviewSection}>
        <h1>Blog artikelen</h1>
        <ul className={styles.blogList}>
          {blogPosts.map(post => (
            <li key={post.slug} className={styles.blogListItem}>
              <Link href={`/blog/${post.slug}`} legacyBehavior>
                <a>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
