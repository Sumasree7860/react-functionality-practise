import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  description: string;
}

export function AccordionItem(props: AccordionItemProps) {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <div className="w-full">
      <p onClick={handleToggle} className="mb-2 cursor-pointer">
        {props.title}
      </p>
      {toggled && <div>{props.description}</div>}
    </div>
  );
}

export default function Accordion() {
  const accordionData: AccordionItemProps[] = [
    { title: "What is the capital of France?", description: "Paris" },
    { title: 'Who wrote "Romeo and Juliet"?', description: "William Shakespeare" },
    { title: "What is the largest planet in our solar system?", description: "Jupiter" },
    { title: "In which year did the Titanic sink?", description: "1912" },
    {
      title: "Who painted the Mona Lisa?",
      description: "Leonardo da Vinci",
    },
    {
      title: "What is the powerhouse of the cell?",
      description: "Mitochondria",
    },
    {
      title: "What is the currency of Japan?",
      description: "Japanese Yen",
    },
    {
      title: ' Who is known as the "Father of Computer Science"?',
      description: "Alan Turing",
    },
    {
      title: "What is the largest ocean on Earth?",
      description: "Pacific Ocean",
    },
  ];

  return (
    <div>
      {accordionData.map((item: AccordionItemProps, index: number) => (
        <div key={index}>
          <AccordionItem title={item.title} description={item.description} />
        </div>
      ))}
    </div>
  );
}
