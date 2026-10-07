// Данные портфолио. Редактируйте этот файл — галерея соберётся сама.
// image: путь к картинке (например "assets/p1.jpg"); если не указан — рисуется градиент.
window.PROJECTS = [
  {
    title: "Интернет-магазин",
    category: "Веб-приложения",
    description: "Каталог, корзина и оплата. Оптимизация загрузки и адаптивная вёрстка.",
    tags: ["React", "Node.js", "PostgreSQL"],
    gradient: ["#6c8cff", "#b06cff"],
    links: { demo: "#", code: "#" }
  },
  {
    title: "Лендинг стартапа",
    category: "Сайты",
    description: "Одностраничный сайт с анимациями и высокой оценкой Lighthouse.",
    tags: ["HTML", "CSS", "JS"],
    gradient: ["#ff8a6c", "#ffb86c"],
    links: { demo: "#" }
  },
  {
    title: "Панель аналитики",
    category: "Веб-приложения",
    description: "Дашборд с графиками в реальном времени и гибкими фильтрами.",
    tags: ["Vue", "D3", "WebSocket"],
    gradient: ["#3ecf8e", "#2aa9d6"],
    links: { code: "#" }
  },
  {
    title: "Мобильное приложение",
    category: "Мобайл",
    description: "Кроссплатформенное приложение для трекинга привычек.",
    tags: ["React Native", "TypeScript"],
    gradient: ["#f06292", "#7e57c2"],
    links: { demo: "#" }
  },
  {
    title: "Блог на статике",
    category: "Сайты",
    description: "Статический генератор, Markdown-контент, RSS и тёмная тема.",
    tags: ["Astro", "Markdown"],
    gradient: ["#fdd835", "#ff7043"],
    links: { demo: "#", code: "#" }
  },
  {
    title: "UI-библиотека",
    category: "Open Source",
    description: "Набор доступных компонентов с документацией и тестами.",
    tags: ["TypeScript", "Storybook"],
    gradient: ["#26c6da", "#5c6bc0"],
    links: { code: "#" }
  }
];

window.SKILLS = ["HTML / CSS", "JavaScript / TypeScript", "React / Vue", "Node.js", "Git", "Figma"];
