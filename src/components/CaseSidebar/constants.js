import Client from './Tabs/Client/'
import DatosAdjuntos from './Tabs/DatosAdjuntos/'
import Tags from './Tabs/Tags'
import Information from './Tabs/Information'
import Observations from './Tabs/Observations/'
import Records from './Tabs/Records'

export const buttonsDrawer = [
  {
    name: 'Buscar',
  },
  {
    name: 'Cliente',
  },
  {
    name: 'Observaciones',
  },
  {
    name: 'Tags',
  },
  {
    name: 'Adjuntos',
  },
  {
    name: 'Informacion',
  },
  {
    name: 'Historial',
    divider: true,
  },
  {
    name: 'Bandera',
  },
  {
    name: 'Arbol',
    divider: true,
  },
  /*{
    name: 'Exportar',
  },*/
]

export const selectComponent = (name, caseData, data, isLoading) => {
  const COMPONENT = {
    Cliente: <Client />,
    Adjuntos: <DatosAdjuntos isLoading={isLoading} attData={data} />,
    Tags: <Tags />,
    Observaciones: <Observations />,
    Historial: <Records caseData={caseData} />,
    Buscar: <Information />,
  }
  return COMPONENT[name] || null
}
