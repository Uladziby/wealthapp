import "./App.css";
import "@/styles/globals.css";
import { MainTabs } from "@/ui/components/tabs";

function App() {
  return (
    <div className="flex justify-center min-h-screen py-10 bg-gray-100">
      <MainTabs />
    </div>
  );
}

export default App;
