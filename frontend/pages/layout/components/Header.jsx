import { Shield, Download } from "lucide-react";

function Header() {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-2xl shadow-lg m-5">
      {/* Left Section */}
      <div className="flex items-center justify-between w-full space-x-3">
        <Shield className="w-8 h-8" />
        <div className="flex items-center justify-between w-full space-x-3">
          <h1 className="text-lg font-semibold">Access Control Simulator</h1>
          <p className="text-sm opacity-80">Secure • Smart • Intuitive</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
