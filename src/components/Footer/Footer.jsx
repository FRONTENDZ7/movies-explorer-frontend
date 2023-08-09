function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__row">
        <p className="footer__text">&#169; 2023</p>
        <nav>
          <ul className="footer__list">
            <li>
              <a
                href="https://practicum.yandex.ru/"
                className="footer__item-link"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                href="https://github.com/frontendz7"
                className="footer__item-link"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
