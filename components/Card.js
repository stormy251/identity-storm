import styled from "styled-components";

const Card = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    box-sizing: border-box;
    border-radius: 0.5rem;
    padding: 1.5rem;
    width: 24rem;
`;

export default Card;
