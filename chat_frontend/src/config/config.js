import {production, development} from './config.json'

const config = process.env.NODE_ENV === 'production' ? production : development
export default config