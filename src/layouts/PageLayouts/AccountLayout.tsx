// Librarys
import dynamic from 'next/dynamic'

// Components
import Edit from '@assets/icons/edit'
import BoxContainer from '@containers/BoxContainer'
import UserRole from '@modules/Account/components/UserRole'
import PersonalCode from '@modules/Account/components/PersonalCode'
import AccountStatus from '@modules/Account/components/AccountStatus'
import DeleteAccount from '@modules/Account/components/DeleteAccount'
import VerifyAccount from '@modules/Account/components/VerifyAccount'
import UpdateUbigeoForm from '@modules/Account/components/UpdateUbigeo'
import ApplicationTheme from '@modules/Account/components/ApplicationTheme'
import UpdatePasswordForm from '@modules/Account/components/UpdatePassword'
import DeviceDesktopAnalytics from '@assets/icons/device-desktop-analytics'
import UpdateInformationForm from '@modules/Account/components/UpdateInformation'

// Environment variables
import { APP_NAME } from '@config/envs'

// Dynamic Components
const BoxWrapper = dynamic(() => import('@components/Wrapper'))
const BoxTitle = dynamic(() => import('@components/WrapTitle'))
const Separator = dynamic(() => import('@components/Separator'))

export default function AccountLayout() {
  return (
    <BoxContainer className="account">
      <BoxTitle
        icon={<Edit />}
        value="Actualizar mi información personal"
        popupTitle="En esta sección podrás actualizar tu información personal, como tu nombre de usuario, clave secreta, correo electrónico, foto de perfil, entre otros campos."
      />

      <BoxWrapper className="!p-0">
        <UpdateInformationForm />
        <Separator />
        <UpdateUbigeoForm />
        <Separator />
        <UpdatePasswordForm />
      </BoxWrapper>

      <BoxTitle
        value="Acciones extras"
        icon={<DeviceDesktopAnalytics />}
        popupTitle={`Aquí podrás actualizar el tema de la aplicación, descargar tu clave secreta y eliminar tu cuenta, en caso, no desees seguir registrado o registrada en ${APP_NAME}`}
      />

      <BoxWrapper className="!p-0">
        <div className="extra-options">
          <ApplicationTheme />
          <Separator />
          <AccountStatus />
          <Separator />
          <UserRole />
          <Separator />
          <PersonalCode />
          <Separator />
          <VerifyAccount />
          <DeleteAccount />
        </div>
      </BoxWrapper>
    </BoxContainer>
  )
}
