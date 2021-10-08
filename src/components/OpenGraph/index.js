import Helmet from 'react-helmet';
export default function OpenGraph( props ) {
	const { title, imageSrc, url, description } = props;
	return (
		<Helmet>
			<title>{ title }</title>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
			<meta property="og:title" content={ title } />
			<meta property="og:type" content="website" />
			<meta property="og:image" content={ imageSrc } />
			<meta property="og:description" content={ description } />
			<meta property="og:url" content={ url } />
		</Helmet>
	);
}
