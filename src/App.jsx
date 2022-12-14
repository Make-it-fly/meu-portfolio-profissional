import BGGlowingSpheres from './components/BGGlowingSpheres';
import LanguageProvider from './contexts/languageContext';
import GlobalStyle from './globalStyles';
import Routes from './routes';

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <BGGlowingSpheres>
          <LanguageProvider>
            <Routes/>
          </LanguageProvider>
        </BGGlowingSpheres>
    </div>
  );
}

export default App;
