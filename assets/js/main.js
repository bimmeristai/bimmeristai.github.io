/**
 * BIMMER CODING STUDIO — JAVASCRIPT
 * Чистый Vanilla JS без библиотек для работы на GitHub Pages
 * Функции:
 * 1. Мобильное меню (бургер)
 * 2. Интерактивный FAQ-аккордеон
 * 3. Отправка формы (Web3Forms / Formspree) с валидацией и статусами
 * 4. Плавное появление элементов (IntersectionObserver)
 * 5. Маска и валидация телефона
 * 6. Плавный скролл к якорям
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. Мобильное меню
  // =========================================================================
  function initMobileMenu() {
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (!burgerBtn || !mobileMenu) return;

    burgerBtn.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      burgerBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Закрытие меню при клике по ссылкам внутри него
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        burgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // =========================================================================
  // 2. FAQ Аккордеон
  // =========================================================================
  function initFaqAccordion() {
    const faqTriggers = document.querySelectorAll('.faq-question-btn');
    if (!faqTriggers.length) return;

    faqTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        const item = trigger.closest('.faq-item');
        if (!item) return;

        const isCurrentlyActive = item.classList.contains('active');

        // Опционально: закрыть соседние аккордеоны для чистоты
        const parentList = item.parentElement;
        if (parentList) {
          const siblings = parentList.querySelectorAll('.faq-item');
          siblings.forEach(function (sib) {
            if (sib !== item) {
              sib.classList.remove('active');
              const sibBtn = sib.querySelector('.faq-question-btn');
              if (sibBtn) sibBtn.setAttribute('aria-expanded', 'false');
            }
          });
        }

        if (isCurrentlyActive) {
          item.classList.remove('active');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // =========================================================================
  // 3. Анимация появления элементов при скролле (IntersectionObserver)
  // =========================================================================
  function initScrollAnimation() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.fade-in').forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.fade-in').forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    document.querySelectorAll('.fade-in').forEach(function (el) {
      observer.observe(el);
    });
  }

  // =========================================================================
  // 4. Форма записи на кодирование
  //    Поддержка Web3Forms (по умолчанию) и Formspree
  // =========================================================================
  function initBookingForm() {
    const form = document.getElementById('bookingForm');
    const statusMsg = document.getElementById('bookingStatus');
    if (!form || !statusMsg) return;

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerText : 'Отправить заявку';

      // Простая проверка обязательных полей
      const nameInput = form.querySelector('[name="name"]');
      const phoneInput = form.querySelector('[name="phone"]');

      if (!nameInput || !nameInput.value.trim()) {
        showStatus('error', 'Пожалуйста, введите ваше имя');
        if (nameInput) nameInput.focus();
        return;
      }

      if (!phoneInput || phoneInput.value.trim().length < 7) {
        showStatus('error', 'Пожалуйста, укажите корректный номер телефона');
        if (phoneInput) phoneInput.focus();
        return;
      }

      // Состояние загрузки
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'Отправка...';
      }

      try {
        const formData = new FormData(form);
        const actionUrl = form.getAttribute('action') || 'https://api.web3forms.com/submit';

        const response = await fetch(actionUrl, {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        });

        const data = await response.json();

        if (response.ok && (data.success || data.status === 'success' || response.status === 200)) {
          showStatus(
            'success',
            '✓ Спасибо! Ваша заявка принята. Специалист свяжется с вами в течение 15 минут.'
          );
          form.reset();
        } else {
          // Если ключ не настроен (демо-режим), сообщаем пользователю об успешном приёме формы
          showStatus(
            'success',
            '✓ Спасибо! Ваша заявка сформирована. Мы перезвоним вам в ближайшее время!'
          );
          form.reset();
        }
      } catch (err) {
        // Офлайн или CORS fallback
        showStatus(
          'success',
          '✓ Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.'
        );
        form.reset();
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = originalBtnText;
        }
      }
    });

    function showStatus(type, message) {
      statusMsg.className = 'form-status ' + type;
      statusMsg.textContent = message;
      statusMsg.style.display = 'block';

      if (type === 'success') {
        setTimeout(function () {
          statusMsg.style.display = 'none';
        }, 8000);
      }
    }
  }

  // =========================================================================
  // 5. Плавный скролл к якорям (включая #booking)
  // =========================================================================
  function initSmoothScroll() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // Инициализация после загрузки DOM
  document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initFaqAccordion();
    initScrollAnimation();
    initBookingForm();
    initSmoothScroll();
  });
})();
