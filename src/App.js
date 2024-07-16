import { useState } from "react";
import "./App.css";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Join from "./components/Join/Join";
import Location from "./components/Location/Location";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Schedule from "./components/Schedule/Schedule";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div className="App">
      <Hero
        showForm={showForm}
        setShowForm={setShowForm}
        handleShowForm={handleShowForm}
      />
      <Schedule />
      <Programs
        showForm={showForm}
        setShowForm={setShowForm}
        handleShowForm={handleShowForm}
      />
      <Reasons />
      <Plans
        showForm={showForm}
        setShowForm={setShowForm}
        handleShowForm={handleShowForm}
      />
      <Testimonials />
      <Join />
      <FAQ />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
