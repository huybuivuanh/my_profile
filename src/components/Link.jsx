import "../styles/Link.css";

function Link({ icon, alternative, url, text }) {
  return (
    <div className="link-container">
      <a target="_blank" href={url}>
        <img src={icon} alt={alternative} className="link-icon"></img>
      </a>
      <a className="link" target="_blank" href={url}>
        {text}
      </a>
    </div>
  );
}

export default Link;
