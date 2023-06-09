import React from 'react';
import {
    Row, Col,
} from 'reactstrap';
// react plugin used to create charts
import { Polar, Line } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    
} from 'components';

import {
    dashboardAllProductsChart,
} from 'variables/freelance/charts.jsx';

class FreelanceReportsBuyers extends React.Component{
    render(){

 const data1 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Buyers',
      fill: true,
      lineTension: 0.6,
      backgroundColor: 'rgba(38, 166, 154,1)',
      borderColor: 'rgba(38, 166, 154,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(38, 166, 154,1)',
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: 'rgba(38, 166, 154,1)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 2,
      pointRadius: 6,
      pointHitRadius: 10,
      data: [165, 259, 150, 65, 156, 50, 160]
    },
    {
      label: 'Projects',
      fill: true,
      lineTension: 0.4,
      backgroundColor: 'rgba(255, 138, 101,1)',
      borderColor: 'rgba(255, 138, 101,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(255, 138, 101,1)',
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: 'rgba(255, 138, 101,1)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 2,
      pointRadius: 6,
      pointHitRadius: 10,
      data: [145, 174, 260, 65, 256, 165, 170]
    }
  ]
};

const data = {
  datasets: [{
    data: [
      111,
      216,
      174,
      131,
      124
    ],
    backgroundColor: [
      '#80cbc4','#4db6ac','#26a69a','#56d4c8','#5fcec4','#b2dfdb'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'New',
    'Exclusive',
    'Pro Buyers',
    'Rated',
    'Verified'
  ]
};


// General configuration for the charts with Line gradientStroke
const gradientChartOptionsConfiguration1 = {
    maintainAspectRatio: false,
    legend: {
        display: true
    },
    tooltips: {
      bodySpacing: 4,
      mode:"nearest",
      intersect: 0,
      position:"nearest",
      xPadding:10,
      yPadding:10,
      caretPadding:10
    },
    responsive: 1,
    scales: {
        yAxes: [{
          display:0,
          ticks: {
              display: false
          },
          gridLines: {
              
              drawBorder: false
          }
        }],
        xAxes: [{
          display:0,
          ticks: {
              display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: true,
            drawBorder: false
          }
        }]
    },
    layout:{
      padding:{left:0,right:0,top:25,bottom:25}
    }
};


// General configuration for the charts with Line gradientStroke
const gradientChartOptionsConfiguration2 = {
    maintainAspectRatio: false,
    legend: {
        display: true
    },
    tooltips: {
      bodySpacing: 4,
      mode:"nearest",
      intersect: 0,
      position:"nearest",
      xPadding:10,
      yPadding:10,
      caretPadding:10
    },
    responsive: 1,
    scales: {
        yAxes: [{
          display:1,
          ticks: {
              display: true
          },
          gridLines: {
              
              drawBorder: false
          }
        }],
        xAxes: [{
          display:1,
          ticks: {
              display: true
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: true,
            drawBorder: false
          }
        }]
    },
    layout:{
      padding:{left:0,right:0,top:25,bottom:25}
    }
};

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Buyer Reports</h1>
                        </div>
                    </div>






                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Buyers Stats</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <Polar data={data} options={gradientChartOptionsConfiguration1} />
                                    </div>
                                

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">New Buyers today</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            

                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <Line data={dashboardAllProductsChart.data} options={dashboardAllProductsChart.options} />
                                    </div>

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Buyers and projects</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            


                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <Line data={data1} options={gradientChartOptionsConfiguration2} />
                                    </div>
                      


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>


                                
                        
                                  
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default FreelanceReportsBuyers;
