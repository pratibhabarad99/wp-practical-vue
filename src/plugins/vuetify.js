import { createVuetify } from 'vuetify'

export default function setupVuetify(app) {
  const vuetify = createVuetify()

  app.use(vuetify)
}
