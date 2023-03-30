import AppLayout from "@/Components/AppLayout/AppLayout";
import "antd/dist/reset.css";
import "@/styles/globals.css";
import Head from "next/head";
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <script
          src="https://kit.fontawesome.com/1d4296eca1.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </div>
  );
}
