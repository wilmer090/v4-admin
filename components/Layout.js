import React from "react";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Filter from "./Filter";
import { withRouter } from "next/router";

function Layout({ children, router }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {[
          "/",
          "/top-influencers",
          "top-change-drivers",
          "high-engagement-superstars",
          "top-authorities",
        ].includes(router.pathname) ? (
          <Filter />
        ) : null}
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default withRouter(Layout);
