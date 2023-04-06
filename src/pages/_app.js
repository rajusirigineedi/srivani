import AppLayout from "@/Components/AppLayout/AppLayout";
import "antd/dist/reset.css";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../../apollo-client";

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ApolloProvider>
  );
}
