import "./globals.css";

export const metadata = {
  title: "HydroGeo.Space",
  description: "Hydrogeology Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
