import Header from "../components/header";
function HeaderOnly({ children }) {
  return (
    <>
      <Header />
      <div>
        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default HeaderOnly;
