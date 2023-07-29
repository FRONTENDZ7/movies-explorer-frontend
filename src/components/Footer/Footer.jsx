function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title text color_text underline-pb20">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__row">
        <p className="footer__text text color_text">&#169; 2022</p>
        <nav>
          <ul className="footer__list text">
            <li>
              <a
                href="https://practicum.yandex.ru/"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                href="https://github.com/frontendz7"
                className="link"
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
