import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://frontendz7.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__text">Статичный сайт</p>
            <img className="portfolio__img" src={arrow} alt="Иконка - ссылочная стрелка" />
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://frontendz7.github.io/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__text">Адаптивный сайт</p>
            <img className="portfolio__img" src={arrow} alt="Иконка - ссылочная стрелка" />
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://frontendz7.github.io/mesto-react/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__text">Одностраничное приложение</p>
            <img className="portfolio__img" src={arrow} alt="Иконка - ссылочная стрелка" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
