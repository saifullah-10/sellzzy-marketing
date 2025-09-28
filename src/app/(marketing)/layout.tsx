import Footer from "../../components/ui/shared/footer";
import Header from "../../components/ui/shared/header";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
            <Header />
            {children}
            <Footer />
        </main>
      </body>
    </html>
  );
}
