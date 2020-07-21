import React from "react";
import Post from '../components/Post';
import PrimaryLayout from '../components/Layouts/PrimaryLayout';
import { graphql } from 'gatsby';

export default ({ data }) => {
	console.log(data);
	return <PrimaryLayout>
		<div className="col-12 col-md-6 mt-2 align-items-center justify-content-center">
			{
				data.allMarkdownRemark.nodes.map((node, key) => {
					return <Post
										key={key}
										image={node.frontmatter.image}
										title={node.frontmatter.title}
										excerpt={node.excerpt}
										readMore={node.fields.slug}
									/>
				})
			}
		</div>
	</PrimaryLayout>
}


export const query = graphql`
    {
        allMarkdownRemark {
			nodes {
				frontmatter {
					title
					keyword
					image
					date
				}
				excerpt
				html
				fields {
					slug
				}
			}
        }
    }
`;