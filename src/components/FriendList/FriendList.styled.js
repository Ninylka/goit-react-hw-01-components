import styled from 'styled-components';

export const ListFriends = styled.ul`
list-style: none;
max-width: 300px;
margin-top: 100px;
margin-left: auto;
margin-right: auto;
padding: 0;
`;
  
export const LiItemFriends = styled.li`
padding-top: 15px;
padding-bottom: 15px;
padding-left: 15px;
border-radius: 10px;
box-shadow: 0px 0px 1px rgba(46, 47, 66, 0.2), 0px 1px 1px rgba(46, 47, 66, 0.2), 0px 1px 6px rgba(46, 47, 66, 0.2);
display: flex;
align-items: center;
gap: 15px;
background-color: #fff;
&:not(:last-child) {
    margin-bottom: 20px;
  }

`;

export const FotoFriends = styled.img`
border-radius: 25%;
box-shadow: 0px 0px 1px rgba(46, 47, 66, 0.2), 0px 1px 1px rgba(46, 47, 66, 0.2), 0px 1px 6px rgba(46, 47, 66, 0.2);
width: 50px;
display: block;
`;

export const NameFriends = styled.p`
font-family: 'roboto';
color: #003;
font-weight: 600;
font-size: 22px;
line-height: 1.5;
letter-spacing: 0.02em;
`;

export const SpanStatus = styled.span`
width: 15px;
border-radius: 50%;
background-color: ${(props) => (props.isOnline ? 'green' : 'red')};
height: 15px;
margin-left: 10px;
`