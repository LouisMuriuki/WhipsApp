import { PopupContextProvider } from './context/PopupContext';
import AppNav from './navigation/AppNav';

export default function App() {
  return (
    <PopupContextProvider>
      <AppNav/>
    </PopupContextProvider>
    
  );
}


