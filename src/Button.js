import React from 'react'
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'
import defaultTheme from './theme'

const ButtonWrapper = styled.View`
  flex:1;
`

const ButtonStyle = styled.View`
  backgroundColor: ${props => props.theme.Button.backgroundColor};
  height: ${props => props.theme.Button.height};
`

ButtonStyle.defaultProps = {
  theme: defaultTheme
}

const ButtonTextWrapper = styled.View`
  flex:1;
  flex-direction:row;
  align-items:center;
  justify-content:center;
`

const ButtonText = styled.Text`
  color: ${props => props.theme.Button.color};
  font-size: ${props => props.theme.Button.fontSize};
  font-weight: ${props => props.theme.Button.fontWeight};
  height: ${props => props.theme.Button.height};
  line-height: ${props => props.theme.Button.height};
`

ButtonText.defaultProps = {
  theme: defaultTheme
}

const Button = props => {
  const { children : label, icon, iconPlacement, submitting, theme, ...rest } = props

  const Touchable = Platform.OS === 'android'
    ? TouchableNativeFeedback
    : TouchableOpacity

  const formattedLabel = Platform.OS === 'android'
    ? label.toUpperCase()
    : label

  const children = [
    formattedLabel
  ]

  let IconWrapped = null
  if (icon) {
    const IconComponent = submitting
      ? <ActivityIndicator size="small" key="icon" color={theme.Button.color} />
      : <Icon key="icon" name={icon} size={14} color={theme.Button.color} />

    const prop = iconPlacement === 'left'
      ? 'marginRight'
      : 'marginLeft'

    IconWrapped = React.createElement(View, {
      children: IconComponent,
      style: {
        [prop]: 5
      }
    })
  }

  return (
    <ButtonWrapper>
      <Touchable {...rest}>
        <ButtonStyle>
          <ButtonTextWrapper>
            {
              iconPlacement === 'left' &&
                IconWrapped
            }
            <ButtonText>
              { children }
            </ButtonText>
            {
              iconPlacement === 'right' &&
                IconWrapped
            }
          </ButtonTextWrapper>
        </ButtonStyle>
      </Touchable>
    </ButtonWrapper>
  )
}

Button.PropTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconPlacement: PropTypes.oneOf(['left', 'right']),
  submitting: PropTypes.bool
}

Button.defaultProps = {
  icon: false,
  iconPlacement: 'left',
  submitting: false,
  theme: defaultTheme
}

export default Button
