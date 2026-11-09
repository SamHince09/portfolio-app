
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="not-found-page">
      <p className="welcome-text">OOPS!</p>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        Sorry, the page you're looking for doesn't exist
        or may have been moved.
      </p>

      <Link to="/" className="back-button">
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;
