import { formatter } from "../util/investment";

export default function Table({ result = [] }) {
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
          result.map((res, index) => (
            <tr key={index}>
              <td>{res.year}</td>
              <td>{formatter.format(res.annualInvestment)}</td>
              <td>{formatter.format(res.interest)}</td>
              <td>{formatter.format(res.interest * res.annualInvestment)}</td>
              <td>{formatter.format(res.valueEndOfYear)}</td>
            </tr>
          ))}

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
