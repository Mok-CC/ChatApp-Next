import ChatInput from './ChatInput';
import Example from './Example';
import ModelSelect from './ModelSelect';

export default function Welcome() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-20">
      <ModelSelect />
      <h1 className="mt-20 text-4xl font-bold">基于Next的免费ChatApp</h1>
      <Example />
      <ChatInput />
    </div>
  );
}
