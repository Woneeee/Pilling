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

// ---------------------------------------------------------------------

const fetch = require("node-fetch");
const serviceKey =
  "LNn5PaYmx5QeK6lz%2FO%2BtXumj4%2B9%2FzuMa4SWLHaZ6CRqBZm1G2Y%2BCREbroaN%2BDjW1UKysFG1RXkpajRrQh1qR1g%3D%3D";
const baseURL = "https://apis.data.go.kr/1471000/HtfsInfoService03/";

export const supList = () =>
  fetch(
    `${baseURL}getHtfsList01?pageNo=1&numOfRows=100&ServiceKey=${serviceKey}&type=json`
  ).then((res) => res.json());

export const supDetail = () =>
  fetch(
    `${baseURL}getHtfsItem01?pageNo=1&numOfRows=100&ServiceKey=${serviceKey}&type=json`
  ).then((res) => res.json());

// export const nutDetail = () =>
//   fetch(
//     "http://openapi.foodsafetykorea.go.kr/api/c116e08d12bd44aca000/I2710/json/1/100"
//   ).then((res) => res.json());
