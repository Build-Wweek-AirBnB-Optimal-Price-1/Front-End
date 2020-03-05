import theme from '../theme'
import styled from 'styled-components'


// ---------- Site-wide components ---------- //

//Responsive main container for consistent margins
export const ResponsiveContainer = styled.main`
    margin: 0 15px;
    margin-top: 60px;
    ${theme.breakpoints.tablet} {
        margin: 0 30px;
        margin-top: 60px;
    }
`
//Title component
export const Title = styled.h1`
    font-size: 2.6rem;
    font-family: 'Raleway';
    text-align: center;
    color: ${props => props.info ? 'white' : 'black'}
`;


// ---------- Card Components ---------- //
export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    ${theme.breakpoints.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 900px;
        margin: 0 auto;

    }
`

export const CardDetails = styled.div`
    span{
        text-decoration: none;
        color: #00A699;
        font-size: 1.9rem;
        font-family: 'Raleway';
        cursor: pointer;   
    }
    p{
        text-decoration: none;
        color: #00A699;
        font-size: 1.9rem;
        font-family: 'Raleway';
    }
    margin-top: 27.5px;
`

export const Card = styled.div`
    border-radius: 10px;
    width: 300px;
    padding: 30px 20px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    position: relative;
    margin: 30px auto;
`

export const CardTitle = styled.h3`
    font-size: 2rem;
    font-family: 'Raleway';
    span{
        font-size: 1.5rem;
    }
    margin-bottom: 25px;
`

export const CardText = styled.p`
    font-size: 1.55rem;
    font-family: 'Raleway'; 
    margin: 10px 0;
    
`
export const CardSubtitle = styled.span`
    font-weight: bold;
    font-size: 1.575rem;
`

// ---------- Form Components ---------- //
export const Form = styled.form`
    width: 340px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    width: 100%;
    max-width: ${props => props.search ? '180px' : '320px'};
    min-width: ${props => props.search ? '180px' : '280px'};
    background-color: ${props => props.submit ? theme.colors.red : 'white'};
    color: ${props => props.submit ? 'white' : 'black'};
    height: 40px;
    border: none;
    outline: none;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -webkit-appearance: none;
    margin: 20px 0;
    padding: 0 10px;
    font-size: 1.2rem;
    font-family: 'Raleway';
    cursor: ${props => props.submit ? 'pointer' : 'text'};
`;

export const Checkbox = styled.input`
    margin: 20px 0;
    cursor: pointer;
`;

export const Label = styled.label`
    font-size: 1.5rem;
    text-align: center;
    font-family: 'Raleway';
`;

export const Error = styled.p`
    font-size: 1.5rem;
    text-align: center;
    font-family: 'Raleway';
    color: red;
    margin-bottom: ${props => props.margin ? '20px' : '0'};
`;

// ---------- Control Bar Components ---------- //
export const ControlBar = styled.div`
    display: flex;
    max-width: 900px;
    justify-content: space-between;
    margin: 10px auto;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
`;

export const ControlBarText = styled.p`
    font-size: 2rem;
    font-family: 'Raleway';
    margin-left: 10px;
    margin-right: 20px;
    -moz-user-select: none; 
    -ms-user-select: none; 
    -khtml-user-select: none; 
    -webkit-user-select: none; 
    -webkit-touch-callout: none;
    cursor: pointer;
`;

export const ControlBarItem = styled.div`
    display: flex;
    align-items: center;
   
`;

export const PlusButton = styled.button`
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FF5A5F;
    color: white;
    font-size: 3rem;
    font-family: 'Raleway';
    outline: none;
    &:hover{
        cursor: pointer;
    }
    &:after {
        content: "+"
    }
`;

// ---------- Header Components ---------- //
export const HeaderStruct = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
   
    width: 100%;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);

    ${theme.breakpoints.tablet} {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 80px;
    }
`;

export const HeaderLogo = styled.img`
    position: relative;
    left: -4px;
    margin: 15px 0;
    ${theme.breakpoints.tablet} {
        position: static;
        margin-left: 20px;
    }
`;

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    ${theme.breakpoints.tablet} {
        margin-bottom: 0px;
    }
`;

export const LinkContainer = styled.div`
    border-radius: 10px;
    background-color: #FF5A5F;
    padding: 10px 15px;
    color: white;
    &:hover{
        cursor: pointer;
    }
`;

// ---------- SignUp Info Components ---------- //
export const Requirements = styled.div`
    margin-top: 80px;
    margin: 80px auto;
    width: 50%;
    max-width: 300px;
    min-width: 260px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #00A699;
    padding: 30px 20px;
    border-radius: 10px;
`;

export const Heading = styled.h6`
    font-size: 1.5rem;
    font-family: 'Raleway'; 
    margin-top: 20px;
    margin-bottom: 10px;
    color: white;
`;

export const ListItem = styled.li`
    list-style: circle inside;
    font-size: 1.3rem;
    font-family: 'Raleway'; 
    color: white;
`;

// ---------- Details Components ---------- //
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

export const DetailsButton = styled.div`
    margin: 10px 20px;
    font-family: 'Raleway';
    font-size: ${theme.fontsizes.small}px;
    color: ${props => props.delete ? theme.colors.red : theme.colors.black};
    &:hover{
        cursor: pointer;
    }
`;

export const ConfirmDelete = styled.div`
    margin: 20px auto;
    width: 400px;
    background-color: ${theme.colors.red};
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;

export const ConfirmButton = styled.div`
    font-family: 'Raleway';
    font-size: 1.53rem;
    margin-left: 10px;
    border-radius: 10px;
    padding: 10px;
    background-color: white;
    &:hover{
        cursor: pointer;
    }
`;

export const Text = styled.p`
    text-align: center;
    font-family: 'Raleway';
    font-size: 1.3rem;
    color: white;
`;