import Link from 'next/link';
// import { getSanityContent } from '../utils/sanity';
import { SanityClient } from '../../sanity';


export default function Index({ blogs }) {
	console.log(blogs);
	return (
		<div>
			<h1>This Site Loads MDX From Sanity.io</h1>
			<div>
				
			</div>

			{/* <ul>
				{blogs.map(({ title, slug, content }) => (
					<div key={slug}>
						<Link href={`/${slug}`}>
							<a>{title}</a>
						</Link>
						<p> {content} </p>
					</div>
				))}
			</ul> */}
		</div>
	);
}

export const getServerSideProps = async (pageContext) => {
	const query = `*[_type == "blogPost"] {
			_id,
            slug,
            title,
            content
        }`;

	const blogs = await SanityClient.fetch(query);

	return {
		props: {
			blogs,
		},
	};
};
