import paintings from '../../paintings.json';
import PaintingList from '../PaintingList';
import Section from '../Section';

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
