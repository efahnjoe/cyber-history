interface Window {
  theme?: {
    themeValue: string;
    setPreference: () => void;
    reflectPreference: () => void;
    getTheme: () => string;
    setTheme: (val: string) => void;
  };
  OpenCC?: {
    Converter(options: { from: string; to: string }): (text: string) => string;
  };
}
