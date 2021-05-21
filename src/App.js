import Accordion from "./components/Accordion";
import SearchBar from "./components/SearchBar";
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
      <SearchBar />
    </div>
  );
};

export default App;
