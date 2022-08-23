import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HeaderContainer = styled.section`
  width: 90%;
`;

const TopHeaderContainer = styled.article`
  display: flex;
  justify-content: space-between;
`;

const HeaderInfo = styled.article`
  display: flex;
  flex-direction: column;
`;

const SubTitile = styled.h3`
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const CovidData = styled.span`
  align-self: flex-end;
  margin-bottom: 0.5rem;
`;

const Title = styled.h1`
  padding: 2.5rem;
`;

const Header = ({ data }) => {
  return (
    <Container>
      <Title>Nigeria Covid Data</Title>
      <HeaderContainer>
        <TopHeaderContainer>
          <HeaderInfo>
            <SubTitile>Sample Tested</SubTitile>
            <CovidData>{data.data.totalSamplesTested}</CovidData>
          </HeaderInfo>
          <HeaderInfo>
            <SubTitile>Confirmed Cases</SubTitile>
            <CovidData>{data.data.totalConfirmedCases}</CovidData>
          </HeaderInfo>
          <HeaderInfo>
            <SubTitile>Active Cases</SubTitile>
            <CovidData>{data.data.totalActiveCases}</CovidData>
          </HeaderInfo>
          <HeaderInfo>
            <SubTitile>Discharged</SubTitile>
            <CovidData>{data.data.discharged}</CovidData>
          </HeaderInfo>
          <HeaderInfo>
            <SubTitile>Death</SubTitile>
            <CovidData>{data.data.death}</CovidData>
          </HeaderInfo>
        </TopHeaderContainer>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
