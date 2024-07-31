declare module '*.module.css';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

declare namespace JSX {
  interface IntrinsicElements {
    'hello-world': Props;
  }
}
