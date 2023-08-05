import {lazy, Suspense} from "react";
import {usePageContext} from "./context/context";
import Loading from "./components/Loading/Loading";

const About = lazy(() => import("./components/About/About"));
const Header = lazy(() => import("./components/Header/Header"));
const Hero = lazy(() => import("./components/Hero/Hero"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  const {isLoading} = usePageContext();

  return (
    <div>
      <Suspense>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </Suspense>
    </div>
  );
}

export default App;
