import { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'

import { makeStyles } from '@material-ui/core/styles'
import { Box, alpha } from '@material-ui/core'

import CollapseButton from '../../../CollapseButton'
import DynamicFormTab from '../../../DynamicFormTab'
import AssociateClients from './AssociateClients'
import BaseButton from '../../../UI/atoms/Buttons/BaseButton'
import { Context } from '../../../../context'
import {
  duplicateInputField,
  getClientAttributeValues,
} from '../../../../utils'

const useStyles = makeStyles(({ palette }) => ({
  button: {
    backgroundColor: ({ themeMode }) => palette.buttonPanelActive[themeMode],
    color: ({ themeMode }) => palette.TextButtonPanelActive[themeMode],
    '&:hover': {
      backgroundColor: alpha(palette.panel.dark, 0.8),
      color: ({ themeMode }) => palette.textPrimary[themeMode],
    },
    fontSize: '0.6875rem',
    lineHeight: '0.9375rem',
    marginLeft: '1.125rem',
    padding: '6px 12px',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    position: 'sticky',
    bottom: '0',
    width: '100%',
    height: '51px',
    display: 'flex',
    alignItems: 'center',
    zIndex: '200',
    background: palette.primary.white,
  },
}))

function ClientContent({ data }) {
  const { t } = useTranslation()
  const {
    state: { modalState },
  } = useContext(Context)

  const { buttonContainer, button } = useStyles(modalState)

  const [attrList, setAttrList] = useState(data)

  const formik = useFormik({
    initialValues: getClientAttributeValues(attrList),
    onSubmit: values => {
      console.log('FORMVALUES', values)
    },
  })

  const handleDuplicateElement = (indexGroup, indexAttr, field) => {
    setAttrList(prevState => {
      return duplicateInputField(prevState, indexGroup, indexAttr, field)
    })
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box height="100%">
        {attrList?.map(
          ({ ClientAttributeGroupName, AttributeList }, iGroup) => (
            <CollapseButton
              key={`collapse-${iGroup}`}
              buttonLabel={ClientAttributeGroupName}
              isOpen
            >
              {ClientAttributeGroupName === 'Cuentas asociadas' ? (
                <AssociateClients AttributeList={AttributeList} />
              ) : (
                AttributeList.map((field, iAttr) => (
                  <DynamicFormTab
                    key={`${field.ClientAttributeName}-${field.hash}`}
                    typeCode={field.ObjectTypeInternalCode}
                    type={field.DataTypeName}
                    id={field.hash}
                    name={
                      field.ClientAttributeId
                        ? `AttributeList.${field.ClientAttributeId}_${field.hash}`
                        : `Client.${field.ClientAttributeName}`
                    }
                    label={field.ClientAttributeName}
                    options={field.ClienAttributeItemList}
                    handleChange={formik.handleChange}
                    onDuplicate={
                      field.ClientAttributeId
                        ? () => handleDuplicateElement(iGroup, iAttr, field)
                        : false
                    }
                    maxCharacter={field.ClientAttributeQuantityCharacter}
                    required={field.ClientAttributeRequired}
                    isActive={field.ClientAttributeActiveFlag}
                    value={
                      field.ClientAttributeId
                        ? formik.values['AttributeList'][
                            `${field.ClientAttributeId}_${field.hash}`
                          ]
                        : formik.values['Client'][field.ClientAttributeName]
                    }
                  />
                ))
              )}
            </CollapseButton>
          )
        )}
      </Box>
      <Box className={buttonContainer}>
        <BaseButton className={button} type="submit">
          {t('Guardar')}
        </BaseButton>
      </Box>
    </form>
  )
}

export default ClientContent
