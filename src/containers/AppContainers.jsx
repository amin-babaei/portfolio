import { useContext } from "react";
import Leftpart from "@/containers/left/Leftpart";
import RightPart from "@/containers/right/Rightpart";
import { TabContext } from "@/context/TabContext";
import Page from "@/components/Page";
import Home from "@/pages/home/Home";
import About from "@/pages/about/About";
import Sample from "@/pages/sample/Sample";
import Contact from "@/pages/contact/Contact";

const AppContainers = () => {
  const {pageNumber} = useContext(TabContext)
  return (
    <section>
      <RightPart />
      <Leftpart>
        <Page pageNumber={pageNumber} index={1}>
          <Home/>
        </Page>
        <Page pageNumber={pageNumber} index={2}>
          <About/>
        </Page>
        <Page pageNumber={pageNumber} index={3}>
          <Sample/>
        </Page>
        <Page pageNumber={pageNumber} index={4}>
          <Contact/>
        </Page>
      </Leftpart>
    </section>
  );
}

export default AppContainers;