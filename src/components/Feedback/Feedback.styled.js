import styled from '@emotion/styled';

export const Title = styled.h1`
padding: ${({ theme }) => theme.spacing(4)};
margin-bottom: ${({ theme }) => theme.spacing(6)}
font-size: 32px;
color: ${({ theme }) => theme.colors.grey} `

export const Subtitle = styled.h2`
padding: ${({ theme }) => theme.spacing(4)};

font-size: 32px;
color: ${({ theme }) => theme.colors.dark}; `

export const ListStatistics = styled.ul`
display: flex;
margin-left: 15px;
gap: 20px;
`
export const Countings = styled.p`
padding: ${({ theme }) => theme.spacing(4)};
font-size: 22px;
`