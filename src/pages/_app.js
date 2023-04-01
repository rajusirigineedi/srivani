import AppLayout from "@/Components/AppLayout/AppLayout";
import "antd/dist/reset.css";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
