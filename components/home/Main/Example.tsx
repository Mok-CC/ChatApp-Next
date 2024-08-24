import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import example from '@/data/example.json';
import Button from '@/components/common/button';
import { useMemo, useState } from 'react';

export default function Example() {
  const [showfull, setShowfull] = useState(false);
  const list = useMemo(() => {
    return showfull ? example : example.slice(0, 15);
  }, [showfull]);

  return (
    <>
      <div className="mb-4 mt-20 text-4xl">
        <MdOutlineTipsAndUpdates />
      </div>
      <ul className="flex flex-wrap justify-center gap-4">
        {list.map((item) => {
          return (
            <li key={item.act}>
              <Button>{item.act}</Button>
            </li>
          );
        })}
      </ul>
      {!showfull && (
        <>
          <p className="p-2">. . .</p>
          <div className="flex items-center w-full space-x-2">
            <hr className="flex-1 border-t border-dotted border-gray-200 dark:border-gray-600 " />
            <Button onClick={() => setShowfull(true)}>显示全部</Button>
            <hr className="flex-1 border-t border-dotted border-gray-200 dark:border-gray-600 " />
          </div>
        </>
      )}
    </>
  );
}
