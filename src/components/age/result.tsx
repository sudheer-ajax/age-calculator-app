import {Card} from "../atoms/card";

export default function Result({className, results}) {
    return (
        (results.years || results.months || results.days) ?
            <Card className={`p-8 ${className}`}>
                <div>
                    <p className="font-bold font-lg-size pb-6"> Result </p>
                    <p> {results.years} Years </p>
                    <p> {results.months} Months </p>
                    <p> {results.days} Days</p>
                </div>
            </Card>
            : null
    )
}
