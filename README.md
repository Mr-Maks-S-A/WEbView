# Портфолио (WEbView)

Статический сайт-портфолио без сборки и зависимостей: главная (hero), галерея проектов с фильтром и модальным окном, «Обо мне», контакты, светлая/тёмная тема.

## Запуск
Откройте `index.html` или поднимите сервер: `python3 -m http.server 8000`.

## Как редактировать
- Проекты и навыки — `js/projects.js` (поле `image` для своих картинок в `assets/`).
- Тексты, имя, контакты — `index.html` (ищите «Имя Фамилия», `you@example.com`).
- Цвета и вёрстка — `css/style.css` (переменные в `:root`).

## Идеи по улучшению
1. Реальные скриншоты проектов (WebP/AVIF, `loading="lazy"`, `srcset`).
2. Деплой на GitHub Pages / Netlify / Cloudflare Pages + свой домен.
3. SEO: Open Graph/Twitter-теги, `sitemap.xml`, `robots.txt`, JSON-LD `Person`.
4. Отдельные страницы кейсов (проблема → решение → результат) вместо только модалки.
5. Рабочая форма контактов (Formspree / Netlify Forms).
6. Мультиязычность (RU/EN), блог на Markdown (Astro / Eleventy).
7. Миграция на Astro или Next.js при росте контента; тесты Lighthouse в CI.
8. Анимации появления через IntersectionObserver, навигация по галерее с клавиатуры (← →).
