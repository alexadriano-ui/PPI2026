import "./header.css";

// props - propriedades de um componente
function Header({ title, subtitle }) {
  return (
    <header>
      <div className="header-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
}

export default Header;
