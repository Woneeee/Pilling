import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supDetail } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { useScrollTop } from "../../lib/useScrollTop";

const STitle = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #55555540;
`;

const TitleWrap = styled.div`
  max-width: 1260px;
  width: 100%;
  /* background-color: pink; */
  padding: 10px 0 40px 0;
  h5 {
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
  }
  h2 {
    margin-top: 60px;
    font-size: 35px;
    font-weight: 500;
    letter-spacing: -1px;
  }
  @media screen and (max-width: 510px) {
    padding: 10px 15px 40px 15px;
    h5 {
      font-size: 18px;
      font-weight: 500;
    }
    h2 {
      font-size: 33px;
    }
  }
`;

const SupContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const SupWrap = styled.div`
  max-width: 1260px;
  width: 100%;
  h2 {
    font-size: 25px;
  }
  @media screen and (max-width: 510px) {
    padding: 0 15px;
    h2 {
      font-size: 23px;
    }
  }
`;

const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 25px;
  row-gap: 30px;
  margin-top: 20px;
  @media screen and (max-width: 510px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
  }
`;

const Con = styled.div`
  width: 100%;
`;

const Img = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid #888888;
  border-radius: 10px;

  @media screen and (max-width: 510px) {
    height: 200px;
  }
`;

const Text = styled.div`
  p {
    opacity: 0.7;
    margin-top: 10px;
  }
  h2 {
    font-size: 18px;
    font-weight: 500;
    margin-top: 8px;
  }
  @media screen and (max-width: 510px) {
    p {
      font-size: 15px;
    }
    h2 {
      font-size: 17px;
      line-height: 22px;
    }
  }
`;

export const NutDetail = () => {
  useScrollTop();

  const [supDetailData, setSupDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [supNameData, setSupNameData] = useState();

  useEffect(() => {
    (async () => {
      const {
        body: { items: detail1 },
      } = await supDetail(1);
      const {
        body: { items: detail2 },
      } = await supDetail(2);
      const {
        body: { items: detail3 },
      } = await supDetail(3);
      const supDetailResult = detail1.concat(detail2, detail3);

      setSupDetailData(supDetailResult);
      setIsLoading(false);

      const supName = supDetailResult.filter((res) =>
        res.item.MAIN_FNCTN.includes(id)
      );
      setSupNameData(supName);
    })();
  }, []);

  // console.log(supDetailData);
  // console.log(supNameData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <STitle>
            <TitleWrap>
              <h5>성분 정보</h5>

              <h2>{id}</h2>
            </TitleWrap>
          </STitle>

          <SupContainer>
            <SupWrap>
              <h2>{`"${id}" 성분이 들어간 제품`}</h2>

              <Product>
                {supNameData.map((res) => (
                  <Link
                    key={res.item.PRDUCT}
                    to={`/supdetail/${res.item.PRDUCT}`}
                  >
                    <Con>
                      <Img>
                        <img src="" alt="" />
                      </Img>

                      <Text>
                        <p>{res.item.ENTRPS}</p>
                        <h2>{res.item.PRDUCT}</h2>
                      </Text>
                    </Con>
                  </Link>
                ))}
              </Product>
            </SupWrap>
          </SupContainer>
        </>
      )}
    </>
  );
};
