import { atom, AtomEffect, useSetRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const ssrCompletedState = atom({
  key: 'SsrCompleted',
  default: false,
})

export const useSsrComplectedState = () => {
  const setSsrCompleted = useSetRecoilState(ssrCompletedState)
  return () => setSsrCompleted(true)
}

export const { persistAtom } = recoilPersist({
  key: 'recoil.persist',
  storage: typeof window === 'undefined' ? undefined : sessionStorage,
})

export const persistAtomEffect = <T>(param: Parameters<AtomEffect<T>>[0]) => {
  param.getPromise(ssrCompletedState).then(() => persistAtom(param))
}
