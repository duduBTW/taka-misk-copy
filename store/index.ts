import { MutationTree } from 'vuex'

export const state = () => ({
  carregando: true,
  erro: null,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  MUDAR_CARREGANDO: (state, novoCarregando: boolean) =>
    (state.carregando = novoCarregando),
  MUDAR_ERRO: (state, novoErro: any) => (state.erro = novoErro),
}
