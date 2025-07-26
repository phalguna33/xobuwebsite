export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Xobu Foods</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}