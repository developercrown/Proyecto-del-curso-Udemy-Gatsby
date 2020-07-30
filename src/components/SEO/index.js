import React from "react";
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const SEO = ({title, description, keywords, image}) => {
    return <StaticQuery query ={query} render={({
        site: {
            siteMetadata: {
                defaultTitle,
                defaultDescription,
                defaultAuthor,
                defaultKeywords,
                defaultImage,
                defaultUrl
            }
        }
    }) => {
        const seo = {
            title: title || defaultTitle,
            description: description || defaultDescription,
            author: defaultAuthor,
            keywords: keywords || defaultKeywords,
            image: `${defaultUrl}${image || defaultImage}`,
            url: defaultUrl
        }
        return <Helmet>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description}></meta>
            <meta name="keywords" content={seo.keywords}></meta>
            <meta name="image" content={seo.image}></meta>
            <meta name="url" content={seo.url}></meta>

            <meta name="robots" content="index, follow"></meta>
        </Helmet>
    }}>

    </StaticQuery>;
};

export default SEO;

const query = graphql`
    {
        site {
            siteMetadata {
              defaultTitle: title
              defaultDescription: description
              defaultAuthor: author
              defaultKeywords: keywords
              defaultImage: image
              defaultUrl: url
            }
          }
    }
`;