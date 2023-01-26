import { Component } from "react";
import styles from "../css/header.module.css";
export class Header extends Component {
  title = "Hello Mearn End";
  render() {
    return (
      <header className={styles.header}>
        <h1>{this.title}</h1>
        <p>{this.decription}</p>
        <p className={styles.test}>test</p>
      </header>
    );
  }
}
