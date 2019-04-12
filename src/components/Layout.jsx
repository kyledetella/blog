import { Header } from "./Header";

export default props => {
  const { children, title = "Kyle DeTella", pages } = props;
  return (
    <html>
      <head>
        <title>Foo</title>
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>
        <Header pages={props.pages} />
        {children}
      </body>
    </html>
  );
};
