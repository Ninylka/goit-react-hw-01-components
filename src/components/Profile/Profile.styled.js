import styled from 'styled-components';

export  const Container = styled.div`
  width: 300px;
  padding-top: 50px;
  margin-left: auto ;
  margin-right:auto;
  margin-top: 100px;
  text-align: center;
  background-color: #fff; 
  border-radius: 10px;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.2), 0px 1px 6px rgba(46, 47, 66, 0.2);
  `;

export const DivDescription = styled.div`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
 `;
 
export const Foto = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
  box-shadow: 0px 0px 1px rgba(46, 47, 66, 0.2), 0px 1px 1px rgba(46, 47, 66, 0.2), 0px 1px 6px rgba(46, 47, 66, 0.2);
  `;
  
export  const Name = styled.p`
  font-family: 'roboto';
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: #003;
  text-align: center;
  margin-bottom: 16px;
 
  `;
export const Tag = styled.p`
  font-family: 'roboto';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: #003;
  text-align: center;
  margin-bottom: 16px;
 
  `;
export const Location = styled.p`
  font-family: 'roboto';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: #003;
  text-align: center;
  padding-bottom: 50px;
  `;

export const ListStates = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  height:62px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  `;

export const LiItemStates  = styled.li`
  font-family: 'roboto';
  display: flex;
  flex-direction:column;
  text-align: center;
  padding-top: 5px;
  box-shadow: 0px 0px 1px rgba(46, 47, 66, 0.2), 0px 1px 1px rgba(46, 47, 66, 0.2), 0px 1px 6px rgba(46, 47, 66, 0.2);
  width: calc((100% - 40px)/2);
  `;

export const  SpanLi = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: #003;
  text-align: center; 
  `;

export const SpanQuant = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: #003;
  text-align: center;
  `;
