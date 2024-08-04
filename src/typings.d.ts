declare module '*.module.css';

type Custom = React.DetailedHTMLProps<
  React.HTMlAttributes<HTMLElement>,
  HTMLElement
>;

declare namespace JSX {
  interface IntrinsicElements {
    'card-box': Custom;
    'card-box-actions': Custom;
    'background-box': Custom;
    'background-box-content': Custom;
    'list-grid': Custom;
    'top-bar': Custom;
    'logo-type': Custom;
  }
}
