declare module '*.module.css';

declare namespace JSX {
  interface IntrinsicElements {
    'card-box': React.DetailedHTMLProps<
      React.HTMlAttributes<HTMLElement>,
      HTMLElement
    >;
    'gradient-box': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}
