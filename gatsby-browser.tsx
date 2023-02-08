import * as React from 'react'
import type { GatsbyBrowser } from 'gatsby'

import './src/styles/base.css'


// trigger an immediate page refresh when an update is found
export const onServiceWorkerUpdateReady = () => window.location.reload()
