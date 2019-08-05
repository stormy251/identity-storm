import styled from "styled-components";
import THEME from "../lib/theme";

export const DEFAULT_CARD_WIDTH = '24rem';
export const CARD_OUTLINE_STYLES = `0.0625rem solid ${THEME.colors.greyLight}`;

const Card = styled.div`
  border: ${({outlined}) => outlined ? CARD_OUTLINE_STYLES : null};
  background-color: ${({theme}) => theme.colors.white};
  box-sizing: border-box;
  border-radius: ${({theme}) => theme.borderRadius};
  padding: ${({theme}) => theme.spacing.lg};
  width: ${DEFAULT_CARD_WIDTH};
`;

export default Card;
