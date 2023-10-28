import styled from 'styled-components';
export const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  };

  export const generateColors = (data) => {
    return data.map(item => ({
      ...item,
      backgroundColor: getRandomHexColor(),
    }));
  };


  export const ContainerStates = styled.div`
width: 300px;
  padding-top: 15px;
  margin-left: auto ;
  margin-right:auto;
  margin-top: 100px;
  text-align: center;
  background-color: #fff; 
  border-radius: 10px;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.2), 0px 1px 6px rgba(46, 47, 66, 0.2);
`;

export const ListStats = styled.ul`
display: flex;
justify-content: center;
list-style: none;
height:62px;
padding: 0;
margin: 0;
border-radius: 10px;
overflow: hidden;
  `;

export const LiItemStats  = styled.li`
 background-color: ${col => col.backgroundColor};
font-family: 'roboto';
display: flex;
flex-direction:column;
text-align: center;
padding-top: 10px;
box-shadow: 0px 0px 1px rgba(46, 47, 66, 0.2), 0px 1px 1px rgba(46, 47, 66, 0.2), 0px 1px 6px rgba(46, 47, 66, 0.2);
width: calc((100% - 20px)/4);

`;

export const LabelStats = styled.span`
font-weight: 500;
font-size: 14px;
line-height: 1.5;
letter-spacing: 0.02em;
color: #003;
text-align: center; 

`;
export const PercentageStats = styled.span`
font-weight: 600;
font-size: 18px;
line-height: 1.5;
letter-spacing: 0.02em;
color: #003;
text-align: center; 

`;
export const TitleStats = styled.h2`
font-family: 'roboto';
margin-bottom: 10px;
font-size: 22px;
line-height: 1.5;
letter-spacing: 0.06em;
`;