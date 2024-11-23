
export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 sm:p-20 gap-12 bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="w-full text-center animate-fade-in-down">
        <h1 className="text-3xl sm:text-5xl font-bold">Welcome to AWS Lionel</h1>
        <p className="mt-2 text-lg sm:text-xl text-gray-600">A space to explore and grow.</p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-8 items-center w-full max-w-3xl">
        <p className="text-center text-lg sm:text-xl animate-fade-in">
          Hello, AWS World! Welcome to my page. Let’s create something amazing together.
        </p>
        <div className="flex justify-center w-full">
          <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition duration-200 animate-bounce-once">
            Get Started
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 animate-fade-in-up">
        © 2024 Lionel Coevoet. All rights reserved.
      </footer>
    </div>
  );
}
