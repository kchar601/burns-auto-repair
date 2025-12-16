function TitleBanner({ header, children }) {
  return (
    <div>
      <h1>{header}</h1>
      <p>{children}</p>
    </div>
  );
}

export default TitleBanner;
