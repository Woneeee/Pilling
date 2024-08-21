import { useEffect, useState } from "react";
import { nutDetail, supDetail, supList } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { point } from "../../GlobalStyled";

const STitle = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleWrap = styled.div`
  max-width: 1260px;
  width: 100%;
  h5 {
    font-size: 20px;
    text-align: center;
  }
  h2 {
    margin-top: 30px;
    font-size: 30px;
    font-weight: 500;
  }
`;

const NutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #88888850;
`;

const NutWrap = styled.div`
  max-width: 1260px;
  width: 100%;
`;

const ListContainer = styled.ul`
  width: 100%;
  height: 100%;
  padding: 35px 0 25px 0;
  display: flex;
  li {
    background-color: ${point.smooth};
    border-radius: 30px;
    padding: 12px 17px;
    font-size: 16px;
    font-weight: 500;
    margin-right: 15px;
  }
`;

export const Recommand = () => {
  const [supListData, setSupListData] = useState();
  const [supDetailData, setSupDetailData] = useState();
  const [nutData, setNutData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [nutNameData, setNutNameData] = useState();

  useEffect(() => {
    (async () => {
      const {
        body: { items: supListResult },
      } = await supList();

      const {
        body: { items: supDetailResult },
      } = await supDetail();

      const {
        I2710: { row: nutResult },
      } = await nutDetail();

      setSupListData(supListResult);
      setSupDetailData(supDetailResult);
      setNutData(nutResult);
      setIsLoading(false);

      const nut = nutResult.filter((res) => res.PRIMARY_FNCLTY.includes(id));
      setNutNameData(nut);
    })();
  }, []);

  console.log(supListData);
  // console.log(supDetailData);
  // console.log(nutData);
  // console.log(
  //   supDetailData?.filter((res) => res.item.MAIN_FNCTN.includes("면역력"))
  // );
  // console.log(nutData?.filter((res) => res?.PRIMARY_FNCLTY?.includes("면역")));
  // console.log(
  //   supDetailData?.filter((res) => res?.item.PRDUCT?.includes("알로에"))
  // );
  // console.log(nutNameData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <STitle>
            <TitleWrap>
              <h5>기능별 영양성분 및 제품</h5>

              <h2>{id}에 좋은</h2>
            </TitleWrap>
          </STitle>

          <NutContainer>
            <NutWrap>
              <ListContainer>
                {nutNameData.map((res) => (
                  <Link to={`/nutdetail/${res.PRDCT_NM}`} key={res.PRDCT_NM}>
                    <li>{res.PRDCT_NM}</li>
                  </Link>
                ))}
              </ListContainer>
            </NutWrap>
          </NutContainer>
        </>
      )}
    </>
  );
};
