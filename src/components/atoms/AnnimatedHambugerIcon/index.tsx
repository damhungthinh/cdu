import { useDebounce } from '@hooks/useDebounce'
import { toStyledModuleNames, toStylingName } from '@utils/styledModuleName'
import style from './styles.module.scss'

const styledModule = toStyledModuleNames(style)

type AnnimatedHambugerIconProps = {
  animated?: boolean
  onClick?: () => void
}

export const AnnimatedHambugerIcon = (props: AnnimatedHambugerIconProps) => {
  const { animated, onClick } = props

  const stateClassName = toStylingName(
    {
      animated,
      clickable: !!onClick,
    },
    true
  )

  const handleOnClick = useDebounce(onClick, 300)

  return (
    <div
      className={styledModule(`root ${stateClassName}`)}
      onClick={handleOnClick}
    >
      <div className={styledModule`container`}>
        <div className={styledModule`liner`} />
      </div>
    </div>
  )
}
