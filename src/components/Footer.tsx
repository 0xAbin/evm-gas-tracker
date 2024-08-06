import { DockDemo } from "./socialDock";

export default function Footer() {
  return (
    <footer className="dark:bg-black w-full absolute bottom-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block text-indigo-600">Track Gas Cost Live</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Stay updated with the latest gas cost trends in real-time.
            </p>
            <DockDemo />
          </div>
        </div>
      </div>
    </footer>
  );
}