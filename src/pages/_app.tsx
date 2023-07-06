import Layout from "@/components/Layout";
import { Container, Paper } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Layout>
      <CssBaseline />
      <Component {...pageProps} />
    </Layout>
    </LocalizationProvider>
  );
}
