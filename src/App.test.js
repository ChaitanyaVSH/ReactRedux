import renderer from "react-test-renderer";
import App from './App';

test('Rendering App component', () => {
  renderer.create(<App />);
});
