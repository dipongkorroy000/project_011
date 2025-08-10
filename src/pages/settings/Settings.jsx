import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const themes = ["default", "retro", "cyberpunk", "valentine", "aqua", "light"];

const Settings = () => {
  // Apply saved theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  // Handle theme change and save to localStorage
  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    document.documentElement.setAttribute("data-theme", selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  return (
    <>
      <Helmet>
        <title>Artifact | Settings</title>
      </Helmet>
      <section className="join join-vertical w-full">
        <div className="w-fit flex mx-auto my-10 gap-1 max-lg:flex-col">
          {themes.map((theme) => (
            <input
              key={theme}
              type="radio"
              name="theme-buttons"
              className="btn theme-controller join-item"
              aria-label={theme}
              value={theme}
              onChange={handleThemeChange}
              defaultChecked={localStorage.getItem("theme") === theme}
            />
          ))}
        </div>

        {/* <div className="mx-auto w-fit">
          <div className="card w-96 shadow-sm">
            <div className="card-body">
              <span className="badge badge-xs badge-warning">Most Popular</span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold ">Premium</h2>
                <span className="text-xl">$29/mo</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                {[
                  "High-resolution image generation",
                  "Customizable style templates",
                  "Batch processing capabilities",
                  "AI-driven image enhancements",
                ].map((feature) => (
                  <li key={feature}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
                {["Seamless cloud integration", "Real-time collaboration tools"].map((feature) => (
                  <li key={feature} className="opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-base-content/50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="line-through">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button className="btn btn-block">Subscribe</button>
              </div>
            </div>
          </div>
        </div> */}

        
      </section>
    </>
  );
};

export default Settings;
