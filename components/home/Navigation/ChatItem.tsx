import { Chat } from '@/types/chat';
import { useEffect, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdCheck, MdClose, MdDeleteOutline } from 'react-icons/md';
import { PiChatBold, PiTrashBold } from 'react-icons/pi';

type Props = {
  item: Chat;
  selected: boolean;
  onSelected: (chat: Chat) => void;
};

export default function ChatItem({ item, selected, onSelected }: Props) {
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    setEditing(false);
    setDeleting(false);
  }, [selected]);

  return (
    <li
      onClick={() => onSelected(item)}
      key={item.id}
      className={`group relative flex items-center p-2 space-x-3 cursor-pointer rounded hover:bg-gray-800 ${
        selected ? 'bg-gray-800 pr-[3.5rem]' : ''
      }`}
    >
      <div>{deleting ? <PiTrashBold /> : <PiChatBold />}</div>

      {editing ? (
        <input
          autoFocus={true}
          className="flex-1 min-w-0 bg-transparent outline-none"
          defaultValue={item.title}
        />
      ) : (
        <div className="flex-1 whitespace-nowrap overflow-hidden">
          {item.title}
          <span
            className={`group-hover:from-gray-800 absolute right-0 inset-y-0 w-8 from-gray-900 bg-gradient-to-2 bg-transparent
                  ${selected ? 'from-gray-800' : 'from-gray-900'}`}
          ></span>
        </div>
      )}

      {selected && (
        <div className="absolute right-1 flex">
          {editing || deleting ? (
            <>
              <button
                onClick={(e) => {
                  setDeleting(false);
                  setEditing(false);
                  e.stopPropagation(); // 防止li元素的点击事件
                }}
              >
                <MdCheck className=" p-0.5 hover:text-white" />
              </button>
              <button
                onClick={(e) => {
                  setDeleting(false);
                  setEditing(false);
                  e.stopPropagation();
                }}
              >
                <MdClose className="p-0.5 hover:text-white" />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={(e) => {
                  setEditing(true);
                  e.stopPropagation(); // 防止li元素的点击事件
                }}
              >
                <AiOutlineEdit className=" p-0.5 hover:text-white" />
              </button>
              <button
                onClick={(e) => {
                  setDeleting(true);
                  e.stopPropagation();
                }}
              >
                <MdDeleteOutline className="p-0.5 hover:text-white" />
              </button>
            </>
          )}
        </div>
      )}
    </li>
  );
}
