import Button from '@/components/common/button';
import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { MdRefresh } from 'react-icons/md';
import { PiLightningFill } from 'react-icons/pi';
import TextareaAutoSize from 'react-textarea-autosize';

export default function ChatInput() {
  const [messageText, setMessageText] = useState('');
  async function send() {
    const body = JSON.stringify({ messageText });
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        contentType: 'application/json',
      },
      body,
    });
    if (!response.ok) {
      console.log(response.statusText);
    }
    if (!response.body) {
      console.log('no response body');
      return;
    }
    const reader = response.body.getReader();
    const decoder = new TextDecoder(); // 解码
    let done = false;
    while (!done) {
      const result = await reader.read();
      done = result.done;
      const chunk = decoder.decode(result.value);
      console.log(chunk);
    }
    setMessageText('');
  }
  return (
    <div
      className="absolute bottom-0 inset-x-0 bg-gradient-to-b from-[rgba(255,255,255,0)] from-[13.94%] 
        to-[#fff] to-[54.73%] pt-10 dark:from-[rgba(53,54,64,0] dark:to-[#353740] dark:to-[58.85%]"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 space-y-5">
        <Button icon={MdRefresh} variant="primary" className="font-medium">
          重新生成
        </Button>
        <div className="flex items-end w-full border border-black/10 dark:border-gray-800 dark:bg-gray-700 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] py-4">
          <div className="mx-3 mb-2.5 ">
            <PiLightningFill />
          </div>
          <TextareaAutoSize
            className=" outline-none flex-1 max-h-64 mb-1.5 bg-transparent text-black dark:text-white resize-none border-0"
            placeholder="输入一条信息..."
            rows={1}
            value={messageText}
            onChange={(e) => {
              setMessageText(e.target.value);
            }}
          />
          <Button
            className="mx-3 !rounded-lg"
            icon={FiSend}
            variant="primary"
            onClick={send}
          />
        </div>
      </div>

      <footer className="text-center text-sm text-gray-700 dark:text-gray-300 px-4 pt-2 pb-6 flex items-center justify-center">
        ©{new Date().getFullYear()}&nbsp;
        <a
          className="font-medium border-b border-dotted border-black/60 hover:border-black/0 dark:border-gray-200 hover:bg-gray-200/0 animate-underline"
          href="https://github.com/Mok-CC/ChatApp-Next"
          target="_blank"
        >
          ChatApp-Next
        </a>
        .&nbsp; 基于第三方提供的API，仅供学习交流使用，请勿用于商业用途。
        <a href="https://github.com/Mok-CC/ChatApp-Next" target="_blank">
          <AiFillGithub />
        </a>
      </footer>
    </div>
  );
}
