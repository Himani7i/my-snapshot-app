import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import BrandKits from "./components/BrandKits";
import MetricsDashboard from "./components/MetricsDashboard";
import Navbar from "./components/Navbar";
import EmbodiedEmissions from "./components/EmbodiedEmissions";
import Chart from "./components/Chart";
import ProductCarousel from "./components/ProductCarousel";


function App() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const duration = 2000; // 2 seconds
    const totalFrames = duration / 16;

    const interval = setInterval(() => {
      frame++;
      const progress = Math.min(100, Math.floor((frame / totalFrames) * 100));
      setCount(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 200);
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  if (loading) return <Loader count={count} />;

  return (
    <div className="bg-[#fdf6f5] dark:bg-[#0f0f0f] text-zinc-800 dark:text-white min-h-screen">
      <Navbar />
      <main className="px-10 py-10 space-y-28">
        <BrandKits />
        <MetricsDashboard />

        {/* Emissions Section */}
        <section className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <EmbodiedEmissions />
          <div className="text-right lg:ml-auto space-y-2">
          </div>
        </section>

        <Chart />
       <ProductCarousel />


      </main>
    </div>
  );
}

export default App;