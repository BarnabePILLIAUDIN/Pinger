import Listpings from "@/components/Listpings";
import Navbar from "@/components/Navbar";
import Page from "@/components/Page";

const history = () => {

  return (
    <Page title="Pings history">
      <Navbar></Navbar>
      <Listpings limit={false}></Listpings>
    </Page>
  );
};

export default history;