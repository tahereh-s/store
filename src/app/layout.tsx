import { Provider } from "react-redux";
import { store } from "../../store-redux/store";
import { ReduxProvider } from "../../store-redux/Provider";

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
