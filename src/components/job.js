import React from "react";
import { FormattedDate, FormattedMessage, FormattedNumber, FormattedPlural } from 'react-intl';
import { isSpanish } from "../index";

const Job = (props) => {
  return (
    <tr >
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
        <span>
          <FormattedNumber
            value={props.offer.salary}
            style="currency"
            currency="COP"
            minimumFractionDigits={0}
          />{' '}
          <FormattedPlural value={props.offer.salary} one={<FormattedMessage id="million"/>} other={<FormattedMessage id="millions"/>}/>
        </span>


      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumber
          value={props.offer.views}
        />
      </td>
    </tr>
  );
};

export default Job;
