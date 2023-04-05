import { FormEvent, useState } from 'react'

import { Btn, Campor, FormularioVagas } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormularioVagas onSubmit={aoEnviarForm}>
      <Campor
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Btn type="submit">Pesquisar</Btn>
    </FormularioVagas>
  )
}
export default FormVagas
