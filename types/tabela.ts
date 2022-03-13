export interface Resposta {
  pontos: string
  valor: string
}

export interface Pergunta {
  titulo: string
  respostas: Resposta[]
}

export interface ITabela {
  perguntas: Pergunta[]
}
