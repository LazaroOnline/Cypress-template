import generateAutoPhrases from 'picklejs/cypress'
import selectors from './selectors.json'
import { setElementSelector, setScreens } from 'picklejs/common/variables'
import screens from '../screens.json'
// import init from 'picklejs/cypress'
// init()

generateAutoPhrases()
setScreens(screens)
setElementSelector(selectors)
