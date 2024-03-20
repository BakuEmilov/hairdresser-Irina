import type { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function AdminLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <main className="">
      <Header />
      <section>{children}</section>
      <Footer />
    </main>
  );
}
