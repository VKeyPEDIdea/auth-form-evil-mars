declare module '*.module.css';

declare namespace JSX {
  interface IntrinsicElements {
    'card-box': React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >;
  }
}
