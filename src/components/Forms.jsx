export default function Forms({ onInputForms }) {
  return (
    <section id="user-input" className="user-input-container">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initial_investment"
            onChange={(event) =>
              onInputForms("initialInvestment", event.target.value)
            }
            required
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            name="annual_investment"
            onChange={(event) =>
              onInputForms("annualInvestment", event.target.value)
            }
            required
          />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            name="expected_return"
            onChange={(event) =>
              onInputForms("expectedReturn", event.target.value)
            }
            required
          />
        </div>
        <div>
          <label>Duration</label>{" "}
          <input
            type="number"
            name="duration"
            onChange={(event) => onInputForms("duration", event.target.value)}
            required
          />
        </div>
      </div>
    </section>
  );
}
