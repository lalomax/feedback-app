function Header({ text, bgColor, textColor}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "FeedBack UI App",
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6195'
};
export default Header;
