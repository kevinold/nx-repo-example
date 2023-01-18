import styles from './greeting.module.css';

/* eslint-disable-next-line */
export interface GreetingProps {
  appName: string;
}

export function Greeting(props: GreetingProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to {props.appName}!</h1>
    </div>
  );
}

export default Greeting;
