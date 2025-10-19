import type { LayoutProp } from "../../interfaces/interfaces";
import MainNavigation from "./main-nav/MainNavigation";

const Layout = (props: LayoutProp) => {
  return (
    <div>
      <MainNavigation />
      <main style={{ width: "100%", maxWidth: "76rem", margin: "0.5rem auto" }}>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
