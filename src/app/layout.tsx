import { ReduxProvider } from "@/redux/Provider";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <html lang="fa">
        <body>
          {children}
        </body>
      </html>
    </ReduxProvider>


  );
}
