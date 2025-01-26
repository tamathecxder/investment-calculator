export default function Forms() {
  return (
    <section id="user-input" className="user-input-container">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input type="text" name="initial_investment" />
        </div>
        <div>
          <label>Annual Investment</label>
          <input type="text" name="annual_investment" />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label>Expected Return</label>
          <input type="text" name="expected_return" />
        </div>
        <div>
          <label>Duration</label>
          <input type="text" name="duration" />
        </div>
      </div>
    </section>
  );
}
