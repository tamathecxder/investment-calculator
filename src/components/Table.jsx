import { formatter } from "../util/investment";

export default function Table({ result = [] }) {
  const initialInvestment =
    result.length > 0
      ? result[0].valueEndOfYear -
        result[0].interest -
        result[0].annualInvestment
      : 0;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result &&
          result.map((res, index) => {
            const totalInterest =
              res.valueEndOfYear -
              res.annualInvestment * res.year -
              initialInvestment;

            const totalAmountInvested = res.valueEndOfYear - totalInterest;

            return (
              <tr key={index}>
                <td>{res.year}</td>
                <td>{formatter.format(res.valueEndOfYear)}</td>
                <td>{formatter.format(res.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}

        {result.length === 0 && (
          <tr>
            <td className="center" colSpan={5}>
              No Investment Found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
