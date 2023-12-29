import styled from "styled-components";


const CenterText = styled.h2`
    text-align: center;
`;

const Notification = ({ message }) => (
    <CenterText>{message}</CenterText>
);

export default Notification