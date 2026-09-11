"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  MapPin,
  Menu,
  X,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Строительство дорог",
    text: "Устройство автомобильных дорог и автомагистралей — от подготовки основания до финишного покрытия.",
  },
  {
    number: "02",
    title: "Содержание инфраструктуры",
    text: "Комплекс работ для сохранения эксплуатационных характеристик дорожного полотна.",
  },
  {
    number: "03",
    title: "Дорожная разметка",
    text: "Нанесение горизонтальной разметки на региональных и муниципальных автомобильных дорогах.",
  },
  {
    number: "04",
    title: "Подготовка площадок",
    text: "Подготовительные и земляные работы перед началом основного строительного цикла.",
  },
];

const steps = ["Анализ объекта", "Подготовка", "Производство", "Контроль", "Сдача работ"];

const requisites =
  "ООО «СИБРОАД»\nИНН 5404050856\nКПП 222501001\nОГРН 1175476002888";

function Brand() {
  return (
    <span className="brand-inner">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span>СИБРОАД</span>
    </span>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  async function copyRequisites() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(requisites);
      } else {
        const field = document.createElement("textarea");
        field.value = requisites;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        document.execCommand("copy");
        field.remove();
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3500);
    } catch {
      const field = document.createElement("textarea");
      field.value = requisites;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const copiedWithFallback = document.execCommand("copy");
      field.remove();
      setCopied(copiedWithFallback);
      if (copiedWithFallback) window.setTimeout(() => setCopied(false), 3500);
    }
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Сиброад — на главную" onClick={closeMenu}>
          <Brand />
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#company">О компании</a>
          <a href="#services">Услуги</a>
          <a href="#approach">Подход</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <a className="header-action" href="#contacts">
          Связаться с нами
          <ArrowUpRight aria-hidden="true" size={17} />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label="Мобильная навигация">
          <a href="#company" onClick={closeMenu}>О компании <span>01</span></a>
          <a href="#services" onClick={closeMenu}>Услуги <span>02</span></a>
          <a href="#approach" onClick={closeMenu}>Подход <span>03</span></a>
          <a href="#contacts" onClick={closeMenu}>Контакты <span>04</span></a>
        </nav>
      </div>

      <section className="hero" id="top">
        <picture>
          <source media="(max-width: 700px)" srcSet={`${basePath}/images/sibroad-hero-mobile.webp`} />
          <img className="hero-image" src={`${basePath}/images/sibroad-hero-desktop.webp`} alt="Дорожно-строительная техника на новой автомобильной дороге" />
        </picture>
        <div className="hero-shade" />
        <div className="hero-lines" aria-hidden="true" />

        <div className="hero-content">
          <div className="hero-kicker hero-enter hero-enter-1">
            <span className="status-dot" />
            Дорожное строительство · Барнаул
          </div>

          <h1 className="hero-enter hero-enter-2">
            Строим дороги,<br />
            <span>соединяем<br />города</span>
          </h1>

          <div className="hero-lead hero-enter hero-enter-3">
            <p>Строительство автомобильных дорог и автомагистралей в Барнауле и Алтайском крае.</p>
            <div className="hero-actions">
              <a className="primary-action" href="#services">
                Наши направления <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a className="text-action" href="#company">О компании <ArrowDown aria-hidden="true" size={16} /></a>
            </div>
          </div>

          <div className="hero-stats hero-enter hero-enter-4" aria-label="Факты о компании">
            <article><strong>2017</strong><span>год основания</span></article>
            <article><strong>9 лет</strong><span>в дорожной отрасли</span></article>
            <article><strong>42.11</strong><span>основной ОКВЭД</span></article>
            <article><strong>4</strong><span>направления работ</span></article>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Направления компании">
        <div className="ticker-track">
          <span>Строительство</span><b>—</b><span>Содержание</span><b>—</b>
          <span>Разметка</span><b>—</b><span>Подготовка</span><b>—</b>
          <span aria-hidden="true">Строительство</span><b aria-hidden="true">—</b>
          <span aria-hidden="true">Содержание</span><b aria-hidden="true">—</b>
          <span aria-hidden="true">Разметка</span><b aria-hidden="true">—</b>
          <span aria-hidden="true">Подготовка</span><b aria-hidden="true">—</b>
        </div>
      </div>

      <section className="about section-dark" id="company">
        <div className="section-label reveal"><span>01</span><p>О компании</p></div>

        <div className="about-layout">
          <div className="about-heading reveal">
            <p className="mini-label">Надёжность начинается с основания</p>
            <h2>Дороги — это инфраструктура развития.</h2>
          </div>
          <div className="about-copy reveal">
            <p>ООО «Сиброад» работает в сфере дорожного строительства с 2017 года. Основное направление компании — строительство автомобильных дорог и автомагистралей.</p>
            <p>Организуем последовательный рабочий цикл: от подготовки объекта до выполнения и сдачи дорожных работ.</p>
          </div>
        </div>

        <div className="about-band reveal">
          <span>Сибирь</span>
          <p>Инженерный подход<br />к каждому этапу</p>
          <small>ООО «СИБРОАД»</small>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-label section-label-dark reveal"><span>02</span><p>Направления работ</p></div>

        <div className="section-heading reveal">
          <h2>Комплексный подход<br />к дорожным работам.</h2>
          <p>Сосредоточены на главном: подготовить объект, выполнить работы последовательно и обеспечить понятный результат.</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card reveal" key={service.number}>
              <div className="service-top"><span>{service.number}</span><ArrowUpRight aria-hidden="true" /></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="marking-feature">
        <div className="marking-copy reveal">
          <p className="mini-label">Точность в каждом метре</p>
          <h2>Разметка, которая задаёт движение.</h2>
          <p>Нанесение горизонтальной разметки — отдельное направление компании для региональных и муниципальных дорог.</p>
          <a href="#contacts">Обсудить задачу <ArrowRight aria-hidden="true" size={18} /></a>
        </div>
        <div className="marking-image-wrap reveal">
          <img src={`${basePath}/images/sibroad-marking.webp`} alt="Нанесение дорожной разметки на автомобильной дороге" loading="lazy" />
          <div className="image-caption"><span>03 / 04</span><p>Дорожная инфраструктура</p></div>
        </div>
      </section>

      <section className="approach section-dark" id="approach">
        <div className="section-label reveal"><span>03</span><p>Подход к работе</p></div>

        <div className="approach-heading reveal">
          <p className="mini-label">От задачи — к готовому объекту</p>
          <h2>Последовательность<br />на каждом этапе.</h2>
        </div>

        <div className="process reveal" aria-label="Этапы работ">
          {steps.map((step, index) => (
            <article key={step}>
              <span>0{index + 1}</span>
              <div className="process-line"><i /></div>
              <p>{step}</p>
            </article>
          ))}
        </div>

        <div className="geo-note reveal">
          <MapPin aria-hidden="true" />
          <p><strong>Барнаул, Алтайский край</strong><span>Юридический адрес компании</span></p>
          <span className="geo-code">22 / RUS</span>
        </div>
      </section>

      <section className="contacts" id="contacts">
        <div className="section-label section-label-dark reveal"><span>04</span><p>Контакты и реквизиты</p></div>

        <div className="contact-head reveal">
          <p>Готовы обсудить объект<br />и формат сотрудничества.</p>
          <h2>СИБРОАД</h2>
        </div>

        <div className="contact-grid reveal">
          <article>
            <span>Компания</span>
            <p>Общество с ограниченной ответственностью «СИБРОАД»</p>
          </article>
          <article>
            <span>Юридический адрес</span>
            <p>656056, Алтайский край, г. Барнаул,<br />пл. им. В. Н. Баварина, д. 2,<br />помещ./кабинет Н152/403-4</p>
          </article>
          <article className="requisites">
            <span>Реквизиты</span>
            <p>ИНН 5404050856</p><p>КПП 222501001</p><p>ОГРН 1175476002888</p>
            <button type="button" onClick={copyRequisites}>
              {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
              {copied ? "Скопировано" : "Скопировать"}
            </button>
          </article>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><Brand /></a>
        <p>© 2026 ООО «Сиброад»</p>
        <a href="#top">Наверх <ArrowUpRight size={15} aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
