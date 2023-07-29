import { forwardRef } from "react";
import foto from "../../images/profile.jpeg";

const AboutMe = forwardRef((props, ref) => {
  return (
    <section className="about" id="student" ref={ref}>
      <h2 className="about__header text_subtitle underline-pb25">Студент</h2>
      <div className="about__info">
        <div className="about__wrapper">
          <h3 className="about__info-title text_title">Денис</h3>
          <p className="about__info-subtitle">Web-разработчик, 33 года</p>
          <p className="about__info-description text">
            Меня зовут Денис. Я web-разработчик. Занимаюсь разработкой и поддержкой сайтов. Верстку делаю по методологии БЭМ адаптивно под мобильные устройства.
            Примеры моих работ можно посмотреть на Github по ссылке ниже.
          </p>
          <ul className="about__links text">
            <li>
              <a href="https://github.com/frontendz7" className="link" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className="about__info-image" src={foto} alt="Фотография студента" />
      </div>
    </section>
  );
});

export default AboutMe;
