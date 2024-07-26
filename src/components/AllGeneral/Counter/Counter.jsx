import React, { useState, useEffect } from 'react';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Установка начальной темы на основе сохраненной темы в localStorage или предпочтениях пользователя
    setIsDarkMode(storedTheme === 'dark' || (!storedTheme && prefersDarkMode));
  }, []);

  const toggleDarkMode = () => {
    // Изменение темы
    const newTheme = isDarkMode ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <label className="switch">
      <input
        className="switch__checkbox"
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <div className="switch__slider"></div>
    </label>
  );
};

export default DarkMode;
