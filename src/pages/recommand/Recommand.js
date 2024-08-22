import { useEffect, useState } from "react";
import { nutDetail, supDetail, supList } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { point } from "../../GlobalStyled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./css/swiperStyle.css";

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
    margin-top: 10px;
  }
  h2 {
    margin-top: 30px;
    font-size: 30px;
    font-weight: 500;
  }
  @media screen and (max-width: 510px) {
    padding: 0 15px;
    h5 {
      font-size: 18px;
    }
    h2 {
      font-size: 28px;
    }
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
  @media screen and (max-width: 510px) {
    padding: 0 15px;
  }
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
  }
`;

const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  height: 350px;
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

export const Recommand = () => {
  const [supDetailData, setSupDetailData] = useState();
  const [nutData, setNutData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [nutNameData, setNutNameData] = useState();
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

      const {
        I2710: { row: nutResult },
      } = await nutDetail();

      setSupDetailData(supDetailResult);
      setNutData(nutResult);
      setIsLoading(false);

      const nut = nutResult.filter(
        (res) => res.PRIMARY_FNCLTY.includes(id) === true
      );
      setNutNameData(nut);

      const supName = supDetailResult.filter(
        (res) => res.item.MAIN_FNCTN.includes(id) === true
      );
      setSupNameData(supName);
    })();
  }, []);

  // console.log(supDetailData);
  // console.log(nutData);

  // console.log(
  //   supDetailData?.filter((res) => res.item.MAIN_FNCTN.includes("면역력"))
  // );
  // console.log(nutData?.filter((res) => res?.PRIMARY_FNCLTY?.includes("면역")));

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
              <Swiper slidesPerView={2.2}>
                {nutNameData.map((res) => (
                  <Link to={`/nutdetail/${res.PRDCT_NM}`} key={res.PRDCT_NM}>
                    <SwiperSlide>{res.PRDCT_NM}</SwiperSlide>
                  </Link>
                ))}
              </Swiper>
            </NutWrap>
          </NutContainer>

          <SupContainer>
            <SupWrap>
              <h2>제품</h2>

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
