import type { LayoutProp } from "../../interfaces/interfaces";

const Layout = (props: LayoutProp) => {
  return (
    <div>
      <main style={{ width: "100%", maxWidth: "70rem", margin: "0.5rem auto" }}>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
