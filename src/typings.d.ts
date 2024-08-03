declare module '*.module.css';

type Custom = React.DetailedHTMLProps<
  React.HTMlAttributes<HTMLElement>,
  HTMLElement
>;

declare namespace JSX {
  interface IntrinsicElements {
    'card-box': Custom;
    'card-box-actions': Custom;
    'gradient-box': Custom;
    'list-grid': Custom;
  }
}
