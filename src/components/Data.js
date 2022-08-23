import styled from "styled-components";

const Container = styled.main`
  width: 30%;
  background-color: #fcf5f5;
  padding: 1rem 0.5rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  margin-bottom: 1.5rem;

  box-sizing: border-box;
`;

const DataContainer = styled.article`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
`;

const StateName = styled.span`
  font-weight: 600;
`;

const CovidData = styled.span`
  font-weight: 500;
`;

const Data = ({ item }) => {
  return (
    <Container>
      <DataContainer>
        <SubTitle>State:</SubTitle>
        <StateName>{item.state}</StateName>
      </DataContainer>
      <DataContainer>
        <SubTitle>Confirmed Cases:</SubTitle>
        <CovidData>{item.confirmedCases}</CovidData>
      </DataContainer>
      <DataContainer>
        <SubTitle>Cases on Admission:</SubTitle>
        <CovidData>{item.casesOnAdmission}</CovidData>
      </DataContainer>
      <DataContainer>
        <SubTitle>Discharged:</SubTitle>
        <CovidData>{item.discharged}</CovidData>
      </DataContainer>
      <DataContainer>
        <SubTitle>Death:</SubTitle>
        <CovidData>{item.death}</CovidData>
      </DataContainer>
    </Container>
  );
};

export default Data;
