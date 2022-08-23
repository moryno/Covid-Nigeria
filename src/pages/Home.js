import { useEffect, useState } from "react";
import styled from "styled-components";
import DataList from "../components/DataList";
import Header from "../components/Header";
import covidData from "../apis";
const Container = styled.main``;
const Home = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await covidData.get("/");
      setDataList(data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Header data={dataList} />
      <DataList data={dataList} />
    </Container>
  );
};

export default Home;
