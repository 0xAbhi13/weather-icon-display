/* Weather Icon Display — Static Data — Veda Technology Internship Day 27 */
(function () {
  'use strict';

  // ---- Static weather data (no APIs) ----
  const WEATHER_DATA = {
    sunny: {
      name: 'Sunny',
      emoji: '☀️',
      description: 'Clear skies with bright sunshine.',
      theme: 'sunny',
      chip: 'Sunny theme'
    },
    'partly-cloudy': {
      name: 'Partly Cloudy',
      emoji: '🌤️',
      description: 'A mix of sunshine and clouds.',
      theme: 'partly-cloudy',
      chip: 'Partly cloudy theme'
    },
    cloudy: {
      name: 'Cloudy',
      emoji: '☁️',
      description: 'Mostly cloudy skies.',
      theme: 'cloudy',
      chip: 'Cloudy theme'
    },
    rainy: {
      name: 'Rainy',
      emoji: '🌧️',
      description: 'Rain is falling.',
      theme: 'rainy',
      chip: 'Rainy theme'
    },
    thunderstorm: {
      name: 'Thunderstorm',
      emoji: '⛈️',
      description: 'Thunder and lightning with heavy rain.',
      theme: 'thunderstorm',
      chip: 'Thunderstorm theme'
    },
    snowy: {
      name: 'Snowy',
      emoji: '❄️',
      description: 'Snowfall with cold temperatures.',
      theme: 'snowy',
      chip: 'Snowy theme'
    },
    foggy: {
      name: 'Foggy',
      emoji: '🌫️',
      description: 'Reduced visibility due to fog.',
      theme: 'foggy',
      chip: 'Foggy theme'
    },
    windy: {
      name: 'Windy',
      emoji: '🌬️',
      description: 'Strong winds are blowing.',
      theme: 'windy',
      chip: 'Windy theme'
    }
  };

  // ---- DOM references ----
  const weatherCard = document.getElementById('weatherCard');
  const defaultView = document.getElementById('defaultView');
  const conditionView = document.getElementById('conditionView');
  const defaultIcon = document.getElementById('defaultIcon');
  const conditionIcon = document.getElementById('conditionIcon');
  const conditionName = document.getElementById('conditionName');
  const conditionDesc = document.getElementById('conditionDesc');
  const themeChip = document.getElementById('themeChip');
  const weatherSelect = document.getElementById('weatherSelect');
  const resetBtn = document.getElementById('resetBtn');

  // ---- State ----
  let currentKey = null;

  // ---- Helpers ----
  function setTheme(theme) {
    if (weatherCard) {
      weatherCard.setAttribute('data-theme', theme || 'default');
    }
  }

  function setIconAnimation(iconEl, theme) {
    if (!iconEl) return;
    // Remove previous animation classes.
    iconEl.classList.forEach(function (cls) {
      if (cls.indexOf('icon-anim-') === 0) iconEl.classList.remove(cls);
    });
    const animClass = 'icon-anim-' + (theme || 'default');
    iconEl.classList.add(animClass);
  }

  function showDefault() {
    currentKey = null;
    // Fade transition.
    if (conditionView && !conditionView.hidden) {
      conditionView.classList.add('is-leaving');
      window.setTimeout(function () {
        conditionView.hidden = true;
        conditionView.classList.remove('is-leaving');
        defaultView.hidden = false;
        defaultView.classList.remove('is-leaving');
      }, 180);
    } else {
      defaultView.hidden = false;
    }
    setTheme('default');
    setIconAnimation(defaultIcon, 'default');
    if (weatherSelect) weatherSelect.value = '';
  }

  function showCondition(key) {
    const data = WEATHER_DATA[key];
    if (!data) {
      showDefault();
      return;
    }
    currentKey = key;

    // Update content first.
    conditionIcon.textContent = data.emoji;
    conditionName.textContent = data.name;
    conditionDesc.textContent = data.description;
    themeChip.textContent = data.chip;

    setTheme(data.theme);
    setIconAnimation(conditionIcon, data.theme);

    // Swap views with fade.
    if (defaultView && !defaultView.hidden) {
      defaultView.classList.add('is-leaving');
      window.setTimeout(function () {
        defaultView.hidden = true;
        defaultView.classList.remove('is-leaving');
        conditionView.hidden = false;
        conditionView.classList.remove('is-leaving');
      }, 180);
    } else {
      conditionView.hidden = false;
    }
  }

  function reset() {
    showDefault();
  }

  // ---- Event listeners ----
  if (weatherSelect) {
    weatherSelect.addEventListener('change', function (event) {
      const value = event.target.value;
      if (value === '') {
        showDefault();
      } else {
        showCondition(value);
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      reset();
    });
  }

  // ---- Initialization ----
  setTheme('default');
  setIconAnimation(defaultIcon, 'default');
  defaultView.hidden = false;
  conditionView.hidden = true;

  // Expose for debugging / automated testing.
  window.__weatherDisplay = {
    WEATHER_DATA: WEATHER_DATA,
    showCondition: showCondition,
    showDefault: showDefault,
    reset: reset,
    getCurrentKey: function () { return currentKey; }
  };
})();
