import { NextPage } from "next";
import { Header } from "src/components/Header";
import { Aside } from "src/components/Aside";

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
