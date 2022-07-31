import styled from "styled-components"

export const SectionMySkills = styled.section`
  background-color: #DDDCDC;
  padding-top: 10em;
  padding-bottom: 2em;

`;

export const H2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 41px;
  text-align: center;
`;

export const H3 = styled.h3`
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  margin-top: 0.5rem;
`;


export const SkillsProgressBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  justify-content: space-between;
  margin: 3em auto 0 auto;
  
  p{
    margin: 5px;
  }
  .ProgressBar{
    margin: 10px;
  }
`;