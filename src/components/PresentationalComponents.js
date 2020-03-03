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
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    ${theme.breakpoints.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
    }
`

// Card Header Component
export const CardTitle = styled.h3`
    font-size: 2rem;
    font-family: 'Raleway';
    span{
        font-size: 1.5rem;
    }
`

// Card Text Component
export const CardText = styled.p`
    font-size: 1.5rem;
    font-family: 'Raleway'; 
    margin: 10px 0;
`