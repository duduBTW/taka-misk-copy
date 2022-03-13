import { MutationTree } from 'vuex'

export const state = () => ({
  carregando: true,
  erro: null,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_CARREGANDO: (state, novoCarregando: boolean) =>
    (state.carregando = novoCarregando),
  SET_ERRO: (state, novoErro: any) => (state.erro = novoErro),
}
