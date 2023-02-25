import { LineLoadingAtom } from '@/recoil/other'
import { useRecoilValue } from 'recoil'

const LineLoading = () => {
  const isLoding = useRecoilValue(LineLoadingAtom)

  return (
    <div className={`${!isLoding ? 'invisible' : 'visible'} h-1 w-full`}>
      <div className={`h-1 bg-slate-500 transition`} />
    </div>
  )
}

export default LineLoading
