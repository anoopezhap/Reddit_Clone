import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4 flex-grow bg-gray-200">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
