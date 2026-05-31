import { useState, useRef, useEffect } from 'react';
import { FiMoon, FiSun, FiChevronDown } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import './ThemePicker.css';

function ThemePicker() {
  const { mode, colorTheme, toggleMode, setThemeColor, colorThemes } =
    useTheme();
  const [open, setOpen] = useState(false);
  const pickerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeTheme = colorThemes.find((t) => t.id === colorTheme);

  return (
    <div className="theme-picker" ref={pickerRef}>
      <button
        className="theme-toggle"
        onClick={toggleMode}
        aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
        title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      >
        {mode === 'light' ? <FiMoon /> : <FiSun />}
      </button>

      <div className="theme-picker__color">
        <button
          className="theme-picker__trigger"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Choose color theme"
          aria-expanded={open}
        >
          <span
            className="theme-picker__swatch"
            style={{ backgroundColor: activeTheme.swatch }}
          />
          <span className="theme-picker__label">{activeTheme.label}</span>
          <FiChevronDown
            className={`theme-picker__chevron${open ? ' theme-picker__chevron--open' : ''}`}
          />
        </button>

        {open && (
          <div className="theme-picker__dropdown">
            <p className="theme-picker__heading">Color theme</p>
            <div className="theme-picker__options">
              {colorThemes.map((theme) => (
                <button
                  key={theme.id}
                  className={`theme-picker__option${
                    theme.id === colorTheme
                      ? ' theme-picker__option--active'
                      : ''
                  }`}
                  onClick={() => {
                    setThemeColor(theme.id);
                    setOpen(false);
                  }}
                >
                  <span
                    className="theme-picker__option-swatch"
                    style={{ backgroundColor: theme.swatch }}
                  />
                  <span>{theme.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ThemePicker;
