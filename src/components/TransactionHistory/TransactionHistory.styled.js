import styled from 'styled-components';

export const TableTransaction = styled.table`
width: 600px;
margin: 0 auto;
text-align: center;
color: #003;
margin-bottom: 100px;
margin-top: 100px;
`;
export const TheadTable = styled.thead`
background-color: #0cc;
color: #fff;
font-family: 'roboto';
font-weight: 500;
font-size: 18px;
line-height: 1.5;
letter-spacing: 0.02em;
`

export const LineTable = styled.th`
padding: 5px;
border: 1px solid #E8F8F5;
`;
export const CellTable = styled.td`
padding: 5px;
border: 1px solid #E8F8F5;
font-family: 'roboto';
font-weight: 500;
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.02em;
`;

export const TrBody = styled.tr`
 &:nth-child(even) {
    background-color: #EBEDEF
  };
 &:nth-child(odd) {
    background-color: #fff
  }
`