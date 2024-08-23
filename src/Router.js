import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PageNotFound } from "./pages/PageNotFound";
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/login/Signup";
import { Recommand } from "./pages/recommand/Recommand";
import { NutDetail } from "./pages/detail/NutDetail";
import { SupDetail } from "./pages/detail/SupDetail";
import { SearchFunction } from "././pages/search/SearchFunction";
import { SearchProduct } from "././pages/search/SearchProduct";
import { ScrollTopBtn } from "./components/ScrollTopBtn";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.recommand} element={<Recommand />} />
        <Route path={routes.nutdetail} element={<NutDetail />} />
        <Route path={routes.supdetail} element={<SupDetail />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signup} element={<Signup />} />
        <Route path={routes.searchfunction} element={<SearchFunction />} />
        <Route path={routes.searchproduct} element={<SearchProduct />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <ScrollTopBtn />
      <Footer />
    </HashRouter>
  );
};

export default Router;
