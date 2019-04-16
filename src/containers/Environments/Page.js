import React from 'react'
import PropTypes from 'prop-types'

import { FeatureToggles, Feature } from '@paralleldrive/react-feature-toggles';
import { isActiveFeatureName } from '@paralleldrive/feature-toggles';

import { ThemeProvider } from 'styled-components';
import theme from '../../presentational/Themes/Skald'

const features = ['baconx'];

const Page = ({ children }) => (
  <FeatureToggles features={features}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        { children }

        <Feature>
        {({ features }) =>
          isActiveFeatureName('bacon', features)
            ? 'Bacon'
            : 'No Bacon'
        }
        </Feature>
      </React.Fragment>
    </ThemeProvider>
  </FeatureToggles>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
