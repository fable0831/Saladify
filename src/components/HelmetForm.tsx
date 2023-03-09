import { Helmet } from 'react-helmet';

function HelmetForm() {
  return (
    <Helmet>
      <link
        rel="stylesheet"
        as="style"
        crossOrigin="anonymous"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css"
      />
    </Helmet>
  );
}

export default HelmetForm;
