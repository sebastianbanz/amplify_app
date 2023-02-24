import { useRouteError } from "react-router-dom";
import styles from "../CSS/Error.module.css"

const fish = () => 
(
  <h1>

  </h1>

);

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.header}>
      <fish />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}