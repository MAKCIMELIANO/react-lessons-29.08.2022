import paintings from '../../paintings.json';
import PaintingList from '../PaintingList/PaintingList';
import Section from '../Section/Section';

const App = () => {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>
    </div>
  );
};

export default App;
