import type { PropsWithChildren } from "react";
import Footer from "./Footer";
import HeaderAdmin from "./HeaderAdmin";

export default function AdminLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <main className="">
      <HeaderAdmin />
      <section>{children}</section>
      <Footer />
    </main>
  );
}
