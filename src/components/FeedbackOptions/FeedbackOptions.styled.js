import styled from '@emotion/styled';


export const Button = styled.button`
padding: ${({ theme }) => theme.spacing(1)};
margin-left: 30px;
background-color: yellow;
border: 1px solid #9e9e9e;
border-color: ${({ theme }) => theme.colors.grey}
box-shadow:  ${({ theme }) => theme.shadows.regular};

:hover{
    background-color:  #f0f06d;  
}
`