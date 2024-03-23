import { Outlet } from 'react-router-dom';
import './App.css';
import NavIcon from './components/nav-icon/nav-icon';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import WeatherData from './components/weather-data/weather-data';
import PowerConsumptionData from './components/power-consumption/power-consumption-data';

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;


function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>

        <div className='App'>

          <div className='sidebar'>
            <NavIcon route="home" />
            <NavIcon route="settings" />
            <NavIcon route="statistics" />
            <NavIcon route="security" />
          </div>

          <div className='widgets_section'>
            <div className='weather_data'>
              <WeatherData />
            </div>
            
            <div className='power_consumption'>
              <PowerConsumptionData/>
            </div>
          </div>

          <Outlet/>

        </div>

      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      
    </ClerkProvider>
    
  );
}

export default App;