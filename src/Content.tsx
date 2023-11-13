import { html } from 'hono/html';

type LayoutProps = {
  children: any;
};

const Layout = (props: LayoutProps) => html`
  <html>
    <body>
      ${props.children}
    </body>
  </html>
`;

const Content = () => {
  return (
    <Layout>
      <div>Hello</div>
    </Layout>
  );
};

export default Content;
