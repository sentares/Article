import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string | any
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить старницу')}</Button>
    </div>
  )
}
