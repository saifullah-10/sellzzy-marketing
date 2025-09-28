import CtaSection from "@/components/ui/shared/cta";
import FaqSection from "@/components/ui/shared/faq";
import Footer from "@/components/ui/shared/footer";
import Header from "@/components/ui/shared/header";

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
            <CtaSection />
            <FaqSection />
            <Footer />
        </main>
      </body>
    </html>
  );
}
