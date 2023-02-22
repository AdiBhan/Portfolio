const Snow = (props) => {
  return (
    <Snow
      style={{
        position: "absolute",
        zIndex: "-100",
        width: "100%",
        height: "100%",
        color: "red",
      }}
      color={"red"}
      numFlakes={500}
      snowflakeSize={10}
      animationInterval={20}
      animationDuration={2500}
    />
  );
};

export default Snow;
