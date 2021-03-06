import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
	color?: string;
}

interface TitleProps {
	light?: boolean;
}
export const Container = styled(RectButton)<ButtonProps>`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: ${({ color, theme }) => color ? color : theme.colors.main};
	margin-bottom: 8px;
	border-radius: 5px;
	padding: ${RFValue(16)}px;

`;

export const Title = styled.Text<TitleProps>`
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size:${RFValue(15)}px ;
	color: ${({ light, theme }) => light ? theme.colors.text : theme.colors.text_light};

`;
