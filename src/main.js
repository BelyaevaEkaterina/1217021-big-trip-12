const EVENT_COUNT = 3;

import {createTripInformationTemplate} from "./view/trip-info.js";
import {createCostInformationTemplate} from "./view/cost-info.js";
import {createMenuTemplate} from "./view/site-menu.js";
import {createFilterTemplate} from "./view/filter.js";
import {createSortTemplate} from "./view/sort.js";
import {createNewEventTemplate} from "./view/new-event.js";
import {createDayListTemplate} from "./view/day-list.js";
import {createDayTemplate} from "./view/day.js";
import {createEventInfoTemplate} from "./view/event-info.js";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.page-body`);
const siteHeaderElement = siteMainElement.querySelector(`.trip-main`);
const tripInfoElement = siteHeaderElement.querySelector(`.trip-info`);
const siteControls = siteMainElement.querySelector(`.trip-controls`);
const menuContaner = siteControls.querySelector(`.menu-contaner`);

const pageMainElement = siteMainElement.querySelector(`.page-main`);
const tripEvents = pageMainElement.querySelector(`.trip-events`);
const sortContaner = pageMainElement.querySelector(`.sort-contaner`);
const newFormContaner = pageMainElement.querySelector(`.new-form-contaner`);

render(tripInfoElement, createTripInformationTemplate(), `afterbegin`);
render(tripInfoElement, createCostInformationTemplate(), `beforeend`);
render(menuContaner, createMenuTemplate(), `afterbegin`);
render(siteControls, createFilterTemplate(), `beforeend`);

render(sortContaner, createSortTemplate(), `afterbegin`);
render(newFormContaner, createNewEventTemplate(), `afterbegin`);
render(tripEvents, createDayListTemplate(), `beforeend`);

const dayInfo = tripEvents.querySelector(`.trip-days`);
render(dayInfo, createDayTemplate(), `beforeend`);

const pointInfo = tripEvents.querySelector(`.trip-events__list`);
for (let i = 0; i < EVENT_COUNT; i++) {
  render(pointInfo, createEventInfoTemplate(), `beforeend`);
}
