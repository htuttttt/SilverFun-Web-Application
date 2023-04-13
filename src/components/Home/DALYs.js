// This component is named "DALYs" and it displays a bar chart of the distribution of DALYs by broad cause group and information on musculoskeletal disorder.
// The component is part of the healthcare statistics dashboard on the "Home" page
// It fetches data from a public API (data.gov.sg) and uses the Chart.js library to render the chart.
// It also renders three cards containing information on musculoskeletal disorder.

import React from "react";
import { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import HealthcarePin from "../../assets/icons/HealthcarePin.svg"
import Button from "../Button";
Chart.register(...registerables);

const DALYs = () => {
    // initialize state variables
    const [data, setData] = useState({
        labels: [],
        datasets: [{
            label: '',
            data: [],
        }]
    });
    const [loading, setLoading] = useState(true); // set default state for loading as true

    // useEffect hook to fetch data from API when component mounts
    useEffect(() => {
        fetch(`https://data.gov.sg/api/action/datastore_search?resource_id=051f815e-326e-4973-b62f-61cad9ed3284`)
            .then(res => res.json())
            .then((usefulData) => {
                // parse data from API response and update state
                console.log(usefulData.result);
                setLoading(false);
                setData({
                    datasets: [
                        {
                            label: "type of disease",
                            data: usefulData.result.records.map((result) => result),
                            backgroundColor: [
                                "#EC5863",
                            ],
                            barThickness: 20,
                            lineWidth: 0
                        },
                    ]

                });
                console.log("data")
                console.log(data)
            })
            .catch((e) => {
                // handle error if API call fails
                console.error(`An error occurred: ${e}`)
            });
    }, []);

    return (
        <div className="mx-20 w-5/6">
            <div className="relative w-[55vw]">
                {loading === true ? <div className="w-full flex justify-center text-center">Loading...</div> :
                    <Bar
                        data={data}
                        options={{
                            parsing: {
                                xAxisKey: 'broad_cause_group',
                                yAxisKey: 'percentage',
                            },
                            plugins: {
                                title: {
                                    display: true,
                                    text: "Distribution of Disability-Adjusted Life Years by Broad Cause Group (2019)"
                                },
                                legend: {
                                    display: true,
                                    position: "bottom"
                                }
                            }
                        }}
                    />}

            </div>
            <p className="text-center py-5 italic">1 DALYs = loss of one year of full health</p>
            <div className="bg-white w-full h-min rounded-xl mb-10 py-5 px-10">
                <div className="flex justify-between items-center mb-5">
                    <h4 classNames="w-10">How to prevent musculoskeletal disorders</h4>
                    <Button classNames="text-lg" text="Schedule appointment" icon={HealthcarePin} onClickHandler={event => window.open("https://www.nuh.com.sg/patients-visitors/Appointments/Pages/default.aspx")}></Button>
                </div>
                <div className="flex justify-between">
                    <div className="bg-yellow mx-10 h-78 rounded-xl p-5">
                        <div className="w-full flex justify-center mb-4">
                            <h5 className="bg-white w-10 h-10 text-center py-1.5 rounded-3xl text-yellow">1</h5>
                        </div>
                        <p className="text-center">Spinal arthritis is common in elderly, which comes with symptoms such as stiffness, low back pain, and tension.</p>

                    </div>
                    <div className="bg-yellow h-78 rounded-xl p-5">
                        <div className="w-full flex justify-center mb-4">
                            <h5 className="bg-white w-10 h-10 text-center py-1.5 rounded-3xl text-yellow">2</h5>
                        </div>
                        <p className="text-center">Adopt an anti-inflammatory diet and try exercises such as yoga to delay detoriation.</p>

                    </div>
                    <div className="bg-yellow mx-10  h-78 rounded-xl p-5">
                        <div className="w-full flex justify-center mb-4">
                            <h5 className="bg-white w-10 h-10 text-center py-1.5 rounded-3xl text-yellow">3</h5>
                        </div>
                        <p className="text-center">Book a consultation with your doctor to learn how to use physiotherapy to slow down the progression of spinal arthritis.</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default DALYs;
