import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.nav`
	max-width: 100%;
	height: auto;
	padding: 2vh 8vw;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: grey;

	@media screen and (max-width: 800px) {
		padding: 0 4vw;
	}

	@media screen and (max-width: 540px) {
		flex-direction: column;
		padding: 2vh 2vw;
		height: auto;
	}
`;

export const HeaderTitle = styled.h2`
	text-shadow: 1px 0px 10px #000;
	font-weight: 600;
	font-size: 18px;
	padding: 0;
	margin: 0;
	&:hover {
		color: grey;
	}
`;

export const LogoContainer = styled.span`
object-fit: cover;
	@media (max-width: 540px) {
		display: flex;
		

	}
`;

export const LogoComponent = styled.img`
	width: 84px;
	height: 84px;
	margin-left: 8vw;

`

export const OptionsContainer = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;

	justify-content: flex-end;
	list-style: none;
	margin-right: 8vw;
	padding: 0;
	gap: 45px; /* Adds space between option links and the cart icon */

	@media screen and (max-width: 540px) {
		width: 100%;
		justify-content:space-evenly; /* Centers the row on mobile screens */
		flex-wrap: nowrap; /* Forces elements to stay in a single row */
		gap: 5px; /* Tighter spacing for smaller screens */
	}
`;

export const OptionLink = styled(Link)`
	
	cursor: pointer;
	text-decoration: none;
	list-style: none;
	position: relative;

	font-weight: bold;
	color: blue;
	&:hover {
		color: grey;
	}

	@media (max-width: 540px) {
		font-size: 12px;
	}
`;