import "@style/global.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Loading from "./loading";
import { Suspense } from "react";
export const metadata = {
  title: "Promptopia",
  description: "Sharing AI prompt",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Rootlayout;
