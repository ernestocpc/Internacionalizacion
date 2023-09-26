import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";

const userLanguage = navigator.language || navigator.userLanguage;
const isSpanish = userLanguage.startsWith('es');

// Define the locale and messages based on the detected language
const locale = isSpanish ? 'es-ES' : 'en-US';
const messages = isSpanish ? localeEsMessages : localeEnMessages;

ReactDOM.render(
    <IntlProvider locale={locale} messages={messages}>
        <JobsList />
    </IntlProvider>, document.getElementById("root")
);
export { isSpanish };