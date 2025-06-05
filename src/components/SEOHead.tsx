
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead = ({ title, description, keywords, image, url }: SEOHeadProps) => {
  const fullTitle = `${title} | Geogreatotechnics & Geodreels Ltd`;
  const defaultImage = "/geo-uploads/05e99988-5d95-4837-ada7-c15edb9f9ec1.png";
  const siteUrl = "https://geogreatotechnics.com";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image || defaultImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Geogreatotechnics & Geodreels Ltd" />
      <link rel="canonical" href={url || siteUrl} />
    </Helmet>
  );
};

export default SEOHead;
