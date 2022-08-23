import { useEffect } from "react";
import styled from "styled-components";
import DataList from "../components/DataList";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/covidSlice";

const Container = styled.main``;
const Home = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.covidData);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (loading) return <h3>Loading...</h3>;

  return (
    <Container>
      <Header data={data} />
      <DataList data={data} />
    </Container>
  );
};

export default Home;
