// File: interest.js
export function calculateCompoundInterest(principal, annualRate, years, compoundsPerYear) {
    let p = Number(principal);
    let r = Number(annualRate) / 100;
    let t = Number(years);
    let n = Number(compoundsPerYear);

    // Formula: A = P * (1 + r/n)^(nt)
    let amount = p * Math.pow(1 + (r / n), n * t);
    let interest = amount - p;

    return {
        totalAmount: amount.toFixed(2),
        compoundInterest: interest.toFixed(2)
    };
}