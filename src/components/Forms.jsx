export default function Forms({ onInputForms }) {
  function handleCalculations(event, key) {
    const value = event.target.value;

    onInputForms(key, value);
  }

  return (
    <section id="user-input" className="user-input-container">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initial_investment"
            onChange={(event) => handleCalculations(event, "initialInvestment")}
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            name="annual_investment"
            onChange={(event) => handleCalculations(event, "annualInvestment")}
          />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            name="expected_return"
            onChange={(event) => handleCalculations(event, "expectedReturn")}
          />
        </div>
        <div>
          <label>Duration</label>{" "}
          <input
            type="number"
            name="duration"
            onChange={(event) => handleCalculations(event, "duration")}
          />
        </div>
      </div>
    </section>
  );
}
