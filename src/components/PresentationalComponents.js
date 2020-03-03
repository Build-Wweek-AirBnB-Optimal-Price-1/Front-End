import theme from '../theme'
import styled from 'styled-components'


////Site-wide components

//Responsive main container for consistent margins
export const ResponsiveContainer = styled.main`
    margin: 0 15px;
    ${theme.breakpoints.tablet} {
        margin: 0 30px
    }
`
//Title component
export const Title = styled.h1`
    font-size: 2rem;
    font-family: 'Raleway';
    text-align: center;
    margin-top: 60px;
`;

////Card container component
export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${theme.breakpoints.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
    }
`