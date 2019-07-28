import styled from 'styled-components';

const colors = {
    grey : '#242424',
    black: ' black',
    lightgray: ' lightgray'
};

export const StyledH2 = styled.h2`
	// padding-bottom: 15px;
	padding-top: 0;
	color: ${colors.black};
	text-align: left;
	background-color: linear-gradient(${colors.grey}, #ffffff);
`;

export const CardStyle = styled.div`
	background-color: #white;
    height: auto;
    width: 100%;
	margin: 16px 0;
    max-width: 250px;
    padding: 0 20px;
`;

export const CardDisplay = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex-wrap: wrap;
	width: 300px;
	background-color: white;
	margin: 15px;
	border: 1px solid ${colors.lightgray};
	border-radius: 5px;
	// box-shadow: 2px 2px 10px 5px black inset;
    height: auto;

    
`;

export const Image = styled.img`
max-width: 100%;
`;

export const Status = styled.p`
color: gray;
line-height: 5px;
`;

export const Para = styled.p`
line-height: -10px;
`;

export const CardFooter = styled.div`
color: gray;
border-top: 1px solid lightgray;
width: 100%;
padding: 10px 20px;
height: 50px;
`;