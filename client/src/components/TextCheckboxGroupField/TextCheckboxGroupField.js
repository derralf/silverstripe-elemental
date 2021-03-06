import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import fieldHolder from 'components/FieldHolder/FieldHolder';

const TextCheckboxGroupField = (props) => {
  const { children } = props;

  const childrenWithProps = React.Children.toArray(
    React.Children.map(children, child =>
      React.cloneElement(child, { noHolder: true })
    )
  );

  // If the checkbox has been removed, just render the TextField on its own
  if (childrenWithProps.length === 1) {
    return childrenWithProps[0];
  }

  return (
    <InputGroup className="text-checkout-group-field">
      {childrenWithProps[0]}
      <InputGroupAddon addonType="append">
        <InputGroupText>{childrenWithProps[1]}</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default fieldHolder(TextCheckboxGroupField);
