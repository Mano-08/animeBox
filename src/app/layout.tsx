import { Syne } from "next/font/google";
import "./globals.css";
export const dynamic = "force-dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dm_sans = Syne({ subsets: ["latin-ext"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { currentUser } = await getAuthenticatedAppForUser();

  return (
    <html lang="en">
      <head>
        <title>animeBox</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={dm_sans.className}>
        <Header />
        <main className="min-h-screen w-screen">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
