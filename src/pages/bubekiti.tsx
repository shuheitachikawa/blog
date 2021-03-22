import { NextPage } from "next";
import { Header } from "src/components/header";
import { Aside } from "src/components/aside";

const Bubekiti: NextPage = () => {
  return (
    <div className="bg-main min-h-screen">
      <Header />
      <div className="pt-10 flex justify-center">
        <Aside />
      </div>
    </div>
  );
};

export default Bubekiti;
