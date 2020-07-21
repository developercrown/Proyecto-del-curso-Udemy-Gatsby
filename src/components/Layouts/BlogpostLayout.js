import React from "react";
import Header from '../Header';
import Footer from '../Footer';
import { graphql } from 'gatsby';

const BlogpostLayout = ({data}) => {
    const post = data.markdownRemark;
    const {html, frontmatter} = post;

    return <div>
    <Header/>
    <div className="container">
        <div className="row justify-content-center">
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: html}}>

            </div>
        </div>
    </div> 
    <Footer/>
</div>
}

export default BlogpostLayout;

export const query = graphql`
    query ($slug: String!) {
        markdownRemark(fields: { slug: { eq : $slug } }) {
            html,
            frontmatter {
                title
            }
        }
    }
`;