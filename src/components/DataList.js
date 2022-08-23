import styled from "styled-components";
import Data from "./Data";

const Container = styled.main`
  margin-top: 4rem;
  width: 100%;
`;
const Wrapper = styled.article`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 1rem 6rem;
`;
const Title = styled.h2`
  margin-left: 5%;
`;

const DataList = ({ data }) => {
  return (
    <Container>
      <Title> State Results </Title>
      <Wrapper>
        {data.data.states.map((item) => {
          return <Data key={data._id} item={item} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default DataList;
