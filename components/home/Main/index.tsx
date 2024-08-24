import Menu from './Menu';
import Welcome from './Welcome';

export default function Main() {
  return (
    <div className="relative flex-1 ">
      <main className="overflow-y-auto bg-white h-full text-gray-900 dark:bg-gray-800 dark:text-gray-100">
        <Menu />
        <Welcome />
      </main>
    </div>
  );
}
