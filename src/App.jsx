import Header from "./components/Header";
import Table from "./components/Table";
import Forms from "./components/Forms";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
    result: [],
  });

  function handleInputForms(key, value) {
    setInvestment((previousInvestment) => {
      const investmentObject = { ...previousInvestment };

      if (investmentObject.hasOwnProperty(key)) {
        const result = calculateInvestmentResults(investmentObject);

        investmentObject[key] = Number(value) || 0;
        investmentObject["result"] = result;
      }

      return investmentObject;
    });
  }

  return (
    <main className="center">
      <Header />
      <Forms onInputForms={handleInputForms} />
      <Table result={investment.result} />
    </main>
  );
}

export default App;
