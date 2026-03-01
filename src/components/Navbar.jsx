export default function Navbar() {
    return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-5m border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            <div>
                <img src="./logo.png" alt="CodeFlow" className="w-6 h-6 sm:w-8 sm:h-8"/>
            </div>
        </div>
      </div>
    </nav>
    );
}