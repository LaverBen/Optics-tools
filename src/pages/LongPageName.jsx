import Header from "../components/Header";

function LongPageName() {
  return (
    <div>
      <Header title="Long page name to test if long page names wrap" />
      <div style={{ padding: "2rem" }}>
        <p>This page is used to ensure long navigation labels wrap correctly.</p>
      </div>
    </div>
  );
}

export default LongPageName;
