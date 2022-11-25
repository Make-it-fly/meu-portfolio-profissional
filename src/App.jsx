import BGGlowingSpheres from './components/BGGlowingSpheres';
import GlobalStyle from './globalStyles';
import Routes from './routes';

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <BGGlowingSpheres>
          <Routes/>
        </BGGlowingSpheres>
    </div>
  );
}

export default App;
