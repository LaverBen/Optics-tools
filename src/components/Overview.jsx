function Overview({ list }) {
  return (
    <div
      className="overview"
      style={{
        color: "rgba(0,0,0,1)",
        left: "2rem",
        width: "40%",
      }}
    >
      <h2>Overview</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Overview;
