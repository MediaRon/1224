/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Facebook from '../../components/Social/Facebook';
import Twitter from '../../components/Social/Twitter';

const SocialPopupLink = styled.a`
	display: inline-block;
	margin-right: 15px;
	&::last-child {
		margin-right: none;
	}
`;

const SocialShare = ( props ) => {
	const { points } = props;
	const shareText = encodeURIComponent(
		`I am a 12:24 guru with ${ points } points. Can you beat my score?`
	);
	const url = encodeURIComponent( `https://1224.app` );
	const facebookAppId = '4438334979587141';

	return (
		<>
			<h2>Share Your Results</h2>
			<div>
				<SocialPopupLink
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						window.open(
							`https://www.facebook.com/dialog/share?app_id=${ facebookAppId }&display=popup&amp;quote=${ shareText }&href=${ url }`,
							'width=575,height=430,toolbar=false,menubar=false,location=false,status=false'
						);
					} }
				>
					<Facebook />
				</SocialPopupLink>
				<SocialPopupLink
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						window.open(
							`https://twitter.com/intent/tweet?via=mediaronllc&url=${ url }&text=${ shareText }&hashtags=1224app`,
							'1224 Tweet',
							'width=575,height=430,toolbar=false,menubar=false,location=false,status=false'
						);
					} }
				>
					<Twitter />
				</SocialPopupLink>
			</div>
		</>
	);
};

SocialShare.propTypes = {
	points: PropTypes.number.isRequired,
};

export default SocialShare;
