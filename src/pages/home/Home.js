import { useEffect, useState } from "react";
import { supDetail } from "../../api";
import { Loading } from "../../components/Loading";
import { MainBanner } from "./components/MainBanner";
import styled from "styled-components";
import { Conditions } from "./components/Conditions";
import { useScrollTop } from "../../lib/useScrollTop";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Home = () => {
  useScrollTop();

  const [supDetailData, setSupDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const {
        body: { items: supDetailResult },
      } = await supDetail();

      setSupDetailData(supDetailResult);
      setIsLoading(false);
    })();
  }, []);

  // console.log(supDetailData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Container>
            <MainBanner />

            <Conditions />
          </Container>
        </>
      )}
    </>
  );
};
