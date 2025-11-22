export const metadata = {
  title: 'Guide Complet du E-Commerce',
  description: 'Un guide complet pour réussir dans le e-commerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
