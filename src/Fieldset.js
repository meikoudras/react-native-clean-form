import React from 'react'
import PropTypes from 'prop-types';
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import defaultTheme from './theme'

const FieldsetLabelText = styled.Text`
  color: ${props => props.theme.Fieldset.labelColor };
  fontSize: ${props => props.theme.Fieldset.labelSize };
  fontWeight: ${props => props.theme.Fieldset.labelWeight };
  height: ${props => props.theme.Fieldset.labelHeight };
`

FieldsetLabelText.defaultProps = {
  theme: defaultTheme
}

const FieldsetLabel = props => <View><FieldsetLabelText>{ props.children }</FieldsetLabelText></View>

const FieldsetWrapper = styled.View`
  borderBottomColor: ${props => props.theme.Fieldset.borderBottomColor };
  borderBottomWidth: ${props => props.last ? 0 : 1 };
  padding: ${props => props.theme.Fieldset.padding };
`

FieldsetWrapper.defaultProps = {
  theme: defaultTheme
}

const FieldsetFormWrapper = styled.View`

`

const Fieldset = props => {
  const { children, label, last } = props

  return (
    <FieldsetWrapper last={last}>
      { /* text-transform is for some reason not supported in react native https://github.com/facebook/react-native/issues/2088 */ }
      { label && <FieldsetLabel>{ label.toUpperCase() }</FieldsetLabel> }
      <FieldsetFormWrapper>
        { children }
      </FieldsetFormWrapper>
    </FieldsetWrapper>
  )
}

Fieldset.PropTypes = {
  last: PropTypes.bool,
  label: PropTypes.string
}

Fieldset.defaultProps = {
  last: false,
  label: false,
  theme: defaultTheme
}

export default Fieldset
