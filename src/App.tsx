import './App.css'
import MobileLayout from "./Components/mobileLayout";
import LoginScreen from "./Screens/login";
import SignUpScreen from "./Screens/signup";

function App() {
  return (
     <MobileLayout>
        <LoginScreen />
        <SignUpScreen />
      </MobileLayout>
  )
}

export default App;
