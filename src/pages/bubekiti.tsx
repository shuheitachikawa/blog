import { NextPage } from "next";
import { Header } from "components/Header";
import { Aside } from "components/Aside";

const Bubekiti: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-10 flex justify-center">
        <Aside />
      </div>
    </div>
  );
};

export default Bubekiti;
