import styled from "styled-components";

const Container = styled.main`
  width: 100vw;
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

const Header = () => {
  return (
    <Container>
      <Title>Nigeria Covid Data</Title>
      <HeaderContainer>
        <TopHeaderContainer>
          <HeaderInfo>
            <SubTitile>Sample Tested</SubTitile>
            <CovidData>8990099878</CovidData>
          </HeaderInfo>
          <HeaderInfo>
            <SubTitile>Confirmed Cases</SubTitile>
            <CovidData>288990</CovidData>
          </HeaderInfo>
          <HeaderInfo>
            <SubTitile>Active Cases</SubTitile>
            <CovidData>8990099878</CovidData>
          </HeaderInfo>
          <HeaderInfo>
            <SubTitile>Discharged</SubTitile>
            <CovidData>29u980</CovidData>
          </HeaderInfo>
          <HeaderInfo>
            <SubTitile>Death</SubTitile>
            <CovidData>399000</CovidData>
          </HeaderInfo>
        </TopHeaderContainer>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
