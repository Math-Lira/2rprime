import { UserProvider } from "./Providers/UserProvider";
import Sidebar from "./Sidebar/page";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <UserProvider>
          <div className="flex">
            {/* Sidebar fixo */}
            <Sidebar />
            {/* Main Content */}
            <main id="content" className="lg:ps-[260px] pt-[59px] lg:pt-0 w-full">
              <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-5 w-full h-full">
                <div className="p-4 flex flex-col h-full min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-40px)] bg-white border border-gray-200 shadow-sm rounded-xl w-full">
                  {/* Conteúdo do GlobalList */}
                  <div className="w-full h-full">{children}</div>
                </div>
              </div>
            </main>
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
