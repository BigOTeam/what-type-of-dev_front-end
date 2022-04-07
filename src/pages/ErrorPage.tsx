import useDocumentTitle from '../hooks/useDocumentTitle';

const ErrorPage: React.FC = () => {
  useDocumentTitle('Server Error | 당신이 개발자라면');

  return <div>ErrorPage</div>;
};

export default ErrorPage;
