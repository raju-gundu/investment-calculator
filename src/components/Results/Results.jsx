import {calculateInvestmentResults} from "../../util/investment.js";
import { formatter } from "../../util/investment.js";
export default function Results({userInput}) {
    const resultsData = calculateInvestmentResults(userInput);
    return (
        
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                
                    {resultsData.map((result) => {
                        const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year;
                        const totalAmountInvested = result.valueEndOfYear-totalInterest;
                        return(
                        <tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format( result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )})}
                
            </tbody>
        </table>
        
    );
}