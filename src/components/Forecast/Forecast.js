import React from 'react';
import './Forecast.css'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

const WEEK_DAYS = ['Monday','Tuesday','Wednesday', 'Thursday', 'Friday','Saturday', 'Sunday'];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = Array.from({ length: 10 }, (_, index) => {
    const dayIndex = (dayInAWeek + index) % 7;
    return WEEK_DAYS[dayIndex];
  });

  return (
    <>
      <label className='title'>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 10).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='daily-item'>
                  <img className='icon-small' src={`icons/${item.weather[0].icon}.png`} alt='weather' />
                  <label className='day'>{forecastDays[index]} </label>
                  <label className='description'>{item.weather[0].description}</label>
                  <label className='min-max'>{Math.round(item.main.temp_min)}°c / {Math.round(item.main.temp_max)}°c</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className='daily-details-grid'>
                <div className='daily-details-grid-item'>
                  <label>Feels Like</label>
                  <label>{Math.round(item.main.feels_like)}°c</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>pressure</label>
                  <label>{item.main.pressure}hpa</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Wind Speed</label>
                  <label>{item.wind.speed} m/s </label>
                </div>
                <div className='daily-details-grid-item'>
                  <label>Sea Level</label>
                  <label>{item.main.sea_level}m </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default Forecast;
