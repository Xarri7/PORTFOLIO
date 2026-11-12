const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const year = document.querySelector('#current-year');
const contactForm = document.querySelector('#contact-form');
const contactMessage = document.querySelector('#contact-message');
const formNote = document.querySelector('#form-note');
const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const taskStatus = document.querySelector('#task-status');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuButton && navigation) {
  const menuLabel = menuButton.querySelector('.sr-only');

  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    if (menuLabel) {
      menuLabel.textContent = 'Открыть меню';
    }
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
    if (menuLabel) {
      menuLabel.textContent = isOpen ? 'Открыть меню' : 'Закрыть меню';
    }
  });

  navigation.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a')) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (event.target instanceof Node && !navigation.contains(event.target) && !menuButton.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
      closeMenu();
    }
  });
}

if (contactForm instanceof HTMLFormElement && contactMessage instanceof HTMLTextAreaElement && formNote) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = contactMessage.value.trim();

    if (!message) {
      contactMessage.focus();
      return;
    }

    const telegramUrl = `https://t.me/qodesi?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank', 'noopener,noreferrer');

    const fallbackLink = document.createElement('a');
    fallbackLink.href = telegramUrl;
    fallbackLink.target = '_blank';
    fallbackLink.rel = 'noopener noreferrer';
    fallbackLink.textContent = 'открыть Telegram вручную';
    formNote.replaceChildren('Если Telegram не открылся, ', fallbackLink, '.');
  });
}

if (
  taskForm instanceof HTMLFormElement &&
  taskInput instanceof HTMLInputElement &&
  taskList instanceof HTMLUListElement &&
  taskStatus
) {
  const storageKey = 'portfolio-tasks';
  let tasks = [];

  const renderTasks = () => {
    taskList.replaceChildren();

    if (tasks.length === 0) {
      const emptyMessage = document.createElement('li');
      emptyMessage.className = 'task-empty';
      emptyMessage.textContent = 'Пока нет задач — добавьте первую.';
      taskList.append(emptyMessage);
      return;
    }

    for (const task of tasks) {
      const item = document.createElement('li');
      item.className = 'task-item';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.setAttribute('aria-label', `Выполнено: ${task.text}`);
      checkbox.addEventListener('change', () => {
        task.completed = checkbox.checked;
        saveTasks();
        renderTasks();
      });

      const text = document.createElement('span');
      text.className = `task-text${task.completed ? ' is-complete' : ''}`;
      text.textContent = task.text;

      const removeButton = document.createElement('button');
      removeButton.className = 'task-delete';
      removeButton.type = 'button';
      removeButton.setAttribute('aria-label', `Удалить: ${task.text}`);
      removeButton.textContent = '×';
      removeButton.addEventListener('click', () => {
        tasks = tasks.filter((savedTask) => savedTask.id !== task.id);
        saveTasks();
        renderTasks();
      });

      item.append(checkbox, text, removeButton);
      taskList.append(item);
    }
  };

  const saveTasks = () => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(tasks));
      taskStatus.textContent = 'Список сохранён в этом браузере.';
    } catch (error) {
      console.error('Не удалось сохранить список задач.', error);
      taskStatus.textContent = 'Не удалось сохранить задачи. Проверьте настройки хранения браузера.';
    }
  };

  try {
    const savedTasks = localStorage.getItem(storageKey);
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      if (!Array.isArray(parsedTasks)) {
        throw new TypeError('Сохранённый список задач имеет неверный формат.');
      }

      tasks = parsedTasks.filter((task) =>
        task &&
        typeof task.id === 'string' &&
        typeof task.text === 'string' &&
        typeof task.completed === 'boolean'
      );
    }
  } catch (error) {
    console.error('Не удалось загрузить список задач.', error);
    taskStatus.textContent = 'Не удалось загрузить сохранённые задачи из браузера.';
  }

  renderTasks();

  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = taskInput.value.trim();
    if (!text) {
      taskInput.focus();
      return;
    }

    tasks.push({
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      text,
      completed: false,
    });
    saveTasks();
    renderTasks();
    taskForm.reset();
    taskInput.focus();
  });
}
