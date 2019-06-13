import { store } from '@things-factory/shell'
import importing from './reducers/import'

export default function bootstrap() {
  store.addReducers({
    importing
  })
}
