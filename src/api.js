import axios from "axios";

const KAKAO_KEY = "57feb12cfa3500bca55c159957bb05ac";
const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: "KakaoAK " + KAKAO_KEY,
  },
});

export const getKakaoImg = (params) => {
  return Kakao.get("/v2/search/image", { params }).then((res) => res);
};
