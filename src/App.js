import Accordion from "./components/Accordion";
const App = () => {
  const items = [
    {
      title: "What is React?",
      content: "React is JavaScript",
    },
    {
      title: "What use React?",
      content: "React is a favorite JS framework/library among engineers",
    },
    {
      title: "How do you use React?",
      content: "Use react by creating components",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
