import React, { useState } from "react";
import image from "../../assets/images/image1.jpg";

function PageQuery() {
  const [step, setStep] = useState(1); // Track which question we're on
  const [selections, setSelections] = useState([]); // Store all selections

  const handleOptionClick = (option) => {
    if (step === 1) {
      // First selection made
      setSelections([{ question: "What is Industry?", answer: option }]);
      setStep(2); // Move to the next question
    } else if (step === 2) {
      // Second selection made
      setSelections((prevSelections) => [
        ...prevSelections,
        {
          question: `What challenges are you facing in ${selections[0].answer} industry?`,
          answer: option,
        },
      ]);
      setStep(3); // Finalize selection to show summary
    }
  };

  const handleReset = () => {
    setStep(1); // Reset to the first question
    setSelections([]); // Clear all selections
  };

  const currentQuestion =
    step === 1
      ? "What is Industry?"
      : step === 2
        ? `What challenges are you facing in ${selections[0]?.answer} industry?`
        : "Summary";

  return (
    <section className="relative px-5 md:px-0">
      <div className="relative container mx-auto">
        <div className="max-w-[80rem] mx-auto">
          <h1 className="text-2xl sm:text-3xl w-full md:text-4xl font-medium text-center text-slate-800 px-4">
            We champion the bold to achieve the extraordinary
          </h1>
          <h1 className="text-md text-center text-gray-600 mt-4">
            Our Latest Insights offers you a window into the most pressing trends,
            in-depth analyses, and forward-looking perspectives in the
            [Industry/Field]. From industry shifts to emerging innovations, this
            section provides valuable knowledge and real-world applications.
          </h1>
          <div className="flex flex-wrap -mx-8 mt-8">
            <div className="w-full xl:w-1/2 px-4 mb-8 xl:mb-0">
              <div className="relative h-72">
                <img
                  className="block h-full w-full object-cover bg-black bg-opacity-90"
                  src={image}
                  alt="err"
                />
              </div>
            </div>
            <div className="w-full xl:w-1/2 px-6 md:px-4">
              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold text-gray-700">
                    {currentQuestion}
                  </h1>{" "}
                  {/* Displaying the current question here */}
                  <h1
                    className="underline text-sm text-gray-600 cursor-pointer"
                    onClick={handleReset}
                  >
                    Reset
                  </h1>
                </div>

                {/* Display the question based on the step */}
                <div className="mt-6">
                  {step === 1 && (
                    <div className="flex items-center justify-start flex-wrap gap-4 mt-3">
                      {[
                        "Retail",
                        "Private Equity",
                        "Advanced Manufacturing & Services",
                        "Technology",
                        "Oil & Gas",
                        "Healthcare & Life Sciences",
                        "Chemicals",
                        "Consumer Products",
                        "Mining",
                        "Financial Services",
                      ].map((option, index) => (
                        <h1
                          key={index}
                          className="border border-gray-200 px-4 py-2 rounded-full text-md text-center font-semibold cursor-pointer text-mainBlue hover:bg-mainBlue hover:text-white"
                          onClick={() => handleOptionClick(option)}
                        >
                          {option}
                        </h1>
                      ))}
                    </div>
                  )}
                  {step === 2 && (
                    <div className="flex items-center justify-start flex-wrap gap-4 mt-3">
                      {[
                        "Market Expansion",
                        "Cost Reduction",
                        "Digital Transformation",
                        "Workforce Development",
                      ].map((option, index) => (
                        <h1
                          key={index}
                          className="border border-gray-200 px-4 py-2 rounded-full text-center font-semibold cursor-pointer text-redPrimary hover:bg-redPrimary hover:text-white"
                          onClick={() => handleOptionClick(option)}
                        >
                          {option}
                        </h1>
                      ))}
                    </div>
                  )}
                  {step === 3 && (
                    <div className="mt-6">
                      <span className="font-semibold text-sm">
                        Selected filter:
                      </span>
                      <div className="flex items-start justify-start space-x-3">
                        {selections.map((selection, index) => (
                          <React.Fragment key={index}>
                            <p className="text-orangePrimary text-lg font-bold italic">
                              {selection.answer}
                            </p>
                            {index < selections.length - 1 && (
                              <span className="text-lg font-bold">+</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                      <span className="font-semibold text-sm">
                        You will be redirected to its specific page
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageQuery;
